import json
import logging
import os
import uuid
from datetime import datetime, timezone

from emergentintegrations.llm.chat import LlmChat, StreamDone, TextDelta, UserMessage
from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse

from lib.bact_knowledge import build_system_prompt
from lib.db import db
from models.chat import ChatMessageCreate, ChatSessionCreate, ChatSessionCreated

router = APIRouter()
logger = logging.getLogger(__name__)

MODEL_PROVIDER = "anthropic"
MODEL_NAME = "claude-opus-5-5"
MAX_USER_MESSAGES = 40


def _sse(payload: dict) -> str:
    return f"data: {json.dumps(payload, ensure_ascii=False)}\n\n"


@router.post("/chat/sessions", response_model=ChatSessionCreated, status_code=201)
async def create_chat_session(body: ChatSessionCreate) -> ChatSessionCreated:
    now = datetime.now(timezone.utc)
    session_id = str(uuid.uuid4())
    inquiry_id = str(uuid.uuid4())
    # The chat's opening questions double as an enquiry, stored alongside contact-form enquiries.
    await db.inquiries.insert_one(
        {
            "id": inquiry_id,
            "full_name": body.full_name,
            "organization": "",
            "email": body.email,
            "phone": body.phone,
            "service": body.service,
            "message": f"Chat assistant enquiry. Purpose: {body.purpose}",
            "source": "chat",
            "created_at": now,
        }
    )
    await db.chat_sessions.insert_one(
        {
            "id": session_id,
            "inquiry_id": inquiry_id,
            "full_name": body.full_name,
            "purpose": body.purpose,
            "created_at": now,
        }
    )
    return ChatSessionCreated(session_id=session_id)


@router.post("/chat/sessions/{session_id}/messages")
async def send_chat_message(session_id: str, body: ChatMessageCreate) -> StreamingResponse:
    session = await db.chat_sessions.find_one({"id": session_id})
    if not session:
        raise HTTPException(status_code=404, detail="Chat session not found")

    history = await db.chat_messages.find({"session_id": session_id}).sort("created_at", 1).to_list(200)
    if sum(1 for m in history if m["role"] == "user") >= MAX_USER_MESSAGES:
        raise HTTPException(status_code=429, detail="Message limit reached for this chat")

    system_prompt = build_system_prompt(session["full_name"], session["purpose"])
    initial_messages = [{"role": "system", "content": system_prompt}] + [
        {"role": m["role"], "content": m["content"]} for m in history
    ]
    await db.chat_messages.insert_one(
        {"session_id": session_id, "role": "user", "content": body.text, "created_at": datetime.now(timezone.utc)}
    )

    chat = LlmChat(
        api_key=os.environ["EMERGENT_LLM_KEY"],
        session_id=session_id,
        system_message=system_prompt,
        initial_messages=initial_messages,
    ).with_model(MODEL_PROVIDER, MODEL_NAME)

    async def event_stream():
        parts: list[str] = []
        try:
            async for event in chat.stream_message(UserMessage(text=body.text)):
                if isinstance(event, TextDelta):
                    parts.append(event.content)
                    yield _sse({"delta": event.content})
                elif isinstance(event, StreamDone):
                    break
            reply = "".join(parts).strip()
            if reply:
                await db.chat_messages.insert_one(
                    {
                        "session_id": session_id,
                        "role": "assistant",
                        "content": reply,
                        "created_at": datetime.now(timezone.utc),
                    }
                )
            yield _sse({"done": True})
        except Exception:
            logger.exception("chat stream failed for session %s", session_id)
            yield _sse({"error": "The assistant is unavailable right now."})

    return StreamingResponse(
        event_stream(),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )
