import React from 'react';
import AnimatedText from '../../components/AnimatedText';
import GlassCard from '../../components/GlassCard';
import { Network, Database, LockKeyhole, Cpu } from 'lucide-react';

export default function SecurityArchitecture() {
  return (
    <div className="pt-48 pb-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-900 border border-gray-200 text-sm font-bold mb-6">
            Infrastructure & Security
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 text-gray-900">
            <AnimatedText text="Security Architecture" />
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A deep dive into the technical infrastructure and controls that keep your healthcare data impenetrable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <GlassCard className="p-8 bg-gray-900 text-white border-gray-800 shadow-xl">
            <Network className="text-fluorescent mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">Network Security</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Our network perimeter is fortified with next-generation firewalls (NGFW) and Intrusion Prevention Systems (IPS). We utilize segmented network architectures to isolate critical PHI environments from general corporate networks.
            </p>
            <ul className="space-y-2 text-sm font-medium text-gray-300">
              <li className="flex items-center gap-2">✓ Virtual Private Networks (VPN) with strict IP whitelisting</li>
              <li className="flex items-center gap-2">✓ DDoS Protection and Mitigation</li>
              <li className="flex items-center gap-2">✓ 24/7 Network Traffic Analysis (NTA)</li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8 bg-white border border-gray-200 shadow-sm">
            <Database className="text-blue-600 mb-6" size={40} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Data is encrypted at every stage. We utilize AES-256 encryption for data at rest across all databases and storage volumes, and TLS 1.2+ for all data traversing our networks.
            </p>
            <ul className="space-y-2 text-sm font-medium text-gray-700">
              <li className="flex items-center gap-2">✓ Automated Key Rotation and Management</li>
              <li className="flex items-center gap-2">✓ Secure Remote Backups with Immutable Storage</li>
              <li className="flex items-center gap-2">✓ Real-time Database Activity Monitoring</li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8 bg-white border border-gray-200 shadow-sm">
            <LockKeyhole className="text-purple-600 mb-6" size={40} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Identity & Access Management</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Zero Trust architecture dictates our access policies. Access is strictly granted on a Principle of Least Privilege (PoLP) and requires robust authentication mechanisms.
            </p>
            <ul className="space-y-2 text-sm font-medium text-gray-700">
              <li className="flex items-center gap-2">✓ Mandatory Multi-Factor Authentication (MFA)</li>
              <li className="flex items-center gap-2">✓ Centralized Directory Services (Active Directory/SSO)</li>
              <li className="flex items-center gap-2">✓ Continuous Access Auditing and Revocation</li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8 bg-white border border-gray-200 shadow-sm">
            <Cpu className="text-green-600 mb-6" size={40} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Endpoint Security</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Every device accessing our network is tightly controlled. We deploy advanced Endpoint Detection and Response (EDR) solutions to monitor and block malicious activity at the host level.
            </p>
            <ul className="space-y-2 text-sm font-medium text-gray-700">
              <li className="flex items-center gap-2">✓ Mobile Device Management (MDM) Enforced</li>
              <li className="flex items-center gap-2">✓ Data Loss Prevention (DLP) Policies</li>
              <li className="flex items-center gap-2">✓ Disabled USB Ports and Removable Media</li>
            </ul>
          </GlassCard>

        </div>
      </div>
    </div>
  );
}
