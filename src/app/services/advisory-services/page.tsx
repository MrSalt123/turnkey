import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function AdvisoryServicesPage() {
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
                Strategic Compliance Guidance When You Need It Most
              </h2>
              <p className="text-white/90 text-xl leading-relaxed mb-8">
                Get expert guidance from our compliance specialists to navigate complex regulatory requirements 
                and make informed decisions. Our advisory services provide the strategic insight you need to 
                build and maintain a robust compliance program.
              </p>
              <Link href="/contact" className="bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors border rounded-md">
                Schedule Your Consultation
              </Link>
            </div>
            
            {/* Right column - Image */}
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/cyberteam.jpg"
                  alt="Advisory Services"
                  width={512}
                  height={448}
                  className="relative z-10 w-full max-w-lg object-cover h-112"
                />
                <div
                  className="absolute -left-2 -bottom-2 md:-left-4 md:-bottom-4 w-full h-full"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-6">
                What It Is & Why It Matters
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Advisory services provide strategic compliance guidance and expert consultation to help 
                  you navigate complex regulatory landscapes, make informed decisions, and build effective 
                  compliance programs. It&apos;s like having a compliance expert on speed dial.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>Critical business problems it solves:</strong>
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Navigate complex regulatory requirements with confidence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Make informed compliance decisions quickly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Access expert knowledge without hiring full-time staff</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Stay ahead of regulatory changes and emerging risks</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/teamstrategy.jpg"
                  alt="Advisory Services Strategy"
                  width={512}
                  height={384}
                  className="relative z-10 w-full h-auto object-cover max-w-lg aspect-[4/3]"
                />
                <div
                  className="absolute -left-2 -bottom-2 md:-left-4 md:-bottom-4 w-full h-full"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />
              </div>
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
              Strategic guidance and expert consultation tailored to your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-4 md:p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Incident Response & Breach Notification Prep
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                Helping define procedures for identifying, reporting, and documenting security incidents and coordinating breach response plans.
              </p>
            </div>
            
            <div className="bg-white p-4 md:p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Ongoing Support & Updates
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                Providing ongoing advisory and updates as regulations and rules evolve to keep you current with compliance requirements.
              </p>
            </div>
            
            <div className="bg-white p-4 md:p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Strategic Compliance Roadmap
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                Comprehensive strategy document outlining your compliance journey and key milestones.
              </p>
            </div>
            
            <div className="bg-white p-4 md:p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Expert Consultation
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                Regular consultation sessions with compliance experts to address specific challenges and strategic decisions.
              </p>
            </div>
            
            <div className="bg-white p-4 md:p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Regulatory Updates
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                Regular updates on regulatory changes and their impact on your business with actionable recommendations.
              </p>
            </div>
            
            <div className="bg-white p-4 md:p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Emergency Support
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                24/7 access to expert guidance for urgent compliance issues and incidents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="py-16" style={{ backgroundColor: 'var(--color-turnkey)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Need Expert Compliance Guidance?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Get strategic advice from our compliance experts to navigate complex regulatory requirements.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Schedule Your Consultation
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
