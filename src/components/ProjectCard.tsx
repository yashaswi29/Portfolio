import React, { useState } from 'react';
import { Github, ArrowUpRight, Lock } from 'lucide-react';
import { useTracker } from '../hooks/useTracker';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const MAX_DESCRIPTION_LENGTH = 140;

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
}) => {
  const { trackEvent } = useTracker();
  const [expanded, setExpanded] = useState(false);

  const isLong = description.length > MAX_DESCRIPTION_LENGTH;
  const displayDescription = expanded || !isLong
    ? description
    : description.slice(0, MAX_DESCRIPTION_LENGTH) + '...';

  const handleReadMore = () => {
    trackEvent('project', 'interaction', title, { action: expanded ? 'collapse' : 'expand' });
    setExpanded((prev) => !prev);
  };

  const handleGithubClick = () => {
    trackEvent('project', 'github_click', title, { url: githubUrl });
  };

  return (
    <div className="group flex flex-col h-full bg-white dark:bg-primary-800 rounded-lg border border-primary-200 dark:border-primary-700 overflow-hidden transition-all duration-300 hover:border-accent/60 hover:-translate-y-1">
      {/* terminal title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-primary-200 dark:border-primary-700 bg-primary-50 dark:bg-primary-900/40">
        <span className="w-2.5 h-2.5 rounded-full bg-primary-300 dark:bg-primary-600 group-hover:bg-accent transition-colors" />
        <span className="w-2.5 h-2.5 rounded-full bg-primary-300 dark:bg-primary-600 group-hover:bg-accent-light transition-colors" />
        <span className="w-2.5 h-2.5 rounded-full bg-primary-300 dark:bg-primary-600" />
        <span className="ml-2 font-mono text-xs text-primary-500 dark:text-primary-400 truncate">
          ~/projects/{title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-mono text-xl font-bold mb-3 text-primary-900 dark:text-[#F8F8F8] group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-primary-700 dark:text-primary-200 mb-4 flex-1">
          {displayDescription}
          {isLong && (
            <button
              className="ml-2 text-accent hover:text-accent-light underline text-xs focus:outline-none"
              onClick={handleReadMore}
              aria-expanded={expanded}
            >
              {expanded ? 'show less' : 'read more'}
            </button>
          )}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="font-mono bg-accent/10 text-accent-700 dark:text-accent-300 border border-accent/20 px-2.5 py-1 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-5 pt-1 border-t border-primary-100 dark:border-primary-700/60">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleGithubClick}
              className="mt-4 inline-flex items-center gap-1.5 font-mono text-sm text-primary-600 dark:text-primary-300 hover:text-accent dark:hover:text-accent transition-colors"
            >
              <Github size={16} /> source
            </a>
          ) : (
            <span
              className="mt-4 inline-flex items-center gap-1.5 font-mono text-sm text-primary-500 dark:text-primary-400"
              title="Still in development"
            >
              <Lock size={14} /> yet to be released
            </span>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('project', 'live_click', title, { url: liveUrl })}
              className="mt-4 inline-flex items-center gap-1 font-mono text-sm text-primary-600 dark:text-primary-300 hover:text-accent dark:hover:text-accent transition-colors"
            >
              live <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
