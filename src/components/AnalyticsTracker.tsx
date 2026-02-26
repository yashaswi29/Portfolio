import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Analytics } from '../utils/analytics';
import { useTracker } from '../hooks/useTracker';

const AnalyticsTracker = () => {
    const location = useLocation();
    const { trackEvent } = useTracker();
    const startTime = useRef<number>(Date.now());
    const scrollMilestones = useRef(new Set<number>());
    useEffect(() => {
        const pageObj = location.pathname === '/' ? 'home' : location.pathname.replace('/', '');
        scrollMilestones.current.clear();
        Analytics.trackVisit(pageObj);
        return () => {
            const duration = (Date.now() - startTime.current) / 1000;
            if (duration > 0.5) {
                Analytics.trackPerformance(pageObj, duration);
            }
            startTime.current = Date.now();
        };
    }, [location]);
    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = window.scrollY;

            if (scrollHeight <= 0) return;

            const scrollPercent = (scrollPosition / scrollHeight) * 100;
            const milestones = [25, 50, 75, 100];

            for (const milestone of milestones) {
                if (scrollPercent >= milestone - 1 && !scrollMilestones.current.has(milestone)) {
                    scrollMilestones.current.add(milestone);
                    trackEvent('ui', 'scroll_depth', location.pathname, { depth: milestone });
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname, trackEvent]);
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const clickable = target.closest('button, a, input, [role="button"]');

            if (clickable) {
                const element = clickable as HTMLElement;
                const id = element.id || '';
                const text = element.innerText || element.getAttribute('aria-label') || element.getAttribute('name') || '';
                const page = location.pathname;
                if (!id && !text) return;

                Analytics.trackClick(page, id, text.substring(0, 50));
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [location]);

    return null;
};

export default AnalyticsTracker;
