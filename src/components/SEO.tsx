import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  type?: string;
  url?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

export default function SEO({ 
  title, 
  description, 
  keywords = "Healthcare BPO, Revenue Cycle Management, Medical Billing, Medical Coding, Healthcare Outsourcing",
  type = "website",
  url = "https://newwayhealthcare.com",
  schema
}: SEOProps) {
  const fullTitle = `${title} | New Way Healthcare Services`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="theme-color" content="#2563eb" />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      
      {/* Canonical URL to prevent duplicate content issues */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
