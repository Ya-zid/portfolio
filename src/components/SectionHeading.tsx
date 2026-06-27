import React from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  number?: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, eyebrow, number, subtitle }) => {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-3">
        {number && (
          <span className="font-mono text-xs text-accent dark:text-accent-light">{number}</span>
        )}
        {eyebrow && (
          <span className="font-mono text-xs uppercase tracking-label text-ink-400">{eyebrow}</span>
        )}
      </div>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-500 dark:text-ink-300">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
