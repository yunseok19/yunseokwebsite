import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomeView from '@/components/views/HomeView';
import EducationView from '@/components/views/EducationView';
import ExperienceView from '@/components/views/ExperienceView';
import SkillsView from '@/components/views/SkillsView';
import ContactView from '@/components/views/ContactView';

type View = 'home' | 'education' | 'experience' | 'skills' | 'contact';

const Index = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    // Simulate boot sequence
    const timer = setTimeout(() => setIsBooting(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView onNavigate={setCurrentView} />;
      case 'education':
        return <EducationView onBack={() => setCurrentView('home')} />;
      case 'experience':
        return <ExperienceView onBack={() => setCurrentView('home')} />;
      case 'skills':
        return <SkillsView onBack={() => setCurrentView('home')} />;
      case 'contact':
        return <ContactView onBack={() => setCurrentView('home')} />;
      default:
        return <HomeView onNavigate={setCurrentView} />;
    }
  };

  if (isBooting) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center crt-screen">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-display text-4xl text-primary text-glow mb-4"
          >
            BOOTING SYSTEM...
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "linear" }}
            className="h-2 bg-primary w-64 mx-auto"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background crt-screen overflow-hidden">
      {/* CRT Border Frame */}
      <div className="fixed inset-4 border-4 border-primary/30 pointer-events-none z-50" />
      
      {/* Scanlines overlay */}
      <div className="fixed inset-0 scanlines pointer-events-none z-40" />
      
      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentView}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="min-h-screen"
        >
          {renderView()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Index;
