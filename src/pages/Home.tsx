import React from 'react';
import {
  Server, Database, Cloud, Terminal, ChevronRight,
  Container, Compass, Globe, Wrench, CloudCog, Rocket, Monitor,
  Cpu, HardDrive
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
    className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200"
  >
    <div className="text-gray-600 dark:text-gray-300 mb-2">
      {icon}
    </div>
    <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
      {name}
    </span>
  </div>
);

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  borderColor: string;
  gradientFrom: string;
  gradientTo: string;
  iconColor: string;
  onHover?: () => void;
}
const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, borderColor, gradientFrom, gradientTo, iconColor, onHover }) => (
  <div
    onMouseEnter={onHover}
    className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-t-4 ${borderColor} group`}
  >
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
  const { trackEvent } = useTracker();
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

  return (
    <div
      className={`bg-white dark:bg-primary-900 pt-20 pb-24 transition-colors duration-300 relative z-10 min-h-screen overflow-hidden
        animate-fade-in-page`}
    >
      <div className="pt-10 pb-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent leading-tight mb-6 animate-gradient-x">
              <span className="block text-gray-900 dark:text-white text-2xl sm:text-3xl mb-2 font-mono">def role(self): return "SRE"</span>
              Yashaswi Tiwari
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Architecting <span className="font-semibold text-indigo-600 dark:text-indigo-400">Resilient Systems</span> & <span className="font-semibold text-emerald-600 dark:text-emerald-400">Automating Chaos</span>.
              <br />
              Cloud Native | DevOps | Infrastructure as Code
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/projects"
                onClick={() => trackEvent('ui', 'hero_cta_click', 'view_projects')}
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
                onClick={() => trackEvent('ui', 'hero_cta_click', 'know_me_more')}
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
      <div className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:hidden space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                What I Do
              </h2>
              <div className="grid gap-6">
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
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Technology Stack
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
          <div className="hidden lg:flex gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                What I Do
              </h2>
              <div className="grid gap-6">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    {...service}
                    onHover={() => trackEvent('ui', 'hover', `service_card_${service.title.toLowerCase().replace(/\s+/g, '_')}`)}
                  />
                ))}
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Technology Stack
              </h2>
              <div className="grid grid-cols-2 gap-4">
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