import React from 'react';
import AnimatedText from '../components/AnimatedText';
import GlassCard from '../components/GlassCard';
import { Stethoscope, BadgeDollarSign, ShieldPlus, FileText, ClipboardType, Activity, CheckCircle2 } from 'lucide-react';

const servicesData = [
  {
    title: 'Coding Services',
    icon: Stethoscope,
    items: ['ED Coding', 'E/M Coding', 'Radiology & IVR', 'Surgery', 'IP & DRG', 'HCC Coding', 'Home Health Coding', 'Only Diagnosis Coding']
  },
  {
    title: 'Revenue Cycle Management',
    icon: BadgeDollarSign,
    items: ['Provider enrollment & credentialing', 'Obtaining referrals and authorization', 'Scrubbing & submission', 'Pre-registering and patient access', 'Payment posting, Claim submission', 'A/R follow up with insurance and patient']
  },
  {
    title: 'Medical Records Review & Summary Services',
    icon: FileText,
    items: ['Sorting & Categorizing of medical records based on Client needs', 'Medical record review', 'Deposition Summary', 'Bill review', 'Record retrieval']
  },
  {
    title: 'Medical Scribing Services',
    icon: ClipboardType,
    items: ['Virtual scribing on all specialties', 'Realtime charting', 'Dedicated scribe for each provider']
  },
  {
    title: 'Dental Billing and Verification',
    icon: ShieldPlus,
    items: ['Comprehensive dental billing and verification services']
  },
  {
    title: 'Life Underwriting Services',
    icon: Activity,
    items: ['Life underwriting services', 'Life care planning services']
  }
];

export default function Services() {
  return (
    <div className="pt-48 pb-24 bg-gray-50">
      {/* Header */}
      <div className="container mx-auto px-6 lg:px-12 mb-20 text-center max-w-4xl">
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 text-gray-900">
          <AnimatedText text="Our Services" />
        </h1>
        <p className="text-xl text-gray-600">
          Comprehensive healthcare outsourcing solutions tailored to optimize your operations and maximize revenue.
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, i) => {
            const Icon = service.icon;
            return (
              <GlassCard key={i} className="bg-white border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col h-full border-t-4 border-t-gray-900">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-900">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight">{service.title}</h3>
                </div>
                <ul className="space-y-3 flex-1">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
