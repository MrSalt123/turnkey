'use client';
import { Globe, ArrowLeft, CheckCircle, Shield, Users, Settings, Database } from 'lucide-react';

export default function NIS2Page() {
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
                <Globe size={48} className="text-white" />
                <h1 className="text-white text-4xl font-bold">
                  NIS2
                </h1>
              </div>
              <div className="relative inline-block">
                <button className="relative z-10 bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors border">
                  Get NIS2 Assessment
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
                The Network and Information Systems Directive 2 (NIS2) is the EU directive on measures for a high common level of cybersecurity across the Union. It expands the scope and strengthens the security requirements for critical infrastructure.
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
                What is NIS2?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                NIS2 is the updated EU directive that significantly expands the scope of entities required to implement cybersecurity measures. It covers a broader range of sectors and introduces stricter requirements for risk management, incident reporting, and supply chain security.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The directive aims to create a high common level of cybersecurity across the EU by harmonizing security requirements and strengthening cooperation between member states.
              </p>
            </div>
            <div className="h-full">
              <h2 className="text-gray-900 mb-6">Key Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">EU market access compliance</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Enhanced cybersecurity posture</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Reduced regulatory risk</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Improved supply chain security</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Requirements */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              Key Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              NIS2 introduces comprehensive cybersecurity requirements across multiple domains to ensure robust protection of network and information systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Risk Management */}
            <div className="bg-white p-4 md:p-6 border-2 border-accent rounded-tr-4xl rounded-bl-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Risk Management
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Comprehensive risk management policies and procedures to identify, assess, and mitigate cybersecurity risks.
              </p>
            </div>

            {/* Incident Reporting */}
            <div className="bg-white p-4 md:p-6 border-2 border-accent-light rounded-tr-4xl rounded-bl-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent-light)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <Database size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Incident Reporting
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Mandatory reporting of significant cybersecurity incidents to competent authorities within 24 hours.
              </p>
            </div>

            {/* Supply Chain Security */}
            <div className="bg-white p-4 md:p-6 border-2 border-accent rounded-tr-4xl rounded-bl-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <Settings size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Supply Chain Security
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Enhanced security measures for supply chains and supplier relationships to prevent cyber threats.
              </p>
            </div>

            {/* Business Continuity */}
            <div className="bg-white p-4 md:p-6 border-2 border-accent-light rounded-tr-4xl rounded-bl-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent-light)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <Users size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Business Continuity
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Business continuity and crisis management plans to ensure continued operation during cybersecurity incidents.
              </p>
            </div>

            {/* Training & Awareness */}
            <div className="bg-white p-4 md:p-6 border-2 border-accent rounded-tr-4xl rounded-bl-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <Users size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Training & Awareness
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Regular cybersecurity training and awareness programs for all personnel to build security culture.
              </p>
            </div>

            {/* Access Control */}
            <div className="bg-white p-4 md:p-6 border-2 border-accent-light rounded-tr-4xl rounded-bl-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent-light)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Access Control
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Robust access control mechanisms and authentication procedures to protect network and information systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16" style={{ backgroundColor: 'var(--color-turnkey)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Ready to Implement NIS2?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let our experts guide you through NIS2 compliance and help you meet the EU's cybersecurity requirements while protecting your critical systems.
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
