'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isFrameworksHovered, setIsFrameworksHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Logic to handle dynamic navbar styles ---
  const isOpaque = isScrolled || isMobileMenuOpen;
  const navBgColor = isScrolled ? 'var(--color-turnkey)' : (isMobileMenuOpen ? 'var(--color-turnkey)' : 'transparent');
  const logoSrc = '/logos/turnkey_logo.png'; // Always use the white logo as the background is now always dark when open
  const linkAndIconColor = 'text-white';

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-2xl' : ''} ${!isOpaque ? 'backdrop-blur-sm' : ''}`}
      style={{
        backgroundColor: navBgColor,
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20 py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={logoSrc}
                alt="TurnKey Compliance"
                width={150}
                height={50}
                className="h-8 md:h-11 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className={`${linkAndIconColor} hover:text-accent py-2 transition-colors duration-200`}>
                <span className="label ">Home</span>
              </Link>
              <Link href="/about" className={`${linkAndIconColor} hover:text-accent py-2 transition-colors duration-200`}>
                <span className="label ">About</span>
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setIsServicesHovered(true)}
                onMouseLeave={() => setIsServicesHovered(false)}
              >
                <Link 
                  href="/services"
                  className={`relative ${linkAndIconColor} hover:text-accent py-2 transition-colors duration-200 cursor-pointer block`}
                >
                  <div className="label ">Services</div>
                  <svg className="w-3 h-3 text-gray-400 absolute -bottom-1.5 left-1/2 transform -translate-x-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {isServicesHovered && <div className="absolute top-full left-0 right-0 h-4"></div>}
                {isServicesHovered && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 bg-white shadow-lg border border-gray-200 py-2 z-50">
                    <Link href="/services/gap-analysis" className="block px-4 py-3 text-gray-800 hover:bg-gray-50">Gap Analysis</Link>
                    <Link href="/services/readiness-assessments" className="block px-4 py-3 text-gray-800 hover:bg-gray-50">Readiness Assessments</Link>
                    <Link href="/services/outsourced-compliance" className="block px-4 py-3 text-gray-800 hover:bg-gray-50">Outsourced Compliance</Link>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setIsFrameworksHovered(true)}
                onMouseLeave={() => setIsFrameworksHovered(false)}
              >
                <Link 
                  href="/frameworks"
                  className={`relative ${linkAndIconColor} hover:text-accent py-2 transition-colors duration-200 cursor-pointer block`}
                >
                  <div className="label ">Frameworks</div>
                  <svg className="w-3 h-3 text-gray-400 absolute -bottom-1.5 left-1/2 transform -translate-x-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {isFrameworksHovered && <div className="absolute top-full left-0 right-0 h-4"></div>}
                {isFrameworksHovered && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 bg-white shadow-lg border border-gray-200 py-2 z-50">
                    <Link href="/frameworks/soc2" className="block px-4 py-3 text-gray-800 hover:bg-gray-50">SOC 2</Link>
                    <Link href="/frameworks/iso27001" className="block px-4 py-3 text-gray-800 hover:bg-gray-50">ISO 27001</Link>
                    <Link href="/frameworks/iso27701" className="block px-4 py-3 text-gray-800 hover:bg-gray-50">ISO 27701</Link>
                    <Link href="/frameworks/iso42001" className="block px-4 py-3 text-gray-800 hover:bg-gray-50">ISO 42001</Link>
                    <Link href="/frameworks/sox404" className="block px-4 py-3 text-gray-800 hover:bg-gray-50">SOX 404</Link>
                    <Link href="/frameworks/soc1" className="block px-4 py-3 text-gray-800 hover:bg-gray-50">SOC 1</Link>
                    <Link href="/frameworks/pci" className="block px-4 py-3 text-gray-800 hover:bg-gray-50">PCI DSS</Link>
                    <Link href="/frameworks/fedramp" className="block px-4 py-3 text-gray-800 hover:bg-gray-50">FedRAMP</Link>
                    <Link href="/frameworks/cmmc" className="block px-4 py-3 text-gray-800 hover:bg-gray-50">CMMC</Link>
                    <Link href="/frameworks/gdpr" className="block px-4 py-3 text-gray-800 hover:bg-gray-50">GDPR</Link>
                    <Link href="/frameworks/nis2" className="block px-4 py-3 text-gray-800 hover:bg-gray-50">NIS2</Link>
                    <Link href="/frameworks/eu-ai-act" className="block px-4 py-3 text-gray-800 hover:bg-gray-50">EU AI Act</Link>
                  </div>
                )}
              </div>
              <Link href="/contact" className="px-6 py-2 rounded-2xl text-white text-lg font-semibold transition-colors duration-200" style={{ backgroundColor: 'var(--color-accent)' }}>
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${linkAndIconColor} hover:text-accent focus:outline-none focus:text-accent`}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* === MOBILE MENU DROPDOWN - REFACTORED === */}
      <div className="md:hidden relative">
        <div 
          className={`absolute top-0 left-0 w-full shadow-2xl overflow-hidden transition-all duration-600 ease-in-out z-40 ${
            isMobileMenuOpen ? 'max-h-[30rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ backgroundColor: 'var(--color-turnkey)' }}
          id="mobile-menu"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link href="/" className="block py-3 text-white hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="text-lg font-medium ">Home</span>
            </Link>
            <Link href="/about" className="block py-3 text-white hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="text-lg font-medium ">About</span>
            </Link>
            <Link href="/services" className="block py-3 text-white hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="text-lg font-medium ">Services</span>
            </Link>
            <Link href="/frameworks" className="block py-3 text-white hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="text-lg font-medium ">Frameworks</span>
            </Link>
            <Link href="/contact" className="block py-2 px-4 rounded-2xl text-white font-medium  mt-4 w-fit mb-2" style={{ backgroundColor: 'var(--color-accent)' }} onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}