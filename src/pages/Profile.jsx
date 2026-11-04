import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Zap, Sparkles, Flame, TrendingUp, Keyboard, Clock, Target,
  Award, FolderGit2, Trophy, BookOpen, MapPin, Calendar, Pencil,
  Lock, Star, CheckCircle, FileText, Download, Share2
} from 'lucide-react';
import { StatCard, ProgressBar, RingProgress, SectionTitle, GlassCard, Badge } from '@/components/ui/PyverseUI';
import { MODULES, BADGES, PROJECTS, getLevelFromXP } from '@/data/curriculum';
import { base44 } from '@/api/base44Client';

const colorMap = {
  mint: { bg: 'bg-mint/10', text: 'text-mint', border: 'border-mint/30' },
  lavender: { bg: 'bg-lavender/10', text: 'text-lavender', border: 'border-lavender/30' },
  amber: { bg: 'bg-amber/10', text: 'text-amber', border: 'border-amber/30' },
  coral: { bg: 'bg-coral/10', text: 'text-coral', border: 'border-coral/30' },
};

const borderStyles = {
  Gold: 'from-amber-400 to-yellow-600',
  Silver: 'from-slate-300 to-slate-500',
  Bronze: 'from-orange-400 to-amber-700',
};

export default function Profile() {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(null);
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const me = await base44.auth.me();
      setUser(me);
      const [progRes, certRes] = await Promise.all([
        base44.entities.UserProgress.filter({ user_id: me.id }),
        base44.entities.Certificate.filter({ user_id: me.id }, '-completion_date', 50),
      ]);
      setProgress(progRes[0] || null);
      setCertificates(certRes);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-mint/20 border-t-mint rounded-full animate-spin" />
      </div>
    );
  }

  const xp = progress?.xp || 0;
  const { current: currentLevel, next: nextLevel } = getLevelFromXP(xp);
  const level = progress?.level || currentLevel?.level || 1;
  const coins = progress?.coins || 0;
  const streak = progress?.streak || 0;
  const wpm = progress?.typing_wpm || 0;
  const accuracy = progress?.typing_accuracy || 0;
  const hours = progress?.learning_hours || 0;
  const completedTopics = progress?.completed_topics || [];
  const completedProjectIds = progress?.completed_projects || [];
  const completedChallengeIds = progress?.completed_challenges || [];
  const earnedBadges = progress?.badges || [];
  const avatar = progress?.avatar || '🐍';
  const goal = progress?.goal || 'Learn Python';
  const experienceLevel = progress?.experience_level || 'Absolute Beginner';

  const totalTopics = MODULES.reduce((sum, m) => sum + m.topics.length, 0);
  const pythonProgress = Math.round((completedTopics.length / totalTopics) * 100);
  const completedModules = MODULES.filter(m => m.topics.every(t => completedTopics.includes(t.id))).length;
  const completedProjects = PROJECTS.filter(p => completedProjectIds.includes(p.id));
  const earnedBadgesCount = BADGES.filter(b => earnedBadges.includes(b.id)).length;

  const fullName = user?.full_name || user?.email?.split('@')[0] || 'Student';
  const firstName = fullName.split(' ')[0];
  const joinDate = user?.created_date ? new Date(user.created_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Recently';

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-2xl shadow-float p-6 lg:p-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-mint/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-lavender/10 blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-6">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-28 h-28 rounded-3xl gradient-duotone flex items-center justify-center text-6xl shadow-glow-mint">
              {avatar}
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-2xl bg-card shadow-float flex items-center justify-center border-2 border-mint">
              <span className="text-sm font-bold text-mint">{level}</span>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight">{fullName}</h1>
              <Badge color="mint" size="lg">{currentLevel?.title || `Level ${level}`}</Badge>
            </div>
            <p className="text-muted-foreground mt-1 truncate">{user?.email}</p>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Target className="w-4 h-4 text-mint" /> {goal}</span>
              <span className="inline-flex items-center gap-1.5"><TrendingUp className="w-4 h-4 text-lavender" /> {experienceLevel}</span>
              <span className="inline-flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber" /> Joined {joinDate}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-semibold gradient-duotone shadow-soft hover:shadow-glow-mint transition-all">
                <Pencil className="w-4 h-4" /> Edit Profile
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-card shadow-soft hover:shadow-float transition-all">
                <Share2 className="w-4 h-4" /> Share Profile
              </button>
            </div>
          </div>

          {/* XP to next level */}
          <div className="flex flex-col items-center gap-2 shrink-0">
            <RingProgress value={xp} max={nextLevel?.minXP || xp} size={120} color="mint" label="XP" />
            <div className="text-center">
              <div className="text-sm font-semibold">{xp.toLocaleString()} XP</div>
              {nextLevel ? (
                <div className="text-xs text-muted-foreground">{nextLevel.minXP - xp} to {nextLevel.title}</div>
              ) : (
                <div className="text-xs text-mint">Max level! 🏆</div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard icon={TrendingUp} label="Current Level" value={level} sublabel={currentLevel?.title} color="mint" delay={0} />
        <StatCard icon={Zap} label="Total XP" value={xp.toLocaleString()} sublabel="Earned" color="lavender" delay={0.1} />
        <StatCard icon={Sparkles} label="Coins" value={coins.toLocaleString()} sublabel="In wallet" color="amber" delay={0.2} />
        <StatCard icon={Flame} label="Day Streak" value={streak} sublabel="Days in a row" color="coral" delay={0.3} />
        <StatCard icon={Keyboard} label="Typing Speed" value={`${wpm}`} sublabel="WPM" color="mint" delay={0.4} />
        <StatCard icon={Clock} label="Learning Hours" value={hours.toFixed(1)} sublabel="Total time" color="lavender" delay={0.5} />
      </div>

      {/* Overall Progress */}
      <GlassCard className="p-5">
        <SectionTitle title="Overall Progress" subtitle="Your learning journey at a glance" />
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Python progress ring */}
          <div className="flex flex-col items-center justify-center text-center">
            <RingProgress value={pythonProgress} size={160} color="mint" label="Complete" />
            <div className="mt-3 font-semibold">Python Curriculum</div>
            <div className="text-sm text-muted-foreground">{completedTopics.length} of {totalTopics} topics</div>
          </div>

          {/* Progress bars */}
          <div className="space-y-5">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium flex items-center gap-2"><BookOpen className="w-4 h-4 text-mint" /> Topics Completed</span>
                <span className="text-sm font-bold text-mint">{completedTopics.length}/{totalTopics}</span>
              </div>
              <ProgressBar value={completedTopics.length} max={totalTopics} color="mint" height="h-3" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium flex items-center gap-2"><FolderGit2 className="w-4 h-4 text-lavender" /> Modules Completed</span>
                <span className="text-sm font-bold text-lavender">{completedModules}/{MODULES.length}</span>
              </div>
              <ProgressBar value={completedModules} max={MODULES.length} color="lavender" height="h-3" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium flex items-center gap-2"><Trophy className="w-4 h-4 text-amber" /> Projects Completed</span>
                <span className="text-sm font-bold text-amber">{completedProjects.length}/{PROJECTS.length}</span>
              </div>
              <ProgressBar value={completedProjects.length} max={PROJECTS.length} color="amber" height="h-3" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium flex items-center gap-2"><Target className="w-4 h-4 text-coral" /> Challenges Solved</span>
                <span className="text-sm font-bold text-coral">{completedChallengeIds.length}</span>
              </div>
              <ProgressBar value={completedChallengeIds.length} max={50} color="coral" height="h-3" />
            </div>
          </div>

          {/* Quick milestones */}
          <div className="space-y-3">
            <div className="text-sm font-semibold mb-2">Milestones</div>
            {[
              { label: 'Typing Accuracy', value: `${accuracy}%`, icon: Keyboard, color: 'mint' },
              { label: 'Badges Earned', value: `${earnedBadgesCount}/${BADGES.length}`, icon: Award, color: 'lavender' },
              { label: 'Certificates', value: `${certificates.length}`, icon: FileText, color: 'amber' },
              { label: 'Current Rank', value: '#42', icon: Trophy, color: 'coral' },
            ].map((m, i) => {
              const Icon = m.icon;
              const c = colorMap[m.color];
              return (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-card shadow-soft">
                  <div className={`w-9 h-9 rounded-lg ${c.bg} flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${c.text}`} />
                  </div>
                  <span className="text-sm text-muted-foreground flex-1">{m.label}</span>
                  <span className="text-sm font-bold">{m.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </GlassCard>

      {/* Badges Gallery */}
      <div>
        <SectionTitle title="Badges" subtitle={`${earnedBadgesCount} of ${BADGES.length} earned`} />
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {BADGES.map((badge, i) => {
            const earned = earnedBadges.includes(badge.id);
            const c = colorMap[badge.color] || colorMap.mint;
            return (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -4 }}
                className={`relative bg-card rounded-2xl p-4 shadow-soft hover:shadow-float border-2 transition-all text-center ${
                  earned ? c.border : 'border-border/50 opacity-50 grayscale'
                }`}
              >
                <div className="text-4xl mb-2">{earned ? badge.icon : '🔒'}</div>
                <div className="text-xs font-semibold leading-tight">{badge.name}</div>
                <div className="text-[10px] text-muted-foreground mt-1 leading-tight">{badge.description}</div>
                {earned && (
                  <div className="absolute top-2 right-2">
                    <CheckCircle className={`w-4 h-4 ${c.text}`} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Completed Projects */}
      <div>
        <SectionTitle title="Completed Projects" subtitle={`${completedProjects.length} projects finished`} />
        {completedProjects.length === 0 ? (
          <GlassCard className="p-12 text-center">
            <FolderGit2 className="w-12 h-12 mx-auto text-muted-foreground/40 mb-3" />
            <p className="text-muted-foreground">No projects completed yet. Start building to see them here!</p>
          </GlassCard>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {completedProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-2xl p-5 shadow-soft hover:shadow-float border border-border/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{project.coverImage || '📦'}</div>
                  <Badge color="mint" size="sm"><CheckCircle className="w-3 h-3" /> Done</Badge>
                </div>
                <h3 className="font-bold text-sm mb-1">{project.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{project.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{project.difficulty}</span>
                  <span className="font-semibold text-mint">+{project.xpReward} XP</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Certificates Gallery */}
      <div>
        <SectionTitle title="Certificates" subtitle={`${certificates.length} certificates earned`} />
        {certificates.length === 0 ? (
          <GlassCard className="p-12 text-center">
            <Award className="w-12 h-12 mx-auto text-muted-foreground/40 mb-3" />
            <p className="text-muted-foreground">No certificates yet. Complete modules and challenges to earn them!</p>
          </GlassCard>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certificates.map((cert, i) => {
              const border = borderStyles[cert.border_style] || borderStyles.Gold;
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative bg-card rounded-2xl shadow-soft hover:shadow-float overflow-hidden border border-border/50 transition-all group"
                >
                  {/* Certificate visual */}
                  <div className={`relative h-44 bg-gradient-to-br ${border} p-1`}>
                    <div className="w-full h-full bg-card rounded-xl p-4 flex flex-col items-center justify-center text-center">
                      <Award className="w-8 h-8 text-amber mb-2" />
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Certificate of Completion</div>
                      <div className="text-sm font-bold mt-1 leading-tight">{cert.course_name}</div>
                      <div className="text-xs text-muted-foreground mt-1">{cert.student_name}</div>
                      {cert.grade && (
                        <div className="mt-2 text-xs font-semibold text-mint">Grade: {cert.grade}</div>
                      )}
                      {cert.verified && (
                        <div className="absolute top-2 right-2">
                          <Badge color="mint" size="sm"><CheckCircle className="w-3 h-3" /> Verified</Badge>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Footer */}
                  <div className="p-3 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold">{cert.certificate_type}</div>
                      <div className="text-[10px] text-muted-foreground font-mono">{cert.certificate_id}</div>
                    </div>
                    <div className="flex gap-1">
                      <button className="w-8 h-8 rounded-lg bg-muted hover:bg-mint/10 hover:text-mint flex items-center justify-center transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 rounded-lg bg-muted hover:bg-lavender/10 hover:text-lavender flex items-center justify-center transition-colors">
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
    </div>
  );
}s