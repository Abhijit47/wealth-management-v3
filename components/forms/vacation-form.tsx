import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import type { VacationCalculatorValues } from '@/lib/zod.schemas';
import { Trash2Icon } from 'lucide-react';
import Image from 'next/image';
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

export default function VacationForm({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  const [inflationRate, setInflationRate] = useState([4]);
  const [existingInvestment, setExistingInvestment] = useState([2]);
  const [newInvestment, setNewInvestment] = useState([2]);
  const [afterHowManyYears, setAfterHowManyYears] = useState([0]);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [photo, setPhoto] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const form = useForm<VacationCalculatorValues>();

  const onError: SubmitErrorHandler<VacationCalculatorValues> = (errors) => {
    console.log('Form errors:', errors);
  };

  const onSubmit: SubmitHandler<VacationCalculatorValues> = (data) => {
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
            <FieldGroup>
              {previewUrl ? (
                <Field>
                  <FieldLabel>Vacation Image Preview</FieldLabel>
                  <div className={'size-36 mx-auto relative'}>
                    <Image
                      src={previewUrl}
                      alt='Vacation cover Preview'
                      width={500}
                      height={500}
                      className='mt-2 w-full h-full object-contain'
                      onLoad={
                        // Release the object URL after the image is loaded
                        () => {
                          URL.revokeObjectURL(previewUrl);
                        }
                      }
                    />
                    <Button
                      type='button'
                      size={'icon-sm'}
                      variant={'destructive'}
                      className='absolute top-2 right-2'
                      onClick={() => {
                        setPhoto(null);
                        setPreviewUrl(null);
                      }}>
                      <Trash2Icon className={'size-4'} />
                    </Button>
                  </div>
                </Field>
              ) : null}

              {!previewUrl && (
                <Field>
                  <FieldLabel htmlFor='photo'>Upload a image</FieldLabel>
                  <Input
                    id='photo'
                    type='file'
                    accept='image/*'
                    placeholder='Choose an image for vacation'
                    value={photo ? undefined : ''}
                    onChange={(e) => {
                      const file = e.target.files ? e.target.files[0] : null;
                      setPhoto(file);
                      if (file) {
                        const url = URL.createObjectURL(file);
                        // console.log(url);
                        setPreviewUrl(url);
                      } else {
                        setPreviewUrl(null);
                      }
                    }}
                  />
                  <FieldDescription>
                    Upload an image representing your vacation goal
                  </FieldDescription>
                </Field>
              )}
            </FieldGroup>

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

            <Field>
              <FieldLabel htmlFor='after-how-many-years'>
                After how many years ?
              </FieldLabel>
              <FieldDescription>
                Set after how many years you plan to go for vacation (
                <span className='font-medium tabular-nums'>
                  {afterHowManyYears[0]}
                </span>
                ).
              </FieldDescription>
              <Slider
                id='after-how-many-years'
                value={afterHowManyYears}
                onValueChange={setAfterHowManyYears}
                max={30}
                step={1}
              />
            </Field>

            <FieldGroup className={'grid grid-cols-1 lg:grid-cols-2 gap-4'}>
              <Field>
                <FieldLabel htmlFor='current-cost-of-vacation'>
                  Current cost of vacation
                </FieldLabel>
                <Input id='current-cost-of-vacation' placeholder='ex. 100000' />
                <FieldDescription>
                  Enter the current cost of the vacation
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor='current-investment-for-goal'>
                  Current investment for the goal
                </FieldLabel>
                <Input
                  id='current-investment-for-goal'
                  placeholder='ex. 50000'
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
