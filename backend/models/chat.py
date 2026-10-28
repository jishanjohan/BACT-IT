from pydantic import BaseModel, EmailStr, Field

from models.inquiry import ServiceInterest


class ChatSessionCreate(BaseModel):
    full_name: str = Field(min_length=2, max_length=120)
    phone: str = Field(min_length=6, max_length=40)
    email: EmailStr
    service: ServiceInterest
    purpose: str = Field(min_length=2, max_length=500)


class ChatSessionCreated(BaseModel):
    session_id: str


class ChatMessageCreate(BaseModel):
    text: str = Field(min_length=1, max_length=1000)
