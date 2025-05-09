import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import NavBar from './components/NavBar';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';
import FunSection from './sections/FunSection';
import AboutSection from './sections/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <NavBar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
          <FunSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;