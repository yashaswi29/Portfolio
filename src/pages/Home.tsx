import { useTracker } from '../hooks/useTracker';
import { Link } from 'react-router-dom';

const Home = () => {
    const { trackEvent } = useTracker();

    return (
        <>
            {/* Hero Section: The Architectural Foundation */}
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden blueprint-grid">
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full">
                                <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                                <span className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">
                                    System: Live &amp; Scaling
                                </span>
                            </div>
                            <h1 className="font-headline text-6xl md:text-8xl font-bold text-on-surface tracking-tighter leading-[0.9]">
                                AUTOMATING <br />
                                <span className="text-primary italic">CHAOS.</span>
                            </h1>
                            <p className="max-w-xl text-lg md:text-xl text-on-surface-variant leading-relaxed">
                                DevOps &amp; Cloud Engineer focused on reliable infrastructure, automation, and scalable deployment pipelines. Building practical systems for cloud and platform teams.
                            </p>
                            <div className="flex flex-wrap gap-0 pt-4">
                                <Link
                                    to="/contact"
                                    className="px-8 py-5 bg-[#00507d] text-white font-headline font-bold uppercase tracking-[0.15em] text-[13px] hover:bg-[#003f63] transition-colors flex items-center justify-center min-w-[240px]"
                                    onClick={() => trackEvent('ui', 'hero_click', 'deploy_infra')}
                                >
                                    Deploy Infrastructure
                                </Link>
                                <Link
                                    to="/projects"
                                    className="px-8 py-5 border-[1.5px] border-slate-200 text-[#001d32] font-headline font-bold uppercase tracking-[0.15em] text-[13px] hover:bg-slate-50 transition-colors flex items-center justify-center min-w-[240px] bg-transparent backdrop-blur-sm"
                                    onClick={() => trackEvent('ui', 'hero_click', 'view_arch')}
                                >
                                    View Architecture
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 aspect-square relative group">
                            <div className="absolute inset-0 bg-primary-container/10 -rotate-3 transition-transform group-hover:rotate-0"></div>
                            <img
                                alt="Workspace Setup"
                                className="relative z-10 w-full h-full object-cover shadow-2xl rounded-sm ring-1 ring-black/10"
                                src="/setup.jpg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Competencies: Bento Grid */}
            <section className="py-16 bg-surface-container-low">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="mb-12 border-l-4 border-primary pl-6">
                        <h2 className="font-headline text-sm uppercase tracking-[0.3em] text-primary font-bold mb-2">
                            Core Competencies
                        </h2>
                        <p className="font-headline text-4xl font-bold tracking-tight">
                            Logical Workstreams
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 p-8 bg-surface-container-lowest shadow-sm flex flex-col justify-between min-h-[320px]">
                            <div>
                                <span className="material-symbols-outlined text-4xl text-primary mb-6">cloud</span>
                                <h3 className="font-headline text-2xl font-bold mb-4">Cloud Architecture &amp; Migration</h3>
                                <p className="text-on-surface-variant max-w-md">
                                    Designing and migrating cloud environments across AWS and Azure with a focus on reliability, simplicity, and cost efficiency.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-8">
                                <span className="px-3 py-1 bg-surface-container text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant flex items-center gap-1.5">
                                    <span className="w-1 h-1 bg-primary rounded-full"></span>AWS EC2/S3
                                </span>
                                <span className="px-3 py-1 bg-surface-container text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant flex items-center gap-1.5">
                                    <span className="w-1 h-1 bg-primary rounded-full"></span>Azure DevOps
                                </span>
                                <span className="px-3 py-1 bg-surface-container text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant flex items-center gap-1.5">
                                    <span className="w-1 h-1 bg-primary rounded-full"></span>CloudFormation
                                </span>
                            </div>
                        </div>

                        <div className="p-8 bg-primary text-on-primary flex flex-col justify-between min-h-[320px]">
                            <div>
                                <span className="material-symbols-outlined text-4xl text-on-primary-container mb-6">terminal</span>
                                <h3 className="font-headline text-2xl font-bold mb-4">Infrastructure as Code</h3>
                                <p className="text-on-primary-container/80">
                                    Provisioning and managing infrastructure with Terraform and Ansible.
                                </p>
                            </div>
                            <div className="text-4xl font-black opacity-20 font-headline self-end">v1.4.2</div>
                        </div>

                        <div className="p-8 bg-surface-container-highest flex flex-col justify-between min-h-[320px]">
                            <div>
                                <span className="material-symbols-outlined text-4xl text-primary mb-6">layers</span>
                                <h3 className="font-headline text-2xl font-bold mb-4">Containerization</h3>
                                <p className="text-on-surface-variant">
                                    Containerizing applications and managing services across Docker, Podman, and K3s environments.
                                </p>
                            </div>
                            <div className="mt-8">
                                <div className="h-1 w-full bg-outline-variant overflow-hidden">
                                    <div className="h-full bg-primary w-4/5"></div>
                                </div>
                                <div className="flex justify-between mt-2 text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                                    <span>Optimization</span>
                                    <span>80%</span>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-2 p-8 bg-surface-container-lowest shadow-sm flex flex-col md:flex-row gap-8 items-center min-h-[320px]">
                            <div className="flex-1">
                                <span className="material-symbols-outlined text-4xl text-tertiary mb-6">monitoring</span>
                                <h3 className="font-headline text-2xl font-bold mb-4">Observability Stack</h3>
                                <p className="text-on-surface-variant">
                                    Building observability with Prometheus, Grafana, and centralized logging to improve visibility into system health and performance.
                                </p>
                            </div>
                            <div className="w-full md:w-48 h-full bg-surface-container rounded-lg p-4 flex flex-col gap-2">
                                <div className="h-8 w-full bg-tertiary/10 rounded-sm"></div>
                                <div className="h-12 w-full bg-tertiary/20 rounded-sm"></div>
                                <div className="h-6 w-full bg-tertiary/30 rounded-sm"></div>
                                <div className="h-16 w-full bg-tertiary/40 rounded-sm"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Let's Connect CTA */}
            <section className="py-20 relative overflow-hidden" id="contact">
                <div className="absolute inset-0 bg-primary opacity-5 -z-10"></div>
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <span className="material-symbols-outlined text-6xl text-primary mb-6 animate-bounce">terminal</span>
                    <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
                        READY TO <span className="text-primary">BUILD?</span>
                    </h2>
                    <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
                        Open to roles in Infrastructure Engineering, Site Reliability, and Cloud Platform Engineering.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <a
                            className="px-12 py-5 bg-primary text-on-primary font-headline font-bold uppercase tracking-[0.2em] text-sm active:scale-95 transition-all flex items-center justify-center gap-3"
                            href="mailto:yashaswi@example.com"
                        >
                            Start a Conversation <span className="material-symbols-outlined">send</span>
                        </a>
                        <a
                            className="px-12 py-5 border-2 border-primary text-primary font-headline font-bold uppercase tracking-[0.2em] text-sm hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-3"
                            href="#"
                        >
                            Download Resume <span className="material-symbols-outlined">download</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;