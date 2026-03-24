import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SystemNavbar: React.FC = () => {
    const location = useLocation();

    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-50/70 backdrop-blur-xl border-b border-slate-200/20">
            <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
                <Link to="/" className="text-2xl font-black tracking-tighter text-slate-900 font-headline uppercase">
                    Yashaswi's space
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/about" className={`font-headline tracking-tight text-sm uppercase font-bold transition-colors ${location.pathname === '/about' ? 'text-sky-700 border-b-2 border-sky-700 pb-1' : 'text-slate-500 hover:text-slate-900'}`}>
                        Experience
                    </Link>
                    <Link to="/projects" className={`font-headline tracking-tight text-sm uppercase font-bold transition-colors ${location.pathname === '/projects' ? 'text-sky-700 border-b-2 border-sky-700 pb-1' : 'text-slate-500 hover:text-slate-900'}`}>
                        Projects
                    </Link>
                    <Link to="/contact" className="px-6 py-2 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline text-sm uppercase font-bold tracking-widest active:scale-95 transition-transform hover:opacity-90">
                        Contact Me
                    </Link>
                </div>
                <div className="md:hidden flex items-center">
                    <span className="material-symbols-outlined text-on-surface cursor-pointer">menu</span>
                </div>
            </div>
        </nav>
    );
};

export default SystemNavbar;
