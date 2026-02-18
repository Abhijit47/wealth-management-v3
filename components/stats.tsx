import { Blockquote, BlockquoteAuthor } from './extends/blockquote';
import { LazyStatCard } from './lazy-components';

export default function Stats() {
  return (
    <section className='max-w-(--breakpoint-xl) mx-auto w-full py-12 sm:py-16 md:py-20 lg:py-24 px-6'>
      <div className='text-center space-y-4 md:space-y-6 lg:space-y-8'>
        <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tighter'>
          Why Should You Choose Us?
        </h2>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground'>
          Because after switching to us...
        </p>

        <Blockquote>
          When a management with a reputation for brilliance, tackles a business
          with a reputation for bad economics, it is the reputation of the
          business that remains intact...
          <BlockquoteAuthor>Warren Buffett</BlockquoteAuthor>
        </Blockquote>

        <LazyStatCard />
      </div>
    </section>
  );
}
