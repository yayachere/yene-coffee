'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Menu() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(0);

  // Group menu items by category
  const menuItemsByCategory = [
    {
      category: t.menu.categories.coffee,
      items: t.menu.items.filter((item) => item.category === 'coffee'),
    },
    {
      category: t.menu.categories.coldDrinks,
      items: t.menu.items.filter((item) => item.category === 'coldDrinks'),
    },
    {
      category: t.menu.categories.snacks,
      items: t.menu.items.filter((item) => item.category === 'snacks'),
    },
  ];

  // Map default images for items
  const getImageForItem = (name: string, category: string) => {
    if (category === 'coffee') {
      if (name.toLowerCase().includes('espresso') || name.toLowerCase().includes('macchiato')) {
        return '/menu-espresso.png';
      }
      if (name.toLowerCase().includes('cappuccino') || name.toLowerCase().includes('mocha')) {
        return '/menu-cappuccino.png';
      }
      if (name.toLowerCase().includes('latte')) {
        return '/menu-latte.png';
      }
    } else if (category === 'coldDrinks') {
      return '/water_menu2.jpg';
    } else {
      return '/chips_menu.jpg';
    }
    return '/coffee_menu.jpg';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="menu" className="py-20 sm:py-28 bg-background">
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
            {t.menu.title}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t.menu.description}
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {menuItemsByCategory.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === index
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card border-2 border-primary/20 text-foreground hover:border-primary'
              }`}
            >
              {category.category}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={selectedCategory}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {menuItemsByCategory[selectedCategory].items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={item.href}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    {item.name}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-4 flex-1">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-accent/20 rounded-full text-accent hover:bg-accent hover:text-primary transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </motion.button>
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
