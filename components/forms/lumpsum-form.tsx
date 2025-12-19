import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import type { LumpSumCalculatorValues } from '@/lib/zod.schemas';
import { useState } from 'react';
import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from 'react-hook-form';
import { Button } from '../ui/button';
import { DialogClose, DialogFooter } from '../ui/dialog';
import { DrawerClose, DrawerFooter } from '../ui/drawer';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '../ui/field';
import { Input } from '../ui/input';
import { Separator } from '../ui/separator';
import { Slider } from '../ui/slider';

export default function LumpsumForm({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  const [noOfYears, setNoOfYears] = useState([0]);
  const [expectedReturn, setExpectedReturn] = useState([2]);

  const isDesktop = useMediaQuery('(min-width: 768px)');

  const form = useForm<LumpSumCalculatorValues>();

  const onError: SubmitErrorHandler<LumpSumCalculatorValues> = (errors) => {
    console.log('Form errors:', errors);
  };

  const onSubmit: SubmitHandler<LumpSumCalculatorValues> = (data) => {
    console.log('Form data:', data);
  };

  return (
    <form
      className={'space-y-4'}
      onSubmit={form.handleSubmit(onSubmit, onError)}>
      <FieldSet className={'pb-2'}>
        <FieldLegend className={cn(isDesktop ? '' : 'sr-only')}>
          {title}
        </FieldLegend>
        <FieldDescription className={cn(isDesktop ? '' : 'sr-only')}>
          {desc}
        </FieldDescription>

        {isDesktop ? <FieldSeparator /> : null}

        <FieldGroup className={'grid grid-cols-1 lg:grid-cols-2 gap-4'}>
          <Field>
            <FieldLabel htmlFor='name'>Name</FieldLabel>
            <Input id='name' placeholder='ex. Evil Rabbit' />
            <FieldDescription>Enter your full name</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor='investment-amount'>
              Investment amount
            </FieldLabel>
            <Input id='investment-amount' placeholder='ex. 10000' />
            <FieldDescription>
              Enter the amount you plan to invest as a lump sum
            </FieldDescription>
          </Field>
        </FieldGroup>

        <FieldGroup className={'gap-4'}>
          <Field>
            <FieldLabel htmlFor='no-of-years'>No. of years</FieldLabel>
            <FieldDescription>
              Set the number of years you plan to invest (
              <span className='font-medium tabular-nums'>{noOfYears[0]}</span>)
            </FieldDescription>
            <Slider
              id='no-of-years'
              value={noOfYears}
              onValueChange={setNoOfYears}
              max={50}
              step={1}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor='expected-return'>Expected Return</FieldLabel>
            <FieldDescription>
              Set expected return rate (
              <span className='font-medium tabular-nums'>
                {expectedReturn[0]}
              </span>
              %)
            </FieldDescription>
            <Slider
              id='higher-education-age'
              value={expectedReturn}
              onValueChange={setExpectedReturn}
              max={13}
              min={2}
              step={1}
            />
          </Field>
        </FieldGroup>
      </FieldSet>

      <Separator />

      {!isDesktop ? (
        <DrawerFooter className='pt-2'>
          <Button type='submit'>Calculate</Button>
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      ) : (
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DialogClose>
          <Button type='submit'>Calculate</Button>
        </DialogFooter>
      )}
    </form>
  );
}
