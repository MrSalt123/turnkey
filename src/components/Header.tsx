'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'shadow-2xl'
          : 'backdrop-blur-sm'
      }`}
      style={{
        backgroundColor: isScrolled ? 'var(--color-turnkey)' : 'transparent',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20 py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/turnkey_logo.png"
                alt="TurnKey Compliance"
                width={150}
                height={50}
                className="h-11 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="/"
                className="text-white hover:text-accent py-2 transition-colors duration-200"
              >
                <span className="label uppercase">Home</span>
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-accent py-2 transition-colors duration-200"
              >
                <span className="label uppercase">About</span>
              </Link>

              {/* === MODIFIED SERVICES LINK START === */}
              <div
                className="relative" // This outer relative is for the dropdown
                onMouseEnter={() => setIsServicesHovered(true)}
                onMouseLeave={() => setIsServicesHovered(false)}
              >
                {/* The trigger now also needs to be relative for the arrow */}
                <div className="relative text-white hover:text-accent py-2 transition-colors duration-200 cursor-pointer">
                  <div className="label uppercase">Services</div>
                  
                  {/* The arrow is now absolutely positioned relative to its parent */}
                  <svg 
                    className="w-3 h-3 text-gray-400 absolute -bottom-1.5 left-1/2 transform -translate-x-1/2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              {/* === MODIFIED SERVICES LINK END === */}

                {/* Invisible bridge to prevent gap */}
                {isServicesHovered && (
                  <div className="absolute top-full left-0 right-0 h-4"></div>
                )}

                {/* Dropdown Modal */}
                {isServicesHovered && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 bg-white shadow-lg border border-gray-200 py-2 z-50">
                    <Link
                      href="/services/gap-analysis"
                      className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                    >
                      Gap Analysis
                    </Link>
                    <Link
                      href="/services/readiness-assessments"
                      className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                    >
                      Readiness Assessments
                    </Link>
                    <Link
                      href="/services/outsourced-compliance"
                      className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                    >
                      Outsourced Compliance
                    </Link>
                    <Link
                      href="/services/advisory-services"
                      className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                    >
                      Advisory Services
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/frameworks"
                className="text-white hover:text-accent py-2 transition-colors duration-200"
              >
                <span className="label uppercase">Frameworks</span>
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-full text-white font-medium transition-colors duration-200 uppercase"
                style={{ backgroundColor: 'var(--color-accent)' }}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-accent focus:outline-none focus:text-accent"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        {/* Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        
        {/* Sliding menu */}
        <div 
          className={`fixed top-0 right-0 h-full w-80 bg-white transform transition-transform duration-300 ease-in-out z-50 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          id="mobile-menu"
        >
          <div className="flex flex-col h-full">
            {/* Header with close button */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <Image
                src="/logos/turnkey_logo_black.png"
                alt="TurnKey Compliance"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Menu items */}
            <div className="flex-1 px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block py-3 text-gray-800 hover:text-blue-600 transition-colors border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-lg font-medium uppercase">Home</span>
              </Link>
              <Link
                href="/about"
                className="block py-3 text-gray-800 hover:text-blue-600 transition-colors border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-lg font-medium uppercase">About</span>
              </Link>
              <Link
                href="/services"
                className="block py-3 text-gray-800 hover:text-blue-600 transition-colors border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-lg font-medium uppercase">Services</span>
              </Link>
              <Link
                href="/frameworks-standards"
                className="block py-3 text-gray-800 hover:text-blue-600 transition-colors border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-lg font-medium uppercase">Frameworks</span>
              </Link>
              <Link
                href="/contact"
                className="block py-4 px-6 rounded-full text-white font-medium uppercase mt-6 text-center"
                style={{ backgroundColor: 'var(--color-accent)' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}