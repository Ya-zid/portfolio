import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { useLanguage } from '../context/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title={t('about.title')}
          subtitle={t('about.subtitle')}
          align="center"
        />

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-8">
          {/* Futuristic Profile Card */}
          <div className="w-full md:w-64 bg-white dark:bg-slate-700/30 rounded-lg overflow-hidden flex-shrink-0 border border-slate-200 dark:border-slate-700/50 shadow-sm transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="relative p-4 flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-md opacity-70"></div>
                <img
                  src="/images/avatar.jpg"
                  alt="Yazid"
                  className="relative w-28 h-28 object-cover rounded-full border-2 border-white/50"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-slate-800"></div>
              </div>
              
              <h3 className="mt-4 text-xl font-medium text-slate-800 dark:text-white">Yazid</h3>
              
              <div className="mt-1 text-sm text-slate-600 dark:text-slate-300 font-light tracking-wide">
                <span className="inline-flex items-center">
                  <span className="h-px w-5 bg-blue-400 mr-2"></span>
                  {t('about.status')}
                </span>
              </div>
              
              <a 
                href="/files/Yazid-resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 w-full py-2 px-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/80 text-slate-800 dark:text-white text-sm rounded border border-blue-400/30 hover:border-blue-400 transition-all flex items-center justify-center group"
              >
                <span className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{t('about.viewResume')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center md:text-left mt-6 md:mt-0 max-w-4xl mx-auto">
            <p className="text-base text-slate-700 dark:text-slate-300 mb-4">
              {t('about.paragraph1')}
            </p>
            <p className="text-base text-slate-700 dark:text-slate-300 mb-4">
              {t('about.paragraph2')}
            </p>
            <p className="text-base text-slate-700 dark:text-slate-300 mb-4">
              {t('about.paragraph3')}
            </p>
            <p className="text-base text-slate-700 dark:text-slate-300">
              {t('about.paragraph4')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;