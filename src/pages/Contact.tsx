import React from 'react';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="bg-white dark:bg-primary-900 pt-20 pb-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-900 dark:text-white leading-tight animate-fade-in-up">
              Get in Touch
            </h1>
            <p className="mt-6 text-xl text-primary-600 dark:text-primary-300 animate-fade-in-up">
              I might join army, because there is a higher chance of getting deployed quickly.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <Section title="Contact Information">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-primary-600 dark:text-primary-300 mb-8">
              Feel free to reach out anytime—whether it’s through the contact form or any other way. I’m really eager to connect, learn, and grow. These days, I’m happy to help out, collaborate, or even work for free just to support meaningful projects and gain experience. No matter the size, I’d love to hear about what you’re working on!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-primary-100 dark:bg-primary-800 rounded-full mr-4">
                  <Mail size={20} className="text-primary-900 dark:text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-primary-900 dark:text-white">Email</h3>
                  <a href="mailto:your.email@example.com" className="text-primary-600 dark:text-primary-300 hover:text-primary-900 dark:hover:text-white transition-colors duration-200">
                    yashaswitiwari2003@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-primary-100 dark:bg-primary-800 rounded-full mr-4">
                  <MapPin size={20} className="text-primary-900 dark:text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-primary-900 dark:text-white">Location</h3>
                  <p className="text-primary-600 dark:text-primary-300">New Delhi, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-sm font-medium text-primary-900 dark:text-white mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/yashaswi29" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-primary-100 dark:bg-primary-800 rounded-full text-primary-900 dark:text-white hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/yashaswi-tiwari-5423211a8/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-primary-100 dark:bg-primary-800 rounded-full text-primary-900 dark:text-white hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </Section>
    </div>
  );
};

export default Contact;