import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

const homeLabTechnologies = [
  'Debian', 'k3s', 'Airtel 100Mbps', 'Python Scripting',
];

const Projects: React.FC = () => {
  const [showMoreTools, setShowMoreTools] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: 'Jenkins Migration Toolkit',
      description: 'Built a Python-based toolkit to automate Jenkins job, plugin, and configuration migration between servers using Jenkins CLI and JCasC. Reduced manual intervention in CI/CD environment transitions.',
      technologies: ['Jenkins', 'Python', 'JCasC', 'Shell', 'CI/CD'],
      githubUrl: 'https://github.com/yashaswi29/Jenkins-Migration-Tool', 
    },
    {
      title: 'ChatApp with Real-Time CI/CD Pipeline',
      description: 'Developed a real-time chat application featuring dynamic rooms and seamless communication, backed by a robust CI/CD pipeline. The pipeline automates build, security scanning, containerization, and deployment, ensuring rapid and secure delivery on AWS EC2 instances. Additionally, wrote Terraform scripts to automate the infrastructure provisioning of the ChatApp on AWS.',
      technologies: ['Node.js', 'Jenkins', 'Docker', 'OWASP', 'EC2', 'Terraform'],
      githubUrl: 'https://github.com/yashaswi29/CICD-Realtime-ChatApp.git', 
    },
    {
    title: '11-Microservices CI/CD Pipeline System',
    description: 'Built a production-grade CI/CD pipeline system for 11 independent microservices using Jenkins, Docker, and Kubernetes. Each microservice features its own isolated pipeline for building, testing, containerizing, and deploying, ensuring modular scalability and faster development cycles. Integrated security scans, parallelized deployments, and blue/green strategies enhance reliability and speed. The system also includes Terraform for infrastructure provisioning and Prometheus/Grafana for observability.',
    technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Python', 'Microservices'],
    githubUrl: 'https://github.com/yashaswi29/11-Microservice-CICD.git',
    }
  ];

  const scrollToUpcoming = () => {
    const el = document.getElementById('upcoming-projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-fade-in relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-indigo-400/20 to-purple-600/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-400/15 to-indigo-600/15 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-gradient-to-r from-gray-400/10 to-slate-600/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Paper plane animation */}
        <div className="absolute top-32 left-0 w-full h-full">
          <svg 
            className="w-8 h-8 text-indigo-400/60 animate-fly-across" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            style={{ 
              animationDuration: '15s',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear'
            }}
          >
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/5 to-transparent">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
      </div>

      <div className="bg-white dark:bg-primary-900 pt-20 pb-24 transition-colors duration-300 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section with enhanced animations */}
          <div className={`max-w-3xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-900 dark:text-white leading-tight animate-fade-in-up relative">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                Projects
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-blue-600/20 blur-lg opacity-30 animate-pulse"></div>
            </h1>
            <p className={`mt-6 text-xl text-primary-600 dark:text-primary-300 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              A collection of my work in cloud infrastructure, automation, and DevOps.
            </p>
            <button
              onClick={scrollToUpcoming}
              aria-label="Scroll to Upcoming Projects"
              className={`mt-10 flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-all duration-500 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} group`}
              style={{ transitionDelay: '600ms' }}
            >
              <span className="text-lg font-semibold group-hover:animate-pulse">See Upcoming Projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 animate-bounce group-hover:animate-ping"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Featured Projects section with enhanced styling */}
          <div className={`mt-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* Animated separator line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent mb-8 animate-pulse"></div>
            
            {/* Featured Projects title and More Info button */}
            <div className="flex justify-between items-center mb-4 group">
              <h2 className="text-3xl font-bold text-primary-900 dark:text-white relative">
                <span className="relative z-10">Featured Projects</span>
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </h2>
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400/50 group relative overflow-hidden"
                onClick={() => setShowMoreTools(prev => !prev)}
                aria-label="More Internal Tools Info"
              >
                {/* Animated background shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span className="text-lg font-semibold relative z-10">More Info</span>
                <span className={`transition-all duration-500 relative z-10 ${showMoreTools ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 ml-1 relative z-10 group-hover:animate-spin">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16v-4m0-4h.01" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Enhanced Behind the Scenes Tools card */}
            <div className={`w-full flex justify-center transition-all duration-700 ease-out transform
            ${showMoreTools
              ? 'opacity-100 max-h-[1000px] mb-8 scale-100 translate-y-0'
              : 'opacity-0 max-h-0 mb-0 scale-95 -translate-y-4 pointer-events-none'
            } overflow-hidden`}
            >
              <div className="bg-gradient-to-br from-primary-50 via-indigo-50/50 to-purple-50/30 dark:from-primary-800 dark:via-indigo-900/50 dark:to-purple-900/30 text-primary-900 dark:text-primary-100 rounded-2xl p-8 shadow-2xl max-w-2xl text-sm w-full mx-4 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/50 relative overflow-hidden group">
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-400/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-indigo-700 dark:text-indigo-300 flex items-center gap-3">
                    <svg className="h-6 w-6 text-indigo-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Behind the Scenes Tools
                    <div className="flex-1 h-px bg-gradient-to-r from-indigo-300 to-transparent"></div>
                  </h3>
                  <p className="mb-4 leading-relaxed">
                    Beyond these featured projects, I've built several internal DevOps tools that streamline deployments, reduce overhead, and optimize cost across bare-metal and cloud environments. These tools enable:
                  </p>
                  <ul className="space-y-2 mb-4">
                    {[
                      'Automated service bootstrapping across multiple VMs and nodes',
                      'Custom deployment agents on bare-metal servers',
                      'CI/CD optimizations for non-cloud environments',
                      'Dynamic configuration management using Python & shell scripting',
                      'End-to-end observability and recovery pipelines with minimal cost'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                        <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2 flex-shrink-0 group-hover/item:animate-ping"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="italic text-indigo-600 dark:text-indigo-400 font-medium border-l-2 border-indigo-300 pl-4">
                    These efforts are the backbone of my DevOps journey — building scalable systems where most wouldn't look.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Project cards grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-700 hover:scale-105 hover:-translate-y-2`}
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none'
                  }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    githubUrl={project.githubUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Upcoming Projects Section */}
      <Section title="Upcoming Projects" id="upcoming-projects">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 lg:p-16 transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl backdrop-blur-sm group">
            {/* Enhanced background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 backdrop-blur-lg rounded-3xl"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-indigo-400/30 via-purple-400/20 to-transparent rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/20 via-indigo-400/10 to-transparent rounded-full blur-2xl group-hover:scale-110 transition-transform duration-1000"></div>
            
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
              <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-indigo-300/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-300/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center md:items-start">
              <div className="md:flex-1 text-white">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">
                  HomeLab Kubernetes &<br /> Cloud Storage Cluster
                </h2>
                <p className="text-lg md:text-xl leading-relaxed font-light text-blue-100/90 space-y-4">
                  <span className="block">This website you're browsing is hosted on my personal home cluster running in my room, powered by a simple Airtel 100 Mbps internet connection.</span>
                  <span className="block">The project focuses on mastering Kubernetes orchestration with k3s, managing cloud storage to cut down on Google Drive costs, and pushing limits to understand real-world challenges like 99% availability and fault tolerance — all hands-on.</span>
                  <span className="block">This lab is my experimental playground for advanced cloud-native tech, infrastructure automation, and observability.</span>
                </p>
              </div>

              <div className="md:w-80 w-full flex flex-col items-center md:items-start">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6 text-indigo-300 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {homeLabTechnologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm font-semibold text-white backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 cursor-default"
                      style={{ 
                        animationDelay: `${idx * 100}ms`,
                        animation: 'fadeInScale 0.6s ease-out forwards'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes fly-across {
          0% {
            transform: translateX(-100px) translateY(0px) rotate(-15deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(-50px) rotate(-15deg);
            opacity: 0;
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-fly-across {
          animation: fly-across 15s linear infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
};

export default Projects;