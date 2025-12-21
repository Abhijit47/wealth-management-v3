'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import { stats } from '@/constants';
import GradientText from './extends/gradient-text';
import { Card, CardContent, CardDescription } from './ui/card';

export default function StatCard() {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: '20px',
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className='mt-16 sm:mt-24 grid sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-center'>
      {stats.map((stat) => (
        <Card key={stat.id}>
          <CardContent>
            <GradientText
              colors={['#8a7208', '#a18e39', '#8a7208', '#a18e39', '#8a7208']}
              animationSpeed={5}
              showBorder={false}
              className='px-4'>
              <CountUp
                className='text-5xl font-medium'
                delay={2}
                enableScrollSpy={inView}
                end={stat.value}
                start={0}
                suffix='+'
                redraw={inView}
                scrollSpyDelay={100}
                scrollSpyOnce={false}
                startOnMount={true}
              />
            </GradientText>
          </CardContent>

          <CardDescription>
            <p className='text-base text-muted-foreground font-semibold'>
              {stat.label}
            </p>
          </CardDescription>
        </Card>
      ))}
    </div>
  );
}
