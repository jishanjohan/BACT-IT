from fastapi import APIRouter

from lib.db import db
from models.inquiry import InquiryCreate, InquiryCreated


router = APIRouter()


@router.post("/inquiries", response_model=InquiryCreated, status_code=201)
async def create_inquiry(inquiry: InquiryCreate) -> InquiryCreated:
    created = InquiryCreated()
    document = {
        **inquiry.model_dump(),
        "id": created.id,
        "created_at": created.created_at,
    }
    await db.inquiries.insert_one(document)
    return created