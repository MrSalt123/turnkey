import Image from 'next/image';

const techStackLogos = [
  {
    src: '/logos/aws.svg',
    alt: 'AWS',
    name: 'AWS'
  },
  {
    src: '/logos/gcp.svg',
    alt: 'GCP',
    name: 'GCP'
  },
  {
    src: '/logos/azure.svg',
    alt: 'Microsoft Azure',
    name: 'Azure'
  },
  {
    src: '/logos/salesforce.svg',
    alt: 'Salesforce',
    name: 'Salesforce'
  },
  {
    src: '/logos/jira.svg',
    alt: 'Atlassian JIRA',
    name: 'JIRA'
  },

  {
    src: '/logos/microsoft365.svg',
    alt: 'Microsoft 365',
    name: 'Microsoft 365'
  }
];

export default function TechStack() {
  return (
    // Section container with a dark background to match your theme
    <div className="bg-turnkey py-20 sm:py-24 relative">
      {/* Light from top gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, transparent 25%, transparent 80%, rgba(0, 0, 0, 0.1) 100%)'
        }}
      />
  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading with the highlight effect */}
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Built for <span className="relative inline-block">
              <span className="absolute bottom-1.5 left-0 w-full h-4 opacity-50 transform -skew-x-12 bg-blue-500"></span>
              <span className="relative z-10">Your Tech Stack</span>
            </span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white">
          Whether you&apos;re on the latest cloud platform or a custom on-prem environment, we design practical controls that simplify compliance and align with your unique operational needs.          </p>
        </div>

         {/* Tech Stack Logo Cloud */}
         <div className="mt-12">
           <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-8">
             {techStackLogos.map((logo, index) => (
               <div key={index} className="h-16 w-24 flex items-center justify-center">
                 <Image
                   src={logo.src}
                   alt={logo.alt}
                   width={96}
                   height={64}
                   className="h-11 w-auto"
                 />
               </div>
             ))}
           </div>
         </div>

         {/* Optional secondary button, styled like your hero section */}
         <div className="mt-16 text-center">
           <a
             href="/contact"
             className="inline-block px-8 py-3 border border-white rounded-4xl text-base font-medium text-black bg-background hover:bg-white/85 hover:border-white/85 transition-colors"
           >
             Discuss Your Environment
           </a>
         </div>
      </div>
    </div>
  );
}