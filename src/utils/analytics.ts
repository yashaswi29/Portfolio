import axios from 'axios';

const STORAGE_KEY = 'portfolio_session_id';
const API_BASE = import.meta.env.DEV
    ? '/analytics'
    : 'https://yashaswi.cloud/api/analytics';
const generateSessionId = () => {
    return 'sess_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
};
const getSessionId = () => {
    let sessionId = sessionStorage.getItem(STORAGE_KEY);
    if (!sessionId) {
        sessionId = generateSessionId();
        sessionStorage.setItem(STORAGE_KEY, sessionId);
    }
    return sessionId;
};
const sendEvent = async (endpoint: string, data: Record<string, unknown>) => {
    try {
        const sessionId = getSessionId();
        await axios.post(`${API_BASE}${endpoint}`, {
            ...data,
            session_id: sessionId,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Analytics error:', error);
    }
};

export const Analytics = {
    trackVisit: (section: string) => {
        sendEvent('/visit', { section });
    },

    trackPerformance: (section: string, duration: number) => {
        sendEvent('/performance', { section, duration });
    },

    trackClick: (page: string, elementId: string, elementName: string, eventType: string = 'click') => {
        sendEvent('/event', {
            event_type: eventType,
            page,
            element_id: elementId,
            element_name: elementName,
            section: page // usually same as page
        });
    }
};
