import React from 'react';
import { ArrowUpRight, Lock } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

type Project = {
  id: number;
  titleKey: string;
  descriptionKey: string;
  metaKey: string;
  tags: string[];
  url?: string;
  github?: string;
  isPrivateRepo?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    titleKey: 'projects.gostu.title',
    descriptionKey: 'projects.gostu.description',
    metaKey: 'projects.gostu.meta',
    tags: ['React', 'Laravel', 'MongoDB', 'WebRTC'],
    url: 'https://gostu.net',
    isPrivateRepo: true,
  },
  {
    id: 2,
    titleKey: 'projects.base360.title',
    descriptionKey: 'projects.base360.description',
    metaKey: 'projects.base360.meta',
    tags: ['React', 'FastAPI', 'AI', 'SaaS'],
    url: 'https://base360.ai',
    isPrivateRepo: true,
  },
  {
    id: 3,
    titleKey: 'projects.jade.title',
    descriptionKey: 'projects.jade.description',
    metaKey: 'projects.jade.meta',
    tags: ['React', 'Node.js', 'PostgreSQL', 'ERP'],
    isPrivateRepo: true,
  },
  {
    id: 4,
    titleKey: 'projects.neural.title',
    descriptionKey: 'projects.neural.description',
    metaKey: 'projects.neural.meta',
    tags: ['Machine Learning', 'XGBoost', 'Python'],
    github: 'https://github.com/Ya-zid/WNCSProject',
  },
  {
    id: 5,
    titleKey: 'projects.eyecare.title',
    descriptionKey: 'projects.eyecare.description',
    metaKey: 'projects.eyecare.meta',
    tags: ['React', 'Express', 'Supabase'],
    url: 'https://eye-care-scheduler-easy-cogjzwxs3-ya-zids-projects.vercel.app/',
    isPrivateRepo: true,
  },
  {
    id: 6,
    titleKey: 'projects.cyberbullying.title',
    descriptionKey: 'projects.cyberbullying.description',
    metaKey: 'projects.cyberbullying.meta',
    tags: ['NLP', 'Text Classification', 'Python'],
    github: 'https://github.com/Ya-zid/NLPCyberBullyingProject',
  },
  {
    id: 7,
    titleKey: 'projects.semantic.title',
    descriptionKey: 'projects.semantic.description',
    metaKey: 'projects.semantic.meta',
    tags: ['NLP', 'BERT', 'Streamlit'],
    github: 'https://github.com/Ya-zid/SemanticSearchEngine',
  },
  {
    id: 8,
    titleKey: 'projects.medical.title',
    descriptionKey: 'projects.medical.description',
    metaKey: 'projects.medical.meta',
    tags: ['Machine Learning', 'Association Rules', 'Python'],
    github: 'https://github.com/Ya-zid/Project-Ketchup-main',
  },
];

const ProjectRow: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const { t } = useLanguage();
  const number = String(index + 1).padStart(2, '0');

  return (
    <Reveal as="li" className="group border-t border-ink-200 dark:border-ink-800">
      <div className="grid gap-x-10 gap-y-4 py-8 md:grid-cols-[3rem_1fr_auto]">
        <span className="hidden font-mono text-sm text-ink-300 dark:text-ink-600 md:block">
          {number}
        </span>

        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight text-ink-900 dark:text-white">
            {t(project.titleKey)}
          </h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-label text-ink-400">
            {t(project.metaKey)}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-500 dark:text-ink-300">
            {t(project.descriptionKey)}
          </p>
          <p className="mt-4 font-mono text-xs text-ink-400 dark:text-ink-500">
            {project.tags.join('  ·  ')}
          </p>
        </div>

        <div className="flex flex-row gap-4 md:flex-col md:items-end md:gap-3">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-ink-900 transition-colors hover:text-accent dark:text-white dark:hover:text-accent-light"
            >
              {t('projects.viewLive')}
              <ArrowUpRight size={15} />
            </a>
          )}
          {project.github && !project.isPrivateRepo && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-ink-700 transition-colors hover:text-accent dark:text-ink-300 dark:hover:text-accent-light"
            >
              {t('projects.viewCode')}
              <ArrowUpRight size={15} />
            </a>
          )}
          {project.isPrivateRepo && (
            <span className="inline-flex items-center gap-1.5 text-sm text-ink-400 dark:text-ink-500">
              <Lock size={13} />
              {t('projects.private')}
            </span>
          )}
        </div>
      </div>
    </Reveal>
  );
};

const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="work" className="border-t border-ink-100 bg-ink-50 py-24 dark:border-ink-900 dark:bg-ink-900/40 sm:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <SectionHeading number="01" eyebrow={t('nav.projects')} title={t('projects.title')} subtitle={t('projects.subtitle')} />
        <ul className="border-b border-ink-200 dark:border-ink-800">
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
