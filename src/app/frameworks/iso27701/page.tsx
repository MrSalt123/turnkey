'use client';
import { ClipboardCheck, ArrowLeft, CheckCircle, Shield, Eye, UserCheck, Database } from 'lucide-react';

export default function ISO27701Page() {
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
                <ClipboardCheck size={48} className="text-white" />
                <h1 className="text-white text-4xl font-bold">
                  ISO 27701
                </h1>
              </div>
              <div className="relative inline-block">
                <button className="relative z-10 bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors border">
                  Get ISO 27701 Assessment
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
                ISO 27701 is a privacy extension to ISO 27001, providing guidance on protecting personal data and ensuring privacy compliance. It establishes requirements and guidelines for implementing a Privacy Information Management System (PIMS).
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                What is ISO 27701?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                ISO 27701 extends ISO 27001 by adding privacy-specific requirements and controls. It helps organizations establish, implement, maintain, and continually improve a Privacy Information Management System (PIMS) as part of their overall ISMS.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                This standard is particularly valuable for organizations that process personal data and need to demonstrate compliance with privacy regulations like GDPR, CCPA, and other data protection laws.
              </p>
            </div>
            <div className="h-full">
              <h2 className="text-xl font-bold mb-6 text-gray-900">Key Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-gray-700">Enhanced privacy protection</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-gray-700">GDPR and CCPA compliance support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-gray-700">Integrated with ISO 27001</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-gray-700">Reduced privacy risks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Core Components */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Core Components of ISO 27701
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ISO 27701 builds upon ISO 27001 by adding privacy-specific requirements and controls for comprehensive data protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Privacy Policies */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Privacy Policies
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Development and implementation of comprehensive privacy policies that govern how personal data is collected, processed, and protected.
              </p>
            </div>

            {/* Data Subject Rights */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <UserCheck size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Data Subject Rights
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Processes and procedures to handle data subject rights including access, rectification, erasure, and portability requests.
              </p>
            </div>

            {/* Data Processing Records */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Database size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Data Processing Records
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Comprehensive record-keeping of data processing activities, purposes, and legal bases for processing personal data.
              </p>
            </div>

            {/* Consent Management */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Eye size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Consent Management
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Systems and processes for obtaining, managing, and documenting consent for personal data processing activities.
              </p>
            </div>

            {/* Third-Party Management */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <ClipboardCheck size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Third-Party Management
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Due diligence and ongoing monitoring of third-party processors to ensure they meet privacy and security requirements.
              </p>
            </div>

            {/* Privacy Impact Assessments */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Privacy Impact Assessments
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Systematic assessment of privacy risks associated with new projects or changes to existing data processing activities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16" style={{ backgroundColor: 'var(--color-turnkey)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Ready to Implement ISO 27701?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let our experts guide you through ISO 27701 implementation and help you achieve comprehensive privacy compliance.
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
