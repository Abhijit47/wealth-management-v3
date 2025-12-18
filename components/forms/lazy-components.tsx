'use client';
import dynamic from 'next/dynamic';
import { Skeleton } from '../ui/skeleton';

export const LazyCaclculatorDrawerDialog = dynamic(
  () => import('./caclculator-drawer-dialog').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <Skeleton className='h-10 w-full rounded-md' />,
  }
);
