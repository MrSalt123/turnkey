import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function GapAnalysisPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="py-32"
        style={{ backgroundColor: 'var(--color-turnkey)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Content */}
            <div>
              <h2 className="text-white text-left mb-6">
                Uncover Hidden Risks with Our Gap Analysis
              </h2>
              <p className="text-white/90 text-xl leading-relaxed mb-8">
                Don&apos;t let compliance gaps catch you off guard. Our comprehensive gap analysis identifies vulnerabilities 
                across your people, processes, and technology, giving you a clear roadmap to audit readiness and 
                regulatory compliance.
              </p>
              <button className="bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors border rounded-md">
                Schedule Your Gap Analysis
              </button>
            </div>
            
            {/* Right column - Image */}
            <div className="flex justify-center">
              <Image
                src="/approach.jpg"
                alt="Gap Analysis Service"
                width={512}
                height={448}
                className="w-2/3 max-w-lg object-cover h-112"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Problem/Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What It Is & Why It Matters
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  A gap analysis is a comprehensive assessment that compares your current compliance posture 
                  against specific regulatory requirements or industry standards. It&apos;s the foundation of any 
                  successful compliance program.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>Critical business problems it solves:</strong>
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Avoid costly audit failures and regulatory penalties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Save time and money by focusing on the right priorities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Build stakeholder trust with transparent compliance status</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Identify security vulnerabilities before they become breaches</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/teamstrategy.jpg"
                  alt="Gap Analysis Strategy"
                  width={512}
                  height={384}
                  className="relative z-10 w-full h-auto object-cover max-w-lg aspect-[4/3]"
                />
                <div
                  className="absolute -left-4 -bottom-4 w-full h-full"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Deliverables Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You Get
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive deliverables that provide clear direction and actionable next steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Formal Risk Assessment
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                Comprehensive risk analysis identifying threats, vulnerabilities, and gaps across physical, technical, and administrative safeguards.
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Policy & Procedure Review
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                Review existing policies against control frameworks and develop new policies to close identified gaps.
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Mitigation & Remediation Plans
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                Documented plans for managing and addressing identified risks with clear action items and timelines.
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Detailed Findings Report
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                Comprehensive analysis of all identified gaps with specific examples and evidence.
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Risk Register
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                Comprehensive risk assessment with likelihood, impact, and mitigation strategies.
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Executive Summary
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                High-level overview perfect for board presentations and stakeholder updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="py-16" style={{ backgroundColor: 'var(--color-turnkey)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Ready to Identify Your Compliance Gaps?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Schedule your comprehensive gap analysis today and get a clear roadmap to compliance success.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Schedule Your Gap Analysis
            </Link>
            <Link
              href="/services"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
