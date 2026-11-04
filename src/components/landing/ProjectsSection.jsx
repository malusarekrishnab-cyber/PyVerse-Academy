import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/data/curriculum';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = [
  { label: 'Mini Projects', filter: 'Mini', icon: '🧮' },
  { label: 'Company Projects', filter: 'Company', icon: '💼' },
  { label: 'Automation', filter: 'Advanced', icon: '🤖' },
  { label: 'Games', filter: 'Mini', icon: '🎮' },
  { label: 'APIs', filter: 'Company', icon: '🌐' },
  { label: 'Web Apps', filter: 'Intermediate', icon: '🖥️' },
  { label: 'Desktop Apps', filter: 'Intermediate', icon: '💻' },
  { label: 'AI Projects', filter: 'Advanced', icon: '🧠' },
];

const difficultyColors = {
  Easy: 'mint', Beginner: 'mint', Intermediate: 'lavender', Advanced: 'amber', Professional: 'coral', Enterprise: 'coral'
};

export default function ProjectsSection() {
  const featured = PROJECTS.slice(0, 6);
  return (
    <section className="py-20 px-4 lg:px-6 bg-channel/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
            Real-World <span className="text-gradient-duotone">Projects</span>
          </h2>
          <p className="mt-3 text-muted-foreground">Build a portfolio that impresses employers</p>
        </motion.div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {CATEGORIES.map((cat, i) => (
            <div key={i} className="px-4 py-2 rounded-xl bg-card shadow-soft text-sm font-medium flex items-center gap-2 hover:shadow-float transition-all cursor-pointer">
              <span>{cat.icon}</span> {cat.label}
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-card rounded-2xl shadow-soft hover:shadow-float border border-border/50 overflow-hidden transition-all cursor-pointer"
            >
              <div className="h-32 gradient-duotone-soft flex items-center justify-center text-6xl">
                {project.coverImage}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full bg-${difficultyColors[project.difficulty]}/10 text-${difficultyColors[project.difficulty]}`}>
                    {project.difficulty}
                  </span>
                  <span className="text-xs text-muted-foreground">{project.estimatedTime}</span>
                </div>
                <h3 className="font-bold text-base mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                <div className="flex items-center justify-between mt-4">
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

        <div className="text-center mt-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold glass-card shadow-soft hover:shadow-float transition-all"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}