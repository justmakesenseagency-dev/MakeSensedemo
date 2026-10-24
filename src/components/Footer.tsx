import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { Phone, MessageCircle, Instagram, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Islamic Education', href: '#islamic-education' },
    { name: 'School Life', href: '#school-life' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#enquiry-form-section' },
  ];

  return (
    <footer className="bg-[#050D19] text-white border-t border-slate-800/80 pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15 8.5L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8.5L12 2Z" />
                </svg>
              </div>
              <div>
                <span className="font-display font-extrabold text-lg text-white tracking-tight leading-none block">
                  AI JAMIA
                </span>
                <span className="text-[10px] text-amber-400 font-semibold tracking-wider uppercase leading-none mt-1 block">
                  INTERNATIONAL SCHOOL
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
              Modern education rooted in Islamic values. Nurturing students from Nursery to Class 8 through high-quality
              English-medium schooling and Qur’an &amp; Sunnah training.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
              <span>{SCHOOL_INFO.grades}</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="text-emerald-400">{SCHOOL_INFO.medium}</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span>Smart Classes</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-4">
              Quick Links
            </div>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-300 hover:text-amber-300 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Official Contacts */}
          <div className="md:col-span-4">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-4">
              Official Contact Desk
            </div>

            <div className="space-y-3.5">
              <a
                href={SCHOOL_INFO.phoneDial}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-colors group"
              >
                <div className="w-8 h-8 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Direct Admissions Call</div>
                  <div className="text-sm font-bold font-mono text-white group-hover:text-amber-300 transition-colors">
                    {SCHOOL_INFO.phone}
                  </div>
                </div>
              </a>

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
                  <div className="text-[10px] text-emerald-300 uppercase tracking-wider">WhatsApp Admissions</div>
                  <div className="text-sm font-bold font-mono text-emerald-200 group-hover:text-amber-300 transition-colors">
                    {SCHOOL_INFO.whatsapp}
                  </div>
                </div>
              </a>

              <a
                href={SCHOOL_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-colors group"
              >
                <div className="w-8 h-8 rounded-md bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Official Instagram</div>
                  <div className="text-xs font-semibold text-white group-hover:text-amber-300 transition-colors">
                    {SCHOOL_INFO.instagram}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Rights Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 AI Jamia International School. All rights reserved.</p>
          <p className="text-[11px] text-slate-600">
            Nursery – Class 8 · English Medium · Islamic Education
          </p>
        </div>
      </div>
    </footer>
  );
};
