import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Download, Share2, CheckCircle, Filter } from 'lucide-react';
import { GlassCard, Badge } from '@/components/ui/PyverseUI';
import { base44 } from '@/api/base44Client';

const CERT_TYPES = ['All', 'Topic', 'Module', 'Typing', 'Project', 'Hackathon', 'Course Completion', 'Company Challenge', 'Interview Ready'];
const borderStyles = {
  Gold: 'from-amber-400 to-yellow-600',
  Silver: 'from-slate-300 to-slate-500',
  Bronze: 'from-orange-400 to-amber-700',
};

export default function Certificates() {
  const [certs, setCerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => { load(); }, []);

  const load = async () => {
    try {
      const me = await base44.auth.me();
      const res = await base44.entities.Certificate.filter({ user_id: me.id }, '-completion_date', 100);
      setCerts(res);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  };

  const filtered = filter === 'All' ? certs : certs.filter(c => c.certificate_type === filter);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-mint/20 border-t-mint rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight">My Certificates</h1>
        <p className="text-muted-foreground mt-1">Showcase your achievements and share with employers</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <GlassCard className="p-5 text-center">
          <div className="text-3xl font-bold text-mint">{certs.length}</div>
          <div className="text-sm text-muted-foreground">Total Certificates</div>
        </GlassCard>
        <GlassCard className="p-5 text-center">
          <div className="text-3xl font-bold text-lavender">{certs.filter(c => c.border_style === 'Gold').length}</div>
          <div className="text-sm text-muted-foreground">Gold Tier</div>
        </GlassCard>
        <GlassCard className="p-5 text-center">
          <div className="text-3xl font-bold text-amber">{new Set(certs.map(c => c.certificate_type)).size}</div>
          <div className="text-sm text-muted-foreground">Categories</div>
        </GlassCard>
        <GlassCard className="p-5 text-center">
          <div className="text-3xl font-bold text-coral">{certs.filter(c => c.verified).length}</div>
          <div className="text-sm text-muted-foreground">Verified</div>
        </GlassCard>
      </div>

      {/* Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
        {CERT_TYPES.map(t => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              filter === t ? 'gradient-duotone text-white shadow-soft' : 'bg-card shadow-soft hover:shadow-float'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Gallery */}
      {filtered.length === 0 ? (
        <GlassCard className="p-16 text-center">
          <Award className="w-14 h-14 mx-auto text-muted-foreground/40 mb-4" />
          <h3 className="text-lg font-semibold mb-1">No certificates yet</h3>
          <p className="text-muted-foreground">Complete modules, projects, and challenges to earn certificates!</p>
        </GlassCard>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((cert, i) => {
            const border = borderStyles[cert.border_style] || borderStyles.Gold;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="relative bg-card rounded-2xl shadow-soft hover:shadow-float overflow-hidden border border-border/50 transition-all"
              >
                <div className={`relative h-48 bg-gradient-to-br ${border} p-1`}>
                  <div className="w-full h-full bg-card rounded-xl p-5 flex flex-col items-center justify-center text-center">
                    {cert.verified && (
                      <div className="absolute top-3 right-3">
                        <Badge color="mint" size="sm"><CheckCircle className="w-3 h-3" /> Verified</Badge>
                      </div>
                    )}
                    <Award className="w-10 h-10 text-amber mb-3" />
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Certificate of Achievement</div>
                    <div className="text-base font-bold mt-2 leading-tight">{cert.course_name}</div>
                    <div className="text-sm text-muted-foreground mt-1">{cert.student_name}</div>
                    {cert.grade && <div className="mt-2 text-sm font-semibold text-mint">Grade: {cert.grade}</div>}
                    {cert.completion_date && (
                      <div className="text-[10px] text-muted-foreground mt-2">{new Date(cert.completion_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    )}
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="min-w-0">
                    <div className="text-xs font-semibold truncate">{cert.certificate_type}</div>
                    <div className="text-[10px] text-muted-foreground font-mono truncate">{cert.certificate_id}</div>
                  </div>
                  <div className="flex gap-1.5 shrink-0">
                    <button className="w-9 h-9 rounded-lg bg-muted hover:bg-mint/10 hover:text-mint flex items-center justify-center transition-colors" title="Download">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="w-9 h-9 rounded-lg bg-muted hover:bg-lavender/10 hover:text-lavender flex items-center justify-center transition-colors" title="Share">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}