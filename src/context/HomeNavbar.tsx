import React, { useContext } from 'react';
import { Sun, Moon, Github, Linkedin, PenSquare } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

const socialLinks = [
  {
    href: "https://github.com/yashaswi29",
    icon: <Github size={20} />,
    label: "GitHub"
  },
  {
    href: "https://in.linkedin.com/in/yashaswi-tiwari-5423211a8",
    icon: <Linkedin size={20} />,
    label: "LinkedIn"
  },
  {
    href: "https://hashnode.com/@yashaswiyeezy",
    icon: <PenSquare size={20} />,
    label: "Hashnode"
  }
];

const HomeNavbar: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-primary-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            &gt;
          </div>
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-colors duration-200"
              >
                {link.icon}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {theme === 'dark' ? <Sun size={18} className="text-white" /> : <Moon size={18} className="text-gray-800" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
