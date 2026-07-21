import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedText from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';
import SEO from '../components/SEO';
import { Target, TrendingUp, Users } from 'lucide-react';

export default function About() {
  const { ref: timelineRef, inView: timelineInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <div className="pt-48 pb-24 bg-white">
      <SEO 
        title="About Us - Healthcare Specialists" 
        description="Learn about New Way Healthcare's mission to optimize healthcare operations globally with enterprise-grade solutions."
      />
      {/* Header */}
      <div className="container mx-auto px-6 lg:px-12 mb-20 text-center max-w-4xl">
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 text-gray-900">
          <AnimatedText text="Our Story" />
        </h1>
        <p className="text-xl text-gray-600">
          We are healthcare outsourcing specialists, built on a foundation of quality, precision, and long-term client partnerships.
        </p>
      </div>

      {/* Story Split Layout */}
      <div className="container mx-auto px-6 lg:px-12 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Letter From The CEO</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                If you are the best at what you do, then you don't have to worry about finding clients. This is the philosophy that has continued to drive New Way right from the beginning.
              </p>
              <p>
                New Way remains a stalwart in the field of Medical Coding, Revenue Cycle Management (RCM), Dental Billing, Medical record review services, and Life underwriting services. While there are larger companies which are operated based on the interests of shareholders and private equity companies, I have always tried to manage the business based on what is in the best interest of our clients and have worked diligently to instill that same philosophy in my team.
              </p>
              <p>
                New Way strives to form close, long-term relationships with our clients and to become a trusted extension of their practice. Our Mantra is to understand our client's specific needs from both a business and clinical perspective and develop solutions to meet their requirements.
              </p>
              <p>
                I want to establish partnerships with my clients that allow us to succeed mutually and be profitable together. When we are approached by a new client, we verify if they already have a good solution in place. We want to be there to improve what they are doing, not just add clients to us.
              </p>
              <p>
                On the quality perspective - I personally oversee the quality program of our organization implementing many Six Sigma quality methodologies. New Way mainly follows an intense hybrid calculation method (RTY Rolled throughput unit & PP – Parts per defective) to increase quality awareness. The pages that follow are a chronicle of some of the achievements we have experienced along the way, thanks to the partnerships that we have formed with our clients.
              </p>
              
              <div className="pt-6 border-t border-gray-100 mt-6">
                <p className="font-bold text-gray-900 text-lg">Jay</p>
                <p className="font-semibold text-gray-500">CPC., CCS, LSSBB</p>
                <p className="font-medium text-blue-600">CEO & Founder, 100% Privately owned</p>
              </div>
            </div>
          </div>
          <div className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto w-full">
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xl">
               <div className="aspect-[4/5] w-full relative overflow-hidden bg-gray-50">
                 <img src="/team/ceo.jpeg" alt="Jay - CEO & Founder" className="w-full h-full object-cover object-top" />
               </div>
               <div className="p-6 bg-white text-center border-t border-gray-100">
                 <h3 className="text-2xl font-bold text-gray-900 mb-1">Jay</h3>
                 <p className="text-sm font-bold text-gray-500 mb-2">CPC., CCS , LSSBB</p>
                 <p className="text-gray-700 font-medium">CEO & Founder</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Model (Circular Diagram Concept) */}
      <div className="bg-gray-50 py-24 mb-32 border-y border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-900">Our Delivery Model</h2>
          <div className="relative w-full max-w-3xl mx-auto aspect-square md:aspect-video flex items-center justify-center">
            {/* Center */}
            <div className="absolute z-20 flex flex-col items-center justify-center w-32 h-32 bg-gray-900 text-white rounded-full shadow-lg">
              <span className="font-extrabold text-xl">Six Sigma</span>
              <span className="text-sm font-medium">Quality</span>
            </div>
            
            {/* Orbiting Elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-64 h-64 md:w-96 md:h-96 border border-dashed border-gray-300 rounded-full"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white border border-gray-200 shadow-sm rounded-full flex flex-col items-center justify-center text-gray-900">
                <Users size={20} />
                <span className="text-[10px] font-bold mt-1">People</span>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white border border-gray-200 shadow-sm rounded-full flex flex-col items-center justify-center text-gray-900">
                <Target size={20} />
                <span className="text-[10px] font-bold mt-1">Process</span>
              </div>
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-16 h-16 bg-white border border-gray-200 shadow-sm rounded-full flex flex-col items-center justify-center text-gray-900 rotate-90">
                <TrendingUp size={20} />
                <span className="text-[10px] font-bold mt-1">Customer</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>



      {/* Timeline */}
      <div className="container mx-auto px-6 lg:px-12" ref={timelineRef}>
        <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Our Journey</h2>
        <div className="max-w-3xl mx-auto relative border-l-2 border-gray-200 pl-8 space-y-12">
          {[
            { year: '2015', title: 'Foundation', desc: 'Started with a small team of certified medical coders.' },
            { year: '2018', title: 'Expansion', desc: 'Opened new delivery centers and expanded into full RCM.' },
            { year: '2021', title: 'Six Sigma Integration', desc: 'Adopted enterprise-wide quality frameworks.' },
            { year: '2024', title: 'Global Scale', desc: 'Serving hundreds of providers across the US and globally.' },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={timelineInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-gray-900" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.year}</h3>
              <h4 className="text-xl font-bold text-gray-700 mb-2">{item.title}</h4>
              <p className="text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
