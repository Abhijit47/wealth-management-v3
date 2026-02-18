'use client';

import * as React from 'react';

import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '../ui/button';

type ResponsiveButtonProps = React.ComponentProps<typeof Button>;

export default function ResponsiveButton({ ...props }: ResponsiveButtonProps) {
  const isMobile = useIsMobile();

  return <Button size={isMobile ? 'sm' : 'lg'} {...props} />;
}
