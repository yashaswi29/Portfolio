import React from 'react';

interface TechLogoProps {
  name: string;
  icon: React.ReactNode;
}

const TechLogo: React.FC<TechLogoProps> = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-primary-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="text-primary-900 dark:text-white mb-3 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <span className="text-sm font-medium text-primary-600 dark:text-primary-300">
        {name}
      </span>
    </div>
  );
};

export default TechLogo;