import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle, LockKeyhole } from 'lucide-react';
import AnimatedText from '../AnimatedText';

const certifications = [
  { name: 'AAPC Member', icon: Award },
  { name: 'AHIMA Member', icon: ShieldCheck },
  { name: 'ISO 9001:2015 Certified', icon: CheckCircle },
  { name: 'ISO/IEC 27001:2013 Certified', icon: LockKeyhole },
];

export default function ClientLogos() {
  return (
    <section className="py-24 relative overflow-hidden bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-gray-900">
            <AnimatedText text="Industry-Leading Certifications" />
          </h2>
          <p className="text-gray-500 font-medium">
            Committed to the highest standards of quality and security
          </p>
        </div>

        {/* Marquee Animation */}
        <div className="flex overflow-hidden relative w-full">
          {/* Gradient masks for smooth fade on edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            className="flex gap-16 lg:gap-32 items-center whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate the array to create an infinite loop effect */}
            {[...certifications, ...certifications, ...certifications, ...certifications].map((cert, i) => {
              const Icon = cert.icon;
              return (
                <div 
                  key={i} 
                  className="flex items-center gap-4 text-gray-400 hover:text-gray-900 transition-colors cursor-pointer group"
                >
                  <Icon size={32} className="text-gray-300 group-hover:text-green-600 transition-colors" />
                  <span className="text-3xl font-extrabold font-secondary tracking-tight text-gray-800">{cert.name}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
