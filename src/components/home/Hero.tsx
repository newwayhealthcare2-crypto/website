import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Activity, ShieldCheck, FileText } from 'lucide-react';
import AnimatedText from '../AnimatedText';
import GlassCard from '../GlassCard';

export default function Hero() {
  return (
    <section className="relative flex flex-col lg:min-h-screen lg:flex-row items-center pt-32 sm:pt-36 pb-12 lg:py-0 lg:pt-20 overflow-hidden bg-white">
      {/* Subtle light background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gray-50 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-50 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-block px-4 py-1.5 rounded-full bg-fluorescent/20 text-gray-900 border border-fluorescent text-sm font-bold mb-6">
              Leading RCM & Coding Partner
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-gray-900">
              <AnimatedText text="Excellence Is Our Insignia" />
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 lg:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Helping Healthcare Organizations Improve Revenue, Accuracy and Operational Excellence through Intelligent Revenue Cycle Management, Medical Coding and Healthcare Business Services.
            </p>
            
            <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center justify-center lg:justify-start gap-4">
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group text-center shadow-lg shadow-gray-900/20">
                Get Free Consultation
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-gray-900 font-bold rounded-full hover:bg-gray-50 transition-colors text-center shadow-sm">
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right Content - Premium Natural Imagery */}
          <div className="relative h-[320px] sm:h-[400px] lg:h-[550px] w-full rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50 group mt-4 lg:mt-0">
            {/* High-quality medical/professional image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-700 ease-in-out"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
            
            {/* Floating Glass Stat Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 lg:right-8"
            >
              <div className="p-4 lg:p-5 bg-white/95 backdrop-blur-md shadow-xl border border-white/50 flex items-center justify-between rounded-xl lg:rounded-2xl">
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                    <ShieldCheck className="w-6 h-6 lg:w-7 lg:h-7" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-extrabold text-lg lg:text-xl">98% Accuracy</div>
                    <div className="text-gray-500 font-medium text-xs lg:text-sm">First Pass Resolution</div>
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                  <div className="text-gray-900 font-extrabold text-lg lg:text-xl">Six Sigma</div>
                  <div className="text-green-600 font-bold text-xs lg:text-sm">Quality Framework</div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
