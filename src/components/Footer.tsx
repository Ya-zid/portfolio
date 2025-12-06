import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Github as GitHub, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <footer className="py-12 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-3 mb-6">
            <a
              href="https://github.com/Ya-zid"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-brand-50 dark:hover:bg-brand-950 hover:text-brand-600 dark:hover:text-brand-400 transition-all"
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/yazid-slimani-24b51a24b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-brand-50 dark:hover:bg-brand-950 hover:text-brand-600 dark:hover:text-brand-400 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <p className="text-neutral-600 dark:text-neutral-400 mb-3 flex items-center font-medium">
            Made with <Heart size={16} className="mx-1.5 text-red-500 fill-red-500" /> and code
          </p>

          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            &copy; {new Date().getFullYear()} Yazid Slimani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;