import React, { useState, useEffect } from 'react';
import { Database, Layers, Network, Sparkles, Route, BookOpen, Server } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { useTracker } from '../hooks/useTracker';

const Projects: React.FC = () => {
  const { trackEvent } = useTracker();
  const [showMoreTools, setShowMoreTools] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    trackEvent('project', 'view', 'projects_page');
  }, [trackEvent]);

  const homeLabTechnologies = ['Debian', 'k3s', 'Airtel 100Mbps', 'Python Scripting'];

  const jarvisTech = ['Python', 'FastAPI', 'PostgreSQL 17', 'pgvector', 'Redis / arq', 'Ollama', 'Docker'];
  const jarvisHighlights = [
    { icon: <Route size={18} />, label: 'Learning-path generation: turns your own material into ordered paths with prerequisites and difficulty ratings.' },
    { icon: <BookOpen size={18} />, label: 'On-demand "Explain This" teaching modes and an execution planner — with graceful degradation for slow local models.' },
    { icon: <Database size={18} />, label: 'Hybrid retrieval: Postgres full-text (tsvector + GIN) fused with pgvector cosine similarity via Reciprocal Rank Fusion.' },
    { icon: <Layers size={18} />, label: 'Multi-format ingestion (HTML, PDF, Word, Excel, image OCR) feeding a concept knowledge graph + 1024-dim embeddings, off the request path.' },
  ];

  const projects = [
    {
      title: 'Jarvis — Local-First AI Learning Pathway',
      description: 'A self-hosted AI study companion that turns your saved links, PDFs, and notes into guided learning paths — generating prerequisites, difficulty ratings, a concept knowledge graph, and step-by-step paths, with on-demand "Explain This" teaching modes. Hybrid semantic + keyword retrieval runs entirely over locally-run LLMs — no cloud API cost or keys.',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Ollama', 'Docker'],
    },
    {
      title: 'Jenkins Migration Toolkit',
      description: 'Built a Python-based toolkit to automate Jenkins job, plugin, and configuration migration between servers using Jenkins CLI and JCasC. Reduced manual intervention in CI/CD environment transitions.',
      technologies: ['Jenkins', 'Python', 'JCasC', 'Shell Scripting', 'CI/CD'],
      githubUrl: 'https://github.com/yashaswi29/Jenkins-Migration-Tool',
    },
    {
      title: 'ChatApp with Real-Time CI/CD Pipeline',
      description: 'Developed a real-time chat application featuring dynamic rooms and seamless communication, backed by a robust CI/CD pipeline. The pipeline automates build, security scanning, containerization, and deployment, ensuring rapid and secure delivery on AWS EC2 instances. Additionally, wrote Terraform scripts to automate the infrastructure provisioning of the ChatApp on AWS.',
      technologies: ['Jenkins', 'Docker', 'OWASP', 'EC2', 'Terraform'],
      githubUrl: 'https://github.com/yashaswi29/CICD-Realtime-ChatApp.git',
    },
    {
      title: '11-Microservices CI/CD Pipeline System',
      description: 'Built a production-grade CI/CD pipeline system for 11 independent microservices using Jenkins, Docker, and Kubernetes. Each microservice features its own isolated pipeline for building, testing, containerizing, and deploying, ensuring modular scalability and faster development cycles. Integrated security scans, parallelized deployments, and blue/green strategies enhance reliability and speed. The system also includes Terraform for infrastructure provisioning and Prometheus/Grafana for observability.',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Python', 'Microservices'],
      githubUrl: 'https://github.com/yashaswi29/11-Microservice-CICD.git',
    },
  ];

  return (
    <div
      className={`bg-white dark:bg-primary-900 pt-16 pb-24 transition-colors duration-300 min-h-screen transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div className="bg-terminal-grid pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl">
            <p className="font-mono text-sm text-accent mb-3">
              <span className="text-primary-400">$</span> ls ~/projects
            </p>
            <h1 className="font-mono text-4xl sm:text-5xl font-bold text-primary-900 dark:text-[#F8F8F8] mb-4">
              <span className="text-accent">#</span> Projects
            </h1>
            <p className="text-xl text-primary-600 dark:text-primary-300">
              Cloud infrastructure, backend systems, databases, and self-hosted AI.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured (Jarvis + HomeLab, back to back) */}
        <h2 className="font-mono text-2xl font-bold text-primary-900 dark:text-[#F8F8F8] mb-6 flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-accent" /> featured
        </h2>

        <div className="space-y-8">
          {/* Jarvis */}
          <div className="relative rounded-2xl border border-accent/30 bg-gradient-to-br from-primary-800 via-primary-800 to-primary-950 overflow-hidden glow-accent">
            <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 grid lg:grid-cols-5 gap-10 p-8 md:p-12">
              {/* Left: narrative */}
              <div className="lg:col-span-3">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <p className="font-mono text-xs text-accent">~/projects/jarvis · solo full-stack</p>
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent">
                    ● yet to be released · still working on it
                  </span>
                </div>
                <h3 className="font-mono text-2xl md:text-3xl font-bold text-[#F8F8F8] mb-4">
                  Local-First AI Learning Pathway
                </h3>
                <p className="text-primary-200 leading-relaxed mb-6">
                  A self-hosted study companion that turns the links, PDFs, and notes you save into
                  <span className="text-accent"> guided learning paths</span> — it figures out prerequisites,
                  rates difficulty, builds a concept graph, and teaches on demand. Everything runs on locally-run
                  LLMs with formal ADRs behind the design. No cloud API cost or keys.
                </p>
                <ul className="space-y-3">
                  {jarvisHighlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-primary-200">
                      <span className="text-accent mt-0.5 shrink-0">{h.icon}</span>
                      <span>{h.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: stack + skills */}
              <div className="lg:col-span-2 lg:border-l lg:border-accent/20 lg:pl-10">
                <h4 className="font-mono text-sm font-semibold text-accent mb-4 flex items-center gap-2">
                  <Network size={16} /> stack
                </h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {jarvisTech.map((tech, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs px-3 py-1.5 rounded bg-accent/10 border border-accent/25 text-accent-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h4 className="font-mono text-sm font-semibold text-accent mb-3">skills demonstrated</h4>
                <p className="font-mono text-xs leading-relaxed text-primary-300">
                  async API design · vector / hybrid retrieval · full-text search · background workers (arq) ·
                  LLM integration (Ollama) · RAG · learning-path &amp; teaching pipelines · system design / ADRs · Docker Compose
                </p>
              </div>
            </div>
          </div>

          {/* HomeLab */}
          <div className="relative rounded-2xl border border-accent/30 bg-gradient-to-br from-primary-800 via-primary-800 to-primary-950 overflow-hidden glow-accent">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 grid lg:grid-cols-5 gap-10 p-8 md:p-12">
              {/* Left: narrative */}
              <div className="lg:col-span-3">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <p className="font-mono text-xs text-accent">~/infra/homelab · bare metal</p>
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent">
                    ● live · hosts this site
                  </span>
                </div>
                <h3 className="font-mono text-2xl md:text-3xl font-bold text-[#F8F8F8] mb-4">
                  HomeLab Kubernetes &amp; Cloud Storage Cluster
                </h3>
                <div className="text-primary-200 leading-relaxed space-y-3">
                  <p>The site you're reading is served from my personal home cluster over a plain Airtel 100&nbsp;Mbps line.</p>
                  <p>
                    It's a hands-on lab for <span className="text-accent">k3s orchestration</span>, self-hosted cloud
                    storage to cut Google Drive costs, and chasing real-world 99% availability and fault tolerance —
                    my playground for cloud-native infra, automation, and observability.
                  </p>
                </div>
              </div>

              {/* Right: stack */}
              <div className="lg:col-span-2 lg:border-l lg:border-accent/20 lg:pl-10">
                <h4 className="font-mono text-sm font-semibold text-accent mb-4 flex items-center gap-2">
                  <Server size={16} /> stack
                </h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {homeLabTechnologies.map((tech, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs px-3 py-1.5 rounded bg-accent/10 border border-accent/25 text-accent-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h4 className="font-mono text-sm font-semibold text-accent mb-3">focus</h4>
                <p className="font-mono text-xs leading-relaxed text-primary-300">
                  bare-metal Kubernetes (k3s) · self-hosted storage · high availability &amp; fault tolerance ·
                  cron-based auto-deploy · Prometheus / Grafana observability
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* All projects grid */}
        <div className="mt-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-mono text-2xl font-bold text-primary-900 dark:text-[#F8F8F8]">
              <span className="text-accent">#</span> all projects
            </h2>
            <button
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-sm font-semibold bg-accent text-primary-900 hover:bg-accent-light transition-colors duration-300"
              onClick={() => setShowMoreTools(prev => !prev)}
              aria-expanded={showMoreTools}
            >
              {showMoreTools ? 'hide' : 'more'} info
              <span className={`transition-transform duration-300 ${showMoreTools ? 'rotate-180' : ''}`}>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </div>

          {/* Behind the scenes (collapsible) */}
          <div className={`transition-all duration-500 overflow-hidden ${showMoreTools ? 'max-h-[800px] mb-8 opacity-100' : 'max-h-0 mb-0 opacity-0'}`}>
            <div className="bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 rounded-xl p-8 text-sm">
              <h3 className="font-mono text-lg font-bold mb-3 text-accent">Behind the Scenes Tools</h3>
              <p className="mb-4 leading-relaxed text-primary-600 dark:text-primary-300">
                Beyond the featured work, I've built internal DevOps tools that streamline deployments and cut overhead across bare-metal and cloud:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  'Automated service bootstrapping across multiple VMs and nodes',
                  'Custom deployment agents on bare-metal servers',
                  'CI/CD optimizations for non-cloud environments',
                  'Dynamic configuration management using Python & shell scripting',
                  'End-to-end observability and recovery pipelines with minimal cost',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-primary-700 dark:text-primary-200">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-mono text-xs text-accent border-l-2 border-accent/50 pl-4">
                Building scalable systems where most wouldn't look.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
