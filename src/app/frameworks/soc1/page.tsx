'use client';
import { Building2, ArrowLeft, CheckCircle, Shield, Users, Settings, Database } from 'lucide-react';

export default function SOC1Page() {
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
                <Building2 size={48} className="text-white" />
                <h1 className="text-white text-4xl font-bold">
                  SOC 1
                </h1>
              </div>
              <div className="relative inline-block">
                <button className="relative z-10 bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors border">
                  Get SOC 1 Assessment
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
                SOC 1 reports focus on internal controls over financial reporting (ICFR) for service organizations. These reports are essential for organizations that provide services affecting their clients' financial reporting.
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
                What is SOC 1?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                SOC 1 (Service Organization Control 1) reports examine internal controls over financial reporting at service organizations. These reports are specifically designed for service organizations that provide services that could impact their clients' financial statements.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                SOC 1 reports help service organizations demonstrate to their clients and their clients' auditors that they have appropriate controls in place to protect financial information and ensure accurate financial reporting.
              </p>
            </div>
            <div className="h-full">
              <h2 className="text-gray-900 mb-6">Key Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Client confidence in financial controls</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Reduced client audit burden</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Competitive advantage in service delivery</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Enhanced internal control environment</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Report Types */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              SOC 1 Report Types
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SOC 1 reports come in two types, each designed for different purposes and providing different levels of assurance about internal controls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Type I Report */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Database size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Type I Report
                </h4>
              </div>
              <p className="text-gray-600 text-base mb-4">
                A Type I report provides an opinion on the suitability of the design of internal controls over financial reporting at a specific point in time.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Covers control design effectiveness</li>
                <li>• Point-in-time assessment</li>
                <li>• Suitable for initial evaluations</li>
                <li>• Lower cost and faster completion</li>
              </ul>
            </div>

            {/* Type II Report */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Type II Report
                </h4>
              </div>
              <p className="text-gray-600 text-base mb-4">
                A Type II report provides an opinion on both the design and operating effectiveness of internal controls over financial reporting over a specified period.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Covers both design and operating effectiveness</li>
                <li>• Period of time assessment (typically 6-12 months)</li>
                <li>• More comprehensive and valuable</li>
                <li>• Higher cost but greater assurance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Control Areas */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              Key Control Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SOC 1 reports examine internal controls across multiple areas that could impact financial reporting and the integrity of financial data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Access Controls */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Access Controls
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Controls over user access to systems, applications, and data to ensure only authorized personnel can access financial information.
              </p>
            </div>

            {/* Data Processing */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Database size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Data Processing
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Controls over data processing activities to ensure accuracy, completeness, and integrity of financial data processing.
              </p>
            </div>

            {/* Change Management */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Settings size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Change Management
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Controls over system changes to ensure modifications to financial systems are properly authorized, tested, and implemented.
              </p>
            </div>

            {/* Monitoring */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Users size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Monitoring
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Ongoing monitoring activities to detect and respond to control failures or anomalies in financial processing systems.
              </p>
            </div>

            {/* Backup & Recovery */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Backup & Recovery
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Controls over data backup and recovery procedures to ensure financial data can be recovered in case of system failures.
              </p>
            </div>

            {/* Security Management */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Settings size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Security Management
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Overall security management controls to protect financial systems and data from unauthorized access and security threats.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16" style={{ backgroundColor: 'var(--color-turnkey)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Ready to Implement SOC 1?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let our experts guide you through SOC 1 compliance and help you demonstrate strong internal controls over financial reporting to your clients and their auditors.
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
