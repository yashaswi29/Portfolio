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
            <p className="mt-6 text-xl text-primary-600 dark:text-primary-300 animate-fade-in-up">
              A passionate DevOps engineer with expertise in cloud infrastructure and automation.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bio Section */}
      <Section title="Biography">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-primary-900 dark:text-white leading-relaxed">
                I'm a seasoned Cloud DevOps Engineer with over X years of experience designing, implementing, and maintaining robust cloud infrastructure. My passion lies in automating processes, optimizing performance, and ensuring scalable, reliable systems.
              </p>
              <p className="text-primary-900 dark:text-white leading-relaxed">
                My expertise spans infrastructure as code, containerization, orchestration, and CI/CD pipelines. I thrive in collaborative environments where I can leverage my technical skills to solve complex problems and drive innovation.
              </p>
              <p className="text-primary-900 dark:text-white leading-relaxed">
                Beyond technical skills, I bring strong communication abilities and a focus on documentation. I believe in creating systems that not only work efficiently but are also understandable and maintainable by teams.
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
                href="/resume.pdf"
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
                <h4 className="font-bold text-primary-900 dark:text-white">AWS Certified DevOps Engineer</h4>
                <p className="text-sm text-primary-600 dark:text-primary-300">Amazon Web Services</p>
              </li>
              <li className="bg-white dark:bg-primary-800 p-4 rounded-lg shadow-sm transition-colors duration-300">
                <h4 className="font-bold text-primary-900 dark:text-white">Certified Kubernetes Administrator</h4>
                <p className="text-sm text-primary-600 dark:text-primary-300">Cloud Native Computing Foundation</p>
              </li>
              <li className="bg-white dark:bg-primary-800 p-4 rounded-lg shadow-sm transition-colors duration-300">
                <h4 className="font-bold text-primary-900 dark:text-white">HashiCorp Certified: Terraform Associate</h4>
                <p className="text-sm text-primary-600 dark:text-primary-300">HashiCorp</p>
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
                <div className="mb-1 text-sm text-primary-600 dark:text-primary-300">2021 - Present</div>
                <h4 className="text-lg font-bold text-primary-900 dark:text-white">Senior DevOps Engineer</h4>
                <div className="text-primary-600 dark:text-primary-300">Company Name</div>
                <p className="mt-2 text-primary-600 dark:text-primary-300">
                  Led cloud infrastructure projects, optimized CI/CD pipelines, and implemented microservices architecture.
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-700">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-900 dark:bg-white"></div>
                <div className="mb-1 text-sm text-primary-600 dark:text-primary-300">2018 - 2021</div>
                <h4 className="text-lg font-bold text-primary-900 dark:text-white">Cloud Engineer</h4>
                <div className="text-primary-600 dark:text-primary-300">Company Name</div>
                <p className="mt-2 text-primary-600 dark:text-primary-300">
                  Designed and maintained AWS infrastructure, automated deployments, and improved system reliability.
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
                <div className="mb-1 text-sm text-primary-600 dark:text-primary-300">2014 - 2018</div>
                <h4 className="text-lg font-bold text-primary-900 dark:text-white">B.S. in Computer Science</h4>
                <div className="text-primary-600 dark:text-primary-300">University Name</div>
                <p className="mt-2 text-primary-600 dark:text-primary-300">
                  Specialized in distributed systems and cloud computing.
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-700">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-900 dark:bg-white"></div>
                <div className="mb-1 text-sm text-primary-600 dark:text-primary-300">Continuous Learning</div>
                <h4 className="text-lg font-bold text-primary-900 dark:text-white">Professional Development</h4>
                <div className="text-primary-600 dark:text-primary-300">Various Platforms</div>
                <p className="mt-2 text-primary-600 dark:text-primary-300">
                  Regularly engage in courses and workshops to stay current with emerging technologies and best practices.
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