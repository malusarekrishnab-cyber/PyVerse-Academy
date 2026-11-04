import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StickyNote, Download, BookOpen } from 'lucide-react';

export default function NotesPreview() {
  return (
    <section className="py-20 px-4 lg:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
            <span className="text-gradient-duotone">Handwritten</span> Notes
          </h2>
          <p className="mt-3 text-muted-foreground">Beautiful notebook-style notes that make learning stick</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Notebook preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="notebook-paper rounded-2xl shadow-float p-8 relative overflow-hidden"
            style={{ minHeight: '400px' }}
          >
            {/* Margin line */}
            <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-lavender/20" />

            <div className="ml-8">
              <div className="flex items-center justify-between mb-4">
                <div className="handwriting text-2xl font-bold text-[#1a1a2e]">Python Variables 📦</div>
                <div className="handwriting text-sm text-gray-500">Date: 26/06/2026</div>
              </div>

              <div className="handwriting text-lg text-[#1e3a8a] mb-3">
                A variable is a <span className="bg-yellow-200 px-1">named container</span> that stores a value.
              </div>

              <div className="handwriting text-base text-[#1a1a2e] mb-2">
                <span className="text-red-500 font-bold">→</span> name = "Alice"
              </div>
              <div className="handwriting text-base text-[#1a1a2e] mb-2">
                <span className="text-red-500 font-bold">→</span> age = 25
              </div>
              <div className="handwriting text-base text-[#1a1a2e] mb-4">
                <span className="text-red-500 font-bold">→</span> print(name, age)
              </div>

              {/* Sticky note */}
              <div className="absolute bottom-6 right-6 w-40 bg-amber-200 p-3 rounded shadow-lg rotate-3">
                <div className="handwriting text-sm text-[#1a1a2e] font-bold">💡 Memory Trick</div>
                <div className="handwriting text-xs text-[#1a1a2e] mt-1">
                  Variable = Value + Label — a box with a name tag!
                </div>
              </div>

              {/* Flowchart box */}
              <div className="mt-4 inline-block border-2 border-[#1e3a8a] rounded-lg p-3 bg-white/50">
                <div className="handwriting text-sm text-[#1a1a2e] font-bold mb-1">📋 Rules:</div>
                <div className="handwriting text-xs text-[#1a1a2e]">✓ Start with letter/_</div>
                <div className="handwriting text-xs text-[#1a1a2e]">✓ No spaces</div>
                <div className="handwriting text-xs text-[#1a1a2e]">✓ Case-sensitive</div>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              { icon: '📓', title: 'Notebook Style', desc: 'Blue ink, highlighted text, margin lines, and page numbers — just like real classroom notes.' },
              { icon: '🎨', title: 'Colorful Diagrams', desc: 'Flowcharts, mind maps, and visual diagrams that make complex concepts easy to understand.' },
              { icon: '💡', title: 'Memory Tricks', desc: 'Sticky notes with mnemonics and memory tricks to help you remember everything.' },
              { icon: '📱', title: 'Smart Features', desc: 'Bookmark, highlight, add personal notes, search, zoom, and read in dark mode.' },
              { icon: '📥', title: 'Download & Print', desc: 'Download as PDF or image, print for offline reading, or use revision mode.' },
              { icon: '🔄', title: 'Flashcards', desc: 'Flip-card system with bookmark and daily revision for active recall.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-card shadow-soft hover:shadow-float transition-all">
                <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center text-xl shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}

            <Link
              to="/notes"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold gradient-duotone shadow-soft hover:shadow-glow-mint transition-all"
            >
              <BookOpen className="w-4 h-4" /> View Notes
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}