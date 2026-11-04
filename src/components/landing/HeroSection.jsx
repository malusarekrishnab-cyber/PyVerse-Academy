import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Rocket, Sparkles } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/PyverseUI';

const STATS = [
  { value: 50000, suffix: '+', label: 'Students' },
  { value: 500, suffix: '+', label: 'Lessons' },
  { value: 200, suffix: '+', label: 'Projects' },
  { value: 1000, suffix: '+', label: 'Coding Challenges' },
];

const CODE_LINES = [
  'def learn_python():',
  '    skills = []',
  '    while learning:',
  '        skills.append(practice())',
  '        if confident:',
  '            return "Job Ready!"',
  '    return skills',
  '',
  'result = learn_python()',
  'print(result)  # "Job Ready!"',
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C2F4DF] via-[#ECE7FF] to-[#F7C4A0] dark:from-[#0A1A14] dark:via-[#14101A] dark:to-[#1A1410] animate-gradient" style={{ backgroundSize: '200% 200%' }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-mint/20 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-lavender/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-amber/10 blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-mint/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 text-amber" />
              <span>The Ultimate Python Learning Ecosystem</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
            >
              Become a{' '}
              <span className="text-gradient-duotone">Professional</span>{' '}
              Python Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-base lg:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0"
            >
              Learn Python from Beginner to Advanced with Interactive Lessons, Real Company Projects, Typing Games, AI Mentor, Homework, Quizzes and Certificates.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <Link
                to="/register"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold gradient-duotone shadow-glow-mint hover:scale-105 transition-transform"
              >
                <Rocket className="w-5 h-5" /> Start Learning
              </Link>
              <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold glass-card shadow-soft hover:shadow-float transition-all">
                <Play className="w-5 h-5" /> Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {STATS.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-extrabold text-gradient-duotone">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Code animation card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl shadow-float overflow-hidden">
              {/* Editor header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-channel">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-coral/80" />
                  <div className="w-3 h-3 rounded-full bg-amber/80" />
                  <div className="w-3 h-3 rounded-full bg-mint/80" />
                </div>
                <div className="ml-2 text-xs text-muted-foreground font-mono">learn_python.py</div>
              </div>
              {/* Code */}
              <div className="p-4 font-mono text-sm bg-[#1e1e2e] text-[#cdd6f4] min-h-[320px]">
                {CODE_LINES.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.15, duration: 0.3 }}
                    className="flex gap-3"
                  >
                    <span className="text-muted-foreground/50 select-none w-6 text-right">{i + 1}</span>
                    <span className="whitespace-pre" style={{ color: getPythonColor(line) }}>{line || ' '}</span>
                  </motion.div>
                ))}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-mint ml-9"
                />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass-card rounded-xl px-3 py-2 shadow-float"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">🏆</span>
                <div>
                  <div className="text-xs font-bold">Level Up!</div>
                  <div className="text-xs text-muted-foreground">+100 XP</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-4 -left-4 glass-card rounded-xl px-3 py-2 shadow-float"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">⚡</span>
                <div>
                  <div className="text-xs font-bold">78 WPM</div>
                  <div className="text-xs text-muted-foreground">Typing Speed</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function getPythonColor(line) {
  const trimmed = line.trim();
  if (trimmed.startsWith('#')) return '#6c7086';
  if (trimmed.startsWith('def ') || trimmed.startsWith('class ')) return '#cba6f7';
  if (trimmed.startsWith('return')) return '#f38ba8';
  if (trimmed.startsWith('while') || trimmed.startsWith('if') || trimmed.startsWith('for')) return '#cba6f7';
  if (trimmed.startsWith('print')) return '#89b4fa';
  if (trimmed.includes('"') || trimmed.includes("'")) return '#a6e3a1';
  return '#cdd6f4';
}