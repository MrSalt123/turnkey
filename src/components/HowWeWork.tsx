'use client';
import React from 'react';
import { Search, Settings, FileCheck, Users } from 'lucide-react';
import Image from 'next/image';

// --- Define a specific type for a process step ---
interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement; // Use React.ReactElement for JSX icons
}

// --- New Step Card Component with the correct type ---
const StepCard = ({ step, stepNumber }: { step: ProcessStep, stepNumber: string }) => (
  <div className="bg-background p-6 h-full">
    {/* Step Number and Title */}
    <div className="flex items-center gap-3 mb-4">
      <span className="text-2xl font-bold text-gray-600">
        {stepNumber}
      </span>
      <h5 className="text-lg font-semibold text-black">
        {step.title}
      </h5>
    </div>
    
    {/* Description */}
    <p className="text-gray-600 text-sm leading-relaxed">
      {step.description}
    </p>
  </div>
);

// --- Main Component ---

// --- Apply the type to the array for better type safety ---
const processSteps: ProcessStep[] = [
  { id: 1, title: 'Gap Analysis', description: 'We learn your business and tech to identify compliance gaps.', icon: <Search /> },
  { id: 2, title: 'Design', description: 'We design practical policies and controls for your unique operations.', icon: <Settings /> },
  { id: 3, title: 'Prep', description: 'We conduct readiness assessments and internal audits.', icon: <FileCheck /> },
  { id: 4, title: 'Coordination', description: 'We manage external auditors and streamline the evidence process.', icon: <Users /> },
];

const HowWeWork = () => {
  return (
    <div className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold mb-4">
              Your Journey to Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Our proven methodology is a clear path through the complexities of security and privacy, guiding you from initial assessment to sustained success.
            </p>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <Image 
              src="/icons/goal.svg" 
              alt="Goal Icon" 
              className="w-48 h-48 object-contain"
              width={192}
              height={192}
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/192x192/svg?text=SVG'; (e.target as HTMLImageElement).onerror = null; }}
            />
          </div>
        </div>

        {/* Four Step Cards */}
        <div className="mb-16">
          {/* Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <StepCard 
                key={step.id} 
                step={step} 
                stepNumber={`0${index + 1}`} 
              />
            ))}
          </div>
        </div>

        {/* Beyond the Audit Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-16">
          {/* Left column - Image */}
          <div className="flex justify-center">
            <div className="relative">
                <Image
                src="/handshake.jpg"
                alt="Long-term partnership strategy"
                className="relative z-10 w-full object-cover"
                width={800}
                height={600}
              />
              <div
                className="absolute right-2 top-2 md:-right-4 md:-top-4 w-full h-full"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
            </div>
          </div>
          
          {/* Right column - Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-900 lg:w-3/4">
              Beyond the Audit: Your Long-Term Partner
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed lg:w-3/4">
              We provide continuous support to ensure you stay compliant and adapt to evolving regulations and business needs. Our partnership extends far beyond the initial audit, helping you maintain and improve your compliance posture over time.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HowWeWork;

