import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, Linkedin, Copy, Check } from 'lucide-react';

interface ContactViewProps {
  onBack: () => void;
}

const ContactView = ({ onBack }: ContactViewProps) => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const contacts = [
    { 
      icon: Mail, 
      label: 'EMAIL', 
      value: 'hwangyunseok0@gmail.com',
      href: 'mailto:hwangyunseok0@gmail.com',
      copyable: true
    },
    { 
      icon: Phone, 
      label: 'PHONE', 
      value: '984-528-6417',
      href: 'tel:9845286417',
      copyable: true
    },
    { 
      icon: Linkedin, 
      label: 'LINKEDIN', 
      value: 'yunseok-hwang',
      href: 'https://linkedin.com/in/yunseok-hwang',
      copyable: false
    },
  ];

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
        
        <h1 className="font-display text-5xl md:text-6xl text-pink text-glow">
          CONTACT_
        </h1>
      </motion.header>

      {/* Content */}
      <div className="max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-lg text-foreground/80 mb-12"
        >
          {'>'} Ready to connect? Feel free to reach out for opportunities, 
          collaborations, or just to say hello.
        </motion.p>

        {/* Contact Cards */}
        <div className="space-y-4">
          {contacts.map((contact, i) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="pixel-border bg-card p-6 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 border-2 border-primary bg-primary/10">
                    <contact.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground mb-1">
                      {contact.label}
                    </p>
                    <a 
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-display text-xl text-foreground hover:text-primary transition-colors"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
                
                {contact.copyable && (
                  <button
                    onClick={() => copyToClipboard(contact.value, contact.label)}
                    className="p-3 border-2 border-border hover:border-primary hover:bg-primary/10 transition-all"
                  >
                    {copied === contact.label ? (
                      <Check className="w-5 h-5 text-primary" />
                    ) : (
                      <Copy className="w-5 h-5 text-muted-foreground hover:text-primary" />
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <a
            href="mailto:hwangyunseok0@gmail.com?subject=Hello from your portfolio!"
            className="retro-button inline-flex items-center gap-3 w-full justify-center"
          >
            <Mail className="w-5 h-5" />
            <span className="font-display text-xl">SEND MESSAGE</span>
          </a>
        </motion.div>


        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <p className="font-mono text-xs text-muted-foreground text-center">
            © 2026 YUNSEOK HWANG | BUILT WITH REACT + TAILWIND
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default ContactView;
