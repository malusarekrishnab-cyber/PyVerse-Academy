import React from 'react';
import { motion } from 'framer-motion';

export function StatCard({ icon: Icon, label, value, sublabel, color = 'mint', delay = 0 }) {
  const colorMap = {
    mint: 'from-[#2DDDA8] to-[#6FE7C2]',
    lavender: 'from-[#A78BFA] to-[#C4B3FB]',
    amber: 'from-[#F5B080] to-[#F7C4A0]',
    coral: 'from-[#FF6B6B] to-[#FF9F9F]',
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="bg-card rounded-2xl p-5 shadow-soft hover:shadow-float transition-all border border-border/50"
    >
      <div className="flex items-center justify-between mb-3">
        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${colorMap[color]} flex items-center justify-center shadow-soft`}>
          {Icon && <Icon className="w-5 h-5 text-white" />}
        </div>
        {sublabel && <span className="text-xs text-muted-foreground font-medium">{sublabel}</span>}
      </div>
      <div className="text-3xl font-bold tracking-tight">{value}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </motion.div>
  );
}

export function ProgressBar({ value, max = 100, color = 'mint', height = 'h-2', showLabel = false }) {
  const pct = Math.min(100, (value / max) * 100);
  const colorMap = {
    mint: 'gradient-mint',
    lavender: 'gradient-lavender',
    amber: 'from-[#F5B080] to-[#F7C4A0]',
    coral: 'from-[#FF6B6B] to-[#FF9F9F]',
    duotone: 'gradient-duotone',
  };
  return (
    <div className="w-full">
      <div className={`w-full ${height} rounded-full bg-muted overflow-hidden`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${colorMap[color]}`}
        />
      </div>
      {showLabel && (
        <div className="text-xs text-muted-foreground mt-1 text-right">{Math.round(pct)}%</div>
      )}
    </div>
  );
}

export function RingProgress({ value, max = 100, size = 120, stroke = 10, color = 'mint', label, sublabel }) {
  const pct = Math.min(100, (value / max) * 100);
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;
  const colors = {
    mint: '#2DDDA8',
    lavender: '#A78BFA',
    amber: '#F5B080',
    coral: '#FF6B6B',
  };
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="currentColor" strokeWidth={stroke} className="text-muted/30" />
        <motion.circle
          cx={size/2}
          cy={size/2}
          r={radius}
          fill="none"
          stroke={colors[color]}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-2xl font-bold">{Math.round(pct)}%</div>
        {label && <div className="text-xs text-muted-foreground">{label}</div>}
        {sublabel && <div className="text-xs text-muted-foreground">{sublabel}</div>}
      </div>
    </div>
  );
}

export function Badge({ children, color = 'mint', size = 'md' }) {
  const colorMap = {
    mint: 'bg-mint/10 text-mint',
    lavender: 'bg-lavender/10 text-lavender',
    amber: 'bg-amber/10 text-amber',
    coral: 'bg-coral/10 text-coral',
    gray: 'bg-muted text-muted-foreground',
  };
  const sizeMap = { sm: 'text-xs px-2 py-0.5', md: 'text-xs px-2.5 py-1', lg: 'text-sm px-3 py-1.5' };
  return (
    <span className={`inline-flex items-center gap-1 rounded-full font-medium ${colorMap[color]} ${sizeMap[size]}`}>
      {children}
    </span>
  );
}

export function SectionTitle({ title, subtitle, action }) {
  return (
    <div className="flex items-end justify-between mb-4">
      <div>
        <h2 className="text-xl font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function GlassCard({ children, className = '', hover = false, ...props }) {
  return (
    <div
      className={`glass-card rounded-2xl shadow-soft ${hover ? 'hover:shadow-float transition-shadow' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function Reveal({ children, delay = 0, y = 20, x = 0, scale = 1, className = '', once = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCounter({ value, duration = 1.5, suffix = '', className = '' }) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const startTime = performance.now();
    const animate = (now) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(value);
    };
    requestAnimationFrame(animate);
  }, [value, duration]);
  return <span className={className}>{count.toLocaleString()}{suffix}</span>;
}