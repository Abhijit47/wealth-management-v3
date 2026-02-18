import Blogs from '@/components/blogs';
import Calculators from '@/components/calculators';
import CompanyLogos from '@/components/company-logos';
import Contact from '@/components/contact';
import CTABanner from '@/components/cta-banner';
import { Accordion02 } from '@/components/extends/accordion-02';
import { ScrollProgress } from '@/components/extends/scroll-progress';
import Hero from '@/components/hero';
import Planning from '@/components/planning';
import Services from '@/components/services';
import Stats from '@/components/stats';
import TestimonialMarquee from '@/components/testimonial-marquee';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Planning />
      <Services />
      <Blogs />
      <Calculators />
      <CTABanner />
      <Accordion02 />
      <CompanyLogos />
      <TestimonialMarquee />
      <Contact />
      <ScrollProgress />
    </main>
  );
}
