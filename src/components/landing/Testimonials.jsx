import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/data/curriculum';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => { setAutoPlay(false); setIndex((index + 1) % TESTIMONIALS.length); };
  const prev = () => { setAutoPlay(false); setIndex((index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length); };

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
            What <span className="text-gradient-duotone">Students Say</span>
          </h2>
          <p className="mt-3 text-muted-foreground">Real stories from students who became Python developers</p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl shadow-float p-8 lg:p-10"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl gradient-duotone flex items-center justify-center text-4xl mb-4 shadow-glow-mint">
                    {TESTIMONIALS[index].avatar}
                  </div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: TESTIMONIALS[index].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber text-amber" />
                    ))}
                  </div>
                  <p className="text-lg lg:text-xl font-medium leading-relaxed max-w-3xl mb-6">
                    "{TESTIMONIALS[index].review}"
                  </p>
                  <div className="font-bold text-base">{TESTIMONIALS[index].name}</div>
                  <div className="text-sm text-muted-foreground">{TESTIMONIALS[index].role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="p-2.5 rounded-xl glass-card shadow-soft hover:shadow-float transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoPlay(false); setIndex(i); }}
                  className={`h-2 rounded-full transition-all ${i === index ? 'w-8 gradient-duotone' : 'w-2 bg-muted'}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2.5 rounded-xl glass-card shadow-soft hover:shadow-float transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}