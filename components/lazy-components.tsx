'use client';

import dynamic from 'next/dynamic';

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
} from './ui/card';
import { Skeleton } from './ui/skeleton';

export const LazyStatCard = dynamic(() => import('./stat-card'), {
  ssr: false,
  loading: () => (
    <div className='mt-16 sm:mt-24 grid sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-center'>
      {Array.from({ length: 5 }).map((_, index) => (
        <Card key={index}>
          <CardContent>
            <Skeleton className='h-12 w-full mb-4' />
          </CardContent>
          <CardDescription>
            <Skeleton className='h-4 w-3/4 mx-auto mb-2' />
          </CardDescription>
        </Card>
      ))}
    </div>
  ),
});

export const LazyBlogCarousel = dynamic(
  () => import('./blog-carousel').then((mod) => mod.BlogCarousel),
  {
    ssr: false,
    loading: () => {
      return (
        <div
          className={
            'px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
          }>
          {Array.from({ length: 3 }).map(() => (
            <Card key={crypto.randomUUID()} className='shadow-none py-0 gap-3'>
              <CardHeader className='p-2 pb-0'>
                <Skeleton className='aspect-video w-full rounded-lg' />
              </CardHeader>
              <CardContent className='pt-0 pb-5 px-5'>
                <div className='flex flex-wrap gap-2 line-clamp-1'>
                  {Array.from({ length: 3 }).map((category, index) => (
                    <Skeleton key={index} className='h-4 w-20 rounded-full' />
                  ))}
                </div>

                <Skeleton className='mt-4 h-4 w-full' />

                <CardAction className={'mt-4'}>
                  <Skeleton className='h-4 w-24 rounded-full' />
                </CardAction>

                <div className='mt-6 flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <Skeleton className='h-6 w-6 rounded-full' />
                    <Skeleton className='h-4 w-20 rounded-full' />
                  </div>

                  <span className='text-muted-foreground text-xs'>
                    <Skeleton className='h-4 w-24 rounded-full' />
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      );
    },
  }
);
