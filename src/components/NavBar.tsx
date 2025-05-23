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
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md py-2 shadow-sm' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="text-lg md:text-xl font-bold text-slate-900 dark:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className='text-blue-600'> {"< "}</span>
            

            {"YS_Portfolio "}

            <span className='text-blue-600'> {" />"}</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t('nav.projects')}
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t('nav.experience')}
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t('nav.skills')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t('nav.contact')}
            </button>
            
            {/* Language Toggle */}
            <div className="relative">
              <button 
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center"
                aria-label="Change language"
              >
                <Globe size={18} />
                <span className="ml-1">{language.toUpperCase()}</span>
              </button>
              
              {languageMenuOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white dark:bg-slate-800 rounded-md shadow-md z-50">
                  <button 
                    onClick={() => {
                      if (language !== 'en') toggleLanguage();
                      setLanguageMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 ${language === 'en' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-200'} hover:bg-slate-100 dark:hover:bg-slate-700`}
                  >
                    English
                  </button>
                  <button 
                    onClick={() => {
                      if (language !== 'fr') toggleLanguage();
                      setLanguageMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 ${language === 'fr' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-200'} hover:bg-slate-100 dark:hover:bg-slate-700`}
                  >
                    Français
                  </button>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            {/* Language Toggle Mobile */}
            <div className="relative">
              <button 
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                aria-label="Change language"
              >
                <Globe size={18} />
              </button>
              
              {languageMenuOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white dark:bg-slate-800 rounded-md shadow-md z-50">
                  <button 
                    onClick={() => {
                      if (language !== 'en') toggleLanguage();
                      setLanguageMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 ${language === 'en' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-200'} hover:bg-slate-100 dark:hover:bg-slate-700`}
                  >
                    English
                  </button>
                  <button 
                    onClick={() => {
                      if (language !== 'fr') toggleLanguage();
                      setLanguageMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 ${language === 'fr' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-200'} hover:bg-slate-100 dark:hover:bg-slate-700`}
                  >
                    Français
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 dark:text-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-md py-4 px-4 md:hidden transition-all">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors"
            >
              {t('nav.projects')}
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors"
            >
              {t('nav.experience')}
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors"
            >
              {t('nav.skills')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors"
            >
              {t('nav.contact')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;