import React, { useState } from 'react';
import { SCHOOL_INFO, SCHOOL_IMAGES } from '../data/schoolData';
import {
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  MapPin,
  Clock,
  ArrowUpRight,
  Shield,
  X,
} from 'lucide-react';

interface FooterProps {
  onOpenEnquiry: () => void;
  lang: 'en' | 'hi';
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry, lang }) => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const footerLinks = [
    { name: lang === 'hi' ? 'मुख्य' : 'Home', href: '#' },
    { name: lang === 'hi' ? 'परिचय' : 'About', href: '#about' },
    { name: lang === 'hi' ? 'शिक्षा' : 'Academics', href: '#academics' },
    { name: lang === 'hi' ? 'दीनी तालीम' : 'Islamic Education', href: '#islamic-education' },
    { name: lang === 'hi' ? 'सुविधाएं व गैलरी' : 'Facilities & Gallery', href: '#gallery' },
    { name: lang === 'hi' ? 'सूचनाएं' : 'News', href: '#news' },
    { name: lang === 'hi' ? 'समर कैंप' : 'Summer Camp', href: '#summer-camp' },
    { name: lang === 'hi' ? 'प्रवेश पूछताछ' : 'Admissions', href: '#enquiry-form-section' },
    { name: lang === 'hi' ? 'सवाल-जवाब' : 'FAQ', href: '#faq' },
  ];

  return (
    <footer id="contact" className="bg-[#050D19] text-white border-t border-slate-800 pt-16 pb-24 md:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Purpose */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center shrink-0">
                <img
                  src={SCHOOL_IMAGES.logo}
                  alt="Al-Jamia Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-lg text-white tracking-tight leading-none block">
                  Al-Jamia
                </span>
                <span className="text-[10px] text-amber-400 font-semibold tracking-wider uppercase leading-none mt-1 block">
                  International School · Gwalior
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm mb-5 leading-relaxed">
              Modern Education with Islamic Values. Providing children with a strong academic foundation from Nursery to
              Class 8 while nurturing faith, Tarbiyah, and character.
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-medium">
              <span className="text-emerald-400">{SCHOOL_INFO.grades}</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span>{SCHOOL_INFO.medium}</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="text-amber-300">Gwalior, M.P.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-4">
              Quick Navigation
            </div>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-300 hover:text-amber-300 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Contacts & Address */}
          <div className="md:col-span-5">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-4">
              School Contact Desk · Gwalior
            </div>

            <div className="space-y-3">
              {/* Phone */}
              <a
                href={SCHOOL_INFO.phoneDial}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-colors group"
              >
                <div className="w-8 h-8 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Admissions Telephone</div>
                  <div className="text-sm font-bold font-mono text-white group-hover:text-amber-300 transition-colors">
                    {SCHOOL_INFO.phone}
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={SCHOOL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-500/30 text-slate-200 transition-colors group"
              >
                <div className="w-8 h-8 rounded-md bg-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-emerald-300 uppercase tracking-wider">Official WhatsApp Desk</div>
                  <div className="text-sm font-bold font-mono text-emerald-200 group-hover:text-amber-300 transition-colors">
                    {SCHOOL_INFO.whatsapp}
                  </div>
                </div>
              </a>

              {/* Social Channels: Instagram & Facebook from brief */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={SCHOOL_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-200"
                >
                  <Instagram className="w-4 h-4 text-rose-400 shrink-0" />
                  <span className="truncate">Instagram</span>
                </a>

                <a
                  href={SCHOOL_INFO.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-200"
                >
                  <Facebook className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="truncate">Facebook</span>
                </a>
              </div>

              {/* Campus Address & Google Map Direction */}
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Campus Location:</div>
                    <div>Gwalior, Madhya Pradesh, India</div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://www.google.com/maps/search/Al-Jamia+International+School+Gwalior"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-300 hover:text-amber-200"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>© 2026 Al-Jamia International School. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsPrivacyOpen(true)}
              className="text-slate-400 hover:text-white underline cursor-pointer text-xs"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <span>Gwalior, Madhya Pradesh</span>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-lg w-full bg-[#071324] text-white rounded-2xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsPrivacyOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
              aria-label="Close privacy modal"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-display font-bold text-xl text-white mb-3">
              Privacy Policy &amp; Data Care
            </h3>
            <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
              <p>
                Al-Jamia International School respects student and family privacy. Contact information submitted through
                our admission enquiry form is strictly utilized to respond to your school admission queries.
              </p>
              <p>
                We do not sell, rent, or distribute parent or student details to third parties. Photographs on this
                website adhere to school permissions.
              </p>
              <p>
                For any data questions, parents may contact our admissions office in Gwalior directly at 93010 89001.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsPrivacyOpen(false)}
              className="mt-6 w-full py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
