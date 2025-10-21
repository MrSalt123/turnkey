'use client';
import { ShieldCheck, ArrowLeft, CheckCircle, Users, Lock, Eye, Clock, FileCheck } from 'lucide-react';

export default function SOC2Page() {
  return (
    <div className="min-h-screen relative">
      {/* Hero section */}
      <div
        className="py-32"
        style={{ backgroundColor: 'var(--color-turnkey)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <a 
              href="/frameworks" 
              className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Frameworks
            </a>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Icon, Title, Button */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <ShieldCheck size={48} className="text-white" />
                <h1 className="text-white text-4xl font-bold">
                  SOC 2
                </h1>
              </div>
              <div className="relative inline-block">
                <button className="relative z-10 bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors border">
                  Get SOC 2 Assessment
                </button>
                <div
                  className="absolute -right-1 -bottom-1 w-full h-full"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />
              </div>
            </div>
            
            {/* Right column - Content */}
            <div>
              <p className="text-white/90 text-xl leading-relaxed">
                Service Organization Control 2 (SOC 2) assessments examine internal controls relevant to security, availability, processing integrity, confidentiality, and privacy. This framework is essential for technology companies and service organizations handling customer data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-6">
                What is SOC 2?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                SOC 2 is a voluntary compliance standard for service organizations developed by the American Institute of CPAs (AICPA). It specifies how organizations should manage customer data and focuses on five Trust Service Criteria.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Unlike SOC 1, which focuses on financial reporting, SOC 2 is specifically designed for technology companies and service providers that store, process, or transmit customer data.
              </p>
            </div>
            <div className="h-full">
              <h2 className="text-gray-900 mb-6">Key Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Builds customer trust and confidence</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Competitive advantage in sales</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Identifies security gaps early</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Reduces audit costs over time</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Service Criteria */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              The Five Trust Service Criteria
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SOC 2 assessments evaluate your organization against these five fundamental principles of data protection and system availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Security */}
            <div className="bg-white p-4 md:p-8 border-2 border-accent rounded-tl-4xl rounded-br-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <Lock size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Security
                </h4>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Protection against unauthorized access to systems and data through physical and logical access controls.
              </p>
            </div>

            {/* Availability */}
            <div className="bg-white p-4 md:p-8 border-2 border-accent-light rounded-tr-4xl rounded-bl-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent-light)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <Clock size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Availability
                </h4>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Systems and data are available for operation and use as committed or agreed upon.
              </p>
            </div>

            {/* Processing Integrity */}
            <div className="bg-white p-4 md:p-8 border-2 border-accent rounded-tl-4xl rounded-br-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <FileCheck size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Processing Integrity
                </h4>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                System processing is complete, valid, accurate, timely, and authorized.
              </p>
            </div>

            {/* Confidentiality */}
            <div className="bg-white p-4 md:p-8 border-2 border-accent-light rounded-tr-4xl rounded-bl-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent-light)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <Eye size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Confidentiality
                </h4>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Information designated as confidential is protected according to the entity&apos;s objectives.
              </p>
            </div>

            {/* Privacy */}
            <div className="bg-white p-4 md:p-8 border-2 border-accent rounded-tl-4xl rounded-br-4xl transition-all duration-300 hover:shadow-lg flex flex-col md:col-span-2 lg:col-span-1" style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <Users size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Privacy
                </h4>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Personal information is collected, used, retained, disclosed, and disposed of in conformity with commitments.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* CTA Section */}
      <div className="py-16" style={{ backgroundColor: 'var(--color-turnkey)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Ready to Start Your SOC 2 Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let our experts guide you through the SOC 2 process and help you achieve certification efficiently.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Get Started Today
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
