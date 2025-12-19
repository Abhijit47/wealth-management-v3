import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader } from './ui/card';

export default function BlogCard({ i }: { i: number }) {
  return (
    <Card key={i} className='shadow-none py-0 gap-3'>
      <CardHeader className='p-2 pb-0'>
        <div className='aspect-video bg-muted rounded-lg w-full' />
      </CardHeader>
      <CardContent className='pt-0 pb-5 px-5'>
        <Badge variant='secondary'>Technology</Badge>

        <h3 className='mt-4 text-2xl text-[1.4rem] font-semibold tracking-[-0.015em]'>
          What is the future of web development?
        </h3>
        <div className='mt-6 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='size-8 rounded-full bg-muted'></div>
            <span className='text-muted-foreground font-medium'>John Doe</span>
          </div>

          <span className='text-muted-foreground text-sm'>Nov 30, 2024</span>
        </div>
      </CardContent>
    </Card>
  );
}
