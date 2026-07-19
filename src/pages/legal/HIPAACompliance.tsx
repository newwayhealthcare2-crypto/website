import React from 'react';
import AnimatedText from '../../components/AnimatedText';
import GlassCard from '../../components/GlassCard';
import { ShieldPlus, FileCheck, Users, Server } from 'lucide-react';

export default function HIPAACompliance() {
  return (
    <div className="pt-48 pb-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-sm font-bold mb-6">
            Compliance Framework
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 text-gray-900">
            <AnimatedText text="HIPAA Compliance" />
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your patients' Protected Health Information (PHI) is sacred. Our entire operational model is built around exceeding HIPAA requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <GlassCard className="p-8 bg-gray-50 border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
              <FileCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Administrative Safeguards</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We maintain comprehensive policies and procedures for security management. This includes rigorous risk analysis, strict information access management, and continuous security awareness training for all workforce members handling PHI.
            </p>
          </GlassCard>

          <GlassCard className="p-8 bg-gray-50 border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6">
              <ShieldPlus size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Physical Safeguards</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our facilities utilize biometric access controls, 24/7 security personnel, and CCTV monitoring. Workstations are restricted, media is securely disposed of, and unauthorized physical access to systems housing PHI is strictly prevented.
            </p>
          </GlassCard>

          <GlassCard className="p-8 bg-gray-50 border-gray-100 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
              <Server size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Safeguards</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                AES-256 Encryption at Rest & in Transit
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                Role-Based Access Controls (RBAC)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                Mandatory Multi-Factor Authentication (MFA)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                Automated Session Timeouts
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                Comprehensive Audit Logs & Integrity Controls
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                Intrusion Detection & Prevention Systems
              </li>
            </ul>
          </GlassCard>
        </div>

        <div className="bg-gray-900 rounded-3xl p-8 lg:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-fluorescent/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Business Associate Agreements (BAA)</h2>
            <p className="text-gray-300 mb-8 max-w-2xl text-lg">
              As your trusted RCM partner, we act as a Business Associate under HIPAA. We readily enter into strict Business Associate Agreements, legally binding us to the highest standards of PHI protection and holding us accountable for safeguarding your patients' data.
            </p>
            <button className="bg-fluorescent text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-white transition-colors">
              Request a BAA Review
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
