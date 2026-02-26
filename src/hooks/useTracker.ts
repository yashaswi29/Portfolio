import { useEffect, useCallback } from 'react';

export const useTracker = () => {
    useEffect(() => {
        if (!localStorage.getItem('session_id')) {
            localStorage.setItem('session_id', crypto.randomUUID());
        }
    }, []);

    const trackEvent = useCallback((category: string, event_type: string, target_id: string, metadata = {}) => {
        const sessionId = localStorage.getItem('session_id');
        if (!sessionId) return;

        const API_BASE = import.meta.env.DEV ? '/api/analytics' : 'https://yashaswi.cloud/api/analytics';

        fetch(`${API_BASE}/ingest`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                session_id: sessionId,
                event_category: category,
                event_type: event_type,
                target_id: target_id,
                metadata: {
                    ...metadata,
                    url: window.location.pathname
                }
            })
        }).catch(err => console.error(err)); // Fire and forget
    }, []);

    return { trackEvent };
};
