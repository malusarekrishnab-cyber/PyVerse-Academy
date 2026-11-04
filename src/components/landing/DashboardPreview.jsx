import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCounter, RingProgress } from '@/components/ui/PyverseUI';
import { Zap, Sparkles, TrendingUp, Target, Flame, Award, FolderGit2, Keyboard } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="py-20 px-4 lg:px-6 bg-channel/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
            Live <span className="text-gradient-duotone">Dashboard Preview</span>
          </h2>
          <p className="mt-3 text-muted-foreground">Track your progress with a professional software dashboard</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl shadow-float p-6 lg:p-8"
        >
          {/* Top stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { icon: Zap, label: 'Total XP', value: 8420, color: 'mint' },
              { icon: Sparkles, label: 'Coins', value: 1250, color: 'amber' },
              { icon: TrendingUp, label: 'Level', value: 18, color: 'lavender' },
              { icon: Flame, label: 'Day Streak', value: 23, color: 'coral' },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="bg-card rounded-2xl p-4 shadow-soft">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`w-4 h-4 text-${stat.color}`} />
                    <span className="text-xs text-muted-foreground">{stat.label}</span>
                  </div>
                  <div className="text-2xl font-bold">
                    <AnimatedCounter value={stat.value} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            {/* Progress ring */}
            <div className="bg-card rounded-2xl p-5 shadow-soft flex flex-col items-center justify-center">
              <RingProgress value={68} size={140} color="mint" label="Python Progress" />
              <div className="mt-3 text-sm font-medium">Python Basics → Advanced</div>
              <div className="text-xs text-muted-foreground mt-1">28 of 48 modules completed</div>
            </div>

            {/* Typing & Goals */}
            <div className="bg-card rounded-2xl p-5 shadow-soft space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Keyboard className="w-4 h-4 text-lavender" />
                    <span className="text-sm font-medium">Typing Speed</span>
                  </div>
                  <span className="text-lg font-bold">78 <span className="text-xs text-muted-foreground">WPM</span></span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '78%' }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full gradient-lavender rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-mint" />
                    <span className="text-sm font-medium">Today's Goal</span>
                  </div>
                  <span className="text-lg font-bold">45<span className="text-xs text-muted-foreground">/60 min</span></span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '75%' }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full gradient-mint rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber" />
                    <span className="text-sm font-medium">Certificates</span>
                  </div>
                  <span className="text-lg font-bold">7</span>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-md bg-amber/20 flex items-center justify-center text-xs">🏆</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Heatmap */}
            <div className="bg-card rounded-2xl p-5 shadow-soft">
              <div className="flex items-center gap-2 mb-3">
                <Flame className="w-4 h-4 text-coral" />
                <span className="text-sm font-medium">Activity Heatmap</span>
              </div>
              <div className="grid grid-cols-7 gap-1.5">
                {Array.from({ length: 35 }).map((_, i) => {
                  const intensity = Math.random();
                  const bg = intensity > 0.7 ? 'bg-mint' : intensity > 0.4 ? 'bg-mint/50' : intensity > 0.2 ? 'bg-mint/25' : 'bg-muted';
                  return <div key={i} className={`aspect-square rounded ${bg}`} />;
                })}
              </div>
              <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
                <span>Less</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded bg-muted" />
                  <div className="w-3 h-3 rounded bg-mint/25" />
                  <div className="w-3 h-3 rounded bg-mint/50" />
                  <div className="w-3 h-3 rounded bg-mint" />
                </div>
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {[
              { icon: FolderGit2, label: 'Projects', value: 12, color: 'lavender' },
              { icon: Award, label: 'Badges', value: 18, color: 'amber' },
              { icon: TrendingUp, label: 'Rank', value: '#42', color: 'mint' },
              { icon: Target, label: 'Accuracy', value: 96, suffix: '%', color: 'coral' },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="bg-card rounded-xl p-3 shadow-soft flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg bg-${stat.color}/10 flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 text-${stat.color}`} />
                  </div>
                  <div>
                    <div className="text-lg font-bold">{stat.value}{stat.suffix || ''}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}