'use client';

import { motion } from 'framer-motion';
import { Coffee, Leaf, Home, Heart } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Coffee,
      title: t.about.features[0].title,
      description: t.about.features[0].description,
    },
    {
      icon: Leaf,
      title: t.about.features[1].title,
      description: t.about.features[1].description,
    },
    {
      icon: Home,
      title: t.about.features[2].title,
      description: t.about.features[2].description,
    },
    {
      icon: Heart,
      title: t.about.features[3].title,
      description: t.about.features[3].description,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
            {t.about.title}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t.about.description}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-background rounded-2xl p-8 h-full shadow-sm hover:shadow-lg transition-shadow"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors"
                >
                  <feature.icon className="w-8 h-8 text-foreground" />
                </motion.div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-background rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
            {t.about.story}
          </h3>
          <p className="text-foreground/70 leading-relaxed mb-4">
            {t.about.storyText1}
          </p>
          <p className="text-foreground/70 leading-relaxed">
            {t.about.storyText2}
          </p>
        </motion.div>*/}
      </div>
    </section>
  );
}
