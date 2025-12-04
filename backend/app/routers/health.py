from fastapi import APIRouter
from app.core.storage import update_health

router = APIRouter(prefix="/api/health", tags=["health"])

@router.get("")
async def health_check():
    return update_health()
