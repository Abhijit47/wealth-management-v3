import {
  IconBeach,
  IconChartInfographic,
  IconConfetti,
  IconMathSymbols,
  IconTimeDuration45,
  IconTimeline,
} from '@tabler/icons-react';

export const calculators = [
  {
    icon: IconMathSymbols,
    title: 'Education Calculator',
    description:
      'Calculate education costs, plan for future learning expenses, and compare financial aid options with ease.',
  },
  {
    icon: IconChartInfographic,
    title: 'Lumpsum Calculator',
    description:
      'Calculate your total investment returns, assess risks, and optimize your portfolio for maximum gains.',
  },
  {
    icon: IconTimeline,
    title: 'SIP Calculator',
    description:
      'Plan your investments with our SIP Calculator, allowing you to estimate future returns and make informed financial decisions effortlessly.',
  },
  {
    icon: IconTimeDuration45,
    title: 'Retirement Planning',
    description:
      'Plan your retirement with our comprehensive tools, ensuring you have the resources needed for a fulfilling future.',
  },
  {
    icon: IconConfetti,
    title: 'Wedding Calculator',
    description:
      'Plan your wedding budget effectively, manage expenses, and ensure a memorable celebration without financial stress.',
  },
  {
    icon: IconBeach,
    title: 'Vacation Calculator',
    description:
      'Estimate your vacation expenses, budget effectively, and ensure a stress-free getaway with our Vacation Calculator.',
  },
] as const;

export type Calculator = (typeof calculators)[number];

export const consultationTypes = [
  'retirement-planning',
  'children-higher-education',
  'children-wedding',
  'dream-car',
  'dream-vacation',
  'other',
] as const;

// extract the unions of the consultation types
export type ConsultationType = (typeof consultationTypes)[number];
