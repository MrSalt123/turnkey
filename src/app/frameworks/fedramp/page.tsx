'use client';
import { Cloud, ArrowLeft, CheckCircle, Shield, Users, Settings, Database } from 'lucide-react';

export default function FedRAMPPage() {
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
                <Cloud size={48} className="text-white" />
                <h1 className="text-white text-4xl font-bold">
                  FedRAMP
                </h1>
              </div>
              <div className="relative inline-block">
                <button className="relative z-10 bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors border">
                  Get FedRAMP Assessment
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
                FedRAMP (Federal Risk and Authorization Management Program) provides a standardized approach to security assessment and authorization for cloud products and services used by federal agencies.
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
                What is FedRAMP?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                FedRAMP is a government-wide program that provides a standardized approach to security assessment, authorization, and continuous monitoring for cloud products and services. It enables federal agencies to rapidly adopt cloud technologies while maintaining security standards.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The program streamlines the security authorization process for cloud services, reducing duplication of effort and costs while ensuring consistent security standards across federal agencies.
              </p>
            </div>
            <div className="h-full">
              <h2 className="text-gray-900 mb-6">Key Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Access to federal cloud market</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Streamlined authorization process</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Enhanced security posture</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Competitive advantage in government contracts</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Authorization Paths */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              FedRAMP Authorization Paths
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              FedRAMP offers three authorization paths to accommodate different business models and risk tolerances for cloud service providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* FedRAMP High */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  FedRAMP High
                </h4>
              </div>
              <p className="text-gray-600 text-base mb-4">
                Authorization for cloud services that handle high-impact data, including sensitive but unclassified information.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Highest security requirements</li>
                <li>• Comprehensive assessment</li>
                <li>• Annual authorization renewal</li>
                <li>• Extensive documentation</li>
              </ul>
            </div>

            {/* FedRAMP Moderate */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Database size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  FedRAMP Moderate
                </h4>
              </div>
              <p className="text-gray-600 text-base mb-4">
                Authorization for cloud services that handle moderate-impact data, the most common authorization level.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Standard security requirements</li>
                <li>• Comprehensive assessment</li>
                <li>• Annual authorization renewal</li>
                <li>• Moderate documentation</li>
              </ul>
            </div>

            {/* FedRAMP Low */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Cloud size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  FedRAMP Low
                </h4>
              </div>
              <p className="text-gray-600 text-base mb-4">
                Authorization for cloud services that handle low-impact data with minimal security requirements.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Basic security requirements</li>
                <li>• Simplified assessment</li>
                <li>• Annual authorization renewal</li>
                <li>• Minimal documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Authorization Process */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              Authorization Process Steps
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The FedRAMP authorization process involves multiple phases to ensure cloud services meet federal security requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Readiness Assessment */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Settings size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Readiness Assessment
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Initial assessment to evaluate the cloud service provider's readiness for FedRAMP authorization.
              </p>
            </div>

            {/* Security Package Development */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Database size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Security Package
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Development of comprehensive security documentation including System Security Plan (SSP) and supporting documentation.
              </p>
            </div>

            {/* Third-Party Assessment */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Third-Party Assessment
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Independent assessment by a FedRAMP-accredited Third-Party Assessment Organization (3PAO).
              </p>
            </div>

            {/* Authorization Decision */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Users size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Authorization Decision
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Authorizing Official (AO) review and authorization decision based on the security assessment and risk evaluation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Security Controls */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              Key Security Controls
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              FedRAMP requires implementation of NIST SP 800-53 security controls with additional cloud-specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Access Control */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Access Control
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Comprehensive access control mechanisms including identity management, authentication, and authorization controls.
              </p>
            </div>

            {/* Continuous Monitoring */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Database size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Continuous Monitoring
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Ongoing monitoring and assessment of security controls to maintain authorization and detect security incidents.
              </p>
            </div>

            {/* Incident Response */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Users size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Incident Response
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Comprehensive incident response capabilities including detection, analysis, containment, and recovery procedures.
              </p>
            </div>

            {/* Data Protection */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Cloud size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Data Protection
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Data encryption, backup, and recovery controls to protect federal data stored and processed in cloud environments.
              </p>
            </div>

            {/* System & Communications Protection */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Settings size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  System Protection
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Network and system security controls including boundary protection, segmentation, and security configuration management.
              </p>
            </div>

            {/* Configuration Management */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Settings size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Configuration Management
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Secure configuration management processes to ensure cloud systems maintain security baselines and proper change control.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16" style={{ backgroundColor: 'var(--color-turnkey)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Ready to Implement FedRAMP?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let our experts guide you through the FedRAMP authorization process and help you secure federal cloud contracts while meeting the highest security standards.
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
