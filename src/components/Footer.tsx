'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Main container is now mobile-first (flex-col) and switches to grid on large screens */}
        <div className="flex flex-col items-start gap-10 lg:grid lg:grid-cols-[auto_1px_1fr] lg:items-start lg:gap-x-8">
          
          {/* Grid Column 1: Logo and Socials - Aligns left on mobile, start on desktop */}
          <div className="flex flex-col items-start lg:items-start">
            <Link href="/" className="inline-block">
              <Image
                src="/logos/turnkey_logo_black.png"
                alt="TurnKey Compliance"
                width={120}
                height={40}
                className="h-9 w-auto"
              />
            </Link>
            <div className="flex items-center space-x-4 mt-5">
              <a href="https://www.linkedin.com/in/jasonlannen" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Grid Column 2: Vertical Separator Line - Hidden on mobile */}
          <div className="hidden w-px h-full bg-gray-200 lg:block"></div>

          {/* Grid Column 3: Navigation Links - Stacks and aligns left on mobile */}
          <div className="flex flex-col items-start gap-8 w-full lg:flex-row lg:justify-between lg:items-start">
            <nav className="flex flex-col items-start text-left gap-6 lg:flex-row lg:items-start lg:text-left lg:gap-7">
              <div>
                <Link href="/" className="text-md font-semibold uppercase tracking-wider text-gray-800 hover:text-accent">Home</Link>
              </div>
              <div>
                <Link href="/about" className="text-md font-semibold uppercase tracking-wider text-gray-800 hover:text-accent">About</Link>
              </div>
              
              <div>
                <Link href="/services" className="text-md font-semibold uppercase tracking-wider text-gray-800 hover:text-accent">Services</Link>
                {/* Sub-links stack neatly under the parent */}
                <div className="mt-4 flex flex-col items-start space-y-3 lg:items-start">
                  <Link href="/services/gap-analysis" className="text-xs text-gray-500 hover:text-gray-900 whitespace-nowrap">Gap Analysis</Link>
                  <Link href="/services/readiness-assessments" className="text-xs text-gray-500 hover:text-gray-900 whitespace-nowrap">Readiness Assessments</Link>
                  <Link href="/services/outsourced-compliance" className="text-xs text-gray-500 hover:text-gray-900 whitespace-nowrap">Outsourced Compliance</Link>
                </div>
              </div>

              <div>
                <Link href="/frameworks-standards" className="text-md font-semibold uppercase tracking-wider text-gray-800 hover:text-accent">Frameworks</Link>
              </div>
            </nav>
            
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-2xl text-white text-md uppercase transition-colors duration-200 bg-accent"
            >
              Contact Us
            </Link>
          </div>
        </div>
        
        {/* Bottom Bar: Copyright and Credit - This part was already responsive */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-[10px] text-gray-500 text-center sm:text-left">
              &copy; {new Date().getFullYear()} TurnKey Compliance. All Rights Reserved. 
            </p>
            <div className="flex items-center gap-4">
              <Link href="/terms" className="text-[10px] text-gray-500 hover:text-gray-800">
                Terms of Use
              </Link>
              <Link href="/privacy" className="text-[10px] text-gray-500 hover:text-gray-800">
                Privacy Policy
              </Link>
            </div>
          </div>
          {/* <p className="text-[10px] text-gray-500 mt-2 sm:mt-0">
            Made by <a href="https://www.btwn.digital" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 font-medium">BTWN Digital</a>
          </p> */}
        </div>
      </div>
    </footer>
  );
}