import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export default function OutsourcedCompliancePage() {
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
                Focus on Growth While We Handle Your Compliance
              </h2>
              <p className="text-white/90 text-xl leading-relaxed mb-8">
                Let our expert team manage your entire compliance program while you focus on growing your business. 
                We handle everything from policy development to ongoing monitoring, ensuring continuous compliance 
                without the overhead.
              </p>
              <Link href="/contact" className="bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors border rounded-md">
                Get Started Today
              </Link>
            </div>
            
            {/* Right column - Image */}
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/handshake.jpg"
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
                Outsourced compliance is a comprehensive service where we become your dedicated compliance 
                team, managing all aspects of your compliance program from strategy to execution. It&apos;s like 
                having a full compliance department without the cost and complexity.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 mb-6">Critical business problems it solves:</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Eliminate the need to hire and manage compliance staff</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Reduce compliance costs by up to 60% compared to in-house teams</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Access expert knowledge without the learning curve</p>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 md:w-7 md:h-7 mr-3" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-gray-700">Ensure continuous compliance with minimal internal effort</p>
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
              Comprehensive compliance management that covers every aspect of your program
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-4 md:p-8 border-2 border-accent rounded-tl-4xl rounded-br-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Virtual Compliance Officer (vCISO/vCompliance)
                </h5>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Serving as your official Virtual Security or Privacy Officer with quarterly risk and compliance meetings.
              </p>
            </div>
            
            <div className="bg-white p-4 md:p-8 border-2 border-accent-light rounded-tr-4xl rounded-bl-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent-light)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Contract & Vendor Management
                </h5>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Reviewing customer and vendor contracts for security and privacy obligations, managing third-party risk programs.
              </p>
            </div>
            
            <div className="bg-white p-4 md:p-8 border-2 border-accent rounded-tl-4xl rounded-br-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Workforce Training & Awareness
                </h5>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Providing tailored security and privacy training for employees to build a culture of compliance.
              </p>
            </div>
            
            <div className="bg-white p-4 md:p-8 border-2 border-accent-light rounded-tr-4xl rounded-bl-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent-light)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Complete Policy Framework
                </h5>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                Comprehensive policies and procedures tailored to your business and industry requirements.
              </p>
            </div>
            
            <div className="bg-white p-4 md:p-8 border-2 border-accent rounded-tl-4xl rounded-br-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Continuous Monitoring
                </h5>
              </div>
              <p className="text-gray-600 text-base flex-grow">
                24/7 monitoring of your compliance posture with real-time alerts and updates.
              </p>
            </div>
            
            <div className="bg-white p-4 md:p-8 border-2 border-accent-light rounded-tr-4xl rounded-bl-4xl transition-all duration-300 hover:shadow-lg flex flex-col" style={{ boxShadow: '8px 8px 0px var(--color-accent-light)', minHeight: '280px' }}>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h5 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Regular Reporting & Updates
                </h5>
              </div>
              <p className="text-gray-600 text-base flex-grow">
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
