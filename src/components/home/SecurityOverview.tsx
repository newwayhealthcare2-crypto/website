import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, Lock, Server, FileCheck2, Fingerprint } from 'lucide-react';
import AnimatedText from '../AnimatedText';
import GlassCard from '../GlassCard';

const securityFeatures = [
  { title: 'HIPAA Compliance', icon: FileCheck2 },
  { title: 'Data Encryption', icon: Lock },
  { title: 'Secure Infrastructure', icon: Server },
  { title: 'Biometric Access', icon: Fingerprint },
];

export default function SecurityOverview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50 border-y border-gray-100" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Static Shield */}
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="w-64 h-64 lg:w-96 lg:h-96 border border-gray-200 rounded-full flex items-center justify-center relative bg-white shadow-sm">
                <ShieldCheck size={120} className="text-gray-900" />
                
                {/* Orbiting dots */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-dashed border-gray-300 rounded-full"
                >
                  <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-green-500 rounded-full" />
                  <div className="absolute bottom-1/2 -right-1.5 w-3 h-3 bg-gray-900 rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900">
                <AnimatedText text="Enterprise-Grade Security" />
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                We employ robust technical, physical, and administrative safeguards to ensure the confidentiality, integrity, and availability of your protected health information.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {securityFeatures.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <GlassCard 
                      key={i} 
                      className="flex items-center gap-4 p-4 !rounded-xl border border-gray-200 hover:border-gray-300 transition-colors bg-white shadow-sm"
                    >
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-900">
                        <Icon size={20} />
                      </div>
                      <span className="font-semibold text-gray-900">{feature.title}</span>
                    </GlassCard>
                  );
                })}
              </div>

              <div className="mt-10">
                <button className="px-8 py-3 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-colors shadow-sm">
                  View Security Policy
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
