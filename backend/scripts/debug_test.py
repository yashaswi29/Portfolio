from fastapi.testclient import TestClient
from app.main import app
import traceback

client = TestClient(app)

try:
    resp = client.post("/api/analytics/visit", json={"section": "home"})
    print("Status:", resp.status_code)
    print("Response:", resp.json())
except Exception as e:
    print("Exception occurred during debug POST:")
    traceback.print_exc()

print('\nFinished debug run')
