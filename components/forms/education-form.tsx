import type { EducationCalculatorValues } from '@/lib/zod.schemas';
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

export default function EducationForm({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  const [childAge, setChildAge] = useState([0]);
  const [higherEducationAge, setHigherEducationAge] = useState([18]);
  const [inflationRate, setInflationRate] = useState([4]);
  const [existingInvestment, setExistingInvestment] = useState([2]);
  const [newInvestment, setNewInvestment] = useState([2]);

  const form = useForm<EducationCalculatorValues>();

  const onError: SubmitErrorHandler<EducationCalculatorValues> = (errors) => {
    console.log('Form errors:', errors);
  };

  const onSubmit: SubmitHandler<EducationCalculatorValues> = (data) => {
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
                <FieldLabel htmlFor='higher-education-age'>
                  Higher education age
                </FieldLabel>
                <FieldDescription>
                  Set higher education age(
                  <span className='font-medium tabular-nums'>
                    {higherEducationAge[0]}
                  </span>
                  ).
                </FieldDescription>
                <Slider
                  id='higher-education-age'
                  value={higherEducationAge}
                  onValueChange={setHigherEducationAge}
                  max={50}
                  min={18}
                  step={1}
                />
              </Field>
            </FieldGroup>

            <FieldGroup className={'grid grid-cols-1 lg:grid-cols-2 gap-4'}>
              <Field>
                <FieldLabel htmlFor='current-cost'>
                  Current cost of higher education
                </FieldLabel>
                <Input
                  id='current-cost'
                  placeholder='e.g., 25,00,000'
                  required
                />
                <FieldDescription>
                  Provide details about current education cost
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor='current-investment'>
                  Current investment for the goal
                </FieldLabel>
                <Input
                  id='current-investment'
                  placeholder='e.g., 5,00,000'
                  required
                />
                <FieldDescription>
                  Provide details about your current investment
                </FieldDescription>
              </Field>
            </FieldGroup>

            <FieldGroup className={'gap-4'}>
              <Field>
                <FieldLabel htmlFor='inflation-rate'>Inflation Rate</FieldLabel>
                <FieldDescription>
                  Set inflation rate for education cost (
                  <span className='font-medium tabular-nums'>
                    {inflationRate[0]}
                  </span>
                  %)
                </FieldDescription>
                <Slider
                  id='inflation-rate'
                  value={inflationRate}
                  onValueChange={setInflationRate}
                  max={15}
                  min={4}
                  step={0.1}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor='existing-investment'>
                  Return on existing investment
                </FieldLabel>
                <FieldDescription>
                  Set return on your existing investment (
                  <span className='font-medium tabular-nums'>
                    {existingInvestment[0]}
                  </span>
                  %)
                </FieldDescription>
                <Slider
                  id='existing-investment'
                  value={existingInvestment}
                  onValueChange={setExistingInvestment}
                  max={13}
                  min={2}
                  step={0.1}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor='new-investment'>
                  Return on new investment
                </FieldLabel>
                <FieldDescription>
                  Set return on your new investment (
                  <span className='font-medium tabular-nums'>
                    {newInvestment[0]}
                  </span>
                  %)
                </FieldDescription>
                <Slider
                  id='new-investment'
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
