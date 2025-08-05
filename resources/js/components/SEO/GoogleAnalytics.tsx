import React from 'react';
import { Head } from '@inertiajs/react';

interface GoogleAnalyticsProps {
  trackingId?: string;
}

export default function GoogleAnalytics({ trackingId }: GoogleAnalyticsProps) {
  // Only load in production and if valid tracking ID is provided
  if (process.env.NODE_ENV !== 'production' || !trackingId || trackingId === 'G-XXXXXXXXXX') {
    return null;
  }

  return (
    <Head>
      {/* Google Analytics - Fixed for Inertia.js */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${trackingId}', {
              page_title: document.title,
              page_location: window.location.href,
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />
      
      {/* Google Tag Manager - Fixed for Inertia.js */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `,
        }}
      />
    </Head>
  );
}