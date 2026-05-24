import { Button } from '@/components/ui/button';
import { CheckCircle2Icon, PencilIcon, SignatureIcon } from 'lucide-react';
import Image from 'next/image';

const aboutListItems = [
  {
    id: crypto.randomUUID(),
    heading: 'Decisions were often influenced by:',
    items: [
      'Short-term market movements',
      'Scattered advice',
      'Lack of long-term clarity',
    ],
  },
  {
    id: crypto.randomUUID(),
    heading: 'The goal was to create a practice that focuses on:',
    items: [
      'Structured thinking',
      'Clear communication',
      'Disciplined execution',
    ],
  },
];

export default function AboutPage() {
  return (
    <main className={'max-w-(--breakpoint-xl) mx-auto px-4 2xl:px-0 space-y-8'}>
      <section
        className={
          'aspect-video md:aspect-26/9 w-full h-full flex items-center justify-center border-border border-2 border-dashed mt-24'
        }>
        BANNER/ breadcrumb
      </section>

      <section className={'grid grid-cols-3 gap-4'}>
        <div
          className={
            'col-span-full md:col-span-1 relative aspect-square w-full h-full'
          }>
          <Image
            src='https://placehold.co/600x1200/png?text=Founder+Image'
            alt='founder'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className={'object-cover rounded-tl-2xl rounded-br-2xl'}
          />
        </div>
        <div className={'col-span-full md:col-span-2 space-y-4 py-6'}>
          <h2 className={'text-3xl font-bold text-primary'}>
            <PencilIcon className={'inline-block w-6 h-6 mr-2'} />
            Founder’s Note
          </h2>

          <h3 className={'text-muted-foreground text-2xl font-semibold'}>
            Ascent Wealth was built on a simple observation.
          </h3>
          <p className={'text-muted-foreground'}>
            People were earning well and saving regularly, yet many still felt
            unsure about their financial direction. There was no shortage of
            products. But there was a lack of structure.
          </p>

          <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
            {aboutListItems.map((list) => (
              <div key={list.id} className={'space-y-2'}>
                <p className={'text-muted-foreground text-base font-semibold'}>
                  {list.heading}
                </p>
                <ul className={'space-y-2'}>
                  {list.items.map((item) => (
                    <li
                      key={item}
                      className={
                        'group flex items-center gap-2 transition-colors duration-200 hover:cursor-pointer'
                      }>
                      <CheckCircle2Icon
                        className={
                          'size-4 md:size-5 group-hover:stroke-chart-1 dark:group-hover:stroke-primary group-hover:cursor-pointer'
                        }
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* <div>
              <p className={'text-muted-foreground text-base font-semibold'}>
                Decisions were often influenced by:
              </p>
              <ul className={'group'}>
                <li
                  className={
                    'flex items-center gap-2 group-hover:cursor-pointer'
                  }>
                  <CheckCircle2Icon
                    className={
                      'size-4 group-hover:stroke-primary transition-colors duration-200'
                    }
                  />
                  Short-term market movements
                </li>
                <li
                  className={
                    'flex items-center gap-2 group-hover:cursor-pointer'
                  }>
                  <CheckCircle2Icon
                    className={
                      'size-4 group-hover:stroke-primary transition-colors duration-200'
                    }
                  />
                  Scattered advice
                </li>
                <li
                  className={
                    'flex items-center gap-2 group-hover:cursor-pointer'
                  }>
                  <CheckCircle2Icon
                    className={
                      'size-4 group-hover:stroke-primary transition-colors duration-200'
                    }
                  />
                  Lack of long-term clarity
                </li>
              </ul>
            </div>

            <div>
              <p className={'text-muted-foreground text-base font-semibold'}>
                The goal was to create a practice that focuses on:
              </p>
              <ul className={'list-[upper-roman] list-inside'}>
                <li>Structured thinking</li>
                <li>Clear communication</li>
                <li>Disciplined execution</li>
              </ul>
            </div> */}
          </div>

          <p className={'text-muted-foreground'}>
            Over the last decade, working with 150+ clients, the approach has
            remained the same. Not chasing complexity, but building consistency.
            Because in the long run, disciplined decisions tend to matter more
            than perfect ones.
          </p>

          <div className={'inline-flex items-center gap-2'}>
            <SignatureIcon className={'size-6'} />
            <p
              className={
                'text-muted-foreground text-lg font-medium underline decoration-dotted underline-offset-2'
              }>
              Ascent Wealth
            </p>
          </div>
        </div>
      </section>

      <section className={'h-dvh w-full border-border border-2 border-dashed'}>
        {/* Our Approach
Start With You
Every plan begins with understanding:
your goals
your financial position
your risk comfort
Build With Structure
We focus on:
goal-based investing
disciplined allocation
long-term thinking
Keep It Simple
You should always know:
what you are doing
why you are doing it
Stay Consistent
We prioritise consistency over constant changes driven by market movement. */}
        Our Approach Start With You Every plan begins with understanding: your
        goals your financial position your risk comfort Build With Structure We
        focus on: goal-based investing disciplined allocation long-term thinking
        Keep It Simple You should always know: what you are doing why you are
        doing it Stay Consistent We prioritise consistency over constant changes
        driven by market movement.
      </section>

      <section className={'h-dvh w-full border-border border-2 border-dashed'}>
        {/* What We Do
We support clients across:
Mutual fund investments
Fixed income solutions
Insurance planning
Long-term financial structuring
Portfolio review and tracking
Our role is to bring all of this together into a clear and manageable plan. */}
        What We Do We support clients across: Mutual fund investments Fixed
        income solutions Insurance planning Long-term financial structuring
        Portfolio review and tracking Our role is to bring all of this together
        into a clear and manageable plan.
      </section>

      <section className={'grid grid-cols-4 gap-4'}>
        <div className={'col-span-full lg:col-span-2 space-y-4 py-6'}>
          <h2 className={'text-3xl font-bold text-primary'}>Who We Are</h2>
          <p>
            At Ascent Wealth, we help individuals and families bring structure
            and clarity to their financial lives. With over{' '}
            <strong>10 years of experience</strong> and{' '}
            <strong>150+ clients served</strong>, our work is built on
            consistency, not noise. We focus on simplifying financial decisions
            so clients can move forward with confidence. We believe wealth is
            not just about returns. It is about clarity, discipline, and
            long-term alignment.
          </p>

          <div className={'grid grid-cols-1 lg:grid-cols-2 gap-4'}>
            <div>
              <h3 className={'font-3xl font-bold'}>Our Mission</h3>
              <p className={'text-muted-foreground'}>
                To help individuals make informed financial decisions through
                structured, goal-based planning. We aim to simplify investing so
                that people can focus less on market noise and more on steady
                progress.
              </p>
            </div>
            <div>
              <h3 className={'font-3xl font-bold'}>Our Vision</h3>
              <p className={'text-muted-foreground'}>
                To build a trusted financial services practice where advice is
                clear, processes are transparent, and relationships are
                long-term.
              </p>
            </div>
          </div>

          <Button className={'mt-4'}>Learn More</Button>
        </div>
        <div className={'col-span-full lg:col-span-2 w-full h-full'}>
          <div className={'grid grid-cols-12 gap-4 w-full h-full'}>
            <div
              className={
                'col-start-1 col-end-4 col-span-full row-start-1 row-end-6 row-span-full pb-12'
              }>
              <Image
                src='https://placehold.co/300x600/png?text=some+other+image+1'
                alt='founder'
                width={300}
                height={600}
                // fill
                // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className={
                  'object-cover rounded-tl-3xl rounded-br-3xl h-full w-full'
                }
              />
            </div>

            <div
              className={
                'col-start-4 row-start-1 row-end-6 row-span-full col-end-13 col-span-full grid-span-12'
              }>
              <Image
                src='https://placehold.co/600x600/png?text=some+other+image+2'
                alt='founder'
                width={600}
                height={600}
                // fill
                // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className={
                  'object-cover rounded-tl-3xl rounded-br-3xl w-full h-full '
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className={'h-dvh w-full border-border border-2 border-dashed'}>
        CTA
      </section>
    </main>
  );
}
