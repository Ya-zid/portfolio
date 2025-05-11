import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import NavBar from './components/NavBar';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import FunSection from './sections/FunSection';
import AboutSection from './sections/AboutSection';
import ScrollProgressBar from './components/ScrollProgressBar';
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ScrollProgressBar />
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
          <NavBar />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
          <FunSection />
          <Footer />
          
        </div>
        
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;