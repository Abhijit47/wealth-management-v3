import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AMFI Registered Mutual Funds Distributor and Your Path to Prosperity Starts Here',
    short_name: 'Ascent Wealth',
    description:
      'Ascent Wealth is your trusted MF advisor, offering a progressive plan for a secured wealth creation. We specialize in Mutual Funds, Fixed Income, Insurance, NCDs, PMS and more, helping you achieve your financial goals with expert guidance.  Contact Us +91 7305953668',
    start_url: '/',
    display: 'standalone',
    background_color: 'oklch(0.98 0.005 93.87967943941892)',
    theme_color:
      'oklch(0.4999999999999999 0.0673906414798935 93.87967943941892)',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
    categories: ['finance', 'business', 'productivity'],
    launch_handler: {
      client_mode: ['focus-existing', 'auto'],
    },
  };
}
