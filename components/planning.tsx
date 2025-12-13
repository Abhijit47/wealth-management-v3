import { plannings } from '@/constants';
import PlanningCard from './planning-card';

export default function Planning() {
  return (
    <div id='planning' className='flex items-center justify-center'>
      <div className='max-w-(--breakpoint-xl) w-full py-10 px-6'>
        <h2 className='text-4xl md:text-[2.75rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty sm:mx-auto sm:text-center'>
          Your Financial Future, Thoughtfully Planned
        </h2>
        <p className='mt-2 text-muted-foreground text-lg sm:text-xl sm:text-center'>
          Elevate your financial journey with our intuitive tools, crafted to
          empower your decisions and bring your aspirations to life.
        </p>
        <div className='mt-8 md:mt-16 w-full mx-auto space-y-20'>
          {plannings.map((plan) => (
            <PlanningCard key={plan.category} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
}
