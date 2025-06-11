import React, { useEffect, useState } from 'react';
import { Server, Database, Cloud, Terminal, Github, Linkedin, ChevronRight, Container, Compass, Globe, GitBranch, Monitor, Cpu, PenSquare } from 'lucide-react';

const Section = ({ title, children, className = "" }) => (
  <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

const TechLogo = ({ name, icon }) => (
  <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-600 group">
    <div className="text-gray-600 dark:text-gray-300 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
      {icon}
    </div>
    <span className="text-sm font-medium text-gray-900 dark:text-white">
      {name}
    </span>
  </div>
);

const Home = () => {
  const techLogos = [
    { name: 'AWS', icon: <Cloud size={48} strokeWidth={1} /> },
    { name: 'Docker', icon: <Container size={48} strokeWidth={1} /> },
    { name: 'Kubernetes', icon: <Compass size={48} strokeWidth={1} /> },
    { name: 'CI/CD', icon: <GitBranch size={48} strokeWidth={1} /> },
    { name: 'Linux', icon: <Terminal size={48} strokeWidth={1} /> },
    { name: 'Terraform', icon: <Globe size={48} strokeWidth={1} /> },
    { name: 'Monitoring', icon: <Monitor size={48} strokeWidth={1} /> },
    { name: 'Microservices', icon: <Cpu size={48} strokeWidth={1} /> },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="pt-20 pb-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight"
            >
              Yashaswi Tiwari
            </h1>
            <p 
              className="mt-6 text-xl text-gray-600 dark:text-gray-300"
            >
              Automating infrastructure, optimizing deployments, and ensuring reliability in cloud environments.
            </p>
            <div 
              className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 hover:from-indigo-600 hover:via-purple-600 hover:to-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
                View Projects
                <ChevronRight size={16} className="ml-2" />
              </button>
              {/* <button className="inline-flex items-center justify-center px-5 py-3 border border-indigo-600 dark:border-white text-base font-medium rounded-md text-indigo-600 dark:text-white hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105">
                Get in Touch
              </button> */}
            </div>
            <div 
              className="mt-8 flex space-x-4"
            >
              <a 
                href="https://github.com/yashaswi29" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://in.linkedin.com/in/yashaswi-tiwari-5423211a8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://hashnode.com/@yashaswiyeezy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Hashnode"
              >
                <PenSquare size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Technology Stack Section */}
      <Section title="Technology Stack" className="">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techLogos.map((tech) => (
            <TechLogo key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </Section>
      
      {/* What I Do Section */}
      <Section title="What I Do" className="">
        <div className="grid md:grid-cols-3 gap-8">
          <div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-t-4 border-indigo-500"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 rounded-lg mb-4">
              <Server size={24} className="text-indigo-600 dark:text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              Infrastructure as Code
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Automating infrastructure provisioning with Terraform, CloudFormation, and Ansible for consistent and repeatable deployments.
            </p>
          </div>
          
          <div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-t-4 border-purple-500"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-lg mb-4">
              <Database size={24} className="text-purple-600 dark:text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              CI/CD Pipelines
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Building robust continuous integration and deployment pipelines with Jenkins, GitHub Actions, and GitLab CI.
            </p>
          </div>
          
          <div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-t-4 border-blue-500"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-lg mb-4">
              <Cloud size={24} className="text-blue-600 dark:text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              Cloud Architecture
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Designing scalable, resilient, and cost-effective cloud solutions on AWS, Azure, and GCP.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;