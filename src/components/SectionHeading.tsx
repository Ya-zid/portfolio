import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'left'
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const alignItems = {
    left: 'items-start',
    center: 'items-center',
    right: 'items-end',
  };

  return (
    <motion.div
      className={`mb-16 ${alignmentClasses[align]} ${alignItems[align]} flex flex-col gap-4`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative inline-block"
        initial={{ opacity: 0, x: align === 'right' ? 20 : align === 'left' ? -20 : 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white relative z-10">
          {title}
        </h2>
        {/* Decorative gradient underline */}
        <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-brand-500 to-accent-cyan rounded-full" />
      </motion.div>
      {subtitle && (
        <motion.p
          className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;