import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Briefcase, GraduationCap, Wrench, Printer } from 'lucide-react';
import { GlassCard, SectionTitle } from '@/components/ui/PyverseUI';
import { base44 } from '@/api/base44Client';

const AVATARS = ['🐍', '👨‍💻', '👩‍💻', '🧑‍🔬', '👨‍🎓', '👩‍🎓', '🚀', '⚡', '🎯', '🏆'];

export default function Resume() {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(null);
  const [form, setForm] = useState({
    fullName: '', title: 'Python Developer', email: '', phone: '', location: '',
    summary: 'Passionate Python developer with hands-on experience building applications, automation scripts, and data-driven solutions. Eager to contribute to impactful projects.',
    skills: ['Python', 'Flask', 'SQL', 'Git', 'Pandas'],
    experience: [{ company: '', role: '', duration: '', desc: '' }],
    education: [{ school: '', degree: '', duration: '' }],
    projects: [{ name: '', desc: '' }],
  });
  const [newSkill, setNewSkill] = useState('');

  useEffect(() => { load(); }, []);

  const load = async () => {
    try {
      const me = await base44.auth.me();
      setUser(me);
      setForm(f => ({ ...f, fullName: me.full_name || '', email: me.email || '' }));
      const p = await base44.entities.UserProgress.filter({ user_id: me.id });
      setProgress(p[0] || null);
    } catch (e) { console.error(e); }
  };

  const update = (field, val) => setForm(f => ({ ...f, [field]: val }));
  const updateArr = (field, i, key, val) => setForm(f => ({ ...f, [field]: f[field].map((item, j) => j === i ? { ...item, [key]: val } : item) }));
  const addArr = (field, empty) => setForm(f => ({ ...f, [field]: [...f[field], empty] }));
  const removeArr = (field, i) => setForm(f => ({ ...f, [field]: f[field].filter((_, j) => j !== i) }));
  const addSkill = () => { if (newSkill.trim()) { update('skills', [...form.skills, newSkill.trim()]); setNewSkill(''); } };
  const removeSkill = (i) => update('skills', form.skills.filter((_, j) => j !== i));

  const print = () => window.print();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between print:hidden">
        <div>
          <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight">Resume Builder</h1>
          <p className="text-muted-foreground mt-1">Build a professional resume and download as PDF</p>
        </div>
        <button onClick={print} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold gradient-duotone shadow-soft hover:shadow-glow-mint transition-all">
          <Printer className="w-4 h-4" /> Download PDF
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Form */}
        <div className="space-y-4 print:hidden">
          <GlassCard className="p-5">
            <SectionTitle title="Personal Info" />
            <div className="grid grid-cols-2 gap-3">
              <input value={form.fullName} onChange={e => update('fullName', e.target.value)} placeholder="Full Name" className="px-3 py-2 rounded-lg bg-card border border-border/50 text-sm focus:border-mint focus:outline-none" />
              <input value={form.title} onChange={e => update('title', e.target.value)} placeholder="Job Title" className="px-3 py-2 rounded-lg bg-card border border-border/50 text-sm focus:border-mint focus:outline-none" />
              <input value={form.email} onChange={e => update('email', e.target.value)} placeholder="Email" className="px-3 py-2 rounded-lg bg-card border border-border/50 text-sm focus:border-mint focus:outline-none" />
              <input value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="Phone" className="px-3 py-2 rounded-lg bg-card border border-border/50 text-sm focus:border-mint focus:outline-none" />
              <input value={form.location} onChange={e => update('location', e.target.value)} placeholder="Location" className="px-3 py-2 rounded-lg bg-card border border-border/50 text-sm focus:border-mint focus:outline-none col-span-2" />
            </div>
            <textarea value={form.summary} onChange={e => update('summary', e.target.value)} placeholder="Professional Summary" rows={3} className="w-full mt-3 px-3 py-2 rounded-lg bg-card border border-border/50 text-sm focus:border-mint focus:outline-none resize-none" />
          </GlassCard>

          <GlassCard className="p-5">
            <SectionTitle title="Skills" />
            <div className="flex gap-2 mb-3">
              <input value={newSkill} onChange={e => setNewSkill(e.target.value)} onKeyDown={e => e.key === 'Enter' && addSkill()} placeholder="Add a skill" className="flex-1 px-3 py-2 rounded-lg bg-card border border-border/50 text-sm focus:border-mint focus:outline-none" />
              <button onClick={addSkill} className="px-3 rounded-lg gradient-duotone text-white"><Plus className="w-4 h-4" /></button>
            </div>
            <div className="flex flex-wrap gap-2">
              {form.skills.map((s, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-mint/10 text-mint text-xs font-medium">
                  {s} <button onClick={() => removeSkill(i)}><Trash2 className="w-3 h-3" /></button>
                </span>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold flex items-center gap-2"><Briefcase className="w-4 h-4 text-mint" /> Experience</h3>
              <button onClick={() => addArr('experience', { company: '', role: '', duration: '', desc: '' })} className="text-mint"><Plus className="w-4 h-4" /></button>
            </div>
            <div className="space-y-3">
              {form.experience.map((exp, i) => (
                <div key={i} className="p-3 rounded-xl bg-muted/30 space-y-2 relative">
                  {form.experience.length > 1 && <button onClick={() => removeArr('experience', i)} className="absolute top-2 right-2 text-coral"><Trash2 className="w-3.5 h-3.5" /></button>}
                  <div className="grid grid-cols-2 gap-2">
                    <input value={exp.role} onChange={e => updateArr('experience', i, 'role', e.target.value)} placeholder="Role" className="px-2 py-1.5 rounded-lg bg-card border border-border/50 text-xs focus:border-mint focus:outline-none" />
                    <input value={exp.company} onChange={e => updateArr('experience', i, 'company', e.target.value)} placeholder="Company" className="px-2 py-1.5 rounded-lg bg-card border border-border/50 text-xs focus:border-mint focus:outline-none" />
                  </div>
                  <input value={exp.duration} onChange={e => updateArr('experience', i, 'duration', e.target.value)} placeholder="Duration (e.g. 2023 - Present)" className="w-full px-2 py-1.5 rounded-lg bg-card border border-border/50 text-xs focus:border-mint focus:outline-none" />
                  <textarea value={exp.desc} onChange={e => updateArr('experience', i, 'desc', e.target.value)} placeholder="Description" rows={2} className="w-full px-2 py-1.5 rounded-lg bg-card border border-border/50 text-xs focus:border-mint focus:outline-none resize-none" />
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold flex items-center gap-2"><GraduationCap className="w-4 h-4 text-lavender" /> Education</h3>
              <button onClick={() => addArr('education', { school: '', degree: '', duration: '' })} className="text-mint"><Plus className="w-4 h-4" /></button>
            </div>
            <div className="space-y-3">
              {form.education.map((edu, i) => (
                <div key={i} className="p-3 rounded-xl bg-muted/30 space-y-2 relative">
                  {form.education.length > 1 && <button onClick={() => removeArr('education', i)} className="absolute top-2 right-2 text-coral"><Trash2 className="w-3.5 h-3.5" /></button>}
                  <input value={edu.degree} onChange={e => updateArr('education', i, 'degree', e.target.value)} placeholder="Degree" className="w-full px-2 py-1.5 rounded-lg bg-card border border-border/50 text-xs focus:border-mint focus:outline-none" />
                  <input value={edu.school} onChange={e => updateArr('education', i, 'school', e.target.value)} placeholder="School / University" className="w-full px-2 py-1.5 rounded-lg bg-card border border-border/50 text-xs focus:border-mint focus:outline-none" />
                  <input value={edu.duration} onChange={e => updateArr('education', i, 'duration', e.target.value)} placeholder="Duration" className="w-full px-2 py-1.5 rounded-lg bg-card border border-border/50 text-xs focus:border-mint focus:outline-none" />
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold flex items-center gap-2"><Wrench className="w-4 h-4 text-amber" /> Projects</h3>
              <button onClick={() => addArr('projects', { name: '', desc: '' })} className="text-mint"><Plus className="w-4 h-4" /></button>
            </div>
            <div className="space-y-3">
              {form.projects.map((proj, i) => (
                <div key={i} className="p-3 rounded-xl bg-muted/30 space-y-2 relative">
                  {form.projects.length > 1 && <button onClick={() => removeArr('projects', i)} className="absolute top-2 right-2 text-coral"><Trash2 className="w-3.5 h-3.5" /></button>}
                  <input value={proj.name} onChange={e => updateArr('projects', i, 'name', e.target.value)} placeholder="Project Name" className="w-full px-2 py-1.5 rounded-lg bg-card border border-border/50 text-xs focus:border-mint focus:outline-none" />
                  <textarea value={proj.desc} onChange={e => updateArr('projects', i, 'desc', e.target.value)} placeholder="Description" rows={2} className="w-full px-2 py-1.5 rounded-lg bg-card border border-border/50 text-xs focus:border-mint focus:outline-none resize-none" />
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Live Preview */}
        <div className="lg:sticky lg:top-4 self-start">
          <div className="bg-white text-black rounded-2xl shadow-float p-8 print:shadow-none print:rounded-none print:p-8 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin" id="resume-preview">
            <div className="border-b-2 border-mint pb-4 mb-4">
              <h1 className="text-2xl font-bold text-gray-900">{form.fullName || 'Your Name'}</h1>
              <p className="text-mint font-semibold text-sm">{form.title || 'Python Developer'}</p>
              <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-600">
                {form.email && <span>{form.email}</span>}
                {form.phone && <span>{form.phone}</span>}
                {form.location && <span>{form.location}</span>}
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-sm font-bold uppercase tracking-wide text-gray-700 mb-1">Summary</h2>
              <p className="text-xs text-gray-600 leading-relaxed">{form.summary}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-sm font-bold uppercase tracking-wide text-gray-700 mb-2">Skills</h2>
              <div className="flex flex-wrap gap-1.5">
                {form.skills.map((s, i) => <span key={i} className="px-2 py-0.5 rounded bg-mint/20 text-mint text-xs font-medium">{s}</span>)}
              </div>
            </div>
            {form.experience.some(e => e.role || e.company) && (
              <div className="mb-4">
                <h2 className="text-sm font-bold uppercase tracking-wide text-gray-700 mb-2">Experience</h2>
                {form.experience.filter(e => e.role || e.company).map((exp, i) => (
                  <div key={i} className="mb-3">
                    <div className="flex justify-between">
                      <span className="text-xs font-bold text-gray-900">{exp.role}{exp.company && ` · ${exp.company}`}</span>
                      <span className="text-xs text-gray-500">{exp.duration}</span>
                    </div>
                    {exp.desc && <p className="text-xs text-gray-600 mt-1">{exp.desc}</p>}
                  </div>
                ))}
              </div>
            )}
            {form.education.some(e => e.degree || e.school) && (
              <div className="mb-4">
                <h2 className="text-sm font-bold uppercase tracking-wide text-gray-700 mb-2">Education</h2>
                {form.education.filter(e => e.degree || e.school).map((edu, i) => (
                  <div key={i} className="mb-2">
                    <div className="flex justify-between">
                      <span className="text-xs font-bold text-gray-900">{edu.degree}{edu.school && ` · ${edu.school}`}</span>
                      <span className="text-xs text-gray-500">{edu.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {form.projects.some(p => p.name) && (
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wide text-gray-700 mb-2">Projects</h2>
                {form.projects.filter(p => p.name).map((p, i) => (
                  <div key={i} className="mb-2">
                    <span className="text-xs font-bold text-gray-900">{p.name}</span>
                    {p.desc && <p className="text-xs text-gray-600 mt-0.5">{p.desc}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}