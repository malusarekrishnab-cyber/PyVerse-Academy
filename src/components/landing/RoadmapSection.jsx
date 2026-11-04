import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ROADMAP_STEPS } from '@/data/curriculum';
import { Check, Lock, ArrowDown } from 'lucide-react';

export default function RoadmapSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 px-4 lg:px-6 bg-channel/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
            Your <span className="text-gradient-duotone">Learning Roadmap</span>
          </h2>
          <p className="mt-3 text-muted-foreground">From Absolute Beginner to Job-Ready Python Developer</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          {ROADMAP_STEPS.map((step, i) => {
            const isLeft = i % 2 === 0;
            const isComplete = i < 3;
            const isActive = i === activeStep;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center gap-6 mb-6 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                onClick={() => setActiveStep(i)}
              >
                {/* Node */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all cursor-pointer ${
                    isComplete ? 'gradient-mint text-white shadow-glow-mint' :
                    isActive ? 'gradient-duotone text-white shadow-glow-lavender scale-110' :
                    'bg-card border-2 border-border text-muted-foreground'
                  }`}>
                    {isComplete ? <Check className="w-5 h-5" /> : i + 1}
                  </div>
                </div>

                {/* Card */}
                <div className={`ml-16 lg:ml-0 flex-1 lg:w-5/12 ${isLeft ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className={`bg-card rounded-2xl p-4 shadow-soft border transition-all cursor-pointer ${
                    isActive ? 'border-mint shadow-float' : 'border-border/50 hover:shadow-float'
                  }`}>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-base">{step}</h3>
                      {isComplete ? (
                        <span className="text-xs font-medium text-mint bg-mint/10 px-2 py-1 rounded-full">Completed</span>
                      ) : i === 3 ? (
                        <span className="text-xs font-medium text-amber bg-amber/10 px-2 py-1 rounded-full">In Progress</span>
                      ) : (
                        <Lock className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-sm text-muted-foreground mt-2"
                      >
                        {getStepDescription(step)}
                      </motion.p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function getStepDescription(step) {
  const descs = {
    "Python Basics": "Learn variables, data types, strings, lists, loops, and functions — the foundation of Python.",
    "Intermediate Python": "Master OOP, exception handling, file I/O, modules, and packages.",
    "Advanced Python": "Decorators, generators, regex, JSON, CSV, and advanced Python concepts.",
    "NumPy": "Scientific computing with arrays, vectorized operations, and broadcasting.",
    "Pandas": "Data analysis with DataFrames, Series, and powerful data manipulation.",
    "SQL": "Database operations with SQLite and SQL queries from Python.",
    "Flask": "Build web applications and REST APIs with Flask framework.",
    "FastAPI": "Create high-performance, type-safe APIs with FastAPI.",
    "Projects": "Build real-world projects for your portfolio — from mini to enterprise level.",
    "Interview": "Prepare for technical interviews with mock interviews and coding challenges.",
    "Job Ready": "Optimize your resume, portfolio, and LinkedIn. Apply for jobs with confidence!"
  };
  return descs[step] || "Continue your Python journey.";
}