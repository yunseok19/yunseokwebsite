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

  const resumeLink = "https://drive.google.com/file/d/1vlw1_F-6hvPXeUJIzuSAnpm63rqMTx6B/view?usp=sharing";

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
            Here's a quick overview of my <span className="text-accent text-glow-accent">CS career</span>.
          </p>
          <p className="font-mono text-sm text-muted-foreground mt-4">
            {'>'} Incoming FDSE @ Palantir | UNC Chapel Hill '26 | CS + Stats
          </p>
          
          {/* Resume Link */}
          <motion.a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="inline-flex items-center gap-2 mt-6 px-4 py-2 font-mono text-sm border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all"
          >
            <span>📄</span>
            <span>VIEW RESUME</span>
          </motion.a>
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

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-auto pt-8"
      >
        <div className="flex flex-wrap gap-6 text-sm font-mono text-muted-foreground">
          <span>{'>'} PRESS [1-4] OR CLICK TO NAVIGATE</span>
          <span className="text-primary">■</span>
          <span>SYSTEM READY</span>
        </div>
      </motion.footer>
    </div>
  );
};

export default HomeView;
