import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import AnimatedText from '../AnimatedText';
import GlassCard from '../GlassCard';
import { CheckCircle } from 'lucide-react';

const stats = [
  { value: 1, suffix: 'M+', label: 'Medical Charts Coded', color: 'text-green-600' },
  { value: 3, suffix: 'M+', label: 'Medical Records Reviewed', color: 'text-gray-900' },
  { value: 98, suffix: '%', label: 'First Pass Claims Rate', color: 'text-green-600' },
  { value: 39, suffix: '', label: 'Average AR Days', color: 'text-gray-900' },
];

export default function AboutSnapshot() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 relative overflow-hidden bg-white border-b border-gray-100" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Story */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900">
              <AnimatedText text="Trusted Extension of Healthcare Providers" />
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We are a 100% privately owned, quality-driven Healthcare Outsourcing Specialist. Through long-term client partnerships and our Six Sigma methodology, we deliver unparalleled accuracy and operational excellence.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                'Six Sigma Methodology',
                'Healthcare Outsourcing Specialists',
                'Quality-Driven Approach'
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 text-gray-900 font-medium"
                >
                  <CheckCircle className="text-green-600" size={20} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          {/* Right - Premium Medical Image */}
          <div className="relative">
            <div className="aspect-[4/3] lg:aspect-square w-full relative overflow-hidden rounded-3xl bg-gray-50 border border-gray-200 shadow-xl group">
                 <img 
                   src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
                   alt="Healthcare Facility" 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gray-100 rounded-full blur-[40px] -z-10" />
          </div>
        </div>

        {/* Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <GlassCard className="text-center h-full hover:border-gray-300 transition-colors bg-white shadow-sm">
                <div className={`text-5xl font-extrabold mb-2 ${stat.color}`}>
                  {inView ? stat.value : "0"}
                  {stat.suffix}
                </div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
