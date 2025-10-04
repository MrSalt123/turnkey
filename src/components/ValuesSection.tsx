import { Library, ShieldCheck, Award } from 'lucide-react';
import Image from 'next/image';

const values = [
  {
    icon: <Library size={32} className="text-black" />,
    title: "Transparency",
    description: "We believe in clear communication and honest guidance. Our partnership is built on an open book, ensuring you have a complete understanding of your compliance journey at every stage."
  },
  {
    icon: <ShieldCheck size={32} className="text-black" />,
    title: "Security",
    description: "Protecting your data and business operations is at the core of what we do. We implement and maintain industry-leading security practices to safeguard your most valuable assets."
  },
  {
    icon: <Award size={32} className="text-black" />,
    title: "Excellence",
    description: "We don’t just aim to meet standards; we strive to exceed them. Our commitment to excellence means delivering results that provide lasting value and a true competitive advantage."
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
              These core values drive everything we do and shape how we partner with our clients to achieve compliance success.
            </p>
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
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300"
              style={{
                boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000'
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
          ))}
        </div>
      </div>
    </div>
  );
}
