import React from 'react';
import { motion } from 'framer-motion';
import { Award, QrCode, ShieldCheck } from 'lucide-react';

export default function CertificatePreview() {
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
            Verified <span className="text-gradient-duotone">Certificates</span>
          </h2>
          <p className="mt-3 text-muted-foreground">Premium certificates with QR verification and unique IDs</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-float border-4 border-amber-400 p-8 lg:p-12 relative overflow-hidden">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-amber-500 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-amber-500 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-amber-500 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-amber-500 rounded-br-2xl" />

            <div className="text-center">
              <div className="text-3xl mb-2">🐍</div>
              <div className="text-sm font-bold text-amber-700 tracking-widest">PYVERSE ACADEMY</div>
              <div className="text-xs text-gray-500 mt-1">Certificate of Completion</div>

              <div className="my-6">
                <div className="text-xs text-gray-500 mb-1">This certifies that</div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-800" style={{ fontFamily: 'Caveat, cursive' }}>
                  Vaibhav Sonwane
                </div>
                <div className="text-xs text-gray-500 mt-2 mb-1">has successfully completed</div>
                <div className="text-lg font-semibold text-gray-700">Python Basics to Advanced</div>
              </div>

              <div className="flex items-end justify-between mt-8 px-4">
                <div className="text-left">
                  <div className="text-xs text-gray-500">Certificate ID</div>
                  <div className="text-sm font-mono font-bold text-gray-700">PYV-2026-001234</div>
                  <div className="text-xs text-gray-500 mt-2">Date</div>
                  <div className="text-sm font-medium text-gray-700">June 26, 2026</div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-xl bg-white border-2 border-gray-300 flex items-center justify-center mb-1">
                    <QrCode className="w-12 h-12 text-gray-700" />
                  </div>
                  <div className="text-xs text-gray-500">Scan to verify</div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-gray-500">Founder</div>
                  <div className="text-sm font-bold text-gray-700" style={{ fontFamily: 'Caveat, cursive' }}>Vaibhav Sonwane</div>
                  <div className="w-16 h-0.5 bg-gray-400 mt-1 ml-auto" />
                  <div className="text-xs text-gray-500 mt-1">CEO & Founder</div>
                </div>
              </div>

              {/* Gold seal */}
              <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center shadow-lg border-2 border-amber-200">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold glass-card shadow-soft hover:shadow-float transition-all">
              <ShieldCheck className="w-4 h-4 text-mint" /> Verify Certificate
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}