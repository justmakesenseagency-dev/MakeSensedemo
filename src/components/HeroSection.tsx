import React from 'react';
import { SCHOOL_INFO, SCHOOL_IMAGES } from '../data/schoolData';
import { ArrowUpRight, Compass, ShieldCheck, GraduationCap, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenEnquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FDFBF7]">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -ml-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning & Editorial Headlines */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Small eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-bold tracking-widest uppercase text-emerald-800">
              <span className="w-6 h-[1.5px] bg-amber-500" />
              <span>AI JAMIA INTERNATIONAL SCHOOL</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.08] mb-6">
              WHERE <br className="hidden sm:inline" />
              <span className="text-emerald-900 underline decoration-amber-400 decoration-wavy decoration-2 underline-offset-8">
                FAITH
              </span>{' '}
              MEETS <br />
              THE FUTURE.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
              {SCHOOL_INFO.subheading}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#071324] hover:bg-[#0c2242] active:scale-[0.98] text-white text-sm font-semibold rounded-lg shadow-sm border border-amber-500/30 transition-all cursor-pointer group"
              >
                <span>ADMISSIONS OPEN</span>
                <ArrowUpRight className="w-4 h-4 text-amber-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold rounded-lg border border-slate-300/80 shadow-xs transition-colors"
              >
                <span>EXPLORE OUR SCHOOL</span>
              </a>
            </div>

            {/* Unboxed Metadata Strip (Zero-Pill Compliance) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 tracking-wide uppercase pt-4 border-t border-slate-200/80 w-full max-w-xl">
              <span className="text-slate-800 font-bold">{SCHOOL_INFO.grades}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-emerald-800">{SCHOOL_INFO.medium}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-700">{SCHOOL_INFO.educationType}</span>
            </div>
          </div>

          {/* Right Column: Cinematic Visual Composition with Overlay Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-900 group">
                <img
                  src={SCHOOL_IMAGES.heroCampus}
                  alt="AI Jamia International School modern educational campus and courtyard"
                  className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to stylized SVG placeholder if image cannot load
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.classList.add('bg-gradient-to-br', 'from-slate-900', 'via-slate-800', 'to-emerald-950', 'p-8', 'flex', 'flex-col', 'justify-center');
                    }
                  }}
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071324]/80 via-transparent to-black/20 pointer-events-none" />

                {/* Bottom caption card inside image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#071324]/85 backdrop-blur-md border border-amber-500/20 text-white">
                  <div className="flex items-center gap-2 text-[11px] text-amber-300 font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Nurturing Excellence</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-snug">
                    Fostering academic distinction, ethical integrity, and strong Imaan in a joyful learning community.
                  </p>
                </div>
              </div>

              {/* Floating Information Card 1: Modern Education */}
              <div className="absolute -top-4 -left-4 sm:-left-6 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-md flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-none">Modern Education</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Smart Classes &amp; English Medium</div>
                </div>
              </div>

              {/* Floating Information Card 2: Islamic Values */}
              <div className="absolute top-1/2 -right-4 sm:-right-6 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-md flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-none">Islamic Values</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Qur’an &amp; Sunnah Guidance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
