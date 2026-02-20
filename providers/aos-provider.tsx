'use client';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file
import { useEffect } from 'react';

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      // Optional: configuration options
      duration: 1000, // animation duration
      once: false, // whether animation should only happen once
    });

    // Optional: call AOS.refresh() if new elements are added dynamically
    return () => {
      AOS.refresh(); // Clean up AOS on unmount
    };
  }, []);

  return <>{children}</>;
}
