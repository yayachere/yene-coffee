'use client';

import { motion } from 'framer-motion';
import { Coffee, Leaf, Home, Heart } from 'lucide-react';

const features = [
  {
    icon: Coffee,
    title: 'Fresh Beans',
    description: 'Sourced directly from Ethiopian highlands, roasted fresh daily',
  },
  {
    icon: Leaf,
    title: 'Organic Ingredients',
    description: '100% natural, ethically sourced, sustainable farming',
  },
  {
    icon: Home,
    title: 'Cozy Atmosphere',
    description: 'A warm, welcoming space perfect for work or relaxation',
  },
  {
    icon: Heart,
    title: 'Crafted With Passion',
    description: 'Every cup prepared with care and expertise by our baristas',
  },
];

export default function About() {
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
            About Yene Coffee
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We believe that great coffee is more than just a beverage—it&apos;s an
            experience. Discover what makes us special.
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
                  <feature.icon className="w-8 h-8 text-accent" />
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

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-background rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
            Our Story
          </h3>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Yene Coffee was founded with a simple mission: to bring the authentic
            taste of Ethiopian coffee to our community. We work directly with
            small-scale farmers in the Ethiopian highlands to ensure the highest
            quality beans while supporting sustainable farming practices.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            Every day, our passionate baristas craft each cup with precision and
            care. Whether you&apos;re looking for a quick pick-me-up or a place to
            spend your morning, Yene Coffee is your sanctuary.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
