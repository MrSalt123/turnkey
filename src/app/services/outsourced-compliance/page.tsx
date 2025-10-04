import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function OutsourcedCompliancePage() {
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
                Focus on Growth While We Handle Your Compliance
              </h2>
              <p className="text-white/90 text-xl leading-relaxed mb-8">
                Let our expert team manage your entire compliance program while you focus on growing your business. 
                We handle everything from policy development to ongoing monitoring, ensuring continuous compliance 
                without the overhead.
              </p>
              <button className="bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors border rounded-md">
                Get Started Today
              </button>
            </div>
            
            {/* Right column - Image */}
            <div className="flex justify-center">
              <Image
                src="/handshake.jpg"
                alt="Outsourced Compliance Service"
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
                  Outsourced compliance is a comprehensive service where we become your dedicated compliance 
                  team, managing all aspects of your compliance program from strategy to execution. It&apos;s like 
                  having a full compliance department without the cost and complexity.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>Critical business problems it solves:</strong>
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Eliminate the need to hire and manage compliance staff</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Reduce compliance costs by up to 60% compared to in-house teams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Access expert knowledge without the learning curve</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Ensure continuous compliance with minimal internal effort</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/handshake.jpg"
                  alt="Outsourced Compliance Partnership"
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
              Comprehensive compliance management that covers every aspect of your program
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Virtual Compliance Officer (vCISO/vCompliance)
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                Serving as your official Virtual Security or Privacy Officer with quarterly risk and compliance meetings.
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Contract & Vendor Management
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                Reviewing customer and vendor contracts for security and privacy obligations, managing third-party risk programs.
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Workforce Training & Awareness
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                Providing tailored security and privacy training for employees to build a culture of compliance.
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Complete Policy Framework
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                Comprehensive policies and procedures tailored to your business and industry requirements.
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Continuous Monitoring
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                24/7 monitoring of your compliance posture with real-time alerts and updates.
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300" style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Regular Reporting & Updates
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                Monthly compliance reports and ongoing advisory updates as regulations evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="py-16" style={{ backgroundColor: 'var(--color-turnkey)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Ready to Focus on What You Do Best?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let us handle your compliance so you can focus on growing your business.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started Today
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
