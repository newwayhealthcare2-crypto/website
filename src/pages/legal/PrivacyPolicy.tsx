import React from 'react';
import AnimatedText from '../../components/AnimatedText';
import GlassCard from '../../components/GlassCard';
import { ShieldCheck, Lock } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-48 pb-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900">
          <AnimatedText text="Privacy Policy" />
        </h1>
        <p className="text-gray-500 mb-12">Last Updated: July 2026</p>

        <div className="prose prose-lg max-w-none text-gray-600">
          <GlassCard className="p-8 mb-12 bg-gray-50 border-gray-100 flex items-start gap-4 shadow-sm">
            <ShieldCheck className="text-green-600 shrink-0 mt-1" size={32} />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Commitment to Privacy</h3>
              <p className="text-sm">
                New Way Healthcare Services is committed to protecting your privacy. This policy outlines our practices regarding the collection, use, and disclosure of your information through our services, website, and applications.
              </p>
            </div>
          </GlassCard>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">1. Information We Collect</h2>
          <p>
            We collect information that identifies, relates to, describes, or could reasonably be linked directly or indirectly with you or your organization ("Personal Information"). This includes:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Contact Information:</strong> Names, titles, email addresses, phone numbers, and physical addresses.</li>
            <li><strong>Business Information:</strong> Organizational details, NPI numbers, billing configurations, and operational metrics.</li>
            <li><strong>Protected Health Information (PHI):</strong> When acting as a Business Associate, we collect PHI governed by HIPAA strictly for the purpose of providing RCM and coding services.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">2. How We Use Your Information</h2>
          <p>
            We use the information we collect for the following business purposes:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>To provide, maintain, and improve our Revenue Cycle Management and coding services.</li>
            <li>To communicate with you regarding account updates, service changes, and security alerts.</li>
            <li>To ensure compliance with legal and regulatory obligations, including HIPAA and ISO standards.</li>
            <li>To analyze usage trends and optimize our operational processes.</li>
          </ul>

          <GlassCard className="p-8 mb-12 bg-blue-50 border-blue-100 flex items-start gap-4 shadow-sm mt-8">
            <Lock className="text-blue-600 shrink-0 mt-1" size={32} />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">PHI & HIPAA Adherence</h3>
              <p className="text-sm">
                Any Protected Health Information (PHI) entrusted to us is processed strictly in accordance with the Business Associate Agreement (BAA) established with your organization and governed by the Health Insurance Portability and Accountability Act (HIPAA).
              </p>
            </div>
          </GlassCard>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">3. Information Sharing and Disclosure</h2>
          <p>
            We do not sell your personal information. We may share information in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>With Service Providers:</strong> Trusted third-party vendors who assist us in operating our infrastructure (under strict confidentiality agreements).</li>
            <li><strong>For Legal Reasons:</strong> If required by law, regulation, subpoena, or lawful requests by public authorities.</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">4. Data Security</h2>
          <p>
            We implement industry-leading technical, physical, and administrative safeguards to protect your data. This includes encryption at rest and in transit, strict access controls, and regular audits in compliance with our ISO/IEC 27001:2013 certification.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">5. Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, please contact us using the information below.
          </p>

          <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
            <p className="mb-2">If you have any questions about this Privacy Policy, please contact our Privacy Officer:</p>
            <p className="font-medium text-gray-900">Email: privacy@newwayhealthcare.com</p>
            <p className="font-medium text-gray-900">Phone: +1 307 463 4168</p>
          </div>
        </div>
      </div>
    </div>
  );
}
