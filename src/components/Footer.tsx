import React from 'react';
import { Github, Linkedin, Mail, PenSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-primary-900 border-t border-primary-200 dark:border-primary-700 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-primary-500 dark:text-primary-400 font-mono text-sm">
            <span className="text-accent">$</span> echo &copy; {new Date().getFullYear()} Yashaswi Tiwari
            <span className="hidden sm:inline"> · self-hosted on bare metal</span>
          </p>

          <div className="flex space-x-6">
            <a
              href="https://github.com/yashaswi29"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 dark:text-primary-400 hover:text-accent dark:hover:text-accent transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/yashaswi-tiwari-5423211a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 dark:text-primary-400 hover:text-accent dark:hover:text-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://hashnode.com/@yashaswiyeezy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 dark:text-primary-400 hover:text-accent dark:hover:text-accent transition-colors duration-200"
              aria-label="Hashnode"
            >
              <PenSquare size={20} />
            </a>
            <a
              href="mailto:yashaswitiwari2003@gmail.com"
              className="text-primary-500 dark:text-primary-400 hover:text-accent dark:hover:text-accent transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
