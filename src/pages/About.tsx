import React from 'react';
import { 
  FileText, Award, GraduationCap, 
  Briefcase, ChevronRight
} from 'lucide-react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="bg-white dark:bg-primary-900 pt-20 pb-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-900 dark:text-white leading-tight animate-fade-in-up">
              About Me
            </h1>
          </div>
        </div>
      </div>
      
      {/* Bio Section */}
      <Section title="Biography">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-primary-900 dark:text-white leading-relaxed">
                Over the past couple of years, I’ve found myself completely drawn to the world of CI/CD pipelines, infrastructure as code, and everything that makes modern engineering smoother and smarter.
              </p>
              <p className="text-primary-900 dark:text-white leading-relaxed">
                Currently working as a Cloud Engineering Intern at AFI Digital Services, I’m hands-on with Azure—optimizing infrastructure for real-world apps, automating pipelines, and always chasing cost-effective, high-availability solutions. Before this, I was at Wipro, diving deep into AWS, Terraform, Jenkins, and GitHub Actions—learning how real infrastructure scales and evolves.
              </p>
              <p className="text-primary-900 dark:text-white leading-relaxed">
                What drives me is the constant opportunity to learn and build. Whether it’s writing Python scripts to automate boring stuff, figuring out why a container won’t deploy, or shaving dollars off a cloud bill, I’m all in. I love exploring tools, experimenting, and being part of teams where growth and knowledge-sharing are the norm. I'm looking forward to working as a team where I can keep learning, contribute meaningfully, and geek out over DevOps with people who get just as excited about infra diagrams and logs as I do.
              </p>
            </div>
            
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-900 dark:bg-white dark:text-primary-900 hover:bg-primary-800 dark:hover:bg-primary-100 transition-colors duration-200"
              >
                Get in Touch
                <ChevronRight size={16} className="ml-2" />
              </Link>
              <a
                href="https://drive.google.com/file/d/1L6nbfrfm8hILaPqyJxX2Nlf8g_zH1TN4/view?usp=sharing"
                className="inline-flex items-center justify-center ml-4 px-5 py-3 border border-primary-900 dark:border-white text-base font-medium rounded-md text-primary-900 dark:text-white hover:bg-primary-50 dark:hover:bg-primary-800 transition-colors duration-200"
              >
                <FileText size={16} className="mr-2" />
                Resume
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-900 dark:text-white flex items-center">
              <Award size={20} className="mr-2" />
              Certifications
            </h3>
            <ul className="space-y-4">
              <li className="bg-white dark:bg-primary-800 p-4 rounded-lg shadow-sm transition-colors duration-300">
                <h4 className="font-bold text-primary-900 dark:text-white">AWS Certified Cloud Practitoner</h4>
                <p className="text-sm text-primary-600 dark:text-primary-300">Amazon Web Services</p>
              </li>
            </ul>
          </div>
        </div>
      </Section>
      
      {/* Experience & Education */}
      <Section title="Experience & Education" className="bg-primary-50 dark:bg-primary-800/50">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary-900 dark:text-white flex items-center">
              <Briefcase size={20} className="mr-2" />
              Work Experience
            </h3>

            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-700">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-900 dark:bg-white"></div>
                <div className="mb-1 text-sm text-primary-600 dark:text-primary-300">April 2025 – Present</div>
                <h4 className="text-lg font-bold text-primary-900 dark:text-white">Cloud Engineer</h4>
                <div className="text-primary-600 dark:text-primary-300">AFI Digital Services LLP, Noida</div>
                <p className="mt-2 text-primary-600 dark:text-primary-300">
                  Driving automation and cost-efficiency in large-scale Azure setups. 
                  Contributing to infrastructure design, hands-on scripting, and advancing DevOps maturity by integrating observability and resilience-focused improvements.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-700">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-900 dark:bg-white"></div>
                <div className="mb-1 text-sm text-primary-600 dark:text-primary-300">Sept 2024 – April 2025</div>
                <h4 className="text-lg font-bold text-primary-900 dark:text-white">Cloud Engineering Intern</h4>
                <div className="text-primary-600 dark:text-primary-300">AFI Digital Services LLP, Noida</div>
                <p className="mt-2 text-primary-600 dark:text-primary-300">
                  Optimized Azure infrastructure for a multilingual WHO-backed app using CosmosDB and Blob Storage.
                  Built pipelines in Azure DevOps for content automation and researched cloud cost strategies, leading to substantial savings and efficiency.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-700">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-900 dark:bg-white"></div>
                <div className="mb-1 text-sm text-primary-600 dark:text-primary-300">July 2024 – Aug 2024</div>
                <h4 className="text-lg font-bold text-primary-900 dark:text-white">DevOps-Cloud Trainee</h4>
                <div className="text-primary-600 dark:text-primary-300">Wipro Limited, Gurgaon</div>
                <p className="mt-2 text-primary-600 dark:text-primary-300">
                  Deployed AWS infrastructure using Terraform and automated deployments with GitHub Actions.
                  Migrated Jenkins jobs and plugins across environments using Python and CLI to ensure stable and repeatable pipelines.
                </p>
              </div>
            </div>
          </div>

        
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary-900 dark:text-white flex items-center">
              <GraduationCap size={20} className="mr-2" />
              Education
            </h3>

            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-700">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-900 dark:bg-white"></div>
                <div className="mb-1 text-sm text-primary-600 dark:text-primary-300">2021 – Present</div>
                <h4 className="text-lg font-bold text-primary-900 dark:text-white">B.Tech in Computer Science</h4>
                <div className="text-primary-600 dark:text-primary-300">Bennett University, Greater Noida</div>
                <p className="mt-2 text-primary-600 dark:text-primary-300">
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-700">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-900 dark:bg-white"></div>
                <div className="mb-1 text-sm text-primary-600 dark:text-primary-300">Graduated 2021</div>
                <h4 className="text-lg font-bold text-primary-900 dark:text-white">Senior Secondary (10+2)</h4>
                <div className="text-primary-600 dark:text-primary-300">Ahlcon International School, Delhi</div>
                <p className="mt-2 text-primary-600 dark:text-primary-300">
                </p>
              </div>
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
};

export default About;