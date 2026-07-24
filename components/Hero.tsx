'use client';

import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/hero-coffee.png"
        alt="Yene Coffee Interior"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/70" />

      {/* Floating decoration */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-10 text-6xl opacity-30"
      >
        ☕
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-2xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6"
          >
            <Coffee className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Freshly Brewed Every Day
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight"
          >
            Experience Ethiopia&apos;s Finest Coffee
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-foreground/80 mb-8 leading-relaxed"
          >
            Discover the rich heritage of authentic Ethiopian coffee in our cozy,
            welcoming space. Crafted with passion, served with pride.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('menu')}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-accent transition-colors shadow-lg"
            >
              View Menu
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('location')}
              className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold text-lg hover:bg-primary/10 transition-colors"
            >
              Find Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-foreground/60">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-foreground/40 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1.5 bg-foreground/40 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
