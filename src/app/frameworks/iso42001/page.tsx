'use client';
import { Brain, ArrowLeft, CheckCircle, Shield, Users, Settings, Database } from 'lucide-react';

export default function ISO42001Page() {
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
                <Brain size={48} className="text-white" />
                <h1 className="text-white text-4xl font-bold">
                  ISO 42001
                </h1>
              </div>
              <div className="relative inline-block">
                <button className="relative z-10 bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors border">
                  Get ISO 42001 Assessment
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
                ISO 42001 is the international standard for AI management systems, providing guidance on responsible AI development and deployment. It helps organizations establish, implement, maintain, and continually improve an AI Management System (AIMS) to ensure trustworthy and ethical AI practices.
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
                What is ISO 42001?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                ISO 42001 is the world&apos;s first international standard for AI management systems. It provides a comprehensive framework for organizations to manage AI systems responsibly, ensuring they are trustworthy, ethical, and aligned with organizational values and regulatory requirements.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The standard helps organizations address AI risks, ensure transparency, and build stakeholder confidence while fostering innovation in AI development and deployment.
              </p>
            </div>
            <div className="h-full">
              <h2 className="text-xl font-bold mb-6 text-gray-900">Key Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Trustworthy AI implementation</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Ethical AI governance</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Regulatory compliance readiness</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Enhanced stakeholder confidence</p>
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
              Core Components of ISO 42001
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ISO 42001 provides a structured approach to AI management through key components that ensure responsible AI development and deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Governance */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  AI Governance
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Establishing governance structures, policies, and procedures to oversee AI development, deployment, and management activities.
              </p>
            </div>

            {/* Risk Management */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Brain size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Risk Management
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Systematic identification, assessment, and mitigation of AI-related risks including bias, fairness, transparency, and safety concerns.
              </p>
            </div>

            {/* Human Oversight */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Users size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Human Oversight
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Ensuring appropriate human involvement in AI decision-making processes and maintaining human accountability for AI outcomes.
              </p>
            </div>

            {/* Data Quality */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Database size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Data Quality
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Ensuring high-quality, representative, and unbiased data for AI system training and operation to prevent discriminatory outcomes.
              </p>
            </div>

            {/* Transparency */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Settings size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Transparency
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Providing clear information about AI system capabilities, limitations, and decision-making processes to users and stakeholders.
              </p>
            </div>

            {/* Continuous Monitoring */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Continuous Monitoring
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Ongoing monitoring and evaluation of AI system performance to ensure continued compliance with ethical and technical standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16" style={{ backgroundColor: 'var(--color-turnkey)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Ready to Implement ISO 42001?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let our experts guide you through ISO 42001 implementation and help you establish trustworthy AI management practices.
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
