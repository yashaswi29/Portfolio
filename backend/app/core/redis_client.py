import json
import hashlib

async def publish_event(redis_client, session_id: str, event_data: dict, ip: str):
    if not redis_client:
        return
    ip_hash = hashlib.sha256(ip.encode()).hexdigest()
    event_data['ip_hash'] = ip_hash
    event_data['session_id'] = session_id
    
    await redis_client.xadd("portfolio_events_stream", {"payload": json.dumps(event_data)})
