import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../components/SectionHeading';
import { Calendar, MapPin, Briefcase, Award, ArrowRight, Lightbulb } from 'lucide-react';

// Sample experience data
const experienceData = [
  {
    id: 1,
    role: 'Intern - Network Operations Center (NOC)',
    company: 'Algérie Télécom',
    location: 'Ben Aknoun, Algiers',
    period: 'Sep 2024 – Oct 2024',
    description:
      'As part of the Network Operations Center (NOC), I gained practical exposure to real-time network monitoring, infrastructure maintenance, and incident resolution within Algeria’s national telecom backbone.',
    achievements: [
      'Collaborated with engineers on troubleshooting voice line, FTTX, and LTE network issues',
      'Contributed to improvements in an internal PHP-based monitoring system, optimizing performance by 60%',
      'Engaged in on-site technical interventions and infrastructure documentation',
    ],
    highlights: [
      { icon: <Award size={18} />, text: 'Hands-on experience with systems like Fiberhome, ZTE, Huawei, and Nokia' },
      { icon: <Lightbulb size={18} />, text: 'Enhanced communication and stress management under real-time operations' },
    ]
  },
  {
    id: 2,
    role: 'Product Owner (Former CEO)',
    company: 'Gostu',
    location: 'Algiers, Algeria',
    period: 'Jul 2023 – Nov 2024',
    description:
      'Led the early-stage development of Gostu, a student-oriented platform aiming to improve academic and career navigation across Algeria through peer insights and tools.',
    achievements: [
      'Reached over 15,000 unique visitors within the first two months of beta launch',
      'Built and led a multidisciplinary team to execute on design, development, and marketing',
      'Pioneered development of one of Algeria’s first intelligent AI bots for educational Q&A (unpublished)',
    ],
    highlights: [
      { icon: <Award size={18} />, text: 'Achieved strong traction with zero external funding' },
      { icon: <Lightbulb size={18} />, text: 'Introduced smart educational assistance tools to the local student ecosystem' },
    ]
  },
  {
    id: 3,
    role: 'President',
    company: 'Skill&Tell Club – ENSIA',
    location: 'Algiers, Algeria',
    period: '2021 – 2024',
    description:
      'As founding president of ENSIA’s first official student club, I led Skill&Tell for three years, empowering students through events, workshops, and community-building initiatives.',
    achievements: [
      'Organized over 20 events including hackathons, talks, and skill-development workshops',
      'Mentored successive generations of student leaders and built strong cross-department collaboration',
      'Fostered a culture of continuous learning and peer support across the campus',
    ],
    highlights: [
      { icon: <Award size={18} />, text: 'Pioneered ENSIA’s first recognized student club' },
      { icon: <Lightbulb size={18} />, text: 'Recognized for student impact and community engagement by faculty and peers' },
    ]
  }
];



const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);
  
  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionHeading 
            title="Experience" 
            subtitle="My professional journey in AI and machine learning." 
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
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.2
                }}
                className={`relative pl-8 pb-12 ${
                  index !== experienceData.length - 1 ? 'before:content-[""] before:absolute before:left-3 before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-400 before:to-blue-200 dark:before:from-blue-600 dark:before:to-blue-900/50' : ''
                }`}
              >
                {/* Timeline Dot with Animation */}
                <motion.div 
                  className="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-400 flex items-center justify-center ring-4 ring-white dark:ring-slate-800 z-10"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
                >
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-white"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                </motion.div>
                
                {/* Content Card */}
                <motion.div 
                  className={`bg-white dark:bg-slate-900 rounded-xl shadow-sm p-6 ml-4 hover:shadow-md transition-all duration-300 border-l-4 ${
                    isExpanded ? 'border-blue-500 dark:border-blue-400' : 'border-transparent'
                  }`}
                  layoutId={`card-container-${experience.id}`}
                  onClick={() => toggleExpand(experience.id)}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                    <motion.div layoutId={`title-container-${experience.id}`}>
                      <motion.h3 
                        className="text-xl font-bold text-slate-900 dark:text-white"
                        layoutId={`title-${experience.id}`}
                      >
                        {experience.role}
                      </motion.h3>
                      <motion.h4 
                        className="text-lg font-medium text-blue-600 dark:text-blue-400"
                        layoutId={`company-${experience.id}`}
                      >
                        {experience.company}
                      </motion.h4>
                    </motion.div>
                    
                    <motion.div 
                      className="flex flex-col text-slate-500 dark:text-slate-400 text-sm"
                      layoutId={`meta-container-${experience.id}`}
                    >
                      <motion.div 
                        className="flex items-center mb-1"
                        layoutId={`period-${experience.id}`}
                      >
                        <Calendar size={14} className="mr-1" />
                        <span>{experience.period}</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center"
                        layoutId={`location-${experience.id}`}
                      >
                        <MapPin size={14} className="mr-1" />
                        <span>{experience.location}</span>
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <motion.p 
                    className="text-slate-600 dark:text-slate-400 mb-4"
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
                          className="font-medium text-slate-900 dark:text-white flex items-center mb-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Briefcase size={16} className="mr-2 text-blue-500 dark:text-blue-400" />
                          Key Achievements
                        </motion.h5>
                        
                        <motion.ul className="list-none space-y-2 text-slate-600 dark:text-slate-400 mb-4">
                          {experience.achievements.map((achievement, i) => (
                            <motion.li 
                              key={i}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                            >
                              <ArrowRight size={14} className="mr-2 mt-1.5 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                        
                        {experience.highlights && (
                          <motion.div 
                            className="pt-2 border-t border-slate-200 dark:border-slate-700"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                          >
                            <div className="flex flex-wrap gap-2 mt-2">
                              {experience.highlights.map((highlight, i) => (
                                <motion.div
                                  key={i}
                                  className="flex items-center bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full text-sm"
                                  initial={{ scale: 0.8, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ delay: 0.5 + i * 0.1 }}
                                >
                                  <span className="mr-1.5 text-blue-500 dark:text-blue-400">{highlight.icon}</span>
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
                    className="flex justify-center mt-2"
                    layoutId={`expand-button-${experience.id}`}
                  >
                    <motion.button
                      className="text-blue-500 dark:text-blue-400 text-sm flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isExpanded ? 'Show Less' : 'Show More'}
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