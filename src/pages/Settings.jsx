import React, { useState, useEffect } from 'react';
import { Save, Check, Moon, Sun } from 'lucide-react';
import { GlassCard, SectionTitle, Badge } from '@/components/ui/PyverseUI';
import { useTheme } from '@/lib/ThemeContext';
import { base44 } from '@/api/base44Client';

const AVATARS = ['🐍', '👨‍💻', '👩‍💻', '🧑‍🔬', '👨‍🎓', '👩‍🎓', '🚀', '⚡', '🎯', '🏆', '💎', '🔥'];
const GOALS = ['Learn Python', 'Get a Job', 'Build Projects', 'Pass an Interview', 'Master Data Science', 'Learn Automation'];
const LEVELS = ['Absolute Beginner', 'Some Experience', 'Intermediate', 'Advanced'];

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({ avatar: '🐍', goal: 'Learn Python', experience_level: 'Absolute Beginner', daily_goal_minutes: 30 });

  useEffect(() => { load(); }, []);

  const load = async () => {
    try {
      const me = await base44.auth.me();
      setUser(me);
      const p = await base44.entities.UserProgress.filter({ user_id: me.id });
      if (p[0]) {
        setProgress(p[0]);
        setForm({
          avatar: p[0].avatar || '🐍',
          goal: p[0].goal || 'Learn Python',
          experience_level: p[0].experience_level || 'Absolute Beginner',
          daily_goal_minutes: p[0].daily_goal_minutes || 30,
        });
      }
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  };

  const save = async () => {
    setSaving(true);
    try {
      if (progress) {
        await base44.entities.UserProgress.update(progress.id, form);
      }
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (e) { console.error(e); }
    finally { setSaving(false); }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-mint/20 border-t-mint rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">Customize your learning experience</p>
      </div>

      {/* Account */}
      <GlassCard className="p-5">
        <SectionTitle title="Account" subtitle="Your account information" />
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl gradient-duotone flex items-center justify-center text-4xl shadow-soft">
            {form.avatar}
          </div>
          <div>
            <div className="font-bold">{user?.full_name || 'Student'}</div>
            <div className="text-sm text-muted-foreground">{user?.email}</div>
            <Badge color="mint" size="sm" >{user?.role || 'user'}</Badge>
          </div>
        </div>
      </GlassCard>

      {/* Avatar */}
      <GlassCard className="p-5">
        <SectionTitle title="Avatar" subtitle="Choose your learning companion" />
        <div className="grid grid-cols-6 gap-3">
          {AVATARS.map(a => (
            <button
              key={a}
              onClick={() => setForm(f => ({ ...f, avatar: a }))}
              className={`aspect-square rounded-2xl text-3xl flex items-center justify-center transition-all ${
                form.avatar === a ? 'gradient-duotone shadow-glow-mint scale-105' : 'bg-card shadow-soft hover:shadow-float'
              }`}
            >
              {a}
            </button>
          ))}
        </div>
      </GlassCard>

      {/* Goal */}
      <GlassCard className="p-5">
        <SectionTitle title="Learning Goal" subtitle="What are you working towards?" />
        <div className="flex flex-wrap gap-2">
          {GOALS.map(g => (
            <button
              key={g}
              onClick={() => setForm(f => ({ ...f, goal: g }))}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                form.goal === g ? 'gradient-duotone text-white shadow-soft' : 'bg-card shadow-soft hover:shadow-float'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </GlassCard>

      {/* Experience Level */}
      <GlassCard className="p-5">
        <SectionTitle title="Experience Level" subtitle="Help us personalize your content" />
        <div className="grid grid-cols-2 gap-3">
          {LEVELS.map(l => (
            <button
              key={l}
              onClick={() => setForm(f => ({ ...f, experience_level: l }))}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                form.experience_level === l ? 'gradient-duotone text-white shadow-soft' : 'bg-card shadow-soft hover:shadow-float'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </GlassCard>

      {/* Daily Goal */}
      <GlassCard className="p-5">
        <SectionTitle title="Daily Goal" subtitle="Minutes per day" />
        <div className="flex items-center gap-4">
          <input
            type="range" min={10} max={120} step={10}
            value={form.daily_goal_minutes}
            onChange={e => setForm(f => ({ ...f, daily_goal_minutes: parseInt(e.target.value) }))}
            className="flex-1 accent-mint"
          />
          <div className="w-20 text-center">
            <span className="text-2xl font-bold text-mint">{form.daily_goal_minutes}</span>
            <span className="text-xs text-muted-foreground block">min/day</span>
          </div>
        </div>
      </GlassCard>

      {/* Theme */}
      <GlassCard className="p-5">
        <SectionTitle title="Appearance" subtitle="Choose your theme" />
        <button
          onClick={toggleTheme}
          className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-card shadow-soft hover:shadow-float transition-all"
        >
          {theme === 'dark' ? <Moon className="w-5 h-5 text-lavender" /> : <Sun className="w-5 h-5 text-amber" />}
          <span className="text-sm font-medium">{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
        </button>
      </GlassCard>

      {/* Save */}
      <div className="flex justify-end">
        <button
          onClick={save}
          disabled={saving}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold gradient-duotone shadow-soft hover:shadow-glow-mint transition-all disabled:opacity-50"
        >
          {saved ? <Check className="w-4 h-4" /> : saving ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Save className="w-4 h-4" />}
          {saved ? 'Saved!' : saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
}