'use client';

import { allPosts } from 'content-collections';
import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useState } from 'react';

import { useDotButton } from '@/hooks/use-dot-button';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

import BlogCard from './blog-card';
import { Card, CardContent } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

const OPTIONS: EmblaOptionsType = {};

const isDev = process.env.NODE_ENV === 'development';

export function BlogCarousel() {
  const [api, setApi] = useState<EmblaCarouselType>();
  // const plugins = useMemo(
  //   () => (isDev ? undefined : [Autoplay({ playOnInit: true })]),
  //   []
  // );

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const isDesktop = useMediaQuery('(min-width: 768px)');

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    api,
    onNavButtonClick
  );

  return (
    <Carousel
      setApi={setApi}
      opts={OPTIONS}
      plugins={isDev ? undefined : [Autoplay({ playOnInit: true })]}
      className='w-full'>
      <CarouselContent className='-ml-1'>
        {allPosts.map((post, index) => (
          <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
            <div className='p-1'>
              <Card className={'p-0'}>
                <CardContent className='p-0'>
                  <BlogCard i={index} post={post} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {isDesktop && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}

      <div className='mt-4 flex justify-center gap-3 py-4'>
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type='button'
            onClick={() => onDotButtonClick(index)}
            className={cn(
              'size-2 lg:size-3 rounded-full transition-colors delay-150 duration-300 ease-linear',
              index === selectedIndex
                ? 'bg-primary outline-primary outline-2 outline-offset-2 outline-dotted'
                : 'bg-secondary outline-muted-foreground outline-2 outline-offset-2 outline-dotted'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  );
}
