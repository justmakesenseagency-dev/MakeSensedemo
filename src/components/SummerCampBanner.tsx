import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface SummerCampBannerProps {
  onOpenCamp: () => void;
  lang: 'en' | 'hi';
}

export const SummerCampBanner: React.FC<SummerCampBannerProps> = ({ onOpenCamp, lang }) => {
  return (
    <div className="bg-gradient-to-r from-emerald-900 via-[#071324] to-emerald-950 text-white border-b border-amber-500/30 text-xs py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="text-amber-400 font-bold shrink-0">☀</span>
          <span className="font-semibold text-slate-100 truncate">
            {lang === 'hi'
              ? 'समर कैंप 1 अप्रैल से शुरू · सीमित सीटें उपलब्ध हैं'
              : 'Summer Camp starts 1 April · Seats are limited'}
          </span>
          <span className="hidden sm:inline-block text-amber-300/80 text-[11px]">
            {lang === 'hi' ? '— 7 गतिविधियां Al-Jamia मूल्यों के साथ' : '— 7 Activities with Al-Jamia values'}
          </span>
        </div>

        <button
          type="button"
          onClick={onOpenCamp}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-[11px] tracking-wide shrink-0 transition-transform active:scale-95 cursor-pointer shadow-xs"
        >
          <span>{lang === 'hi' ? 'आवेदन करें' : 'Apply'}</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
