import React from 'react';
import Hero from '../components/home/Hero';
import AboutSnapshot from '../components/home/AboutSnapshot';
import ServicesBento from '../components/home/ServicesBento';
import WhyChooseUs from '../components/home/WhyChooseUs';
import SecurityOverview from '../components/home/SecurityOverview';
import ClientLogos from '../components/home/ClientLogos';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutSnapshot />
      <ServicesBento />
      <WhyChooseUs />
      <SecurityOverview />
      <ClientLogos />
    </div>
  );
}
