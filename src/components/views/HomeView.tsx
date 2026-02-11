import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import profilePhoto from '@/assets/profile-photo.png';

interface HomeViewProps {
  onNavigate: (view: 'education' | 'experience' | 'skills' | 'contact') => void;
}

const HomeView = ({ onNavigate }: HomeViewProps) => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi, I'm Yunseok Hwang!";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    { id: 'education', label: '[1] EDUCATION', color: 'primary' },
    { id: 'experience', label: '[2] EXPERIENCE', color: 'accent' },
    { id: 'skills', label: '[3] SKILLS', color: 'highlight' },
    { id: 'contact', label: '[4] CONTACT', color: 'pink' },
  ] as const;



  return (
    <div className="min-h-screen p-8 md:p-16 flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 text-muted-foreground font-mono text-sm">
          <span className="text-primary">▸</span>
          <span>YUNSEOK_PORTFOLIO.EXE</span>
          <span className="text-primary">|</span>
          <span>v1.0.0</span>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
        <div className="flex-1 max-w-2xl">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary text-glow">
            {typedText}
            <span className="cursor-blink">_</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <p className="font-mono text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl">
            Here's a quick overview of my <span className="text-accent text-glow-accent">CS career</span>. For fun, I like to play soccer, poker, and eat good food.
          </p>
          <p className="font-mono text-sm text-muted-foreground mt-4">
            {'>'} Incoming FDSE @ Palantir | UNC Chapel Hill '26 | CS + Stats
          </p>
        </motion.div>

        {/* Navigation Menu */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="space-y-4"
        >
          <p className="font-mono text-sm text-muted-foreground mb-6">
            {'>'} SELECT AN OPTION:
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                onClick={() => onNavigate(item.id)}
                className="retro-button text-left group"
              >
                <span className="font-display text-2xl tracking-wider group-hover:text-glow">
                  {item.label}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.nav>
        </div>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="flex-shrink-0 hidden lg:block"
        >
          <div className="pixel-border p-2 bg-card">
            <img 
              src={profilePhoto} 
              alt="Yunseok Hwang" 
              className="w-72 h-72 object-cover"
            />
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default HomeView;
