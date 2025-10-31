'use client';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, ClipboardCheck, Briefcase } from 'lucide-react';
import HowWeWork from '@/components/HowWeWork';

export default function ServicesPage() {
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
                Clear Compliance. Actionable Results. Audit-Ready.
              </h2>
              <p className="text-white/90 text-xl leading-relaxed mb-8">
                We deliver clarity, structure, and accountability through a full suite of compliance services. From gap analysis to ongoing advisory support, TurnKey helps you build and sustain audit-ready programs that protect your business and accelerate growth.
              </p>
              <Link href="/contact" className="bg-white text-gray-900 px-4 md:px-8 py-3 hover:bg-gray-100 transition-colors rounded-2xl font-semibold">
                Get Started Today
              </Link>
            </div>

            {/* Right column - Image */}
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/help.jpg"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gap Analysis Card */}
            <div
              className="bg-white p-4 md:p-6 transition-all duration-300 hover:shadow-lg border border-2 border-accent rounded-tl-4xl rounded-br-4xl flex flex-col"
              style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '280px' }}
            >
              <div className="mb-4">
                <CheckCircle size={40} strokeWidth={1.5} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4" style={{ color: 'var(--color-accent)' }}>
                Gap <br />Analysis
              </h3>
              <h5 className='mb-4'>Compare where your organization stands against compliance frameworks and standards.</h5>
              <p className="text-gray-600 text-base mb-6 flex-grow">
              Get a clear roadmap for your compliance journey. We identify gaps across your people, processes, and technology to ensure you&apos;re audit-ready for any frameworks you choose to implement.
              </p>
              <div className="text-right mt-auto">
                <Link
                  href="/services/gap-analysis"
                  className="text-black font-medium hover:underline transition-colors"
                >
                  Learn More &gt;
                </Link>
              </div>
            </div>

            {/* Readiness Assessments Card */}
            <div
              className="bg-white p-4 md:p-6 transition-all duration-300 hover:shadow-lg border border-2 border-accent-light rounded-tr-4xl rounded-bl-4xl flex flex-col"
              style={{ boxShadow: '8px 8px 0px var(--color-accent-light)', minHeight: '280px' }}
            >
              <div className="mb-4">
                <ClipboardCheck size={40} strokeWidth={1.5} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4" style={{ color: 'var(--color-accent)' }}>
                Readiness Assessments
              </h3>
              <h5 className='mb-4'>We can help you prepare for an external audit.</h5>
              <p className="text-gray-600 text-base mb-6 flex-grow">
                You know you need to comply with one or more frameworks and need help developing and implementing policies, processes, and controls. We&apos;ll guide you through readiness assessments that simulate the audit process and ensure you&apos;re truly audit-ready
              </p>
              <div className="text-right mt-auto">
                <Link
                  href="/services/readiness-assessments"
                  className="text-black font-medium hover:underline transition-colors"
                >
                  Learn More &gt;
                </Link>
              </div>
            </div>

            {/* Outsourced Compliance Card */}
            <div
              className="bg-white p-4 md:p-6 transition-all duration-300 hover:shadow-lg border border-2 border-accent rounded-tl-4xl rounded-br-4xl flex flex-col"
              style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '280px' }}
            >
              <div className="mb-4">
                <Briefcase size={40} strokeWidth={1.5} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4" style={{ color: 'var(--color-accent)' }}>
                Outsourced Compliance
              </h3>
              <h5 className='mb-4'>Allow us to manage your audit and compliance program.</h5>
              <p className="text-gray-600 text-base mb-6 flex-grow">
                You already have the foundations for compliance in place—you just need the right team to manage and sustain it. TurnKey provides dedicated compliance management to maintain readiness, coordinate evidence, and support your team year-round
              </p>
              <div className="text-right mt-auto">
                <Link
                  href="/services/outsourced-compliance"
                  className="text-black font-medium hover:underline transition-colors"
                >
                  Learn More &gt;
                </Link>
              </div>
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
                <Image
                  src="/help.jpg"
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

            {/* Right column - Text content */}
            <div className="flex flex-col justify-center">
              <ul className="space-y-6">
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-10 h-10 stroke-1" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <span className="text-lg text-gray-700">Saas & Cloud Technology</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-10 h-10 stroke-1" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <span className="text-lg text-gray-700">Cybersecurity Providers</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-10 h-10 stroke-1" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <span className="text-lg text-gray-700">FinTech & Financial Services</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-10 h-10 stroke-1" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <span className="text-lg text-gray-700">Healthcare</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-10 h-10 stroke-1" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <span className="text-lg text-gray-700">Government & Defense Contractors</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-10 h-10 stroke-1" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <span className="text-lg text-gray-700">Manufacturing & Regulated Industries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <HowWeWork />

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
              className="bg-white text-gray-900 px-8 py-3 rounded-2xl font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/about"
              className="border border-white text-white px-8 py-3 rounded-2xl font-medium hover:bg-white/10 transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
