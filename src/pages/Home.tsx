import React from 'react';
import { Link } from "react-router-dom";
import { 
  Server, Database, Cloud, Terminal, Github, Linkedin, ChevronRight, 
  Container, Compass, Globe, Wrench, CloudCog, Rocket, Monitor, 
  Cpu, PenSquare, HardDrive 
} from 'lucide-react';

// Reusable Section Component
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

// Technology Logo Component
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

// Service Card Component
const ServiceCard = ({ icon, title, description, borderColor, gradientFrom, gradientTo, iconColor }) => (
  <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-t-4 ${borderColor}`}>
    <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-lg mb-4`}>
      <div className={iconColor}>
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300">
      {description}
    </p>
  </div>
);

const Home = () => {
  // Technology stack data
  const technologies = [
    { name: 'AWS', icon: <Cloud size={48} strokeWidth={1} /> },
    { name: 'Docker', icon: <Container size={48} strokeWidth={1} /> },
    { name: 'Kubernetes', icon: <Compass size={48} strokeWidth={1} /> },
    { name: 'Linux', icon: <Terminal size={48} strokeWidth={1} /> },
    { name: 'Terraform', icon: <Globe size={48} strokeWidth={1} /> },
    { name: 'Jenkins', icon: <Wrench size={48} strokeWidth={1} /> },
    { name: 'Azure', icon: <CloudCog size={48} strokeWidth={1} /> },
    { name: 'GitHub Actions', icon: <Rocket size={48} strokeWidth={1} /> },
    { name: 'Monitoring', icon: <Monitor size={48} strokeWidth={1} /> },
    { name: 'Microservices', icon: <Cpu size={48} strokeWidth={1} /> },
    { name: 'Bare Metal Hosting', icon: <HardDrive size={48} strokeWidth={1} /> },
    { name: 'DR Solutioning', icon: <Server size={48} strokeWidth={1} /> },
  ];

  // Services data
  const services = [
    {
      icon: <Server size={24} />,
      title: "Infrastructure as Code",
      description: "Automating infrastructure provisioning with Terraform, CloudFormation, and Ansible for consistent and repeatable deployments.",
      borderColor: "border-indigo-500",
      gradientFrom: "from-indigo-100",
      gradientTo: "to-purple-100 dark:from-indigo-900 dark:to-purple-900",
      iconColor: "text-indigo-600 dark:text-white"
    },
    {
      icon: <Database size={24} />,
      title: "CI/CD Pipelines",
      description: "Building robust continuous integration and deployment pipelines with Jenkins, GitHub Actions, and GitLab CI.",
      borderColor: "border-purple-500",
      gradientFrom: "from-purple-100",
      gradientTo: "to-blue-100 dark:from-purple-900 dark:to-blue-900",
      iconColor: "text-purple-600 dark:text-white"
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud Architecture",
      description: "Designing scalable, resilient, and cost-effective cloud solutions on AWS, Azure, and GCP.",
      borderColor: "border-blue-500",
      gradientFrom: "from-blue-100",
      gradientTo: "to-indigo-100 dark:from-blue-900 dark:to-indigo-900",
      iconColor: "text-blue-600 dark:text-white"
    }
  ];

  // Social links data
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
      <div className="pt-20 pb-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              Yashaswi Tiwari
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
              Automating infrastructure, optimizing deployments, and ensuring reliability in cloud environments.
            </p>
            
            {/* Projects Button */}
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 hover:from-indigo-600 hover:via-purple-600 hover:to-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Projects
                <ChevronRight size={16} className="ml-2" />
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="mt-8 flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-all duration-200 hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Technology Stack Section */}
      <Section title="Technology Stack">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {technologies.map((tech) => (
            <TechLogo key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </Section>
      
      {/* Services Section */}
      <Section title="What I Do">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Home;