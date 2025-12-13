'use client';

import { motion, type MotionProps, useScroll } from 'motion/react';

import { cn } from '@/lib/utils';

interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  ref?: React.Ref<HTMLDivElement>;
}

export function ScrollProgress({
  className,
  ref,
  ...props
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-linear-to-r from-primary via-secondary to-primary dark:from-primary dark:via-secondary dark:to-primary',
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
}
