'use client';
import { Database, ArrowLeft, CheckCircle, Shield, Eye, UserCheck, AlertCircle } from 'lucide-react';

export default function GDPRPage() {
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
                <Database size={48} className="text-white" />
                <h1 className="text-white text-4xl font-bold">
                  GDPR
                </h1>
              </div>
              <div className="relative inline-block">
                <button className="relative z-10 bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors border">
                  Get GDPR Assessment
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
                The General Data Protection Regulation (GDPR) is a comprehensive privacy law that governs data protection and privacy in the European Union and European Economic Area. It gives individuals greater control over their personal data and imposes strict requirements on organizations that process this data.
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
                What is GDPR?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                GDPR is the most comprehensive data protection regulation in the world, affecting any organization that processes personal data of EU residents, regardless of where the organization is located. It emphasizes transparency, accountability, and individual rights.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The regulation applies to both data controllers (who determine the purposes and means of processing) and data processors (who process data on behalf of controllers).
              </p>
            </div>
            <div className="h-full">
              <h2 className="text-xl font-bold mb-6 text-gray-900">Key Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700 text-lg">Enhanced customer trust and loyalty</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Competitive advantage in EU markets</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Reduced risk of hefty fines</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Improved data governance</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Principles */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              Key GDPR Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              GDPR is built on seven fundamental principles that govern how personal data should be processed and protected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Lawfulness */}
            <div className="bg-white p-4 md:p-8 border-2 border-accent rounded-tl-4xl rounded-br-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Lawfulness
                </h4>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Personal data must be processed lawfully, fairly, and in a transparent manner with a valid legal basis.
              </p>
            </div>

            {/* Purpose Limitation */}
            <div className="bg-white p-4 md:p-8 border-2 border-accent-light rounded-tr-4xl rounded-bl-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent-light)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <Eye size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Purpose Limitation
                </h4>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Data must be collected for specified, explicit, and legitimate purposes and not further processed in incompatible ways.
              </p>
            </div>

            {/* Data Minimization */}
            <div className="bg-white p-4 md:p-8 border-2 border-accent rounded-tl-4xl rounded-br-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <UserCheck size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Data Minimization
                </h4>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Data must be adequate, relevant, and limited to what is necessary for the purposes for which it is processed.
              </p>
            </div>

            {/* Accuracy */}
            <div className="bg-white p-4 md:p-8 border-2 border-accent-light rounded-tr-4xl rounded-bl-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent-light)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <AlertCircle size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Accuracy
                </h4>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Personal data must be accurate and kept up to date, with reasonable steps taken to correct or delete inaccurate data.
              </p>
            </div>

            {/* Storage Limitation */}
            <div className="bg-white p-4 md:p-8 border-2 border-accent rounded-tl-4xl rounded-br-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <Database size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Storage Limitation
                </h4>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Data must be kept in a form that permits identification of data subjects for no longer than necessary.
              </p>
            </div>

            {/* Integrity & Confidentiality */}
            <div className="bg-white p-4 md:p-8 border-2 border-accent-light rounded-tr-4xl rounded-bl-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent-light)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Integrity & Confidentiality
                </h4>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Data must be processed in a manner that ensures appropriate security, including protection against unauthorized processing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16" style={{ backgroundColor: 'var(--color-turnkey)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Ready to Ensure GDPR Compliance?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let our experts guide you through GDPR compliance and help you protect your customers&apos; data while avoiding costly fines.
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
