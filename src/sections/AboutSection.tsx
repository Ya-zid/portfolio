import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { useLanguage } from '../context/LanguageContext';
import { Download, MapPin, Mail, Code2 } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-neutral-950 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf608_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf608_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title={t('about.title')}
          subtitle={t('about.subtitle')}
          align="center"
        />

        {/* Bento Grid Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card - Spans 2 rows on desktop */}
          <motion.div
            className="md:row-span-2 glass-effect rounded-3xl p-8 border border-brand-200/20 dark:border-brand-800/20 hover:shadow-glass-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center">
              {/* Avatar with gradient glow */}
              <motion.div
                className="relative mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-500 to-accent-cyan blur-2xl opacity-40 animate-pulse-slow"></div>
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-neutral-900 shadow-glow">
                  <img
                    src="/images/avatar.jpg"
                    alt="Yazid"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Status indicator */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent-emerald rounded-full border-4 border-white dark:border-neutral-900 animate-pulse"></div>
              </motion.div>

              <h3 className="text-2xl font-display font-bold text-neutral-900 dark:text-white mb-2">Yazid Slimani</h3>

              <div className="flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full glass-effect">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {t('about.status')}
                </span>
              </div>

              {/* Quick Info */}
              <div className="w-full space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                  <MapPin className="w-4 h-4 text-brand-500" />
                  <span>Algiers, Algeria</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                  <Mail className="w-4 h-4 text-brand-500" />
                  <span className="truncate">yazid.slimani@ensia.edu.dz</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                  <Code2 className="w-4 h-4 text-brand-500" />
                  <span>AI Engineer</span>
                </div>
              </div>

              {/* Resume Button */}
              <motion.a
                href="/files/Yazid-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-gradient-to-r from-brand-500 to-accent-cyan text-white font-semibold rounded-2xl shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                <span>{t('about.viewResume')}</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Bio Card 1 */}
          <motion.div
            className="md:col-span-2 glass-effect rounded-3xl p-8 border border-brand-200/20 dark:border-brand-800/20 hover:shadow-glass-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-display font-bold text-neutral-900 dark:text-white mb-3">
              Background & Experience
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {t('about.paragraph1')}
            </p>
          </motion.div>

          {/* Bio Card 2 */}
          <motion.div
            className="md:col-span-2 glass-effect rounded-3xl p-8 border border-brand-200/20 dark:border-brand-800/20 hover:shadow-glass-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              {t('about.paragraph2')}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {t('about.paragraph3')}
            </p>
          </motion.div>

          {/* Mission Statement Card */}
          <motion.div
            className="md:col-span-3 glass-effect rounded-3xl p-8 border-2 border-brand-500/30 dark:border-brand-500/20 bg-gradient-to-br from-brand-50/50 to-cyan-50/50 dark:from-brand-950/30 dark:to-cyan-950/30 hover:shadow-glass-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-12 bg-gradient-to-b from-brand-500 to-accent-cyan rounded-full"></div>
              <p className="text-xl md:text-2xl font-display font-semibold text-neutral-900 dark:text-white">
                {t('about.paragraph4')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;