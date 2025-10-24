'use client';
import { useState, useEffect } from 'react';
import { Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ValuesSection from '@/components/ValuesSection';

export default function About() {

  return (
    <div className="min-h-screen relative">
      <div
        className="py-32"
        style={{ backgroundColor: 'var(--color-turnkey)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Content */}
            <div>
              <h2 className="text-white text-left mb-6">
                More Than a Service. <br /> We&apos;re Your Partner.
              </h2>
              <p className="text-white/90 text-xl leading-relaxed mb-8">
                We believe in a true partnership, creating personalized compliance programs that align with your business goals.<br /><br />
                Our deep industry knowledge, rooted in Big Four philosophies, becomes your strategic advantage.<br /><br />
                Founded on the principle of simplifying the audit process, our mission is to empower your business.
              </p>
              <Link href="/contact" className="bg-white text-gray-900 px-4 md:px-8 py-3 hover:bg-gray-100 transition-colors rounded-2xl font-semibold">
                Connect with Us
              </Link>
            </div>

            {/* Right column - Image */}
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/partner.jpg"
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

      {/* Mission section */}
      <div className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                A TurnKey Approach to Compliance
              </h2>
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <Image
                src="/mountains/mountainn.svg"
                alt="Landscape Illustration"
                width={192}
                height={192}
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* THIS IS THE MODIFIED SECTION */}
            <div className="flex justify-center w-full">
              <div className="relative w-full max-w-lg ">
                <Image
                  src="/adventure.jpg"
                  alt="A professional team collaborating in a modern office"
                  width={512}
                  height={384}
                  className="relative z-10 w-full h-auto object-cover aspect-[4/3] rounded-tl-4xl rounded-br-4xl"
                // REMOVED: max-w-lg
                />
                <div
                  className="absolute -left-2 -bottom-2 md:-left-4 md:-bottom-4 w-full h-full rounded-tl-4xl rounded-br-4xl"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />
              </div>
            </div>
            {/* END OF MODIFIED SECTION */}
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                TurnKey Compliance takes a collaborative, personalized approach to security and compliance—partnering with you to design programs that meet industry standards. We handle the complexities of the audit process so you can stay focused on your business.
                </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-accent text-white px-6 py-3 font-medium hover:bg-accent/80 transition-colors rounded-2xl">
                  Get Started
                </Link>
                <Link href="/services" className="bg-turnkey text-white px-6 py-3 font-medium hover:bg-turnkey-light transition-colors rounded-2xl">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* By The Numbers section */}
      {/* <div className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              By The Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our track record speaks for itself. Here&apos;s what we&apos;ve achieved for our clients.
            </p>
          </div>

          <div id="stats-section" className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2" >
                {counts.auditPass}%
              </h3>
              <p className="text-gray-600">Audit Pass Rate</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">
                {counts.yearsExperience}+
              </h3>
              <p className="text-gray-600">Years Combined Expertise</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">
                {counts.fasterAudit}%
              </h3>
              <p className="text-gray-600">Faster Time-to-Audit</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">
                &gt;{counts.industriesServed}
              </h3>
              <p className="text-gray-600">Industries Served</p>
            </div>
          </div>
        </div>
      </div> */}

      <ValuesSection />



      {/* Founder section */}
      <div className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Meet Our Founder
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -right-2 -bottom-2 md:-right-4 md:-bottom-4 w-full h-full bg-accent z-0 rounded-bl-4xl rounded-tr-4xl"></div>
                <Image
                  src="/jason.avif"
                  alt="Jason - Founder of TurnKey Compliance"
                  width={384}
                  height={384}
                  className="relative z-10 w-112 h-112 object-cover shadow-lg rounded-bl-4xl rounded-tr-4xl"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-4">
                  <h3 className="text-3xl font-bold text-gray-900">
                    Jason Lannen
                  </h3>
                  <a href="https://www.linkedin.com/in/jasonlannen" target="_blank" aria-label="Jason's LinkedIn Profile" className="text-gray-400 hover:text-blue-600 transition-colors ">
                    <Linkedin size={24} />
                  </a>
                </div>
                <p className="text-lg font-medium">
                  Founder & Managing Director
                </p>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                With over 20 years of experience in IT audit and compliance, Jason founded TurnKey Compliance in 2009 to help organizations transform compliance from a regulatory obligation into a true business advantage.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                A former external auditor in KPMG’s IT Advisory Practice, he leverages deep industry expertise and Big Four methodology to help clients improve operational efficiency, drive revenue, and strengthen their security posture.
              </p>

              <blockquote className="border-l-4 pl-4 italic text-gray-700" style={{ borderColor: 'var(--color-turnkey)' }}>
                &ldquo;My goal has always been to make compliance a driver of business performance—helping companies operate more efficiently, securely, and confidently.&rdquo;
              </blockquote>
              <p className="text-gray-600 text-lg leading-relaxed">
                Jason is also a frequent speaker at the University of Georgia, where he shares insights on building compliance programs, IT strategy, risk management, and entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* CTA section */}
      <div className="py-16" style={{ backgroundColor: 'var(--color-turnkey)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Ready to Start Your Compliance Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let&apos;s work together to make compliance your competitive advantage.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="bg-white text-gray-900 px-8 py-3 font-medium hover:bg-gray-100 transition-colors rounded-2xl">
              Get Started
            </Link>
            <Link href="/services" className="border border-white text-white px-8 py-3 font-medium hover:bg-white/10 transition-colors rounded-2xl">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}