import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import yunseokPhoto from '@/assets/yunseok-photo.jpg';

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

  const resumeLink = "https://drive.google.com/file/d/1DHLbm0nb4f4BQQd59Bqus_RqhF57Man6/view";

  return (
    <div className="min-h-screen p-8 md:p-16 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 items-center max-w-5xl">
          {/* Left Side - Text Content */}
          <div>
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary">
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
                Here's a quick overview of my <span className="text-accent">CS career</span>.
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
                    <span className="font-display text-2xl tracking-wider">
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          </div>

          {/* Right Side - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="pixel-border p-2 bg-card">
              <img 
                src={yunseokPhoto} 
                alt="Yunseok Hwang" 
                className="w-72 h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
