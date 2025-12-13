'use client';

import { useCycle } from '@/hooks/use-cycle';
import { useRootClick } from '@/hooks/use-root-click';
import NumberFlow, { type Value } from '@number-flow/react';
// import { useCycle } from 'motion/react';

const values: Value[] = [543, 12000, -3200];
export default function Stats() {
  'use no memo';
  const [value, cycleValue] = useCycle(values);

  useRootClick(cycleValue);
  return (
    <div className='flex items-center justify-center'>
      <div className='max-w-(--breakpoint-xl) mx-auto py-12 text-center'>
        <h2 className='text-4xl md:text-5xl font-semibold tracking-tighter'>
          Why Should You Choose Us?
        </h2>
        <p className='mt-4 text-xl text-muted-foreground'>
          Because after switching to us...
        </p>

        <div className='mt-16 sm:mt-24 grid sm:grid-cols-2 lg:grid-cols-5 gap-x-12 gap-y-16 justify-center'>
          <div className='max-w-3xs'>
            <NumberFlow
              className='text-5xl font-semibold'
              value={52}
              format={{ style: 'percent', maximumFractionDigits: 0 }}
              isolate={false}
              willChange={true}
              suffix='+'
            />
            <p className='mt-6 text-lg'>
              of customers say they increased revenue
            </p>
          </div>
          {/* <div className='max-w-3xs'>
            <span className='text-5xl font-semibold'>96%</span>
            <p className='mt-6 text-lg'>
              of customers say they have a better brand experience
            </p>
          </div> */}
          <div className='max-w-3xs'>
            <span className='text-5xl font-semibold'>95%</span>
            <p className='mt-6 text-lg'>
              of customers say they gather more data, more easily
            </p>
          </div>
          <div className='max-w-3xs'>
            <span className='text-5xl font-semibold'>87%</span>
            <p className='mt-6 text-lg'>
              of customers say they reveal deeper insights from data
            </p>
          </div>
          <div className='max-w-3xs'>
            <span className='text-5xl font-semibold'>87%</span>
            <p className='mt-6 text-lg'>
              of customers say they reveal deeper insights from data
            </p>
          </div>
          <div className='max-w-3xs col-span-full sm:col-span-1 lg:col-span-1'>
            <span className='text-5xl font-semibold'>87%</span>
            <p className='mt-6 text-lg'>
              of customers say they reveal deeper insights from data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
