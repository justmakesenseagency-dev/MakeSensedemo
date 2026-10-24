import React from 'react';
import { TRUST_STRIP_ITEMS } from '../data/schoolData';
import { CheckCircle2 } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <div className="w-full bg-[#071324] text-white border-y border-amber-500/20 py-5 overflow-x-auto shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 md:gap-8 min-w-max lg:min-w-0">
          {TRUST_STRIP_ITEMS.map((item, index) => (
            <div key={item} className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-100 whitespace-nowrap">
                {item}
              </span>
              {index < TRUST_STRIP_ITEMS.length - 1 && (
                <span className="hidden lg:inline-block ml-6 text-slate-700" aria-hidden="true">
                  /
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
