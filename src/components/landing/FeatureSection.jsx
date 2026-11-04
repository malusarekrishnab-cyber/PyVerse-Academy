import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen, Keyboard, StickyNote, ClipboardList, FolderGit2,
  Bot, FileText, Award, Brain, Trophy, Zap, Moon
} from 'lucide-react';

const FEATURES = [
  { icon: BookOpen, title: 'Learn Python', desc: 'Interactive lessons from basics to advanced with real-world examples', color: 'mint' },
  { icon: Keyboard, title: 'Typing Game', desc: 'Practice typing real Python code and boost your speed', color: 'lavender' },
  { icon: StickyNote, title: 'Handwritten Notes', desc: 'Beautiful notebook-style notes with diagrams and memory tricks', color: 'amber' },
  { icon: ClipboardList, title: 'Homework', desc: 'Daily, weekly, and monthly homework with auto-evaluation', color: 'mint' },
  { icon: FolderGit2, title: 'Mini Projects', desc: 'Build real projects that solve actual problems', color: 'lavender' },
  { icon: Briefcase, title: 'Company Projects', desc: 'Industry-inspired tasks from real software companies', color: 'coral' },
  { icon: Bot, title: 'AI Mentor', desc: 'Personal AI teacher that explains, guides, and motivates', color: 'lavender' },
  { icon: FileText, title: 'Resume Builder', desc: 'Auto-generate ATS-friendly resumes from your progress', color: 'mint' },
  { icon: Award, title: 'Certificates', desc: 'Verified certificates with QR codes and unique IDs', color: 'amber' },
  { icon: Brain, title: 'Interview Prep', desc: 'Topic-wise questions, mock interviews, and coding rounds', color: 'lavender' },
  { icon: Trophy, title: 'Leaderboard', desc: 'Compete globally, with friends, college, and country', color: 'mint' },
  { icon: Zap, title: 'Coins & XP', desc: 'Gamified learning with XP, coins, levels, and badges', color: 'amber' },
];

import { Briefcase } from 'lucide-react';

const colorMap = {
  mint: { bg: 'bg-mint/10', text: 'text-mint', glow: 'shadow-glow-mint' },
  lavender: { bg: 'bg-lavender/10', text: 'text-lavender', glow: 'shadow-glow-lavender' },
  amber: { bg: 'bg-amber/10', text: 'text-amber', glow: '' },
  coral: { bg: 'bg-coral/10', text: 'text-coral', glow: '' },
};

export default function FeatureSection() {
  return (
    <section className="py-20 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
            Everything You Need to{' '}
            <span className="text-gradient-duotone">Master Python</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            A complete learning ecosystem with 14 powerful features designed to take you from beginner to job-ready professional.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            const c = colorMap[feature.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.1 }}
                whileHover={{ y: -6 }}
                className="group bg-card rounded-2xl p-5 shadow-soft hover:shadow-float border border-border/50 transition-all cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${c.text}`} />
                </div>
                <h3 className="font-bold text-base mb-1.5">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}