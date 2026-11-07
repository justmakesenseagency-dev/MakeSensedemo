import React, { useEffect, useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { Phone, MessageCircle, ArrowUpRight } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenEnquiry: () => void;
  lang: 'en' | 'hi';
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenEnquiry, lang }) => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Hide mobile bottom bar when enquiry form is visible in viewport so it never covers fields or buttons
    const observer = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries.some((entry) => entry.isIntersecting);
        setIsHidden(isIntersecting);
      },
      { threshold: 0.1 }
    );

    const formEl = document.getElementById('enquiry-form-section');
    if (formEl) observer.observe(formEl);

    return () => {
      if (formEl) observer.unobserve(formEl);
    };
  }, []);

  return (
    <aside
      className={`xl:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#071324]/95 backdrop-blur-md border-t border-amber-500/30 px-3 py-2 shadow-2xl transition-all duration-300 ${
        isHidden ? 'translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
      aria-label="Quick Mobile Admission Contacts"
    >
      <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
        {/* Call Button */}
        <a
          href={SCHOOL_INFO.phoneDial}
          className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-slate-800 text-slate-100 hover:bg-slate-700 transition-colors text-xs font-semibold"
          title="Call Al-Jamia School Gwalior"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-400" />
          <span>CALL</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={SCHOOL_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-emerald-900/70 text-emerald-200 hover:bg-emerald-800 border border-emerald-500/30 transition-colors text-xs font-semibold"
          title="WhatsApp Al-Jamia School"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>WHATSAPP</span>
        </a>

        {/* Apply Button */}
        <button
          type="button"
          onClick={onOpenEnquiry}
          className="flex items-center justify-center gap-1 py-2 px-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 active:scale-95 transition-all shadow-sm cursor-pointer text-xs font-bold"
          title="Apply for Admission"
        >
          <span>APPLY</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-amber-300" />
        </button>
      </div>
    </aside>
  );
};
