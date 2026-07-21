import React from 'react';
import AnimatedText from '../components/AnimatedText';
import SecurityOverview from '../components/home/SecurityOverview';
import GlassCard from '../components/GlassCard';
import SEO from '../components/SEO';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Security() {
  return (
    <div className="pt-48 pb-24 bg-white">
      <SEO 
        title="Security & Compliance - HIPAA Certified" 
        description="We employ industry-leading frameworks to ensure absolute compliance and data integrity for your protected health information."
      />
      <div className="container mx-auto px-6 lg:px-12 mb-12 text-center max-w-4xl">
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 text-gray-900">
          <AnimatedText text="Security & Compliance" />
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your data security is our highest priority. We employ industry-leading frameworks to ensure absolute compliance and data integrity.
        </p>
        <p className="text-left text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm text-sm md:text-base">
          New Way Healthcare Services considers information security management to be a risk, as well as a market differentiator and hence invests appropriately in implementing strong information security management systems. The information security program at New Way is led by the Chief Security Officer (“CSO”), who in turn is assisted by a dedicated team of security professionals. To ensure a minimum baseline standard for information security across the enterprise, New Ways has registered for ISO certification by a qualified external assessor. Internal information security audits are done which cover information asset management procedures, IT security, personnel security, physical and environmental security, business continuity, change management, incident management, and compliance with contractual obligations.
        </p>
      </div>

      <SecurityOverview />

      <div className="container mx-auto px-6 lg:px-12 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard className="h-full border-t-4 border-t-gray-900 bg-white border-x-gray-200 border-b-gray-200">
            <ShieldCheck className="text-gray-900 mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Physical Safeguards</h3>
            <ul className="space-y-4">
              {[
                'Facility access control - All employees have restricted access to information that is exclusive to the performance of their duties.',
                'General access - 24 hours security guards, badges, sign in desk, visitor badges and escorts.',
                'Cameras & Biometric cards to prevent unauthorized entry into production areas.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="h-full border-t-4 border-t-gray-900 bg-white border-x-gray-200 border-b-gray-200">
            <ShieldCheck className="text-gray-900 mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Technical Safeguards</h3>
            <ul className="space-y-4">
              {[
                'Symantec EndPoint Protection & HIPAA Compliant Data Transfer.',
                'Encryption, Firewall & VPN Tunnels.',
                'Network room - Sensitive equipment is secured separately from general-purpose work areas.',
                'Device and media control - All drives are removed/disabled from workstations. Asset Management tools and policies to remove, dispose and transfer e-media.',
                'USB ports are restricted only to keyboard, mouse and printers. Removable storage devices are inaccessible.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="h-full border-t-4 border-t-gray-900 bg-white border-x-gray-200 border-b-gray-200">
            <ShieldCheck className="text-gray-900 mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Administrative Safeguards</h3>
            <ul className="space-y-4">
              {[
                'Identify all risk areas related to e-PHI.',
                'Develop people policies, physical and technical safeguards.',
                'Training, awareness, and implementation to all employees.',
                'Develop organization wide procedure to mitigate risks including Access as per need.',
                'Non-Disclosure Agreement with clients, Vendors, Visitors and employees.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>

      {/* Certifications & Achievements Section */}
      <div className="container mx-auto px-6 lg:px-12 mt-32 mb-20 text-center max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-16 leading-tight">
          Certifications &<br />Achievements
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16 items-end justify-center">
          
          {/* ISO 9001 */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full border-[6px] border-blue-600 flex items-center justify-center mb-6 shadow-sm">
              <div className="text-center">
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest leading-none mb-1">Certified</p>
                <p className="text-2xl font-black text-blue-600 leading-none">ISO</p>
                <p className="text-[10px] font-bold text-blue-600 leading-none mt-1">9001:2015</p>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900">ISO 9001</h3>
          </div>

          {/* ISO 27001 */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full border-[6px] border-blue-600 bg-blue-600 text-white flex items-center justify-center mb-6 shadow-sm">
              <div className="text-center">
                <p className="text-3xl font-black leading-none">ISO</p>
                <p className="text-sm font-bold mt-1">27001</p>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900">ISO 27001</h3>
          </div>

          {/* SOC 2 */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-28 bg-gradient-to-b from-gray-200 to-gray-400 rounded-b-3xl rounded-t-xl flex flex-col items-center justify-center mb-6 shadow-md border border-gray-300 relative">
              <div className="absolute -top-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-sm">
                <div className="w-3 h-4 border-2 border-white rounded-t-sm"></div>
              </div>
              <p className="text-xl font-black text-gray-800 mt-2">SOC 2</p>
              <p className="text-sm font-bold text-gray-800">TYPE 2</p>
            </div>
            <h3 className="text-xl font-bold text-gray-900">SOC 2 TYPE 2</h3>
          </div>

          {/* HIPAA */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full bg-blue-700 flex items-center justify-center mb-6 shadow-sm">
              <div className="text-white flex items-center justify-center">
                <span className="text-4xl">⚕️</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900">HIPAA</h3>
          </div>

          {/* AHIMA */}
          <div className="flex flex-col items-center">
            <div className="h-28 flex items-center justify-center mb-6">
              <div className="text-center">
                <p className="text-3xl font-black text-blue-500 tracking-tighter">AHIMA</p>
                <p className="text-[9px] text-blue-500 mt-1">American Health Information<br/>Management Association</p>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900">AHIMA</h3>
          </div>

          {/* AAPC */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full border-4 border-emerald-800 bg-emerald-800 text-white flex items-center justify-center mb-6 shadow-sm relative">
              <div className="w-24 h-24 rounded-full border border-white flex items-center justify-center bg-white">
                <p className="text-2xl font-black text-emerald-800">CPC</p>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900">AAPC</h3>
          </div>

        </div>
      </div>
    </div>
  );
}
