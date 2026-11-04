import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/data/curriculum';
import { Badge } from '@/components/ui/PyverseUI';
import {
  Clock, Zap, Sparkles, ChevronRight, ArrowLeft, FolderGit2,
  CheckCircle, Target, Briefcase, Github, FileText, Star, Award
} from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'Mini', label: 'Mini Projects' },
  { id: 'Intermediate', label: 'Intermediate' },
  { id: 'Advanced', label: 'Advanced' },
  { id: 'Company', label: 'Company Level' },
];

const DIFFICULTY_COLORS = {
  Easy: 'mint', Beginner: 'mint', Intermediate: 'lavender', Advanced: 'amber', Professional: 'coral', Enterprise: 'coral'
};

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  if (selected) {
    return <ProjectDetail project={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight">Projects</h1>
        <p className="text-muted-foreground mt-1">Build real-world projects and create a portfolio that impresses employers</p>
      </div>

      {/* Category filter */}
      <div className="flex gap-2 overflow-x-auto scrollbar-thin pb-1">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
              filter === cat.id ? 'gradient-duotone text-white shadow-soft' : 'bg-card shadow-soft text-muted-foreground hover:text-foreground'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (i % 3) * 0.1 }}
            whileHover={{ y: -4 }}
            onClick={() => setSelected(project)}
            className="group bg-card rounded-2xl shadow-soft hover:shadow-float border border-border/50 overflow-hidden transition-all cursor-pointer"
          >
            <div className="h-32 gradient-duotone-soft flex items-center justify-center text-6xl">
              {project.coverImage}
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <Badge color={DIFFICULTY_COLORS[project.difficulty]}>{project.difficulty}</Badge>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" /> {project.estimatedTime}
                </span>
              </div>
              <h3 className="font-bold text-base mb-1 group-hover:text-mint transition-colors">{project.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{project.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  {project.technologies.slice(0, 3).map((tech, j) => (
                    <span key={j} className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground">{tech}</span>
                  ))}
                </div>
                <span className="text-xs font-medium text-mint">+{project.xpReward} XP</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProjectDetail({ project, onBack }) {
  const [submitted, setSubmitted] = useState(false);
  const [githubUrl, setGithubUrl] = useState('');

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Projects
      </button>

      {/* Project header */}
      <div className="glass-card rounded-2xl shadow-float p-6 lg:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-mint/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative flex flex-col lg:flex-row items-start gap-6">
          <div className="w-24 h-24 rounded-2xl gradient-duotone-soft flex items-center justify-center text-5xl shrink-0">
            {project.coverImage}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge color={DIFFICULTY_COLORS[project.difficulty]}>{project.difficulty}</Badge>
              <Badge color="lavender">{project.category}</Badge>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight mb-2">{project.title}</h1>
            <p className="text-muted-foreground">{project.description}</p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              <span className="flex items-center gap-1.5 text-muted-foreground"><Clock className="w-4 h-4" /> {project.estimatedTime}</span>
              <span className="flex items-center gap-1.5 text-mint"><Zap className="w-4 h-4" /> +{project.xpReward} XP</span>
              <span className="flex items-center gap-1.5 text-amber"><Sparkles className="w-4 h-4" /> +{project.coinReward} coins</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        {/* Left: Details */}
        <div className="space-y-4">
          <div className="bg-card rounded-2xl shadow-soft p-5">
            <h3 className="font-bold text-sm mb-3">Problem Statement</h3>
            <p className="text-sm text-muted-foreground">{project.problemStatement}</p>
          </div>

          <div className="bg-card rounded-2xl shadow-soft p-5">
            <h3 className="font-bold text-sm mb-3">Requirements</h3>
            <ul className="space-y-2">
              {project.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-mint shrink-0 mt-0.5" /> {req}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-2xl shadow-soft p-5">
            <h3 className="font-bold text-sm mb-3">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {project.requiredSkills.map((skill, i) => (
                <span key={i} className="px-3 py-1.5 rounded-xl bg-muted text-sm font-medium">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl shadow-soft p-5">
            <h3 className="font-bold text-sm mb-3">Learning Objectives</h3>
            <ul className="space-y-2">
              {project.learningObjectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Target className="w-4 h-4 text-lavender shrink-0 mt-0.5" /> {obj}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-2xl shadow-soft p-5">
            <h3 className="font-bold text-sm mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 rounded-xl bg-lavender/10 text-lavender text-sm font-medium">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Submission */}
        <div className="space-y-4">
          <div className="bg-card rounded-2xl shadow-soft p-5">
            <div className="flex items-center gap-2 mb-4">
              <Github className="w-5 h-5" />
              <h3 className="font-bold text-sm">Submit Your Project</h3>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">GitHub Repository URL</label>
                <input
                  type="text"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="https://github.com/username/project"
                  className="w-full px-4 py-2.5 rounded-xl bg-channel text-sm border border-border/50 focus:border-mint focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Upload Files</label>
                <div className="border-2 border-dashed border-border/50 rounded-xl p-6 text-center hover:border-mint/50 transition-colors cursor-pointer">
                  <FolderGit2 className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Click to upload .py, .zip files</p>
                </div>
              </div>
              <button
                onClick={() => setSubmitted(true)}
                className="w-full py-3 rounded-xl text-white font-semibold gradient-duotone shadow-soft hover:shadow-glow-mint transition-all"
              >
                Submit Project
              </button>
            </div>
          </div>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-2xl shadow-soft p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-mint" />
                <h3 className="font-bold text-sm">Project Submitted!</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Your project has been submitted for AI review. You'll earn +{project.xpReward} XP and +{project.coinReward} coins upon approval!
              </p>
              <div className="p-3 rounded-xl bg-mint/5 border border-mint/20">
                <div className="text-xs font-semibold text-mint mb-1">AI Review in Progress</div>
                <p className="text-xs text-muted-foreground">Our AI will review your code quality, logic, performance, and best practices.</p>
              </div>
            </motion.div>
          )}

          <div className="bg-card rounded-2xl shadow-soft p-5">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-4 h-4 text-amber" />
              <h3 className="font-bold text-sm">Certificate Eligibility</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Complete this project to earn a verified Project Certificate with QR code and unique ID.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}