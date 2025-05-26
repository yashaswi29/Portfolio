import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
}) => {
  return (
    <div className="bg-white dark:bg-primary-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden animate-fade-in-up">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-primary-900 dark:text-white">{title}</h3>
        
        <p className="text-primary-600 dark:text-primary-300 mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-700 text-primary-800 dark:text-primary-200 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4 mt-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-300 hover:text-primary-900 dark:hover:text-white transition-colors duration-200"
            >
              <Github size={16} className="mr-1" />
              Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-300 hover:text-primary-900 dark:hover:text-white transition-colors duration-200"
            >
              <ExternalLink size={16} className="mr-1" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;