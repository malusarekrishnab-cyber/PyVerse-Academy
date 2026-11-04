import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Crown, Medal, Zap, Keyboard, Target, TrendingUp } from 'lucide-react';
import { GlassCard, Badge } from '@/components/ui/PyverseUI';
import { LEADERBOARD } from '@/data/curriculum';
import { base44 } from '@/api/base44Client';

const TABS = [
  { id: 'global', label: 'Global', icon: Trophy },
  { id: 'weekly', label: 'Weekly', icon: Zap },
  { id: 'friends', label: 'Friends', icon: Medal },
];

export default function Leaderboard() {
  const [tab, setTab] = useState('global');
  const [me, setMe] = useState(null);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const u = await base44.auth.me();
        setMe(u);
        const p = await base44.entities.UserProgress.filter({ user_id: u.id });
        setProgress(p[0] || null);
      } catch (e) { console.error(e); }
    })();
  }, []);

  const myXP = progress?.xp || 0;
  const myLevel = progress?.level || 1;
  const top3 = LEADERBOARD.slice(0, 3);
  const rest = LEADERBOARD.slice(3);
  const podiumOrder = [top3[1], top3[0], top3[2]];
  const podiumHeights = ['h-24', 'h-32', 'h-20'];
  const podiumColors = ['bg-slate-300', 'gradient-mint', 'bg-amber-700'];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight">Leaderboard</h1>
        <p className="text-muted-foreground mt-1">Compete with learners worldwide and climb the ranks</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {TABS.map(t => {
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                tab === t.id ? 'gradient-duotone text-white shadow-soft' : 'bg-card shadow-soft hover:shadow-float'
              }`}
            >
              <Icon className="w-4 h-4" /> {t.label}
            </button>
          );
        })}
      </div>

      {/* Podium */}
      <div className="grid grid-cols-3 gap-3 lg:gap-6 items-end">
        {podiumOrder.map((p, i) => (
          <motion.div
            key={p.rank}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex flex-col items-center"
          >
            {p.rank === 1 && <Crown className="w-7 h-7 text-amber mb-1" />}
            <div className="text-5xl mb-2">{p.avatar}</div>
            <div className="text-sm font-bold text-center truncate w-full">{p.name}</div>
            <div className="text-xs text-muted-foreground">{p.xp.toLocaleString()} XP</div>
            <div className={`w-full ${podiumHeights[i]} ${podiumColors[i]} rounded-t-2xl mt-3 flex items-center justify-center text-white font-bold text-2xl shadow-soft`}>
              #{p.rank}
            </div>
          </motion.div>
        ))}
      </div>

      {/* My rank card */}
      {me && (
        <GlassCard className="p-4 border-2 border-mint/40">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl gradient-duotone flex items-center justify-center text-2xl shadow-soft">
              {progress?.avatar || '🐍'}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold truncate">{me.full_name || me.email} (You)</div>
              <div className="text-xs text-muted-foreground">Level {myLevel} · {myXP.toLocaleString()} XP</div>
            </div>
            <Badge color="mint" size="lg">Rank #42</Badge>
          </div>
        </GlassCard>
      )}

      {/* Rest of leaderboard */}
      <GlassCard className="p-2">
        <div className="space-y-1">
          {rest.map((p, i) => (
            <motion.div
              key={p.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/30 transition-colors"
            >
              <div className="w-8 text-center font-bold text-muted-foreground">#{p.rank}</div>
              <div className="text-3xl">{p.avatar}</div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold truncate flex items-center gap-2">
                  {p.name} <span className="text-lg">{p.country}</span>
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-3">
                  <span className="inline-flex items-center gap-1"><TrendingUp className="w-3 h-3" /> Lv {p.level}</span>
                  <span className="inline-flex items-center gap-1"><Keyboard className="w-3 h-3" /> {p.wpm} WPM</span>
                  <span className="inline-flex items-center gap-1"><Target className="w-3 h-3" /> {p.accuracy}%</span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="font-bold text-mint">{p.xp.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">XP</div>
              </div>
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}