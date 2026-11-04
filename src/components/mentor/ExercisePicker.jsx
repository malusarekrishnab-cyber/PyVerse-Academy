import React, { useState, useMemo } from 'react';
import { Search, Brain, Bug, Briefcase, BookOpen, CheckCircle2 } from 'lucide-react';
import { LOGIC_CHALLENGES, DEBUG_CHALLENGES, COMPANY_CHALLENGES, MODULES } from '@/data/curriculum';

const TABS = [
  { id: 'logic', label: 'Logic', icon: Brain, source: LOGIC_CHALLENGES, kind: 'challenge' },
  { id: 'debug', label: 'Debug', icon: Bug, source: DEBUG_CHALLENGES, kind: 'debug' },
  { id: 'company', label: 'Company', icon: Briefcase, source: COMPANY_CHALLENGES, kind: 'challenge' },
  { id: 'exercises', label: 'Exercises', icon: BookOpen, source: null, kind: 'exercise' },
];

function buildExercises() {
  const out = [];
  MODULES.forEach(m => {
    m.topics.forEach(t => {
      if (t.exercises) {
        ['beginner', 'intermediate', 'advanced'].forEach(level => {
          (t.exercises[level] || []).forEach((prompt, idx) => {
            out.push({
              id: `${t.id}-ex-${level}-${idx}`,
              title: prompt,
              difficulty: level === 'beginner' ? 'Beginner' : level === 'intermediate' ? 'Intermediate' : 'Advanced',
              category: 'Exercise',
              topic: t.title,
              problemStatement: prompt,
              starterCode: t.notes?.codeExample || '',
              hints: t.notes?.memoryTrick ? [t.notes.memoryTrick] : [],
            });
          });
        });
      }
    });
  });
  return out;
}

const EXERCISES = buildExercises();

export default function ExercisePicker({ selected, onSelect }) {
  const [tab, setTab] = useState('logic');
  const [query, setQuery] = useState('');

  const items = useMemo(() => {
    let list = tab === 'exercises' ? EXERCISES : TABS.find(t => t.id === tab).source;
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(i =>
        (i.title || '').toLowerCase().includes(q) ||
        (i.topic || '').toLowerCase().includes(q) ||
        (i.difficulty || '').toLowerCase().includes(q)
      );
    }
    return list.slice(0, 40);
  }, [tab, query]);

  return (
    <div className="flex flex-col h-full">
      <div className="text-sm font-semibold mb-2 px-1">Practice Context</div>

      {/* Tabs */}
      <div className="flex gap-1 mb-2 p-1 rounded-xl bg-channel channel-carve">
        {TABS.map(t => {
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex-1 flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium transition-all ${
                tab === t.id ? 'gradient-duotone text-white shadow-soft' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="w-3.5 h-3.5" /> {t.label}
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="relative mb-2">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search exercises..."
          className="w-full pl-9 pr-3 py-2 rounded-xl bg-card border border-border/50 focus:border-mint focus:outline-none text-xs"
        />
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto scrollbar-thin space-y-1.5 pr-1">
        {items.map(item => {
          const active = selected?.id === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelect(item)}
              className={`w-full text-left p-2.5 rounded-xl border transition-all ${
                active
                  ? 'border-mint bg-mint/10 shadow-soft'
                  : 'border-border/50 bg-card hover:border-mint/40 hover:shadow-soft'
              }`}
            >
              <div className="flex items-start gap-2">
                {active ? <CheckCircle2 className="w-4 h-4 text-mint shrink-0 mt-0.5" /> : null}
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold leading-snug line-clamp-2">{item.title}</div>
                  <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground">{item.difficulty}</span>
                    {item.topic && <span className="text-[10px] text-muted-foreground truncate">{item.topic}</span>}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
        {items.length === 0 && (
          <div className="text-center text-xs text-muted-foreground py-8">No exercises found.</div>
        )}
      </div>
    </div>
  );
}