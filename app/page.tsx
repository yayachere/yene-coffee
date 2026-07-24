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

export const metadata = {
  title: 'Yene Coffee - Ethiopian Coffee Shop',
  description:
    'Experience the finest Ethiopian coffee at Yene Coffee. Premium specialty coffee, cozy atmosphere, and authentic craftsmanship.',
};

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Features />
      <Testimonials />
      <Location />
      <CTA />
      <Footer />
    </main>
  );
}
