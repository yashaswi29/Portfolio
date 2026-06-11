from pydantic import BaseModel, Field
from typing import Optional, Literal

class VisitEvent(BaseModel):
    session_id: str
    section: str
    timestamp: Optional[str] = None
    ip: Optional[str] = None
    user_agent: Optional[str] = None

class PerformanceEvent(BaseModel):
    session_id: str
    section: str
    duration: float
    timestamp: Optional[str] = None

class ClickEvent(BaseModel):
    session_id: str
    event_type: str = Field(..., description="Type of event, e.g., click, hover, view")
    element_id: Optional[str] = None
    element_name: Optional[str] = None
    page: str
    section: Optional[str] = None
    ip: Optional[str] = None
    user_agent: Optional[str] = None
    timestamp: Optional[str] = None

class HealthStatus(BaseModel):
    status: str
    last_check: str

class ContactMessage(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: str = Field(..., min_length=3, max_length=200)
    message: str = Field(..., min_length=1, max_length=5000)
