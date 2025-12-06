import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const NavBar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full top-4 z-50 transition-all duration-500 ${
        isScrolled ? 'top-2' : 'top-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`${
          isScrolled
            ? 'glass-effect shadow-glass-lg'
            : 'bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md'
          } rounded-3xl px-6 py-3 transition-all duration-500`}
        >
          <div className="flex justify-between items-center">
            <a
              href="#"
              className="group flex items-center gap-2 text-lg md:text-xl font-display font-bold text-neutral-900 dark:text-white transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className='text-gradient group-hover:scale-110 transition-transform duration-300'> {"<"}</span>
              <span className="group-hover:text-gradient transition-all duration-300">YS</span>
              <span className='text-gradient group-hover:scale-110 transition-transform duration-300'> {"/>"}</span>
            </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-4 py-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-brand-50 dark:hover:bg-brand-950 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-all duration-300"
            >
              {t('nav.projects')}
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="px-4 py-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-brand-50 dark:hover:bg-brand-950 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-all duration-300"
            >
              {t('nav.experience')}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="px-4 py-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-brand-50 dark:hover:bg-brand-950 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-all duration-300"
            >
              {t('nav.skills')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-cyan text-white font-semibold shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transition-all duration-300"
            >
              {t('nav.contact')}
            </button>

            {/* Language Toggle */}
            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 hover:bg-brand-50 dark:hover:bg-brand-950 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-300 flex items-center gap-1"
                aria-label="Change language"
              >
                <Globe size={18} />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>

              {languageMenuOpen && (
                <div className="absolute top-full right-0 mt-2 glass-effect rounded-2xl shadow-glass overflow-hidden min-w-[120px]">
                  <button
                    onClick={() => {
                      if (language !== 'en') toggleLanguage();
                      setLanguageMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2.5 ${language === 'en' ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950' : 'text-neutral-700 dark:text-neutral-200'} hover:bg-brand-50 dark:hover:bg-brand-950 transition-colors font-medium`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      if (language !== 'fr') toggleLanguage();
                      setLanguageMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2.5 ${language === 'fr' ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950' : 'text-neutral-700 dark:text-neutral-200'} hover:bg-brand-50 dark:hover:bg-brand-950 transition-colors font-medium`}
                  >
                    Français
                  </button>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 hover:bg-brand-50 dark:hover:bg-brand-950 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-2">
            {/* Language Toggle Mobile */}
            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200"
                aria-label="Change language"
              >
                <Globe size={18} />
              </button>

              {languageMenuOpen && (
                <div className="absolute top-full right-0 mt-2 glass-effect rounded-2xl shadow-glass overflow-hidden min-w-[120px]">
                  <button
                    onClick={() => {
                      if (language !== 'en') toggleLanguage();
                      setLanguageMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2.5 ${language === 'en' ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950' : 'text-neutral-700 dark:text-neutral-200'} hover:bg-brand-50 dark:hover:bg-brand-950 transition-colors font-medium`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      if (language !== 'fr') toggleLanguage();
                      setLanguageMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2.5 ${language === 'fr' ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950' : 'text-neutral-700 dark:text-neutral-200'} hover:bg-brand-50 dark:hover:bg-brand-950 transition-colors font-medium`}
                  >
                    Français
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 dark:text-neutral-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mt-3 glass-effect rounded-3xl shadow-glass p-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-4 py-3 rounded-xl text-left text-neutral-700 dark:text-neutral-200 hover:bg-brand-50 dark:hover:bg-brand-950 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-all"
              >
                {t('nav.projects')}
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="px-4 py-3 rounded-xl text-left text-neutral-700 dark:text-neutral-200 hover:bg-brand-50 dark:hover:bg-brand-950 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-all"
              >
                {t('nav.experience')}
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="px-4 py-3 rounded-xl text-left text-neutral-700 dark:text-neutral-200 hover:bg-brand-50 dark:hover:bg-brand-950 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-all"
              >
                {t('nav.skills')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-3 rounded-xl text-left bg-gradient-to-r from-brand-500 to-accent-cyan text-white font-semibold shadow-lg shadow-brand-500/30 transition-all"
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;