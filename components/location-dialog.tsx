'use client';

import { Sparkles } from '@/assets/icons/animated-icons/Sparkles';
import { buttonVariants } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ShadCNShinyButton } from './extends/shadcn-shiny-btn';

import { useAutoOpenDialog } from '@/hooks/use-auto-open-dialog';
import { useIsMobile } from '@/hooks/use-mobile';
import { IconMapPinDown } from '@tabler/icons-react';
import Image from 'next/image';
import { Separator } from './ui/separator';

export default function LocationDialog() {
  const isMobile = useIsMobile();
  const { isOpen, openDialog, closeDialog } = useAutoOpenDialog(
    'location-dialog',
    10,
  );

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => (open ? openDialog() : closeDialog())}>
      <DialogTrigger asChild>
        <ShadCNShinyButton
          icon={<Sparkles className='h-5! w-5!' />}
          className={buttonVariants({
            size: isMobile ? 'sm' : 'lg',
            className: 'rounded-full',
          })}>
          Know More
        </ShadCNShinyButton>
      </DialogTrigger>
      <DialogContent className='data-[state=open]:zoom-in-0! data-[state=open]:duration-600 sm:max-w-lg w-full gap-2'>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-2'>
            <IconMapPinDown className={'size-4'} />
            Our Location
          </DialogTitle>
          <DialogDescription>
            Visit us at our office to explore personalized financial solutions
            tailored to your goals.
          </DialogDescription>
        </DialogHeader>
        <Separator className={'my-2'} />
        <div className='w-(--radix-dialog-content-width)! mx-auto h-full relative'>
          <Image
            src={
              'https://res.cloudinary.com/dxgckfhti/image/upload/v1768549237/business-location_x7pl9i.avif'
            }
            alt='Our Location'
            width={4746}
            height={5280}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='w-full h-full object-cover rounded-md'
            preload={true}
            placeholder='blur'
            blurDataURL='https://res.cloudinary.com/dxgckfhti/image/upload/v1768549237/business-location_x7pl9i.avif'
          />
        </div>
        {/* <DialogFooter>
          <DialogClose asChild>
            <Button variant='outline' size={'sm'}>
              Close
            </Button>
          </DialogClose>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
