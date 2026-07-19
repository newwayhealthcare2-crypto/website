import React from 'react';
import AnimatedText from '../../components/AnimatedText';
import GlassCard from '../../components/GlassCard';
import { Award, CheckCircle, Activity, Globe } from 'lucide-react';

export default function ISOCertifications() {
  return (
    <div className="pt-48 pb-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-50 text-yellow-700 border border-yellow-100 text-sm font-bold mb-6">
            Global Standards
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 text-gray-900">
            <AnimatedText text="ISO Certifications" />
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our commitment to quality and security is independently verified against rigorous, internationally recognized standards.
          </p>
        </div>

        <div className="space-y-12">
          
          <GlassCard className="p-8 lg:p-12 bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100">
                <CheckCircle size={48} />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-3xl font-bold text-gray-900">ISO 9001:2015</h2>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">Certified</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-500 mb-6">Quality Management Systems</h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  This certification demonstrates our unwavering commitment to consistently providing services that meet client and regulatory requirements. It highlights our dedication to continuous improvement and operational excellence in Revenue Cycle Management.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 font-medium">
                  <li className="flex items-center gap-2"><Activity className="text-blue-500" size={16} /> Process-Oriented Approach</li>
                  <li className="flex items-center gap-2"><Activity className="text-blue-500" size={16} /> Continuous Monitoring</li>
                  <li className="flex items-center gap-2"><Activity className="text-blue-500" size={16} /> Evidence-Based Decision Making</li>
                  <li className="flex items-center gap-2"><Activity className="text-blue-500" size={16} /> Defect Prevention</li>
                </ul>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8 lg:p-12 bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 border border-indigo-100">
                <Globe size={48} />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-3xl font-bold text-gray-900">ISO/IEC 27001:2013</h2>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">Certified</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-500 mb-6">Information Security Management Systems</h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  ISO 27001 is the leading international standard for information security. This certification validates that our physical, technical, and administrative controls effectively protect the confidentiality, integrity, and availability of all data entrusted to us.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 font-medium">
                  <li className="flex items-center gap-2"><Activity className="text-indigo-500" size={16} /> Robust Risk Management</li>
                  <li className="flex items-center gap-2"><Activity className="text-indigo-500" size={16} /> Secure IT Infrastructure</li>
                  <li className="flex items-center gap-2"><Activity className="text-indigo-500" size={16} /> Incident Response Readiness</li>
                  <li className="flex items-center gap-2"><Activity className="text-indigo-500" size={16} /> Regular Independent Audits</li>
                </ul>
              </div>
            </div>
          </GlassCard>

        </div>
      </div>
    </div>
  );
}
