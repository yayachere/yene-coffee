'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const galleryImages = [
  {
    src: '/gallery-ceremony.png',
    alt: 'Traditional Ethiopian coffee ceremony',
    size: 'col-span-2 row-span-1 md:col-span-1',
  },
  {
    src: '/gallery-wolaita-cafe.png',
    alt: 'Wolaita Sodo local cafe',
    size: 'col-span-2 row-span-1 md:col-span-1',
  },
  {
    src: '/gallery-ethiopian-beans.png',
    alt: 'Ethiopian coffee beans',
    size: 'col-span-2 row-span-1 md:col-span-1',
  },
  {
    src: '/gallery-barista-prep.png',
    alt: 'Expert barista preparing coffee',
    size: 'col-span-2 row-span-1 md:col-span-1',
  },
  {
    src: '/gallery-community.png',
    alt: 'Community gathering at Yene Coffee',
    size: 'col-span-2 row-span-1 md:col-span-1',
  },
  {
    src: '/gallery-wolaita-landscape.png',
    alt: 'Wolaita Sodo landscape',
    size: 'col-span-2 row-span-1 md:col-span-1',
  },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-card">
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
            {t.gallery.title}
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[300px] sm:auto-rows-[400px]"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`${image.size} group relative overflow-hidden rounded-2xl cursor-pointer bg-muted`}
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: selectedImage ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setSelectedImage(null)}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm ${
          selectedImage ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {selectedImage && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl max-h-screen w-11/12 h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Gallery image"
              width={1200}
              height={800}
              className="w-full h-auto rounded-2xl"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-3 bg-background rounded-full hover:bg-accent transition-colors shadow-lg"
            >
              <X className="w-6 h-6 text-foreground" />
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
