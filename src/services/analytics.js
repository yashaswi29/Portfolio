import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api/analytics';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const analytics = {
    trackVisit: async (section) => {
        try {
            await api.post('/visit', {
                section,
                timestamp: new Date().toISOString(),
            });
        } catch (error) {
            console.error('Failed to track visit:', error);
        }
    },

    trackPerformance: async (section, duration) => {
        try {
            await api.post('/performance', {
                section,
                duration,
                timestamp: new Date().toISOString(),
            });
        } catch (error) {
            console.error('Failed to track performance:', error);
        }
    },

    trackEvent: async (event) => {
        try {
            await api.post('/event', {
                ...event,
                timestamp: new Date().toISOString(),
            });
        } catch (error) {
            console.error('Failed to track event:', error);
        }
    },
};
