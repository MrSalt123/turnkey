'use client';
import { CreditCard, ArrowLeft, CheckCircle, Shield, Lock, Users, Database } from 'lucide-react';

export default function PCIPage() {
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
                <CreditCard size={48} className="text-white" />
                <h1 className="text-white text-4xl font-bold">
                  PCI DSS
                </h1>
              </div>
              <div className="relative inline-block">
                <button className="relative z-10 bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors border">
                  Get PCI DSS Assessment
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
                The Payment Card Industry Data Security Standard (PCI DSS) is a set of security standards designed to ensure that all companies that accept, process, store, or transmit credit card information maintain a secure environment. It protects cardholder data and reduces credit card fraud.
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
                What is PCI DSS?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                PCI DSS is a set of security standards designed to ensure that all companies that accept, process, store, or transmit credit card information maintain a secure environment. It protects cardholder data and reduces credit card fraud through comprehensive security requirements.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The standard applies to any organization that handles credit card information, regardless of size or transaction volume, and requires ongoing compliance to maintain certification.
              </p>
            </div>
            <div className="h-full">
              <h2 className="text-gray-900 mb-6">Key Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Reduced risk of data breaches</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Lower fraud-related costs</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Enhanced customer trust</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Compliance with card brand requirements</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 12 Requirements */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              The 12 PCI DSS Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              PCI DSS consists of 12 requirements organized into 6 control objectives to protect cardholder data and maintain secure payment environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Build Secure Networks */}
            <div className="bg-white p-4 md:p-8 border-2 border-accent rounded-tl-4xl rounded-br-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Secure Networks
                </h4>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Install and maintain firewall configurations and use strong cryptography to protect cardholder data in transit.
              </p>
            </div>

            {/* Protect Cardholder Data */}
            <div className="bg-white p-4 md:p-8 border-2 border-accent-light rounded-tr-4xl rounded-bl-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent-light)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <Lock size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Protect Data
                </h4>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Protect stored cardholder data and encrypt transmission of cardholder data across open, public networks.
              </p>
            </div>

            {/* Vulnerability Management */}
            <div className="bg-white p-4 md:p-8 border-2 border-accent rounded-tl-4xl rounded-br-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <Database size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Vulnerability Management
                </h4>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Regularly update anti-virus software and develop secure systems and applications to protect against vulnerabilities.
              </p>
            </div>

            {/* Access Control */}
            <div className="bg-white p-4 md:p-8 border-2 border-accent-light rounded-tr-4xl rounded-bl-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent-light)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <Users size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Access Control
                </h4>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Restrict access to cardholder data by business need-to-know and assign unique IDs to each person with computer access.
              </p>
            </div>

            {/* Monitor Networks */}
            <div className="bg-white p-4 md:p-8 border-2 border-accent rounded-tl-4xl rounded-br-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Monitor Networks
                </h4>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Track and monitor all access to network resources and cardholder data, and regularly test security systems.
              </p>
            </div>

            {/* Information Security Policy */}
            <div className="bg-white p-4 md:p-8 border-2 border-accent-light rounded-tr-4xl rounded-bl-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent-light)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <CreditCard size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Security Policy
                </h4>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Maintain a policy that addresses information security for all personnel, including regular security awareness training.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16" style={{ backgroundColor: 'var(--color-turnkey)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Ready to Achieve PCI DSS Compliance?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let our experts guide you through PCI DSS compliance and help you protect cardholder data while maintaining secure payment processing.
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
