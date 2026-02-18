'use client';
import dynamic from 'next/dynamic';
import { Skeleton } from '../ui/skeleton';

export const LazyCaclculatorDrawerDialog = dynamic(
  () => import('./caclculator-drawer-dialog').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <Skeleton className='h-10 w-full rounded-md' />,
  },
);

export const LazyRiskProfileDialog = dynamic(
  () => import('./risk-profile-dialog').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <Skeleton className='mt-6 h-8 lg:h-12 w-52 rounded-full' />,
  },
);

export const LazyConsultationDialog = dynamic(
  () => import('./consultation-dialog').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <Skeleton className='mt-6 h-8 lg:h-12 w-56 rounded-xl' />,
  },
);
