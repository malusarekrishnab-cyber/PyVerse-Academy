import React from 'react';
import { motion } from 'framer-motion';
import LandingNavbar from '@/components/landing/LandingNavbar';
import HeroSection from '@/components/landing/HeroSection';
import FeatureSection from '@/components/landing/FeatureSection';
import RoadmapSection from '@/components/landing/RoadmapSection';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import DashboardPreview from '@/components/landing/DashboardPreview';
import TypingGamePreview from '@/components/landing/TypingGamePreview';
import ProjectsSection from '@/components/landing/ProjectsSection';
import NotesPreview from '@/components/landing/NotesPreview';
import SuccessStats from '@/components/landing/SuccessStats';
import Testimonials from '@/components/landing/Testimonials';
import CertificatePreview from '@/components/landing/CertificatePreview';
import LeaderboardPreview from '@/components/landing/LeaderboardPreview';
import FAQSection from '@/components/landing/FAQSection';
import CTASection from '@/components/landing/CTASection';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';
import { ThemeProvider } from '@/lib/ThemeContext';

export default function Landing() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-canvas">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
        <LandingNavbar />
        <HeroSection />
        <FeatureSection />
        <RoadmapSection />
        <WhyChooseUs />
        <DashboardPreview />
        <TypingGamePreview />
        <ProjectsSection />
        <NotesPreview />
        <SuccessStats />
        <Testimonials />
        <CertificatePreview />
        <LeaderboardPreview />
        <FAQSection />
        <CTASection />
        <ContactSection />
        <Footer />
        </motion.div>
      </div>
    </ThemeProvider>
  );
}