import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const courses = [
  'Data Structures & Algorithms',
  'Algorithms and Analysis',
  'Discrete Structures',
  'Systems Fundamentals',
  'Computer Organization',
  'Foundations of Software Engineering',
  'Intro to Optimization',
  'Methods of Data Analysis',
];

const EducationSection = () => {
  return (
    <section id="education" className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-terminal font-mono mb-2">{'// education'}</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Where I learned<span className="text-primary">.</span>
          </h2>
        </motion.div>

        {/* Main Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-lg p-8 mb-8 relative overflow-hidden"
        >
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative">
            <div className="flex flex-wrap items-start gap-6 mb-8">
              <div className="p-4 bg-primary/10 rounded-lg">
                <GraduationCap className="w-12 h-12 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  University of North Carolina at Chapel Hill
                </h3>
                <p className="text-muted-foreground">Chapel Hill, North Carolina</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span className="text-lg">B.S. in Computer Science</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-accent" />
                  <span className="text-lg">B.S. in Statistics and Analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-highlight" />
                  <span className="text-lg text-muted-foreground">Minor in Entrepreneurship</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-5 h-5 text-highlight" />
                    <span className="font-semibold">GPA</span>
                  </div>
                  <p className="text-3xl font-bold text-gradient">3.8 / 4.0</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Expected Graduation</p>
                  <p className="text-xl font-semibold">May 2026</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coursework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-card border border-border rounded-lg p-8"
        >
          <h4 className="text-xl font-semibold mb-6">Relevant Coursework</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {courses.map((course, i) => (
              <motion.div
                key={course}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-terminal" />
                <span className="text-sm font-mono">{course}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-card border border-primary/30 rounded-lg p-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-mono">
              Leadership
            </span>
          </div>
          <h4 className="text-xl font-semibold mb-2">
            President - Korean American Student Association
          </h4>
          <p className="text-muted-foreground">
            Leading a team of 12 executive board members to plan and execute cultural events, 
            workshops, and community outreach programs at UNC Chapel Hill.
          </p>
          <p className="text-sm text-primary/70 mt-3 font-mono">Aug 2024 - Present</p>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
