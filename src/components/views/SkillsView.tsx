import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface SkillsViewProps {
  onBack: () => void;
}

const skillCategories = [
  {
    name: 'PROGRAMMING',
    skills: ['Python', 'Java', 'JavaScript', 'HTML/CSS', 'C++', 'R', 'SQL'],
    color: 'primary'
  },
  {
    name: 'TECHNOLOGIES',
    skills: ['React', 'Node.js', 'MongoDB', 'Git', 'Matplotlib', 'Firebase', 'TensorFlow', 'Golang', 'AWS', 'Docker'],
    color: 'accent'
  }
];

const SkillsView = ({ onBack }: SkillsViewProps) => {
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
        
        <h1 className="font-display text-5xl md:text-6xl text-highlight text-glow-highlight">
          SKILLS_
        </h1>
      </motion.header>

      {/* Content */}
      <div className="max-w-4xl space-y-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + catIndex * 0.1 }}
            className="pixel-border bg-card p-6"
          >
            <h2 className={`font-display text-2xl text-${category.color} mb-4`}>
              {'>'} {category.name}
            </h2>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + catIndex * 0.1 + skillIndex * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-2 font-mono text-sm border-2 border-${category.color}/50 bg-${category.color}/10 text-${category.color} hover:border-${category.color} hover:bg-${category.color}/20 transition-all cursor-default`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}


        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-mono text-sm text-muted-foreground"
        >
          <p>{'>'} skills.getAll() returned {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} items</p>
          <p className="mt-2">
            {'>'} <span className="text-primary cursor-blink">_</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsView;
