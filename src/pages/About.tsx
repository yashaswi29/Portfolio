import React from 'react';
import { 
  FileText, Award, GraduationCap, 
  Briefcase, ChevronRight, Sparkles, 
  Cloud, Zap, Code
} from 'lucide-react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-indigo-600/15 rounded-full blur-3xl animate-bounce" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="animate-fade-in">
        {/* Hero Section */}
        <div className="relative pt-20 pb-24 overflow-hidden">
          {/* Floating Icons */}
          <div className="absolute top-32 right-20 text-indigo-400/30" style={{animationDelay: '1s', animationDuration: '3s'}}>
            <Cloud size={32} />
          </div>
          <div className="absolute top-48 left-16 text-purple-400/30" style={{animationDelay: '2s'}}>
            <Zap size={28} />
          </div>
          <div className="absolute bottom-32 right-32 text-blue-400/30" style={{animationDelay: '0.5s', animationDuration: '4s'}}>
            <Code size={24} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-3 mb-6">
              </div>
              <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight mb-6">
                About Me
              </h1>
              
                <p className="text-xl leading-relaxed max-w-3xl text-slate-700 dark:text-white">
                Passionate Cloud Engineer crafting with the future of infrastructure with cutting-edge DevOps practices and scalable solutions.
                </p>
            </div>
          </div>
        </div>
        
        {/* Bio Section */}
        <Section title="" className="relative">
          <div className="relative">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-indigo-500"></div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-transparent"></div>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                My Journey
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-8">
                {/* Bio Cards */}
                <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/10">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                        <Cloud className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white">The Spark</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Over the past couple of years, I've found myself completely drawn to the world of CI/CD pipelines, infrastructure as code, and everything that makes modern engineering smoother and smarter.
                    </p>
                  </div>
                </div>

                <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white">Current Journey</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Currently working as a Cloud Engineer at AFI Digital Services, I'm hands-on with Azure—optimizing infrastructure for real-world apps, automating pipelines, and always chasing cost-effective, high-availability solutions. Before this, I was at Wipro, diving deep into AWS, Terraform, Jenkins, and GitHub Actions—learning how real infrastructure scales and evolves.
                    </p>
                  </div>
                </div>

                <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white">What Drives Me</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      What drives me is the constant opportunity to learn and build. Whether it's writing Python scripts to automate boring stuff, figuring out why a container won't deploy, or shaving dollars off a cloud bill, I'm all in. I love exploring tools, experimenting, and being part of teams where growth and knowledge-sharing are the norm.
                    </p>
                  </div>
                </div>
                
                {/* Action Buttons
                <div className="flex flex-wrap gap-4 pt-6">
                  <Link
                    to="/contact"
                    className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center space-x-2">
                      <span>Get in Touch</span>
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                  
                  <a
                    href="https://drive.google.com/file/d/1L6nbfrfm8hILaPqyJxX2Nlf8g_zH1TN4/view?usp=sharing"
                    className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-slate-800 dark:text-white font-semibold rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2">
                      <FileText size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                      <span>Resume</span>
                    </div>
                  </a>
                </div> */}
              </div>
              
              {/* Certifications Sidebar */}
              <div>
                <div className="sticky top-8 p-8 rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/30 transition-all duration-500">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">Certifications</h3>
                  </div>
                  
                  <div className="group relative p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-600/10 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => window.open('https://drive.google.com/file/d/1gJYyj4SALVCRm_5neRtWCPcBqp212gh8/view?usp=sharing', '_blank')}
                    title="View Certificate"
                  >
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center opacity-80">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-bold text-slate-800 dark:text-white mb-2 pr-8 group-hover:text-indigo-600 transition-colors duration-300">
                      AWS Certified Cloud Practitioner
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Amazon Web Services</p>
                    <div className="mt-3 px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-full text-xs font-medium text-indigo-600 dark:text-indigo-400 inline-block">
                      Verified
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 rounded-xl bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <span className="text-indigo-700 dark:text-indigo-200 font-semibold text-sm">Click to view certificate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Experience & Education */}
        <Section title="" className="relative bg-gradient-to-br from-slate-50/50 to-indigo-50/30 dark:from-slate-900/50 dark:to-indigo-950/30">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-purple-500"></div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-sm font-semibold tracking-wider uppercase">
                Timeline
              </span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Experience & Education
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Work Experience</h3>
              </div>

              <div className="space-y-8">
                {/* Current Role */}
                <div className="group relative pl-8 border-l-2 border-gradient-to-b from-indigo-500 to-purple-600">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-indigo-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
                    <div className="mb-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100/50 dark:bg-indigo-900/30 px-3 py-1 rounded-full inline-block">
                      April 2025 – Present
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-1">Cloud Engineer</h4>
                    <div className="text-slate-600 dark:text-slate-400 font-medium mb-3">AFI Digital Services LLP, Noida</div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Driving automation and cost-efficiency in large-scale Azure setups. Contributing to infrastructure design, hands-on scripting, and advancing DevOps maturity by integrating observability and resilience-focused improvements.
                    </p>
                  </div>
                </div>

                {/* Previous Roles */}
                <div className="group relative pl-8 border-l-2 border-purple-300 dark:border-purple-700">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 shadow-lg"></div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
                    <div className="mb-2 text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-100/50 dark:bg-purple-900/30 px-3 py-1 rounded-full inline-block">
                      Sept 2024 – April 2025
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-1">Cloud Engineering Intern</h4>
                    <div className="text-slate-600 dark:text-slate-400 font-medium mb-3">AFI Digital Services LLP, Noida</div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Optimized Azure infrastructure for a multilingual WHO-backed app using CosmosDB and Blob Storage. Built pipelines in Azure DevOps for content automation and researched cloud cost strategies.
                    </p>
                  </div>
                </div>

                <div className="group relative pl-8 border-l-2 border-blue-300 dark:border-blue-700">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg"></div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
                    <div className="mb-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100/50 dark:bg-blue-900/30 px-3 py-1 rounded-full inline-block">
                      July 2024 – Aug 2024
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-1">DevOps-Cloud Trainee</h4>
                    <div className="text-slate-600 dark:text-slate-400 font-medium mb-3">Wipro Limited, Gurgaon</div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Deployed AWS infrastructure using Terraform and automated deployments with GitHub Actions. Migrated Jenkins jobs and plugins across environments using Python and CLI.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Education</h3>
              </div>

              <div className="space-y-8">
                <div className="group relative pl-8 border-l-2 border-gradient-to-b from-purple-500 to-blue-600">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
                    <div className="mb-2 text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-100/50 dark:bg-purple-900/30 px-3 py-1 rounded-full inline-block">
                      2021 – Present
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-1">B.Tech in Computer Science</h4>
                    <div className="text-slate-600 dark:text-slate-400 font-medium">Bennett University, Greater Noida</div>
                  </div>
                </div>

                <div className="group relative pl-8 border-l-2 border-blue-300 dark:border-blue-700">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg"></div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
                    <div className="mb-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100/50 dark:bg-blue-900/30 px-3 py-1 rounded-full inline-block">
                      Graduated 2021
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-1">Senior Secondary (10+2)</h4>
                    <div className="text-slate-600 dark:text-slate-400 font-medium">Ahlcon International School, Delhi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default About;