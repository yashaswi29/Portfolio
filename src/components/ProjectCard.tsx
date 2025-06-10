import React, { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

const MAX_DESCRIPTION_LENGTH = 140;

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
}) => {
  const [expanded, setExpanded] = useState(false);

  const isLong = description.length > MAX_DESCRIPTION_LENGTH;
  const displayDescription = expanded || !isLong
    ? description
    : description.slice(0, MAX_DESCRIPTION_LENGTH) + '...';

  return (
    <div className="flex flex-col h-full bg-white dark:bg-primary-800 rounded-xl shadow-lg p-6 transition-shadow duration-300 hover:shadow-2xl">
      <h3 className="text-2xl font-bold mb-2 text-primary-900 dark:text-white">{title}</h3>
      <p className="text-primary-700 dark:text-primary-200 mb-4 flex-1">
        {displayDescription}
        {isLong && (
          <button
            className="ml-2 text-indigo-600 dark:text-indigo-400 underline text-sm focus:outline-none"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
          >
            {expanded ? 'Show Less' : 'Read More'}
          </button>
        )}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, idx) => (
          <span
            key={idx}
            className="bg-primary-100 dark:bg-primary-700 text-primary-800 dark:text-primary-100 px-3 py-1 rounded-full text-xs font-semibold"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto flex gap-3">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;