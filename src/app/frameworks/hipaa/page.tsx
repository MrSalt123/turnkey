'use client';
import { Heart, ArrowLeft, AlertTriangle, CheckCircle, Shield, Users, Lock, Eye, FileText } from 'lucide-react';

export default function HIPAAPage() {
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
                <Heart size={48} className="text-white" />
                <h1 className="text-white text-4xl font-bold">
                  HIPAA
                </h1>
              </div>
              <div className="relative inline-block">
                <button className="relative z-10 bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors border">
                  Get HIPAA Assessment
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
                The Health Insurance Portability and Accountability Act (HIPAA) protects sensitive patient health information and ensures its privacy and security. It applies to healthcare providers, health plans, and healthcare clearinghouses, as well as their business associates.
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
                What is HIPAA?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                HIPAA establishes national standards for the protection of certain health information, known as Protected Health Information (PHI). It consists of several rules including the Privacy Rule, Security Rule, and Breach Notification Rule.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The regulation applies to covered entities (healthcare providers, health plans, healthcare clearinghouses) and their business associates who handle PHI in any form or medium.
              </p>
            </div>
            <div className="h-full">
              <h2 className="text-xl font-bold mb-6 text-gray-900">Key Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-gray-700">Enhanced patient trust and confidence</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-gray-700">Reduced risk of costly violations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-gray-700">Improved data security posture</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-gray-700">Competitive advantage in healthcare</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* HIPAA Rules */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Key HIPAA Rules
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              HIPAA consists of several interconnected rules that work together to protect patient health information and ensure its proper handling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Privacy Rule */}
            <div className="bg-white p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Eye size={32} className="text-blue-600" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Privacy Rule
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Establishes standards for the use and disclosure of PHI and gives patients rights over their health information, including access and amendment rights.
              </p>
            </div>

            {/* Security Rule */}
            <div className="bg-white p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-blue-600" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Security Rule
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Sets standards for the protection of electronic PHI through administrative, physical, and technical safeguards to ensure confidentiality, integrity, and availability.
              </p>
            </div>

            {/* Breach Notification Rule */}
            <div className="bg-white p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <AlertTriangle size={32} className="text-blue-600" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Breach Notification Rule
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Requires covered entities to notify individuals, HHS, and media of breaches of unsecured PHI within specified timeframes based on the size of the breach.
              </p>
            </div>

            {/* Administrative Safeguards */}
            <div className="bg-white p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Users size={32} className="text-blue-600" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Administrative Safeguards
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Policies, procedures, and workforce training programs to manage the conduct of workforce members in relation to PHI protection.
              </p>
            </div>

            {/* Physical Safeguards */}
            <div className="bg-white p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Lock size={32} className="text-blue-600" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Physical Safeguards
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Physical measures, policies, and procedures to protect electronic information systems and related buildings from natural and environmental hazards.
              </p>
            </div>

            {/* Technical Safeguards */}
            <div className="bg-white p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <FileText size={32} className="text-blue-600" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Technical Safeguards
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Technology and policies that protect and control access to PHI, including access controls, audit controls, and transmission security.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16" style={{ backgroundColor: 'var(--color-turnkey)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Ready to Ensure HIPAA Compliance?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let our experts guide you through HIPAA compliance and help you protect patient health information while avoiding costly violations.
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
