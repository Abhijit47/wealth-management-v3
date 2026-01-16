'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from './ui/skeleton';

export const LazyLocationDialog = dynamic(() => import('./location-dialog'), {
  loading: () => <Skeleton className='w-44 rounded-full h-11 animate-pulse' />,
  ssr: false,
});

export const LazyBrochureDownload = dynamic(() => import('./brochure-dialog'), {
  loading: () => <Skeleton className='w-48 rounded-full h-11 animate-pulse' />,
  ssr: false,
});
