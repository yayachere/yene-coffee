'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="overflow-x-clip bg-background text-foreground">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Features />
        <Testimonials />
        <Location />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
