import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Zap, Sparkles, TrendingUp, Flame, Target, Award, BookOpen,
  Keyboard, ClipboardList, FolderGit2, HelpCircle, StickyNote,
  Bot, Trophy, FileText, ArrowRight, Star, CheckCircle, Clock
} from 'lucide-react';
import { StatCard, ProgressBar, RingProgress, SectionTitle, GlassCard } from '@/components/ui/PyverseUI';
import { MODULES, BADGES, getLevelFromXP } from '@/data/curriculum';
import { base44 } from '@/api/base44Client';

const QUICK_ACCESS = [
  { label: 'Learn Python', path: '/learn', icon: BookOpen, color: 'mint' },
  { label: 'Typing Game', path: '/typing', icon: Keyboard, color: 'lavender' },
  { label: 'Homework', path: '/homework', icon: ClipboardList, color: 'amber' },
  { label: 'Quiz', path: '/quiz', icon: HelpCircle, color: 'mint' },
  { label: 'Projects', path: '/projects', icon: FolderGit2, color: 'lavender' },
  { label: 'Company Tasks', path: '/logic', icon: Trophy, color: 'coral' },
  { label: 'Certificates', path: '/certificates', icon: Award, color: 'amber' },
  { label: 'Leaderboard', path: '/leaderboard', icon: Trophy, color: 'mint' },
  { label: 'Notes', path: '/notes', icon: StickyNote, color: 'lavender' },
  { label: 'AI Mentor', path: '/ai-mentor', icon: Bot, color: 'mint' },
];

const RECENT_ACTIVITY = [
  { icon: '📚', title: 'Completed: print() Function', desc: 'Module 3 · Topic 1', xp: 20, time: '2 hours ago', color: 'mint' },
  { icon: '⌨️', title: 'Typing Practice', desc: '78 WPM · 96% accuracy', xp: 25, time: '5 hours ago', color: 'lavender' },
  { icon: '✅', title: 'Homework Submitted', desc: 'Variables · Homework 1', xp: 40, time: 'Yesterday', color: 'amber' },
  { icon: '🏆', title: 'Badge Earned: Week Warrior', desc: '7-day learning streak', xp: 0, time: 'Yesterday', color: 'coral' },
  { icon: '🧠', title: 'Logic Challenge Solved', desc: 'FizzBuzz · Medium', xp: 30, time: '2 days ago', color: 'mint' },
];

const colorMap = {
  mint: { bg: 'bg-mint/10', text: 'text-mint' },
  lavender: { bg: 'bg-lavender/10', text: 'text-lavender' },
  amber: { bg: 'bg-amber/10', text: 'text-amber' },
  coral: { bg: 'bg-coral/10', text: 'text-coral' },
};

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const me = await base44.auth.me();
      setUser(me);
      const existing = await base44.entities.UserProgress.filter({ user_id: me.id });
      if (existing.length > 0) {
        setProgress(existing[0]);
      } else {
        const created = await base44.entities.UserProgress.create({
          user_id: me.id, level: 1, xp: 0, coins: 0, streak: 1,
          typing_wpm: 0, typing_accuracy: 0, learning_hours: 0,
          completed_topics: [], completed_projects: [], completed_challenges: [],
          badges: [], daily_goal_minutes: 30, today_minutes: 0,
          avatar: '🐍', goal: 'Learn Python', experience_level: 'Absolute Beginner'
        });
        setProgress(created);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-mint/20 border-t-mint rounded-full animate-spin" />
      </div>
    );
  }

  const level = progress?.level || 1;
  const xp = progress?.xp || 0;
  const coins = progress?.coins || 0;
  const streak = progress?.streak || 1;
  const wpm = progress?.typing_wpm || 0;
  const accuracy = progress?.typing_accuracy || 0;
  const hours = progress?.learning_hours || 0;
  const completedTopics = progress?.completed_topics || [];
  const badges = progress?.badges || [];
  const { current: currentLevel, next: nextLevel } = getLevelFromXP(xp);
  const firstName = (user?.full_name || user?.email || 'Student').split(' ')[0];
  const totalTopics = MODULES.reduce((sum, m) => sum + m.topics.length, 0);
  const pythonProgress = Math.round((completedTopics.length / totalTopics) * 100);

  return (
    <div className="space-y-6">
      {/* Welcome card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-2xl shadow-float p-6 lg:p-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-mint/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-lavender/10 blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div>
            <div className="text-sm text-muted-foreground mb-1">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </div>
            <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
              Welcome back, {firstName}! 👋
            </h1>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              You are <span className="font-semibold text-foreground">{Math.max(0, totalTopics - completedTopics.length)} topics</span> away from completing the Python curriculum, with <span className="font-semibold text-foreground">{MODULES.length - Math.floor(completedTopics.length / 2)} modules</span> awaiting your expertise. Keep up the great work!
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link to="/learn" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold gradient-duotone shadow-soft hover:shadow-glow-mint transition-all">
                <BookOpen className="w-4 h-4" /> Continue Learning
              </Link>
              <Link to="/typing" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-card shadow-soft hover:shadow-float transition-all">
                <Keyboard className="w-4 h-4" /> Practice Typing
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <RingProgress value={pythonProgress} size={130} color="mint" label="Python" sublabel="Progress" />
          </div>
        </div>
      </motion.div>

      {/* Top stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={TrendingUp} label="Current Level" value={level} sublabel={currentLevel?.title} color="mint" delay={0} />
        <StatCard icon={Zap} label="Total XP" value={xp.toLocaleString()} sublabel={nextLevel ? `${nextLevel.minXP - xp} to next` : 'Max!'} color="lavender" delay={0.1} />
        <StatCard icon={Sparkles} label="Coins" value={coins.toLocaleString()} sublabel="Earn more!" color="amber" delay={0.2} />
        <StatCard icon={Flame} label="Day Streak" value={streak} sublabel="Keep it up!" color="coral" delay={0.3} />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Trophy} label="Current Rank" value="#42" sublabel="Top 15%" color="mint" delay={0.4} />
        <StatCard icon={Keyboard} label="Typing Speed" value={`${wpm}`} sublabel="WPM" color="lavender" delay={0.5} />
        <StatCard icon={Target} label="Accuracy" value={`${accuracy}%`} sublabel="Typing" color="amber" delay={0.6} />
        <StatCard icon={Clock} label="Learning Hours" value={hours.toFixed(1)} sublabel="Total" color="coral" delay={0.7} />
      </div>

      {/* Progress section */}
      <div className="grid lg:grid-cols-3 gap-4">
        <GlassCard className="p-5">
          <SectionTitle title="Progress" subtitle="Your learning goals" />
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Python Progress</span>
                <span className="text-sm font-bold text-mint">{pythonProgress}%</span>
              </div>
              <ProgressBar value={pythonProgress} color="duotone" height="h-3" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Today's Goal</span>
                <span className="text-sm font-bold text-mint">{progress?.today_minutes || 0}/{progress?.daily_goal_minutes || 30} min</span>
              </div>
              <ProgressBar value={progress?.today_minutes || 0} max={progress?.daily_goal_minutes || 30} color="mint" height="h-3" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Weekly Goal</span>
                <span className="text-sm font-bold text-lavender">4/7 days</span>
              </div>
              <ProgressBar value={4} max={7} color="lavender" height="h-3" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Monthly Goal</span>
                <span className="text-sm font-bold text-amber">12/30 days</span>
              </div>
              <ProgressBar value={12} max={30} color="amber" height="h-3" />
            </div>
          </div>
        </GlassCard>

        {/* Heatmap */}
        <GlassCard className="p-5">
          <SectionTitle title="Activity Heatmap" subtitle="Last 5 weeks" />
          <div className="grid grid-cols-7 gap-1.5">
            {Array.from({ length: 35 }).map((_, i) => {
              const intensity = Math.random();
              const bg = intensity > 0.7 ? 'bg-mint' : intensity > 0.4 ? 'bg-mint/50' : intensity > 0.2 ? 'bg-mint/25' : 'bg-muted';
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.02 }}
                  className={`aspect-square rounded ${bg} hover:ring-2 hover:ring-mint/50 transition-all cursor-pointer`}
                  title={`Day ${i + 1}`}
                />
              );
            })}
          </div>
          <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded bg-muted" />
              <div className="w-3 h-3 rounded bg-mint/25" />
              <div className="w-3 h-3 rounded bg-mint/50" />
              <div className="w-3 h-3 rounded bg-mint" />
            </div>
            <span>More</span>
          </div>
        </GlassCard>

        {/* Level progress */}
        <GlassCard className="p-5">
          <SectionTitle title="Level Progress" subtitle={currentLevel?.title} />
          <div className="flex flex-col items-center justify-center py-4">
            <RingProgress value={level} max={100} size={140} color="lavender" label={`Level ${level}`} />
            <div className="mt-4 text-center">
              <div className="text-sm font-semibold">{currentLevel?.title}</div>
              {nextLevel ? (
                <div className="text-xs text-muted-foreground mt-1">
                  {nextLevel.minXP - xp} XP to {nextLevel.title}
                </div>
              ) : (
                <div className="text-xs text-mint mt-1">Maximum level reached! 🏆</div>
              )}
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Continue learning */}
      <div>
        <SectionTitle title="Continue Learning" subtitle="Pick up where you left off" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: BookOpen, title: 'Resume Lesson', desc: 'Module 5: Variables', path: '/learn', color: 'mint' },
            { icon: ClipboardList, title: 'Resume Homework', desc: 'Strings · Homework 2', path: '/homework', color: 'amber' },
            { icon: FolderGit2, title: 'Resume Project', desc: 'Calculator · Mini Project', path: '/projects', color: 'lavender' },
            { icon: Keyboard, title: 'Resume Typing', desc: 'Practice Session', path: '/typing', color: 'coral' },
          ].map((item, i) => {
            const Icon = item.icon;
            const c = colorMap[item.color];
            return (
              <Link key={i} to={item.path}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-card rounded-2xl p-5 shadow-soft hover:shadow-float border border-border/50 transition-all h-full"
                >
                  <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center mb-3`}>
                    <Icon className={`w-5 h-5 ${c.text}`} />
                  </div>
                  <div className="font-semibold text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-muted-foreground mb-3">{item.desc}</div>
                  <div className="flex items-center gap-1 text-xs font-medium text-mint">
                    Continue <ArrowRight className="w-3 h-3" />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Quick access */}
      <div>
        <SectionTitle title="Quick Access" subtitle="Jump to any section" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {QUICK_ACCESS.map((item, i) => {
            const Icon = item.icon;
            const c = colorMap[item.color];
            return (
              <Link key={i} to={item.path}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="bg-card rounded-2xl p-4 shadow-soft hover:shadow-float border border-border/50 transition-all flex flex-col items-center text-center gap-2"
                >
                  <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${c.text}`} />
                  </div>
                  <span className="text-xs font-semibold">{item.label}</span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent activity + Achievements */}
      <div className="grid lg:grid-cols-2 gap-4">
        <GlassCard className="p-5">
          <SectionTitle title="Recent Activity" subtitle="Your latest achievements" />
          <div className="space-y-2">
            {RECENT_ACTIVITY.map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/30 transition-colors"
              >
                <div className="text-2xl shrink-0">{activity.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold truncate">{activity.title}</div>
                  <div className="text-xs text-muted-foreground truncate">{activity.desc}</div>
                </div>
                <div className="text-right shrink-0">
                  {activity.xp > 0 && <div className="text-xs font-bold text-mint">+{activity.xp} XP</div>}
                  <div className="text-xs text-muted-foreground">{activity.time}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <SectionTitle title="Achievements" subtitle={`${badges.length} badges earned`} />
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {BADGES.slice(0, 8).map((badge, i) => {
              const earned = badges.includes(badge.id) || i < 3;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className={`flex flex-col items-center text-center p-3 rounded-xl transition-all ${
                    earned ? 'bg-card shadow-soft' : 'bg-muted/30 opacity-50'
                  }`}
                >
                  <div className="text-2xl mb-1">{badge.icon}</div>
                  <div className="text-xs font-semibold leading-tight">{badge.name}</div>
                </motion.div>
              );
            })}
          </div>
          <Link to="/profile" className="mt-4 flex items-center justify-center gap-1 text-sm font-medium text-mint hover:underline">
            View all achievements <ArrowRight className="w-3 h-3" />
          </Link>
        </GlassCard>
      </div>
    </div>
  );
}