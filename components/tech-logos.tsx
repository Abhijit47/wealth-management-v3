import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from '@tabler/icons-react';
import LogoLoop from './logo-loop';

const techLogos = [
  { node: <IconBrandReact />, title: 'React', href: 'https://react.dev' },
  { node: <IconBrandNextjs />, title: 'Next.js', href: 'https://nextjs.org' },
  {
    node: <IconBrandTypescript />,
    title: 'TypeScript',
    href: 'https://www.typescriptlang.org',
  },
  {
    node: <IconBrandTailwind />,
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
  },
];

// Alternative with image sources
// eslint-disable-next-line
const imageLogos = [
  {
    src: '/logos/company1.png',
    alt: 'Company 1',
    href: 'https://company1.com',
  },
  {
    src: '/logos/company2.png',
    alt: 'Company 2',
    href: 'https://company2.com',
  },
  {
    src: '/logos/company3.png',
    alt: 'Company 3',
    href: 'https://company3.com',
  },
];

export default function TechLogos() {
  return (
    <div
      className={'h-36 bg-accent relative overflow-hidden'}
      // style={{ height: '200px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction='left'
        logoHeight={120}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor='#8a7208'
        ariaLabel='Technology partners'
        className={'h-full'}
      />

      {/* Vertical loop with deceleration on hover */}
      {/* <LogoLoop
          logos={techLogos}
          speed={80}
          direction='up'
          logoHeight={48}
          gap={40}
          hoverSpeed={20}
          fadeOut
        /> */}
    </div>
  );
}
