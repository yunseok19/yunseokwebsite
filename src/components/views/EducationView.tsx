import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface EducationViewProps {
  onBack: () => void;
}

const EducationView = ({ onBack }: EducationViewProps) => {
  return (
    <div className="min-h-screen p-8 md:p-16">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm">BACK TO MAIN</span>
        </button>
        
        <h1 className="font-display text-5xl md:text-6xl text-primary text-glow">
          EDUCATION_
        </h1>
      </motion.header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl"
      >
        {/* University Card */}
        <div className="pixel-border bg-card p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-accent text-glow-accent mb-2">
                UNC CHAPEL HILL
              </h2>
              <p className="font-mono text-muted-foreground">
                Chapel Hill, North Carolina
              </p>
            </div>
            <div className="text-right">
              <div className="font-display text-2xl text-highlight text-glow-highlight">
                3.8 GPA
              </div>
              <p className="font-mono text-sm text-muted-foreground">
                Expected: May 2026
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-primary">▸</span>
              <span className="font-mono text-lg">B.S. in Computer Science</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent">▸</span>
              <span className="font-mono text-lg">B.S. in Statistics and Analytics</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-highlight">▸</span>
              <span className="font-mono text-lg text-muted-foreground">Minor in Entrepreneurship</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'MAJORS', value: '2', color: 'primary' },
            { label: 'MINOR', value: '1', color: 'accent' },
            { label: 'GPA', value: '3.8', color: 'highlight' },
            { label: 'YEAR', value: '2026', color: 'pink' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="pixel-border bg-card p-4 text-center"
            >
              <div className={`font-display text-3xl text-${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </div>
  );
};

export default EducationView;
