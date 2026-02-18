import { plannings } from '@/constants';
import PlanningCard from './planning-card';

export default function Planning() {
  return (
    <section id='planning' className='max-w-(--breakpoint-xl) mx-auto w-full'>
      <div className='py-10 px-6'>
        <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty sm:mx-auto sm:text-center'>
          Your Financial Future, Thoughtfully Planned
        </h2>
        <p className='mt-2 text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl sm:text-center'>
          Elevate your financial journey with our intuitive tools, crafted to
          empower your decisions and bring your aspirations to life.
        </p>
        <div className='mt-8 md:mt-16 w-full mx-auto space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16 xl:space-y-20 overflow-hidden'>
          {/* {plannings.map((plan, idx) => (
            <ScrollSectionAnimation
              direction={plan.direction as 'left' | 'right'}
              key={plan.id}>
              <PlanningCard key={plan.id} plan={plan} idx={idx} />
            </ScrollSectionAnimation>
          ))} */}
          {plannings.map((plan, idx) => (
            <PlanningCard key={plan.id} plan={plan} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
