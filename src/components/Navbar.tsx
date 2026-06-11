import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Github, Linkedin, PenSquare } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import { useTracker } from '../hooks/useTracker';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { href: 'https://github.com/yashaswi29', icon: <Github size={18} />, label: 'GitHub' },
  { href: 'https://in.linkedin.com/in/yashaswi-tiwari-5423211a8', icon: <Linkedin size={18} />, label: 'LinkedIn' },
  { href: 'https://hashnode.com/@yashaswiyeezy', icon: <PenSquare size={18} />, label: 'Hashnode' },
];

const Navbar: React.FC = () => {
  const { trackEvent } = useTracker();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    trackEvent('ui', 'interaction', 'mobile_menu', { action: isOpen ? 'close' : 'open' });
    setIsOpen(!isOpen);
  };
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    trackEvent('ui', 'interaction', 'theme_toggle', { to: newTheme });
    setTheme(newTheme);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/85 dark:bg-primary-900/85 backdrop-blur-md border-b border-primary-200 dark:border-primary-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="font-mono font-bold text-lg text-primary-900 dark:text-[#F8F8F8] hover:text-accent dark:hover:text-accent transition-colors"
          >
            <span className="text-accent">~/</span>yashaswi
            <span className="text-accent cursor-block" aria-hidden="true" />
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-mono text-sm transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-accent'
                    : 'text-primary-600 dark:text-primary-300 hover:text-accent dark:hover:text-accent'
                }`}
              >
                <span className="text-accent/60">{isActive(link.path) ? '> ' : ''}</span>
                {link.name.toLowerCase()}
              </Link>
            ))}

            <span className="w-px h-5 bg-primary-200 dark:bg-primary-700" />

            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  onClick={() => trackEvent('ui', 'interaction', `nav_social_${link.label.toLowerCase()}`)}
                  className="text-primary-500 dark:text-primary-400 hover:text-accent dark:hover:text-accent transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-md border border-primary-200 dark:border-primary-700 text-primary-700 dark:text-primary-200 hover:border-accent hover:text-accent transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 mr-1 rounded-md text-primary-700 dark:text-primary-200 hover:text-accent transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-900 dark:text-[#F8F8F8] hover:text-accent transition-colors duration-200"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-primary-900 border-t border-primary-200 dark:border-primary-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-3 py-2 rounded-md text-base font-mono transition-colors duration-200 ${
                isActive(link.path)
                  ? 'bg-accent/10 text-accent'
                  : 'text-primary-600 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-800'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name.toLowerCase()}
            </Link>
          ))}
          <div className="flex items-center gap-5 px-3 pt-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-primary-500 dark:text-primary-400 hover:text-accent transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
