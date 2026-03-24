import { useTracker } from '../hooks/useTracker';

const About = () => {
    const { trackEvent } = useTracker();

    return (
        <div className="animate-in fade-in duration-1000 w-full overflow-hidden">
            {/* Hero Section */}
            <section className="relative w-full h-[70vh] min-h-[500px] mb-32 flex flex-col justify-end pb-24 overflow-hidden shadow-2xl border-b border-primary/10">
                {/* Background Image Setup */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen scale-105 transform origin-center"
                    style={{ backgroundImage: "url('/hero-night.jpg')" }}
                ></div>
                {/* Overlay Gradients for smooth blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent md:w-3/4"></div>

                <div className="max-w-screen-2xl mx-auto px-8 relative z-10 w-full">
                    <div className="max-w-4xl">
                        <span className="text-primary font-mono text-sm tracking-widest uppercase mb-6 block drop-shadow-md">Engineer Profile // 01</span>
                        <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter mb-8 leading-none bg-gradient-to-br from-on-surface via-primary to-on-surface-variant bg-clip-text text-transparent pb-4 drop-shadow-2xl">
                            Building, Testing, <br /><span className="italic text-primary drop-shadow-[0_0_15px_rgba(0,80,125,0.8)]">Breaking.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-on-surface max-w-3xl leading-relaxed font-light drop-shadow-lg">
                            Engineering isn't a title; it's a practical curiosity. I focus on high-performance systems and automated infrastructure, driven by the need to understand exactly how the machine works under the hood.
                        </p>
                    </div>
                </div>
            </section>



            {/* Systemic Evolution (Professional) */}
            <section className="max-w-screen-2xl mx-auto px-8 mb-32 relative">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3">
                        <h2 className="text-4xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">Systemic Evolution</h2>
                        <p className="text-on-surface-variant font-light leading-relaxed">Transitioning curiosity into enterprise-grade reliability. From local servers to global cloud footprints.</p>
                    </div>
                    <div className="md:w-2/3 space-y-16 relative before:content-[''] before:absolute before:left-0 before:top-4 before:bottom-4 before:w-px before:bg-outline-variant/30 pl-12">
                        {/* AFI Full Time */}
                        <div className="relative group hover:translate-x-2 transition-transform duration-300">
                            <div className="absolute -left-[53px] top-1 w-2.5 h-2.5 bg-primary rounded-full group-hover:scale-150 transition-transform ring-4 ring-primary/20"></div>
                            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">Sept 2024 — Present // Noida, India</span>
                            <h3 className="text-2xl font-bold mb-1 text-on-surface">Cloud Engineer</h3>
                            <h4 className="text-lg font-medium mb-4 text-on-surface-variant">AFI Digital Services LLP</h4>
                            <ul className="text-on-surface-variant leading-relaxed space-y-3 mb-6 list-disc ml-4">
                                <li>Engineered a Python-based automated backup pipeline for K3s that orchestrates Neo4j and PostgreSQL dumps and syncs them to Azure Blob Storage, ensuring overall data recoverability.</li>
                                <li>Completed the end-to-end migration of a complex NoSQL content platform from Azure Cosmos DB to Neo4j, transforming document-centric data into a relationship-driven graph model spanning 7 types of entities.</li>
                                <li>Automated infrastructure setup with Terraform to avoid environment drift and keep development and production in sync.</li>
                            </ul>
                        </div>
                        {/* AFI Intern */}
                        <div className="relative group hover:translate-x-2 transition-transform duration-300">
                            <div className="absolute -left-[53px] top-1 w-2.5 h-2.5 bg-outline-variant rounded-full group-hover:bg-primary group-hover:scale-150 transition-all ring-4 ring-transparent group-hover:ring-primary/20"></div>
                            <span className="text-on-surface-variant font-bold text-xs uppercase tracking-widest mb-2 block group-hover:text-primary transition-colors">Sep 2024 — Mar 2025 // Noida, India</span>
                            <h3 className="text-2xl font-bold mb-1 text-on-surface">Cloud Engineer Intern</h3>
                            <h4 className="text-lg font-medium mb-4 text-on-surface-variant">AFI Digital Services LLP</h4>
                            <ul className="text-on-surface-variant leading-relaxed space-y-3 mb-6 list-disc ml-4">
                                <li>Developed Python automation to analyze and eliminate redundant media assets across cloud storage, reducing application footprint by up to 60% and significantly improving download speed and offline usability.</li>
                                <li>Implemented monitoring and validation checks to ensure data integrity across storage layers and automated processing jobs.</li>
                                <li>Collaborated one-on-one with the CTO on migration planning, testing strategies, and production rollout safety.</li>
                            </ul>
                        </div>
                        {/* Wipro */}
                        <div className="relative group hover:translate-x-2 transition-transform duration-300">
                            <div className="absolute -left-[53px] top-1 w-2.5 h-2.5 bg-outline-variant rounded-full group-hover:bg-primary group-hover:scale-150 transition-all ring-4 ring-transparent group-hover:ring-primary/20"></div>
                            <span className="text-on-surface-variant font-bold text-xs uppercase tracking-widest mb-2 block group-hover:text-primary transition-colors">Jul 2024 — Aug 2024 // Gurugram, India</span>
                            <h3 className="text-2xl font-bold mb-1 text-on-surface">DevOps-Cloud Trainee</h3>
                            <h4 className="text-lg font-medium mb-4 text-on-surface-variant">Wipro Limited</h4>
                            <ul className="text-on-surface-variant leading-relaxed space-y-3 mb-6 list-disc ml-4">
                                <li>Automated provisioning of AWS infrastructure using Terraform, enabling reproducible environments across networking, compute, and storage layers.</li>
                                <li>Migrated Jenkins configurations, plugins, and jobs between servers using Jenkins Configuration as Code (JCasC), Jenkins CLI, and Python automation, improving portability and operational consistency.</li>
                                <li>Integrated GitHub Actions pipelines to support continuous integration and automated deployment workflows.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Stack Removed Remotely */}

            {/* CTA Section */}
            <section className="max-w-screen-2xl mx-auto px-8 mb-12">
                <div className="relative overflow-hidden bg-on-surface text-surface py-24 px-12 md:px-24 rounded-3xl group">
                    <div className="relative z-10 max-w-3xl">
                        <h2 className="text-5xl font-bold tracking-tighter mb-8 leading-tight">Ready to build something <span className="text-primary-fixed-dim bg-gradient-to-r from-primary-fixed-dim to-primary-fixed bg-clip-text text-transparent">stable</span>?</h2>
                        <p className="text-surface-dim text-lg mb-10 font-light leading-relaxed">Whether it's cloud architecture, devops consultation, or a career-defining opportunity, I'm always looking for the next challenging system to build.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://drive.google.com/file/d/1wIg32b4i0kFla4_Yt6L7_5941WtnhpU1/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-primary-container transition-colors text-center shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95" onClick={() => trackEvent('ui', 'about_cta', 'resume')}>Download Resume</a>
                            <a href="https://github.com/yashaswi29" target="_blank" rel="noreferrer" className="border border-surface-dim/30 text-surface px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-surface/10 transition-colors text-center active:scale-95" onClick={() => trackEvent('ui', 'about_cta', 'github')}>View GitHub Repository</a>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-1000">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                            <path d="M0 100 L100 0 L100 100 Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;