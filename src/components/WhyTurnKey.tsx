import { ShieldCheck, Scale, GanttChartSquare, Users } from 'lucide-react'; // Added more icons
import Image from 'next/image';

// Updated benefits array with unique icons for each
const benefits = [
  {
    icon: <Scale className="w-7 h-7 text-black" aria-hidden="true" />,
    title: "Unbiased Assessments",
    description: "Get a clear, objective view of your security and compliance posture."
  },
  {
    icon: <GanttChartSquare className="w-7 h-7 text-black" aria-hidden="true" />,
    title: "Framework Efficiency",
    description: "Save time and resources by aligning controls across multiple standards at once."
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-black" aria-hidden="true" />,
    title: "Lasting Audit Resilience",
    description: "Build sustainable programs for year-round compliance confidence, not just one-time prep."
  },
  {
    icon: <Users className="w-7 h-7 text-black" aria-hidden="true" />,
    title: "Team Education & Adoption",
    description: "Strengthen your security culture with tailored training that boosts workforce adoption."
  }
];

export default function WhyTurnKey() {
  return (
    <div className="py-12 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex justify-between items-end mb-12 lg:mb-32">
            {/* Left: Heading */}
            <div>
                <h2 className="text-accent">
                More Than Compliance.
                </h2>
                <h2>
                We Drive Business Confidence.
                </h2>
            </div>

            {/* Right: Tagline with responsive padding */}
            <div className="hidden sm:block pb-[0.4vw]">
                <h6 className="text-gray-600 whitespace-nowrap">
                Simplifying Compliance since 2009
                </h6>
            </div>
        </div>


        {/* Main layout with image on left and elegant list on right */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left side: Team Strategy Image with decorative background */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-lg">
                {/* Main team strategy image - Replaced Next/Image with standard <img> */}
                <Image
                  src="/teamstrategy.jpg"
                  alt="A team of professionals collaborating on a strategy at a whiteboard"
                  width="500"
                  height={400}                    
                  className="relative z-10 w-full h-auto shadow-xl"
                />
                {/* Decorative background element */}
                <div
                  className="absolute -left-2 -bottom-2 md:-left-4 md:-bottom-4 w-full h-full z-0"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                </div>
              </div>
            </div>

            {/* Right side: Benefit List as 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-accent mb-1">{benefit.title}</h5>
                    <p className="text-base text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

