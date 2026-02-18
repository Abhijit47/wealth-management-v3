'use client';

import { motion, Variants } from 'motion/react';
import { Card } from './ui/card';

const cards = [
  {
    id: 'growth',
    label: 'Strategic Growth',
    description: 'Animates from left when it enters the viewport.',
    tone: 'from-red-400 to-rose-500',
    direction: 'left',
  },
  {
    id: 'insights',
    label: 'Insightful Decisions',
    description: 'Animates from right when it enters the viewport.',
    tone: 'from-blue-500 to-sky-500',
    direction: 'right',
  },
  {
    id: 'partnership',
    label: 'Trusted Partnership',
    description: 'Animates from left when it enters the viewport.',
    tone: 'from-amber-400 to-yellow-300',
    direction: 'left',
  },
];

const slideVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === 'left' ? -550 : 550,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
} as Variants;

export function ScrollAnimations({
  children,
  direction = 'left',
}: {
  children?: React.ReactNode;
  direction?: 'left' | 'right';
}) {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      transition={{ type: 'spring' }}
      viewport={{ amount: 0.3, once: false }}
      variants={slideVariants}
      custom={direction}>
      {children}
    </motion.div>
  );
}

export function TestMotion() {
  return (
    <div className={'max-w-7xl mx-auto space-y-24 overflow-hidden'}>
      {cards.map((card) => (
        <ScrollAnimations
          direction={card.direction as 'left' | 'right'}
          key={card.id}>
          <Card>
            <div
              className={`bg-linear-to-r ${card.tone} p-6 rounded-lg text-white`}>
              <h3 className='text-xl font-semibold mb-2'>{card.label}</h3>
              <p>{card.description}</p>
            </div>
          </Card>
        </ScrollAnimations>
      ))}
    </div>
  );
}
