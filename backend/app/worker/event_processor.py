import asyncio
import json
import logging
from datetime import datetime
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.models.analytics import Session, AnalyticsEvent
from app.core.database import SessionLocal
from app.rules.detection import evaluate_high_intent
import uuid

logger = logging.getLogger(__name__)

async def process_stream_batch(redis_client):
    if not redis_client:
        return
        
    try:
        try:
            await redis_client.xgroup_create("portfolio_events_stream", "portfolio_cg", mkstream=True)
        except Exception:
            pass # Group already exists
            
        streams = await redis_client.xreadgroup(
            "portfolio_cg", "worker-1", {"portfolio_events_stream": ">"}, count=50
        )
        
        if not streams:
            return
            
        async with SessionLocal() as db:
            for stream, messages in streams:
                for message_id, message in messages:
                    payload = json.loads(message[b"payload"])
                    event_id = str(uuid.uuid4())
                    event = AnalyticsEvent(
                        id=event_id,
                        session_id=payload['session_id'],
                        event_type=payload['event_type'],
                        event_category=payload['event_category'],
                        target_id=payload.get('target_id'),
                        metadata_payload=json.dumps(payload.get('metadata', {}))
                    )
                    db.add(event)
                    await update_session_stats(db, payload)
                    await redis_client.xack("portfolio_events_stream", "portfolio_cg", message_id)
            
            await db.commit()
    except Exception as e:
        logger.error(f"Error processing stream: {e}")

async def update_session_stats(db: AsyncSession, payload: dict):
    session_id = payload['session_id']
    session = await db.get(Session, session_id)
    if not session:
        session = Session(
            session_id=session_id,
            ip_hash=payload.get('ip_hash', ''),
            user_agent=payload.get('metadata', {}).get('userAgent', ''),
            start_time=datetime.utcnow(),
            last_seen=datetime.utcnow(),
            projects_viewed=0,
            commands_executed=0,
            resume_page_viewed=False,
            session_duration=0,
            high_intent=False
        )
        db.add(session)
    if getattr(session, 'projects_viewed', None) is None:
        session.projects_viewed = 0
    if getattr(session, 'commands_executed', None) is None:
        session.commands_executed = 0
    if getattr(session, 'start_time', None) is None:
        session.start_time = datetime.utcnow()
    session.last_seen = datetime.utcnow()
    if payload['event_category'] == 'project' and payload['event_type'] == 'view':
        session.projects_viewed += 1
    elif payload['event_category'] == 'terminal' and payload['event_type'] == 'command_executed':
        session.commands_executed += 1
        cmd = payload.get('target_id', 'unknown')
        from app.core.metrics import PORTFOLIO_TERMINAL_USAGE
        PORTFOLIO_TERMINAL_USAGE.labels(command=cmd[:20]).inc()
    elif payload['event_category'] == 'ui' and payload.get('target_id') == 'resume':
        session.resume_page_viewed = True
        
    session.session_duration = int((session.last_seen - session.start_time).total_seconds())
    
    from app.core.metrics import PORTFOLIO_SESSION_DURATION, PORTFOLIO_HIGH_INTENT, PORTFOLIO_SESSIONS_TOTAL
    
    if session.session_duration > 0:
        PORTFOLIO_SESSION_DURATION.observe(session.session_duration)
        
    was_high_intent = getattr(session, 'high_intent', False) or False
    session.high_intent = evaluate_high_intent(session)
    
    if not was_high_intent and session.high_intent:
        PORTFOLIO_HIGH_INTENT.inc()
    
async def start_worker(redis_client):
    logger.info("Starting Redis event consumer worker...")
    while True:
        await process_stream_batch(redis_client)
        await asyncio.sleep(1) # Poll interval
