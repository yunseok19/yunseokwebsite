import { useState, useRef, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';
import Terminal from '@/components/Terminal';
import { motion } from 'framer-motion';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [showTerminal, setShowTerminal] = useState(false);
  
  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: string) => {
    const ref = sectionRefs[section as keyof typeof sectionRefs];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(section);
    }
  };

  const handleScrollDown = () => {
    sectionRefs.about.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Track current section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      if (scrollPosition < window.innerHeight) {
        setCurrentSection('home');
        return;
      }

      for (const [section, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show terminal after initial load
  useEffect(() => {
    const timer = setTimeout(() => setShowTerminal(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation currentSection={currentSection} onNavigate={scrollToSection} />
      
      {/* Hero with Terminal */}
      <div className="relative">
        <HeroSection onScrollDown={handleScrollDown} />
        
        {/* Terminal Overlay */}
        {showTerminal && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-32 left-1/2 -translate-x-1/2 w-full px-4"
          >
            <Terminal 
              onCommandExecute={scrollToSection} 
              currentSection={currentSection} 
            />
          </motion.div>
        )}
      </div>

      <div ref={sectionRefs.about}>
        <AboutSection />
      </div>
      
      <div ref={sectionRefs.experience}>
        <ExperienceSection />
      </div>
      
      <div ref={sectionRefs.skills}>
        <SkillsSection />
      </div>
      
      <div ref={sectionRefs.education}>
        <EducationSection />
      </div>
      
      <div ref={sectionRefs.contact}>
        <ContactSection />
      </div>

      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none scanline opacity-30" />
    </div>
  );
};

export default Index;
