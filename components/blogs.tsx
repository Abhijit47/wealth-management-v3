import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import { LazyBlogCarousel, LazyBlogSort } from './lazy-components';
import ResponsiveButton from './shared/responsive-button';

export default function Blogs() {
  return (
    <section
      id='blogs'
      className='max-w-(--breakpoint-xl) mx-auto w-full px-6 xl:px-0 space-y-6'>
      <div className='flex flex-wrap gap-4 items-end justify-between'>
        <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight md:ml-6'>
          Today&apos;s Posts
        </h2>
        <LazyBlogSort />
      </div>

      <LazyBlogCarousel />

      <div className={'flex items-center justify-center'}>
        <ResponsiveButton
          data-aos='fade-bottom'
          asChild
          className='rounded-full gap-2'>
          <Link scroll={true} href={'/blogs'}>
            Learn More <ArrowRightIcon />
          </Link>
        </ResponsiveButton>
      </div>
    </section>
  );
}
