'use client';

import { motion, Variants } from 'motion/react';

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

export default function ScrollSectionAnimation({
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
