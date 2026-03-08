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

import { InvestmentOrDeposit, WithContext } from 'schema-dts';

const jsonLd: WithContext<InvestmentOrDeposit> = {
  '@context': 'https://schema.org',
  '@type': 'InvestmentOrDeposit',
  name: 'Ascent Wealth - Mutual Fund Advisory Services',
  image: 'https://www.ascentwealth.in/Ascent-Wealth-logo-2.png',
  description:
    'Ascent Wealth is your trusted MF advisor, offering a progressive plan for a secured wealth creation. We specialize in Mutual Funds, Fixed Income, Insurance, NCDs, PMS and more, helping you achieve your financial goals with expert guidance.  Contact Us +91 7305953668',
  annualPercentageRate: 8.5,
  feesAndCommissionsSpecification:
    'We charge a nominal advisory fee based on the assets under management (AUM). Contact us for detailed fee structure.',
  interestRate: 8.5,
};

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

      {/* Add JSON-LD to your page */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
    </main>
  );
}
