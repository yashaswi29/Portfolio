from fastapi import APIRouter, Request, Depends, BackgroundTasks
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func, desc
from app.models.analytics import AnalyticsEvent, Session
from app.core.database import get_db
from app.core.redis_client import publish_event
import redis.asyncio as aioredis # type: ignore
import os

router = APIRouter(prefix="/api/analytics", tags=["analytics"])
async def get_redis():
    REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379/0")
    client = await aioredis.from_url(REDIS_URL)
    try:
        yield client
    finally:
        await client.aclose()

@router.post("/ingest")
async def ingest_event(request: Request, payload: dict, background_tasks: BackgroundTasks, redis_client=Depends(get_redis)):
    forwarded = request.headers.get("x-forwarded-for")
    if forwarded:
        ip = forwarded.split(",")[0].strip()
    else:
        ip = request.client.host if request.client else "127.0.0.1"
        
    session_id = payload.get('session_id', 'unknown')
    if 'metadata' not in payload:
        payload['metadata'] = {}
    
    payload['metadata']['userAgent'] = request.headers.get("user-agent", "")
    background_tasks.add_task(publish_event, redis_client, session_id, payload, ip)
    return {"status": "accepted"}

@router.get("/status/{session_id}")
async def get_session_status(session_id: str, db: AsyncSession = Depends(get_db)):
    session = await db.get(Session, session_id)
    if not session:
        return {"high_intent": False, "score": 0}
        
    score = (session.projects_viewed * 10) + (session.commands_executed * 15)
    
    return {
        "high_intent": session.high_intent,
        "score": score,
        "recommended_cta": "calendar" if session.high_intent else "none"
    }

@router.get("/sessions")
async def get_all_sessions(db: AsyncSession = Depends(get_db)):
    stmt = select(Session)
    result = await db.execute(stmt)
    sessions = result.scalars().all()
    return [
        {
            "session_id": s.session_id,
            "high_intent": getattr(s, 'high_intent', False),
            "duration": getattr(s, 'session_duration', 0),
            "last_seen": s.last_seen
        }
        for s in sessions
    ]

@router.get("/sessions/{session_id}/events")
async def get_session_events(session_id: str, db: AsyncSession = Depends(get_db)):
    import json
    stmt = (
        select(AnalyticsEvent)
        .where(AnalyticsEvent.session_id == session_id)
        .order_by(AnalyticsEvent.timestamp.asc())
    )
    result = await db.execute(stmt)
    events = result.scalars().all()
    
    return [
        {
            "event_category": e.event_category,
            "event_type": e.event_type,
            "target": e.target_id,
            "metadata": json.loads(e.metadata_payload) if isinstance(e.metadata_payload, str) else e.metadata_payload,
            "time": e.timestamp
        }
        for e in events
    ]


@router.get("/heatmap/{category}")
async def get_heatmap(category: str, db: AsyncSession = Depends(get_db)):
    stmt = (
        select(AnalyticsEvent.target_id, func.count(AnalyticsEvent.id).label('hit_count'))
        .where(AnalyticsEvent.event_category == category)
        .group_by(AnalyticsEvent.target_id)
        .order_by(desc('hit_count'))
        .limit(10)
    )
    result = await db.execute(stmt)
    return [{"target": row.target_id, "hits": row.hit_count} for row in result]
@router.post("/visit")
async def track_visit(request: Request, payload: dict, background_tasks: BackgroundTasks, redis_client=Depends(get_redis)):
    event_data = {
        "session_id": payload.get("session_id", "unknown"),
        "event_category": "ui",
        "event_type": "page_visit",
        "target_id": payload.get("section", "unknown"),
        "metadata": {"userAgent": request.headers.get("user-agent", "")}
    }
    
    forwarded = request.headers.get("x-forwarded-for")
    ip = forwarded.split(",")[0].strip() if forwarded else (request.client.host if request.client else "127.0.0.1")
    
    background_tasks.add_task(publish_event, redis_client, event_data['session_id'], event_data, ip)
    return {"status": "ok"}

@router.post("/performance")
async def track_performance(request: Request, payload: dict, background_tasks: BackgroundTasks, redis_client=Depends(get_redis)):
    event_data = {
        "session_id": payload.get("session_id", "unknown"),
        "event_category": "ui",
        "event_type": "page_performance",
        "target_id": payload.get("section", "unknown"),
        "metadata": {"duration": payload.get("duration", 0), "userAgent": request.headers.get("user-agent", "")}
    }
    
    forwarded = request.headers.get("x-forwarded-for")
    ip = forwarded.split(",")[0].strip() if forwarded else (request.client.host if request.client else "127.0.0.1")
    
    background_tasks.add_task(publish_event, redis_client, event_data['session_id'], event_data, ip)
    return {"status": "ok"}

@router.post("/event")
async def track_event(request: Request, payload: dict, background_tasks: BackgroundTasks, redis_client=Depends(get_redis)):
    event_data = {
        "session_id": payload.get("session_id", "unknown"),
        "event_category": payload.get("category", "ui"), # allow override from frontend
        "event_type": payload.get("event_type", "click"),
        "target_id": payload.get("element_id") or payload.get("target_id", "unknown"),
        "metadata": {
            "element_name": payload.get("element_name"),
            "userAgent": request.headers.get("user-agent", "")
        }
    }
    
    forwarded = request.headers.get("x-forwarded-for")
    ip = forwarded.split(",")[0].strip() if forwarded else (request.client.host if request.client else "127.0.0.1")
    
    background_tasks.add_task(publish_event, redis_client, event_data['session_id'], event_data, ip)
    return {"status": "ok"}
