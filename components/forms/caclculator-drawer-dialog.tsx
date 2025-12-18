'use client';

import { useMediaQuery } from '@/hooks/use-media-query';
import { SparklesIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';
import EducationForm from './education-form';
import LumpsumForm from './lumpsum-form';
import RetirementForm from './retirement-form';
import SIPForm from './sip-form';
import VacationForm from './vacation-form';
import WeddingForm from './wedding-form';

type CaclculatorDrawerDialogProps = {
  title: string;
  desc: string;
};

export default function CaclculatorDrawerDialog(
  props: CaclculatorDrawerDialogProps
) {
  const { title, desc } = props;
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant={'secondary'} className={'w-full'}>
            Get free calculation <SparklesIcon className={'size-4'} />
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-5xl'>
          <DialogHeader className={'sr-only'}>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{desc}</DialogDescription>
          </DialogHeader>

          {title === 'Education Calculator' && <EducationForm {...props} />}
          {title === 'Lumpsum Calculator' && <LumpsumForm {...props} />}
          {title === 'SIP Calculator' && <SIPForm {...props} />}
          {title === 'Retirement Planning' && <RetirementForm {...props} />}
          {title === 'Wedding Calculator' && <WeddingForm {...props} />}
          {title === 'Vacation Calculator' && <VacationForm {...props} />}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant={'secondary'}>Get free calculation</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{desc}</DrawerDescription>
        </DrawerHeader>

        {title === 'Education Calculator' && <EducationForm {...props} />}
        {title === 'Lumpsum Calculator' && <LumpsumForm {...props} />}
        {title === 'SIP Calculator' && <SIPForm {...props} />}
        {title === 'Retirement Planning' && <RetirementForm {...props} />}
        {title === 'Wedding Calculator' && <WeddingForm {...props} />}
        {title === 'Vacation Calculator' && <VacationForm {...props} />}

        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
