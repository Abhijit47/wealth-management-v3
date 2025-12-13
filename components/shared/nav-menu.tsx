'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
// import Link from "next/link";
import { type ComponentProps } from 'react';

const navlinks = [
  {
    id: crypto.randomUUID(),
    label: 'Home',
    href: '#home',
  },
  {
    id: crypto.randomUUID(),
    label: 'Planning',
    href: '#planning',
  },
  {
    id: crypto.randomUUID(),
    label: 'Services',
    href: '#services',
  },
  {
    id: crypto.randomUUID(),
    label: 'Blogs',
    href: '#blogs',
  },
  {
    id: crypto.randomUUID(),
    label: 'Calaculators',
    href: '#calaculators',
  },
  {
    id: crypto.randomUUID(),
    label: 'Free Consultation',
    href: '#free-consultation',
  },
  {
    id: crypto.randomUUID(),
    label: 'Faqs',
    href: '#faqs',
  },
  {
    id: crypto.randomUUID(),
    label: 'Contact Us',
    href: '#contact-us',
  },
];

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className='space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start'>
      {navlinks.map((link) => (
        <NavigationMenuItem key={link.id}>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href={link.href}>{link.label}</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);
