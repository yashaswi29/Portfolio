import React, { useContext, useEffect, useState } from 'react';
import {
  Award, GraduationCap, Briefcase, Cloud, Zap, Users
} from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import { useTracker } from '../hooks/useTracker';

import Terminal from '../components/Terminal';

const About: React.FC = () => {
  const { trackEvent } = useTracker();
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === 'dark';

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    trackEvent('ui', 'view', 'resume');
  }, [trackEvent]);

  const cardBase = isDarkMode
    ? 'bg-primary-800 border border-primary-700 hover:border-accent/50'
    : 'bg-white border border-primary-200 hover:border-accent/50';

  return (
    <div className="bg-white dark:bg-primary-900 relative min-h-screen overflow-hidden transition-colors duration-300 animate-fade-in">
      <div className="pt-16 bg-terminal-grid">
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-all duration-500 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          {/* Intro */}
          <div className="relative flex flex-col items-start mb-16">
            <p className="font-mono text-sm text-accent mb-3">
              <span className="text-primary-400">$</span> cat about.md
            </p>
            <h1 className="font-mono text-5xl sm:text-6xl font-bold text-primary-900 dark:text-[#F8F8F8] mb-6">
              <span className="text-accent">#</span> About Me
            </h1>

            <div className="grid lg:grid-cols-2 gap-12 w-full mt-4">
              <div className="space-y-6">
                <p className={`text-2xl leading-relaxed ${isDarkMode ? 'text-[#F8F8F8]' : 'text-gray-800'}`}>
                  Backend SDE with a Cloud & DevOps spine — building reliable services and automated infrastructure, and turning messy systems into boring ones.
                </p>
                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-primary-300' : 'text-gray-600'}`}>
                  Right now my day-to-day is privacy engineering: translating India's DPDP Act into working
                  software — consent and rights management platforms, Flask APIs, and the database
                  architecture underneath them. Before that I spent two years on cloud infrastructure and
                  automation. I believe in "Infrastructure as Code" and keeping systems boring (read: stable).
                  Outside work you'll find me on Linux, self-hosting models, and building AI tools that are
                  actually useful to me — like a local-first knowledge engine running entirely on my home server.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {['Python', 'Flask', 'REST APIs', 'PostgreSQL', 'SQLAlchemy', 'DPDPA / Privacy', 'Neo4j', 'Terraform', 'Azure', 'Docker', 'Linux'].map(tech => (
                    <span key={tech} className="font-mono px-3 py-1 rounded text-sm font-medium bg-accent/10 border border-accent/20 text-accent-700 dark:text-accent-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-6">
                  <a
                    href="https://drive.google.com/file/d/1Z29QgPKEC5tonkkur-pqj_nvtb2P2geF/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('ui', 'interaction', 'about_resume_click')}
                    className="inline-flex items-center justify-center px-6 py-3 font-mono text-base font-semibold rounded-lg text-primary-900 bg-accent hover:bg-accent-light transition-colors duration-300"
                  >
                    ./view_resume
                  </a>
                </div>
              </div>
              <div className="h-full min-h-[400px]">
                <Terminal className="h-full border border-accent/30 rounded-xl" />
              </div>
            </div>
          </div>

          {/* My Journey */}
          <div className="mb-16 mt-8">
            <h2 className="font-mono text-3xl font-bold text-primary-900 dark:text-[#F8F8F8] mb-12">
              <span className="text-accent">#</span> my journey
            </h2>
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                {[
                  {
                    icon: <Cloud className="w-7 h-7 text-primary-900" />,
                    title: 'The Spark',
                    body: 'Drawn to CI/CD, infrastructure as code, and automation that makes engineering smarter. Every challenge is a chance to build better systems and learn something new in the ever-evolving cloud landscape.',
                  },
                  {
                    icon: <Briefcase className="w-7 h-7 text-primary-900" />,
                    title: 'Current Journey',
                    body: 'Backend SDE at DPDP Consultants (Noida), sitting between functional consulting and engineering — turning Digital Personal Data Protection Act requirements into shipped software: consent management, data principal rights, and the Flask services and schemas behind them. Previously a Cloud Engineer at AFI Digital Services (Azure, Neo4j, Terraform, K3s) and an AWS/Terraform trainee at Wipro.',
                  },
                  {
                    icon: <Zap className="w-7 h-7 text-primary-900" />,
                    title: 'What Drives Me',
                    body: 'Constant building and learning — from backend and database internals to container orchestration and self-hosted AI. I thrive on solving complex problems and sharing what I learn with the community.',
                  },
                ].map((item, i) => (
                  <div key={i} className={`p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${cardBase}`}>
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-mono text-xl font-bold mb-3 ${isDarkMode ? 'text-[#F8F8F8]' : 'text-gray-800'}`}>{item.title}</h3>
                        <p className={`text-base leading-relaxed ${isDarkMode ? 'text-primary-300' : 'text-gray-600'}`}>
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <div className={`sticky top-24 p-8 rounded-2xl ${cardBase}`}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary-900" />
                    </div>
                    <h3 className={`font-mono text-xl font-bold ${isDarkMode ? 'text-[#F8F8F8]' : 'text-gray-800'}`}>Certifications</h3>
                  </div>
                  <div
                    className="group relative p-6 rounded-xl border border-primary-200 dark:border-primary-700 transition-all duration-300 cursor-pointer hover:border-accent/60 overflow-hidden"
                    onClick={() => window.open('https://drive.google.com/file/d/1gJYyj4SALVCRm_5neRtWCPcBqp212gh8/view?usp=sharing', '_blank')}
                    title="View Certificate"
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20 transition-opacity duration-300 bg-black/50 rounded-xl">
                      <span className="font-mono text-[#F8F8F8] text-sm">view certificate →</span>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                      <Award className="w-4 h-4 text-primary-900" />
                    </div>
                    <h4 className={`font-bold mb-3 pr-10 text-lg ${isDarkMode ? 'text-[#F8F8F8]' : 'text-gray-800'}`}>
                      AWS Certified Cloud Practitioner
                    </h4>
                    <p className={`text-base mb-4 ${isDarkMode ? 'text-primary-400' : 'text-gray-600'}`}>Amazon Web Services</p>
                    <div className="px-4 py-1.5 rounded-full font-mono text-xs font-medium inline-block bg-accent/15 text-accent">
                      verified
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience & Education */}
          <div className="mb-16">
            <h2 className="font-mono text-3xl font-bold text-primary-900 dark:text-[#F8F8F8] mb-12">
              <span className="text-accent">#</span> experience &amp; education
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Experience */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary-900" />
                  </div>
                  <h3 className={`font-mono text-xl font-bold ${isDarkMode ? 'text-[#F8F8F8]' : 'text-gray-800'}`}>Work Experience</h3>
                </div>
                <div className="space-y-8">
                  {[
                    {
                      date: 'April 2026 – Present',
                      role: 'Software Development Engineer — Backend',
                      org: 'DPDP Consultants, Noida',
                      bullets: [
                        'Work across functional consulting and backend engineering, translating Digital Personal Data Protection Act (DPDPA) requirements into scalable software for enterprise privacy compliance.',
                        'Designed and built a Consent Management Platform covering consent collection, withdrawal, purpose limitation, auditability, and full lifecycle management under DPDPA.',
                        'Built a Rights Management Platform that lets organizations handle Data Principal requests — access, correction, erasure, and grievance redressal — through configurable workflows.',
                        'Develop the Flask applications, REST APIs, and backend services powering privacy operations, workflow automation, and compliance management.',
                      ],
                    },
                    {
                      date: 'April 2025 – April 2026',
                      role: 'Cloud Engineer',
                      org: 'AFI Digital Services LLP, Noida',
                      bullets: [
                        'Built a Python-driven automated backup pipeline on K3s that orchestrates Neo4j and PostgreSQL dumps and ships them to Azure Blob Storage, hardening overall data recoverability.',
                        'Led the end-to-end migration of a complex content platform from Azure Cosmos DB (NoSQL) to Neo4j, reshaping document-centric data into a relationship-driven graph model across 7 entity types.',
                        'Codified infrastructure with Terraform to eliminate environment drift and keep development and production in lockstep.',
                        'Configured cloud storage, identity, and access controls to keep organizational data handling secure and aligned with client privacy requirements, including GDPR.',
                      ],
                    },
                    {
                      date: 'Sept 2024 – March 2025',
                      role: 'Cloud Engineering Intern',
                      org: 'AFI Digital Services LLP, Noida',
                      bullets: [
                        'Wrote Python automation to detect and purge redundant media assets across cloud storage, cutting application footprint by up to 60% and improving download speed and offline usability.',
                        'Implemented monitoring and validation checks to ensure data integrity across storage layers and automated processing jobs.',
                      ],
                    },
                    {
                      date: 'July 2024 – Aug 2024',
                      role: 'DevOps-Cloud Trainee',
                      org: 'Wipro Limited, Gurgaon',
                      bullets: [
                        'Provisioned AWS infrastructure with Terraform for repeatable, drift-free environments.',
                        'Automated build and deployment workflows with GitHub Actions.',
                        'Migrated Jenkins environments to streamline CI/CD pipelines.',
                      ],
                    },
                  ].map((job, i) => (
                    <div key={i} className="relative pl-8 border-l-2 border-accent/40">
                      <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent" />
                      <div className={`p-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5 ${cardBase}`}>
                        <div className="font-mono text-sm font-medium mb-2 text-accent">{job.date}</div>
                        <h4 className={`text-xl font-bold mb-1 ${isDarkMode ? 'text-[#F8F8F8]' : 'text-gray-800'}`}>{job.role}</h4>
                        <div className={`font-medium mb-3 text-sm ${isDarkMode ? 'text-primary-400' : 'text-gray-600'}`}>{job.org}</div>
                        <ul className="space-y-2">
                          {job.bullets.map((point, b) => (
                            <li key={b} className={`flex items-start gap-2.5 text-base leading-relaxed ${isDarkMode ? 'text-primary-300' : 'text-gray-600'}`}>
                              <span className="text-accent mt-1.5 shrink-0 text-xs">▸</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary-900" />
                  </div>
                  <h3 className={`font-mono text-xl font-bold ${isDarkMode ? 'text-[#F8F8F8]' : 'text-gray-800'}`}>Education</h3>
                </div>
                <div className="space-y-8">
                  {[
                    {
                      date: '2021 – 2025',
                      title: 'B.Tech in Computer Science & DevOps',
                      org: 'Bennett University, Greater Noida',
                    },
                    {
                      date: '2015 – 2021',
                      title: 'Senior Secondary (Class XII)',
                      org: 'Ahlcon International School, Delhi',
                    },
                  ].map((edu, i) => (
                    <div key={i} className="relative pl-8 border-l-2 border-accent/40">
                      <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent" />
                      <div className={`p-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5 ${cardBase}`}>
                        <div className="font-mono text-sm font-medium mb-2 text-accent">{edu.date}</div>
                        <h4 className={`text-xl font-bold mb-1 ${isDarkMode ? 'text-[#F8F8F8]' : 'text-gray-800'}`}>{edu.title}</h4>
                        <div className={`font-medium text-sm ${isDarkMode ? 'text-primary-400' : 'text-gray-600'}`}>{edu.org}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Leadership */}
                <div className="flex items-center gap-4 mb-8 mt-12">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-900" />
                  </div>
                  <h3 className={`font-mono text-xl font-bold ${isDarkMode ? 'text-[#F8F8F8]' : 'text-gray-800'}`}>Leadership</h3>
                </div>
                <div className="relative pl-8 border-l-2 border-accent/40">
                  <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent" />
                  <div className={`p-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5 ${cardBase}`}>
                    <div className="font-mono text-sm font-medium mb-2 text-accent">2023 – 2024</div>
                    <h4 className={`text-xl font-bold mb-1 ${isDarkMode ? 'text-[#F8F8F8]' : 'text-gray-800'}`}>President, DevOps Club</h4>
                    <div className={`font-medium mb-3 text-sm ${isDarkMode ? 'text-primary-400' : 'text-gray-600'}`}>Bennett University</div>
                    <p className={`text-base leading-relaxed ${isDarkMode ? 'text-primary-300' : 'text-gray-600'}`}>
                      Led a student tech community focused on cloud, automation, and DevOps practice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
