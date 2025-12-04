from fastapi.testclient import TestClient
from app.main import app
import os
import json

client = TestClient(app)

def test_health():
    response = client.get("/api/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"
    print("Health check passed")

def test_visit():
    response = client.post("/api/analytics/visit", json={"section": "home"})
    assert response.status_code == 200
    print("Visit tracking passed")

def test_performance():
    response = client.post("/api/analytics/performance", json={"section": "home", "duration": 0.5})
    assert response.status_code == 200
    print("Performance tracking passed")

def test_event():
    response = client.post("/api/analytics/event", json={
        "event_type": "click",
        "element_id": "cta-button",
        "page": "/home"
    })
    assert response.status_code == 200
    print("Event tracking passed")

def test_summary():
    response = client.get("/api/analytics/summary")
    assert response.status_code == 200
    data = response.json()
    assert "total_visits" in data
    print("Summary check passed")

def test_metrics():
    response = client.get("/metrics")
    assert response.status_code == 200
    assert b"requests_total" in response.content
    print("Metrics check passed")

if __name__ == "__main__":
    # Ensure data dir exists for tests
    os.makedirs("data", exist_ok=True)
    
    try:
        test_health()
        test_visit()
        test_performance()
        test_event()
        test_summary()
        test_metrics()
        print("\nAll tests passed successfully!")
    except Exception as e:
        print(f"\nTests failed: {e}")
        exit(1)
