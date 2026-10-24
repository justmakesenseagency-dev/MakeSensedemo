import React, { useState, useEffect } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Islamic Education', href: '#islamic-education' },
    { name: 'School Life', href: '#school-life' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm border-b border-slate-200/70 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 md:gap-8">
            {/* Zone 1: Brand Wordmark (Single text element) */}
            <a
              href="#"
              className="flex items-center gap-3 text-slate-900 group whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-emerald-600 rounded"
              aria-label="AI Jamia International School Home"
            >
              <div className="w-10 h-10 rounded-lg bg-[#071324] border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-sm transition-transform duration-200 group-hover:scale-105">
                <svg
                  className="w-5 h-5 text-amber-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L15 8.5L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8.5L12 2Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-slate-900 leading-none">
                  AI JAMIA
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-emerald-800 uppercase leading-none mt-1">
                  INTERNATIONAL SCHOOL
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (single-line, clean hover underline) */}
            <nav
              className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="whitespace-nowrap shrink-0 hover:text-emerald-800 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-emerald-700 hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: Direct Phone & Primary CTA */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <a
                href={SCHOOL_INFO.phoneDial}
                className="hidden md:inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-emerald-800 transition-colors py-2 px-3 rounded-md hover:bg-slate-100"
                title="Call 9301089001"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-700" />
                <span className="font-mono tabular-nums">{SCHOOL_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#071324] hover:bg-[#0c2242] active:scale-[0.98] transition-all rounded-lg shadow-sm border border-amber-500/30 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>APPLY NOW</span>
                <ArrowUpRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="px-3 py-1.5 text-xs font-bold text-white bg-[#071324] rounded-md border border-amber-500/40"
              >
                APPLY
              </button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
                aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#071324] text-white flex flex-col justify-between p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L15 8.5L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8.5L12 2Z" />
                  </svg>
                </div>
                <div>
                  <div className="font-display font-extrabold text-sm text-white">AI JAMIA</div>
                  <div className="text-[10px] text-amber-300 font-semibold tracking-wider">INTERNATIONAL SCHOOL</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-200 hover:text-amber-300 py-1 border-b border-slate-800/40"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg text-center flex items-center justify-center gap-2"
            >
              <span>APPLY NOW FOR ADMISSION</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={SCHOOL_INFO.phoneDial}
                className="py-3 px-3 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg text-center flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>CALL SCHOOL</span>
              </a>

              <a
                href={SCHOOL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-3 bg-emerald-900/60 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-200 text-xs font-semibold rounded-lg text-center flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WHATSAPP</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-400 text-center mt-2">
              Nursery – Class 8 · English Medium · Islamic Values
            </p>
          </div>
        </div>
      )}
    </>
  );
};
