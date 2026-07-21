import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/home/Hero';
import AboutSnapshot from '../components/home/AboutSnapshot';
import ServicesBento from '../components/home/ServicesBento';
import WhyChooseUs from '../components/home/WhyChooseUs';
import SecurityOverview from '../components/home/SecurityOverview';
import ClientLogos from '../components/home/ClientLogos';

export default function Home() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "New Way Healthcare Services",
    "url": "https://newwayhealthcare.com",
    "logo": "https://newwayhealthcare.com/favicon.png",
    "description": "Industry-leading revenue cycle management, medical coding, and healthcare outsourcing solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/company/new-way-healthcare"
    ]
  };

  return (
    <div className="flex flex-col">
      <SEO 
        title="Revenue Cycle Management & Healthcare BPO" 
        description="New Way Healthcare provides industry-leading revenue cycle management, medical coding, and healthcare outsourcing solutions."
        schema={orgSchema}
      />
      <Hero />
      <AboutSnapshot />
      <ServicesBento />
      <WhyChooseUs />
      <SecurityOverview />
      <ClientLogos />
    </div>
  );
}
