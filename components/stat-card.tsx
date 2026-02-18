'use client';

import SlotCounter from 'react-slot-counter';

import { stats } from '@/constants';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

export default function StatCard() {
  return (
    <div
      className={
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4'
      }>
      {stats.map((stat) => {
        const title = stat.label.split(' ').slice(-1).join(' ');
        const content = stat.label.split(' ').slice(0, -1).join(' ');

        // last child have to take full colspan
        const isLast = stat.id === stats[stats.length - 1].id;

        return (
          <div
            className={cn(
              'border rounded-xl border-border/70 p-1',
              isLast ? 'sm:col-span-full md:col-span-2 xl:col-span-1' : '',
            )}
            key={stat.id}>
            <Card className='rounded-lg bg-muted/20 h-full gap-4 p-4'>
              <CardHeader>
                <CardTitle className={'font-semibold'}>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <span className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight'>
                  <SlotCounter
                    dummyCharacterCount={10}
                    useMonospaceWidth
                    value={stat.value}
                    animateOnVisible={{
                      triggerOnce: false,
                      rootMargin: '0px 0px -100px 0px',
                    }}
                  />
                  <sup
                    className={'text-base sm:text-lg md:text-xl lg:text-2xl'}>
                    {stat.suffix}
                  </sup>
                </span>
                {/* <GradientText
                  colors={[
                    '#8a7208',
                    '#a18e39',
                    '#8a7208',
                    '#a18e39',
                    '#8a7208',
                  ]}
                  animationSpeed={3}
                  showBorder={false}
                  className='px-4'>
                  <CountUp
                    className='text-5xl font-medium'
                    delay={1}
                    enableScrollSpy={inView}
                    end={stat.value}
                    start={stat.value}
                    suffix='+'
                    redraw={inView}
                    scrollSpyDelay={5}
                    scrollSpyOnce={false}
                    startOnMount={inView}
                  />
                </GradientText> */}
              </CardContent>
              <CardContent>
                <CardDescription>
                  <p className={'font-semibold text-sm'}>{content}</p>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
