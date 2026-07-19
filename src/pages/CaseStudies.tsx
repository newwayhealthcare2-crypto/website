import React from 'react';
import { motion } from 'framer-motion';

const caseStudiesData = [
  {
    title: 'Case Study - 1',
    clientType: 'Family practice Clinic located in Oklahoma',
    concerns: [
      'Billing was never completed within 24hrs',
      '50+ days in outstanding AR, almost no proper follow-up was ever done'
    ],
    solutions: [
      'Dedicated account manager to Client',
      'New Way Found a total of 1,100 claims that were created but never submitted to insurance'
    ],
    results: [
      'Brought down the average AR days from 45+ to 34 days in a month',
      'Increased the collection percentage from 51% to 63%',
      'Sharp reduction for Client in administrative costs'
    ],
    metrics: [
      { highlight: '1.4', text: 'Million', subtext: 'Patients visits annually' },
      { highlight: '35', text: 'Days', subtext: 'in Accounts Receivables' },
      { highlight: '98%', text: 'visits', subtext: 'billed in 24 Hours' },
    ]
  },
  {
    title: 'Case Study - 2',
    clientType: 'Urgent Care location in Oklahoma',
    concerns: [
      'More than 80% visits are coded with Level 3 (999203/99213)',
      'Revenue is dropped'
    ],
    solutions: [
      'Dedicated account manager to Client',
      'New Way Found the other team is coding just level 3 because of not considering the diagnosis with systemic symptoms in MDM category and also the risk factor.',
      'New Way identified $50k worth of Revenue loss for just 1000 charts audited by us'
    ],
    results: [
      'Client revenue is increased by 10-15% from what they have been getting',
      'Equal and accepted distribution of charts throughout all levels in EM coding'
    ],
    metrics: [
      { highlight: '40%', text: '', subtext: 'Decrease in AR days' },
      { highlight: '94%', text: '', subtext: 'Charts closed on same day' },
    ]
  }
];

export default function CaseStudies() {
  return (
    <div className="pt-40 bg-white min-h-screen">
      {caseStudiesData.map((study, index) => (
        <section 
          key={index}
          className="relative min-h-[90vh] flex flex-col justify-center py-20 overflow-hidden border-b-8 border-gray-100"
        >
          {/* Background Image with Gradient Overlay */}
          <div 
            className="absolute inset-0 z-0" 
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] z-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-0" />

          <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full max-w-7xl">
            {/* Header */}
            <div className="flex justify-between items-start mb-12">
              <div className="inline-block">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2 font-primary tracking-tight">
                  {study.title}
                </h2>
                <div className="h-2 w-full bg-fluorescent rounded-r-full shadow-sm"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              {/* Left Column: Text Content Block */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5 bg-[#333333] rounded-[40px] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
              >
                {/* Subtle overlay reflection */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10">
                  <div className="mb-8">
                    <p className="text-gray-300 text-sm mb-1">Client:</p>
                    <h3 className="text-2xl lg:text-3xl font-bold leading-tight text-white font-primary">
                      {study.clientType}
                    </h3>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-bold mb-3 text-white">Client Concerns:</h4>
                    <ul className="space-y-2">
                      {study.concerns.map((text, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-3.5 h-3.5 rounded-full bg-fluorescent shrink-0 mt-1.5 shadow-[0_0_8px_rgba(166,255,0,0.4)]"></span>
                          <span className="text-gray-200 text-sm leading-relaxed">{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-bold mb-3 text-white">Solutions:</h4>
                    <ul className="space-y-2">
                      {study.solutions.map((text, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-3.5 h-3.5 rounded-full bg-fluorescent shrink-0 mt-1.5 shadow-[0_0_8px_rgba(166,255,0,0.4)]"></span>
                          <span className="text-gray-200 text-sm leading-relaxed">{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 text-white">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((text, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-3.5 h-3.5 rounded-full bg-fluorescent shrink-0 mt-1.5 shadow-[0_0_8px_rgba(166,255,0,0.4)]"></span>
                          <span className="text-gray-200 text-sm leading-relaxed">{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Metrics */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-7 flex flex-col gap-12 lg:gap-16 py-8"
              >
                {study.metrics.map((metric, i) => (
                  <div key={i} className="flex flex-col">
                    <div className="flex items-baseline">
                      <span className="bg-fluorescent text-gray-900 font-extrabold text-6xl md:text-8xl tracking-tighter px-2 leading-none inline-block">
                        {metric.highlight}
                      </span>
                      {metric.text && (
                        <span className="text-gray-900 font-extrabold text-5xl md:text-7xl tracking-tight leading-none ml-1">
                          {metric.text}
                        </span>
                      )}
                    </div>
                    {metric.subtext && (
                      <div className="text-gray-900 font-bold text-2xl md:text-4xl mt-2 tracking-tight">
                        {metric.subtext}
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>

            </div>
          </div>
          

        </section>
      ))}
    </div>
  );
}
