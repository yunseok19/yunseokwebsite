import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: 'Languages',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Java', level: 85 },
      { name: 'C++', level: 75 },
      { name: 'R', level: 70 },
      { name: 'SQL', level: 85 },
      { name: 'Go', level: 65 },
    ],
    color: 'primary'
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 92 },
      { name: 'React Native', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Tailwind CSS', level: 88 },
    ],
    color: 'accent'
  },
  {
    name: 'Backend & Cloud',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'AWS', level: 82 },
      { name: 'Docker', level: 75 },
      { name: 'MongoDB', level: 85 },
      { name: 'Firebase', level: 80 },
    ],
    color: 'highlight'
  },
  {
    name: 'ML & Data',
    skills: [
      { name: 'TensorFlow', level: 75 },
      { name: 'Matplotlib', level: 80 },
      { name: 'Data Analysis', level: 85 },
    ],
    color: 'terminal'
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-terminal font-mono mb-2">{'// skills'}</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            What I work with<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className={`text-lg font-semibold mb-6 text-${category.color}`}>
                {category.name}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 + skillIndex * 0.05 }}
                        className={`h-full rounded-full bg-${category.color}`}
                        style={{
                          background: `linear-gradient(90deg, hsl(var(--${category.color})) 0%, hsl(var(--${category.color}) / 0.7) 100%)`
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-card border border-border rounded-lg p-6"
        >
          <h3 className="text-lg font-semibold mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {['Git', 'VS Code', 'DynamoDB', 'REST APIs', 'Quip', 'SharePoint', 'LUIS', 'QuickSight', 'Lambda', 'Dart', 'Flutter', 'Agile'].map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.03 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-muted rounded-full font-mono text-sm hover:bg-primary/20 hover:text-primary transition-all cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
