import React from 'react';
import {
  Server, Database, Cloud, Terminal, ChevronRight,
  Container, Compass, Globe, Wrench, CloudCog, Rocket,
  Cpu, HardDrive, BrainCircuit, GitBranch
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTracker } from '../hooks/useTracker';

interface TechLogoProps {
  name: string;
  icon: React.ReactNode;
  onHover?: () => void;
}
const TechLogo: React.FC<TechLogoProps> = ({ name, icon, onHover }) => (
  <div
    onMouseEnter={onHover}
    className="flex flex-col items-center p-4 bg-white dark:bg-primary-800 rounded-lg border border-primary-200 dark:border-primary-700 hover:border-accent/60 transition-colors duration-200"
  >
    <div className="text-primary-500 dark:text-primary-300 mb-2 group-hover:text-accent">
      {icon}
    </div>
    <span className="font-mono text-sm font-medium text-primary-900 dark:text-[#F8F8F8] text-center">
      {name}
    </span>
  </div>
);

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onHover?: () => void;
}
const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, onHover }) => (
  <div
    onMouseEnter={onHover}
    className="group bg-white dark:bg-primary-800 p-6 rounded-lg border border-primary-200 dark:border-primary-700 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300"
  >
    <div className="w-11 h-11 flex items-center justify-center bg-accent/10 border border-accent/20 rounded-lg mb-4 text-accent group-hover:bg-accent group-hover:text-primary-900 transition-colors duration-300">
      {icon}
    </div>
    <h3 className="font-mono text-lg font-bold mb-2 text-primary-900 dark:text-[#F8F8F8] group-hover:text-accent transition-colors duration-300">
      {title}
    </h3>
    <p className="text-sm text-primary-600 dark:text-primary-300 leading-relaxed">
      {description}
    </p>
  </div>
);

const Home = () => {
  const { trackEvent } = useTracker();
  const technologies = [
    { name: 'AWS', icon: <Cloud size={36} strokeWidth={1.25} /> },
    { name: 'Azure', icon: <CloudCog size={36} strokeWidth={1.25} /> },
    { name: 'Docker', icon: <Container size={36} strokeWidth={1.25} /> },
    { name: 'Kubernetes', icon: <Compass size={36} strokeWidth={1.25} /> },
    { name: 'Linux', icon: <Terminal size={36} strokeWidth={1.25} /> },
    { name: 'Jenkins', icon: <Wrench size={36} strokeWidth={1.25} /> },
    { name: 'GitHub Actions', icon: <Rocket size={36} strokeWidth={1.25} /> },
    { name: 'Terraform', icon: <Globe size={36} strokeWidth={1.25} /> },
    { name: 'Python / FastAPI', icon: <Cpu size={36} strokeWidth={1.25} /> },
    { name: 'PostgreSQL', icon: <Database size={36} strokeWidth={1.25} /> },
    { name: 'Bare Metal', icon: <HardDrive size={36} strokeWidth={1.25} /> },
    { name: 'Local-First AI', icon: <BrainCircuit size={36} strokeWidth={1.25} /> },
  ];

  const services = [
    {
      icon: <GitBranch size={20} />,
      title: 'Cloud & DevOps',
      description: 'Infrastructure as Code with Terraform, CI/CD pipelines on Jenkins & GitHub Actions, and container orchestration on Docker / Kubernetes.',
    },
    {
      icon: <Server size={20} />,
      title: 'Backend Engineering',
      description: 'Async REST APIs with Python & FastAPI, background job pipelines, and clean service design built to scale and stay observable.',
    },
    {
      icon: <Database size={20} />,
      title: 'Databases & Migrations',
      description: 'PostgreSQL schema design, query tuning, and battle-tested database migrations between environments with minimal downtime.',
    },
    {
      icon: <BrainCircuit size={20} />,
      title: 'Local-First AI',
      description: 'Self-hosted AI systems with Ollama, pgvector hybrid retrieval, and background enrichment pipelines — zero cloud API cost.',
    },
  ];

  return (
    <div className="bg-white dark:bg-primary-900 pt-16 pb-24 transition-colors duration-300 relative min-h-screen overflow-hidden animate-fade-in">
      {/* Hero */}
      <div className="relative bg-terminal-grid">
        <div className="pt-16 pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-mono text-sm text-accent mb-4">
              <span className="text-primary-400">$</span> whoami
            </p>
            <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary-900 dark:text-[#F8F8F8] leading-tight mb-2">
              Yashaswi Tiwari
            </h1>
            <p className="font-mono text-xl sm:text-2xl md:text-3xl text-gradient-accent font-bold mb-6">
              Cloud DevOps Engineer
            </p>

            <p className="text-lg md:text-xl text-primary-600 dark:text-primary-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Architecting <span className="text-accent font-semibold">resilient systems</span> and
              automating chaos — while building <span className="text-accent font-semibold">backends</span>,
              taming <span className="text-accent font-semibold">databases</span>, and shipping
              self-hosted <span className="text-accent font-semibold">AI</span> on bare metal.
            </p>
            <p className="font-mono text-sm text-primary-500 dark:text-primary-400 mb-10">
              cloud-native · devops · backend · databases · local-first AI
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/projects"
                onClick={() => trackEvent('ui', 'hero_cta_click', 'view_projects')}
                className="group inline-flex items-center justify-center px-7 py-3.5 font-mono text-base font-semibold rounded-lg text-primary-900 bg-accent hover:bg-accent-light transition-colors duration-300"
              >
                view projects
                <ChevronRight size={18} className="ml-1.5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/about"
                onClick={() => trackEvent('ui', 'hero_cta_click', 'know_me_more')}
                className="inline-flex items-center justify-center px-7 py-3.5 font-mono text-base font-semibold rounded-lg border border-accent/60 text-accent hover:bg-accent/10 transition-colors duration-300"
              >
                ./about_me
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* What I Do + Stack */}
      <div className="px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-mono text-2xl font-bold text-primary-900 dark:text-[#F8F8F8] mb-8">
                <span className="text-accent">#</span> what I do
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    {...service}
                    onHover={() => trackEvent('ui', 'hover', `service_card_${service.title.toLowerCase().replace(/\s+/g, '_')}`)}
                  />
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-mono text-2xl font-bold text-primary-900 dark:text-[#F8F8F8] mb-8">
                <span className="text-accent">#</span> stack
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {technologies.map((tech) => (
                  <TechLogo
                    key={tech.name}
                    name={tech.name}
                    icon={tech.icon}
                    onHover={() => trackEvent('infra', 'hover', `tech_${tech.name.toLowerCase().replace(/\s+/g, '_')}`)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
