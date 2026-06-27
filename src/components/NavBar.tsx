import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const NavBar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'work', label: t('nav.projects') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'border-b border-ink-200/70 bg-white/80 backdrop-blur-md dark:border-ink-800 dark:bg-ink-950/80'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <button
          onClick={scrollTop}
          className="font-display text-base font-semibold tracking-tight text-ink-900 transition-colors hover:text-accent dark:text-white dark:hover:text-accent-light"
        >
          Yazid Slimani
        </button>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-500 transition-colors hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
            >
              {s.label}
            </button>
          ))}

          <div className="mx-2 h-5 w-px bg-ink-200 dark:bg-ink-800" />

          <button
            onClick={toggleLanguage}
            className="rounded-md px-2.5 py-2 font-mono text-xs font-medium text-ink-500 transition-colors hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
            aria-label="Toggle language"
          >
            {language.toUpperCase()}
          </button>

          <button
            onClick={toggleTheme}
            className="rounded-md p-2 text-ink-500 transition-colors hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={toggleLanguage}
            className="rounded-md px-2.5 py-2 font-mono text-xs font-medium text-ink-500 dark:text-ink-300"
            aria-label="Toggle language"
          >
            {language.toUpperCase()}
          </button>
          <button
            onClick={toggleTheme}
            className="rounded-md p-2 text-ink-500 dark:text-ink-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-2 text-ink-700 dark:text-ink-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-ink-200/70 bg-white/95 backdrop-blur-md md:hidden dark:border-ink-800 dark:bg-ink-950/95">
          <div className="mx-auto flex max-w-content flex-col px-6 py-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className="py-3 text-left text-sm font-medium text-ink-600 transition-colors hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
