import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const COMPARISON = [
  { feature: 'Interactive Code Editor', pyverse: true, duolingo: false, monkeytype: false, leetcode: true, freecodecamp: true },
  { feature: 'Python Typing Game', pyverse: true, duolingo: false, monkeytype: true, leetcode: false, freecodecamp: false },
  { feature: 'Handwritten Notes', pyverse: true, duolingo: false, monkeytype: false, leetcode: false, freecodecamp: false },
  { feature: 'Real Company Projects', pyverse: true, duolingo: false, monkeytype: false, leetcode: true, freecodecamp: false },
  { feature: 'AI Mentor', pyverse: true, duolingo: true, monkeytype: false, leetcode: false, freecodecamp: false },
  { feature: 'Verified Certificates', pyverse: true, duolingo: false, monkeytype: false, leetcode: false, freecodecamp: true },
  { feature: 'Resume Builder', pyverse: true, duolingo: false, monkeytype: false, leetcode: false, freecodecamp: false },
  { feature: 'Career Hub & Jobs', pyverse: true, duolingo: false, monkeytype: false, leetcode: false, freecodecamp: false },
  { feature: 'Gamification (XP, Coins, Levels)', pyverse: true, duolingo: true, monkeytype: true, leetcode: true, freecodecamp: false },
  { feature: 'Debug Arena', pyverse: true, duolingo: false, monkeytype: false, leetcode: false, freecodecamp: false },
  { feature: 'Mock Interviews', pyverse: true, duolingo: false, monkeytype: false, leetcode: true, freecodecamp: false },
  { feature: 'Beginner to Job-Ready', pyverse: true, duolingo: false, monkeytype: false, leetcode: false, freecodecamp: true },
];

const PLATFORMS = ['PyVerse', 'Duolingo', 'Monkeytype', 'LeetCode', 'freeCodeCamp'];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 lg:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
            Why Choose <span className="text-gradient-duotone">PyVerse?</span>
          </h2>
          <p className="mt-3 text-muted-foreground">See how we compare to other learning platforms</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl shadow-float overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left p-4 text-sm font-semibold">Feature</th>
                  {PLATFORMS.map((p, i) => (
                    <th key={p} className={`p-4 text-center text-sm font-semibold ${i === 0 ? 'gradient-duotone text-white' : ''}`}>
                      {p}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4 text-sm font-medium">{row.feature}</td>
                    {PLATFORMS.map((p, j) => {
                      const val = j === 0 ? row.pyverse : j === 1 ? row.duolingo : j === 2 ? row.monkeytype : j === 3 ? row.leetcode : row.freecodecamp;
                      return (
                        <td key={p} className={`p-4 text-center ${j === 0 ? 'bg-mint/5' : ''}`}>
                          {val ? (
                            <div className="inline-flex w-7 h-7 rounded-full bg-mint/20 items-center justify-center">
                              <Check className="w-4 h-4 text-mint" />
                            </div>
                          ) : (
                            <div className="inline-flex w-7 h-7 rounded-full bg-muted items-center justify-center">
                              <X className="w-4 h-4 text-muted-foreground" />
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}