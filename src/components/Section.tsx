import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  id?: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, id, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-mono text-2xl md:text-3xl font-bold mb-12 text-primary-900 dark:text-[#F8F8F8]">
          <span className="text-accent">#</span> {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
