import Blog from '@/components/blog';
import Calculators from '@/components/calculators';
import Contact from '@/components/contact';
import CTABanner from '@/components/cta-banner';
import { ScrollProgress } from '@/components/extends/scroll-progress';
import FAQ from '@/components/faq';
import Flows from '@/components/flows';
import Hero from '@/components/hero';
import LogoCloud from '@/components/logo-cloud';
import { MarqueeDemo } from '@/components/reviews';
import Services from '@/components/services';
import Stats from '@/components/stats';
import Testimonials from '@/components/testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Flows />
      <Services />
      <Blog />
      <Calculators />
      <CTABanner />
      <FAQ />
      <Testimonials />
      <Contact />
      <LogoCloud />
      <MarqueeDemo />

      <ScrollProgress />
    </main>
  );
}
