'use client';
import React from 'react';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function HowWeCanHelp() {
  const services = [
    { title: "Risk Management & Analysis", description: "Assess threats, document mitigation plans, and support ongoing risk reviews." },
    { title: "Policies & Procedures", description: "Develop and map policies directly to frameworks for full audit traceability." },
    { title: "Vendor & Contract Management", description: "Evaluate third-party compliance, review contracts, and manage vendor risk." },
    { title: "Incident Response & Breach Readiness", description: "Define procedures for identifying, reporting, and documenting incidents." },
    { title: "Internal Audit", description: "Conduct independent evaluations of internal controls and processes to verify compliance effectiveness and readiness for external audits." },
    { title: "Audit Preparation & Coordination", description: "Streamline documentation, readiness testing, and external auditor engagement." },
    { title: "Ongoing Support (vCISO / vCompliance / vPrivacy)", description: "Provide continuous program oversight, updates, and security and privacy training." }
  ];

  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with 2/3 Text and 1/3 Image Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12 md:mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold mb-4">
              How TurnKey Can Help
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Comprehensive, audit-ready compliance solutions that strengthen security and privacy, drive efficiency, and build lasting business confidence.
            </p>
            <br />
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We help organizations identify risks, strengthen controls, and maintain continuous compliance through tailored, practical solutions across security, privacy, and governance
            </p>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <Image 
              src="/mountains/landscape.svg" 
              alt="Mountain Illustration" 
              className="w-48 h-48 object-contain"
              width={192}
              height={192}
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/192x192/svg?text=SVG'; (e.target as HTMLImageElement).onerror = null; }}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left column - Image (1/3) */}
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/hike.jpeg"
                alt="TurnKey Compliance Team Strategy"
                width={512}
                height={448}
                className="hidden md:block relative z-10 w-full object-cover h-112 rounded-tl-4xl rounded-br-4xl"
              />
              <div
                className="absolute -left-2 -bottom-2 md:-left-4 md:-bottom-4 w-full h-full rounded-tl-4xl rounded-br-4xl"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
            </div>
          </div>

          {/* Right column - Paragraph and Services list (2/3) */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <ul className="space-y-6">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 stroke-1" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <div>
                    <h5 className="mb-1">{service.title}</h5>
                    {/* <p className="text-base text-gray-600">{service.description}</p> */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}