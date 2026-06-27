import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();

  const categories = [
    {
      id: 'languages',
      name: t('skills.categories.languages'),
      items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'Java', 'PHP', 'Bash'],
    },
    {
      id: 'ml',
      name: t('skills.categories.ml'),
      items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'LangChain', 'Streamlit'],
    },
    {
      id: 'web',
      name: t('skills.categories.web'),
      items: ['React', 'Next.js', 'Node.js', 'Express', 'Laravel', 'Tailwind CSS', 'FastAPI'],
    },
    {
      id: 'data',
      name: t('skills.categories.databases'),
      items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase', 'SQLite'],
    },
    {
      id: 'deployment',
      name: t('skills.categories.deployment'),
      items: ['Docker', 'GitHub Actions', 'CI/CD', 'AWS', 'Vercel'],
    },
    {
      id: 'other',
      name: t('skills.categories.other'),
      items: [
        t('skills.other.leadership'),
        t('skills.other.productManagement'),
        t('skills.other.strategicPlanning'),
        t('skills.other.agile'),
        t('skills.other.systemDesign'),
        t('skills.other.businessDevelopment'),
        t('skills.other.publicSpeaking'),
      ],
    },
  ];

  return (
    <section id="skills" className="border-t border-ink-100 bg-ink-50 py-24 dark:border-ink-900 dark:bg-ink-900/40 sm:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <SectionHeading number="03" eyebrow={t('nav.skills')} title={t('skills.title')} subtitle={t('skills.subtitle')} />

        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <Reveal key={category.id} delay={i * 0.05}>
              <h3 className="font-mono text-xs uppercase tracking-label text-ink-400">{category.name}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-ink-200 bg-white px-3 py-1.5 text-sm text-ink-700 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
