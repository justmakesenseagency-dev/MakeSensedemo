import React, { useState, useEffect } from 'react';
import { SCHOOL_INFO, SCHOOL_IMAGES } from '../data/schoolData';
import { Phone, Menu, X, ArrowUpRight, Globe } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: () => void;
  onOpenCamp: () => void;
  lang: 'en' | 'hi';
  onToggleLang: (lang: 'en' | 'hi') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEnquiry,
  onOpenCamp,
  lang,
  onToggleLang,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang === 'hi' ? 'मुख्य' : 'Home', href: '#' },
    { name: lang === 'hi' ? 'परिचय' : 'About', href: '#about' },
    { name: lang === 'hi' ? 'शिक्षा' : 'Academics', href: '#academics' },
    { name: lang === 'hi' ? 'दीनी तालीम' : 'Islamic Education', href: '#islamic-education' },
    { name: lang === 'hi' ? 'सुविधाएं व गैलरी' : 'Facilities & Gallery', href: '#gallery' },
    { name: lang === 'hi' ? 'सूचनाएं' : 'News', href: '#news' },
    { name: lang === 'hi' ? 'समर कैंप' : 'Summer Camp', href: '#summer-camp' },
    { name: lang === 'hi' ? 'प्रवेश' : 'Admissions', href: '#admissions' },
    { name: lang === 'hi' ? 'संपर्क' : 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
          : 'bg-[#FDFBF7] py-3.5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* Zone 1: Real School Logo + Official Name Al-Jamia */}
          <a
            href="#"
            className="flex items-center gap-3 text-slate-900 group whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-emerald-600 rounded"
            aria-label="Al-Jamia International School Home"
          >
            <div className="w-11 h-11 rounded-lg bg-white p-1 border border-amber-500/40 shadow-xs flex items-center justify-center shrink-0">
              <img
                src={SCHOOL_IMAGES.logo}
                alt="Al-Jamia International School Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const p = e.currentTarget.parentElement;
                  if (p) p.innerText = 'AJ';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-slate-900 leading-none">
                Al-Jamia
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-emerald-800 uppercase leading-none mt-1">
                International School · Gwalior
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (single-line, clean hover underline) */}
          <nav
            className="hidden xl:flex items-center gap-5 text-[13px] font-medium text-slate-700"
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

          {/* Zone 3: Language Toggle & Phone & Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher (EN | हिन्दी) */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs font-semibold">
              <button
                type="button"
                onClick={() => onToggleLang('en')}
                className={`px-2 py-1 rounded-md transition-colors ${
                  lang === 'en'
                    ? 'bg-white text-emerald-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onToggleLang('hi')}
                className={`px-2 py-1 rounded-md transition-colors ${
                  lang === 'hi'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="हिंदी में देखें"
              >
                हिन्दी
              </button>
            </div>

            {/* Direct Phone Call Button */}
            <a
              href={SCHOOL_INFO.phoneDial}
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-800 transition-colors py-1.5 px-2.5 rounded-md hover:bg-slate-100"
              title="Call 93010 89001"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span className="font-mono tabular-nums">{SCHOOL_INFO.phone}</span>
            </a>

            {/* Primary Action Button (Single clear action) */}
            <button
              type="button"
              onClick={onOpenEnquiry}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#071324] hover:bg-[#0c2242] active:scale-[0.98] transition-all rounded-lg shadow-xs border border-amber-500/30 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>{lang === 'hi' ? 'प्रवेश के लिए आवेदन' : 'Apply for Admission'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none rounded-md hover:bg-slate-100"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#071324] text-white flex flex-col justify-between p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <img
                  src={SCHOOL_IMAGES.logo}
                  alt="Al-Jamia Logo"
                  className="w-10 h-10 object-contain bg-white rounded p-1"
                />
                <div>
                  <div className="font-display font-extrabold text-base text-white">
                    Al-Jamia
                  </div>
                  <div className="text-[10px] text-amber-300 font-semibold tracking-wider">
                    INTERNATIONAL SCHOOL · GWALIOR
                  </div>
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

            <nav className="flex flex-col gap-3 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-200 hover:text-amber-300 py-1.5 border-b border-slate-800/40"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg text-center flex items-center justify-center gap-2 text-sm"
            >
              <span>{lang === 'hi' ? 'प्रवेश के लिए आवेदन करें' : 'Apply for Admission'}</span>
              <ArrowUpRight className="w-4 h-4 text-amber-300" />
            </button>

            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCamp();
              }}
              className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-center text-xs"
            >
              <span>{lang === 'hi' ? 'समर कैंप 2027 विवरण' : 'Summer Camp 2027 Details'}</span>
            </button>

            <div className="text-center text-xs text-slate-400 mt-1">
              Gwalior · Nursery to Class 8 · English Medium
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
