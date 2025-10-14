'use client';
import { Bot, ArrowLeft, CheckCircle, Shield, Users, Settings, Database } from 'lucide-react';

export default function EUAIActPage() {
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
                <Bot size={48} className="text-white" />
                <h1 className="text-white text-4xl font-bold">
                  EU AI Act
                </h1>
              </div>
              <div className="relative inline-block">
                <button className="relative z-10 bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors border">
                  Get EU AI Act Assessment
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
                The EU Artificial Intelligence Act is the first comprehensive AI law globally, regulating AI systems to ensure they are safe, transparent, and respect fundamental rights. It establishes a risk-based approach to AI governance.
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
                What is the EU AI Act?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The EU AI Act establishes the first comprehensive legal framework for artificial intelligence systems. It categorizes AI systems based on risk levels and imposes different requirements accordingly, from minimal obligations to strict compliance requirements.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The regulation aims to ensure AI systems are trustworthy, respect fundamental rights, and contribute to innovation while maintaining the EU's competitive advantage in AI development.
              </p>
            </div>
            <div className="h-full">
              <h2 className="text-gray-900 mb-6">Key Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">EU market access for AI products</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Enhanced AI system trustworthiness</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Reduced legal and reputational risks</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Competitive advantage in responsible AI</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Categories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              AI Risk Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The EU AI Act categorizes AI systems into four risk levels, each with specific compliance requirements and obligations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Minimal Risk */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Minimal Risk
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                AI systems with minimal risk, such as spam filters or video games, require no specific compliance measures.
              </p>
            </div>

            {/* Limited Risk */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Bot size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Limited Risk
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                AI systems with limited risk, like chatbots, must comply with transparency obligations to inform users they are interacting with AI.
              </p>
            </div>

            {/* High Risk */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Database size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  High Risk
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                High-risk AI systems, such as those used in critical infrastructure or employment decisions, require comprehensive compliance measures.
              </p>
            </div>

            {/* Prohibited */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Settings size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Prohibited
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                AI systems that pose unacceptable risks, such as social scoring or manipulative AI, are prohibited from use in the EU.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Requirements */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              Key Compliance Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              High-risk AI systems must meet comprehensive compliance requirements to ensure safety, transparency, and accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Risk Management */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Risk Management
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Comprehensive risk management systems to identify, assess, and mitigate risks throughout the AI system lifecycle.
              </p>
            </div>

            {/* Data Governance */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Database size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Data Governance
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Robust data governance practices ensuring training, validation, and testing data is relevant, representative, and free from bias.
              </p>
            </div>

            {/* Transparency */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Users size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Transparency
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Clear documentation and transparency requirements to ensure AI systems are understandable and accountable.
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
                Effective human oversight mechanisms to monitor AI system operation and intervene when necessary.
              </p>
            </div>

            {/* Accuracy & Robustness */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Settings size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Accuracy & Robustness
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                High levels of accuracy, robustness, and cybersecurity to ensure reliable and secure AI system performance.
              </p>
            </div>

            {/* Conformity Assessment */}
            <div className="bg-white p-4 md:p-8 border-2 border-black" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <Shield size={32} className="text-black" />
                <h4 className="text-xl font-semibold" style={{ color: 'var(--color-accent)' }}>
                  Conformity Assessment
                </h4>
              </div>
              <p className="text-gray-600 text-base">
                Third-party conformity assessment and CE marking for high-risk AI systems before market placement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16" style={{ backgroundColor: 'var(--color-turnkey)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Ready to Implement EU AI Act Compliance?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let our experts guide you through EU AI Act compliance and help you develop trustworthy AI systems that meet European regulatory requirements.
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
