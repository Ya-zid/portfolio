import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        {/* Name and Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t('hero.hello')} <span className="text-blue-600 dark:text-blue-400">Yazid</span>
        </motion.h1>

        <motion.div
          className="text-xl text-slate-700 dark:text-slate-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <TypeAnimation
            sequence={[
              t('hero.building'), 
              2000, 
              t('hero.specializing'), 
              2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-blue-600 dark:text-blue-400"
          />
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <a
            href="https://www.linkedin.com/in/yazid-slimani-24b51a24b"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/Ya-zid"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-900 text-white hover:bg-slate-700 transition-all"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button
            onClick={scrollToProjects}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all"
          >
            {t('hero.viewProjects')}
          </button>
          <a
            href="#contact"
            className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-all"
          >
            {t('hero.contactMe')}
          </a>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.button
          onClick={scrollToProjects}
          className="mt-12 p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;