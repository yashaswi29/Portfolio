

const Contact = () => {
    return (
        <main className="pt-32 pb-16 min-h-[80vh] relative overflow-hidden">
            <div className="absolute inset-0 blueprint-grid -z-10"></div>
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <section className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_rgba(0,86,79,0.5)]"></div>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant/60 font-label">Status: Systems Operational</span>
                    </div>
                    <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-8 leading-none">
                        Initiate <br /><span className="text-primary-container">Connection</span>
                    </h1>
                    <p className="max-w-xl text-lg text-on-surface-variant font-body leading-relaxed border-l-2 border-primary-container/20 pl-6">
                        I might join Army, because possibility of getting deployed is 100%, XD
                    </p>
                </section>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150">
                    <div className="md:col-span-7 bg-surface-container-low p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 font-label text-[10px] text-outline-variant opacity-30 select-none">
                            AUTH_REQ_STABLE
                        </div>
                        <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label className="font-label text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2" htmlFor="name">
                                    <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 0" }}>fingerprint</span>
                                    System Identifier
                                </label>
                                <input className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 text-on-surface placeholder:opacity-20 transition-all font-body" id="name" placeholder="IDENTIFY_YOURSELF" type="text" />
                            </div>
                            <div className="space-y-2">
                                <label className="font-label text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2" htmlFor="email">
                                    <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 0" }}>router</span>
                                    Endpoint
                                </label>
                                <input className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 text-on-surface placeholder:opacity-20 transition-all font-body" id="email" placeholder="USER@ENDPOINT.DOMAIN" type="email" />
                            </div>
                            <div className="space-y-2">
                                <label className="font-label text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2" htmlFor="message">
                                    <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 0" }}>subject</span>
                                    Message Body
                                </label>
                                <textarea className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 text-on-surface placeholder:opacity-20 transition-all font-body resize-none outline-none" id="message" placeholder="DESCRIBE_PAYLOAD_HERE..." rows={4}></textarea>
                            </div>
                            <button className="group flex items-center gap-4 bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-sm font-label text-xs font-bold uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all" type="submit">
                                Transmit Data
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                            </button>
                        </form>
                    </div>
                    <div className="md:col-span-5 space-y-12 pt-8">
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h3 className="font-headline text-sm font-bold tracking-widest uppercase text-on-surface-variant/40">Direct Access</h3>
                                <div className="flex flex-col gap-4">
                                    <a className="flex items-center gap-4 group" href="mailto:yashaswitiwari2003@gmail.com">
                                        <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center rounded-sm group-hover:bg-primary-fixed transition-colors">
                                            <span className="material-symbols-outlined text-primary text-xl">mail</span>
                                        </div>
                                        <span className="font-label text-sm font-medium border-b border-transparent group-hover:border-primary transition-all">yashaswitiwari2003@gmail.com</span>
                                    </a>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center rounded-sm">
                                            <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                                        </div>
                                        <span className="font-label text-sm font-medium">New Delhi, India</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4 pt-4">
                                <h3 className="font-headline text-sm font-bold tracking-widest uppercase text-on-surface-variant/40">Relay Nodes</h3>
                                <div className="flex gap-4">
                                    <a className="px-6 py-3 bg-surface-container flex items-center gap-3 hover:bg-surface-container-high transition-colors" href="https://github.com/yashaswi29" target="_blank" rel="noopener noreferrer">
                                        <span className="material-symbols-outlined text-lg">code</span>
                                        <span className="font-label text-[10px] font-bold uppercase tracking-widest">GitHub</span>
                                    </a>
                                    <a className="px-6 py-3 bg-surface-container flex items-center gap-3 hover:bg-surface-container-high transition-colors" href="https://www.linkedin.com/in/yashaswi-tiwari-5423211a8/" target="_blank" rel="noopener noreferrer">
                                        <span className="material-symbols-outlined text-lg">account_tree</span>
                                        <span className="font-label text-[10px] font-bold uppercase tracking-widest">LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-container-low/50 p-6 rounded-sm border border-outline-variant/10">
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-label text-[10px] font-bold uppercase tracking-widest text-primary">Location_Map</span>
                                <span className="font-label text-[10px] text-on-surface-variant/40">28.6139° N, 77.2090° E</span>
                            </div>
                            <div className="aspect-video w-full overflow-hidden grayscale contrast-125 opacity-70 rounded-sm pointer-events-none">
                                <iframe width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen src="https://maps.google.com/maps?q=New%20Delhi&t=&z=12&ie=UTF8&iwloc=&output=embed"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;