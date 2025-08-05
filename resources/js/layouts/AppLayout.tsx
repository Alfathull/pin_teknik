import React from 'react';
import { Head } from '@inertiajs/react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import FloatingWhatsApp from '../components/ui/FloatingWhatsApp';
// import GoogleAnalytics from '../components/SEO/GoogleAnalytics';

interface AppLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export default function AppLayout({ 
  children, 
  title = "Pin Enamel Custom Bandung | Jasa Pembuatan Pin, Medali & Souvenir Terbaik",
  description = "Jasa pembuatan pin enamel custom, medali, label hijab, dan souvenir berkualitas tinggi di Bandung. Produksi cepat 3-7 hari, harga terjangkau mulai Rp5.000, gratis konsultasi desain. Trusted by 1000+ klien.",
  keywords = "pin enamel custom bandung, jasa pembuatan pin bandung, medali custom murah, label hijab bordir, souvenir custom bandung, pin button promosi, atribut TNI POLRI, pin enamel berkualitas, merchandise custom, souvenir unik bandung",
  canonicalUrl,
  ogImage = "/images/og-pin-custom-bandung.jpg"
}: AppLayoutProps) {
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');
  const siteName = "Pin Custom Bandung";
  
  return (
    <>
      {/* <GoogleAnalytics trackingId={process.env.GOOGLE_ANALYTICS_ID} /> */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Pin Custom Bandung" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="id" />
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Bandung" />
        <meta name="geo.position" content="-6.917464;107.619123" />
        <meta name="ICBM" content="-6.917464, 107.619123" />
        
        {/* Canonical URL */}
        {currentUrl && <link rel="canonical" href={currentUrl} />}
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Pin Enamel Custom Bandung - Jasa Pembuatan Pin & Souvenir Berkualitas" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="id_ID" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="Pin Enamel Custom Bandung" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="application-name" content={siteName} />
        <meta name="apple-mobile-web-app-title" content={siteName} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Pin Custom Bandung",
            "alternateName": "Pin Enamel Custom Bandung",
            "url": currentUrl,
            "logo": "/images/logo-pin-custom-bandung.png",
            "description": description,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jl. Bandung Raya",
              "addressLocality": "Bandung",
              "addressRegion": "Jawa Barat",
              "postalCode": "40123",
              "addressCountry": "ID"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+62-813-1721-4457",
              "contactType": "customer service",
              "areaServed": "ID",
              "availableLanguage": "Indonesian"
            },
            "sameAs": [
              "https://instagram.com/pincustombandung",
              "https://facebook.com/pincustombandung"
            ],
            "foundingDate": "2019",
            "numberOfEmployees": "10-50",
            "priceRange": "$"
          })}
        </script>
        
        {/* Structured Data - LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Pin Custom Bandung",
            "description": description,
            "url": currentUrl,
            "telephone": "+62-813-1721-4457",
            "priceRange": "Rp5.000 - Rp100.000",
            "currenciesAccepted": "IDR",
            "paymentAccepted": "Cash, Bank Transfer",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jl. Bandung Raya",
              "addressLocality": "Bandung",
              "addressRegion": "Jawa Barat",
              "postalCode": "40123",
              "addressCountry": "ID"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-6.917464",
              "longitude": "107.619123"
            },
            "openingHours": "Mo-Sa 08:00-17:00",
            "areaServed": {
              "@type": "State",
              "name": "Indonesia"
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "-6.917464",
                "longitude": "107.619123"
              },
              "geoRadius": "1000000"
            }
          })}
        </script>

        {/* Structured Data - Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Jasa Pembuatan Pin Enamel Custom",
            "description": "Layanan pembuatan pin enamel custom, medali, label hijab, dan souvenir berkualitas tinggi dengan harga terjangkau",
            "provider": {
              "@type": "Organization",
              "name": "Pin Custom Bandung"
            },
            "areaServed": "Indonesia",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Produk Pin Custom",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Pin Enamel Custom"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Medali Custom"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product", 
                    "name": "Label Hijab Bordir"
                  }
                }
              ]
            }
          })}
        </script>
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}