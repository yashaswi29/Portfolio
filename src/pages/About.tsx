import React, { useContext, useEffect, useState } from 'react';
import {
  Award, GraduationCap, Briefcase, Cloud, Zap, Code,
  Github, Linkedin, PenSquare, Sun, Moon
} from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

import Terminal from '../components/Terminal';

const About: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDarkMode = theme === 'dark';

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    const start = performance.now();
    const duration = performance.now() - start;
  }, []);

  const socialLinks = [
    { href: "https://github.com/yashaswi29", icon: <Github size={24} />, label: "GitHub" },
    { href: "https://in.linkedin.com/in/yashaswi-tiwari-5423211a8", icon: <Linkedin size={24} />, label: "LinkedIn" },
    { href: "https://hashnode.com/@yashaswiyeezy", icon: <PenSquare size={24} />, label: "Hashnode" }
  ];

  const toggleTheme = () => setTheme(isDarkMode ? 'light' : 'dark');

  return (
    <div
      className={`bg-white dark:bg-primary-900 relative min-h-screen overflow-hidden transition-colors duration-300 z-10
        animate-fade-in-page`}
    >
      <div className="pt-20">
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className={`absolute top-16 left-10 w-48 h-48 rounded-full blur-3xl animate-pulse ${isDarkMode ? 'bg-indigo-500/10' : 'bg-indigo-400/20'}`}></div>
          <div className={`absolute top-32 right-16 w-64 h-64 rounded-full blur-3xl animate-bounce ${isDarkMode ? 'bg-purple-500/8' : 'bg-purple-400/15'}`} style={{ animationDuration: '4s' }}></div>
          <div className={`absolute bottom-16 left-1/3 w-40 h-40 rounded-full blur-3xl animate-pulse ${isDarkMode ? 'bg-blue-500/8' : 'bg-blue-400/10'}`} style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
        </div>

        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-all duration-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
        >
          {/* Hero Section */}
          <div className="relative flex flex-col items-start mb-16 animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both', marginTop: '-1.5rem' }}>
            <div className="absolute top-4 right-4 text-indigo-400/30"><Cloud size={40} /></div>
            <div className="absolute bottom-2 left-4 text-purple-400/30"><Code size={28} /></div>
            <h1 className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
              About Me
            </h1>

            <div className="grid lg:grid-cols-2 gap-12 w-full mt-4">
              <div className="space-y-6">
                <p className={`text-2xl leading-relaxed ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                  Passionate Cloud Engineer building scalable, automated infrastructure with DevOps and transforming complex challenges into reliable systems.
                </p>
                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I believe in the power of "Infrastructure as Code" and keeping systems "boring" (read: stable).
                  When I'm not optimizing pipelines, I'm usually exploring new CNCF projects or trying to make my terminal look cooler.
                </p>

                {/* Tech/Skills Pills for density */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {['Kubernetes', 'AWS', 'Terraform', 'Python', 'Go', 'Linux'].map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 border border-indigo-200 text-indigo-700 dark:bg-indigo-900/30 dark:border-indigo-700 dark:text-indigo-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Side: Terminal */}
              <div className="h-full min-h-[400px]">
                <Terminal className="h-full border-2 border-indigo-500/20 rounded-xl" />
              </div>
            </div>
          </div>

          {/* Journey Section */}
          <div className="mb-16 mt-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-12 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              My Journey
            </h2>
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                {/* Card 1 */}
                <div className={`p-8 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] animate-slide-up ${isDarkMode ? 'bg-gray-900/80 border border-gray-800 hover:border-indigo-500/40 backdrop-blur-sm shadow-xl' : 'bg-white border border-gray-300 hover:border-indigo-400 shadow-lg backdrop-blur-sm'}`} style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg">
                      <Cloud className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>The Spark</h3>
                      <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Drawn to CI/CD, infrastructure as code, and automation that makes engineering smarter. Every challenge is a chance to build better systems and learn something new in the ever-evolving cloud landscape.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Card 2 */}
                <div className={`p-8 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] animate-slide-up ${isDarkMode ? 'bg-gray-900/80 border border-gray-800 hover:border-purple-500/40 backdrop-blur-sm shadow-xl' : 'bg-white border border-gray-300 hover:border-purple-400 shadow-lg backdrop-blur-sm'}`} style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center shrink-0 shadow-lg">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Current Journey</h3>
                      <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Cloud Engineer at AFI Digital Services, optimizing Azure infrastructure and driving automation initiatives. Previously at Wipro, mastering AWS, Terraform, Jenkins, and GitHub Actions in enterprise environments with complex deployment pipelines.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Card 3 */}
                <div className={`p-8 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] animate-slide-up ${isDarkMode ? 'bg-gray-900/80 border border-gray-800 hover:border-blue-500/40 backdrop-blur-sm shadow-xl' : 'bg-white border border-gray-300 hover:border-blue-400 shadow-lg backdrop-blur-sm'}`} style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-lg">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>What Drives Me</h3>
                      <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Constant learning and building. From Python automation to container orchestration and cloud cost optimization—I thrive on solving complex problems and sharing knowledge with the developer community through open source contributions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Certifications Sidebar */}
              <div className="animate-slide-up" style={{ animationDelay: '1.0s', animationFillMode: 'both' }}>
                <div className={`sticky top-8 p-8 rounded-3xl transition-all duration-500 group ${isDarkMode
                  ? 'bg-gray-900/80 border border-gray-800 backdrop-blur-sm shadow-xl'
                  : 'bg-white border border-gray-300 shadow-lg backdrop-blur-sm'
                  }`}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Certifications</h3>
                  </div>
                  <div
                    className={`group relative p-6 rounded-2xl transition-all duration-500 cursor-pointer hover:shadow-xl transform hover:scale-105 overflow-hidden`}
                    onClick={() => window.open('https://drive.google.com/file/d/1gJYyj4SALVCRm_5neRtWCPcBqp212gh8/view?usp=sharing', '_blank')}
                    title="View Certificate"
                  >
                    {/* Blur overlay on hover */}
                    <div className="absolute inset-0 transition-all duration-300 pointer-events-none group-hover:backdrop-blur-sm group-hover:bg-black/30 rounded-2xl z-10"></div>
                    {/* "View Certificate" text on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20 transition-opacity duration-300">
                      <span className="italic text-gray-700 dark:text-gray-200 text-base font-normal">View Certificate</span>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-md z-0">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <h4 className={`font-bold mb-3 pr-10 text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'} relative z-0`}>
                      AWS Certified Cloud Practitioner
                    </h4>
                    <p className={`text-base mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} relative z-0`}>Amazon Web Services</p>
                    <div className={`px-4 py-2 rounded-full text-sm font-medium inline-block ${isDarkMode ? 'bg-gradient-to-r from-indigo-500/40 to-purple-600/40 text-indigo-300' : 'bg-gradient-to-r from-indigo-500/20 to-purple-600/20 text-indigo-600'} relative z-0`}>
                      Verified
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience & Education */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-12 animate-slide-up" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
              Experience & Education
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Work Experience */}
              <div>
                <div className="flex items-center gap-4 mb-8 animate-slide-up" style={{ animationDelay: '1.4s', animationFillMode: 'both' }}>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Work Experience</h3>
                </div>
                <div className="space-y-8">
                  {/* Current Role */}
                  <div className="relative pl-10 border-l-4 border-indigo-400 animate-slide-up" style={{ animationDelay: '1.6s', animationFillMode: 'both' }}>
                    <div className="absolute -left-4 top-3 w-8 h-8 rounded-full bg-indigo-500 shadow-lg border-4 border-white dark:border-black"></div>
                    <div className={`p-6 rounded-2xl transition-all duration-500 hover:shadow-xl hover:scale-[1.02] ${isDarkMode ? 'bg-gray-900/80 border border-gray-800 backdrop-blur-sm shadow-lg' : 'bg-white border border-gray-300 shadow-md backdrop-blur-sm'}`}>
                      <div className={`text-base font-medium mb-3 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>April 2025 – Present</div>
                      <h4 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Cloud Engineer</h4>
                      <div className={`font-medium mb-4 text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>AFI Digital Services LLP, Noida</div>
                      <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Driving automation and cost-efficiency in Azure environments. Contributing to infrastructure design and advancing DevOps maturity across enterprise applications with focus on scalability and reliability.
                      </p>
                    </div>
                  </div>
                  {/* Previous Roles */}
                  <div className="relative pl-10 border-l-4 border-purple-400 animate-slide-up" style={{ animationDelay: '1.8s', animationFillMode: 'both' }}>
                    <div className="absolute -left-4 top-3 w-8 h-8 rounded-full bg-purple-500 shadow-lg border-4 border-white dark:border-black"></div>
                    <div className={`p-6 rounded-2xl transition-all duration-500 hover:shadow-xl hover:scale-[1.02] ${isDarkMode ? 'bg-gray-900/80 border border-gray-800 backdrop-blur-sm shadow-lg' : 'bg-white border border-gray-300 shadow-md backdrop-blur-sm'}`}>
                      <div className={`text-base font-medium mb-3 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>Sept 2024 – April 2025</div>
                      <h4 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Cloud Engineering Intern</h4>
                      <div className={`font-medium mb-4 text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>AFI Digital Services LLP, Noida</div>
                      <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Optimized Azure infrastructure for WHO-backed multilingual app. Built DevOps pipelines and researched cost optimization strategies for enterprise-scale deployments with global reach.
                      </p>
                    </div>
                  </div>
                  <div className="relative pl-10 border-l-4 border-blue-400 animate-slide-up" style={{ animationDelay: '2.0s', animationFillMode: 'both' }}>
                    <div className="absolute -left-4 top-3 w-8 h-8 rounded-full bg-blue-500 shadow-lg border-4 border-white dark:border-black"></div>
                    <div className={`p-6 rounded-2xl transition-all duration-500 hover:shadow-xl hover:scale-[1.02] ${isDarkMode ? 'bg-gray-900/80 border border-gray-800 backdrop-blur-sm shadow-lg' : 'bg-white border border-gray-300 shadow-md backdrop-blur-sm'}`}>
                      <div className={`text-base font-medium mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>July 2024 – Aug 2024</div>
                      <h4 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>DevOps-Cloud Trainee</h4>
                      <div className={`font-medium mb-4 text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Wipro Limited, Gurgaon</div>
                      <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Deployed AWS infrastructure with Terraform. Automated deployments using GitHub Actions and migrated Jenkins environments for improved CI/CD workflows and deployment efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Education */}
              <div>
                <div className="flex items-center gap-4 mb-8 animate-slide-up" style={{ animationDelay: '2.2s', animationFillMode: 'both' }}>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Education</h3>
                </div>
                <div className="space-y-8">
                  <div className="relative pl-10 border-l-4 border-purple-400 animate-slide-up" style={{ animationDelay: '2.4s', animationFillMode: 'both' }}>
                    <div className="absolute -left-4 top-3 w-8 h-8 rounded-full bg-purple-500 shadow-lg border-4 border-white dark:border-black"></div>
                    <div className={`p-6 rounded-2xl transition-all duration-500 hover:shadow-xl hover:scale-[1.02] ${isDarkMode ? 'bg-gray-900/80 border border-gray-800 backdrop-blur-sm shadow-lg' : 'bg-white border border-gray-300 shadow-md backdrop-blur-sm'}`}>
                      <div className={`text-base font-medium mb-3 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>2021 – Present</div>
                      <h4 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>B.Tech in Computer Science</h4>
                      <div className={`font-medium text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Bennett University, Greater Noida</div>
                    </div>
                  </div>
                  <div className="relative pl-10 border-l-4 border-blue-400 animate-slide-up" style={{ animationDelay: '2.6s', animationFillMode: 'both' }}>
                    <div className="absolute -left-4 top-3 w-8 h-8 rounded-full bg-blue-500 shadow-lg border-4 border-white dark:border-black"></div>
                    <div className={`p-6 rounded-2xl transition-all duration-500 hover:shadow-xl hover:scale-[1.02] ${isDarkMode ? 'bg-gray-900/80 border border-gray-800 backdrop-blur-sm shadow-lg' : 'bg-white border border-gray-300 shadow-md backdrop-blur-sm'}`}>
                      <div className={`text-base font-medium mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Graduated 2021</div>
                      <h4 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Senior Secondary (10+2)</h4>
                      <div className={`font-medium text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Ahlcon International School, Delhi</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
        .animate-slide-up {
          opacity: 0;
          transform: translateY(30px);
          animation: slideUp 0.8s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
        }
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-page {
          animation: fadeInPage 0.5s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes fadeInPage {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        `}
      </style>
    </div>
  );
};

export default About;