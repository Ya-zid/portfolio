import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'li' | 'section';
}

const EASE = [0.22, 1, 0.36, 1] as const;

// Calm, single fade-and-rise reveal used across the site.
// Honors the OS "reduce motion" setting by rendering content statically.
const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className, as = 'div' }) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
