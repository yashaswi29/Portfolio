import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full py-12 border-t border-slate-200 bg-slate-100">
            <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6">
                <div className="text-lg font-bold text-slate-900 font-headline uppercase tracking-tighter">
                    yashaswi tiwari
                </div>
                <div className="font-label text-[10px] tracking-widest uppercase text-slate-500">
                    © 2026. BUILT FOR SCALE.
                </div>
                <div className="flex gap-6">
                    <a className="text-slate-400 hover:text-sky-500 transition-colors" href="https://github.com/yashaswi29" target="_blank" rel="noreferrer">
                        <span className="material-symbols-outlined">terminal</span>
                    </a>
                    <a className="text-slate-400 hover:text-sky-500 transition-colors" href="https://hashnode.com/@yashaswiyeezy" target="_blank" rel="noreferrer">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
                    </a>
                    <a className="text-slate-400 hover:text-sky-500 transition-colors" href="mailto:yashaswi@example.com">
                        <span className="material-symbols-outlined">mail</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;