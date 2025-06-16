import React from 'react';
import { 
  Award, GraduationCap, 
  Briefcase, Cloud, Zap, Code
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:bg-black">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none dark:bg-black">
        <div className="absolute top-16 left-10 w-40 h-40 bg-indigo-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-32 right-16 w-56 h-56 bg-purple-400/15 rounded-full blur-2xl animate-bounce" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-16 left-1/3 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="relative flex flex-col items-start mb-8 animate-fade-in" style={{animationDelay: '0.1s', animationFillMode: 'both'}}>
          <div className="absolute top-4 right-4 text-indigo-400/30">
            <Cloud size={28} />
          </div>
          <div className="absolute bottom-2 left-4 text-purple-400/30">
            <Code size={20} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            About Me
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-200 max-w-2xl">
            Passionate Cloud Engineer building scalable, automated infrastructure with DevOps best practices. I love transforming complex challenges into elegant, reliable systems.
          </p>
        </div>

        {/* Journey Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            My Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-4">
              {/* Card 1 */}
              <div className="p-4 rounded-lg bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 flex items-start gap-3 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
                <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shrink-0">
                  <Cloud className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">The Spark</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Drawn to CI/CD, infrastructure as code, and automation that makes engineering smarter. Every challenge is a chance to build better.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="p-4 rounded-lg bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 flex items-start gap-3 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
                <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">Current Journey</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Cloud Engineer at AFI Digital Services, optimizing Azure infrastructure. Previously at Wipro, mastering AWS, Terraform, Jenkins, and GitHub Actions.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="p-4 rounded-lg bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 flex items-start gap-3 animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
                <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">What Drives Me</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Constant learning and building. From Python automation to container orchestration and cloud cost optimization—I thrive on solving complex problems and sharing knowledge.
                  </p>
                </div>
              </div>
            </div>
            {/* Certifications */}
            <div className="animate-fade-in" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
              <div className="sticky top-8 p-4 rounded-lg bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-800 dark:text-white">Certifications</h3>
                </div>
                <div className="group relative p-3 rounded bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200/50 dark:border-indigo-700/50 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300 cursor-pointer"
                  onClick={() => window.open('https://drive.google.com/file/d/1gJYyj4SALVCRm_5neRtWCPcBqp212gh8/view?usp=sharing', '_blank')}
                  title="View Certificate"
                >
                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                    <Award className="w-3 h-3 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-800 dark:text-white mb-1 pr-6 text-sm">
                    AWS Certified Cloud Practitioner
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Amazon Web Services</p>
                  <div className="px-2 py-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-full text-xs font-medium text-indigo-600 dark:text-indigo-400 inline-block">
                    Verified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Education */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 animate-fade-in" style={{animationDelay: '0.7s', animationFillMode: 'both'}}>
            Experience & Education
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Work Experience</h3>
              </div>
              <div className="space-y-3">
                {/* Current Role */}
                <div className="relative pl-5 border-l-2 border-indigo-200 dark:border-indigo-700 animate-fade-in" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
                  <div className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-indigo-500"></div>
                  <div className="p-3 rounded bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50">
                    <div className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-1">
                      April 2025 – Present
                    </div>
                    <h4 className="text-base font-bold text-slate-800 dark:text-white mb-1">Cloud Engineer</h4>
                    <div className="text-slate-600 dark:text-slate-400 font-medium mb-1 text-xs">AFI Digital Services LLP, Noida</div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      Driving automation and cost-efficiency in Azure environments. Contributing to infrastructure design and advancing DevOps maturity.
                    </p>
                  </div>
                </div>
                {/* Previous Roles */}
                <div className="relative pl-5 border-l-2 border-purple-200 dark:border-purple-700 animate-fade-in" style={{animationDelay: '0.9s', animationFillMode: 'both'}}>
                  <div className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-purple-500"></div>
                  <div className="p-3 rounded bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50">
                    <div className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-1">
                      Sept 2024 – April 2025
                    </div>
                    <h4 className="text-base font-bold text-slate-800 dark:text-white mb-1">Cloud Engineering Intern</h4>
                    <div className="text-slate-600 dark:text-slate-400 font-medium mb-1 text-xs">AFI Digital Services LLP, Noida</div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      Optimized Azure infrastructure for WHO-backed multilingual app. Built DevOps pipelines and researched cost optimization strategies.
                    </p>
                  </div>
                </div>
                <div className="relative pl-5 border-l-2 border-blue-200 dark:border-blue-700 animate-fade-in" style={{animationDelay: '1.0s', animationFillMode: 'both'}}>
                  <div className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="p-3 rounded bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50">
                    <div className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-1">
                      July 2024 – Aug 2024
                    </div>
                    <h4 className="text-base font-bold text-slate-800 dark:text-white mb-1">DevOps-Cloud Trainee</h4>
                    <div className="text-slate-600 dark:text-slate-400 font-medium mb-1 text-xs">Wipro Limited, Gurgaon</div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      Deployed AWS infrastructure with Terraform. Automated deployments using GitHub Actions and migrated Jenkins environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Education</h3>
              </div>
              <div className="space-y-3">
                <div className="relative pl-5 border-l-2 border-purple-200 dark:border-purple-700 animate-fade-in" style={{animationDelay: '1.1s', animationFillMode: 'both'}}>
                  <div className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-purple-500"></div>
                  <div className="p-3 rounded bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50">
                    <div className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-1">
                      2021 – Present
                    </div>
                    <h4 className="text-base font-bold text-slate-800 dark:text-white mb-1">B.Tech in Computer Science</h4>
                    <div className="text-slate-600 dark:text-slate-400 font-medium text-xs">Bennett University, Greater Noida</div>
                  </div>
                </div>
                <div className="relative pl-5 border-l-2 border-blue-200 dark:border-blue-700 animate-fade-in" style={{animationDelay: '1.2s', animationFillMode: 'both'}}>
                  <div className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="p-3 rounded bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50">
                    <div className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-1">
                      Graduated 2021
                    </div>
                    <h4 className="text-base font-bold text-slate-800 dark:text-white mb-1">Senior Secondary (10+2)</h4>
                    <div className="text-slate-600 dark:text-slate-400 font-medium text-xs">Ahlcon International School, Delhi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tailwind fade-in animation */}
      <style>
        {`
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.7s forwards;
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        `}
      </style>
    </div>
  );
};

export default About;