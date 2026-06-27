import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-t border-ink-100 bg-white py-24 dark:border-ink-900 dark:bg-ink-950 sm:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-label text-ink-400">
            {t('about.title')}
          </span>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          {/* Bio */}
          <Reveal>
            <h2 className="font-display text-2xl font-semibold leading-snug tracking-tight text-ink-900 dark:text-white sm:text-3xl">
              {t('about.lead')}
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-500 dark:text-ink-300">
              <p>{t('about.paragraph1')}</p>
              <p>{t('about.paragraph2')}</p>
              <p>{t('about.paragraph3')}</p>
            </div>
          </Reveal>

          {/* Facts panel */}
          <Reveal delay={0.1}>
            <dl className="space-y-6 border-t border-ink-200 pt-6 dark:border-ink-800">
              <div>
                <dt className="font-mono text-xs uppercase tracking-label text-ink-400">
                  {t('about.nowLabel')}
                </dt>
                <dd className="mt-2 space-y-1 text-sm text-ink-700 dark:text-ink-200">
                  <p>{t('about.now1')}</p>
                  <p>{t('about.now2')}</p>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-label text-ink-400">
                  {t('about.basedLabel')}
                </dt>
                <dd className="mt-2 text-sm text-ink-700 dark:text-ink-200">{t('contact.locationValue')}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-label text-ink-400">
                  {t('contact.email')}
                </dt>
                <dd className="mt-2 text-sm">
                  <a
                    href="mailto:yazid.slimani@ensia.edu.dz"
                    className="inline-flex items-center gap-1 text-ink-700 transition-colors hover:text-accent dark:text-ink-200 dark:hover:text-accent-light"
                  >
                    yazid.slimani@ensia.edu.dz
                    <ArrowUpRight size={14} />
                  </a>
                </dd>
              </div>
              <a
                href="/files/Yazid-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-b border-ink-300 pb-1 text-sm font-medium text-ink-900 transition-colors hover:border-accent hover:text-accent dark:border-ink-700 dark:text-white dark:hover:border-accent-light dark:hover:text-accent-light"
              >
                <Download size={15} />
                {t('about.viewResume')}
              </a>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
