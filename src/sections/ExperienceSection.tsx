import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();

  const experienceData = [
    { id: 1, key: 'boonka' },
    { id: 2, key: 'atpm' },
    { id: 3, key: 'base360' },
    { id: 4, key: 'noc' },
    { id: 5, key: 'gostu' },
    { id: 6, key: 'skilltell' },
  ].map((e) => ({
    id: e.id,
    role: t(`experience.${e.key}.role`),
    company: t(`experience.${e.key}.company`),
    location: t(`experience.${e.key}.location`),
    period: t(`experience.${e.key}.period`),
    description: t(`experience.${e.key}.description`),
    achievements: [
      t(`experience.${e.key}.achievement1`),
      t(`experience.${e.key}.achievement2`),
      t(`experience.${e.key}.achievement3`),
    ],
  }));

  return (
    <section id="experience" className="border-t border-ink-100 bg-white py-24 dark:border-ink-900 dark:bg-ink-950 sm:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <SectionHeading number="02" eyebrow={t('nav.experience')} title={t('experience.title')} subtitle={t('experience.subtitle')} />

        <ol className="border-b border-ink-200 dark:border-ink-800">
          {experienceData.map((exp) => (
            <Reveal as="li" key={exp.id} className="border-t border-ink-200 dark:border-ink-800">
              <div className="grid gap-x-10 gap-y-3 py-10 md:grid-cols-[14rem_1fr]">
                <div className="md:pt-1">
                  <p className="font-mono text-xs uppercase tracking-label text-ink-400">{exp.period}</p>
                  <p className="mt-1 text-sm text-ink-400 dark:text-ink-500">{exp.location}</p>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent dark:text-accent-light">{exp.company}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                    {exp.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                        <span className="mt-2 h-px w-3 flex-shrink-0 bg-ink-300 dark:bg-ink-600" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
