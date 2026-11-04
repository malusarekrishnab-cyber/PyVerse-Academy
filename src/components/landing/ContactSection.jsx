import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, MapPin, User, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '@/data/curriculum';

export default function ContactSection() {
  const emailLink = `mailto:${CONTACT_INFO.email}`;
  const phoneLink = `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`;
  const whatsappLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=Hello%20Vaibhav,%20I%20have%20a%20question%20about%20PyVerse%20Academy`;

  return (
    <section id="contact" className="py-20 px-4 lg:px-6 bg-channel/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
            Get in <span className="text-gradient-duotone">Touch</span>
          </h2>
          <p className="mt-3 text-muted-foreground">Have questions? Contact the owner directly — we're here to help!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl shadow-float p-6 lg:p-10"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Owner info */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl gradient-duotone flex items-center justify-center text-3xl shadow-glow-mint shrink-0">
                  👨‍💻
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Owner</span>
                  </div>
                  <div className="text-xl font-bold">{CONTACT_INFO.ownerName}</div>
                  <div className="text-sm text-muted-foreground">Founder & CEO, PyVerse Academy</div>
                </div>
              </div>

              <a href={emailLink} className="flex items-center gap-4 p-4 rounded-2xl bg-card shadow-soft hover:shadow-float transition-all group">
                <div className="w-11 h-11 rounded-xl bg-mint/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-mint" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">Email Address</div>
                  <div className="text-sm font-semibold truncate group-hover:text-mint transition-colors">{CONTACT_INFO.email}</div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto shrink-0" />
              </a>

              <a href={phoneLink} className="flex items-center gap-4 p-4 rounded-2xl bg-card shadow-soft hover:shadow-float transition-all group">
                <div className="w-11 h-11 rounded-xl bg-lavender/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-lavender" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">Mobile Number</div>
                  <div className="text-sm font-semibold group-hover:text-lavender transition-colors">{CONTACT_INFO.phone}</div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto shrink-0" />
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-card shadow-soft">
                <div className="w-11 h-11 rounded-xl bg-amber/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="text-sm font-semibold">{CONTACT_INFO.location}</div>
                </div>
              </div>
            </div>

            {/* Right: Action buttons */}
            <div className="space-y-3">
              <a
                href={emailLink}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl text-white font-semibold gradient-duotone shadow-soft hover:shadow-glow-mint transition-all hover:scale-[1.02]"
              >
                <Mail className="w-5 h-5" /> Contact Owner
              </a>
              <a
                href={phoneLink}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl font-semibold bg-card shadow-soft hover:shadow-float border border-border/50 transition-all hover:scale-[1.02]"
              >
                <Phone className="w-5 h-5 text-lavender" /> Call Now
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl font-semibold text-white bg-[#25D366] shadow-soft hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>

              <div className="pt-4 text-center">
                <div className="text-xs text-muted-foreground">Available for support and inquiries</div>
                <div className="text-xs text-muted-foreground mt-1">Response within 24 hours</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}