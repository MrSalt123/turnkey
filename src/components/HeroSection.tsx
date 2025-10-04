import Image from 'next/image';

export default function HeroSection() {
  return (
    <div
      className="py-24 md:py-32"
      style={{ backgroundColor: 'var(--color-turnkey)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div>
          <h2 className="text-white text-left font-bold mb-6 text-4xl sm:text-5xl md:text-6xl" style={{ lineHeight: '1.1' }}>
              Make Compliance Your{' '}

              {/* --- The Responsive Highlight Solution --- */}

              {/* 1. Mobile Version: Two separate spans for proper wrapping */}
              {/* This is visible by default and becomes hidden on large screens (lg:hidden) */}
              <span className="lg:hidden">
                <span className="relative inline-block">
                  <span className="absolute bottom-1 left-0 w-full h-3 sm:h-4 opacity-80 transform -skew-x-12 bg-blue-500"></span>
                  <span className="relative z-10">Competitive</span>
                </span>{' '}
                <span className="relative inline-block">
                  <span className="absolute bottom-1 left-0 w-full h-3 sm:h-4 opacity-80 transform -skew-x-12 bg-blue-500"></span>
                  <span className="relative z-10">Advantage</span>
                </span>
              </span>

              {/* 2. Desktop Version: One continuous span for a seamless highlight */}
              {/* This is hidden by default and becomes visible on large screens (hidden lg:inline-block) */}
              <span className="hidden lg:inline-block relative">
                 <span className="absolute bottom-1 left-0 w-full h-4 opacity-80 transform -skew-x-12 bg-blue-500"></span>
                 <span className="relative z-10">Competitive Advantage</span>
              </span>
            </h2>
            <p className="text-white/90 mb-8">
              Tailored to your business, not boxed into someone else&apos;s framework.<br /><br />
               We go beyond consulting to become a true extension of your team, delivering personalized compliance programs that align with your business goals and growth stage.
            </p>
            <div className="flex md:flex-wrap gap-4">
              <button className="bg-white text-gray-900 px-4 md:px-8 py-3 hover:bg-gray-100 transition-colors border rounded-md">
                Let&apos;s Talk
              </button>
              <button className="border border-white text-white px-4 md:px-8 py-3 font-medium hover:bg-white/10 transition-colors rounded-md">
                See How We Work
              </button>
            </div>
          </div>
          
          {/* Right column - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/teamstrategy.jpg"
                alt="TurnKey Compliance Team Strategy"
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
  );
}
