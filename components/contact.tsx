import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from 'lucide-react';
import ContactForm from './forms/contact-form';

export default function Contact() {
  return (
    <div
      id='contact-us'
      className='min-h-screen flex items-center justify-center py-16'>
      <div className='w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0'>
        <b className='text-muted-foreground uppercase font-semibold text-sm'>
          Contact Us
        </b>
        <h2 className='mt-3 text-3xl md:text-4xl font-semibold tracking-tight'>
          Chat with our friendly team!
        </h2>
        <p className='mt-3 text-base sm:text-lg text-muted-foreground'>
          We&apos;d love to hear from you. Please fill out this form or shoot us
          an email.
        </p>
        <div className='mt-16 flex flex-col lg:flex-row gap-16 md:gap-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:col-span-2 *:border *:p-6 *:bg-background gap-1 border p-1 bg-muted max-w-3xl mx-auto w-full'>
            <div>
              <div className='h-12 w-12 flex items-center justify-center bg-foreground/5 dark:bg-foreground/10 text-foreground border border-foreground/3 rounded-xl'>
                <MailIcon />
              </div>
              <h3 className='mt-6 font-semibold text-xl'>Email</h3>
              <p className='my-2.5 text-muted-foreground'>
                Our friendly team is here to help.
              </p>
              <a
                className='font-medium text-primary'
                href='mailto:akashmoradiya3444@gmail.com'>
                akashmoradiya3444@gmail.com
              </a>
            </div>
            <div>
              <div className='h-12 w-12 flex items-center justify-center bg-foreground/5 dark:bg-foreground/10 text-foreground border border-foreground/3 rounded-xl'>
                <MessageCircle />
              </div>
              <h3 className='mt-6 font-semibold text-xl'>Live chat</h3>
              <p className='my-2.5 text-muted-foreground'>
                Our friendly team is here to help.
              </p>
              <a className='font-medium text-primary' href='#'>
                Start new chat
              </a>
            </div>
            <div>
              <div className='h-12 w-12 flex items-center justify-center bg-foreground/5 dark:bg-foreground/10 text-foreground border border-foreground/3 rounded-xl'>
                <MapPinIcon />
              </div>
              <h3 className='mt-6 font-semibold text-xl'>Office</h3>
              <p className='my-2.5 text-muted-foreground'>
                Come say hello at our office HQ.
              </p>
              <a
                className='font-medium text-primary'
                href='https://map.google.com'
                target='_blank'>
                100 Smith Street Collingwood <br /> VIC 3066 AU
              </a>
            </div>
            <div>
              <div className='h-12 w-12 flex items-center justify-center bg-foreground/5 dark:bg-foreground/10 text-foreground border border-foreground/3 rounded-xl'>
                <PhoneIcon />
              </div>
              <h3 className='mt-6 font-semibold text-xl'>Phone</h3>
              <p className='my-2.5 text-muted-foreground'>
                Mon-Fri from 8am to 5pm.
              </p>
              <a
                className='font-medium text-primary'
                href='tel:akashmoradiya3444@gmail.com'>
                +1 (555) 000-0000
              </a>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
