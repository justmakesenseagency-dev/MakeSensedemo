import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { Phone, MessageCircle, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface AdmissionsSectionProps {
  onOpenEnquiry: () => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="admissions" className="py-20 md:py-28 bg-[#071324] text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400 mb-4">
            <span className="w-5 h-[1.5px] bg-amber-400" />
            <span>ADMISSIONS OPEN: NURSERY – CLASS 8</span>
            <span className="w-5 h-[1.5px] bg-amber-400" />
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
            GIVE YOUR CHILD <br />
            <span className="text-amber-300">A STRONGER START.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Explore an educational environment where modern learning and Islamic values come together.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              type="button"
              onClick={onOpenEnquiry}
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>APPLY NOW</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <a
              href={SCHOOL_INFO.phoneDial}
              className="px-6 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-xl transition-all flex items-center gap-2.5"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>TALK TO THE SCHOOL ({SCHOOL_INFO.phone})</span>
            </a>

            <a
              href={SCHOOL_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-4 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 font-semibold rounded-xl transition-all flex items-center gap-2.5"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>CHAT ON WHATSAPP</span>
            </a>
          </div>

          {/* Value Checkpoints */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white uppercase">Direct Admission Guidance</div>
                <div className="text-xs text-slate-400 mt-1">Our staff guides you through age criteria and documentation.</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white uppercase">English Medium + Deen</div>
                <div className="text-xs text-slate-400 mt-1">Comprehensive dual-stream learning from foundational nursery.</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white uppercase">Safe &amp; Active Environment</div>
                <div className="text-xs text-slate-400 mt-1">Smart classes, modern seating, and outdoor sports playground.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
