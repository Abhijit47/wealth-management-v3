import { LazyStatCard } from './stat-card';

export default function Stats() {
  return (
    <section className='max-w-(--breakpoint-xl) mx-auto'>
      <div className=' py-12 text-center'>
        <h2 className='text-4xl md:text-5xl font-semibold tracking-tighter'>
          Why Should You Choose Us?
        </h2>
        <p className='mt-4 text-xl text-muted-foreground'>
          Because after switching to us...
        </p>

        <blockquote className='mt-10 border-l-4 pl-4 italic text-lg text-muted-foreground'>
          <p>
            “When a management with a reputation for brilliance, tackles a
            business with a reputation for bad economics, it is the reputation
            of the business that remains intact” — Warren Buffett
          </p>
        </blockquote>

        <LazyStatCard />
      </div>
    </section>
  );
}
