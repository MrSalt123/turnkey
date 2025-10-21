import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export default function ReadinessAssessmentsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="py-32"
        style={{ backgroundColor: 'var(--color-turnkey)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <a 
              href="/services" 
              className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Services
            </a>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Content */}
            <div>
              <h2 className="text-white text-left mb-6">
                Achieve Audit Success with Our Readiness Assessments
              </h2>
              <p className="text-white/90 text-xl leading-relaxed mb-8">
                Don&apos;t wait for the auditors to find your weaknesses. We prepare you for success by simulating 
                the audit process and providing a clear path to remediation, ensuring you&apos;re fully prepared 
                for any compliance review.
              </p>
              <Link href="/contact" className="bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors border rounded-md">
                Get Started
              </Link>
            </div>
            
            {/* Right column - Image */}
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/team.webp"
                  alt="TurnKey Compliance Team Strategy"
                  width={512}
                  height={448}
                  className="hidden md:block relative z-10 w-full max-w-lg object-cover h-112 rounded-tl-4xl rounded-br-4xl"
                />
                <div
                  className="absolute -left-2 -bottom-2 md:-left-4 md:-bottom-4 w-full h-full rounded-tl-4xl rounded-br-4xl"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem/Solution Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-gray-900 mb-6">
                What It Is & Why It Matters
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A readiness assessment is a comprehensive evaluation that simulates the actual audit process 
                to identify potential issues before the real audit begins. It&apos;s your dress rehearsal for 
                compliance success.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 mb-6">Critical business problems it solves:</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Avoid costly audit failures and regulatory penalties</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Save time and money by identifying issues early</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Build stakeholder confidence with proven readiness</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Reduce stress and uncertainty during actual audits</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Deliverables Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">
              What You Get
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive deliverables that ensure you&apos;re fully prepared for audit success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-4 md:p-8 border-2 border-accent rounded-tl-4xl rounded-br-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Periodic Review Assessments
                </h5>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Comprehensive reviews including logical access, segregation of duties, change management, patch management, and system logging.
              </p>
            </div>
            
            <div className="bg-white p-4 md:p-8 border-2 border-accent-light rounded-tr-4xl rounded-bl-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent-light)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  HR Process Reviews
                </h5>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Complete assessment of onboarding and offboarding processes to ensure proper access management.
              </p>
            </div>
            
            <div className="bg-white p-4 md:p-8 border-2 border-accent rounded-tl-4xl rounded-br-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Audit Trail Documentation
                </h5>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Maintaining comprehensive audit trails of all compliance activities and documentation request lists for auditors.
              </p>
            </div>
            
            <div className="bg-white p-4 md:p-8 border-2 border-accent-light rounded-tr-4xl rounded-bl-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent-light)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Pre-populated Evidence Package
                </h5>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                All necessary evidence organized and ready for immediate submission to auditors.
              </p>
            </div>
            
            <div className="bg-white p-4 md:p-8 border-2 border-accent rounded-tl-4xl rounded-br-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Hands-on Audit Support
                </h5>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Direct support during external audits with expert guidance and real-time assistance.
              </p>
            </div>
            
            <div className="bg-white p-4 md:p-8 border-2 border-accent-light rounded-tr-4xl rounded-bl-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent-light)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Readiness Score & Roadmap
                </h5>
              </div>
              <p className="text-gray-600 text-base flex-grow">
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
