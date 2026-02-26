from sqlalchemy import Column, Integer, String, Float, DateTime, JSON, ForeignKey
from sqlalchemy.sql import func
from app.core.database import Base

class AnalyticsEvent(Base):
    __tablename__ = "analytics_events"

    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String, index=True, nullable=False)
    event_type = Column(String, index=True, nullable=False)  # 'page_visit', 'click', 'performance'
    section = Column(String, nullable=True) # Page or section name
    timestamp = Column(DateTime(timezone=True), server_default=func.now())
    ip = Column(String, nullable=True)
    user_agent = Column(String, nullable=True)
    duration = Column(Float, nullable=True)       # For performance
    target_element = Column(String, nullable=True) # For clicks
    metadata_blob = Column(JSON, nullable=True)    # For extra details
