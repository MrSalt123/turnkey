'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { CheckCircle, ClipboardCheck, Briefcase, Lightbulb } from 'lucide-react';

export default function ServicesPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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
                Comprehensive Compliance Solutions to Drive Your Business Forward
              </h2>
              <p className="text-white/90 text-xl leading-relaxed mb-8">
                We offer a suite of services designed to provide clarity and a turnkey solution to compliance. 
                From gap analysis to ongoing advisory support, we help you build a robust compliance program 
                that protects your business and accelerates growth.
              </p>
              <button className="bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors border rounded-md">
                Get Started Today
              </button>
            </div>
            
            {/* Right column - Image */}
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/teamstrategy.jpg"
                  alt="Compliance Services"
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

      {/* Service Grid */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Comprehensive Compliance Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                Our comprehensive suite of compliance services is designed to meet you wherever you are in your compliance journey. From initial assessments to ongoing management, we provide the expertise and support you need to build a robust compliance program that protects your business and accelerates growth.
              </p>
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <Image
                src="/mountains/mountain3.svg"
                alt="Compliance Services Illustration"
                width={192}
                height={192}
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gap Analysis Card */}
            <div
              className="bg-white p-4 md:p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300 flex flex-col h-full"
              style={{
                boxShadow: hoveredCard === 'gap-analysis' 
                  ? '8px 8px 0px var(--color-accent), 8px 8px 0px 2px #000000'
                  : '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000'
              }}
              onMouseEnter={() => setHoveredCard('gap-analysis')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle size={32} className="text-black" />
                <h4 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Gap Analysis
                </h4>
              </div>
              <p className="text-gray-600 text-base mb-6 flex-grow">
                Uncover hidden risks and get a clear roadmap for your compliance journey. We identify gaps 
                across your people, processes, and technology to ensure you&apos;re audit-ready.
              </p>
              <Link
                href="/services/gap-analysis"
                className="text-black font-medium hover:underline transition-colors text-right"
              >
                Learn More &gt;
              </Link>
            </div>

            {/* Readiness Assessments Card */}
            <div
              className="bg-white p-4 md:p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300 flex flex-col h-full"
              style={{
                boxShadow: hoveredCard === 'readiness-assessments' 
                  ? '8px 8px 0px var(--color-accent), 8px 8px 0px 2px #000000'
                  : '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000'
              }}
              onMouseEnter={() => setHoveredCard('readiness-assessments')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center gap-4 mb-4">
                <ClipboardCheck size={32} className="text-black" />
                <h4 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Readiness Assessments
                </h4>
              </div>
              <p className="text-gray-600 text-base mb-6 flex-grow">
                Achieve audit success with our comprehensive readiness assessments. We simulate the audit 
                process and provide a clear path to remediation, ensuring you&apos;re prepared for any compliance review.
              </p>
              <Link
                href="/services/readiness-assessments"
                className="text-black font-medium hover:underline transition-colors text-right"
              >
                Learn More &gt;
              </Link>
            </div>

            {/* Outsourced Compliance Card */}
            <div
              className="bg-white p-4 md:p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300 flex flex-col h-full"
              style={{
                boxShadow: hoveredCard === 'outsourced-compliance' 
                  ? '8px 8px 0px var(--color-accent), 8px 8px 0px 2px #000000'
                  : '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000'
              }}
              onMouseEnter={() => setHoveredCard('outsourced-compliance')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center gap-4 mb-4">
                <Briefcase size={32} className="text-black" />
                <h4 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Outsourced Compliance
                </h4>
              </div>
              <p className="text-gray-600 text-base mb-6 flex-grow">
                Let us handle your compliance program while you focus on growing your business. Our expert 
                team manages all aspects of compliance, from policy development to ongoing monitoring.
              </p>
              <Link
                href="/services/outsourced-compliance"
                className="text-black font-medium hover:underline transition-colors text-right"
              >
                Learn More &gt;
              </Link>
            </div>

            {/* Advisory Services Card */}
            <div
              className="bg-white p-4 md:p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300 flex flex-col h-full"
              style={{
                boxShadow: hoveredCard === 'advisory-services' 
                  ? '8px 8px 0px var(--color-accent), 8px 8px 0px 2px #000000'
                  : '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000'
              }}
              onMouseEnter={() => setHoveredCard('advisory-services')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center gap-4 mb-4">
                <Lightbulb size={32} className="text-black" />
                <h4 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                  Advisory Services
                </h4>
              </div>
              <p className="text-gray-600 text-base mb-6 flex-grow">
                Get strategic guidance from our compliance experts. We provide ongoing advisory support 
                to help you navigate complex regulatory requirements and make informed compliance decisions.
              </p>
              <Link
                href="/services/advisory-services"
                className="text-black font-medium hover:underline transition-colors text-right"
              >
                Learn More &gt;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Help Section */}
      <div className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Who We Help
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                We work with businesses across industries to build robust compliance programs that protect and accelerate growth. Our expertise spans multiple sectors, ensuring we can provide tailored solutions for your specific industry needs.
              </p>
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <Image
                src="/mountains/landscape.svg"
                alt="Industries We Serve"
                width={192}
                height={192}
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Team image with drop shadow */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Main team image */}
                <Image
                  src="/team.webp"
                  alt="Our Team"
                  className="relative z-10 w-full max-w-lg"
                  width={512}
                  height={512}
                />
                {/* Drop shadow background - positioned left and below, 3/4 size */}
                <div
                  className="absolute -left-2 -bottom-2 md:-left-4 md:-bottom-4 w-full h-full overflow-hidden"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                </div>
              </div>
            </div>

            {/* Right column - Text content */}
            <div className="flex flex-col justify-center">
              <ul className="space-y-6">
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-10 h-10 stroke-1" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <span className="text-lg text-gray-700">Technology Companies</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-10 h-10 stroke-1" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <span className="text-lg text-gray-700">Healthcare Organizations</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-10 h-10 stroke-1" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <span className="text-lg text-gray-700">Financial Services</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-10 h-10 stroke-1" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <span className="text-lg text-gray-700">E-commerce & Retail</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-10 h-10 stroke-1" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <span className="text-lg text-gray-700">Government Contractors</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-10 h-10 stroke-1" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <span className="text-lg text-gray-700">Growing Businesses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main CTA Section */}
      <div className="py-16" style={{ backgroundColor: 'var(--color-turnkey)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Ready to Build a Stronger Compliance Program?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Talk to an expert today and discover how our comprehensive compliance solutions can protect your business and accelerate growth.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/about"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
