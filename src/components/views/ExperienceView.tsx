import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar } from 'lucide-react';

interface ExperienceViewProps {
  onBack: () => void;
}

const experiences = [
  {
    id: 'palantir',
    company: 'PALANTIR TECHNOLOGIES',
    role: 'Forward Deployed Software Engineer',
    location: 'New York City, NY',
    period: 'July 2026 - Present',
    status: 'INCOMING',
    highlights: ['Incoming Forward Deployed Software Engineer'],
    color: 'primary'
  },
  {
    id: 'mercor',
    company: 'MERCOR',
    role: 'Machine Learning Engineer',
    location: 'Remote',
    period: 'Nov 2024 - Aug 2025',
    status: 'CONTRACT',
    highlights: [
      'Built Python implementations within internal ML workflow tools',
      'Added validation checks and runtime debugging tools',
      'Developed ML code for LLM improvement at an AI lab'
    ],
    color: 'accent'
  },
  {
    id: 'aws',
    company: 'AMAZON WEB SERVICES',
    role: 'Software Engineer Intern',
    location: 'Seattle, WA',
    period: 'May 2025 - Aug 2025',
    status: 'INTERN',
    highlights: [
      'Built interactive QuickSight dashboard unifying 20+ documents',
      'Automated 3000+ requirements across 12+ countries',
      'Cut data lookup time from 20-30 mins to 1-2 mins'
    ],
    color: 'highlight'
  },
  {
    id: 'nije',
    company: 'NIJE',
    role: 'Founder',
    location: 'Remote',
    period: 'Apr 2025 - Present',
    status: 'FOUNDER',
    highlights: [
      'Cherokee language learning app with quizzes & games',
      'Built with React Native and TypeScript',
      'Partnered with Harvard, Yale, and UPenn'
    ],
    color: 'pink'
  },
  {
    id: 'relias',
    company: 'RELIAS',
    role: 'Software Engineer Intern',
    location: 'Raleigh, NC',
    period: 'May 2024 - Jul 2024',
    status: 'INTERN',
    highlights: [
      'Led development of AI chatbot for employee onboarding',
      'Boosted engagement by 50%',
      'Cut support tickets by 30%'
    ],
    color: 'primary'
  },
  {
    id: 'vogro',
    company: 'OFFICIAL VOGRO',
    role: 'Software Engineer Intern',
    location: 'Toronto, Canada',
    period: 'Mar 2021 - Jul 2021',
    status: 'INTERN',
    highlights: [
      'Built COVID-19 volunteering app reaching 1500+ users',
      'Managed 1000+ volunteering tasks',
      'Led weekly sprints using agile methodology'
    ],
    color: 'accent'
  }
];

const ExperienceView = ({ onBack }: ExperienceViewProps) => {
  const [selectedExp, setSelectedExp] = useState(experiences[0]);

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
        
        <h1 className="font-display text-5xl md:text-6xl text-accent text-glow-accent">
          EXPERIENCE_
        </h1>
      </motion.header>

      {/* Content */}
      <div className="grid lg:grid-cols-[300px,1fr] gap-8 max-w-6xl">
        {/* Company List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
          {experiences.map((exp, i) => (
            <motion.button
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              onClick={() => setSelectedExp(exp)}
              className={`w-full text-left p-4 font-mono text-sm transition-all border-2 ${
                selectedExp.id === exp.id
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
              }`}
            >
              <span className={selectedExp.id === exp.id ? 'text-glow' : ''}>
                {'>'} {exp.company}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedExp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="pixel-border bg-card p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <span className={`inline-block px-3 py-1 font-mono text-xs bg-${selectedExp.color}/20 text-${selectedExp.color} border border-${selectedExp.color} mb-3`}>
                  {selectedExp.status}
                </span>
                <h2 className="font-display text-3xl text-foreground mb-2">
                  {selectedExp.role}
                </h2>
                <p className={`font-display text-xl text-${selectedExp.color}`}>
                  @ {selectedExp.company}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm font-mono text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{selectedExp.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{selectedExp.location}</span>
              </div>
            </div>

            <div className="space-y-4">
              {selectedExp.highlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 font-mono text-sm"
                >
                  <span className="text-primary mt-1">▸</span>
                  <span className="text-foreground/90">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* Terminal */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-mono text-xs text-muted-foreground">
                {'>'} exp.{selectedExp.id}.render() <span className="text-primary">SUCCESS</span>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExperienceView;
