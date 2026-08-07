'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Determine active section
      const sections = ['home', 'menu', 'gallery', 'location', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setIsLangOpen(false);

    const element = document.getElementById(id);
    if (!element) return;

    const navbarHeight = 64;
    const top =
      element.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  };

  const links = [
    { label: t.nav.home, id: 'home' },
    { label: t.nav.menu, id: 'menu' },
    { label: t.nav.gallery, id: 'gallery' },
    { label: t.nav.location, id: 'location' },
    { label: t.nav.contact, id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors">
              Yene Coffee
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors relative pb-1 ${
                  activeSection === link.id
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 40 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Language Switcher - Desktop */}
          <div className="hidden md:flex items-center gap-3 relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 px-3 py-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Select language"
            >
              <Globe className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">
                {language === 'en' ? 'EN' : 'አም'}
              </span>
            </motion.button>
            {isLangOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-12 right-0 bg-background border border-muted rounded-lg shadow-lg z-50"
              >
                <button
                  onClick={() => {
                    setLanguage('en');
                    setIsLangOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                    language === 'en'
                      ? 'bg-accent/20 text-primary'
                      : 'hover:bg-muted/50 text-foreground'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    setLanguage('am');
                    setIsLangOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                    language === 'am'
                      ? 'bg-accent/20 text-primary'
                      : 'hover:bg-muted/50 text-foreground'
                  }`}
                >
                  አማርኛ
                </button>
              </motion.div>
            )}
          </div>

          {/* CTA Button - Desktop */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="hidden md:inline-block px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-accent transition-colors ml-4"
          >
            {t.nav.visitUs}
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="pointer-events-auto fixed inset-x-0 top-16 z-[60] overflow-hidden bg-background/95 backdrop-blur-sm md:hidden"
        >
          <div className="max-h-[calc(100vh-64px)] overflow-y-auto pb-4 space-y-2 px-4 pt-4">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors text-sm font-medium ${
                  activeSection === link.id
                    ? 'bg-accent/20 text-primary'
                    : 'text-foreground hover:bg-muted/50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 py-3 border-t border-muted mt-2">
              <p className="text-xs font-medium text-foreground/60 mb-3">
                {language === 'en' ? 'Language' : 'ቋንቋ'}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setLanguage('en');
                    setIsOpen(false);
                  }}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    language === 'en'
                      ? 'bg-accent/20 text-primary'
                      : 'bg-muted/50 text-foreground hover:bg-muted'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    setLanguage('am');
                    setIsOpen(false);
                  }}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    language === 'am'
                      ? 'bg-accent/20 text-primary'
                      : 'bg-muted/50 text-foreground hover:bg-muted'
                  }`}
                >
                  አማርኛ
                </button>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contact')}
              className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-accent transition-colors text-sm"
            >
              {t.nav.visitUs}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
