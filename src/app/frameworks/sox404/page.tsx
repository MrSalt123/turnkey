'use client';
import { FileText, ArrowLeft, CheckCircle, Shield, Users, BarChart, AlertTriangle } from 'lucide-react';

export default function SOX404Page() {
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
                <FileText size={48} className="text-white" />
                <h1 className="text-white text-4xl font-bold">
                  Sarbanes Oxley 404
                </h1>
              </div>
              <div className="relative inline-block">
                <button className="relative z-10 bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors border">
                  Get SOX 404 Assessment
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
                Section 404 of the Sarbanes-Oxley Act requires management and auditors to establish internal controls and procedures for financial reporting. It mandates that companies assess and report on the effectiveness of their internal control over financial reporting (ICFR).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                What is SOX 404?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                SOX 404 requires public companies to establish and maintain adequate internal controls over financial reporting and to assess their effectiveness annually. It applies to all publicly traded companies in the United States and their subsidiaries.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The regulation aims to prevent financial fraud and ensure the accuracy and reliability of financial statements by requiring management to take responsibility for internal controls and auditors to provide an independent assessment.
              </p>
            </div>
            <div className="h-full">
              <h2 className="text-xl font-bold mb-6 text-gray-900">Key Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-gray-700">Enhanced financial reporting accuracy</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-gray-700">Reduced risk of financial fraud</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-gray-700">Improved investor confidence</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-gray-700">Stronger governance framework</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Core Components */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Core Components of SOX 404
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SOX 404 compliance involves multiple components working together to ensure effective internal controls over financial reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Management Assessment */}
            <div className="bg-white p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Users size={32} className="text-blue-600" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Management Assessment
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Management must evaluate and report on the effectiveness of internal controls over financial reporting using a recognized framework like COSO.
              </p>
            </div>

            {/* Internal Controls */}
            <div className="bg-white p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-blue-600" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Internal Controls
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Design and implementation of controls to prevent or detect material misstatements in financial statements and ensure reliable financial reporting.
              </p>
            </div>

            {/* Documentation */}
            <div className="bg-white p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <FileText size={32} className="text-blue-600" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Documentation
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Comprehensive documentation of control processes, procedures, and evidence to support the effectiveness of internal controls.
              </p>
            </div>

            {/* Testing & Monitoring */}
            <div className="bg-white p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <BarChart size={32} className="text-blue-600" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Testing & Monitoring
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Regular testing of controls to ensure they are operating effectively and continuous monitoring to identify and address deficiencies.
              </p>
            </div>

            {/* Deficiency Management */}
            <div className="bg-white p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <AlertTriangle size={32} className="text-blue-600" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Deficiency Management
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Processes for identifying, evaluating, and remediating control deficiencies, including material weaknesses that could affect financial reporting.
              </p>
            </div>

            {/* Audit Coordination */}
            <div className="bg-white p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-blue-600" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Audit Coordination
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Coordination with external auditors who must provide an independent opinion on the effectiveness of internal controls over financial reporting.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16" style={{ backgroundColor: 'var(--color-turnkey)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Ready to Ensure SOX 404 Compliance?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let our experts guide you through SOX 404 compliance and help you establish robust internal controls over financial reporting.
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
