import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOGIC_CHALLENGES, DEBUG_CHALLENGES, COMPANY_CHALLENGES } from '@/data/curriculum';
import { Badge } from '@/components/ui/PyverseUI';
import {
  Brain, Bug, Briefcase, Zap, Sparkles, Clock, Lightbulb,
  CheckCircle, XCircle, Play, RotateCcw, ChevronRight, Trophy, Flame, Target
} from 'lucide-react';

const CATEGORIES = [
  { id: 'logic', label: 'Logic Builder', icon: Brain, color: 'mint', challenges: LOGIC_CHALLENGES },
  { id: 'debug', label: 'Debug Arena', icon: Bug, color: 'coral', challenges: DEBUG_CHALLENGES },
  { id: 'company', label: 'Company Challenges', icon: Briefcase, color: 'lavender', challenges: COMPANY_CHALLENGES },
];

const DIFFICULTY_COLORS = {
  Beginner: 'mint', Easy: 'mint', Medium: 'lavender', Hard: 'amber', Expert: 'coral', 'Company Level': 'lavender'
};

export default function LogicDebug() {
  const [activeCategory, setActiveCategory] = useState('logic');
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const category = CATEGORIES.find(c => c.id === activeCategory);

  if (selectedChallenge) {
    return <ChallengeDetail challenge={selectedChallenge} onBack={() => setSelectedChallenge(null)} type={activeCategory} />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight">Logic & Debug Arena</h1>
        <p className="text-muted-foreground mt-1">Train your problem-solving and debugging skills</p>
      </div>

      {/* Special modes */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { icon: '⚔️', label: 'Boss Battle', desc: '10 problems, no mistakes', color: 'coral' },
          { icon: '❤️', label: 'Survival Mode', desc: '3 lives, wrong = lose', color: 'coral' },
          { icon: '⏱️', label: 'Time Attack', desc: 'Max problems in 60s', color: 'amber' },
          { icon: '🔥', label: 'Streak Challenge', desc: 'Daily problems', color: 'mint' },
        ].map((m, i) => (
          <div key={i} className="bg-card rounded-2xl p-4 shadow-soft hover:shadow-float transition-all cursor-pointer text-center">
            <div className="text-2xl mb-1">{m.icon}</div>
            <div className="text-sm font-semibold">{m.label}</div>
            <div className="text-xs text-muted-foreground">{m.desc}</div>
          </div>
        ))}
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 overflow-x-auto scrollbar-thin pb-1">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.id ? 'gradient-duotone text-white shadow-soft' : 'bg-card shadow-soft text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="w-4 h-4" /> {cat.label}
            </button>
          );
        })}
      </div>

      {/* Challenges list */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.challenges.map((challenge, i) => (
          <motion.div
            key={challenge.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (i % 3) * 0.1 }}
            whileHover={{ y: -4 }}
            onClick={() => setSelectedChallenge(challenge)}
            className="group bg-card rounded-2xl p-5 shadow-soft hover:shadow-float border border-border/50 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <Badge color={DIFFICULTY_COLORS[challenge.difficulty]}>{challenge.difficulty}</Badge>
              {challenge.estimatedTime && (
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" /> {challenge.estimatedTime}
                </span>
              )}
            </div>
            <h3 className="font-bold text-sm mb-2 group-hover:text-mint transition-colors">{challenge.title}</h3>
            <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{challenge.description}</p>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1 text-xs font-medium text-mint">
                <Zap className="w-3 h-3" /> +{challenge.xpReward || challenge.xpReward} XP
              </span>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-mint transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ChallengeDetail({ challenge, onBack, type }) {
  const [code, setCode] = useState(challenge.starterCode || challenge.buggyCode || '');
  const [showHint, setShowHint] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const isDebug = type === 'debug';

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        ← Back to Challenges
      </button>

      {/* Problem header */}
      <div className="glass-card rounded-2xl shadow-float p-6">
        <div className="flex items-center gap-3 mb-3">
          <Badge color={DIFFICULTY_COLORS[challenge.difficulty]}>{challenge.difficulty}</Badge>
          {challenge.errorType && <Badge color="coral">{challenge.errorType}</Badge>}
          {challenge.topic && <Badge color="lavender">{challenge.topic}</Badge>}
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight mb-2">{challenge.title}</h1>
        <p className="text-muted-foreground">{challenge.description}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        {/* Left: Problem */}
        <div className="space-y-4">
          <div className="bg-card rounded-2xl shadow-soft p-5">
            <h3 className="font-bold text-sm mb-3">Problem Statement</h3>
            <p className="text-sm text-muted-foreground mb-4">{challenge.problemStatement || challenge.description}</p>

            {challenge.sampleInput && (
              <div className="mb-3">
                <div className="text-xs font-semibold text-mint mb-1">Sample Input:</div>
                <pre className="p-3 rounded-xl bg-muted/30 font-mono text-sm">{challenge.sampleInput}</pre>
              </div>
            )}
            {challenge.sampleOutput && (
              <div className="mb-3">
                <div className="text-xs font-semibold text-lavender mb-1">Sample Output:</div>
                <pre className="p-3 rounded-xl bg-muted/30 font-mono text-sm">{challenge.sampleOutput}</pre>
              </div>
            )}
            {challenge.constraints && (
              <div className="mb-3">
                <div className="text-xs font-semibold text-amber mb-1">Constraints:</div>
                <p className="text-sm text-muted-foreground">{challenge.constraints}</p>
              </div>
            )}
          </div>

          {/* Hints */}
          {challenge.hints && (
            <div className="bg-card rounded-2xl shadow-soft p-5">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-4 h-4 text-amber" />
                <h3 className="font-bold text-sm">Hints</h3>
              </div>
              <div className="space-y-2">
                {challenge.hints.map((hint, i) => (
                  <div key={i}>
                    {showHint > i ? (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm text-muted-foreground p-2 rounded-lg bg-amber/5"
                      >
                        💡 {hint}
                      </motion.p>
                    ) : (
                      <button
                        onClick={() => setShowHint(i + 1)}
                        className="text-sm text-amber hover:underline"
                      >
                        Show Hint {i + 1}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {isDebug && challenge.hint && (
            <div className="bg-card rounded-2xl shadow-soft p-5">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-4 h-4 text-amber" />
                <h3 className="font-bold text-sm">Hint</h3>
              </div>
              {showHint > 0 ? (
                <p className="text-sm text-muted-foreground">{challenge.hint}</p>
              ) : (
                <button onClick={() => setShowHint(1)} className="text-sm text-amber hover:underline">Show Hint</button>
              )}
            </div>
          )}

          {/* Rewards */}
          <div className="bg-card rounded-2xl shadow-soft p-5">
            <h3 className="font-bold text-sm mb-3">Rewards</h3>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-mint/10">
                <Zap className="w-4 h-4 text-mint" />
                <span className="text-sm font-bold text-mint">+{challenge.xpReward} XP</span>
              </div>
              {challenge.coinReward && (
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber/10">
                  <Sparkles className="w-4 h-4 text-amber" />
                  <span className="text-sm font-bold text-amber">+{challenge.coinReward} coins</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Editor */}
        <div className="space-y-4">
          <div className="bg-card rounded-2xl shadow-float overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-channel border-b border-border/50">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-coral/80" />
                  <div className="w-3 h-3 rounded-full bg-amber/80" />
                  <div className="w-3 h-3 rounded-full bg-mint/80" />
                </div>
                <span className="text-xs text-muted-foreground font-mono">solution.py</span>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setCode(challenge.starterCode || challenge.buggyCode || '')} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-muted hover:bg-muted/70 transition-colors">
                  <RotateCcw className="w-3 h-3 inline" /> Reset
                </button>
                <button onClick={() => setSubmitted(true)} className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white gradient-mint transition-all">
                  <Play className="w-3 h-3 inline" /> Submit
                </button>
              </div>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full p-4 font-mono text-sm bg-[#1e1e2e] text-[#cdd6f4] outline-none resize-none min-h-[300px]"
              spellCheck={false}
            />
          </div>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-2xl shadow-soft p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-mint" />
                <h3 className="font-bold text-sm">Submission Received!</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {isDebug ? challenge.explanation : 'Great work! Your solution has been submitted for evaluation.'}
              </p>
              <div className="flex gap-2">
                <button onClick={() => setShowSolution(true)} className="px-4 py-2 rounded-xl text-sm font-medium bg-lavender/10 text-lavender hover:bg-lavender/20 transition-colors">
                  View Solution
                </button>
                <button onClick={() => { setSubmitted(false); setCode(challenge.starterCode || challenge.buggyCode || ''); }} className="px-4 py-2 rounded-xl text-sm font-medium bg-muted hover:bg-muted/70 transition-colors">
                  Try Again
                </button>
              </div>
            </motion.div>
          )}

          {showSolution && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-2xl shadow-soft p-5"
            >
              <h3 className="font-bold text-sm mb-3">Solution</h3>
              <pre className="p-4 rounded-xl bg-[#1e1e2e] text-[#cdd6f4] font-mono text-sm overflow-x-auto">{challenge.solution}</pre>
              {isDebug && challenge.explanation && (
                <p className="text-sm text-muted-foreground mt-3">{challenge.explanation}</p>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}