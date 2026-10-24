import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { Phone, MessageCircle, ArrowUpRight } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenEnquiry: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenEnquiry }) => {
  return (
    <aside
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#071324]/95 backdrop-blur-md border-t border-amber-500/30 px-3 py-2.5 shadow-2xl"
      aria-label="Quick Mobile Admission Contacts"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={SCHOOL_INFO.phoneDial}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-slate-800 text-slate-100 hover:bg-slate-700 transition-colors"
          title="Call School"
        >
          <Phone className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">CALL</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={SCHOOL_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-emerald-900/60 text-emerald-200 hover:bg-emerald-800 border border-emerald-500/30 transition-colors"
          title="WhatsApp School"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WHATSAPP</span>
        </a>

        {/* Apply Button */}
        <button
          type="button"
          onClick={onOpenEnquiry}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 active:scale-95 transition-all shadow-sm cursor-pointer"
          title="Apply for Admission"
        >
          <ArrowUpRight className="w-4 h-4 text-amber-300 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">APPLY NOW</span>
        </button>
      </div>
    </aside>
  );
};
