import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onScrollDown: () => void;
}

const HeroSection = ({ onScrollDown }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      {/* Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/30"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-accent/30"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-highlight/30"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-terminal font-mono text-lg mb-4"
        >
          {'> '}Hello, World!
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          I'm <span className="text-gradient">Yunseok Hwang</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-3 text-xl md:text-2xl text-muted-foreground mb-8"
        >
          <span className="w-12 h-[1px] bg-border" />
          <span>Software Engineer @ Palantir</span>
          <span className="w-12 h-[1px] bg-border" />
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 text-sm font-mono mb-12"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground">UNC Chapel Hill '26</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-muted-foreground">CS + Statistics</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-highlight animate-pulse" />
            <span className="text-muted-foreground">3.8 GPA</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={onScrollDown}
        className="absolute bottom-12 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-sm font-mono">scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
