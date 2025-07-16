import React, { useState, useEffect, useContext } from 'react';
import { 
  Server, Database, Cloud, Terminal, Github, Linkedin, ChevronRight, 
  Container, Compass, Globe, Wrench, CloudCog, Rocket, Monitor, 
  Cpu, PenSquare, HardDrive
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

// Technology Logo Component
const TechLogo = ({ name, icon }) => (
  <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
    <div className="text-gray-600 dark:text-gray-300 mb-2">
      {icon}
    </div>
    <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
      {name}
    </span>
  </div>
);

// Service Card Component
const ServiceCard = ({ icon, title, description, borderColor, gradientFrom, gradientTo, iconColor }) => (
  <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-t-4 ${borderColor} group`}>
    <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
      <div className={iconColor + " text-xl"}>
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
      {description}
    </p>
  </div>
);
  
const Home = () => {

  useEffect(() => {
    fetch('https://yashaswi.cloud/api/analytics/visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ section: 'about' })
    });
  }, []);

  // Technology stack data
  const technologies = [
    { name: 'AWS', icon: <Cloud size={40} strokeWidth={1} /> },
    { name: 'Azure', icon: <CloudCog size={40} strokeWidth={1} /> },
    { name: 'Docker', icon: <Container size={40} strokeWidth={1} /> },
    { name: 'Kubernetes', icon: <Compass size={40} strokeWidth={1} /> },
    { name: 'Linux', icon: <Terminal size={40} strokeWidth={1} /> },
    { name: 'Jenkins', icon: <Wrench size={40} strokeWidth={1} /> },
    { name: 'GitHub Actions', icon: <Rocket size={40} strokeWidth={1} /> },
    { name: 'Terraform', icon: <Globe size={40} strokeWidth={1} /> },
    { name: 'IAC', icon: <Cpu size={40} strokeWidth={1} /> },
    { name: 'Monitoring', icon: <Monitor size={40} strokeWidth={1} /> },
    { name: 'Bare Metal Hosting', icon: <HardDrive size={40} strokeWidth={1} /> },
    { name: 'DR Solutioning', icon: <Server size={40} strokeWidth={1} /> },
  ];

  const services = [
    {
      icon: <Server size={20} />,
      title: "Infrastructure as Code",
      description: "Automating infrastructure provisioning with Terraform, Python Script for consistent and repeatable deployments.",
      borderColor: "border-indigo-500",
      gradientFrom: "from-indigo-100",
      gradientTo: "to-purple-100 dark:from-indigo-900 dark:to-purple-900",
      iconColor: "text-indigo-600 dark:text-white"
    },
    {
      icon: <Database size={20} />,
      title: "CI/CD Pipelines",
      description: "Building robust continuous integration and deployment pipelines with Jenkins, GitHub Actions, and GitLab CI.",
      borderColor: "border-purple-500",
      gradientFrom: "from-purple-100",
      gradientTo: "to-blue-100 dark:from-purple-900 dark:to-blue-900",
      iconColor: "text-purple-600 dark:text-white"
    },
    {
      icon: <Cloud size={20} />,
      title: "Cloud Architecture",
      description: "Designing scalable, resilient, and cost-effective cloud solutions on AWS, Azure.",
      borderColor: "border-blue-500",
      gradientFrom: "from-blue-100",
      gradientTo: "to-indigo-100 dark:from-blue-900 dark:to-indigo-900",
      iconColor: "text-blue-600 dark:text-white"
    }
  ];

  const socialLinks = [
    {
      href: "https://github.com/yashaswi29",
      icon: <Github size={24} />,
      label: "GitHub"
    },
    {
      href: "https://in.linkedin.com/in/yashaswi-tiwari-5423211a8",
      icon: <Linkedin size={24} />,
      label: "LinkedIn"
    },
    {
      href: "https://hashnode.com/@yashaswiyeezy",
      icon: <PenSquare size={24} />,
      label: "Hashnode"
    }
  ];

  return (
    <div
      className={`bg-white dark:bg-primary-900 pt-20 pb-24 transition-colors duration-300 relative z-10 min-h-screen overflow-hidden
        animate-fade-in-page`}
    >
      {/* Hero Section */}
      <div className="pt-10 pb-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight mb-6">
              Yashaswi Tiwari
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Automating infrastructure, optimizing deployments, and ensuring reliability in cloud environments.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/projects"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 hover:from-indigo-600 hover:via-purple-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center">
                  View Projects
                  <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                to="/about"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white dark:hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1"
              >
                <span className="flex items-center">
                  Know Me More
                  <div className="ml-2 w-2 h-2 bg-current rounded-full animate-pulse"></div>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content Sections */}
      <div className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Mobile Layout: What I Do first, then Technology Stack */}
          <div className="flex flex-col lg:hidden space-y-12">
            {/* What I Do Section - Mobile */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                What I Do
              </h2>
              <div className="grid gap-6">
                {services.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </div>

            {/* Technology Stack Section - Mobile */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Technology Stack
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {technologies.map((tech) => (
                  <TechLogo key={tech.name} name={tech.name} icon={tech.icon} />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Layout: What I Do on left, Technology Stack on right */}
          <div className="hidden lg:flex gap-12">
            {/* What I Do Section - Desktop */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                What I Do
              </h2>
              <div className="grid gap-6">
                {services.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </div>

            {/* Technology Stack Section - Desktop */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Technology Stack
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech) => (
                  <TechLogo key={tech.name} name={tech.name} icon={tech.icon} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
      <style>
        {`
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
        .animate-fade-in-page {
          animation: fadeInPage 0.5s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes fadeInPage {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        `}
      </style>
    </div>
  );
};

export default Home;