'use client';
import { Cpu, ArrowLeft, CheckCircle, Shield, Settings, Users, AlertTriangle } from 'lucide-react';

export default function ISO27001Page() {
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
                <Cpu size={48} className="text-white" />
                <h1 className="text-white text-4xl font-bold">
                  ISO 27001
                </h1>
              </div>
              <div className="relative inline-block">
                <button className="relative z-10 bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors border">
                  Get ISO 27001 Assessment
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
                ISO 27001 is the international standard for information security management systems (ISMS). It provides a systematic approach to managing sensitive company information, ensuring it remains secure through people, processes, and technology.
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
                What is ISO 27001?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                ISO 27001 is an internationally recognized standard that helps organizations manage the security of assets such as financial information, intellectual property, employee details, or information entrusted to you by third parties.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The standard provides a comprehensive set of controls comprising best practices in information security and follows a risk-based approach to security management.
              </p>
            </div>
            <div className="h-full">
              <h2 className="text-xl font-bold mb-6 text-gray-900">Key Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-gray-700">International recognition and credibility</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-gray-700">Risk-based approach to security</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-gray-700">Continuous improvement framework</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-gray-700">Reduces security incidents</span>
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
              Core Components of ISO 27001
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ISO 27001 is built on a foundation of risk management and continuous improvement, with several key components working together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Risk Management */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <AlertTriangle size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Risk Management
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Systematic identification, assessment, and treatment of information security risks to protect organizational assets.
              </p>
            </div>

            {/* Security Controls */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Security Controls
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                114 security controls across 14 categories to protect information assets and manage security risks.
              </p>
            </div>

            {/* Management System */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Settings size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Management System
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Structured approach to managing information security through policies, procedures, and continuous monitoring.
              </p>
            </div>

            {/* People & Training */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Users size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  People & Training
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Ensuring all personnel are aware of their information security responsibilities and are properly trained to fulfill them.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16" style={{ backgroundColor: 'var(--color-turnkey)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-gray-900 mb-6">
            Ready to Implement ISO 27001?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let our experts guide you through the ISO 27001 implementation process and help you achieve certification.
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
