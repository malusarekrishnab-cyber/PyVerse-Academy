import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { StickyNote, ChevronRight, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/PyverseUI';
import { MODULES } from '@/data/curriculum';

export default function Notes() {
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const notes = selectedTopic?.notes;

  if (selectedTopic && notes) {
    return (
      <div className="space-y-4 max-w-4xl mx-auto">
        <button onClick={() => setSelectedTopic(null)} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-4 h-4" /> Back to {selectedModule.title}
        </button>
        <div className="flex items-center gap-2">
          <StickyNote className="w-6 h-6 text-lavender" />
          <h1 className="text-2xl font-extrabold tracking-tight">{selectedTopic.title}</h1>
        </div>

        <div className="notebook-paper rounded-2xl shadow-float p-8 lg:p-12 min-h-[500px]">
          <div className="handwriting text-2xl font-bold mb-4 text-lavender">{selectedTopic.title}</div>

          <div className="handwriting space-y-5 text-lg leading-relaxed text-ink dark:text-foreground">
            <div>
              <span className="font-bold text-mint">Definition: </span>
              {notes.definition}
            </div>
            <div>
              <span className="font-bold text-lavender">Why we use it: </span>
              {notes.whyWeUse}
            </div>
            {notes.syntax && notes.syntax !== 'N/A — conceptual topic' && (
              <div>
                <span className="font-bold text-amber">Syntax: </span>
                {notes.syntax}
              </div>
            )}
            {notes.rules?.length > 0 && (
              <div>
                <div className="font-bold text-coral mb-1">Rules:</div>
                <ul className="list-disc list-inside space-y-1">
                  {notes.rules.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
              </div>
            )}
            {notes.importantPoints?.length > 0 && (
              <div>
                <div className="font-bold text-mint mb-1">Important Points:</div>
                <ul className="list-disc list-inside space-y-1">
                  {notes.importantPoints.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            )}
            <div className="bg-amber/10 rounded-xl p-4 border-l-4 border-amber">
              <span className="font-bold text-amber">Real Life Example: </span>
              {notes.realLifeExample}
            </div>
            {notes.codeExample && (
              <div>
                <div className="font-bold text-lavender mb-2">Code Example:</div>
                <pre className="font-mono text-sm bg-[#1e1e2e] text-mint rounded-xl p-4 overflow-x-auto whitespace-pre">{notes.codeExample}</pre>
                {notes.outputExample && (
                  <div className="font-mono text-xs mt-2 text-muted-foreground">Output: {notes.outputExample}</div>
                )}
              </div>
            )}
            <div className="bg-lavender/10 rounded-xl p-4 border-l-4 border-lavender">
              <span className="font-bold text-lavender">Memory Trick: </span>
              {notes.memoryTrick}
            </div>
            <div>
              <span className="font-bold text-mint">Interview Tips: </span>
              {notes.interviewTips}
            </div>
            {notes.commonMistakes?.length > 0 && (
              <div>
                <div className="font-bold text-coral mb-1">Common Mistakes:</div>
                <ul className="list-disc list-inside space-y-1">
                  {notes.commonMistakes.map((m, i) => <li key={i}>{m}</li>)}
                </ul>
              </div>
            )}
            {notes.bestPractices?.length > 0 && (
              <div>
                <div className="font-bold text-mint mb-1">Best Practices:</div>
                <ul className="list-disc list-inside space-y-1">
                  {notes.bestPractices.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            )}
            <div className="bg-mint/10 rounded-xl p-4 border-l-4 border-mint">
              <span className="font-bold text-mint">Revision Summary: </span>
              {notes.revisionSummary}
            </div>
            <div>
              <span className="font-bold text-amber">Cheat Sheet: </span>
              <span className="font-mono text-sm">{notes.cheatSheet}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedModule) {
    return (
      <div className="space-y-4">
        <button onClick={() => setSelectedModule(null)} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-4 h-4" /> Back to modules
        </button>
        <div className="flex items-center gap-3">
          <span className="text-4xl">{selectedModule.icon}</span>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">{selectedModule.title}</h1>
            <p className="text-sm text-muted-foreground">{selectedModule.topics.length} topics</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {selectedModule.topics.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedTopic(t)}
              className="bg-card rounded-2xl p-5 shadow-soft hover:shadow-float border border-border/50 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-2">
                <StickyNote className="w-4 h-4 text-lavender" />
                <Badge color="gray" size="sm">{t.time}</Badge>
              </div>
              <h3 className="font-bold text-sm mb-2">{t.title}</h3>
              <div className="flex items-center gap-1 text-xs font-medium text-lavender">View Notes <ChevronRight className="w-3 h-3" /></div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight">Handwritten Notes</h1>
        <p className="text-muted-foreground mt-1">Beautiful, printable study notes for every topic</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {MODULES.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            whileHover={{ y: -4 }}
            onClick={() => setSelectedModule(m)}
            className="bg-card rounded-2xl p-5 shadow-soft hover:shadow-float border border-border/50 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-4xl">{m.icon}</span>
              <Badge color="mint" size="sm">{m.topics.length} notes</Badge>
            </div>
            <h3 className="font-bold text-sm mb-1">{m.title}</h3>
            <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{m.description}</p>
            <div className="flex items-center gap-1 text-xs font-medium text-lavender">Open Module <ChevronRight className="w-3 h-3" /></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}