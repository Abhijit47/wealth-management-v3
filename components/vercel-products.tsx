'use client';

import { Analytics, BeforeSendEvent } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const isDev = process.env.NODE_ENV === 'development';

export default function VercelProducts() {
  return (
    <>
      <Analytics
        mode={isDev ? 'development' : 'production'}
        debug={isDev}
        beforeSend={(event: BeforeSendEvent) => {
          return event; // Return a status code to indicate the event was processed successfully
        }}
      />

      <SpeedInsights
        sampleRate={isDev ? 0 : 1}
        beforeSend={(data) => {
          return data; // Return a status code to indicate the event was processed successfully
        }}
        debug={isDev}
      />
    </>
  );
}
