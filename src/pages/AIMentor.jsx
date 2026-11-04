import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, User, Trash2, Target, Lightbulb } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import ReactMarkdown from 'react-markdown';
import ExercisePicker from '@/components/mentor/ExercisePicker';
import CodeEditor from '@/components/mentor/CodeEditor';

const SUGGESTIONS = [
  "Give me a hint to get started",
  "What's wrong with my approach?",
  "Explain the concept behind this problem",
  "Walk me through the logic step by step",
];

const SYSTEM_PROMPT = `You are PyVerse AI Mentor, a Socratic Python teaching assistant on the PyVerse Academy platform. Your role is to GUIDE students, not give direct answers. Follow these rules strictly:
1. Ask guiding questions that lead the student to discover the answer themselves.
2. Give hints, not full solutions, unless the student has tried multiple times and is stuck.
3. If the student has shared code, review it: point out what's good, what could be improved, and where bugs might be — but let them fix it.
4. Encourage and motivate the student.
5. Use simple language and real-world analogies.
6. When showing code, keep examples minimal and well-commented.
7. Format responses with markdown for readability.
Be friendly, patient, and pedagogical.`;

function buildContextPrompt(exercise, code) {
  let ctx = '';
  if (exercise) {
    ctx += `\n\n=== CURRENT EXERCISE ===\nTitle: ${exercise.title}\nDifficulty: ${exercise.difficulty}\n`;
    if (exercise.topic) ctx += `Topic: ${exercise.topic}\n`;
    if (exercise.problemStatement) ctx += `Problem: ${exercise.problemStatement}\n`;
    if (exercise.starterCode) ctx += `Starter code:\n\`\`\`python\n${exercise.starterCode}\n\`\`\`\n`;
    if (exercise.hints && exercise.hints.length) ctx += `Available hints (reveal gradually): ${exercise.hints.join(' | ')}\n`;
    ctx += `=== END EXERCISE ===\n`;
  }
  if (code && code.trim()) {
    ctx += `\n=== STUDENT'S CURRENT CODE ===\n\`\`\`python\n${code}\n\`\`\`\n`;
  }
  return ctx;
}

export default function AIMentor() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [exercise, setExercise] = useState(null);
  const [code, setCode] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    setMessages([{ role: 'assistant', content: "Hi! I'm your PyVerse AI Mentor 🐍\n\nI give **hints and guidance**, not direct answers — so you learn by discovery. Pick an exercise from the left, paste your code, and ask me anything!\n\nWhat would you like to work on today?" }]);
  }, []);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading]);

  const send = async (text) => {
    const content = text || input;
    if (!content.trim() || loading) return;
    const userMsg = { role: 'user', content };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    try {
      const ctx = buildContextPrompt(exercise, code);
      const history = newMessages.map(m => `${m.role === 'user' ? 'Student' : 'Mentor'}: ${m.content}`).join('\n\n');
      const res = await base44.integrations.Core.InvokeLLM({
        prompt: `${SYSTEM_PROMPT}${ctx}\n\nConversation so far:\n${history}\n\nMentor:`,
        response_json_schema: { type: 'object', properties: { reply: { type: 'string' } }, required: ['reply'] },
      });
      setMessages(prev => [...prev, { role: 'assistant', content: res.reply || res }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I had trouble responding. Please try again! 🙏" }]);
    } finally { setLoading(false); }
  };

  const sendCodeForReview = () => {
    if (!code.trim() || loading) return;
    send("Here's my code so far — can you review it and give me hints on what to fix or improve?");
  };

  const reset = () => {
    setMessages([{ role: 'assistant', content: "Fresh start! What would you like to learn? 🐍" }]);
  };

  return (
    <div className="space-y-4 h-[calc(100vh-8rem)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl gradient-duotone flex items-center justify-center shadow-glow-mint">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight">AI Mentor</h1>
            <p className="text-xs text-muted-foreground">Personalized hints & guidance while you code</p>
          </div>
        </div>
        <button onClick={reset} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm bg-card shadow-soft hover:shadow-float transition-all">
          <Trash2 className="w-4 h-4" /> Clear
        </button>
      </div>

      {/* Active context banner */}
      {exercise && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 p-3 rounded-xl bg-mint/10 border border-mint/30"
        >
          <Target className="w-4 h-4 text-mint shrink-0" />
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold truncate">{exercise.title}</div>
            <div className="text-xs text-muted-foreground truncate">
              {exercise.difficulty}{exercise.topic ? ` · ${exercise.topic}` : ''} · hints are context-aware
            </div>
          </div>
          <button onClick={() => setExercise(null)} className="text-xs text-muted-foreground hover:text-foreground px-2 py-1 rounded-lg hover:bg-muted transition-colors">
            Clear
          </button>
        </motion.div>
      )}

      {/* Body: two columns on desktop */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 min-h-0">
        {/* Left: picker + code editor */}
        <div className="hidden lg:flex flex-col gap-3 min-h-0">
          <div className="glass-card rounded-2xl shadow-soft p-3 flex-1 min-h-0">
            <ExercisePicker selected={exercise} onSelect={setExercise} />
          </div>
          <div className="glass-card rounded-2xl shadow-soft p-3 h-56 shrink-0">
            <CodeEditor code={code} setCode={setCode} onSendCode={sendCodeForReview} disabled={loading} />
          </div>
        </div>

        {/* Right: chat */}
        <div className="glass-card rounded-2xl shadow-soft p-4 flex flex-col min-h-0">
          {/* Mobile picker toggle */}
          <div className="lg:hidden mb-2">
            <details className="glass-card rounded-xl p-2">
              <summary className="text-xs font-semibold cursor-pointer flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-mint" /> {exercise ? exercise.title : 'Pick an exercise'}
              </summary>
              <div className="h-64 mt-2">
                <ExercisePicker selected={exercise} onSelect={setExercise} />
              </div>
              <div className="h-40 mt-2">
                <CodeEditor code={code} setCode={setCode} onSendCode={sendCodeForReview} disabled={loading} />
              </div>
            </details>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto scrollbar-thin space-y-4 pb-2">
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-9 h-9 rounded-xl gradient-duotone flex items-center justify-center shrink-0">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <div className={`max-w-[80%] rounded-2xl p-4 ${msg.role === 'user' ? 'gradient-duotone text-white' : 'bg-card border border-border/50'}`}>
                    {msg.role === 'user' ? (
                      <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                    ) : (
                      <ReactMarkdown className="text-sm prose prose-sm dark:prose-invert max-w-none prose-p:my-1 prose-pre:bg-[#0d1117] prose-pre:text-[#e6edf3] prose-code:before:content-none prose-code:after:content-none">{msg.content}</ReactMarkdown>
                    )}
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-9 h-9 rounded-xl bg-card shadow-soft flex items-center justify-center shrink-0">
                      <User className="w-5 h-5 text-muted-foreground" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            {loading && (
              <div className="flex gap-3 justify-start">
                <div className="w-9 h-9 rounded-xl gradient-duotone flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-card border border-border/50 rounded-2xl p-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-mint animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-mint animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-mint animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
          </div>

          {/* Suggestions */}
          {messages.length <= 1 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {SUGGESTIONS.map((s, i) => (
                <button
                  key={i}
                  onClick={() => send(s)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-card border border-border/50 hover:border-mint/40 hover:shadow-soft transition-all"
                >
                  <Lightbulb className="w-3 h-3 text-amber" /> {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder={exercise ? "Ask for a hint on this exercise..." : "Ask your mentor anything..."}
              className="flex-1 px-4 py-3 rounded-xl bg-card border border-border/50 focus:border-mint focus:outline-none text-sm"
            />
            <button
              onClick={() => send()}
              disabled={loading || !input.trim()}
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl gradient-duotone text-white shadow-soft hover:shadow-glow-mint transition-all disabled:opacity-40"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}