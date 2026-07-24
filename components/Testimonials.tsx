'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Regular Customer',
    content:
      'Yene Coffee has become my sanctuary. The atmosphere is perfect for working, and the coffee? Absolutely exceptional. Every cup is a masterpiece.',
    rating: 5,
    initials: 'SJ',
  },
  {
    name: 'Marcus Chen',
    role: 'Coffee Enthusiast',
    content:
      'Finally found a place that truly understands specialty coffee. The Ethiopian beans are authentic and full of character. The baristas are incredibly knowledgeable.',
    rating: 5,
    initials: 'MC',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Local Business Owner',
    content:
      'This is where community happens. Great coffee, warm hospitality, and a space that brings people together. Highly recommended!',
    rating: 5,
    initials: 'ER',
  },
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section className="py-20 sm:py-28 bg-card">
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
            What Our Customers Say
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have made Yene Coffee their favorite spot
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 sm:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-background rounded-2xl p-8 h-full shadow-md hover:shadow-xl transition-shadow flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/80 leading-relaxed mb-6 flex-1 italic">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-foreground/60">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
