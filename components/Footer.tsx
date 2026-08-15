'use client';

import { motion } from 'framer-motion';
import { Share2, Heart, Send, Music2 } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Share2,
      href: 'https://facebook.com',
      label: 'Facebook',
    },
    {
      icon: Heart,
      href: 'https://instagram.com',
      label: 'Instagram',
    },
    {
      icon: Send,
      href: 'https://telegram.org',
      label: 'Telegram',
    },
    {
      icon: Music2,
      href: 'https://tiktok.com',
      label: 'TikTok',
    },
  ];

  const quickLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.menu, href: '#menu' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.location, href: '#location' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="py-16 sm:py-20 grid md:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold mb-3">Yene Coffee</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif font-bold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif font-bold mb-4">{t.footer.hours}</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>{t.location.hours}</li>
              <li className="mt-4 pt-4 border-t border-background/20">
                <a
                  href="tel:+251-939-455-149"
                  className="hover:text-background transition-colors"
                >
                  {t.location.phone}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif font-bold mb-4">{t.footer.followUs}</h4>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-accent text-background hover:text-foreground flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-background/20" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-8 flex flex-col sm:flex-row justify-between items-center text-sm text-background/60 gap-4"
        >
          <p>
            &copy; {currentYear} Yene Coffee. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
