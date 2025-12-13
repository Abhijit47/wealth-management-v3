import type { WeddingCalculatorValues } from '@/lib/zod.schemas';
import { useState } from 'react';
import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from 'react-hook-form';
import { Button } from '../ui/button';
import { DialogClose, DialogFooter } from '../ui/dialog';
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
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';
import { Slider } from '../ui/slider';

export default function WeddingForm({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  const [inflationRate, setInflationRate] = useState([4]);
  const [existingInvestment, setExistingInvestment] = useState([2]);
  const [newInvestment, setNewInvestment] = useState([2]);
  const [childAge, setChildAge] = useState([0]);
  const [marriageAge, setMarriageAge] = useState([21]);

  const form = useForm<WeddingCalculatorValues>();

  const onError: SubmitErrorHandler<WeddingCalculatorValues> = (errors) => {
    console.log('Form errors:', errors);
  };

  const onSubmit: SubmitHandler<WeddingCalculatorValues> = (data) => {
    console.log('Form data:', data);
  };

  return (
    <form
      className={'space-y-4'}
      onSubmit={form.handleSubmit(onSubmit, onError)}>
      <FieldSet>
        <FieldLegend>{title}</FieldLegend>
        <FieldDescription>{desc}</FieldDescription>

        <FieldSeparator />

        <ScrollArea className='h-96 w-full'>
          <div className={'space-y-4 pl-2 pr-4 pb-4'}>
            <FieldGroup className={'grid grid-cols-1 lg:grid-cols-2 gap-4'}>
              <Field>
                <FieldLabel htmlFor='name'>Name</FieldLabel>
                <Input id='name' placeholder='ex. Evil Rabbit' />
                <FieldDescription>Enter your full name</FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor='child-name'>Child name</FieldLabel>
                <Input id='child-name' placeholder='ex. Little Rabbit' />
                <FieldDescription>Enter your child full name</FieldDescription>
              </Field>
            </FieldGroup>

            <FieldGroup className={'gap-4'}>
              <Field>
                <FieldLabel htmlFor='child-age'>Child Age</FieldLabel>
                <FieldDescription>
                  Set your children age (
                  <span className='font-medium tabular-nums'>
                    {childAge[0]}
                  </span>
                  ).
                </FieldDescription>
                <Slider
                  id='child-age'
                  value={childAge}
                  onValueChange={setChildAge}
                  max={50}
                  step={1}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor='marriage-age'>Marriage Age</FieldLabel>
                <FieldDescription>
                  Set the marriage age(
                  <span className='font-medium tabular-nums'>
                    {marriageAge[0]}
                  </span>
                  )
                </FieldDescription>
                <Slider
                  id='marriage-age'
                  value={marriageAge}
                  onValueChange={setMarriageAge}
                  max={50}
                  min={21}
                  step={1}
                />
              </Field>
            </FieldGroup>

            <FieldGroup className={'grid grid-cols-1 lg:grid-cols-2 gap-4'}>
              <Field>
                <FieldLabel htmlFor='current-cost-of-marriage'>
                  Current cost of marriage
                </FieldLabel>
                <Input id='current-cost-of-marriage' placeholder='ex. 100000' />
                <FieldDescription>
                  Enter the current cost of marriage
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor='current-investment-for-goal'>
                  Current investment for the goal
                </FieldLabel>
                <Input
                  id='current-investment-for-goal'
                  placeholder='ex. 500000'
                />
                <FieldDescription>
                  Enter the amount you have already saved for this goal
                </FieldDescription>
              </Field>
            </FieldGroup>

            <FieldGroup className={'gap-4'}>
              <Field>
                <FieldLabel htmlFor='inflation-rate'>
                  Inflation Rate (%)
                </FieldLabel>
                <FieldDescription>
                  Set inflation rate (
                  <span className='font-medium tabular-nums'>
                    {inflationRate[0]}
                  </span>
                  %)
                </FieldDescription>
                <Slider
                  id='inflation-rate'
                  value={inflationRate}
                  onValueChange={setInflationRate}
                  max={20}
                  min={4}
                  step={0.1}
                />
              </Field>

              <Field>
                <FieldLabel htmlFor='return-on-existing-investment'>
                  Return on existing investment (%)
                </FieldLabel>
                <FieldDescription>
                  Set return on your existing investment (
                  <span className='font-medium tabular-nums'>
                    {existingInvestment[0]}
                  </span>
                  %)
                </FieldDescription>
                <Slider
                  id='return-on-existing-investment'
                  value={existingInvestment}
                  onValueChange={setExistingInvestment}
                  max={13}
                  min={2}
                  step={0.1}
                />
              </Field>

              <Field>
                <FieldLabel htmlFor='return-on-new-investment'>
                  Return on new investment (%)
                </FieldLabel>
                <FieldDescription>
                  Set return on your new investment (
                  <span className='font-medium tabular-nums'>
                    {newInvestment[0]}
                  </span>
                  %)
                </FieldDescription>
                <Slider
                  id='return-on-new-investment'
                  value={newInvestment}
                  onValueChange={setNewInvestment}
                  max={13}
                  min={2}
                  step={0.1}
                />
              </Field>
            </FieldGroup>
          </div>
        </ScrollArea>
      </FieldSet>
      <Separator />
      <DialogFooter>
        <DialogClose asChild>
          <Button variant='outline'>Cancel</Button>
        </DialogClose>
        <Button type='submit'>Calculate</Button>
      </DialogFooter>
    </form>
  );
}
