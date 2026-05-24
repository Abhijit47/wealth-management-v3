import { allPosts } from '@/.content-collections/generated';
import BlogCard from '@/components/blog-card';
import { LazyBlogSort } from '@/components/lazy-components';

export default function BlogsPage(props: PageProps<'/blogs'>) {
  const sortedPosts = allPosts.sort((a, b) => {
    // sort by createdAt: string;
    // if (sortOrder === 'asc') {
    //   return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    // } else {
    //   return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    // }
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <main
      className={
        'max-w-(--breakpoint-xl) mx-auto px-4 2xl:px-0 space-y-8 pb-12 sm:pb-16 md:pb-20 lg:pb-24'
      }>
      <section
        className={
          'aspect-video md:aspect-26/9 xl:aspect-30/9 w-full h-full flex items-center justify-center border-border border-2 border-dashed mt-24'
        }>
        BANNER/ breadcrumb
      </section>

      <section className={'space-y-6'}>
        <div className='flex flex-wrap gap-4 items-end justify-between'>
          <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight'>
            Our Latest Posts
          </h2>
          <LazyBlogSort />
        </div>
        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
          {sortedPosts.map((post, index) => (
            <div key={index} className=''>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
