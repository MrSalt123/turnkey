'use client';
import React from 'react';
import Image from 'next/image';

const HowWeWork = () => {
  return (
    <div className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12 md:mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold mb-4">
              Your Journey to Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Our proven methodology is a clear path through the complexities of security and privacy, guiding you from initial assessment to sustained success.
            </p>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <Image 
              src="/icons/goal.svg" 
              alt="Goal Icon" 
              className="w-48 h-48 object-contain"
              width={192}
              height={192}
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/192x192/svg?text=SVG'; (e.target as HTMLImageElement).onerror = null; }}
            />
          </div>
        </div>

        {/* Main Layout: 2x2 Card Grid on Left, Beyond the Audit on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column - 2x2 Grid of Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 - Gap Analysis */}
            <div 
              className="bg-white p-4 md:p-6 border-2 border-accent rounded-tl-4xl rounded-br-4xl transition-all duration-300 hover:shadow-lg"
              style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '200px' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl tabular-nums text-black/70 font-semibold">
                  1
                </span>
                <h5 className="text-lg font-semibold">
                  Gap Analysis
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                We learn your business and tech to identify compliance gaps.
              </p>
            </div>

            {/* Card 2 - Design */}
            <div 
              className="bg-white p-4 md:p-6 border-2 border-accent-light rounded-tr-4xl rounded-bl-4xl transition-all duration-300 hover:shadow-lg"
              style={{ boxShadow: '8px 8px 0px var(--color-accent-light)', minHeight: '200px' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl tabular-nums text-black/70 font-semibold">
                  2
                </span>
                <h5 className="text-lg font-semibold">
                  Design
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                We design practical policies and controls for your unique operations.
              </p>
            </div>

            {/* Card 3 - Prep */}
            <div 
              className="bg-white p-4 md:p-6 border-2 border-accent-light rounded-tr-4xl rounded-bl-4xl transition-all duration-300 hover:shadow-lg"
              style={{ boxShadow: '8px 8px 0px var(--color-accent-light)', minHeight: '200px' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl tabular-nums text-black/70 font-semibold">
                  3
                </span>
                <h5 className="text-lg font-semibold">
                  Prep
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                We conduct readiness assessments and internal audits.
              </p>
            </div>

            {/* Card 4 - Coordination */}
            <div 
              className="bg-white p-4 md:p-6 border-2 border-accent rounded-tl-4xl rounded-br-4xl transition-all duration-300 hover:shadow-lg"
              style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '200px' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl tabular-nums text-black/70 font-semibold">
                  4
                </span>
                <h5 className="text-lg font-semibold">
                  Coordination
                </h5>
              </div>
              <p className="text-gray-600 text-base">
                We manage external auditors and streamline the evidence collection process.
              </p>
            </div>
          </div>
          
          {/* Right column - Beyond the Audit Content */}
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              <span className="text-accent">Beyond the Audit:</span> <br />Your Long-Term Partner
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We provide continuous support to ensure you stay compliant and adapt to evolving regulations and business needs. Our partnership extends far beyond the initial audit, helping you maintain and improve your compliance posture over time.
            </p>
            <div>
              <a
                href="/contact"
                className="inline-block bg-accent text-white px-8 py-3 hover:bg-accent/80 transition-colors rounded-2xl"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HowWeWork;

