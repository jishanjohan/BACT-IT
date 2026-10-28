import csv
import io
import os
from datetime import timezone
from typing import Optional

import requests
from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import StreamingResponse
from starlette.concurrency import run_in_threadpool

from clerk_auth import require_user
from lib.db import db
from models.admin import AdminMe, ChatTranscriptMessage, InquiryAdmin, InquiryStatus, InquiryStatusUpdate

router = APIRouter(prefix="/admin")


def _admin_emails() -> set[str]:
    return {e.strip().lower() for e in os.environ.get("ADMIN_EMAIL", "").split(",") if e.strip()}


def _fetch_verified_emails(user_id: str) -> list[str]:
    r = requests.get(
        f"https://api.clerk.com/v1/users/{user_id}",
        timeout=10,
        headers={"Authorization": f"Bearer {os.environ['CLERK_SECRET_KEY']}", "User-Agent": "emergent-app"},
    )
    r.raise_for_status()
    return [
        e["email_address"].lower()
        for e in r.json()["email_addresses"]
        if (e.get("verification") or {}).get("status") == "verified"
    ]


async def current_staff(user: dict = Depends(require_user)) -> dict:
    """Signed-in person with their verified emails (looked up from Clerk once, then cached)."""
    uid = user["user_id"]
    doc = await db.users.find_one({"user_id": uid}, {"_id": 0})
    if doc is None:
        emails = await run_in_threadpool(_fetch_verified_emails, uid)
        doc = {"user_id": uid, "emails": emails}
        await db.users.update_one({"user_id": uid}, {"$setOnInsert": doc}, upsert=True)
    emails = doc.get("emails", [])
    # Admin access follows ADMIN_EMAIL on every request, so editing the list takes effect immediately.
    return {"user_id": uid, "email": emails[0] if emails else "", "is_admin": bool(set(emails) & _admin_emails())}


async def require_admin(staff: dict = Depends(current_staff)) -> dict:
    if not staff["is_admin"]:
        raise HTTPException(status_code=403, detail="Not allowed")
    return staff


def _utc(dt):
    return dt.replace(tzinfo=timezone.utc) if dt.tzinfo is None else dt


async def _load_inquiries(status: Optional[InquiryStatus]) -> list[InquiryAdmin]:
    query = {"status": status} if status and status != "new" else {}
    if status == "new":
        query = {"status": {"$in": ["new", None]}}
    docs = await db.inquiries.find(query, {"_id": 0}).sort("created_at", -1).to_list(2000)
    chat_ids = [d["id"] for d in docs if d.get("source") == "chat"]
    sessions = await db.chat_sessions.find({"inquiry_id": {"$in": chat_ids}}, {"_id": 0, "id": 1, "inquiry_id": 1}).to_list(2000)
    by_inquiry = {s["inquiry_id"]: s["id"] for s in sessions}
    return [
        InquiryAdmin(
            **{**d, "status": d.get("status") or "new", "source": d.get("source") or "form", "created_at": _utc(d["created_at"])},
            chat_session_id=by_inquiry.get(d["id"]),
        )
        for d in docs
    ]


@router.get("/me", response_model=AdminMe)
async def admin_me(staff: dict = Depends(current_staff)) -> AdminMe:
    return AdminMe(email=staff["email"], is_admin=staff["is_admin"])


@router.get("/inquiries", response_model=list[InquiryAdmin])
async def list_inquiries(status: Optional[InquiryStatus] = None, _: dict = Depends(require_admin)):
    return await _load_inquiries(status)


@router.patch("/inquiries/{inquiry_id}", response_model=InquiryAdmin)
async def update_inquiry_status(inquiry_id: str, body: InquiryStatusUpdate, _: dict = Depends(require_admin)):
    result = await db.inquiries.update_one({"id": inquiry_id}, {"$set": {"status": body.status}})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Not found")
    items = [i for i in await _load_inquiries(None) if i.id == inquiry_id]
    return items[0]


@router.get("/chats/{session_id}", response_model=list[ChatTranscriptMessage])
async def chat_transcript(session_id: str, _: dict = Depends(require_admin)):
    if not await db.chat_sessions.find_one({"id": session_id}):
        raise HTTPException(status_code=404, detail="Not found")
    msgs = await db.chat_messages.find({"session_id": session_id}, {"_id": 0}).sort("created_at", 1).to_list(500)
    return [ChatTranscriptMessage(role=m["role"], content=m["content"], created_at=_utc(m["created_at"])) for m in msgs]


@router.get("/inquiries.csv")
async def export_inquiries(_: dict = Depends(require_admin)):
    buffer = io.StringIO()
    buffer.write("\ufeff")  # BOM so Excel opens Bangla text correctly
    writer = csv.writer(buffer)
    writer.writerow(["Date (UTC)", "Name", "Organization", "Email", "Phone", "Service", "Message", "Source", "Status"])
    for i in await _load_inquiries(None):
        writer.writerow([
            i.created_at.strftime("%Y-%m-%d %H:%M"), i.full_name, i.organization, i.email, i.phone,
            i.service, i.message, i.source, i.status,
        ])
    return StreamingResponse(
        iter([buffer.getvalue()]),
        media_type="text/csv; charset=utf-8",
        headers={"Content-Disposition": 'attachment; filename="bact-it-enquiries.csv"'},
    )
