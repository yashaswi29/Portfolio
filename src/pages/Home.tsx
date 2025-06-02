import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Database, Cloud, Terminal, Github, Linkedin, ChevronRight, Pocket as Docker, Diameter as Kubernetes, Globe, GitBranch, Monitor, Cpu } from 'lucide-react';
import Section from '../components/Section';
import TechLogo from '../components/TechLogo';

const Home: React.FC = () => {
  const techLogos = [
    { name: 'AWS', icon: <Cloud size={48} strokeWidth={1} /> },
    { name: 'Docker', icon: <Docker size={48} strokeWidth={1} /> },
    { name: 'Kubernetes', icon: <Kubernetes size={48} strokeWidth={1} /> },
    { name: 'CI/CD', icon: <GitBranch size={48} strokeWidth={1} /> },
    { name: 'Linux', icon: <Terminal size={48} strokeWidth={1} /> },
    { name: 'Terraform', icon: <Globe size={48} strokeWidth={1} /> },
    { name: 'Monitoring', icon: <Monitor size={48} strokeWidth={1} /> },
    { name: 'Microservices', icon: <Cpu size={48} strokeWidth={1} /> },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="bg-white dark:bg-primary-900 pt-20 pb-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-900 dark:text-white leading-tight animate-fade-in-up">
              Yashaswi Tiwari
            </h1>
            <p className="mt-6 text-xl text-primary-600 dark:text-primary-300 animate-fade-in-up">
              Automating infrastructure, optimizing deployments, and ensuring reliability in cloud environments.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-900 dark:bg-white dark:text-primary-900 hover:bg-primary-800 dark:hover:bg-primary-100 transition-colors duration-200"
              >
                View Projects
                <ChevronRight size={16} className="ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-primary-900 dark:border-white text-base font-medium rounded-md text-primary-900 dark:text-white hover:bg-primary-50 dark:hover:bg-primary-800 transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>
            <div className="mt-8 flex space-x-4">
              <a 
                href="https://github.com/yashaswi29" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-300 hover:text-primary-900 dark:hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://in.linkedin.com/in/yashaswi-tiwari-5423211a8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-300 hover:text-primary-900 dark:hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Technology Stack Section */}
      <Section title="Technology Stack">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techLogos.map((tech) => (
            <TechLogo key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </Section>
      
      {/* What I Do Section */}
      <Section title="What I Do" className="bg-primary-50 dark:bg-primary-800/50">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-primary-800 p-6 rounded-lg shadow-sm transition-colors duration-300">
            <div className="w-12 h-12 flex items-center justify-center bg-primary-100 dark:bg-primary-700 rounded-lg mb-4">
              <Server size={24} className="text-primary-900 dark:text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary-900 dark:text-white">
              Infrastructure as Code
            </h3>
            <p className="text-primary-600 dark:text-primary-300">
              Automating infrastructure provisioning with Terraform, CloudFormation, and Ansible for consistent and repeatable deployments.
            </p>
          </div>
          
          <div className="bg-white dark:bg-primary-800 p-6 rounded-lg shadow-sm transition-colors duration-300">
            <div className="w-12 h-12 flex items-center justify-center bg-primary-100 dark:bg-primary-700 rounded-lg mb-4">
              <Database size={24} className="text-primary-900 dark:text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary-900 dark:text-white">
              CI/CD Pipelines
            </h3>
            <p className="text-primary-600 dark:text-primary-300">
              Building robust continuous integration and deployment pipelines with Jenkins, GitHub Actions, and GitLab CI.
            </p>
          </div>
          
          <div className="bg-white dark:bg-primary-800 p-6 rounded-lg shadow-sm transition-colors duration-300">
            <div className="w-12 h-12 flex items-center justify-center bg-primary-100 dark:bg-primary-700 rounded-lg mb-4">
              <Cloud size={24} className="text-primary-900 dark:text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary-900 dark:text-white">
              Cloud Architecture
            </h3>
            <p className="text-primary-600 dark:text-primary-300">
              Designing scalable, resilient, and cost-effective cloud solutions on AWS, Azure, and GCP.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;