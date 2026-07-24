'use client';

import { motion } from 'framer-motion';
import { Zap, Users, Wifi, Award } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Premium Coffee Beans',
    description: 'Sourced directly from Ethiopian highlands, carefully roasted daily',
  },
  {
    icon: Users,
    title: 'Experienced Baristas',
    description: 'Expert coffee makers with passion for their craft',
  },
  {
    icon: Zap,
    title: 'Comfortable Workspace',
    description: 'Perfect for working, studying, or relaxing with friends',
  },
  {
    icon: Wifi,
    title: 'Free WiFi',
    description: 'High-speed internet for all our guests',
  },
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section className="py-20 sm:py-28 bg-background">
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
            Why Choose Us
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover what sets Yene Coffee apart from the rest
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
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
                className="bg-card rounded-2xl p-8 text-center h-full shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors"
                >
                  <feature.icon className="w-8 h-8 text-accent" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
