import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../components/SectionHeading';
import { Calendar, MapPin, Briefcase, Award, ArrowRight, Lightbulb } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const { t } = useLanguage();
  
  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Experience data with translation keys
  const experienceData = [
    {
      id: 1,
      role: t('experience.atpm.role'),
      company: t('experience.atpm.company'),
      location: t('experience.atpm.location'),
      period: t('experience.atpm.period'),
      description: t('experience.atpm.description'),
      achievements: [
        t('experience.atpm.achievement1'),
        t('experience.atpm.achievement2'),
        t('experience.atpm.achievement3'),
      ],
      highlights: [
        { icon: <Award size={18} />, text: t('experience.atpm.highlight1') },
        { icon: <Lightbulb size={18} />, text: t('experience.atpm.highlight2') },
      ]
    },
    {
      id: 2,
      role: t('experience.base360.role'),
      company: t('experience.base360.company'),
      location: t('experience.base360.location'),
      period: t('experience.base360.period'),
      description: t('experience.base360.description'),
      achievements: [
        t('experience.base360.achievement1'),
        t('experience.base360.achievement2'),
        t('experience.base360.achievement3'),
      ],
      highlights: [
        { icon: <Award size={18} />, text: t('experience.base360.highlight1') },
        { icon: <Lightbulb size={18} />, text: t('experience.base360.highlight2') },
      ]
    },
    {
      id: 3,
      role: t('experience.noc.role'),
      company: t('experience.noc.company'),
      location: t('experience.noc.location'),
      period: t('experience.noc.period'),
      description: t('experience.noc.description'),
      achievements: [
        t('experience.noc.achievement1'),
        t('experience.noc.achievement2'),
        t('experience.noc.achievement3'),
      ],
      highlights: [
        { icon: <Award size={18} />, text: t('experience.noc.highlight1') },
        { icon: <Lightbulb size={18} />, text: t('experience.noc.highlight2') },
      ]
    },
    {
      id: 4,
      role: t('experience.gostu.role'),
      company: t('experience.gostu.company'),
      location: t('experience.gostu.location'),
      period: t('experience.gostu.period'),
      description: t('experience.gostu.description'),
      achievements: [
        t('experience.gostu.achievement1'),
        t('experience.gostu.achievement2'),
        t('experience.gostu.achievement3'),
      ],
      highlights: [
        { icon: <Award size={18} />, text: t('experience.gostu.highlight1') },
        { icon: <Lightbulb size={18} />, text: t('experience.gostu.highlight2') },
      ]
    },
    {
      id: 5,
      role: t('experience.skilltell.role'),
      company: t('experience.skilltell.company'),
      location: t('experience.skilltell.location'),
      period: t('experience.skilltell.period'),
      description: t('experience.skilltell.description'),
      achievements: [
        t('experience.skilltell.achievement1'),
        t('experience.skilltell.achievement2'),
        t('experience.skilltell.achievement3'),
      ],
      highlights: [
        { icon: <Award size={18} />, text: t('experience.skilltell.highlight1') },
        { icon: <Lightbulb size={18} />, text: t('experience.skilltell.highlight2') },
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-neutral-950 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf608_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf608_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            title={t('experience.title')}
            subtitle={t('experience.subtitle')}
            align="center"
          />
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {experienceData.map((experience, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
              rootMargin: '-100px'
            });

            const isExpanded = expandedId === experience.id;

            return (
              <motion.div
                key={experience.id}
                ref={ref}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15
                }}
                className={`relative pl-12 pb-16 ${
                  index !== experienceData.length - 1 ? 'before:content-[""] before:absolute before:left-[15px] before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-brand-500 before:via-accent-cyan before:to-brand-400 dark:before:from-brand-600 dark:before:via-accent-cyan dark:before:to-brand-500' : ''
                }`}
              >
                {/* Timeline Dot with Glow Effect */}
                <motion.div
                  className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-accent-cyan flex items-center justify-center ring-4 ring-white dark:ring-neutral-950 shadow-glow z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                >
                  <motion.div
                    className="w-3 h-3 rounded-full bg-white"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                </motion.div>
                
                {/* Content Card */}
                <motion.div
                  className={`group relative glass-effect rounded-3xl p-8 ml-6 hover:shadow-glass-lg transition-all duration-300 cursor-pointer ${
                    isExpanded ? 'border-2 border-brand-500/50 shadow-glow' : 'border border-brand-200/20 dark:border-brand-800/20'
                  }`}
                  layoutId={`card-container-${experience.id}`}
                  onClick={() => toggleExpand(experience.id)}
                  whileHover={{ x: 8, scale: 1.01 }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <motion.div layoutId={`title-container-${experience.id}`}>
                      <motion.h3
                        className="text-2xl font-display font-bold text-neutral-900 dark:text-white mb-2"
                        layoutId={`title-${experience.id}`}
                      >
                        {experience.role}
                      </motion.h3>
                      <motion.h4
                        className="text-lg font-semibold bg-gradient-to-r from-brand-500 to-accent-cyan bg-clip-text text-transparent"
                        layoutId={`company-${experience.id}`}
                      >
                        {experience.company}
                      </motion.h4>
                    </motion.div>

                    <motion.div
                      className="flex flex-col text-neutral-500 dark:text-neutral-400 text-sm gap-2"
                      layoutId={`meta-container-${experience.id}`}
                    >
                      <motion.div
                        className="flex items-center gap-2"
                        layoutId={`period-${experience.id}`}
                      >
                        <Calendar size={16} className="text-brand-500" />
                        <span className="font-medium">{experience.period}</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2"
                        layoutId={`location-${experience.id}`}
                      >
                        <MapPin size={16} className="text-brand-500" />
                        <span className="font-medium">{experience.location}</span>
                      </motion.div>
                    </motion.div>
                  </div>

                  <motion.p
                    className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed"
                    layoutId={`description-${experience.id}`}
                  >
                    {experience.description}
                  </motion.p>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.h5
                          className="font-display font-semibold text-neutral-900 dark:text-white flex items-center gap-2 mb-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="p-2 bg-gradient-to-br from-brand-500 to-accent-cyan rounded-lg">
                            <Briefcase size={18} className="text-white" />
                          </div>
                          {t('experience.keyAchievements')}
                        </motion.h5>

                        <motion.ul className="list-none space-y-3 text-neutral-600 dark:text-neutral-400 mb-6">
                          {experience.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start gap-3 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/50 dark:border-neutral-800/50"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                            >
                              <ArrowRight size={16} className="mt-0.5 text-brand-500 flex-shrink-0" />
                              <span className="leading-relaxed">{achievement}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                        
                        {experience.highlights && (
                          <motion.div
                            className="pt-4 border-t border-neutral-200 dark:border-neutral-800"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                          >
                            <div className="flex flex-wrap gap-3 mt-4">
                              {experience.highlights.map((highlight, i) => (
                                <motion.div
                                  key={i}
                                  className="flex items-center gap-2 glass-effect border border-brand-200/30 dark:border-brand-800/30 text-brand-700 dark:text-brand-300 px-4 py-2 rounded-full text-sm font-medium"
                                  initial={{ scale: 0.8, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ delay: 0.5 + i * 0.1 }}
                                  whileHover={{ scale: 1.05 }}
                                >
                                  <span className="text-brand-500 dark:text-brand-400">{highlight.icon}</span>
                                  <span>{highlight.text}</span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div
                    className="flex justify-center mt-6"
                    layoutId={`expand-button-${experience.id}`}
                  >
                    <motion.button
                      className="px-6 py-2 rounded-full glass-effect border border-brand-200/30 dark:border-brand-800/30 text-brand-600 dark:text-brand-400 text-sm font-medium hover:bg-brand-50 dark:hover:bg-brand-950 transition-all flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{isExpanded ? t('experience.showLess') : t('experience.showMore')}</span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        ▼
                      </motion.div>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;