import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, BookOpen, Keyboard, FolderGit2, ClipboardList,
  StickyNote, HelpCircle, Bug, Brain, Bot, Award, Trophy,
  FileText, User, Settings, LogOut, Menu, X, Search, Bell,
  ChevronLeft, Sparkles, Zap
} from 'lucide-react';
import { useTheme } from '@/lib/ThemeContext';
import { base44 } from '@/api/base44Client';

const NAV_ITEMS = [
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Learn', path: '/learn', icon: BookOpen },
  { label: 'Typing Game', path: '/typing', icon: Keyboard },
  { label: 'Projects', path: '/projects', icon: FolderGit2 },
  { label: 'Homework', path: '/homework', icon: ClipboardList },
  { label: 'Notes', path: '/notes', icon: StickyNote },
  { label: 'Quiz', path: '/quiz', icon: HelpCircle },
  { label: 'Debug Arena', path: '/debug', icon: Bug },
  { label: 'Logic Builder', path: '/logic', icon: Brain },
  { label: 'AI Mentor', path: '/ai-mentor', icon: Bot },
  { label: 'Certificates', path: '/certificates', icon: Award },
  { label: 'Leaderboard', path: '/leaderboard', icon: Trophy },
  { label: 'Resume', path: '/resume', icon: FileText },
  { label: 'Profile', path: '/profile', icon: User },
  { label: 'Settings', path: '/settings', icon: Settings },
];

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setSidebarOpen(false);
    setNotifOpen(false);
    setProfileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const me = await base44.auth.me();
      setUser(me);
      const existing = await base44.entities.UserProgress.filter({ user_id: me.id });
      if (existing.length > 0) {
        setProgress(existing[0]);
      }
    } catch (e) {
      // not logged in or no progress yet
    }
  };

  const handleLogout = async () => {
    await base44.auth.logout();
    window.location.href = '/';
  };

  const level = progress?.level || 1;
  const xp = progress?.xp || 0;
  const coins = progress?.coins || 0;

  return (
    <div className="min-h-screen bg-canvas flex">
      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 h-screen z-50
        transition-all duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${collapsed ? 'w-20' : 'w-64'}
      `}>
        <div className="h-full m-3 rounded-2xl glass-card shadow-float flex flex-col overflow-hidden">
          {/* Logo */}
          <div className="p-4 flex items-center justify-between border-b border-border/50">
            <Link to="/dashboard" className="flex items-center gap-2.5 min-w-0">
              <div className="w-10 h-10 rounded-xl gradient-duotone flex items-center justify-center text-white text-xl font-bold shrink-0 shadow-glow-mint">
                🐍
              </div>
              {!collapsed && (
                <div className="min-w-0">
                  <div className="font-bold text-sm leading-tight">PyVerse</div>
                  <div className="text-xs text-muted-foreground leading-tight">Academy</div>
                </div>
              )}
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1.5 rounded-lg hover:bg-muted"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User mini-card */}
          {!collapsed && user && (
            <Link to="/profile" className="mx-3 mt-3 p-3 rounded-xl bg-channel channel-carve hover:shadow-soft transition-all">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg gradient-duotone flex items-center justify-center text-lg shrink-0">
                  {progress?.avatar || '🐍'}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold truncate">{user.full_name || user.email}</div>
                  <div className="text-xs text-muted-foreground">Level {level} · {xp} XP</div>
                </div>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
                <div className="h-full gradient-mint rounded-full" style={{ width: `${Math.min(100, (xp % 500) / 5)}%` }} />
              </div>
            </Link>
          )}

          {/* Nav */}
          <nav className="flex-1 overflow-y-auto scrollbar-thin px-2 py-3 space-y-0.5">
            {NAV_ITEMS.map((item) => {
              const active = location.pathname === item.path || (item.path !== '/dashboard' && location.pathname.startsWith(item.path));
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                    transition-all duration-200 relative
                    ${active
                      ? 'gradient-duotone text-white shadow-glow-mint'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 shrink-0 ${active ? 'text-white' : ''}`} />
                  {!collapsed && <span className="truncate">{item.label}</span>}
                  {collapsed && (
                    <span className="absolute left-full ml-2 px-2 py-1 rounded-lg bg-foreground text-background text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                      {item.label}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Bottom */}
          <div className="p-2 border-t border-border/50 space-y-0.5">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="w-full hidden lg:flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            >
              <ChevronLeft className={`w-5 h-5 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
              {!collapsed && <span>Collapse</span>}
            </button>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-coral hover:bg-coral/10 transition-all"
            >
              <LogOut className="w-5 h-5 shrink-0" />
              {!collapsed && <span>Logout</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-30 px-4 lg:px-6 py-3">
          <div className="glass-card rounded-2xl shadow-soft px-4 py-2.5 flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Search */}
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search lessons, projects, notes..."
                onFocus={() => setSearchOpen(true)}
                onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-channel text-sm border border-transparent focus:border-mint focus:outline-none transition-colors"
              />
            </div>

            <div className="flex items-center gap-2 ml-auto">
              {/* Coins & XP */}
              <div className="hidden sm:flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber/10 text-amber">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">{coins}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-mint/10 text-mint">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-semibold">{xp}</span>
                </div>
              </div>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl hover:bg-muted transition-colors"
                title="Toggle theme"
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>

              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setNotifOpen(!notifOpen)}
                  className="p-2 rounded-xl hover:bg-muted transition-colors relative"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-coral" />
                </button>
                <AnimatePresence>
                  {notifOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-80 glass-card rounded-2xl shadow-float p-3 z-50"
                    >
                      <div className="text-sm font-semibold mb-2 px-2">Notifications</div>
                      <div className="space-y-1">
                        {[
                          { icon: '📚', title: 'Homework Reminder', msg: 'Complete your Variables homework', color: 'mint' },
                          { icon: '🎯', title: 'Daily Challenge', msg: 'New logic challenge available!', color: 'lavender' },
                          { icon: '⌨️', title: 'Typing Reminder', msg: 'Practice typing to maintain streak', color: 'amber' },
                          { icon: '🏆', title: 'Certificate Earned', msg: 'You earned the Python Basics certificate!', color: 'mint' },
                        ].map((n, i) => (
                          <div key={i} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-muted cursor-pointer transition-colors">
                            <div className="text-xl">{n.icon}</div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium">{n.title}</div>
                              <div className="text-xs text-muted-foreground">{n.msg}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Profile */}
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="w-9 h-9 rounded-xl gradient-duotone flex items-center justify-center text-lg shadow-soft"
                >
                  {progress?.avatar || '🐍'}
                </button>
                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-56 glass-card rounded-2xl shadow-float p-2 z-50"
                    >
                      <div className="px-3 py-2 border-b border-border/50 mb-1">
                        <div className="text-sm font-semibold truncate">{user?.full_name || 'Student'}</div>
                        <div className="text-xs text-muted-foreground truncate">{user?.email}</div>
                      </div>
                      <Link to="/profile" className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-muted text-sm transition-colors">
                        <User className="w-4 h-4" /> Profile
                      </Link>
                      <Link to="/settings" className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-muted text-sm transition-colors">
                        <Settings className="w-4 h-4" /> Settings
                      </Link>
                      <button onClick={handleLogout} className="w-full flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-coral/10 text-coral text-sm transition-colors">
                        <LogOut className="w-4 h-4" /> Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 px-4 lg:px-6 pb-6">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}