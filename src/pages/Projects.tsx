import React, { useState, useEffect } from 'react';
import {
  Database, Layers, Network, Sparkles, Server, Cpu, ShieldCheck,
  Target, Activity, Lock, Cloud, Archive, Thermometer, Gauge,
} from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import FeaturedProject from '../components/FeaturedProject';
import { useTracker } from '../hooks/useTracker';

const Projects: React.FC = () => {
  const { trackEvent } = useTracker();
  const [showMoreTools, setShowMoreTools] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    trackEvent('project', 'view', 'projects_page');
  }, [trackEvent]);

  /* ---- featured: personal knowledge & planning engine (unreleased) ---- */
  const engineTech = [
    'Python', 'FastAPI', 'arq', 'PostgreSQL 17', 'pgvector', 'Redis', 'Ollama', 'Docker', 'GitHub Actions',
  ];

  const engineMetrics = [
    { value: '22k', label: 'lines of Python' },
    { value: '448', label: 'commits / ~10 wks' },
    { value: '18', label: 'table schema' },
    { value: '471 MB', label: 'shipped image' },
    { value: '1.00', label: 'hit@1 after tuning' },
  ];

  const engineHighlights = [
    {
      icon: <Database size={18} />,
      title: 'Hybrid retrieval, tuned by measurement',
      body: 'Postgres native full-text search (generated tsvector column + GIN index, ts_rank_cd) fused with pgvector cosine-kNN through weighted, query-adaptive Reciprocal Rank Fusion. Diagnosed that unweighted RRF let weak two-arm documents outrank the dense #1 — retuned k from 60 to 10 with dense-dominant weights: hit@1 0.93 → 1.00, MRR 0.957 → 1.000.',
    },
    {
      icon: <Target size={18} />,
      title: 'A retrieval eval that can fail the build',
      body: 'A 20-query gold set scoring hit@{1,3,5} and MRR@10 across lexical, semantic, and hybrid arms — run as a regression gate before and after every retrieval change. Includes a staleness guard that aborts outright rather than reporting confident zeros over an emptied corpus.',
    },
    {
      icon: <ShieldCheck size={18} />,
      title: 'Evidence-bound by architecture',
      body: 'Deterministic engines decide; the LLM only phrases. Every generated sentence is typed — observation, derived fact, labeled hypothesis, or unknown — and must resolve back to its source. The model may compress evidence, never expand it. Take the model away and only the wording disappears.',
    },
    {
      icon: <Cpu size={18} />,
      title: 'Fully local inference, on a CPU',
      body: 'Ollama on the host (gemma3:4b + qwen3-embedding:0.6b) running CPU-only on an i5-10400F with no GPU — zero external API cost and no data leaving the box. Async work is budgeted around a real ~5.4 tok/s generation ceiling instead of pretending latency is free.',
    },
    {
      icon: <Layers size={18} />,
      title: 'Built like a service, not a script',
      body: '22 route modules, 33 service modules, and 15 repositories over an 18-table Postgres schema, with arq workers handling everything off the request path. Ships through GitHub Actions behind an auth-gated API and a multi-tenant schema; admin UIs are bound to loopback only.',
    },
  ];

  /* ---- featured: homelab infra & observability ---- */
  const homeLabTech = [
    'Debian 13', 'Docker Compose', 'Prometheus', 'Grafana', 'cAdvisor', 'node-exporter', 'Cloudflare Tunnel', 'systemd / udev',
  ];

  const homeLabMetrics = [
    { value: '14', label: 'containers' },
    { value: '4', label: 'compose projects' },
    { value: '15s', label: 'scrape interval' },
    { value: '30d', label: 'TSDB retention' },
    { value: '0', label: 'inbound ports open' },
  ];

  const homeLabHighlights = [
    {
      icon: <Activity size={18} />,
      title: 'Observability built from parts, not a bundle',
      body: 'Prometheus + Grafana + cAdvisor + node-exporter assembled from scratch — 15s scrape, 30-day retention, --web.enable-lifecycle for hot config reloads. cAdvisor reads cgroups directly for per-container CPU/RAM/net/disk across every Compose project regardless of network; node-exporter runs pid: host with /proc, /sys and / bind-mounted for host CPU, memory, disk and hwmon thermals.',
    },
    {
      icon: <Gauge size={18} />,
      title: 'Cardinality is a cost, so it got tuned',
      body: 'Excluded overlay and tmpfs mount points from filesystem metrics, keeping fourteen containers’ worth of ephemeral mounts out of the series database instead of letting the TSDB quietly fill with noise.',
    },
    {
      icon: <Lock size={18} />,
      title: 'Hardened after auditing my own box',
      body: 'A self-run security audit found unauthenticated endpoints exposed to the LAN. Every service is now bound to 127.0.0.1, admin and metrics UIs are reachable only over an SSH port-forward, and Grafana anonymous auth is off.',
    },
    {
      icon: <Cloud size={18} />,
      title: 'Public without being exposed',
      body: 'Ingress runs entirely over a Cloudflare Tunnel — outbound-only, no inbound ports open on the router, no reverse proxy to patch and no origin IP to find.',
    },
    {
      icon: <Archive size={18} />,
      title: 'Backups that fire on their own',
      body: 'A udev rule triggers on backup-drive attach and hands off to a systemd service/timer pair for photo sync; Postgres takes a nightly pg_dump to a separate library path. The photo library runs in external-library mode with its 50 GB source dump mounted read-only.',
    },
    {
      icon: <Thermometer size={18} />,
      title: 'Debugged a dead end, then designed around it',
      body: 'Chased an unusable GPU path — an F-series CPU with no iGPU and a driver-abandoned GT218 — and re-architected the whole stack CPU-only, with no CUDA, QuickSync or VAAPI dependency anywhere.',
    },
  ];

  const projects = [
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
        <h2 className="font-mono text-2xl font-bold text-primary-900 dark:text-[#F8F8F8] mb-6 flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-accent" /> featured
        </h2>

        <div className="space-y-8">
          {/* Personal knowledge & planning engine */}
          <FeaturedProject
            path="~/projects/private · solo full-stack"
            status="● unreleased · in daily use"
            title={<>Personal Knowledge &amp; Planning Engine</>}
            lead={
              <>
                A private system that reads what I save, keeps track of what I'm actually working
                toward, and answers one question well:
                <span className="text-accent"> what deserves my attention today, and why?</span>
              </>
            }
            detail={
              <>
                Still unreleased, and deliberately so — the interesting part isn't the idea, it's
                what it takes to make a system like this honest enough to trust. Everything below is
                the engineering underneath it.
              </>
            }
            metrics={engineMetrics}
            highlights={engineHighlights}
            stackIcon={<Network size={16} />}
            stack={engineTech}
            focusLabel="skills demonstrated"
            focus={
              <>
                async API design · hybrid vector / full-text retrieval · RRF ranking &amp; eval
                methodology · background workers (arq) · schema design · local LLM inference ·
                multi-tenancy · CI/CD · Docker Compose
              </>
            }
            principleLabel="the discipline"
            principle="It's allowed to be incomplete. It is not allowed to be misleading."
            glowClassName="top-0 right-0 w-72 h-72"
            onToggle={(pinned) =>
              trackEvent('project', 'interaction', 'knowledge_engine', {
                action: pinned ? 'expand' : 'collapse',
              })
            }
          />

          {/* HomeLab */}
          <FeaturedProject
            path="~/infra/homelab · debian 13 bare metal"
            status="● live · serving this page"
            title={<>Self-Hosted Infrastructure &amp; Observability</>}
            lead={
              <>
                One Debian 13 box — i5-10400F, 16 GB, 500 GB NVMe — running{' '}
                <span className="text-accent">14 containers across 4 Compose projects</span>: this
                site, a RAG application, a self-hosted photo library, and the monitoring stack
                watching all of it. Docker's data root sits off the system path so a full disk never
                takes the OS down with it.
              </>
            }
            detail={
              <>
                It's a real production environment on commodity hardware, which means the failures
                are real too — and so are the fixes.
              </>
            }
            metrics={homeLabMetrics}
            highlights={homeLabHighlights}
            stackIcon={<Server size={16} />}
            stack={homeLabTech}
            focusLabel="focus"
            focus={
              <>
                bare-metal Linux · container observability · metric cardinality · attack-surface
                reduction · zero-ingress networking · backup automation (systemd / udev) · capacity
                planning on fixed hardware
              </>
            }
            principleLabel="the constraint"
            principle="No GPU, no managed services, no inbound ports. Everything has to earn its RAM."
            glowClassName="bottom-0 left-0 w-96 h-96"
            onToggle={(pinned) =>
              trackEvent('project', 'interaction', 'homelab', {
                action: pinned ? 'expand' : 'collapse',
              })
            }
          />
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
