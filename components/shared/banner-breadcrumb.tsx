'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';

export default function BannerBreadcrumb() {
  const pathname = usePathname().slice(1); // Remove leading slash

  const formattedPathname = pathname
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            className={'md:text-xl md:font-semibold lg:text-2xl lg:font-bold'}
            href='/'>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator
          className={'md:[&>svg]:size-5 lg:[&>svg]:size-6'}
        />
        <BreadcrumbItem>
          <BreadcrumbLink
            className={'md:text-xl md:font-semibold lg:text-2xl lg:font-bold'}
            href={pathname}>
            {formattedPathname}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
