import { BlogCarousel } from './blog-carousel';
import BlogFilter from './blog-filter';

export default function Blogs() {
  return (
    <section
      id='blogs'
      className='max-w-(--breakpoint-xl) mx-auto py-16 px-6 xl:px-0 space-y-8'>
      <div className='flex items-end justify-between'>
        <h2 className='text-3xl font-semibold tracking-tight'>
          Today&apos;s Posts
        </h2>
        <BlogFilter />
      </div>

      <BlogCarousel />
    </section>
  );
}
