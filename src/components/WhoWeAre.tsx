import { Building2, ShieldCheck, Factory, TrendingUp } from 'lucide-react';

export default function WhoWeAre() {
  return (
    <div className="py-12 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="md:text-center mb-4">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block sm:inline">Real Experts.</span> <span className="block sm:inline" style={{ color: 'var(--color-accent)' }}>Real Impact.</span>
          </h2>
        </div>

        {/* Introductory Paragraph */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-600 leading-relaxed md:text-center">
            We go beyond consulting to become a true extension of your team. Our guidance is grounded in Big Four discipline and delivered with the agility of a boutique firm—transforming complex compliance requirements into practical, business-aligned results.
          </p>
        </div>

        {/* Key Selling Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Card 1: Big Four Rigor */}
          <div className="flex flex-col gap-8">
            <div
              className="bg-white p-4 md:p-6 transition-all duration-300 hover:shadow-lg border border-2 border-accent-light rounded-tr-4xl rounded-bl-4xl"
              style={{ boxShadow: '8px 8px 0px var(--color-accent-light)', minHeight: '280px' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Building2 size={40} strokeWidth={1.5} className="text-black" />
                <h3 className="text-xl font-semibold text-gray-800 flex items-center" style={{ color: 'var(--color-accent)' }}>
                  Big Four Rigor
                </h3>
              </div>
              <p className="text-gray-600 text-base">
                Founded by former Big Four professionals, TurnKey applies the same audit-grade standards and proven methodologies those firms use—delivered with the responsiveness of a boutique team.
              </p>
            </div>

            {/* Card 2: Certified Expertise */}
            <div
              className="bg-white p-4 md:p-6 transition-all duration-300 hover:shadow-lg border border-2 border-accent rounded-tr-4xl rounded-bl-4xl"
              style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '280px' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <ShieldCheck size={40} strokeWidth={1.5} className="text-black" />
                <h3 className="text-xl font-semibold text-gray-800 flex items-center" style={{ color: 'var(--color-accent)' }}>
                  Certified Expertise
                </h3>
              </div>
              <p className="text-gray-600 text-base">
                Our consultants hold leading industry credentials, including CISA, CISM, CIPM, and ISO 27001 Lead Auditor certifications.
              </p>
            </div>
          </div>

          {/* Card 3: Industry Knowledge */}
          <div className="flex flex-col gap-8 md:mt-8">
            <div
              className="bg-white p-4 md:p-6 transition-all duration-300 hover:shadow-lg border border-2 border-accent rounded-tr-4xl rounded-bl-4xl"
              style={{ boxShadow: '8px 8px 0px var(--color-accent)', minHeight: '280px' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Factory size={40} strokeWidth={1.5} className="text-black" />
                <h3 className="text-xl font-semibold text-gray-800 flex items-center" style={{ color: 'var(--color-accent)' }}>
                  Industry Knowledge
                </h3>
              </div>
              <p className="text-gray-600 text-base">
                We&apos;ve guided clients across regulated sectors such as FinTech, SaaS, cybersecurity, healthcare, government, and manufacturing—helping each achieve audit-ready confidence.
              </p>
            </div>

            {/* Card 4: Scalable Success */}
            <div
              className="bg-white p-4 md:p-6 transition-all duration-300 hover:shadow-lg border border-2 border-accent-light rounded-tr-4xl rounded-bl-4xl"
              style={{ boxShadow: '8px 8px 0px var(--color-accent-light)', minHeight: '280px' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <TrendingUp size={40} strokeWidth={1.5} className="text-black" />
                <h3 className="text-xl font-semibold text-gray-800 flex items-center" style={{ color: 'var(--color-accent)' }}>
                  Scalable Success
                </h3>
              </div>
              <p className="text-gray-600 text-base">
                Our experience spans organizations of all sizes, from high-growth startups to Fortune 500 enterprises, ensuring our solutions scale as your business evolves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}