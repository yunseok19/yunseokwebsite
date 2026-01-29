import { motion } from 'framer-motion';
import { Code2, Lightbulb, Users, Rocket } from 'lucide-react';

const AboutSection = () => {
  const traits = [
    { icon: Code2, title: "Builder", desc: "Love turning ideas into working products" },
    { icon: Lightbulb, title: "Problem Solver", desc: "Breaking down complex challenges" },
    { icon: Users, title: "Leader", desc: "President of KASA at UNC" },
    { icon: Rocket, title: "Founder", desc: "Building Nije for Cherokee language learning" },
  ];

  return (
    <section id="about" className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-terminal font-mono mb-2">{'// about'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Who am I<span className="text-primary">?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-lg leading-relaxed text-foreground/90">
                I'm a <span className="text-primary font-semibold">Computer Science</span> and{' '}
                <span className="text-accent font-semibold">Statistics</span> student at UNC Chapel Hill, 
                passionate about building impactful software solutions.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground leading-relaxed">
                From developing AI chatbots at Relias to building ML pipelines at Mercor, 
                I've always been driven by the challenge of creating technology that makes a real difference. 
                Currently preparing to join <span className="text-highlight font-semibold">Palantir Technologies</span> as 
                a Forward Deployed Software Engineer.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground leading-relaxed">
                Beyond code, I lead the Korean American Student Association at UNC, 
                bridging cultures and building community through 
                events and outreach programs.
              </p>
            </div>
          </motion.div>

          {/* Traits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {traits.map((trait, i) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card border border-border rounded-lg p-5 group hover:border-primary/50 transition-all duration-300"
              >
                <trait.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-1">{trait.title}</h3>
                <p className="text-sm text-muted-foreground">{trait.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
