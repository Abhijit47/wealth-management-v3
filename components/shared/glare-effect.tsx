import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

type GlareEffectProps = PropsWithChildren<{
  children: React.ReactNode;
  className?: string;
}>;

export default function GlareEffect({ children, className }: GlareEffectProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden after:absolute after:top-0 after:-left-full after:z-10 after:h-full after:w-1/2 after:skew-x-[-25deg] after:bg-linear-to-r after:from-transparent after:via-primary/20 after:to-transparent after:transition-all after:duration-1000 hover:after:left-[120%] hover:cursor-grab w-full h-full',
        className ? className : '',
      )}>
      {children}
    </div>
  );
}
