import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function ReadinessAssessmentsPage() {
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
                Achieve Audit Success with Our Readiness Assessments
              </h2>
              <p className="text-white/90 text-xl leading-relaxed mb-8">
                Don't wait for the auditors to find your weaknesses. We prepare you for success by simulating 
                the audit process and providing a clear path to remediation, ensuring you're fully prepared 
                for any compliance review.
              </p>
              <div className="relative inline-block">
                <button className="relative z-10 bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors border">
                  Schedule Your Readiness Assessment
                </button>
                <div
                  className="absolute -right-1 -bottom-1 w-full h-full"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />
              </div>
            </div>
            
            {/* Right column - Image */}
            <div className="flex justify-center">
              <Image
                src="/team.webp"
                alt="Readiness Assessments Service"
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
                  A readiness assessment is a comprehensive evaluation that simulates the actual audit process 
                  to identify potential issues before the real audit begins. It's your dress rehearsal for 
                  compliance success.
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
                    <span>Save time and money by identifying issues early</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Build stakeholder confidence with proven readiness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Reduce stress and uncertainty during actual audits</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/help.png"
                  alt="Readiness Assessment Support"
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
              Comprehensive deliverables that ensure you're fully prepared for audit success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Periodic Review Assessments
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                Comprehensive reviews including logical access, segregation of duties, change management, patch management, and system logging.
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  HR Process Reviews
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                Complete assessment of onboarding and offboarding processes to ensure proper access management.
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Audit Trail Documentation
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                Maintaining comprehensive audit trails of all compliance activities and documentation request lists for auditors.
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Pre-populated Evidence Package
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                All necessary evidence organized and ready for immediate submission to auditors.
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Hands-on Audit Support
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                Direct support during external audits with expert guidance and real-time assistance.
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Readiness Score & Roadmap
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                Quantified assessment of your readiness level with specific improvement targets and action plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="py-16" style={{ backgroundColor: 'var(--color-turnkey)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Ready to Ace Your Next Audit?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Schedule your readiness assessment today and ensure audit success with confidence.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Schedule Your Readiness Assessment
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
