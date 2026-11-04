import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Zap, Target, Crosshair } from 'lucide-react';
import { TYPING_SNIPPETS } from '@/data/curriculum';

export default function TypingGamePreview() {
  const snippet = TYPING_SNIPPETS[0];
  const lines = snippet.split('\n');

  return (
    <section className="py-20 px-4 lg:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
            Python <span className="text-gradient-duotone">Typing Game</span>
          </h2>
          <p className="mt-3 text-muted-foreground">Practice typing real Python code — like VS Code, but gamified</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl shadow-float overflow-hidden max-w-4xl mx-auto"
        >
          {/* Editor header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-channel">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-coral/80" />
                <div className="w-3 h-3 rounded-full bg-amber/80" />
                <div className="w-3 h-3 rounded-full bg-mint/80" />
              </div>
              <span className="ml-2 text-xs text-muted-foreground font-mono">typing_practice.py</span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1 text-mint"><Zap className="w-3.5 h-3.5" /> 78 WPM</span>
              <span className="flex items-center gap-1 text-lavender"><Target className="w-3.5 h-3.5" /> 96% Acc</span>
              <span className="flex items-center gap-1 text-amber"><Crosshair className="w-3.5 h-3.5" /> x3 Combo</span>
            </div>
          </div>

          {/* Code display */}
          <div className="p-5 font-mono text-sm bg-[#1e1e2e] text-[#cdd6f4] min-h-[280px]">
            {lines.map((line, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-muted-foreground/50 select-none w-6 text-right">{i + 1}</span>
                <span className="whitespace-pre">
                  {line.split('').map((char, j) => {
                    const typed = i < 2 || (i === 2 && j < 10);
                    const isCorrect = typed;
                    return (
                      <span
                        key={j}
                        className={isCorrect ? 'text-mint' : ''}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              </div>
            ))}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-mint"
            />
          </div>

          {/* Stats bar */}
          <div className="px-4 py-3 bg-channel border-t border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm">
              <div><span className="text-muted-foreground">XP:</span> <span className="font-bold text-mint">+25</span></div>
              <div><span className="text-muted-foreground">Coins:</span> <span className="font-bold text-amber">+8</span></div>
              <div><span className="text-muted-foreground">Time:</span> <span className="font-bold">00:42</span></div>
            </div>
            <Link
              to="/typing"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold gradient-duotone shadow-soft hover:shadow-glow-mint transition-all"
            >
              <Play className="w-4 h-4" /> Play Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}