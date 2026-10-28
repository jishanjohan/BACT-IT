from datetime import datetime, timezone
from typing import Literal
import uuid

from pydantic import BaseModel, EmailStr, Field


ServiceInterest = Literal[
    "Software Solutions",
    "ICT Infrastructure",
    "Cybersecurity",
    "AI Solutions",
    "IT Training",
    "Study Abroad",
    "Digital Marketing",
    "BAIDA Platform",
    "General enquiry",
]


class InquiryCreate(BaseModel):
    full_name: str = Field(min_length=2, max_length=120)
    organization: str = Field(default="", max_length=160)
    email: EmailStr
    phone: str = Field(default="", max_length=40)
    service: ServiceInterest
    message: str = Field(min_length=10, max_length=4000)


class InquiryCreated(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    received: bool = True
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))