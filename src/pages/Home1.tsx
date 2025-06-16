import React, { useEffect } from 'react';
import { 
  Server, Database, Cloud, Terminal, Github, Linkedin, ChevronRight, 
  Container, Compass, Globe, Wrench, CloudCog, Rocket, Monitor, 
  Cpu, PenSquare, HardDrive 
} from 'lucide-react';

// Technology Logo Component
const TechLogo = ({ name, icon }) => (
  <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg transition-all duration-300 animate-fade-in-up hover:-translate-y-2">
    <div className="text-gray-600 dark:text-gray-300 mb-2">
      {icon}
    </div>
    <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
      {name}
    </span>
  </div>
);

// Service Card Component with subtle animation
const ServiceCard = ({ icon, title, description, borderColor, gradientFrom, gradientTo, iconColor }) => (
  <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 ${borderColor} animate-fade-in-up hover:-translate-y-2`}>
    <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-lg mb-4`}>
      <div className={iconColor + " text-xl"}>
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
      {description}
    </p>
  </div>
);

const Home = () => {
  // Force dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
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
    <div>
      {/* Hero Section */}
      <div className="pt-12 pb-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              Yashaswi Tiwari
            </h1>
            
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Automating infrastructure, optimizing deployments, and ensuring reliability in cloud environments.
            </p>
            
            {/* Projects Button */}
            <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 hover:from-indigo-600 hover:via-purple-600 hover:to-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Projects
                <ChevronRight size={16} className="ml-2" />
              </button>
            </div>
            
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
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
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
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
    </div>
  );
};

export default Home;
