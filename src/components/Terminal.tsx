import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalProps {
  onCommandExecute: (command: string) => void;
  currentSection: string;
}

const COMMANDS = ['about', 'experience', 'skills', 'education', 'contact', 'help', 'clear'];

const Terminal = ({ onCommandExecute, currentSection }: TerminalProps) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ type: 'input' | 'output'; text: string }[]>([
    { type: 'output', text: "Welcome to Yunseok's terminal portfolio. Type 'help' for available commands." }
  ]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (input) {
      const matches = COMMANDS.filter(cmd => 
        cmd.startsWith(input.toLowerCase()) && cmd !== input.toLowerCase()
      );
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  }, [input]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    
    setHistory(prev => [...prev, { type: 'input', text: `> ${cmd}` }]);

    if (command === 'help') {
      setHistory(prev => [...prev, {
        type: 'output',
        text: `Available commands:
  about      - Learn about me
  experience - View my work experience
  skills     - See my technical skills
  education  - My educational background
  contact    - Get in touch
  clear      - Clear terminal`
      }]);
    } else if (command === 'clear') {
      setHistory([]);
    } else if (COMMANDS.includes(command)) {
      onCommandExecute(command);
      setHistory(prev => [...prev, { type: 'output', text: `Navigating to ${command}...` }]);
    } else if (command) {
      setHistory(prev => [...prev, { 
        type: 'output', 
        text: `Command not found: ${command}. Type 'help' for available commands.` 
      }]);
    }

    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'Tab' && suggestions.length > 0) {
      e.preventDefault();
      setInput(suggestions[0]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="bg-card border border-border rounded-lg overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-4 text-sm text-muted-foreground font-mono">yunseok@portfolio ~ /{currentSection}</span>
        </div>

        {/* Terminal Body */}
        <div 
          ref={terminalRef}
          className="p-4 h-48 overflow-y-auto font-mono text-sm"
        >
          <AnimatePresence>
            {history.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`mb-1 ${line.type === 'input' ? 'text-terminal' : 'text-muted-foreground'}`}
              >
                <pre className="whitespace-pre-wrap">{line.text}</pre>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Input Line */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-terminal">❯</span>
            <div className="relative flex-1">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent outline-none text-foreground caret-primary"
                placeholder="Type a command..."
                autoFocus
              />
              {suggestions.length > 0 && (
                <span className="absolute left-0 text-muted-foreground/50 pointer-events-none">
                  {input}<span className="text-muted-foreground/30">{suggestions[0].slice(input.length)}</span>
                </span>
              )}
            </div>
            <span className="w-2 h-5 bg-primary terminal-cursor" />
          </div>
        </div>

        {/* Quick Commands */}
        <div className="px-4 py-3 bg-secondary/50 border-t border-border flex gap-2 flex-wrap">
          {COMMANDS.filter(c => c !== 'clear' && c !== 'help').map(cmd => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-3 py-1 text-xs font-mono rounded bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal;
