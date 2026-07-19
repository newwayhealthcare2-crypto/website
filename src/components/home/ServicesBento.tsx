import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  BadgeDollarSign, 
  FileText, 
  ClipboardType, 
  Activity, 
  ShieldPlus,
  ArrowUpRight
} from 'lucide-react';
import AnimatedText from '../AnimatedText';
import GlassCard from '../GlassCard';

const services = [
  {
    title: 'Revenue Cycle Management',
    desc: 'End-to-end RCM solutions optimizing cash flow and minimizing denials.',
    icon: BadgeDollarSign,
    colSpan: 'lg:col-span-2',
    rowSpan: 'lg:row-span-2',
    highlight: true,
  },
  {
    title: 'Medical Coding',
    desc: 'Accurate coding by certified professionals to ensure compliance.',
    icon: Stethoscope,
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1',
  },
  {
    title: 'Dental Billing',
    desc: 'Specialized dental billing to improve collections and reduce AR.',
    icon: ShieldPlus,
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1',
  },
  {
    title: 'Medical Record Review',
    desc: 'Thorough chart audits and clinical documentation improvement.',
    icon: FileText,
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1',
  },
  {
    title: 'AR Follow-up',
    desc: 'Aggressive follow-up to recover outstanding insurance claims.',
    icon: Activity,
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1',
  },
  {
    title: 'Provider Enrollment',
    desc: 'Streamlined credentialing and enrollment for practitioners.',
    icon: ClipboardType,
    colSpan: 'lg:col-span-2',
    rowSpan: 'lg:row-span-1',
  },
];

export default function ServicesBento() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 relative bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900">
            <AnimatedText text="Comprehensive Healthcare Solutions" />
          </h2>
          <p className="text-gray-600 text-lg">
            We provide specialized business process outsourcing services designed to enhance operational efficiency and maximize revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${service.colSpan} ${service.rowSpan} h-full`}
              >
                {service.highlight ? (
                  <div className="relative h-full flex flex-col group cursor-pointer border border-gray-900 rounded-2xl overflow-hidden bg-gray-900 shadow-xl">
                    <img 
                      src="/gallery/WhatsApp Image 2026-07-19 at 12.48.51 PM (2).jpeg" 
                      alt={service.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                    
                    <div className="relative z-10 p-6 lg:p-8 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-auto">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors bg-white/20 text-white backdrop-blur-md shadow-sm">
                          <Icon size={28} />
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white/20 text-white bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0 backdrop-blur-md">
                          <ArrowUpRight size={20} />
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <h3 className="font-bold mb-3 text-3xl text-white drop-shadow-sm">
                          {service.title}
                        </h3>
                        <p className="text-base leading-relaxed text-gray-200 max-w-md drop-shadow-sm">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <GlassCard
                    className="h-full flex flex-col group cursor-pointer border bg-white border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all"
                  >
                    <div className="flex justify-between items-start mb-auto">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors bg-green-50 text-green-700 group-hover:bg-green-100 group-hover:text-green-800">
                        <Icon size={28} />
                      </div>
                      <div className="w-10 h-10 rounded-full border border-gray-200 text-gray-900 bg-gray-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold mb-3 text-xl text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        {service.desc}
                      </p>
                    </div>
                  </GlassCard>
                )}
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
           <Link to="/services" className="inline-block px-8 py-3 bg-white border border-gray-200 text-gray-900 font-bold rounded-full hover:bg-gray-50 transition-colors shadow-sm">
              View All Services
           </Link>
        </div>
      </div>
    </section>
  );
}
