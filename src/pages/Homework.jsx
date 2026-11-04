import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, CheckCircle, Circle, Clock, Zap, Sparkles, ChevronRight, Filter } from 'lucide-react';
import { GlassCard, Badge, ProgressBar } from '@/components/ui/PyverseUI';
import { MODULES, XP_REWARDS, COIN_REWARDS } from '@/data/curriculum';
import { base44 } from '@/api/base44Client';

export default function Homework() {
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [submitting, setSubmitting] = useState(null);

  useEffect(() => { load(); }, []);

  const load = async () => {
    try {
      const me = await base44.auth.me();
      const res = await base44.entities.UserProgress.filter({ user_id: me.id });
      setProgress(res[0] || null);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  };

  const homeworks = MODULES.flatMap(m =>
    m.topics.map(t => ({
      id: t.id,
      moduleId: m.id,
      moduleTitle: m.title,
      title: t.title,
      time: t.time,
      xp: XP_REWARDS.homework,
      coins: COIN_REWARDS.homework,
      exercises: t.exercises,
    }))
  );

  const completed = progress?.completed_topics || [];
  const filtered = filter === 'all' ? homeworks :
    filter === 'done' ? homeworks.filter(h => completed.includes(h.id)) :
    homeworks.filter(h => !completed.includes(h.id));

  const completedCount = homeworks.filter(h => completed.includes(h.id)).length;

  const markComplete = async (hw) => {
    if (completed.includes(hw.id) || submitting) return;
    setSubmitting(hw.id);
    try {
      const updated = [...completed, hw.id];
      await base44.entities.UserProgress.update(progress.id, {
        completed_topics: updated,
        xp: (progress.xp || 0) + hw.xp,
        coins: (progress.coins || 0) + hw.coins,
      });
      await base44.entities.Activity.create({
        user_id: progress.user_id, type: 'homework',
        title: `Homework: ${hw.title}`, description: hw.moduleTitle,
        xp_earned: hw.xp, coins_earned: hw.coins, icon: '✅',
      });
      setProgress({ ...progress, completed_topics: updated, xp: (progress.xp || 0) + hw.xp, coins: (progress.coins || 0) + hw.coins });
    } catch (e) { console.error(e); }
    finally { setSubmitting(null); }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-mint/20 border-t-mint rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight">Homework</h1>
        <p className="text-muted-foreground mt-1">Practice exercises to reinforce your learning</p>
      </div>

      {/* Progress */}
      <GlassCard className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold">Homework Progress</span>
          <Badge color="mint">{completedCount}/{homeworks.length}</Badge>
        </div>
        <ProgressBar value={completedCount} max={homeworks.length} color="duotone" height="h-3" />
      </GlassCard>

      {/* Filter */}
      <div className="flex items-center gap-2">
        <Filter className="w-4 h-4 text-muted-foreground" />
        {[
          { id: 'all', label: 'All' },
          { id: 'pending', label: 'Pending' },
          { id: 'done', label: 'Completed' },
        ].map(f => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              filter === f.id ? 'gradient-duotone text-white shadow-soft' : 'bg-card shadow-soft hover:shadow-float'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map((hw, i) => {
          const done = completed.includes(hw.id);
          return (
            <motion.div
              key={hw.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className={`bg-card rounded-2xl p-5 shadow-soft hover:shadow-float border-2 transition-all ${
                done ? 'border-mint/40' : 'border-border/50'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  {done ? <CheckCircle className="w-5 h-5 text-mint" /> : <Circle className="w-5 h-5 text-muted-foreground" />}
                  <Badge color="gray" size="sm">{hw.moduleTitle}</Badge>
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" /> {hw.time}</span>
              </div>
              <h3 className="font-bold text-sm mb-2">{hw.title}</h3>
              <div className="space-y-1 mb-4">
                {hw.exercises?.beginner?.slice(0, 2).map((ex, j) => (
                  <div key={j} className="text-xs text-muted-foreground flex items-start gap-1.5">
                    <ChevronRight className="w-3 h-3 mt-0.5 shrink-0" /> {ex}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs">
                  <span className="inline-flex items-center gap-1 font-semibold text-mint"><Zap className="w-3 h-3" /> +{hw.xp} XP</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-amber"><Sparkles className="w-3 h-3" /> +{hw.coins}</span>
                </div>
                <button
                  onClick={() => markComplete(hw)}
                  disabled={done || submitting === hw.id}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    done ? 'bg-mint/10 text-mint cursor-default' : 'gradient-duotone text-white shadow-soft hover:shadow-glow-mint'
                  } ${submitting === hw.id ? 'opacity-50' : ''}`}
                >
                  {done ? 'Completed' : submitting === hw.id ? 'Submitting...' : 'Mark Done'}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
      {filtered.length === 0 && (
        <GlassCard className="p-12 text-center">
          <ClipboardList className="w-12 h-12 mx-auto text-muted-foreground/40 mb-3" />
          <p className="text-muted-foreground">No homework in this category.</p>
        </GlassCard>
      )}
    </div>
  );
}