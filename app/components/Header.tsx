'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/training', label: 'Training Centre' },
    { href: '/contact', label: 'Contact' },
    { href: '/book-appointment', label: 'Book Now' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (currentY > lastScrollY.current && currentY > 80 && !mobileMenuOpen) {
            setVisible(false);
          } else {
            setVisible(true);
          }
          lastScrollY.current = currentY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Ensure header is visible when mobile menu opens
  useEffect(() => {
    if (mobileMenuOpen) setVisible(true);
  }, [mobileMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'} bg-slate-900/60 backdrop-blur-sm border-b border-slate-800/20`}>
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
            D
          </div>
          <span className="font-bold text-xl text-white hidden sm:inline drop-shadow-lg">
            Dulhan Beauty Parlour
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/90 hover:text-white transition-colors duration-200 font-medium drop-shadow-md"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/book-appointment" className="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 drop-shadow-lg">
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-br from-slate-950 via-pink-950 to-slate-900 py-4 backdrop-blur-sm">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white transition-colors duration-200 py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/book-appointment" className="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg font-semibold text-center hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300">
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
