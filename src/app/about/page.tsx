'use client';
import { useState, useEffect } from 'react';
import { Linkedin } from 'lucide-react';
import Image from 'next/image';
import ValuesSection from '@/components/ValuesSection';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    auditPass: 0,
    yearsExperience: 0,
    fasterAudit: 0,
    industriesServed: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const statsElement = document.getElementById('stats-section');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targetCounts = {
      auditPass: 100,
      yearsExperience: 50,
      fasterAudit: 40,
      industriesServed: 15
    };

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    const intervals = Object.keys(targetCounts).map((key) => {
      const target = targetCounts[key as keyof typeof targetCounts];
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervals.find(i => i === intervals[Object.keys(targetCounts).indexOf(key)])!);
        }

        setCounts(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isVisible]);
  return (
    <div className="min-h-screen relative">
      <div
        className="py-32"
        style={{ backgroundColor: 'var(--color-turnkey)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Content */}
            <div>
              <h2 className="text-white text-left mb-6">
                More Than a Service. <br /> We&apos;re Your Partner.
              </h2>
              <p className="text-white/90 text-xl leading-relaxed mb-8">
                We believe in a true partnership, creating personalized compliance programs that align with your business.<br /><br />
                Our deep industry knowledge, rooted in Big Four philosophies, becomes your strategic advantage.<br /><br />
                Founded on the principle of simplifying the audit process, our mission is to empower your business.
              </p>
              <button className="bg-white text-gray-900 px-8 py-3 hover:bg-gray-100 transition-colors border rounded-md" >
                Connect with Us
              </button>
            </div>
            
            {/* Right column - Image */}
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/teamstrategy.jpg"
                  alt="About TurnKey Compliance"
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

      {/* Mission section */}
      <div className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/approach.jpg"
                  alt="A professional team collaborating in a modern office"
                  width={512}
                  height={384}
                  className="relative z-10 w-full h-auto object-cover max-w-lg aspect-[4/3]"
                />
                <div
                  className="absolute -left-2 -bottom-2 md:-left-4 md:-bottom-4 w-full h-full"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                A TurnKey Approach to Compliance
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                TurnKey Compliance takes a collaborative, personalized approach to your security, partnering with you to create programs that meet industry standards. Our goal is to manage the complexities of the audit process on your behalf, allowing you to concentrate on your business.
              </p>
              <div className="flex flex-wrap gap-4">
                 <button className="bg-accent text-white px-6 py-3 font-medium hover:bg-blue-700 transition-colors rounded-md">
                    Get Started
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 font-medium hover:bg-gray-100 transition-colors rounded-md">
                    Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* By The Numbers section */}
      <div className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-turnkey)' }}>
              By The Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our track record speaks for itself. Here&apos;s what we&apos;ve achieved for our clients.
            </p>
          </div>

          <div id="stats-section" className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2" style={{ color: 'var(--color-turnkey)' }}>
                {counts.auditPass}%
              </h3>
              <p className="text-gray-600">Audit Pass Rate</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2" style={{ color: 'var(--color-turnkey)' }}>
                {counts.yearsExperience}+
              </h3>
              <p className="text-gray-600">Years Combined Expertise</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2" style={{ color: 'var(--color-turnkey)' }}>
                {counts.fasterAudit}%
              </h3>
              <p className="text-gray-600">Faster Time-to-Audit</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2" style={{ color: 'var(--color-turnkey)' }}>
                &gt;{counts.industriesServed}
              </h3>
              <p className="text-gray-600">Industries Served</p>
            </div>
          </div>
        </div>
      </div>

      <ValuesSection />



      {/* Founder section */}
      <div className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold" style={{ color: 'var(--color-turnkey)' }}>
                Meet Our Founder
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -left-2 -top-2 md:-left-4 md:-top-4 w-full h-full bg-accent z-0"></div>
                <Image
                    src="/jason.avif"
                    alt="Jason - Founder of TurnKey Compliance"
                    width={384}
                    height={384}
                    className="relative z-10 w-96 h-96 object-cover shadow-lg"
                  />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-4">
                    <h3 className="text-3xl font-bold text-gray-900">
                        Jason Lannen
                    </h3>
                    <a href="https://www.linkedin.com/in/jasonlannen" target="_blank" aria-label="Jason's LinkedIn Profile" className="text-gray-400 hover:text-blue-600 transition-colors ">
                        <Linkedin size={24} />
                    </a>
                </div>
                <p className="text-lg font-medium" style={{ color: 'var(--color-turnkey)' }}>
                    Founder & Principal Consultant
                </p>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                A seasoned compliance professional with over 20 years of experience, Jason has a passion for helping organizations achieve and maintain compliance. Having served as an external auditor in KPMG&apos;s IT Advisory Practice, he possesses unique insight into the complexities of audits.
              </p>
              <blockquote className="border-l-4 pl-4 italic text-gray-700" style={{ borderColor: 'var(--color-turnkey)' }}>
                &ldquo;This experience inspired me to establish TurnKey, with the goal of simplifying the audit process for clients.&rdquo;
              </blockquote>
              <p className="text-gray-600 text-lg leading-relaxed">
                Jason frequently speaks at his alma mater, University of Georgia, on compliance-related topics.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* CTA section */}
      <div className="py-16" style={{ backgroundColor: 'var(--color-turnkey)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Ready to Start Your Compliance Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let&apos;s work together to make compliance your competitive advantage.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-gray-900 px-8 py-3 font-medium hover:bg-gray-100 transition-colors rounded-md">
              Get Started
            </button>
            <button className="border border-white text-white px-8 py-3 font-medium hover:bg-white/10 transition-colors rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
