import { useEffect, useState } from 'react';

type MediaQuery = `(min-width: ${number}px)` | `(max-width: ${number}px)`;

/**
 *  A custom React hook that returns whether the given media query matches the current viewport size.
 * @param query - media query string (e.g., '(min-width: 768px)')
 * @returns boolean indicating if the media query matches the current viewport size
 */
export function useMediaQuery(query: MediaQuery): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia(query).matches;
    }
    return false;
  });
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }
    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    mediaQueryList.addEventListener('change', listener);
    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, [query]);
  return matches;
}

// usage const isDesktop = useMediaQuery('(min-width: 768px)');
