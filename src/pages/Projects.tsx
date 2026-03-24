import { useTracker } from '../hooks/useTracker';
import { Link } from 'react-router-dom';

const Projects = () => {
    const { trackEvent } = useTracker();

    return (
        <>
            {/* Hero Section */}
            <header className="relative pt-32 pb-24 px-8 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10"></div>
                <div className="absolute inset-0 technical-grid opacity-50 -z-10"></div>
                <div className="max-w-7xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface-container-high rounded-full mb-8 shadow-sm animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                        <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold">Status: Live Environment</span>
                    </div>
                    <h1 className="font-headline text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tight text-on-surface mb-6 max-w-4xl leading-[1.1] animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                        The Lab: <br /><span className="text-primary italic drop-shadow-sm">Building, Breaking, and Fixing.</span>
                    </h1>
                    <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        A collection of experiments, self-hosted infrastructure, and the pursuit of <span className="text-on-surface font-semibold underline decoration-primary-fixed-dim decoration-4 underline-offset-4">automating chaos</span>.
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-8 py-12 space-y-32">
                {/* Section: The Foundation */}
                <section id="foundation">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-4 sticky top-24">
                            <h2 className="font-headline text-sm uppercase tracking-[0.3em] text-primary font-bold mb-2">Base Infrastructure</h2>
                            <h3 className="font-headline text-4xl font-bold tracking-tight mb-4">The Foundation</h3>
                            <p className="text-on-surface-variant leading-relaxed mb-6 font-light">
                                Every system needs a solid base. My work starts with a physical headless Debian 13 server—the silent engine behind this very portfolio.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-surface-container px-3 py-1.5 rounded-full text-[10px] uppercase tracking-tighter font-bold flex items-center gap-1.5 border border-outline-variant/10 shadow-sm">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> DEBIAN 13
                                </span>
                                <span className="bg-surface-container px-3 py-1.5 rounded-full text-[10px] uppercase tracking-tighter font-bold flex items-center gap-1.5 border border-outline-variant/10 shadow-sm">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> HEADLESS
                                </span>
                                <span className="bg-surface-container px-3 py-1.5 rounded-full text-[10px] uppercase tracking-tighter font-bold flex items-center gap-1.5 border border-outline-variant/10 shadow-sm">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> SELF-HOSTED
                                </span>
                            </div>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="bg-surface-container-lowest p-8 md:p-12 relative overflow-hidden group rounded-3xl border border-outline-variant/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                                <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                                    <div className="flex-1">
                                        <h4 className="font-headline text-2xl font-bold mb-4">Bare Metal Homelab</h4>
                                        <p className="text-on-surface-variant mb-4 text-sm leading-relaxed">
                                            Moving away from managed services to understand the full stack. This server manages my personal cloud, CI/CD runners, and secure networking via WireGuard. It is the playground where chaos is intentionally introduced and systematically resolved.
                                        </p>
                                        <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
                                            This lab is my experimental playground for infrastructure automation, managing cloud storage to cut down on costs, and pushing limits to understand real-world challenges like 99% availability and fault tolerance — all hands-on.
                                        </p>
                                        <div className="space-y-3 border-l-2 border-primary/30 pl-4">
                                            <div className="text-xs font-mono text-primary font-bold">UPTIME: 99.98%</div>
                                            <div className="text-xs font-mono text-on-surface-variant uppercase tracking-widest">OS: Debian GNU/Linux 13 (trixie)</div>
                                            <div className="text-xs font-mono text-on-surface-variant uppercase tracking-widest">Kernel: 6.1.0-amd64</div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-64 h-64 bg-slate-900 rounded-2xl overflow-hidden flex items-center justify-center relative shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-slate-700">
                                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-950/80"></div>
                                        <span className="material-symbols-outlined text-6xl text-sky-500/30 scale-[2] group-hover:text-primary transition-colors duration-500">terminal</span>
                                        <div className="absolute bottom-4 left-4 right-4 bg-slate-800/90 p-3 rounded-lg text-xs font-mono text-sky-400 border border-slate-700 shadow-inner flex items-center gap-2">
                                            <span className="text-slate-500">$</span> systemctl status portfolio <span className="w-1.5 h-4 bg-primary animate-pulse ml-auto"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section: Technical Proofs */}
                <section className="space-y-16" id="proofs">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-primary/10 pb-8">
                        <div>
                            <h2 className="font-headline text-sm uppercase tracking-[0.3em] text-primary font-bold mb-2">Artifacts</h2>
                            <h3 className="font-headline text-4xl font-bold tracking-tight">Technical Proofs</h3>
                            <p className="text-on-surface-variant mt-2 font-light">Turning manual work into predictable systems.</p>
                        </div>
                        <div className="text-xs font-label uppercase tracking-widest font-bold text-outline">
                            Directory: 02 Units
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Project 1 */}
                        <div className="bg-surface-container-lowest p-8 md:p-12 hover:bg-white transition-all duration-500 rounded-3xl shadow-md hover:shadow-2xl border border-outline-variant/10 hover:-translate-y-2 group">
                            <h4 className="font-headline text-3xl font-bold mb-6 text-on-surface">Jenkins Migration Toolkit</h4>
                            <p className="text-on-surface-variant mb-8 leading-relaxed text-[15px] font-light">
                                Jenkins Migration Toolkit is a DevOps project built to make it easier to move Jenkins jobs, plugins, and server configurations from one Jenkins server to another. Instead of manually recreating jobs and reinstalling plugins, this toolkit uses Python scripts, Jenkins CLI, and shell scripts to automate the migration process. It helps reduce errors, saves time, and makes the transition between Jenkins environments much smoother. <span className="text-primary hover:underline cursor-pointer"></span>
                            </p>
                            <div className="flex flex-wrap gap-2 mb-10">
                                {['Jenkins', 'Python', 'JCasC', 'Shell Scripting', 'CI/CD'].map((tag) => (
                                    <span key={tag} className="px-4 py-1.5 bg-surface-container-low text-xs font-bold text-on-surface-variant rounded-full border border-outline-variant/10 shadow-sm leading-tight block">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Link to="#" className="inline-flex items-center text-sm font-bold tracking-wide text-[#5D5FEF] hover:text-primary transition-all" onClick={() => trackEvent('ui', 'project_click', 'jenkins_toolkit')}>
                                GitHub
                            </Link>
                        </div>
                        {/* Project 2 */}
                        <div className="bg-surface-container-lowest p-8 md:p-12 hover:bg-white transition-all duration-500 rounded-3xl shadow-md hover:shadow-2xl border border-outline-variant/10 hover:-translate-y-2 group">
                            <h4 className="font-headline text-3xl font-bold mb-6 text-on-surface">Data Platform Automation</h4>
                            <p className="text-on-surface-variant mb-6 leading-relaxed text-[15px] font-light">
                                Engineered a Python-based automated backup pipeline for K3s that orchestrates Neo4j and PostgreSQL dumps and syncs them to Azure Blob Storage, ensuring overall data recoverability.
                            </p>
                            <ul className="text-on-surface-variant mb-8 leading-relaxed text-[15px] font-light space-y-2 list-disc ml-4">
                                <li>Completed the end-to-end migration of a complex NoSQL content platform from Azure Cosmos DB to Neo4j, transforming document-centric data into a relationship-driven graph model spanning 7 types of entities.</li>
                                <li>Automated infrastructure setup with Terraform to avoid environment drift and keep development and production environments synchronized.</li>
                            </ul>
                            <div className="flex flex-wrap gap-2 mb-10">
                                {['Python', 'Neo4j', 'PostgreSQL', 'Azure', 'Terraform', 'Cosmos DB'].map((tag) => (
                                    <span key={tag} className="px-4 py-1.5 bg-surface-container-low text-xs font-bold text-on-surface-variant rounded-full border border-outline-variant/10 shadow-sm leading-tight block">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Link to="#" className="inline-flex items-center text-sm font-bold tracking-wide text-[#5D5FEF] hover:text-primary transition-all" onClick={() => trackEvent('ui', 'project_click', 'data_platform_automation')}>
                            </Link>
                        </div>
                    </div>
                </section>


            </main>
        </>
    );
};

export default Projects;