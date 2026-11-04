import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Moon, Sun, LogIn, UserPlus, ChevronDown } from 'lucide-react';
import { useTheme } from '@/lib/ThemeContext';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Learn', path: '/learn' },
  { label: 'Typing Game', path: '/typing' },
  { label: 'Projects', path: '/projects' },
  { label: 'Roadmap', path: '/learn' },
  { label: 'Certificates', path: '/certificates' },
  { label: 'Leaderboard', path: '/leaderboard' },
  { label: 'About', path: '/#about' },
  { label: 'Contact', path: '/#contact' },
];

export default function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className={`mx-3 lg:mx-6 rounded-2xl transition-all duration-300 ${
        scrolled ? 'glass-card shadow-float py-2' : 'glass shadow-soft py-3'
      }`}>
        <div className="px-4 lg:px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-10 h-10 rounded-xl gradient-duotone flex items-center justify-center text-xl shadow-glow-mint">
              🐍
            </div>
            <div className="font-bold text-base leading-tight">
              <span className="text-gradient-duotone">PyVerse</span>
              <span className="block text-xs text-muted-foreground font-normal">Academy</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button className="hidden sm:flex p-2 rounded-lg hover:bg-muted transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <Link
              to="/login"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-muted transition-colors"
            >
              <LogIn className="w-4 h-4" /> Login
            </Link>
            <Link
              to="/register"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white gradient-duotone shadow-soft hover:shadow-glow-mint transition-all"
            >
              <UserPlus className="w-4 h-4" /> Register
            </Link>
            <Link
              to="/register"
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold text-amber-900 bg-gradient-to-r from-amber-300 to-amber-500 shadow-soft hover:shadow-lg transition-all"
            >
              ⭐ Premium
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 rounded-lg hover:bg-muted"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="xl:hidden overflow-hidden px-4"
            >
              <div className="pt-3 pb-2 space-y-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-muted transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex gap-2 pt-2">
                  <Link to="/login" className="flex-1 text-center px-4 py-2.5 rounded-xl text-sm font-semibold border border-border hover:bg-muted transition-colors">
                    Login
                  </Link>
                  <Link to="/register" className="flex-1 text-center px-4 py-2.5 rounded-xl text-sm font-semibold text-white gradient-duotone">
                    Register
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}