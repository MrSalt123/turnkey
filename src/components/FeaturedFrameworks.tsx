'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Security icon for SOC 2
const SecurityIcon = () => (
  <div className="relative flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>

  </div>
);

// CPU icon for ISO 27001
const CpuIcon = () => (
  <div className="relative flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
    </svg>

  </div>
);

// Clipboard icon for ISO 27701
const ClipboardIcon = () => (
  <div className="relative flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
    </svg>

  </div>
);

// Default icon for other frameworks
const DefaultIcon = () => (
  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  </div>
);

// Framework icon component that renders different icons based on the framework
const FrameworkIcon = ({ framework }: { framework: string }) => {
  if (framework === 'SOC 2') {
    return <SecurityIcon />;
  }
  if (framework === 'ISO 27001') {
    return <CpuIcon />;
  }
  if (framework === 'ISO 27701') {
    return <ClipboardIcon />;
  }
  return <DefaultIcon />;
};

// Data for the framework cards, updated to three items.
const frameworks = [
  {
    title: 'SOC 2',
    description: 'Assessments that examine internal controls relevant to security, availability, processing integrity, confidentiality, and/or privacy.',
    path: '/frameworks/soc2',
  },
  {
    title: 'ISO 27001',
    description: 'An international standard that establishes an ISMS framework and implements robust security controls to protect data and reduce risk.',
    path: '/frameworks/iso27001',
  },
  {
    title: 'ISO 27701',
    description: 'An international standard establishing a Privacy Information Management System (PIMS) that protects personal data, assures accountability for both controllers and processors, and supports compliance with global privacy laws.',
    path: '/frameworks/iso27701',
  },
];

const FeaturedFrameworks = () => {
  return (
    <div className="py-24 relative" style={{ backgroundColor: 'var(--color-turnkey)' }}>
      {/* Light from top gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, transparent 30%, transparent 70%, rgba(0, 0, 0, 0.1) 100%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header with 2/3 Text and 1/3 Image Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Mastering the Standards of Security, Privacy and AI
            </h2>
            <p className="text-lg text-white/90 max-w-3xl">
              Our team possesses deep expertise in the world&apos;s leading compliance frameworks, ensuring your program is robust, effective, and ready for any audit.
            </p>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <Image
              src="/mountains/sunset.svg"
              alt="Mountain Illustration"
              className="w-48 h-48 object-contain"
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/192x192/svg?text=SVG'; e.currentTarget.onerror = null; }}
              width={192}
              height={192}
            />
          </div>
        </div>

        {/* 3-Card Grid - Responsive Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {frameworks.map((framework) => (
            <div
              key={framework.title}
              className="
                bg-background p-4 md:p-6 
                transition-all duration-300 
                flex flex-col h-full rounded-tl-4xl rounded-br-4xl relative overflow-hidden
              "
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <FrameworkIcon framework={framework.title} />
                  <h4 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                    {framework.title}
                  </h4>
                </div>
                <p className="text-gray-600 text-base mb-6 flex-grow">
                  {framework.description}
                </p>
                <Link
                  href={framework.path}
                  className="text-black font-medium hover:underline transition-colors text-right mt-auto"
                >
                  Learn More &gt;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {frameworks.map((framework) => (
              <div
                key={framework.title}
                className="
                  bg-white p-4 md:p-6 rounded-2xl
                  transition-all duration-300 hover:shadow-lg hover:border-gray-300
                  flex flex-col
                  w-80 flex-shrink-0 relative overflow-hidden
                "
              >
                {/* Light gradient overlay for each card */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 0%, transparent 40%)'
                  }}
                />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <FrameworkIcon framework={framework.title} />
                    <h4 className="text-lg font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                      {framework.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {framework.description}
                  </p>
                  <Link
                    href={framework.path}
                    className="text-black font-medium hover:underline transition-colors text-right mt-auto"
                  >
                    Learn More &gt;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Section */}
        <div className="flex justify-end mt-12 max-w-7xl">
          <a href="/frameworks" className="flex items-center gap-4 hover:opacity-80 transition-opacity duration-300">
            <span className="text-lg font-medium text-white">View More</span>
            <div className="flex items-center justify-center w-12 h-12 bg-white text-black rounded-full hover:bg-gray-100 transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
};

export default FeaturedFrameworks;
