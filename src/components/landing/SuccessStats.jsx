import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/PyverseUI';

const STATS = [
  { value: 50000, suffix: '+', label: 'Students', icon: '👨‍🎓' },
  { value: 125000, suffix: '+', label: 'Lessons Completed', icon: '📚' },
  { value: 8500, suffix: '+', label: 'Certificates Issued', icon: '📜' },
  { value: 15000, suffix: '+', label: 'Projects Built', icon: '🏗️' },
  { value: 480000, suffix: '+', label: 'Hours Learned', icon: '⏰' },
];

export default function SuccessStats() {
  return (
    <section className="py-20 px-4 lg:px-6 bg-channel/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
            Student <span className="text-gradient-duotone">Success</span>
          </h2>
          <p className="mt-3 text-muted-foreground">Join thousands of students who transformed their careers</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-soft text-center hover:shadow-float transition-all"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl lg:text-3xl font-extrabold text-gradient-duotone">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}