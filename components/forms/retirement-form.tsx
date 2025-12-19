import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import type { RetirementCalculatorValues } from '@/lib/zod.schemas';
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
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';
import { Slider } from '../ui/slider';

export default function RetirementForm({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  const [currentAge, setCurrentAge] = useState([1]);
  const [retirementAge, setRetirementAge] = useState([18]);
  const [lifeExpectancy, setLifeExpectancy] = useState([18]);
  const [postRetirementInflationRate, setPostRetirementInflationRate] =
    useState([4]);
  const [postRetirementRiskFreeRate, setPostRetirementRiskFreeRate] = useState([
    2,
  ]);
  const [inflationRate, setInflationRate] = useState([4]);
  const [existingInvestment, setExistingInvestment] = useState([2]);
  const [newInvestment, setNewInvestment] = useState([2]);

  const isDesktop = useMediaQuery('(min-width: 768px)');

  const form = useForm<RetirementCalculatorValues>();

  const onError: SubmitErrorHandler<RetirementCalculatorValues> = (errors) => {
    console.log('Form errors:', errors);
  };

  const onSubmit: SubmitHandler<RetirementCalculatorValues> = (data) => {
    console.log('Form data:', data);
  };

  return (
    <form
      className={'space-y-4'}
      onSubmit={form.handleSubmit(onSubmit, onError)}>
      <FieldSet>
        <FieldLegend className={cn(isDesktop ? '' : 'sr-only')}>
          {title}
        </FieldLegend>
        <FieldDescription className={cn(isDesktop ? '' : 'sr-only')}>
          {desc}
        </FieldDescription>

        {isDesktop ? <FieldSeparator /> : null}

        <ScrollArea className='h-96 w-full'>
          <div className={'space-y-4 pl-2 pr-4 pb-4'}>
            <FieldGroup className={'grid grid-cols-1 lg:grid-cols-2 gap-4'}>
              <Field>
                <FieldLabel htmlFor='name'>Name</FieldLabel>
                <Input id='name' placeholder='ex. Evil Rabbit' />
                <FieldDescription>Enter your full name</FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor='current-expenses'>
                  Current monthly expenses
                </FieldLabel>
                <Input id='current-expenses' placeholder='ex. 10000' />
                <FieldDescription>
                  Enter your current monthly expenses
                </FieldDescription>
              </Field>
            </FieldGroup>

            <Field>
              <FieldLabel htmlFor='existing-investment'>
                Existing investment
              </FieldLabel>
              <Input id='existing-investment' placeholder='ex. 500000' />
              <FieldDescription>
                Enter the amount you have already saved for retirement
              </FieldDescription>
            </Field>

            <FieldGroup className={'gap-4'}>
              <Field>
                <FieldLabel htmlFor='current-age'>Current age</FieldLabel>
                <FieldDescription>
                  Set your current age (
                  <span className='font-medium tabular-nums'>
                    {currentAge[0]}
                  </span>
                  ).
                </FieldDescription>
                <Slider
                  id='current-age'
                  value={currentAge}
                  onValueChange={setCurrentAge}
                  max={55}
                  min={1}
                  step={1}
                />
              </Field>

              <Field>
                <FieldLabel htmlFor='retirement-age'>Retirement age</FieldLabel>
                <FieldDescription>
                  Set your desired retirement age (
                  <span className='font-medium tabular-nums'>
                    {retirementAge[0]}
                  </span>
                  ).
                </FieldDescription>
                <Slider
                  id='retirement-age'
                  value={retirementAge}
                  onValueChange={setRetirementAge}
                  max={75}
                  min={18}
                  step={1}
                />
              </Field>

              <Field>
                <FieldLabel htmlFor='life-expectance'>
                  Life expectance (Years)
                </FieldLabel>
                <FieldDescription>
                  Set your life expectance (
                  <span className='font-medium tabular-nums'>
                    {lifeExpectancy[0]}
                  </span>
                  ).
                </FieldDescription>
                <Slider
                  id='life-expectance'
                  value={lifeExpectancy}
                  onValueChange={setLifeExpectancy}
                  max={99}
                  min={18}
                  step={1}
                />
              </Field>

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
                <FieldLabel htmlFor='post-retirement-inflation-rate'>
                  Post retirement inflation (%)
                </FieldLabel>
                <FieldDescription>
                  Set post-retirement inflation rate (
                  <span className='font-medium tabular-nums'>
                    {postRetirementInflationRate[0]}
                  </span>
                  %)
                </FieldDescription>
                <Slider
                  id='post-retirement-inflation-rate'
                  value={postRetirementInflationRate}
                  onValueChange={setPostRetirementInflationRate}
                  max={20}
                  min={4}
                  step={0.1}
                />
              </Field>

              <Field>
                <FieldLabel htmlFor='post-retirement-risk-free-rate'>
                  Post retirement risk free rate of return (%)
                </FieldLabel>
                <FieldDescription>
                  Set post-retirement risk free rate (
                  <span className='font-medium tabular-nums'>
                    {postRetirementRiskFreeRate[0]}
                  </span>
                  %)
                </FieldDescription>
                <Slider
                  id='post-retirement-risk-free-rate'
                  value={postRetirementRiskFreeRate}
                  onValueChange={setPostRetirementRiskFreeRate}
                  max={13}
                  min={2}
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
