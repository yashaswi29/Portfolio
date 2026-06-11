from fastapi import APIRouter, Request, HTTPException
from datetime import datetime
import logging

from app.models.schemas import ContactMessage
from app.core.storage import save_contact_message

router = APIRouter(prefix="/api", tags=["contact"])
logger = logging.getLogger(__name__)


@router.post("/contact")
async def submit_contact(payload: ContactMessage, request: Request):
    forwarded = request.headers.get("x-forwarded-for")
    ip = forwarded.split(",")[0].strip() if forwarded else (
        request.client.host if request.client else "127.0.0.1"
    )

    record = {
        "name": payload.name.strip(),
        "email": payload.email.strip(),
        "message": payload.message.strip(),
        "ip": ip,
        "user_agent": request.headers.get("user-agent", ""),
        "received_at": datetime.now().isoformat(),
    }

    try:
        save_contact_message(record)
    except Exception as exc:  # noqa: BLE001
        logger.error("Failed to save contact message: %s", exc)
        raise HTTPException(status_code=500, detail="Failed to save message")

    logger.info("Contact message received from %s", record["email"])
    return {"success": True}
