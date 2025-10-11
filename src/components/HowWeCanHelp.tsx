'use client';
import React from 'react';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function HowWeCanHelp() {
  const services = [
    "Identify security, privacy and compliance gaps across people, processes, and technology",
    "Conduct internal audits and readiness assessments",
    "Define, coordinate and manage remediation efforts",
    "Act as your co-sourced / outsourced Security, Privacy & Compliance Officer",
    "Streamline auditor coordination and evidence prep"
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Paragraph text */}
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              We help organizations identify risks, strengthen controls, and maintain continuous compliance through tailored, practical solutions across security, privacy, and governance
            </p>
          </div>

          {/* Right column - Services list */}
          <div className="flex flex-col justify-center">
            <ul className="space-y-6">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-10 h-10 stroke-1" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <span className="text-lg text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}