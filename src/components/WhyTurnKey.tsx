import { ShieldCheck, Scale, GanttChartSquare, Users } from 'lucide-react'; // Added more icons

// Updated benefits array with unique icons for each
const benefits = [
  {
    icon: <Scale className="w-5 h-5 md:w-7 md:h-7 text-black" aria-hidden="true" />,
    title: "Unbiased Assessments",
    description: "Get a clear, objective view of your security and compliance posture."
  },
  {
    icon: <GanttChartSquare className="w-5 h-5 md:w-7 md:h-7 text-black" aria-hidden="true" />,
    title: "Framework Efficiency",
    description: "Save time and resources by aligning controls across multiple standards at once."
  },
  {
    icon: <ShieldCheck className="w-5 h-5 md:w-7 md:h-7 text-black" aria-hidden="true" />,
    title: "Lasting Audit Resilience",
    description: "Build sustainable programs for year-round compliance confidence, not just one-time prep."
  },
  {
    icon: <Users className="w-5 h-5 md:w-7 md:h-7 text-black" aria-hidden="true" />,
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
                <h2>
                More Than Compliance.
                </h2>
                <h2>
                We Drive <span className="text-accent">Business Confidence.</span>
                </h2>
            </div>

            {/* Right: Tagline with responsive padding */}
            <div className="hidden sm:block pb-[0.4vw]">
                <h6 className="text-gray-600 whitespace-nowrap">
                Simplifying Compliance since 2009
                </h6>
            </div>
        </div>


        {/* Four cards in a row */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const useAccent = index === 0 || index === 2;
              const borderColor = useAccent ? 'border-accent' : 'border-accent-light';
              const shadowColor = useAccent ? 'var(--color-accent)' : 'var(--color-accent-light)';
              const borderRadius = (index % 2 === 1) ? 'rounded-tr-4xl rounded-bl-4xl' : 'rounded-tl-4xl rounded-br-4xl';
              const marginTop = (index === 1 || index === 3) ? 'md:mt-8' : 'md:mb-8';
              
              return (
                <div 
                  key={index} 
                  className={`bg-white p-4 md:p-6 border-2 ${borderColor} ${borderRadius} ${marginTop} transition-all duration-300 hover:shadow-lg`}
                  style={{ boxShadow: `8px 8px 0px ${shadowColor}`, minHeight: '200px' }}
                >
                  <div className="flex flex-col">
                    <div className="mb-4">
                      {benefit.icon}
                    </div>
                    <div>
                      <h5 className="mb-2">{benefit.title}</h5>
                      <p className="text-base text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

