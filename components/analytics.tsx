'use client';

import {
  GoogleAnalytics,
  // GoogleTagManager,
  sendGAEvent,
} from '@next/third-parties/google';
// import { addScript, setup } from 'meta-pixel';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

// export function setupMetaPixel() {
//   if (typeof window === 'undefined') return;
//   const fbq = addScript(
//     window,
//     document,
//     'script',
//     'https://connect.facebook.net/en_US/fbevents.js',
//   );
//   setup(fbq).init('1664166848787184').pageView();

//   return fbq;
// }

const isDev = process.env.NODE_ENV === 'development';

function Analytics() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    sendGAEvent({
      action: 'page_view',
      category: 'Page View',
      label: window.location.pathname,
    });
  }, []);

  // useEffect(() => {
  //   if (typeof window === 'undefined') return;

  //   const fbq = setupMetaPixel();

  //   return () => {
  //     fbq?.('track', 'PageView');
  //   };
  // }, []);

  return (
    <>
      {/* <GoogleTagManager gtmId='GTM-XYZ' /> */}
      <GoogleAnalytics
        dataLayerName='Ascent wealth'
        gaId='G-897659Y63B'
        debugMode={isDev}
      />

      {/* <noscript>
        <img
          height='1'
          width='1'
          style={{ display: 'none' }}
          src='https://www.facebook.com/tr?id=1664166848787184&ev=PageView&noscript=1'
        />
      </noscript> */}
    </>
  );
}

export const LazyAnalytics = dynamic(() => Promise.resolve(Analytics), {
  ssr: false,
});
