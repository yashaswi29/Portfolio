import React, { useEffect, useState } from 'react';

export const EngagementDetector: React.FC = () => {
    const [isHighIntent, setIsHighIntent] = useState(false);
    const [ctaShown, setCtaShown] = useState(false);

    useEffect(() => {
        const checkStatus = async () => {
            if (ctaShown) return;
            const sessionId = localStorage.getItem('session_id');
            if (!sessionId) return;

            const API_BASE = import.meta.env.DEV ? '/api/analytics' : 'https://yashaswi.cloud/api/analytics';

            try {
                const res = await fetch(`${API_BASE}/status/${sessionId}`);
                const data = await res.json();

                if (data.high_intent) {
                    setIsHighIntent(true);
                    setCtaShown(true);
                }
            } catch (err) {
                console.error(err);
            }
        };
        const interval = setInterval(checkStatus, 15000);
        return () => clearInterval(interval);
    }, [ctaShown]);

    if (!isHighIntent) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-xl shadow-2xl text-white max-w-sm" style={{ animation: "fadeInUp 0.8s ease-out forwards" }}>
            <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                <span className="text-2xl animate-wave inline-block origin-bottom-right">👋</span>
                Hey there!
            </h3>
            <p className="text-sm mb-5 text-indigo-50 leading-relaxed">
                I noticed you're really digging into the details of my projects!
                If you're looking for someone to help build and automate your cloud infrastructure, I'd love to chat.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
                <a
                    href="mailto:yashaswitiwari2003@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-white text-indigo-700 px-4 py-2.5 rounded-lg font-bold hover:bg-indigo-50 transition text-center shadow-lg"
                >
                    Let's Connect
                </a>
                <button
                    onClick={() => setIsHighIntent(false)}
                    className="flex-1 px-4 py-2.5 border border-white/30 hover:bg-white/10 rounded-lg transition font-medium"
                >
                    Dismiss
                </button>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px) scale(0.9); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes wave {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(-20deg); }
                    50% { transform: rotate(10deg); }
                    75% { transform: rotate(-10deg); }
                }
                .animate-wave {
                    animation: wave 1.5s infinite;
                }
            `}</style>
        </div>
    );
};
