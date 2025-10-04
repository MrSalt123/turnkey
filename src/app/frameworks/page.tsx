'use client';
import { useState } from 'react';
import { ShieldCheck, Cpu, ClipboardCheck, Database, FileText, Heart, Lock, CreditCard, Brain } from 'lucide-react';
import Image from 'next/image';

// Framework icon component that renders different icons based on the framework
const FrameworkIcon = ({ framework }: { framework: string }) => {
  const iconProps = { size: 32, className: "text-black" };
  
  switch (framework) {
    case 'SOC 2':
      return <ShieldCheck {...iconProps} />;
    case 'ISO 27001':
      return <Cpu {...iconProps} />;
    case 'ISO 27701':
      return <ClipboardCheck {...iconProps} />;
    case 'GDPR':
      return <Database {...iconProps} />;
    case 'SOX 404':
      return <FileText {...iconProps} />;
    case 'HIPAA':
      return <Heart {...iconProps} />;
    case 'NIST 800-171':
      return <Lock {...iconProps} />;
    case 'PCI':
      return <CreditCard {...iconProps} />;
    case 'ISO 42001':
      return <Brain {...iconProps} />;
    default:
      return <ShieldCheck {...iconProps} />;
  }
};

// Framework data
const frameworks = [
  {
    title: 'SOC 2',
    description: 'Service Organization Control 2 assessments examine internal controls relevant to security, availability, processing integrity, confidentiality, and privacy.',
    link: '/frameworks/soc2'
  },
  {
    title: 'ISO 27001',
    description: 'International standard for information security management systems, providing a framework for managing sensitive company information.',
    link: '/frameworks/iso27001'
  },
  {
    title: 'ISO 27701',
    description: 'Privacy extension to ISO 27001, providing guidance on protecting personal data and ensuring privacy compliance.',
    link: '/frameworks/iso27701'
  },
  {
    title: 'GDPR',
    description: 'General Data Protection Regulation governing data protection and privacy in the European Union and European Economic Area.',
    link: '/frameworks/gdpr'
  },
  {
    title: 'SOX 404',
    description: 'Section 404 of SOX requires management and auditors to establish internal controls and procedures for financial reporting.',
    link: '/frameworks/sox404'
  },
  {
    title: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act protecting sensitive patient health information and ensuring its privacy and security.',
    link: '/frameworks/hipaa'
  },
  {
    title: 'NIST 800-171',
    description: 'National Institute of Standards and Technology guidelines for protecting Controlled Unclassified Information in non-federal systems.',
    link: '/frameworks/nist800-171'
  },
  {
    title: 'PCI DSS',
    description: 'Payment Card Industry Data Security Standard for organizations that handle branded credit cards from major card schemes.',
    link: '/frameworks/pci'
  },
  {
    title: 'ISO 42001',
    description: 'International standard for AI management systems, providing guidance on responsible AI development and deployment.',
    link: '/frameworks/iso42001'
  }
];

export default function Frameworks() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen relative">
      {/* Hero section */}
      <div
        className="py-32"
        style={{ backgroundColor: 'var(--color-turnkey)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Content */}
            <div>
              <h2 className="text-white text-left mb-6">
                Compliance Frameworks That Drive Success
              </h2>
              <p className="text-white/90 text-xl leading-relaxed mb-8">
                Navigate the complex world of compliance with confidence. Our expertise spans the most critical frameworks that protect your business and build trust with your stakeholders.<br /><br />
                From cybersecurity to data privacy, financial controls to healthcare compliance, we help you implement the right frameworks for your industry and growth stage.
              </p>
              <button className="bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors border rounded-md">
                Get Framework Assessment
              </button>
            </div>
            
            {/* Right column - Image */}
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/teamstrategy.jpg"
                  alt="Compliance Frameworks"
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

      {/* Frameworks Grid Section */}
      <div className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Comprehensive Framework Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                Our team has deep experience across all major compliance frameworks. Each framework requires specific expertise, and we bring that knowledge to your organization.
              </p>
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <Image
                src="/mountains/mountains.svg"
                alt="Landscape Illustration"
                width={192}
                height={192}
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>

          {/* Frameworks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frameworks.map((framework) => (
              <div
                key={framework.title}
                className="bg-white p-8 border-2 border-black transition-all duration-300 hover:shadow-lg hover:border-gray-300 flex flex-col h-full"
                style={{
                  boxShadow: hoveredCard === framework.title 
                    ? '8px 8px 0px var(--color-accent), 8px 8px 0px 2px #000000'
                    : '6px 6px 0px var(--color-accent), 6px 6px 0px 2px #000000'
                }}
                onMouseEnter={() => setHoveredCard(framework.title)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <FrameworkIcon framework={framework.title} />
                  <h4 className="text-xl font-semibold text-gray-800" style={{ color: 'var(--color-accent)' }}>
                    {framework.title}
                  </h4>
                </div>
                <p className="text-gray-600 text-base mb-6 flex-grow">
                  {framework.description}
                </p>
                <a
                  href={framework.link}
                  className="text-black font-medium hover:underline transition-colors text-right"
                >
                  Learn More &gt;
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16" style={{ backgroundColor: 'var(--color-turnkey)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Ready to Implement Your Compliance Framework?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let our experts guide you through the compliance journey that&apos;s right for your business.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-gray-900 px-4 md:px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Start Assessment
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
