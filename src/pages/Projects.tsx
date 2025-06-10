import React, { useState } from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';



const homeLabTechnologies = [
  'Debian', 'k3s', 'Airtel 100Mbps', 'Python Scripting',
];

const Projects: React.FC = () => {
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

  const [showMoreTools, setShowMoreTools] = React.useState(false);

  return (
    <div className="animate-fade-in">

      {/* Hero Section */}
      <div className="bg-white dark:bg-primary-900 pt-20 pb-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-900 dark:text-white leading-tight animate-fade-in-up">
              Projects
            </h1>
            <p className="mt-6 text-xl text-primary-600 dark:text-primary-300 animate-fade-in-up">
              A collection of my work in cloud infrastructure, automation, and DevOps.
            </p>

            {/* Scroll Arrow Button */}
            <button
              onClick={scrollToUpcoming}
              aria-label="Scroll to Upcoming Projects"
              className="mt-10 flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors"
            >
              <span className="text-lg font-semibold">See Upcoming Projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
        </div>
      </div>

      {/* Projects Grid */}
      <Section title="Featured Projects">
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

        {/* Info Button with Expandable Summary */}
        <div className="mt-12 flex justify-end pr-4">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-lg hover:scale-105 hover:from-indigo-600 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 group"
            onClick={() => setShowMoreTools(prev => !prev)}
            aria-label="More Internal Tools Info"
          >
            <span className="text-lg font-semibold">More Info</span>
            {/* Animated Arrow */}
            <span className={`transition-transform duration-300 ${showMoreTools ? 'translate-x-2 rotate-90' : ''}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white bg-opacity-20 border border-white border-opacity-30 ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
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
        {/* Animated Info Box */}
        <div className={`w-full flex justify-center transition-all duration-500 ease-in-out
          ${showMoreTools
            ? 'opacity-100 max-h-[1000px] mt-4 scale-100 translate-x-0'
            : 'opacity-0 max-h-0 mt-0 scale-95 translate-x-20 pointer-events-none'
          } overflow-hidden`}
        >
          <div className="bg-primary-50 dark:bg-primary-800 text-primary-900 dark:text-primary-100 rounded-xl p-6 shadow-xl max-w-2xl text-sm w-full mx-4 transition-all duration-500 ease-in-out">
            <h3 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
              {/* Arrow pointing from button to box */}
              <svg className="h-5 w-5 text-indigo-500 animate-bounce-right" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Behind the Scenes Tools
            </h3>
            <p className="mb-2">
              Beyond these featured projects, I’ve built several internal DevOps tools that streamline deployments, reduce overhead, and optimize cost across bare-metal and cloud environments. These tools enable:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Automated service bootstrapping across multiple VMs and nodes</li>
              <li>Custom deployment agents on bare-metal servers</li>
              <li>CI/CD optimizations for non-cloud environments</li>
              <li>Dynamic configuration management using Python & shell scripting</li>
              <li>End-to-end observability and recovery pipelines with minimal cost</li>
            </ul>
            <p className="mt-3 italic">
              These efforts are the backbone of my DevOps journey — building scalable systems where most wouldn’t look.
            </p>
          </div>
        </div>
      </Section>


      {/* Upcoming Projects Section */}
      <Section title="Upcoming Projects" id="upcoming-projects">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 lg:p-16 transition-transform duration-300 hover:scale-[1.02] backdrop-blur-sm">
          <div className="absolute inset-0 bg-white bg-opacity-5 backdrop-blur-lg rounded-3xl z-0"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center md:items-start">
            
            {/* Left: Description */}
            <div className="md:flex-1 text-white">
              <h2 className="text-4xl font-extrabold mb-4 leading-tight">
                HomeLab Kubernetes &<br /> Cloud Storage Cluster
              </h2>
              <p className="text-lg leading-relaxed font-light">
                This website you’re browsing is hosted on my personal home cluster running in my room, powered by a simple Airtel 100 Mbps internet connection.
                <br /><br />
                The project focuses on mastering Kubernetes orchestration with k3s, managing cloud storage to cut down on Google Drive costs, and pushing limits to understand real-world challenges like 99% availability and fault tolerance — all hands-on.
                <br /><br />
                This lab is my experimental playground for advanced cloud-native tech, infrastructure automation, and observability.
              </p>
            </div>

            {/* Right: Tech stack */}
            <div className="md:w-80 w-full flex flex-col items-center md:items-start">
              <h3 className="text-xl font-semibold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {homeLabTechnologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-white bg-opacity-20 px-4 py-1 rounded-full text-sm font-semibold text-white backdrop-blur-sm"
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
  </div>
</div>
)};

export default Projects;
