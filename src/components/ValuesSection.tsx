import { Handshake, Target, Award } from 'lucide-react';
import Image from 'next/image';

const values = [
  {
    icon: <Handshake size={32} className="text-black" />,
    title: "Partnership",
    description: "We act as an extension of your team, ensuring accountability and lasting trust through every audit cycle."
  },
  {
    icon: <Target size={32} className="text-black" />,
    title: "Precision",
    description: "We apply Big Four-level rigor with modern execution—delivering audit-ready outcomes without unnecessary complexity."
  },
  {
    icon: <Award size={32} className="text-black" />,
    title: "Integrity",
    description: "We believe in clear, candid communication and unbiased assessments that build confidence at every stage."
  }
];

export default function ValuesSection() {
  return (
    // The parent container uses a relative position to anchor the overlapping background.
    <div className="relative">

      {/* 1. The Blue Background */}
      {/* This div is positioned absolutely and has a fixed height, creating the top color block. */}
      <div
        className="absolute top-0 left-0 w-full h-[400px] md:h-[450px]"
        style={{ backgroundColor: 'var(--color-turnkey)' }}
      />

      {/* 2. The Content Container */}
      {/* This sits on top and has padding to position the content. The bottom padding ensures */}
      {/* space below the cards, making the overlap effect clear. */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-20 sm:pb-24">

        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-white text-3xl sm:text-4xl font-bold">
              Our Guiding Principles
            </h2>
            <p className="text-white/90 text-lg mt-4 leading-relaxed w-3/4">
              These principles define how we work and what clients can expect from every engagement.            </p>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <Image
              src="/mountains/fuji.svg"
              alt="Fuji Mountain Icon"
              className="w-48 h-48 object-contain"
              width={192}
              height={192}
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/192x192/svg?text=SVG'; e.currentTarget.onerror = null; }}
            />
          </div>
        </div>

        {/* Grid for the overlapping value cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const isSecondCard = index === 1;
            const borderColor = isSecondCard ? 'border-accent-light' : 'border-accent';
            const shadowColor = isSecondCard ? 'var(--color-accent-light)' : 'var(--color-accent)';
            const borderRadius = isSecondCard ? 'rounded-tr-4xl rounded-bl-4xl' : 'rounded-tl-4xl rounded-br-4xl';
            
            return (
              <div
                key={index}
                className={`bg-white p-4 md:p-6 border-2 ${borderColor} transition-all duration-300 hover:shadow-lg ${borderRadius}`}
                style={{
                  boxShadow: `8px 8px 0px ${shadowColor}`
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {value.icon}
                  <h4 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                    {value.title}
                  </h4>
                </div>
                <p className="text-gray-600 text-base">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
