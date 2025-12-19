'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';
import { faqs } from '@/constants';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { PlusIcon } from 'lucide-react';
import { Accordion as AccordionPrimitive } from 'radix-ui';
import { useState } from 'react';
import { Button } from './ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';

export default function FAQ() {
  const [value, setValue] = useState<string>();
  const [isShowMore, setIsShowMore] = useState(false);

  const isMobile = useIsMobile();

  const faqToShow = isMobile ? faqs.slice(0, 4) : faqs;

  return (
    <section id='faqs' className='w-full max-w-(--breakpoint-xl) mx-auto'>
      <div className='flex items-center justify-center px-6 py-12'>
        <div className='text-center'>
          <h2 className='text-4xl md:text-5xl leading-[1.15]! font-semibold tracking-[-0.035em]'>
            Frequently Asked Questions
          </h2>

          {isMobile && !isShowMore ? (
            <div className='mt-6 w-full grid md:grid-cols-2 gap-x-10'>
              <Accordion
                type='single'
                collapsible
                className='w-full'
                value={value}
                onValueChange={setValue}>
                {faqToShow.map(({ question, answer }, index) => (
                  <AccordionItem key={question} value={`question-${index}`}>
                    <AccordionPrimitive.Header className='flex'>
                      <AccordionPrimitive.Trigger
                        className={cn(
                          'flex flex-1 items-center justify-between py-4 font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-45',
                          'text-start text-lg'
                        )}>
                        {index + 1}-{question}
                        <PlusIcon className='h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200' />
                      </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionContent className='text-base text-muted-foreground text-start text-pretty'>
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ) : null}

          {!isShowMore && !isMobile ? (
            <div className='mt-6 w-full grid md:grid-cols-2 gap-x-10'>
              <Accordion
                type='single'
                collapsible
                className='w-full'
                value={value}
                onValueChange={setValue}>
                {faqs.slice(0, 4).map(({ question, answer }, index) => (
                  <AccordionItem key={question} value={`question-${index}`}>
                    <AccordionPrimitive.Header className='flex'>
                      <AccordionPrimitive.Trigger
                        className={cn(
                          'flex flex-1 items-center justify-between py-4 font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-45',
                          'text-start text-lg'
                        )}>
                        {index + 1}-{question}
                        <PlusIcon className='h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200' />
                      </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionContent className='text-base text-muted-foreground text-start text-pretty'>
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <Accordion
                type='single'
                collapsible
                className='w-full'
                value={value}
                onValueChange={setValue}>
                {faqs.slice(5, 9).map(({ id, question, answer }, index) => (
                  <AccordionItem key={id} value={`question-${index + 11}`}>
                    <AccordionPrimitive.Header className='flex'>
                      <AccordionPrimitive.Trigger
                        className={cn(
                          'flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45',
                          'text-start text-lg'
                        )}>
                        {index + 1}- {question}
                        <PlusIcon className='h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200' />
                      </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionContent className='text-base text-muted-foreground text-start text-pretty'>
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ) : null}
        </div>
      </div>

      <div className={'flex items-center justify-center'}>
        <Collapsible open={isShowMore} onOpenChange={setIsShowMore}>
          <CollapsibleContent>
            <div className='mt-6 w-full grid md:grid-cols-2 gap-x-10'>
              <Accordion
                type='single'
                collapsible
                className='w-full'
                value={value}
                onValueChange={setValue}>
                {faqs.slice(0, 11).map(({ question, answer }, index) => (
                  <AccordionItem key={question} value={`question-${index}`}>
                    <AccordionPrimitive.Header className='flex'>
                      <AccordionPrimitive.Trigger
                        className={cn(
                          'flex flex-1 items-center justify-between py-4 font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-45',
                          'text-start text-lg'
                        )}>
                        {index + 1}-{question}
                        <PlusIcon className='h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200' />
                      </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionContent className='text-base text-muted-foreground text-start text-pretty'>
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <Accordion
                type='single'
                collapsible
                className='w-full'
                value={value}
                onValueChange={setValue}>
                {faqs.slice(11).map(({ id, question, answer }, index) => (
                  <AccordionItem key={id} value={`question-${index + 11}`}>
                    <AccordionPrimitive.Header className='flex'>
                      <AccordionPrimitive.Trigger
                        className={cn(
                          'flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45',
                          'text-start text-lg'
                        )}>
                        {index + 1}- {question}
                        <PlusIcon className='h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200' />
                      </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionContent className='text-base text-muted-foreground text-start text-pretty'>
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </CollapsibleContent>
          <CollapsibleTrigger
            asChild
            className='flex items-center justify-center mt-4 mb-8'>
            <Button>{isShowMore ? 'Show Less' : 'Show More'}</Button>
          </CollapsibleTrigger>
        </Collapsible>
      </div>
    </section>
  );
}
