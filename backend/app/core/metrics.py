from prometheus_client import Counter, Histogram, Gauge

REQUEST_COUNT = Counter('requests_total', 'Total HTTP requests', ['method', 'endpoint', 'status_code'])
REQUEST_DURATION = Histogram('request_duration_seconds', 'HTTP request duration', ['method', 'endpoint'])
PAGE_VISITS = Counter('page_visits_total', 'Visits by section', ['section'])
PAGE_LOAD_DURATION = Histogram('page_load_duration_seconds', 'Page load duration', ['section'])
ACTIVE_CONNECTIONS = Gauge('active_connections', 'Active HTTP connections')
ERROR_COUNT = Counter('errors_total', 'Total errors by type', ['error_type'])
