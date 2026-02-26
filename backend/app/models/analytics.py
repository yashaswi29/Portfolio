from datetime import datetime
from sqlalchemy import Column, String, Integer, Boolean, Float, DateTime, ForeignKey, Index
from sqlalchemy.dialects.postgresql import UUID, JSONB
import uuid
from app.core.database import Base

class Session(Base):
    __tablename__ = "sessions"

    session_id = Column(String, primary_key=True)
    ip_hash = Column(String, index=True, nullable=False)
    user_agent = Column(String)
    start_time = Column(DateTime, default=datetime.utcnow)
    last_seen = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    session_duration = Column(Integer, default=0) # in seconds
    projects_viewed = Column(Integer, default=0)
    commands_executed = Column(Integer, default=0)
    resume_page_viewed = Column(Boolean, default=False)
    high_intent = Column(Boolean, default=False)
    
    __table_args__ = (
        Index('idx_session_intent', 'high_intent'),
    )

class AnalyticsEvent(Base):
    __tablename__ = "analytics_events"
    __table_args__ = {'extend_existing': True}

    id = Column(String, primary_key=True)
    session_id = Column(String, index=True)
    event_type = Column(String, index=True, nullable=False) # e.g., infra_node_click, terminal_command_executed
    event_category = Column(String, index=True, nullable=False) # infra, terminal, project, ui
    target_id = Column(String, nullable=True) # e.g., 'auth-service-node', 'ls'
    metadata_payload = Column(String, default="{}") # using string for easy JSON in SQLite/Postgres
    timestamp = Column(DateTime, default=datetime.utcnow)

