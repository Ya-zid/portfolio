import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Github as GitHub, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <footer className="py-8 bg-slate-100 dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <a 
              href="https://github.com/Ya-zid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/yazid-slimani-24b51a24b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
          <p className="text-slate-600 dark:text-slate-400 mb-2 flex items-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> and code
          </p>
          
          <p className="text-sm text-slate-500 dark:text-slate-500">
            &copy; {new Date().getFullYear()} Yazid Slimani Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;