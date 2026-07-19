import React from 'react';
import AnimatedText from '../../components/AnimatedText';
import GlassCard from '../../components/GlassCard';
import { Scale, FileText } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="pt-48 pb-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900">
          <AnimatedText text="Terms of Service" />
        </h1>
        <p className="text-gray-500 mb-12">Last Updated: July 2026</p>

        <div className="prose prose-lg max-w-none text-gray-600">
          <GlassCard className="p-8 mb-12 bg-gray-50 border-gray-100 flex items-start gap-4 shadow-sm">
            <Scale className="text-blue-600 shrink-0 mt-1" size={32} />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Agreement to Terms</h3>
              <p className="text-sm">
                By accessing or using the services provided by New Way Healthcare Services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
              </p>
            </div>
          </GlassCard>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">1. Use of Services</h2>
          <p>
            You agree to use our Revenue Cycle Management, medical coding, and healthcare business services only for lawful purposes and in accordance with these Terms. You shall not use our services in any manner that could disable, overburden, damage, or impair the site or interfere with any other party's use of our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">2. Intellectual Property Rights</h2>
          <p>
            The website, its features, functionality, and all related services (including but not limited to all information, software, text, displays, images, video, and audio) are owned by New Way Healthcare Services, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>

          <GlassCard className="p-8 mb-12 bg-yellow-50 border-yellow-100 flex items-start gap-4 shadow-sm mt-8">
            <FileText className="text-yellow-600 shrink-0 mt-1" size={32} />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Master Service Agreements</h3>
              <p className="text-sm">
                For our B2B healthcare clients, these Terms of Service serve as a general framework. Your specific engagement with New Way Healthcare Services will be governed by a dedicated Master Service Agreement (MSA) and Business Associate Agreement (BAA).
              </p>
            </div>
          </GlassCard>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">3. Limitation of Liability</h2>
          <p>
            In no event will New Way Healthcare Services, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">4. Governing Law</h2>
          <p>
            All matters relating to the Website and these Terms of Service, and any dispute or claim arising therefrom or related thereto, shall be governed by and construed in accordance with the internal laws of the jurisdiction in which our Corporate Office is located, without giving effect to any choice or conflict of law provision or rule.
          </p>

          <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
            <p className="mb-2">For any questions regarding these Terms, please contact our legal team:</p>
            <p className="font-medium text-gray-900">Email: legal@newwayhealthcare.com</p>
            <p className="font-medium text-gray-900">Phone: +1 307 463 4168</p>
          </div>
        </div>
      </div>
    </div>
  );
}
