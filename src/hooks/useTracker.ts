/// <reference types="vite/client" />
import { useEffect, useCallback } from 'react';

export const useTracker = () => {
    useEffect(() => {
        if (!localStorage.getItem('session_id')) {
            let uuid: string;
            
            try {
                if (typeof window !== 'undefined' && window.crypto && window.crypto.randomUUID) {
                    uuid = window.crypto.randomUUID();
                } else {
                    uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                        const r = Math.random() * 16 | 0;
                        const v = c === 'x' ? r : (r & 0x3 | 0x8);
                        return v.toString(16);
                    });
                }
            } catch {
                uuid = 'sess_' + Math.random().toString(36).substring(2, 10);
            }
            
            localStorage.setItem('session_id', uuid);
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
