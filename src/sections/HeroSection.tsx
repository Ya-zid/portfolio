import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const EASE = [0.22, 1, 0.36, 1] as const;

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Page-load reveal, gated by reduced-motion.
  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <section className="relative flex min-h-screen items-center bg-white dark:bg-ink-950">
      <div className="mx-auto w-full max-w-content px-6 pt-28 pb-20 md:px-10">
        <div className="max-w-3xl">
          <motion.p
            {...rise(0)}
            className="font-mono text-xs uppercase tracking-label text-ink-400"
          >
            {t('hero.location')}
            <span className="mx-2 text-ink-300 dark:text-ink-700">/</span>
            <span className="text-accent dark:text-accent-light">{t('hero.availability')}</span>
          </motion.p>

          <motion.h1
            {...rise(0.08)}
            className="mt-7 font-display text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-[1.04] tracking-tight text-ink-900 dark:text-white"
          >
            {t('hero.heading')}
          </motion.h1>

          {/* Signature touch: a single accent rule that draws in */}
          <motion.div
            className="mt-7 h-px w-28 origin-left bg-accent dark:bg-accent-light"
            initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
          />

          <motion.p
            {...rise(0.16)}
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-500 dark:text-ink-300"
          >
            {t('hero.subheading')}
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-10 flex flex-wrap items-center gap-3">
            <button
              onClick={scrollToWork}
              className="rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent dark:bg-white dark:text-ink-950 dark:hover:bg-accent-light"
            >
              {t('hero.viewProjects')}
            </button>
            <a
              href="#contact"
              className="rounded-full border border-ink-300 px-6 py-3 text-sm font-semibold text-ink-800 transition-colors hover:border-ink-900 hover:text-ink-950 dark:border-ink-700 dark:text-ink-200 dark:hover:border-ink-400 dark:hover:text-white"
            >
              {t('hero.contactMe')}
            </a>

            <div className="ml-1 flex items-center gap-1">
              <a
                href="https://github.com/Ya-zid"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2.5 text-ink-500 transition-colors hover:text-ink-900 dark:text-ink-400 dark:hover:text-white"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/yazid-slimani-24b51a24b"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2.5 text-ink-500 transition-colors hover:text-ink-900 dark:text-ink-400 dark:hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <button
        onClick={scrollToWork}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-ink-300 transition-colors hover:text-ink-600 md:block dark:text-ink-700 dark:hover:text-ink-300"
        aria-label="Scroll to work"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
};

export default HeroSection;
