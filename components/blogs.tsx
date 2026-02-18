import BlogFilter from './blog-filter';
import { LazyBlogCarousel } from './lazy-components';

export default function Blogs() {
  return (
    <section
      id='blogs'
      className='max-w-(--breakpoint-xl) mx-auto w-full px-6 xl:px-0'>
      <div className='flex flex-wrap gap-4 items-end justify-between'>
        <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight'>
          Today&apos;s Posts
        </h2>
        <BlogFilter />
      </div>

      <LazyBlogCarousel />
    </section>
  );
}
