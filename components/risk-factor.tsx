'use client';

import { ChevronsUpDownIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';

export default function RiskFactor() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
      className='flex w-full flex-col gap-2'>
      <div className='flex items-center justify-between gap-4'>
        {isOpen ? (
          <p className='text-sm font-semibold'>
            <strong>Risk Factors</strong>
          </p>
        ) : (
          <p className='text-sm font-semibold line-clamp-1'>
            <strong>Risk Factors</strong> &mdash; Investments in Mutual Funds
            are subject to Market Risks. Read all scheme related documents
            carefully before investing. Mutual Fund Schemes do not assure or
            guarantee any returns. Past performances of any Mutual Fund Scheme
            may or may not be sustained in future.
          </p>
        )}

        <CollapsibleTrigger asChild>
          <Button variant='ghost' size='icon-sm'>
            <ChevronsUpDownIcon />
            <span className='sr-only'>Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down flex flex-col gap-2 overflow-hidden transition-all duration-300 ease-in-out'>
        <p className={'text-sm'}>
          Investments in Mutual Funds are subject to Market Risks. Read all
          scheme related documents carefully before investing. Mutual Fund
          Schemes do not assure or guarantee any returns. Past performances of
          any Mutual Fund Scheme may or may not be sustained in future. There is
          no guarantee that the investment objective of any suggested scheme
          shall be achieved. All existing and prospective investors are advised
          to check and evaluate the Exit loads and other cost structure (TER)
          applicable at the time of making the investment before finalizing on
          any investment decision for Mutual Funds schemes. We deal in Regular
          Plans only for Mutual Fund Schemes and earn a Trailing Commission on
          client investments. Disclosure For Commission earnings is made to
          clients at the time of investments. Option of Direct Plan for every
          Mutual Fund Scheme is available to investors offering advantage of
          lower expense ratio. We are not entitled to earn any commission on
          Direct plans. Hence we do not deal in Direct Plans.
        </p>
      </CollapsibleContent>
    </Collapsible>
  );
}
