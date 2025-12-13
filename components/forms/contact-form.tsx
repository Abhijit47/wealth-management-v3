import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

export default function ContactForm() {
  return (
    <div className='border p-1 bg-muted w-full max-w-lg mx-auto'>
      <Card className='relative isolate bg-background/70 shadow-none lg:ms-auto rounded-none'>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>
            We'd love to hear from you. Please fill out this form.
          </CardDescription>
        </CardHeader>
        <CardContent className='mt-2'>
          <form>
            <div className='grid md:grid-cols-2 gap-x-8 gap-y-6'>
              <div className='col-span-2 sm:col-span-1'>
                <Label htmlFor='firstName'>First Name</Label>
                <Input
                  placeholder='First name'
                  id='firstName'
                  className='mt-2 bg-white h-10 shadow-none'
                />
              </div>
              <div className='col-span-2 sm:col-span-1'>
                <Label htmlFor='lastName'>Last Name</Label>
                <Input
                  placeholder='Last name'
                  id='lastName'
                  className='mt-2 bg-white h-10 shadow-none'
                />
              </div>
              <div className='col-span-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  type='email'
                  placeholder='Email'
                  id='email'
                  className='mt-2 bg-white h-10 shadow-none'
                />
              </div>
              <div className='col-span-2'>
                <Label htmlFor='message'>Message</Label>
                <Textarea
                  id='message'
                  placeholder='Message'
                  className='mt-2 bg-white shadow-none'
                  rows={6}
                />
              </div>
              <div className='col-span-2 flex items-center gap-2'>
                <Checkbox id='acceptTerms' className='bg-background' />
                <Label htmlFor='acceptTerms' className='gap-0'>
                  You agree to our
                  <a href='#' className='underline ml-1'>
                    terms and conditions
                  </a>
                  <span>.</span>
                </Label>
              </div>
            </div>
            <Button className='mt-6 w-full' size='lg'>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
