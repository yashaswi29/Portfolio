import React from 'react';
import { Github, ArrowUpRight, Lock } from 'lucide-react';
import { useTracker } from '../hooks/useTracker';
import Placard from './Placard';

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
  const { trackEvent } = useTracker();

  const stopClick = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <Placard
      className="flex flex-col bg-white dark:bg-primary-800 rounded-lg border border-primary-200 dark:border-primary-700 overflow-hidden"
      expandedClassName="hoverable:-mx-3 border-accent/60 shadow-2xl shadow-black/15 dark:shadow-black/50"
      onToggle={(open) =>
        trackEvent('project', 'interaction', title, { action: open ? 'expand' : 'collapse' })
      }
    >
      {(open) => (
        <>
          {/* terminal title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-primary-200 dark:border-primary-700 bg-primary-50 dark:bg-primary-900/40">
            <span className={`w-2.5 h-2.5 rounded-full transition-colors ${open ? 'bg-accent' : 'bg-primary-300 dark:bg-primary-600'}`} />
            <span className={`w-2.5 h-2.5 rounded-full transition-colors ${open ? 'bg-accent-light' : 'bg-primary-300 dark:bg-primary-600'}`} />
            <span className="w-2.5 h-2.5 rounded-full bg-primary-300 dark:bg-primary-600" />
            <span className="ml-2 font-mono text-xs text-primary-500 dark:text-primary-400 truncate">
              ~/projects/{title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}
            </span>
          </div>

          <div className="flex flex-col flex-1 p-5">
            <h3 className={`font-mono text-lg font-bold leading-snug mb-2.5 transition-colors ${open ? 'text-accent' : 'text-primary-900 dark:text-[#F8F8F8]'}`}>
              {title}
            </h3>

            {/* Two lines in the tile, all of it once the card has room. */}
            <div
              className={`relative overflow-hidden transition-[max-height] duration-300 ease-out ${
                open ? 'max-h-[24rem]' : 'max-h-none hoverable:max-h-[2.9rem]'
              }`}
            >
              <p className="text-sm leading-relaxed text-primary-700 dark:text-primary-200">
                {description}
              </p>
              <span
                className={`pointer-events-none absolute inset-x-0 bottom-0 h-5 bg-gradient-to-t from-white dark:from-primary-800 to-transparent transition-opacity duration-300 ${
                  open ? 'opacity-0' : 'opacity-0 hoverable:opacity-100'
                }`}
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-4 mb-4">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="font-mono bg-accent/10 text-accent-700 dark:text-accent-300 border border-accent/20 px-2 py-0.5 rounded text-[11px]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-5 pt-3 border-t border-primary-100 dark:border-primary-700/60">
              {githubUrl ? (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    stopClick(e);
                    trackEvent('project', 'github_click', title, { url: githubUrl });
                  }}
                  className="inline-flex items-center gap-1.5 font-mono text-sm text-primary-600 dark:text-primary-300 hover:text-accent dark:hover:text-accent transition-colors"
                >
                  <Github size={16} /> source
                </a>
              ) : (
                <span
                  className="inline-flex items-center gap-1.5 font-mono text-sm text-primary-500 dark:text-primary-400"
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
                  onClick={(e) => {
                    stopClick(e);
                    trackEvent('project', 'live_click', title, { url: liveUrl });
                  }}
                  className="inline-flex items-center gap-1 font-mono text-sm text-primary-600 dark:text-primary-300 hover:text-accent dark:hover:text-accent transition-colors"
                >
                  live <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </div>
        </>
      )}
    </Placard>
  );
};

export default ProjectCard;
