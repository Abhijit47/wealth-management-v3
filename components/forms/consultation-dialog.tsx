'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  consultationSchema,
  type ConsultationFormValues,
} from '@/lib/zod.schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowUpRight } from 'lucide-react';
import { VisuallyHidden } from 'radix-ui';
import { useState } from 'react';
import {
  FormProvider,
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from 'react-hook-form';
import { Button } from '../ui/button';
import ConsultationForm from './consultation-form';

export default function ConsultationDialog() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const form = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      householdExpenses: '',
      consultationType: undefined,
      specifyReason: '',
      age: '',
      spouseAge: '',
      firstChildAge: '',
      secondChildAge: '',
      isTermInsurance: '',
      isHealthInsurance: '',
      consent: false,
    },
  });

  function toggleDialog() {
    setIsOpen((prev) => !prev);
  }

  const onError: SubmitErrorHandler<ConsultationFormValues> = (errors) => {
    console.log('Form errors:', errors);
  };

  const onSubmit: SubmitHandler<ConsultationFormValues> = (data) => {
    console.log('Form submitted successfully:', data);

    // Close the dialog upon successful submission
    toggleDialog();
  };

  return (
    <Dialog open={isOpen} onOpenChange={toggleDialog}>
      <FormProvider {...form}>
        <DialogTrigger asChild>
          <Button size='lg'>
            Take a free consultation <ArrowUpRight className='size-4' />
          </Button>
        </DialogTrigger>
        <DialogContent className='min-w-6/12 mx-auto w-full'>
          <form
            onSubmit={form.handleSubmit(onSubmit, onError)}
            className={'space-y-4'}>
            <DialogHeader className={'sr-only'}>
              <DialogTitle>
                <VisuallyHidden.Root>
                  Consultation Form - Goal Based Financial Planning
                </VisuallyHidden.Root>
              </DialogTitle>
              <DialogDescription>
                <VisuallyHidden.Root>
                  A well thought out financial plan alone can pave way for
                  achieving financial independence.
                </VisuallyHidden.Root>
              </DialogDescription>
            </DialogHeader>

            <ConsultationForm />

            <DialogFooter>
              <DialogClose asChild>
                <Button variant='outline'>Cancel</Button>
              </DialogClose>
              <Button type='submit'>Submit Consultation Request</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </FormProvider>
    </Dialog>
  );
}
