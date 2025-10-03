import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Main container switched to CSS Grid */}
        <div className="grid grid-cols-[auto_1px_1fr] items-start gap-x-8">
          
          {/* Grid Column 1: Logo and Socials */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-block">
              <Image
                src="/logos/turnkey_logo_black.png" // Your logo path
                alt="TurnKey Compliance"
                width={120}
                height={40}
                className="h-9 w-auto"
              />
            </Link>
            <div className="flex items-center space-x-4 mt-5">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Grid Column 2: Vertical Separator Line */}
          {/* This will now automatically stretch to the full height of the grid row */}
          <div className="w-px h-full bg-gray-200"></div>

          {/* Grid Column 3: Navigation Links */}
          <div className="flex justify-between items-start w-full">
            <nav className="flex items-start space-x-7">
              <div>
                <Link href="/" className="text-md font-semibold uppercase tracking-wider text-gray-800 hover:text-accent">Home</Link>
              </div>
              <div>
                <Link href="/about" className="text-md font-semibold uppercase tracking-wider text-gray-800 hover:text-accent">About</Link>
              </div>
              
              {/* Services column with sub-links in the normal document flow */}
              <div>
                <Link href="/services" className="text-md font-semibold uppercase tracking-wider text-gray-800 hover:text-accent">Services</Link>
                <div className="mt-4 flex flex-col items-start space-y-3">
                  <Link href="/services/gap-analysis" className="text-xs text-gray-500 hover:text-gray-900 whitespace-nowrap">Gap Analysis</Link>
                  <Link href="/services/readiness-assessments" className="text-xs text-gray-500 hover:text-gray-900 whitespace-nowrap">Readiness Assessments</Link>
                  <Link href="/services/outsourced-compliance" className="text-xs text-gray-500 hover:text-gray-900 whitespace-nowrap">Outsourced Compliance</Link>
                  <Link href="/services/advisory-services" className="text-xs text-gray-500 hover:text-gray-900 whitespace-nowrap">Advisory Services</Link>
                </div>
              </div>

              <div>
                <Link href="/frameworks-standards" className="text-md font-semibold uppercase tracking-wider text-gray-800 hover:text-accent">Frameworks</Link>
              </div>
            </nav>
            
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full text-white text-md uppercase transition-colors duration-200 bg-accent"
            >
              Contact Us
            </Link>
          </div>
        </div>
        
        {/* Bottom Bar: Copyright and Credit */}
        {/* Spacing is now correct without needing a large top margin */}
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-[10px] text-gray-500">
            &copy; 2025 TurnKey Compliance. All Rights Reserved.
          </p>
          <p className="text-[10px] text-gray-500 mt-2 sm:mt-0">
            Made by <a href="https://www.btwn.digital" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 font-medium">BTWN Digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
}