import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Analytics } from '../utils/analytics';

const AnalyticsTracker = () => {
    const location = useLocation();
    const startTime = useRef<number>(Date.now());

    // Track page visits and time spent
    useEffect(() => {
        const pageObj = location.pathname === '/' ? 'home' : location.pathname.replace('/', '');

        // Track visit
        Analytics.trackVisit(pageObj);

        // Track performance (time spent on previous page)
        return () => {
            const duration = (Date.now() - startTime.current) / 1000; // seconds
            if (duration > 0.5) { // ignore quick flips
                Analytics.trackPerformance(pageObj, duration);
            }
            startTime.current = Date.now();
        };
    }, [location]);

    // Track all clicks
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Find the nearest clickable element (button, link, input)
            const clickable = target.closest('button, a, input, [role="button"]');

            if (clickable) {
                const element = clickable as HTMLElement;
                const id = element.id || '';
                const text = element.innerText || element.getAttribute('aria-label') || element.getAttribute('name') || '';
                const page = location.pathname;

                // Don't track if no meaningful info
                if (!id && !text) return;

                Analytics.trackClick(page, id, text.substring(0, 50)); // limit text length
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [location]);

    return null; // This component handles side effects only
};

export default AnalyticsTracker;
