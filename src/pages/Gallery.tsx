import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'WhatsApp Image 2026-07-19 at 12.48.49 PM.jpeg',
  'WhatsApp Image 2026-07-19 at 12.48.50 PM (1).jpeg',
  'WhatsApp Image 2026-07-19 at 12.48.50 PM.jpeg',
  'WhatsApp Image 2026-07-19 at 12.48.51 PM (1).jpeg',
  'WhatsApp Image 2026-07-19 at 12.48.51 PM (2).jpeg',
  'WhatsApp Image 2026-07-19 at 12.48.51 PM.jpeg',
  'WhatsApp Image 2026-07-19 at 12.48.52 PM (1).jpeg',
  'WhatsApp Image 2026-07-19 at 12.48.52 PM.jpeg',
  'WhatsApp Image 2026-07-19 at 12.48.53 PM.jpeg',
];

export default function Gallery() {
  return (
    <div className="pt-40 min-h-screen bg-gray-50 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 font-primary">Our Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a glimpse into the vibrant culture, modern facilities, and dedicated team at New Way Healthcare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-2xl shadow-lg group bg-white border-4 border-white"
            >
              <img
                src={`/gallery/${img}`}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-fluorescent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
