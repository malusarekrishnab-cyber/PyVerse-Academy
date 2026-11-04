import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, UserPlus, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 px-4 lg:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-10 lg:p-16 text-center"
        >
          <div className="absolute inset-0 gradient-duotone animate-gradient" style={{ backgroundSize: '200% 200%' }} />
          <div className="absolute inset-0 bg-black/10" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" /> Start Your Journey Today
              </div>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
                Ready to Become a<br />Python Developer?
              </h2>
              <p className="mt-4 text-white/80 max-w-xl mx-auto">
                Join 50,000+ students who are learning Python the right way. Start free, upgrade when you're ready.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-gray-900 font-bold shadow-lg hover:scale-105 transition-transform"
                >
                  <Rocket className="w-5 h-5" /> Start Learning
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/20 backdrop-blur-sm text-white font-bold border border-white/30 hover:bg-white/30 transition-all"
                >
                  <UserPlus className="w-5 h-5" /> Create Account
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}