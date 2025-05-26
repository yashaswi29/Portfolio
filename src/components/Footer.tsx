import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-primary-900 border-t border-primary-100 dark:border-primary-800 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-primary-600 dark:text-primary-300 font-mono text-sm">
              &copy; {new Date().getFullYear()} • Built with React & Python
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/yashaswi29" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-300 hover:text-primary-900 dark:hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/yashaswi-tiwari-5423211a8/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-300 hover:text-primary-900 dark:hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:yashaswitiwari2003@gmail.com" 
              className="text-primary-600 dark:text-primary-300 hover:text-primary-900 dark:hover:text-white transition-colors duration-200"
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