def evaluate_high_intent(session) -> bool:
    if session.high_intent:
        return True # Already marked
        
    duration = (session.last_seen - session.start_time).total_seconds()
    
    intent_score = 0
    if duration > 180:
        intent_score += 1
    if session.projects_viewed >= 2:
        intent_score += 1
    if session.commands_executed >= 3:
        intent_score += 1
    if session.resume_page_viewed:
        intent_score += 2
    return (duration > 180 and intent_score >= 1) or intent_score >= 2
