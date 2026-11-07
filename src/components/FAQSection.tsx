import React, { useState } from 'react';
import { TEN_PARENT_FAQS } from '../data/schoolData';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';

interface FAQSectionProps {
  lang: 'en' | 'hi';
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#F8FAFC] border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-800 mb-3">
            <span className="w-5 h-[1.5px] bg-amber-500" />
            <span>{lang === 'hi' ? 'अभिभावकों के मुख्य सवाल' : 'Parent Questions & Answers'}</span>
            <span className="w-5 h-[1.5px] bg-amber-500" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
            {lang === 'hi' ? 'अक्सर पूछे जाने वाले सवाल' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Factual answers to the ten most essential questions parents ask regarding Al-Jamia International School in
            Gwalior.
          </p>
        </div>

        {/* 10 Parent Questions Accordion per Brief */}
        <div className="space-y-3.5 mb-10">
          {TEN_PARENT_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-slate-50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-mono text-xs flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-slate-900 pr-2">
                      {lang === 'hi' ? faq.questionHindi : faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#071324] text-amber-300 rotate-180'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    <p className="font-medium text-slate-700">
                      {lang === 'hi' ? faq.answerHindi : faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more clarification card */}
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-emerald-950 font-medium">
            Have a question not listed here? Speak directly with our admissions counselor in Gwalior.
          </span>
          <a
            href="tel:9301089001"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-800 text-white font-bold shrink-0 hover:bg-emerald-700 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call 93010 89001</span>
          </a>
        </div>
      </div>
    </section>
  );
};
