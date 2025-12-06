import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../components/SectionHeading';
import { Code, Database, Brain, Server, Globe, Lightbulb } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SkillCard: React.FC<{ 
  skill: { name: string; logo?: string; level: number };
  index: number;
}> = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const { t } = useLanguage();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white dark:bg-neutral-900 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-brand-400/50 dark:hover:border-brand-600/50 hover:shadow-lg transition-all h-full flex flex-col items-center justify-center text-center"
    >
      {skill.logo && (
        <span
          className="text-3xl mb-3"
          role="img"
          aria-label={skill.name}
        >
          {skill.logo}
        </span>
      )}
      <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-200 mb-3">
        {skill.name}
      </h3>
      <div className="w-full h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden mt-auto">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-500 to-accent-cyan rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
        />
      </div>
      <div className="flex justify-between w-full mt-2 text-xs text-neutral-500 dark:text-neutral-400">
        <span>{t('skills.beginner')}</span>
        <motion.span
          className="font-medium text-brand-600 dark:text-brand-400"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 + 1.2 }}
        >
          {skill.level}%
        </motion.span>
        <span>{t('skills.expert')}</span>
      </div>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();
  
  const skillsCategories = [
    {
      id: 'languages',
      name: t('skills.categories.languages'),
      icon: <Code size={24} />,
      skills: [
        { name: 'Python', logo: '🐍', level: 95 },
        { name: 'JavaScript', logo: '📜', level: 90 },
        { name: 'C++', logo: '⚡', level: 80 },
        { name: 'Octave', logo: '📊', level: 85 },
        { name: 'SQL', logo: '🗄️', level: 90 },
        { name: 'Bash/Shell', logo: '🐚', level: 75 },
        { name: 'Java', logo: '☕', level: 75 },
        { name: 'HTML/CSS', logo: '🌐', level: 90 },
        { name: 'PHP', logo: '🐘', level: 70 },
        { name: 'Kotlin', logo: '🎨', level: 65 }
      ]
    },
    {
      id: 'databases',
      name: t('skills.categories.databases'),
      icon: <Database size={24} />,
      skills: [
        { name: 'PostgreSQL', logo: '🐘', level: 90 },
        { name: 'MongoDB', logo: '🍃', level: 85 },
        { name: 'MySQL', logo: '🐬', level: 85 },
        { name: 'SQLite', logo: '📱', level: 80 },
        { name: 'Supabase', logo: '📦', level: 75 },
      ]
    },
    {
      id: 'ml',
      name: t('skills.categories.ml'),
      icon: <Brain size={24} />,
      skills: [
        { name: 'TensorFlow', logo: '🧠', level: 90 },
        { name: 'PyTorch', logo: '🔥', level: 85 },
        { name: 'Scikit-learn', logo: '🤖', level: 90 },
        { name: 'Pandas', logo: '🐼', level: 95 },
        { name: 'NumPy', logo: '🔢', level: 95 },
        { name: 'OpenCV', logo: '👁', level: 80 },
        { name: 'Matplotlib', logo: '📊', level: 90 },
        { name: 'Seaborn', logo: '📈', level: 85 },
        { name: 'Plotly', logo: '📉', level: 80 },
        { name: 'Streamlit', logo: '📱', level: 75 },
        { name: 'LangChain', logo: '🔗', level: 75 }
      ]
    },
    {
      id: 'deployment',
      name: t('skills.categories.deployment'),
      icon: <Server size={24} />,
      skills: [
        { name: 'Docker', logo: '🐳', level: 90 },
        { name: 'AWS', logo: '☁️', level: 50 },
        { name: 'GitHub Actions', logo: '⚡', level: 80 },
        { name: 'CI/CD', logo: '🔄', level: 75 }
      ]
    },
    {
      id: 'web',
      name: t('skills.categories.web'),
      icon: <Globe size={24} />,
      skills: [
        { name: 'React', logo: '⚛️', level: 90 },
        { name: 'Node.js', logo: '💚', level: 85 },
        { name: 'Tailwind CSS', logo: '🎨', level: 90 },
        { name: 'Express', logo: '🚂', level: 85 },
        { name: 'Next.js', logo: '▲', level: 80 },
        { name: 'Laravel', logo: '🅻', level: 75 },
        { name: 'GraphQL', logo: '🔗', level: 70 },
      ]
    },
    {
      id: 'other',
      name: t('skills.categories.other'),
      icon: <Lightbulb size={24} />,
      skills: [
        { name: t('skills.other.leadership'), level: 90 },
        { name: t('skills.other.agile'), level: 90 },
        { name: t('skills.other.systemDesign'), level: 85 },
        { name: t('skills.other.strategicPlanning'), level: 90 },
        { name: t('skills.other.productManagement'), level: 85 },
        { name: t('skills.other.businessDevelopment'), level: 85 },
        { name: t('skills.other.publicSpeaking'), level: 90 },
        { name: t('skills.other.technicalWriting'), level: 85 },
        { name: t('skills.other.problemSolving'), level: 95 },
        { name: t('skills.other.dataVisualization'), level: 90 },
        { name: t('skills.other.apiDesign'), level: 85 }
      ]
    }
  ];
  
  const [activeCategory, setActiveCategory] = useState(skillsCategories[0].id);
  const [isChanging, setIsChanging] = useState(false);
  
  const currentCategory = skillsCategories.find(category => category.id === activeCategory);
  
  const handleCategoryChange = (categoryId: string) => {
    if (categoryId !== activeCategory) {
      setIsChanging(true);
      setTimeout(() => {
        setActiveCategory(categoryId);
        setIsChanging(false);
      }, 300);
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };
  
  return (
    <section id="skills" className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <SectionHeading
            title={t('skills.title')}
            subtitle={t('skills.subtitle')}
            align="center"
          />

          {/* Category Tabs - Animated */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            variants={containerVariants}
          >
            {skillsCategories.map(category => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center px-4 py-3 rounded-lg text-sm md:text-base transition-all relative overflow-hidden ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-brand-500 to-accent-cyan text-white shadow-lg shadow-brand-500/30'
                    : 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-brand-400/50 dark:hover:border-brand-600/50'
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={activeCategory === category.id ? 'active' : 'inactive'}
                style={{
                  '--color-white': 'rgb(255, 255, 255)',
                  '--color-blue-600': 'rgb(37, 99, 235)',
                  '--color-slate-700': 'rgb(51, 65, 85)',
                  '--color-slate-100': 'rgb(243, 244, 246)',
                } as any}
              >
                {activeCategory === category.id && (
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-600 dark:to-blue-400 -z-10"
                    layoutId="activeCategoryBackground"
                    initial={false}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 20,
                    }}
                  />
                )}
                <span className="mr-2">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
          
          {/* Skills Content with 3D hover effect */}
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 shadow-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center"
                layout
              >
                <motion.span 
                  className="mr-3 text-blue-600 dark:text-blue-400 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg"
                  layoutId="categoryIcon"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }}
                >
                  {currentCategory?.icon}
                </motion.span>
                <motion.span layoutId="categoryTitle">
                  {currentCategory?.name}
                </motion.span>
              </motion.h3>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={isChanging ? 'pointer-events-none' : ''}
                >
                  {/* Grid layout for skills with masonry effect */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                    {currentCategory?.skills.map((skill, index) => (
                      <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Custom styles for 3D effect */}
      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;