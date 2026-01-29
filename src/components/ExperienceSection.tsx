import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    id: 'palantir',
    company: 'Palantir Technologies',
    role: 'Forward Deployed Software Engineer',
    location: 'New York City, NY',
    period: 'July 2026 - Present',
    type: 'upcoming',
    description: 'Incoming Forward Deployed Software Engineer.',
    highlights: [],
    color: 'primary'
  },
  {
    id: 'mercor',
    company: 'Mercor',
    role: 'Machine Learning Engineer',
    location: 'Remote',
    period: 'Nov 2024 - Aug 2025',
    type: 'contract',
    description: 'Building ML infrastructure and developing supervised trajectories for LLM improvement.',
    highlights: [
      'Built Python implementations within internal ML workflow tools',
      'Added validation checks and runtime debugging tools',
      'Developed ML code and reasoning traces for AI lab'
    ],
    color: 'accent'
  },
  {
    id: 'aws',
    company: 'Amazon Web Services',
    role: 'Software Engineer Intern',
    location: 'Seattle, WA',
    period: 'May 2025 - Aug 2025',
    type: 'internship',
    description: 'Developed solutions to streamline Seller of Record requirements across global markets.',
    highlights: [
      'Built interactive QuickSight dashboard unifying 20+ documents',
      'Automated 3000+ requirements across 12+ countries',
      'Reduced data lookup time from 20-30 mins to 1-2 mins'
    ],
    color: 'highlight'
  },
  {
    id: 'nije',
    company: 'Nije',
    role: 'Founder',
    location: 'Remote',
    period: 'Apr 2025 - Present',
    type: 'founder',
    description: 'Founded a Cherokee language learning app to preserve indigenous language and culture.',
    highlights: [
      'Built with React Native and TypeScript',
      'Partnered with Harvard, Yale, and UPenn',
      'Projected to impact 1000+ students'
    ],
    color: 'terminal'
  },
  {
    id: 'relias',
    company: 'Relias',
    role: 'Software Engineer Intern',
    location: 'Raleigh, NC',
    period: 'May 2024 - Jul 2024',
    type: 'internship',
    description: 'Developed an AI chatbot to streamline employee onboarding and resource access.',
    highlights: [
      'Led development of AI chatbot using Node.js and LUIS',
      'Boosted engagement by 50%',
      'Cut support tickets by 30%'
    ],
    color: 'primary'
  },
  {
    id: 'vogro',
    company: 'Official VoGro',
    role: 'Software Engineer Intern',
    location: 'Toronto, Canada',
    period: 'Mar 2021 - Jul 2021',
    type: 'internship',
    description: 'Built a COVID-19 volunteering platform connecting volunteers with those in need.',
    highlights: [
      'Launched iOS/Android app reaching 1500+ users',
      'Managed 1000+ volunteering tasks',
      'Facilitated 750+ users in first 4 months'
    ],
    color: 'accent'
  }
];

const ExperienceSection = () => {
  const [activeExp, setActiveExp] = useState(experiences[0].id);

  const currentExp = experiences.find(e => e.id === activeExp)!;

  return (
    <section id="experience" className="min-h-screen py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-terminal font-mono mb-2">{'// experience'}</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Where I've worked<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[250px,1fr] gap-8">
          {/* Company List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0"
          >
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExp(exp.id)}
                className={`relative px-4 py-3 text-left rounded-lg transition-all duration-300 whitespace-nowrap md:whitespace-normal flex items-center gap-2 group ${
                  activeExp === exp.id 
                    ? 'bg-card border border-primary/50 text-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
                }`}
              >
                <ChevronRight className={`w-4 h-4 transition-transform ${activeExp === exp.id ? 'text-primary rotate-90' : 'opacity-0 group-hover:opacity-50'}`} />
                <span className="font-medium">{exp.company}</span>
              </button>
            ))}
          </motion.div>

          {/* Experience Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExp}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{currentExp.role}</h3>
                  <p className="text-primary text-lg font-medium">{currentExp.company}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-mono uppercase bg-${currentExp.color}/10 text-${currentExp.color}`}>
                  {currentExp.type}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{currentExp.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{currentExp.location}</span>
                </div>
              </div>

              <p className="text-foreground/90 mb-6">{currentExp.description}</p>

              {currentExp.highlights.length > 0 && (
                <ul className="space-y-3">
                  {currentExp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="text-terminal mt-1">▹</span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
