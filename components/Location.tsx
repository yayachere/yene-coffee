'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Location() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      label: t.location.address,
      value: t.location.address,
      href: '#',
    },
    {
      icon: Phone,
      label: t.location.phone.split(':')[0],
      value: t.location.phone.split(':')[1]?.trim() || t.location.phone,
      href: 'tel:' + t.location.phone.replace(/\D/g, ''),
    },
    {
      icon: Mail,
      label: t.location.email.split(':')[0],
      value: t.location.email.split(':')[1]?.trim() || t.location.email,
      href: 'mailto:' + (t.location.email.split(':')[1]?.trim() || t.location.email),
    },
    {
      icon: Clock,
      label: t.location.hours.split(':')[0],
      value: t.location.hours.split(':')[1]?.trim() || t.location.hours,
      href: '#',
    },
  ];

  return (
    <section id="location" className="py-20 sm:py-28 bg-background">
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
            {t.location.title}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t.location.description}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid min-w-0 lg:grid-cols-2 gap-8 sm:gap-12 items-stretch">
          {/* Left - Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="min-w-0 flex flex-col justify-center"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-card transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-foreground text-lg mb-1">
                      {item.label}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-accent transition-colors text-center"
              >
                {t.location.getDirections}
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={'tel:' + t.location.phone.replace(/\D/g, '')}
                className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-colors text-center"
              >
                {t.location.callNow}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="min-w-0 max-w-full rounded-2xl overflow-hidden shadow-lg h-96 lg:h-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-73.9857!3d40.6976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzUzLjQiTiA3M8KwNTknMDguMCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              className="block max-w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
