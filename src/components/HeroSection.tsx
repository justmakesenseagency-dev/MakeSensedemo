import React from 'react';
import { SCHOOL_INFO, SCHOOL_IMAGES } from '../data/schoolData';
import { ArrowUpRight, Calendar, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onOpenEnquiry: () => void;
  lang: 'en' | 'hi';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnquiry, lang }) => {
  const visitWhatsAppUrl = `https://wa.me/91${SCHOOL_INFO.phoneRaw}?text=${encodeURIComponent(
    `Assalamu Alaikum Al-Jamia International School Admissions Desk,\n\nI would like to book a campus visit to 24 Bigha Road, Bahodapur Choraha, Gwalior to explore admission for Nursery to Class 8.\n\nPlease share the available days and timings.`
  )}`;

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-20 overflow-hidden bg-[#FDFBF7]">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-100/25 rounded-full blur-3xl pointer-events-none -ml-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Official School Brand & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Small eyebrow: Swapped from previous h1 */}
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-widest uppercase text-emerald-800">
              <span className="w-5 h-[1.5px] bg-amber-500" />
              <span>
                {lang === 'hi'
                  ? 'आधुनिक शिक्षा, इस्लामी संस्कारों के साथ'
                  : 'MODERN EDUCATION WITH ISLAMIC VALUES'}
              </span>
            </div>

            {/* Headline: School Name swapped from previous span into prominent h1 */}
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1] mb-3">
              {lang === 'hi' ? (
                <>
                  अल-जामिया{' '}
                  <span className="text-emerald-900 underline decoration-amber-400 decoration-wavy decoration-2 underline-offset-8">
                    इंटरनेशनल स्कूल
                  </span>
                </>
              ) : (
                <>
                  Al-Jamia{' '}
                  <span className="text-emerald-900 underline decoration-amber-400 decoration-wavy decoration-2 underline-offset-8">
                    International School
                  </span>
                </>
              )}
            </h1>

            {/* Confirmed Campus Address Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 border border-amber-400/30 rounded-lg text-xs font-semibold text-slate-800 mb-4">
              <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>24 Bigha Road, Bahodapur Choraha, Gwalior</span>
            </div>

            {/* Supporting line per brief */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-7">
              {lang === 'hi'
                ? 'नर्सरी से कक्षा 8 तक का अंग्रेज़ी माध्यम स्कूल, जहाँ बच्चे ज्ञान, चरित्र और ईमान में आगे बढ़ते हैं।'
                : SCHOOL_INFO.heroSupporting}
            </p>

            {/* Action Buttons: Apply for Admission & Book a School Visit (Both Fixed and Clickable) */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#071324] hover:bg-[#0c2242] active:scale-[0.98] text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm border border-amber-500/30 transition-all cursor-pointer group"
              >
                <span>{lang === 'hi' ? 'प्रवेश के लिए आवेदन' : 'Apply for Admission'}</span>
                <ArrowUpRight className="w-4 h-4 text-amber-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href={visitWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold rounded-lg border border-slate-300 shadow-xs transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-emerald-700" />
                <span>{lang === 'hi' ? 'स्कूल विज़िट बुक करें' : 'Book a School Visit'}</span>
              </a>
            </div>

            {/* Four short verified trust points per brief */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-slate-200/80 w-full max-w-xl text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Nursery – Class 8</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>English Medium</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span title="24 Bigha Road, Bahodapur Choraha, Gwalior">Bahodapur Campus</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Qur’an &amp; Values</span>
              </div>
            </div>
          </div>

          {/* Right Column: Summer Camp 2027 Coming Soon Poster Banner */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img
                  src={SCHOOL_IMAGES.summerCampHero}
                  alt="Summer Camp 2027 Coming Soon - 1 April at Al-Jamia International School Gwalior"
                  className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071324]/85 via-transparent to-transparent pointer-events-none" />

                {/* Bottom caption with Summer Camp 2027 Coming Soon badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#071324]/90 backdrop-blur-md border border-amber-500/30 text-white">
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-bold uppercase tracking-wider text-amber-300">
                      Summer Camp 2027 · Coming Soon
                    </span>
                    <span className="text-emerald-400 font-semibold">Starts 1 April</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-snug">
                    7 exciting skill modules: Martial Arts, Spoken English, Qur’an &amp; Duas, Calligraphy, Sports &amp; Smart Tech.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
