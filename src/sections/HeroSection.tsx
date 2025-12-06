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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950 transition-colors duration-300">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-purple-50 to-cyan-50 dark:from-neutral-950 dark:via-brand-950 dark:to-neutral-900 opacity-60" />

      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-accent-cyan to-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-accent-pink to-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf620_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf620_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-brand-400/30 dark:border-brand-400/20 rounded-lg"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-accent-cyan/30 dark:border-accent-cyan/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-12 h-12 bg-gradient-to-br from-brand-400/20 to-accent-cyan/20 backdrop-blur-sm"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass-effect border border-brand-200/50 dark:border-brand-800/50"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            AI Engineer & Full-Stack Developer
          </span>
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          className="text-6xl md:text-8xl font-display font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="text-neutral-900 dark:text-white">{t('hero.hello')} </span>
          <span className="text-gradient animate-gradient-xy bg-gradient-to-r from-brand-500 via-accent-cyan to-brand-600 bg-[length:200%_auto]">
            Yazid
          </span>
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-10 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <TypeAnimation
            key={t('hero.building')}
            sequence={[
              t('hero.building'),
              2000,
              t('hero.specializing'),
              2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-gradient font-semibold"
          />
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/yazid-slimani-24b51a24b"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="https://github.com/Ya-zid"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 rounded-2xl bg-gradient-to-r from-neutral-800 to-neutral-900 text-white shadow-lg shadow-neutral-900/30 hover:shadow-neutral-900/50 transition-all duration-300"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="GitHub"
          >
            <Github size={24} />
          </motion.a>
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-500 to-accent-cyan text-white font-semibold shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">{t('hero.viewProjects')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
          <motion.a
            href="#contact"
            className="group relative px-8 py-4 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-brand-500 text-brand-600 dark:text-brand-400 font-semibold hover:bg-brand-50 dark:hover:bg-brand-950 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('hero.contactMe')}
          </motion.a>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.button
          onClick={scrollToProjects}
          className="mt-16 p-3 rounded-full border-2 border-brand-400/50 text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-950 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, 10, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.8 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;