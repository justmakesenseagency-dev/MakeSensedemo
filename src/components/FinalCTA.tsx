import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { Phone, MessageCircle, ArrowUpRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenEnquiry: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="py-20 md:py-28 bg-[#071324] text-white relative overflow-hidden bg-islamic-dark-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-[#071324]/80 via-transparent to-[#071324] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400 mb-4">
          <span className="w-5 h-[1.5px] bg-amber-400" />
          <span>AI JAMIA INTERNATIONAL SCHOOL</span>
          <span className="w-5 h-[1.5px] bg-amber-400" />
        </div>

        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
          A BETTER BEGINNING <br />
          <span className="text-amber-300">STARTS HERE.</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Discover an environment where modern education, Islamic values and character development come together.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenEnquiry}
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-bold rounded-xl shadow-lg border border-emerald-400/30 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>APPLY NOW</span>
            <ArrowUpRight className="w-5 h-5 text-amber-300" />
          </button>

          <a
            href={SCHOOL_INFO.phoneDial}
            className="px-6 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-xl transition-all flex items-center gap-2.5"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>CALL {SCHOOL_INFO.phone}</span>
          </a>

          <a
            href={SCHOOL_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-4 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 font-semibold rounded-xl transition-all flex items-center gap-2.5"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WHATSAPP US</span>
          </a>
        </div>
      </div>
    </section>
  );
};
