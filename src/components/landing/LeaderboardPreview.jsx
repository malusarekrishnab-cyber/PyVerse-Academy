import React from 'react';
import { motion } from 'framer-motion';
import { LEADERBOARD } from '@/data/curriculum';
import { Crown, Medal } from 'lucide-react';

export default function LeaderboardPreview() {
  const top = LEADERBOARD.slice(0, 5);
  return (
    <section className="py-20 px-4 lg:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
            Top <span className="text-gradient-duotone">Students</span>
          </h2>
          <p className="mt-3 text-muted-foreground">Compete with the best Python learners worldwide</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl shadow-float overflow-hidden"
        >
          {top.map((student, i) => (
            <motion.div
              key={student.rank}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center gap-4 p-4 ${i < top.length - 1 ? 'border-b border-border/30' : ''} ${
                i === 0 ? 'bg-amber/5' : ''
              } hover:bg-muted/30 transition-colors`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                i === 0 ? 'bg-gradient-to-br from-amber-300 to-amber-500 text-white' :
                i === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-400 text-white' :
                i === 2 ? 'bg-gradient-to-br from-amber-600 to-amber-800 text-white' :
                'bg-muted text-muted-foreground'
              }`}>
                {i === 0 ? <Crown className="w-5 h-5" /> : i < 3 ? <Medal className="w-5 h-5" /> : student.rank}
              </div>

              <div className="w-11 h-11 rounded-xl gradient-duotone flex items-center justify-center text-xl shrink-0">
                {student.avatar}
              </div>

              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm truncate">{student.name}</div>
                <div className="text-xs text-muted-foreground flex items-center gap-2">
                  <span>{student.country}</span>
                  <span>·</span>
                  <span>Level {student.level}</span>
                  <span>·</span>
                  <span>{student.wpm} WPM</span>
                </div>
              </div>

              <div className="text-right shrink-0">
                <div className="font-bold text-sm text-mint">{student.xp.toLocaleString()} XP</div>
                <div className="text-xs text-muted-foreground">{student.accuracy}% acc</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}