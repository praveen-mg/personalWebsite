from fastapi import APIRouter
from pydantic import BaseModel, EmailStr

router = APIRouter()


class ContactMessage(BaseModel):
    name: str
    email: str
    message: str


@router.post("/")
def send_message(body: ContactMessage):
    # In production this will save to Azure SQL and/or send an email
    print(f"Message from {body.name} <{body.email}>: {body.message}")
    return {"success": True, "message": "Thanks for reaching out! I'll get back to you soon."}
