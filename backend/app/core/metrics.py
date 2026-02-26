from prometheus_client import Counter, Histogram, Gauge

REQUEST_COUNT = Counter('requests_total', 'Total HTTP requests', ['method', 'endpoint', 'status_code'])
REQUEST_DURATION = Histogram('request_duration_seconds', 'HTTP request duration', ['method', 'endpoint'])
PAGE_VISITS = Counter('page_visits_total', 'Visits by section', ['section'])
PAGE_LOAD_DURATION = Histogram('page_load_duration_seconds', 'Page load duration', ['section'])
ACTIVE_CONNECTIONS = Gauge('active_connections', 'Active HTTP connections')
ERROR_COUNT = Counter('errors_total', 'Total errors by type', ['error_type'])

PORTFOLIO_SESSIONS_TOTAL = Counter('portfolio_sessions_total', 'Total unique sessions tracking')
PORTFOLIO_HIGH_INTENT = Counter('portfolio_high_intent_sessions', 'Count of detected recruiter/high-intent sessions')
PORTFOLIO_TERMINAL_USAGE = Counter('portfolio_terminal_usage', 'Commands executed', ['command'])
PORTFOLIO_SESSION_DURATION = Histogram('portfolio_avg_session_duration_seconds', 'Session duration distribution', buckets=[60, 180, 300, 600, 1200])
PORTFOLIO_PROJECT_INTEREST = Gauge('portfolio_project_interest_score', 'Current aggregate interest score across active sessions')
