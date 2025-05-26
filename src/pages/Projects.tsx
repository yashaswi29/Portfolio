import React from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AWS Serverless Infrastructure',
      description: 'Developed a serverless architecture using AWS Lambda, API Gateway, and DynamoDB for a scalable microservices application.',
      technologies: ['AWS', 'Terraform', 'Lambda', 'API Gateway', 'DynamoDB'],
      githubUrl: 'https://github.com/yourusername/serverless-infrastructure',
    },
    {
      title: 'Kubernetes Monitoring Solution',
      description: 'Implemented a comprehensive monitoring stack for Kubernetes clusters using Prometheus, Grafana, and Alertmanager.',
      technologies: ['Kubernetes', 'Prometheus', 'Grafana', 'Helm'],
      githubUrl: 'https://github.com/yourusername/k8s-monitoring',
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Built an end-to-end CI/CD pipeline with GitHub Actions for testing, building, and deploying containerized applications.',
      technologies: ['GitHub Actions', 'Docker', 'AWS', 'Node.js'],
      githubUrl: 'https://github.com/yourusername/cicd-pipeline',
    },
    {
      title: 'Infrastructure as Code Repository',
      description: 'Created a modular Terraform repository with reusable modules for provisioning consistent infrastructure across multiple environments.',
      technologies: ['Terraform', 'AWS', 'Azure', 'GitOps'],
      githubUrl: 'https://github.com/yourusername/terraform-modules',
    },
    {
      title: 'Container Orchestration Platform',
      description: 'Designed and implemented a Kubernetes-based platform for deploying and managing containerized applications.',
      technologies: ['Kubernetes', 'Helm', 'Docker', 'Istio'],
      githubUrl: 'https://github.com/yourusername/container-platform',
    },
    {
      title: 'Automated Backup Solution',
      description: 'Developed an automated backup and recovery system for critical data using cloud-native services and custom scripts.',
      technologies: ['AWS', 'Python', 'S3', 'CloudWatch'],
      githubUrl: 'https://github.com/yourusername/backup-automation',
    }
  ];

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
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Projects;