import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Youtube, Mail, Phone, MessageCircle, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/data/curriculum';

const QUICK_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Learn', path: '/learn' },
  { label: 'Typing Game', path: '/typing' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certificates', path: '/certificates' },
  { label: 'Leaderboard', path: '/leaderboard' },
  { label: 'Blog', path: '/' },
  { label: 'Contact', path: '/#contact' },
];

export default function Footer() {
  const emailLink = `mailto:${CONTACT_INFO.email}`;
  const phoneLink = `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`;
  const whatsappLink = `https://wa.me/${CONTACT_INFO.whatsapp}`;

  return (
    <footer className="bg-foreground text-background pt-16 pb-8 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-duotone flex items-center justify-center text-xl">🐍</div>
              <div className="font-bold">
                <span className="text-gradient-duotone">PyVerse</span>
                <span className="block text-xs text-background/60 font-normal">Academy</span>
              </div>
            </div>
            <p className="text-sm text-background/60 mb-4">
              The ultimate Python learning platform — from absolute beginner to job-ready professional developer.
            </p>
            <div className="flex gap-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm mb-4">Quick Links</h3>
            <div className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <Link key={link.label} to={link.path} className="block text-sm text-background/60 hover:text-background transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-bold text-sm mb-4">Courses</h3>
            <div className="space-y-2">
              {['Python Basics', 'Intermediate Python', 'Advanced Python', 'NumPy & Pandas', 'Flask & FastAPI', 'Projects & Interview'].map((course) => (
                <Link key={course} to="/learn" className="block text-sm text-background/60 hover:text-background transition-colors">
                  {course}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm mb-4">Contact Owner</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-sm text-background/60">
                <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center shrink-0">
                  <span className="text-xs">👤</span>
                </div>
                <span className="font-medium text-background/80">{CONTACT_INFO.ownerName}</span>
              </div>
              <a href={emailLink} className="flex items-center gap-2.5 text-sm text-background/60 hover:text-background transition-colors">
                <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">{CONTACT_INFO.email}</span>
              </a>
              <a href={phoneLink} className="flex items-center gap-2.5 text-sm text-background/60 hover:text-background transition-colors">
                <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-background/60 hover:text-background transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                </div>
                <span>WhatsApp Chat</span>
              </a>
              <div className="flex items-center gap-2.5 text-sm text-background/60">
                <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{CONTACT_INFO.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-background/50">
            © 2026 PyVerse Academy. Founded by {CONTACT_INFO.ownerName}. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-background/50">
            <Link to="/" className="hover:text-background transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-background transition-colors">Terms</Link>
            <Link to="/#contact" className="hover:text-background transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}