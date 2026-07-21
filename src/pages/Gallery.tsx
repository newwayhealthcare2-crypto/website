import React, { useState, useEffect } from 'react';
import AnimatedText from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';
import SEO from '../components/SEO';

export default function Gallery() {
  const images = [
    '/gallery/WhatsApp Image 2026-07-19 at 12.48.49 PM.jpeg',
    '/gallery/WhatsApp Image 2026-07-19 at 12.48.50 PM (1).jpeg',
    '/gallery/WhatsApp Image 2026-07-19 at 12.48.50 PM.jpeg',
    '/gallery/WhatsApp Image 2026-07-19 at 12.48.51 PM (1).jpeg',
    '/gallery/WhatsApp Image 2026-07-19 at 12.48.51 PM (2).jpeg',
    '/gallery/WhatsApp Image 2026-07-19 at 12.48.51 PM.jpeg',
    '/gallery/WhatsApp Image 2026-07-19 at 12.48.52 PM (1).jpeg',
    '/gallery/WhatsApp Image 2026-07-19 at 12.48.52 PM.jpeg',
    '/gallery/WhatsApp Image 2026-07-19 at 12.48.53 PM.jpeg'
  ];
  const loading = false;

  return (
    <div className="pt-48 pb-24 bg-white min-h-screen">
      <SEO 
        title="Gallery - See Us in Action" 
        description="Browse our gallery to see New Way Healthcare Services in action, showcasing our events, infrastructure, and team."
      />
      
      <div className="container mx-auto px-6 lg:px-12 mb-20 text-center max-w-4xl">
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 text-gray-900">
          <AnimatedText text="Photo Gallery" />
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Take a look at our state-of-the-art infrastructure, team events, and daily operations.
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : images.length === 0 ? (
          <GlassCard className="text-center py-20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Gallery is Empty</h3>
            <p className="text-gray-600">We are currently updating our gallery with new photos. Check back soon!</p>
          </GlassCard>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((src, i) => (
              <div key={i} className="break-inside-avoid">
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer bg-gray-50 border border-gray-100">
                  <img 
                    src={src} 
                    alt={`Gallery Image ${i + 1}`} 
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
