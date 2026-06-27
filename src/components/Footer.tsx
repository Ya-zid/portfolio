import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-ink-200 bg-white py-10 dark:border-ink-800 dark:bg-ink-950">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-10">
        <p className="font-display text-sm font-semibold text-ink-900 dark:text-white">Yazid Slimani</p>

        <p className="order-last text-xs text-ink-400 md:order-none">
          &copy; {new Date().getFullYear()} Yazid Slimani
        </p>

        <div className="flex items-center gap-1">
          <a
            href="https://github.com/Ya-zid"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 text-ink-500 transition-colors hover:text-ink-900 dark:text-ink-400 dark:hover:text-white"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/yazid-slimani-24b51a24b"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 text-ink-500 transition-colors hover:text-ink-900 dark:text-ink-400 dark:hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
