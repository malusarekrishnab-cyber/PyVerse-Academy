import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, CheckCircle, XCircle, Zap, RotateCcw, ChevronRight, ArrowLeft, BookOpen } from 'lucide-react';
import { GlassCard, Badge, ProgressBar } from '@/components/ui/PyverseUI';
import { MODULES, XP_REWARDS, COIN_REWARDS } from '@/data/curriculum';
import { base44 } from '@/api/base44Client';

export default function Quiz() {
  const [stage, setStage] = useState('select'); // select, playing, result
  const [module, setModule] = useState(null);
  const [topic, setTopic] = useState(null);
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { load(); }, []);

  const load = async () => {
    try {
      const me = await base44.auth.me();
      const res = await base44.entities.UserProgress.filter({ user_id: me.id });
      setProgress(res[0] || null);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  };

  const quizTopics = MODULES.flatMap(m =>
    m.topics.filter(t => t.quiz && t.quiz.length > 0).map(t => ({ ...t, moduleId: m.id, moduleTitle: m.title }))
  );

  const startQuiz = (t) => {
    setTopic(t);
    setStage('playing');
    setQIndex(0);
    setAnswers([]);
    setSelected(null);
    setShowFeedback(false);
  };

  const submitAnswer = () => {
    if (selected === null) return;
    const correct = selected === topic.quiz[qIndex].answer;
    const newAnswers = [...answers, { correct }];
    setAnswers(newAnswers);
    setShowFeedback(true);
    setTimeout(() => {
      if (qIndex + 1 < topic.quiz.length) {
        setQIndex(qIndex + 1);
        setSelected(null);
        setShowFeedback(false);
      } else {
        finishQuiz(newAnswers);
      }
    }, 1200);
  };

  const finishQuiz = async (finalAnswers) => {
    const score = finalAnswers.filter(a => a.correct).length;
    const total = topic.quiz.length;
    const pct = Math.round((score / total) * 100);
    const perfect = pct === 100;
    const xp = perfect ? XP_REWARDS.quiz + 20 : Math.round(XP_REWARDS.quiz * (pct / 100));
    const coins = Math.round(COIN_REWARDS.homework * (pct / 100));
    try {
      if (progress) {
        const completed = progress.completed_topics || [];
        if (!completed.includes(topic.id)) completed.push(topic.id);
        await base44.entities.UserProgress.update(progress.id, {
          completed_topics: completed,
          xp: (progress.xp || 0) + xp,
          coins: (progress.coins || 0) + coins,
        });
        await base44.entities.Activity.create({
          user_id: progress.user_id, type: 'quiz',
          title: `Quiz: ${topic.title}`, description: `${pct}% score`,
          xp_earned: xp, coins_earned: coins, icon: '🧠',
        });
      }
    } catch (e) { console.error(e); }
    setStage('result');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-mint/20 border-t-mint rounded-full animate-spin" />
      </div>
    );
  }

  // Result stage
  if (stage === 'result' && topic) {
    const score = answers.filter(a => a.correct).length;
    const total = topic.quiz.length;
    const pct = Math.round((score / total) * 100);
    const perfect = pct === 100;
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-2xl mx-auto">
        <GlassCard className="p-8 text-center">
          <div className="text-6xl mb-4">{perfect ? '🏆' : pct >= 60 ? '🎉' : '💪'}</div>
          <h2 className="text-2xl font-extrabold mb-2">{perfect ? 'Perfect Score!' : pct >= 60 ? 'Great Job!' : 'Keep Practicing!'}</h2>
          <p className="text-muted-foreground mb-6">{topic.title}</p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-card rounded-xl p-4 shadow-soft">
              <div className="text-3xl font-bold text-mint">{score}/{total}</div>
              <div className="text-xs text-muted-foreground">Correct</div>
            </div>
            <div className="bg-card rounded-xl p-4 shadow-soft">
              <div className="text-3xl font-bold text-lavender">{pct}%</div>
              <div className="text-xs text-muted-foreground">Score</div>
            </div>
            <div className="bg-card rounded-xl p-4 shadow-soft">
              <div className="text-3xl font-bold text-amber">+{Math.round(XP_REWARDS.quiz * (pct/100))}</div>
              <div className="text-xs text-muted-foreground">XP</div>
            </div>
          </div>
          <div className="flex gap-3 justify-center">
            <button onClick={() => startQuiz(topic)} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold gradient-duotone shadow-soft hover:shadow-glow-mint transition-all">
              <RotateCcw className="w-4 h-4" /> Retry
            </button>
            <button onClick={() => setStage('select')} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-card border border-border/50 hover:bg-muted transition-colors">
              <BookOpen className="w-4 h-4" /> More Quizzes
            </button>
          </div>
        </GlassCard>
      </motion.div>
    );
  }

  // Playing stage
  if (stage === 'playing' && topic) {
    const q = topic.quiz[qIndex];
    return (
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="flex items-center justify-between">
          <button onClick={() => setStage('select')} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" /> Exit
          </button>
          <Badge color="mint">Question {qIndex + 1}/{topic.quiz.length}</Badge>
        </div>
        <ProgressBar value={qIndex + 1} max={topic.quiz.length} color="mint" height="h-2" />
        <GlassCard className="p-6">
          <div className="text-xs text-muted-foreground mb-2">{topic.moduleTitle}</div>
          <h3 className="text-lg font-bold mb-6">{q.q}</h3>
          <div className="space-y-3">
            {q.options.map((opt, i) => {
              const isCorrect = i === q.answer;
              const isSelected = i === selected;
              let style = 'bg-card border-border/50 hover:border-mint/40';
              if (showFeedback && isCorrect) style = 'bg-mint/10 border-mint text-mint';
              else if (showFeedback && isSelected && !isCorrect) style = 'bg-coral/10 border-coral text-coral';
              else if (isSelected) style = 'border-mint bg-mint/5';
              return (
                <motion.button
                  key={i}
                  whileHover={{ scale: showFeedback ? 1 : 1.01 }}
                  onClick={() => !showFeedback && setSelected(i)}
                  disabled={showFeedback}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${style}`}
                >
                  <span className="text-sm font-medium">{opt}</span>
                  {showFeedback && isCorrect && <CheckCircle className="w-5 h-5" />}
                  {showFeedback && isSelected && !isCorrect && <XCircle className="w-5 h-5" />}
                </motion.button>
              );
            })}
          </div>
          {!showFeedback && (
            <button
              onClick={submitAnswer}
              disabled={selected === null}
              className="w-full mt-6 py-3 rounded-xl text-white font-semibold gradient-duotone shadow-soft hover:shadow-glow-mint transition-all disabled:opacity-40"
            >
              Submit Answer
            </button>
          )}
        </GlassCard>
      </div>
    );
  }

  // Select stage
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight">Quizzes</h1>
        <p className="text-muted-foreground mt-1">Test your knowledge and earn XP for perfect scores</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {quizTopics.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            whileHover={{ y: -4 }}
            onClick={() => startQuiz(t)}
            className="bg-card rounded-2xl p-5 shadow-soft hover:shadow-float border border-border/50 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-mint/10 flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-mint" />
              </div>
              <Badge color="gray" size="sm">{t.quiz.length} Qs</Badge>
            </div>
            <div className="text-xs text-muted-foreground mb-1">{t.moduleTitle}</div>
            <h3 className="font-bold text-sm mb-3">{t.title}</h3>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-mint"><Zap className="w-3 h-3" /> +{XP_REWARDS.quiz} XP</span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-mint">Start <ChevronRight className="w-3 h-3" /></span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}