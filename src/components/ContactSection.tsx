import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const contacts = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'hwangyunseok0@gmail.com',
      href: 'mailto:hwangyunseok0@gmail.com',
      color: 'primary'
    },
    { 
      icon: Phone, 
      label: 'Phone', 
      value: '984-528-6417',
      href: 'tel:9845286417',
      color: 'accent'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      value: 'Connect with me',
      href: 'https://linkedin.com/in/yunseok-hwang',
      color: 'highlight'
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-terminal font-mono mb-2">{'// contact'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's connect<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about tech and entrepreneurship.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {contacts.map((contact, i) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card border border-border rounded-lg p-6 text-center group hover:border-primary/50 transition-all duration-300"
            >
              <div className={`inline-flex p-4 rounded-full bg-${contact.color}/10 mb-4 group-hover:scale-110 transition-transform`}>
                <contact.icon className={`w-8 h-8 text-${contact.color}`} />
              </div>
              <p className="font-semibold mb-1">{contact.label}</p>
              <p className="text-sm text-muted-foreground">{contact.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Quick Message Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-card border border-border rounded-lg overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 text-sm text-muted-foreground font-mono">quick_connect.sh</span>
          </div>

          <div className="p-6 font-mono text-sm">
            <p className="text-muted-foreground mb-4"># Copy contact info to clipboard</p>
            
            <div className="space-y-3">
              <button
                onClick={() => copyToClipboard('hwangyunseok0@gmail.com', 'email')}
                className="w-full flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-left group"
              >
                <span className="text-terminal">$</span>
                <span className="flex-1">copy email</span>
                {copied === 'email' ? (
                  <span className="text-terminal text-xs">✓ Copied!</span>
                ) : (
                  <Send className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
              </button>

              <button
                onClick={() => copyToClipboard('984-528-6417', 'phone')}
                className="w-full flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-left group"
              >
                <span className="text-terminal">$</span>
                <span className="flex-1">copy phone</span>
                {copied === 'phone' ? (
                  <span className="text-terminal text-xs">✓ Copied!</span>
                ) : (
                  <Send className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
              </button>

              <a
                href="mailto:hwangyunseok0@gmail.com?subject=Hello from your portfolio!"
                className="w-full flex items-center gap-3 p-3 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary transition-colors text-left"
              >
                <span className="text-terminal">$</span>
                <span className="flex-1">send_message --to yunseok</span>
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
          <p className="text-muted-foreground font-mono text-sm">
            <span className="text-terminal">{'>'}</span> Built with React & Tailwind
          </p>
          <p className="text-muted-foreground/50 text-xs mt-2">
            © 2026 Yunseok Hwang. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default ContactSection;
