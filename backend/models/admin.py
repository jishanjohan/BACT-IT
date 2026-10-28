from datetime import datetime
from typing import Literal, Optional

from pydantic import BaseModel

InquiryStatus = Literal["new", "contacted", "closed"]


class AdminMe(BaseModel):
    email: str
    is_admin: bool


class InquiryAdmin(BaseModel):
    id: str
    full_name: str
    organization: str = ""
    email: str
    phone: str = ""
    service: str
    message: str
    source: str = "form"
    status: InquiryStatus = "new"
    created_at: datetime
    chat_session_id: Optional[str] = None


class InquiryStatusUpdate(BaseModel):
    status: InquiryStatus


class ChatTranscriptMessage(BaseModel):
    role: Literal["user", "assistant"]
    content: str
    created_at: datetime
