import React from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

const homeLabTechnologies = [
  'Debian', 'k3s', 'Airtel 100Mbps', 'Prometheus', 'Grafana', 'Python Scripting',
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
      technologies: [
        'Node.js', 'Express', 'Socket.io', 'Jenkins', 'Docker', 'OWASP Dependency Check', 'AWS EC2', 'Terraform', 'Ubuntu', 'CI/CD'
      ],
      githubUrl: 'https://github.com/yashaswi29/CICD-Realtime-ChatApp.git', 
    },
    {
      title: 'Azure Blob Storage Content-Bundle Path Comparator',
      description: 'Developed a Python-based tool for Maternity Foundation to automate comparison of file paths stored in Azure Blob Storage with paths referenced in multiple content-bundle JSON files. The tool identifies unreferenced files, duplicates, and ensures accurate synchronization between blob storage and content bundles, significantly improving data integrity and storage management. It helped eliminate over 30% of media files, reducing Azure storage costs by approximately $1400 per month, covering over 60% of total storage.',
      technologies: ['Python', 'Azure Blob Storage', 'JSON', 'Automation', 'Data Validation'],
      githubUrl: 'https://github.com/yashaswi29/blob-compare-mapping', 
    },
  ];

  const scrollToUpcoming = () => {
    const el = document.getElementById('upcoming-projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              // liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </Section>

      {/* Upcoming Projects Section */}
      <Section title="Upcoming Projects" id="upcoming-projects">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-xl shadow-2xl p-8 hover:shadow-4xl transition-shadow duration-300 flex flex-col md:flex-row items-center md:items-start gap-8">
            
            {/* Left side: Text description */}
            <div className="md:flex-1">
              <h2 className="text-3xl font-bold mb-4">HomeLab Kubernetes & Cloud Storage Cluster</h2>
              <p className="text-lg leading-relaxed">
                This website you’re browsing is hosted on my personal home cluster running in my room, powered by a simple Airtel 100 Mbps internet connection.
                <br /><br />
                The project focuses on mastering Kubernetes orchestration with k3s, managing cloud storage to cut down on Google Drive costs, and pushing limits to understand real-world challenges like 99% availability and fault tolerance — all hands-on.
                <br /><br />
                This hands-on lab is my playground for learning advanced cloud-native tech, infrastructure automation, and observability.
              </p>
            </div>
            
            {/* Right side: Tech stack */}
            <div className="md:flex-1 flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Technologies used:</h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {homeLabTechnologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-white bg-opacity-30 px-4 py-1 rounded-full font-semibold text-sm cursor-default select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Projects;
