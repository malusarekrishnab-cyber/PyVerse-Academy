import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MODULES, getModule, getTopic, ALL_TOPICS } from '@/data/curriculum';
import { Badge, ProgressBar } from '@/components/ui/PyverseUI';
import {
  Clock, Zap, Sparkles, ChevronRight, ArrowLeft, BookOpen,
  CheckCircle, Circle, Play, Lightbulb, AlertTriangle, Info, Star, Briefcase
} from 'lucide-react';

export default function Learn() {
  const { moduleId, topicId } = useParams();
  const navigate = useNavigate();

  if (topicId) {
    return <TopicDetail topicId={topicId} moduleId={moduleId} />;
  }
  if (moduleId) {
    return <ModuleDetail moduleId={moduleId} />;
  }
  return <ModuleList />;
}

function ModuleList() {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight">Learn Python</h1>
        <p className="text-muted-foreground mt-1">Master Python from Absolute Beginner to Job-Ready Professional</p>
      </div>

      {/* Roadmap visual */}
      <div className="glass-card rounded-2xl shadow-soft p-5">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-thin pb-2">
          {['Beginner', 'Intermediate', 'Advanced', 'Data Science', 'Web Dev', 'Job Ready'].map((stage, i) => (
            <div key={i} className="flex items-center gap-2 shrink-0">
              <div className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap ${
                i === 0 ? 'gradient-duotone text-white' : 'bg-muted text-muted-foreground'
              }`}>
                {stage}
              </div>
              {i < 5 && <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />}
            </div>
          ))}
        </div>
      </div>

      {/* Modules */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {MODULES.map((module, i) => (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (i % 3) * 0.1 }}
            whileHover={{ y: -4 }}
            onClick={() => navigate(`/learn/${module.id}`)}
            className="group bg-card rounded-2xl p-5 shadow-soft hover:shadow-float border border-border/50 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                module.color === 'mint' ? 'bg-mint/10' : 'bg-lavender/10'
              }`}>
                {module.icon}
              </div>
              <Badge color={module.color === 'mint' ? 'mint' : 'lavender'}>{module.difficulty}</Badge>
            </div>
            <div className="text-xs text-muted-foreground mb-1">Module {module.num}</div>
            <h3 className="font-bold text-base mb-2 group-hover:text-mint transition-colors">{module.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{module.description}</p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {module.time}</span>
              <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5" /> {module.xp} XP</span>
              <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> {module.topics.length} topics</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ModuleDetail({ moduleId }) {
  const navigate = useNavigate();
  const module = getModule(moduleId);
  if (!module) return <div>Module not found</div>;

  return (
    <div className="space-y-6">
      <Link to="/learn" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Modules
      </Link>

      {/* Module cover */}
      <div className="glass-card rounded-2xl shadow-float p-6 lg:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-mint/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${
              module.color === 'mint' ? 'bg-mint/10' : 'bg-lavender/10'
            }`}>
              {module.icon}
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Module {module.num}</div>
              <h1 className="text-2xl font-extrabold tracking-tight">{module.title}</h1>
            </div>
          </div>
          <p className="text-muted-foreground max-w-2xl">{module.description}</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
            <div className="bg-card rounded-xl p-3 shadow-soft">
              <div className="text-xs text-muted-foreground">Difficulty</div>
              <div className="font-semibold text-sm">{module.difficulty}</div>
            </div>
            <div className="bg-card rounded-xl p-3 shadow-soft">
              <div className="text-xs text-muted-foreground">Estimated Time</div>
              <div className="font-semibold text-sm">{module.time}</div>
            </div>
            <div className="bg-card rounded-xl p-3 shadow-soft">
              <div className="text-xs text-muted-foreground">XP Reward</div>
              <div className="font-semibold text-sm text-mint">+{module.xp} XP</div>
            </div>
            <div className="bg-card rounded-xl p-3 shadow-soft">
              <div className="text-xs text-muted-foreground">Coins</div>
              <div className="font-semibold text-sm text-amber">+{module.coins} coins</div>
            </div>
          </div>

          <div className="mt-6 grid lg:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-semibold mb-2">Learning Objectives</h3>
              <ul className="space-y-1.5">
                {module.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-mint shrink-0 mt-0.5" /> {obj}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2">Prerequisites</h3>
              <ul className="space-y-1.5">
                {module.prerequisites.map((pre, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Info className="w-4 h-4 text-lavender shrink-0 mt-0.5" /> {pre}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Topics */}
      <div>
        <h2 className="text-xl font-bold mb-4">Topics in this Module</h2>
        <div className="space-y-3">
          {module.topics.map((topic, i) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => navigate(`/learn/${module.id}/${topic.id}`)}
              className="group bg-card rounded-2xl p-4 shadow-soft hover:shadow-float border border-border/50 transition-all cursor-pointer flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center font-bold text-sm shrink-0">
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm group-hover:text-mint transition-colors">{topic.title}</h3>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {topic.time}</span>
                  <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> {topic.xp} XP</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-mint transition-colors shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TopicDetail({ topicId, moduleId }) {
  const topic = getTopic(topicId);
  const [activeTab, setActiveTab] = useState('notes');
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  if (!topic) return <div>Topic not found</div>;

  const module = getModule(moduleId || topic.moduleId);
  const tabs = [
    { id: 'notes', label: 'Notes', icon: BookOpen },
    { id: 'code', label: 'Code Editor', icon: Play },
    { id: 'quiz', label: 'Quiz', icon: Zap },
    { id: 'exercises', label: 'Exercises', icon: Lightbulb },
    { id: 'project', label: 'Mini Project', icon: Star },
  ];

  const quizScore = topic.quiz.filter((q, i) => quizAnswers[i] === q.answer).length;

  return (
    <div className="space-y-6">
      <Link to={`/learn/${module?.id}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to {module?.title}
      </Link>

      {/* Topic header */}
      <div className="glass-card rounded-2xl shadow-float p-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{module?.icon}</span>
          <div>
            <div className="text-xs text-muted-foreground">{module?.title}</div>
            <h1 className="text-2xl font-extrabold tracking-tight">{topic.title}</h1>
          </div>
        </div>
        <p className="text-muted-foreground">{topic.intro}</p>
        <div className="flex items-center gap-3 mt-4">
          <Badge color="mint"><Clock className="w-3 h-3" /> {topic.time}</Badge>
          <Badge color="lavender"><Zap className="w-3 h-3" /> {topic.xp} XP</Badge>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto scrollbar-thin pb-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id ? 'gradient-duotone text-white shadow-soft' : 'bg-card shadow-soft text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="w-4 h-4" /> {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'notes' && <NotesView topic={topic} />}
          {activeTab === 'code' && <CodeEditorView topic={topic} />}
          {activeTab === 'quiz' && (
            <QuizView topic={topic} answers={quizAnswers} setAnswers={setQuizAnswers} submitted={quizSubmitted} setSubmitted={setQuizSubmitted} score={quizScore} />
          )}
          {activeTab === 'exercises' && <ExercisesView topic={topic} />}
          {activeTab === 'project' && <ProjectView topic={topic} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function NotesView({ topic }) {
  const n = topic.notes;
  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 space-y-4">
        {/* Handwritten notes */}
        <div className="notebook-paper rounded-2xl shadow-float p-6 lg:p-8 relative overflow-hidden">
          <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-lavender/20" />
          <div className="ml-8">
            <div className="flex items-center justify-between mb-4">
              <div className="handwriting text-2xl font-bold text-[#1a1a2e]">{topic.title} 📝</div>
              <div className="handwriting text-sm text-gray-500">Date: 26/06/2026</div>
            </div>
            <div className="handwriting text-lg text-[#1e3a8a] mb-3">
              <span className="bg-yellow-200 px-1">{n.definition}</span>
            </div>
            <div className="handwriting text-base text-[#1a1a2e] mb-2">
              <span className="text-red-500 font-bold">Why:</span> {n.whyWeUse}
            </div>
            <div className="handwriting text-base text-[#1a1a2e] mb-2">
              <span className="text-red-500 font-bold">Syntax:</span>
            </div>
            <pre className="handwriting text-sm text-[#1a1a2e] bg-white/50 rounded-lg p-3 ml-4 overflow-x-auto">{n.syntax}</pre>
            <div className="handwriting text-base text-[#1a1a2e] mt-3 mb-2">
              <span className="text-red-500 font-bold">Rules:</span>
            </div>
            <ul className="ml-4">
              {n.rules.map((rule, i) => (
                <li key={i} className="handwriting text-sm text-[#1a1a2e]">✓ {rule}</li>
              ))}
            </ul>
            {/* Sticky note */}
            <div className="mt-4 inline-block bg-amber-200 p-3 rounded shadow-lg rotate-1">
              <div className="handwriting text-sm text-[#1a1a2e] font-bold">💡 Memory Trick</div>
              <div className="handwriting text-xs text-[#1a1a2e] mt-1">{n.memoryTrick}</div>
            </div>
          </div>
        </div>

        {/* Code example */}
        <div className="bg-card rounded-2xl shadow-soft p-5">
          <h3 className="font-bold text-sm mb-3">Code Example</h3>
          <div className="rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-channel border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-coral/80" />
                <div className="w-3 h-3 rounded-full bg-amber/80" />
                <div className="w-3 h-3 rounded-full bg-mint/80" />
              </div>
              <span className="text-xs text-muted-foreground font-mono">example.py</span>
            </div>
            <pre className="p-4 font-mono text-sm bg-[#1e1e2e] text-[#cdd6f4] overflow-x-auto">{n.codeExample}</pre>
          </div>
          <div className="mt-3 p-3 rounded-xl bg-mint/5 border border-mint/20">
            <div className="text-xs font-semibold text-mint mb-1">Output:</div>
            <pre className="text-sm font-mono text-foreground whitespace-pre-wrap">{n.outputExample}</pre>
          </div>
        </div>

        {/* Interview tips & common mistakes */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-card rounded-2xl shadow-soft p-5">
            <div className="flex items-center gap-2 mb-3">
              <Info className="w-4 h-4 text-lavender" />
              <h3 className="font-bold text-sm">Interview Tips</h3>
            </div>
            <p className="text-sm text-muted-foreground">{n.interviewTips}</p>
          </div>
          <div className="bg-card rounded-2xl shadow-soft p-5">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-coral" />
              <h3 className="font-bold text-sm">Common Mistakes</h3>
            </div>
            <ul className="space-y-1.5">
              {n.commonMistakes.map((m, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-coral">✗</span> {m}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cheat sheet */}
        <div className="bg-card rounded-2xl shadow-soft p-5">
          <h3 className="font-bold text-sm mb-3">📋 Cheat Sheet</h3>
          <div className="p-3 rounded-xl bg-lavender/5 border border-lavender/20 font-mono text-sm">
            {n.cheatSheet}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-4">
        <div className="bg-card rounded-2xl shadow-soft p-5">
          <h3 className="font-bold text-sm mb-3">Important Points</h3>
          <ul className="space-y-2">
            {n.importantPoints.map((p, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-mint shrink-0 mt-0.5" /> {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card rounded-2xl shadow-soft p-5">
          <h3 className="font-bold text-sm mb-3">Real Life Example</h3>
          <p className="text-sm text-muted-foreground">{n.realLifeExample}</p>
        </div>
        <div className="bg-card rounded-2xl shadow-soft p-5">
          <h3 className="font-bold text-sm mb-3">Best Practices</h3>
          <ul className="space-y-2">
            {n.bestPractices.map((p, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <Star className="w-4 h-4 text-amber shrink-0 mt-0.5" /> {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card rounded-2xl shadow-soft p-5">
          <h3 className="font-bold text-sm mb-3">Revision Summary</h3>
          <p className="text-sm text-muted-foreground">{n.revisionSummary}</p>
        </div>
      </div>
    </div>
  );
}

function CodeEditorView({ topic }) {
  const [code, setCode] = useState(topic.notes.codeExample);
  const [output, setOutput] = useState('');
  const [running, setRunning] = useState(false);

  const runCode = () => {
    setRunning(true);
    setOutput('');
    setTimeout(() => {
      setOutput(topic.notes.outputExample);
      setRunning(false);
    }, 800);
  };

  const lines = code.split('\n');

  return (
    <div className="space-y-4">
      <div className="bg-card rounded-2xl shadow-float overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-channel border-b border-border/50">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-coral/80" />
              <div className="w-3 h-3 rounded-full bg-amber/80" />
              <div className="w-3 h-3 rounded-full bg-mint/80" />
            </div>
            <span className="text-xs text-muted-foreground font-mono">practice.py</span>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setCode(topic.notes.codeExample)} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-muted hover:bg-muted/70 transition-colors">
              Reset
            </button>
            <button onClick={runCode} disabled={running} className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white gradient-mint disabled:opacity-50 transition-all">
              {running ? 'Running...' : '▶ Run'}
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="py-4 px-3 text-right text-xs text-muted-foreground/50 font-mono select-none bg-channel/50">
            {lines.map((_, i) => <div key={i}>{i + 1}</div>)}
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 p-4 font-mono text-sm bg-[#1e1e2e] text-[#cdd6f4] outline-none resize-none min-h-[300px]"
            spellCheck={false}
          />
        </div>
      </div>

      {output && (
        <div className="bg-card rounded-2xl shadow-soft p-5">
          <h3 className="font-bold text-sm mb-3">Output</h3>
          <pre className="p-4 rounded-xl bg-mint/5 border border-mint/20 font-mono text-sm whitespace-pre-wrap">{output}</pre>
        </div>
      )}
    </div>
  );
}

function QuizView({ topic, answers, setAnswers, submitted, setSubmitted, score }) {
  return (
    <div className="space-y-4">
      <div className="bg-card rounded-2xl shadow-soft p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-base">Quiz: {topic.title}</h3>
          {submitted && (
            <div className={`px-4 py-2 rounded-xl text-sm font-bold ${score === topic.quiz.length ? 'bg-mint/10 text-mint' : score >= topic.quiz.length / 2 ? 'bg-amber/10 text-amber' : 'bg-coral/10 text-coral'}`}>
              Score: {score}/{topic.quiz.length} ({Math.round((score / topic.quiz.length) * 100)}%)
            </div>
          )}
        </div>
        <div className="space-y-4">
          {topic.quiz.map((q, i) => (
            <div key={i} className="p-4 rounded-xl bg-muted/30">
              <div className="font-semibold text-sm mb-3">{i + 1}. {q.q}</div>
              <div className="space-y-2">
                {q.options.map((opt, j) => {
                  const selected = answers[i] === j;
                  const correct = submitted && j === q.answer;
                  const wrong = submitted && selected && j !== q.answer;
                  return (
                    <button
                      key={j}
                      onClick={() => !submitted && setAnswers({ ...answers, [i]: j })}
                      disabled={submitted}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-3 ${
                        correct ? 'bg-mint/15 text-mint border border-mint/30' :
                        wrong ? 'bg-coral/15 text-coral border border-coral/30' :
                        selected ? 'bg-lavender/15 text-lavender border border-lavender/30' :
                        'bg-card hover:bg-muted border border-border/50'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 ${
                        correct ? 'bg-mint text-white' : wrong ? 'bg-coral text-white' : selected ? 'bg-lavender text-white' : 'bg-muted'
                      }`}>
                        {String.fromCharCode(65 + j)}
                      </div>
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        {!submitted ? (
          <button
            onClick={() => setSubmitted(true)}
            disabled={Object.keys(answers).length < topic.quiz.length}
            className="mt-4 w-full py-3 rounded-xl text-white font-semibold gradient-duotone disabled:opacity-50 transition-all"
          >
            Submit Quiz
          </button>
        ) : (
          <button
            onClick={() => { setSubmitted(false); setAnswers({}); }}
            className="mt-4 w-full py-3 rounded-xl font-semibold bg-card border border-border/50 hover:bg-muted transition-colors"
          >
            Retry Quiz
          </button>
        )}
      </div>
    </div>
  );
}

function ExercisesView({ topic }) {
  return (
    <div className="space-y-4">
      {['beginner', 'intermediate', 'advanced'].map((level) => (
        <div key={level} className="bg-card rounded-2xl shadow-soft p-5">
          <div className="flex items-center gap-2 mb-3">
            <Badge color={level === 'beginner' ? 'mint' : level === 'intermediate' ? 'lavender' : 'coral'}>{level.charAt(0).toUpperCase() + level.slice(1)}</Badge>
            <h3 className="font-bold text-sm">Exercises</h3>
          </div>
          <div className="space-y-2">
            {topic.exercises[level].map((ex, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="w-6 h-6 rounded-full bg-card flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</div>
                <p className="text-sm text-muted-foreground">{ex}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectView({ topic }) {
  return (
    <div className="space-y-4">
      <div className="glass-card rounded-2xl shadow-float p-6">
        <div className="flex items-center gap-2 mb-3">
          <Star className="w-5 h-5 text-amber" />
          <h3 className="font-bold text-lg">Mini Project</h3>
        </div>
        <p className="text-muted-foreground mb-4">{topic.miniProject}</p>
        <div className="p-4 rounded-xl bg-amber/5 border border-amber/20">
          <div className="text-sm font-semibold text-amber mb-1">🎯 Goal</div>
          <p className="text-sm text-muted-foreground">Build this project to earn +100 XP and +50 coins!</p>
        </div>
      </div>
      <div className="glass-card rounded-2xl shadow-float p-6">
        <div className="flex items-center gap-2 mb-3">
          <Briefcase className="w-5 h-5 text-lavender" />
          <h3 className="font-bold text-lg">Company Task</h3>
        </div>
        <p className="text-muted-foreground mb-4">{topic.companyTask}</p>
        <div className="p-4 rounded-xl bg-lavender/5 border border-lavender/20">
          <div className="text-sm font-semibold text-lavender mb-1">💼 Industry Task</div>
          <p className="text-sm text-muted-foreground">Complete this to earn +300 XP and unlock the next topic!</p>
        </div>
      </div>
      <div className="bg-card rounded-2xl shadow-soft p-5">
        <h3 className="font-bold text-sm mb-3">Interview Questions</h3>
        <div className="space-y-2">
          {topic.interviewQuestions.map((q, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-muted/30">
              <div className="w-6 h-6 rounded-full bg-lavender/10 flex items-center justify-center text-xs shrink-0 mt-0.5">Q</div>
              <p className="text-sm text-muted-foreground">{q}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}