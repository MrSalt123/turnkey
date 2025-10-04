'use client';
import React from 'react';
import { CheckCircle } from 'lucide-react'; // Importing a clean checkmark icon from Lucide
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
        {/* Centered heading above the grid */}
        <div className="md:text-center mb-8 md:mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            How TurnKey Can Help
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Team image with drop shadow */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Main team image */}
              <Image
                src="/help.png"
                alt="Our Team"
                className="relative z-10 w-full max-w-lg"
                width={512}
                height={512}
              />
              {/* Drop shadow background - positioned left and below, 3/4 size */}
              <div
                className="absolute -left-2 -bottom-2 md:-left-4 md:-bottom-4 w-full h-full overflow-hidden"
                style={{ backgroundColor: 'var(--color-accent)' }}
              >
              </div>
            </div>
          </div>

          {/* Right column - Services list */}
          <div className="flex flex-col justify-center">
            <ul className="space-y-6"> {/* Increased space-y for better readability */}
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  {/* Prescient-style Checkmark Icon */}
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