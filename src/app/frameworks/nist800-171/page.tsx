'use client';
import { Lock, ArrowLeft, CheckCircle, Shield, Users, Settings, Database } from 'lucide-react';

export default function NIST800171Page() {
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
                <Lock size={48} className="text-white" />
                <h1 className="text-white text-4xl font-bold">
                  NIST 800-171
                </h1>
              </div>
              <div className="relative inline-block">
                <button className="relative z-10 bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors border">
                  Get NIST 800-171 Assessment
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
                NIST Special Publication 800-171 provides guidelines for protecting Controlled Unclassified Information (CUI) in non-federal systems and organizations. It&apos;s essential for defense contractors and organizations working with federal agencies.
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
                What is NIST 800-171?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                NIST 800-171 establishes security requirements for protecting CUI in non-federal systems and organizations. It&apos;s particularly important for defense contractors, research institutions, and organizations that handle federal contract information.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The framework provides 110 security controls across 14 families, covering access control, awareness training, audit and accountability, and other critical security areas.
              </p>
            </div>
            <div className="h-full">
              <h2 className="text-xl font-bold mb-6 text-gray-900">Key Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-gray-700">Federal contract eligibility</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-gray-700">Enhanced security posture</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-gray-700">Competitive advantage in government contracts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-gray-700">Protection of sensitive information</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Control Families */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Key Control Families
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              NIST 800-171 organizes 110 security controls into 14 families, each addressing specific aspects of information security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Access Control */}
            <div className="bg-white p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Lock size={32} className="text-blue-600" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Access Control
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Controls to limit access to information systems and CUI to authorized users, processes, and devices.
              </p>
            </div>

            {/* Awareness Training */}
            <div className="bg-white p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Users size={32} className="text-blue-600" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Awareness Training
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Training programs to ensure personnel are aware of security risks and their responsibilities in protecting CUI.
              </p>
            </div>

            {/* Audit & Accountability */}
            <div className="bg-white p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Database size={32} className="text-blue-600" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Audit & Accountability
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Controls for creating, protecting, and retaining audit records and ensuring individual accountability.
              </p>
            </div>

            {/* Configuration Management */}
            <div className="bg-white p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Settings size={32} className="text-blue-600" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Configuration Management
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Processes for establishing and maintaining secure configurations for information systems and components.
              </p>
            </div>

            {/* Incident Response */}
            <div className="bg-white p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-blue-600" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Incident Response
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Procedures for detecting, analyzing, and responding to information security incidents involving CUI.
              </p>
            </div>

            {/* System & Communications Protection */}
            <div className="bg-white p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-blue-600" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  System Protection
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Controls for monitoring and protecting organizational communications and information systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16" style={{ backgroundColor: 'var(--color-turnkey)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Ready to Implement NIST 800-171?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let our experts guide you through NIST 800-171 compliance and help you secure federal contracts while protecting sensitive information.
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
