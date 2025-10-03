import { Building2, ShieldCheck, Factory, TrendingUp } from 'lucide-react';

export default function WhoWeAre() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Real Experts. <span style={{ color: 'var(--color-accent)' }}>Real Impact.</span>
          </h2>
        </div>

        {/* Introductory Paragraph */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            We go beyond consulting to become a true extension of your team. Our guidance is delivered by seasoned professionals who translate complex compliance requirements into practical, business-aligned solutions.
          </p>
        </div>

        {/* Key Selling Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1: Big Four Background */}
          <div
            className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300"
            style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Building2 size={40} strokeWidth={1.5} className="text-black" />
              {/* Heading simplified */}
              <h4 className="text-xl font-semibold text-gray-800 flex items-center" style={{ color: 'var(--color-accent)' }}>
                Big Four Background
              </h4>
            </div>
            <p className="text-gray-600 text-base">
              Our team is composed of professionals with experience from Big Four accounting and top-tier consulting firms.
            </p>
          </div>

          {/* Card 2: Certified Expertise */}
          <div
            className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300"
            style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <ShieldCheck size={40} strokeWidth={1.5} className="text-black" />
              <h4 className="text-xl font-semibold text-gray-800 flex items-center" style={{ color: 'var(--color-accent)' }}>
                Certified Expertise
              </h4>
            </div>
            <p className="text-gray-600 text-base">
              We hold leading industry certifications including CISA, CISM, CIPM, and ISO 27001/42001 Lead Auditor credentials.
            </p>
          </div>

          {/* Card 3: Industry Knowledge */}
          <div
            className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300"
            style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Factory size={40} strokeWidth={1.5} className="text-black" />
              {/* Heading simplified */}
              <h4 className="text-xl font-semibold text-gray-800 flex items-center" style={{ color: 'var(--color-accent)' }}>
                Industry Knowledge
              </h4>
            </div>
            <p className="text-gray-600 text-base">
              We have proven success across regulated industries including FinTech, healthcare, SaaS, government, and manufacturing.
            </p>
          </div>

          {/* Card 4: Scalable Success */}
          <div
            className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300"
            style={{ boxShadow: '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <TrendingUp size={40} strokeWidth={1.5} className="text-black" />
              <h4 className="text-xl font-semibold text-gray-800 flex items-center" style={{ color: 'var(--color-accent)' }}>
                Scalable Success
              </h4>
            </div>
            <p className="text-gray-600 text-base">
              Our experience spans organizations of all sizes, from innovative startups to Fortune 500 companies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}