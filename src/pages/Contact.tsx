import React from 'react';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white dark:bg-primary-900 transition-colors duration-300">
      <div className="bg-terminal-grid pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl pt-16">
            <p className="font-mono text-sm text-accent mb-3">
              <span className="text-primary-400">$</span> ./contact --me
            </p>
            <h1 className="font-mono text-4xl sm:text-5xl font-bold text-primary-900 dark:text-[#F8F8F8] mb-4">
              <span className="text-accent">#</span> Get in Touch
            </h1>
            <p className="text-xl text-primary-600 dark:text-primary-300">
              I might join the army — there's a higher chance of getting deployed quickly.
            </p>
          </div>
        </div>
      </div>

      <Section title="contact information">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-primary-600 dark:text-primary-300 mb-8 leading-relaxed">
              Feel free to reach out anytime — through the form or any other way. I'm eager to connect, learn,
              and collaborate on meaningful projects. No matter the size, I'd love to hear what you're working on.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-accent/10 border border-accent/20 rounded-lg mr-4">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-medium text-primary-900 dark:text-[#F8F8F8]">email</h3>
                  <a href="mailto:yashaswitiwari2003@gmail.com" className="text-primary-600 dark:text-primary-300 hover:text-accent dark:hover:text-accent transition-colors duration-200">
                    yashaswitiwari2003@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-accent/10 border border-accent/20 rounded-lg mr-4">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-medium text-primary-900 dark:text-[#F8F8F8]">location</h3>
                  <p className="text-primary-600 dark:text-primary-300">New Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-mono text-sm font-medium text-primary-900 dark:text-[#F8F8F8] mb-4">connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yashaswi29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-accent/10 border border-accent/20 rounded-lg text-accent hover:bg-accent hover:text-primary-900 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/yashaswi-tiwari-5423211a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-accent/10 border border-accent/20 rounded-lg text-accent hover:bg-accent hover:text-primary-900 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
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
