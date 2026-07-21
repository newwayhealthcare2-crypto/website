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
    </div>
  );
}
