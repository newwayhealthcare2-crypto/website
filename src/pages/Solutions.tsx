import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedText from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';
import { TrendingUp, Banknote, ShieldCheck, Zap, Cog, ArrowRight } from 'lucide-react';

const benefits = [
  { id: 'cost', title: 'Cost Savings', icon: Banknote, desc: '30 - 60% cost savings on payroll, predictable cost model, SLA driven significant reduction in rejections, reduction in overheads including recruitment, quality and training, and non linear growth.' },
  { id: 'effectiveness', title: 'Effectiveness', icon: ShieldCheck, desc: 'Faster turnaround on proposals, enrollment and claims submission time. SL in transaction and financial accuracy, day 1 customer satisfaction, ability to serve individual, Small and Large group with coherent operations reduced re-work administrative effort.' },
  { id: 'scale', title: 'Scalability', icon: TrendingUp, desc: 'Focus investment and management bandwidth on the future, be nimble when adding new volume, global access to labor compensate for local labor market shortfalls.' },
  { id: 'efficiency', title: 'Efficiency', icon: Zap, desc: 'BPI skills and org structure, eliminate systemic issues, continuous improvement in the front to back office value chain, right skill the value chain, reduce unit costs, access to "Centre of Excellence" capabilities, predictable results, and being nimble in change.' }
];

const caseStudies = [
  {
    title: 'Family practice Clinic located in Oklahoma',
    metrics: [
      { label: 'AR Days', before: '45+', after: '34 Days', color: 'text-green-600' },
      { label: 'Collection Rate', before: '51%', after: '63%', color: 'text-gray-900' },
      { label: 'Visits Billed in 24 Hrs', before: '-', after: '98%', color: 'text-blue-600' },
    ],
    desc: 'Client Concerns: Billing was never completed within 24hrs. 50+ days in outstanding AR, almost no follow-up was ever done. Solutions: Dedicated account manager to Client. New Way found a total of 1,100 claims that were created but never submitted to insurance.',
  },
  {
    title: 'Urgent Care location in Oklahoma',
    metrics: [
      { label: 'Revenue Increase', before: '-', after: '10-15%', color: 'text-green-600' },
      { label: 'AR Days Decrease', before: '-', after: '40%', color: 'text-gray-900' },
      { label: 'Same Day Chart Closure', before: '-', after: '94%', color: 'text-blue-600' },
    ],
    desc: 'Client Concerns: More than 80% visits are coded with Level 3, Revenue dropped. Solutions: Dedicated account manager. Found other team is undercoding. Identified $50k worth of Revenue loss for just 1000 charts audited by us.',
  }
];

export default function Solutions() {
  const [activeBenefit, setActiveBenefit] = useState(benefits[0]);

  return (
    <div className="pt-48 pb-24 bg-white">
      {/* Header */}
      <div className="container mx-auto px-6 lg:px-12 mb-20 text-center max-w-4xl">
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 text-gray-900">
          <AnimatedText text="Solutions & Impact" />
        </h1>
        <p className="text-xl text-gray-600">
          Discover how our specialized approach drives measurable business benefits and transforms healthcare operations.
        </p>
      </div>

      {/* Business Benefits - Interactive Layout */}
      <div className="container mx-auto px-6 lg:px-12 mb-32">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Business Benefits</h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* List/Grid of benefits */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              const isActive = activeBenefit.id === benefit.id;
              
              return (
                <button
                  key={benefit.id}
                  onClick={() => setActiveBenefit(benefit)}
                  className={`w-full text-left p-6 rounded-2xl transition-all border ${
                    isActive 
                      ? 'bg-gray-50 border-gray-300 shadow-sm' 
                      : 'bg-white border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-500 border border-gray-200'}`}>
                      <Icon size={24} />
                    </div>
                    <span className={`text-xl font-bold transition-colors ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                      {benefit.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Benefit Details */}
          <div className="lg:col-span-7 h-full">
            <GlassCard className="h-full flex flex-col justify-center min-h-[400px] bg-white border-gray-200">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBenefit.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-20 h-20 rounded-2xl bg-green-50 flex items-center justify-center text-green-700 mb-8 border border-green-100">
                    <activeBenefit.icon size={40} />
                  </div>
                  <h3 className="text-4xl font-extrabold mb-6 text-gray-900">{activeBenefit.title}</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {activeBenefit.desc}
                  </p>
                  <Link 
                    to="/contact" 
                    className="mt-8 inline-flex items-center gap-2 text-gray-900 font-bold cursor-pointer hover:underline group"
                  >
                    Learn more about {activeBenefit.title.toLowerCase()} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="bg-gray-50 py-24 border-y border-gray-200">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Proven Results</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <GlassCard key={idx} className="flex flex-col h-full bg-white shadow-sm border-gray-200 hover:-translate-y-1 transition-transform">
                <div className="mb-8">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200 text-sm font-bold mb-6">
                    Case Study 0{idx + 1}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">{study.title}</h3>
                  <p className="text-gray-600">{study.desc}</p>
                </div>
                
                <div className="mt-auto space-y-4">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <span className="font-medium text-gray-600">{metric.label}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-400 line-through text-sm">{metric.before}</span>
                        <ArrowRight size={16} className="text-gray-400" />
                        <span className={`font-bold text-xl ${metric.color}`}>{metric.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
      {/* Who We Serve */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Who We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Coding & RCM billing Companies', desc: 'We have a team that specializes in vendor relationships. They are also responsible for ensuring US based vendors are both profitable, compliant and have seamless transition of work through outsourcing initiatives.' },
              { title: 'IP Facilities', desc: 'With dedicated members up to date on recent IP and OP services, DRG requirements, MIPS and clinical documentation improvement, facilities have benefited both in quality and revenue.' },
              { title: 'Small to mid-sized medical Hospitals, Clinics and Individual Physicians', desc: 'Having a small office means close attention to even minute change in revenue. That is why our team are experts in deciphering EHR template errors, bell curve shifts and potential reimbursement loss due to incomplete documentation.' },
              { title: 'Home Health Providers', desc: 'Home health coding has faced more RAC and payer related audits in the past 3 years than ever before. That is why our team participates in CMS-driven training to ensure their home health knowledge is up to par.' },
              { title: 'Insurances', desc: 'Workers Comp Insurances and Companies, Life insurances.' },
            ].map((client, i) => (
              <GlassCard key={i} className="bg-gray-50 border-gray-100 shadow-sm flex flex-col h-full border-t-4 border-t-blue-600">
                <h3 className="text-xl font-bold mb-4 text-gray-900">{client.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-1">{client.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
