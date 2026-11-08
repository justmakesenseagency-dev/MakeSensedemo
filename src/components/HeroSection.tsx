import React, { useState, useEffect, useCallback } from 'react';
import { SCHOOL_INFO, SCHOOL_IMAGES } from '../data/schoolData';
import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenEnquiry: () => void;
  lang: 'en' | 'hi';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnquiry, lang }) => {
  const visitWhatsAppUrl = `https://wa.me/91${SCHOOL_INFO.phoneRaw}?text=${encodeURIComponent(
    `Assalamu Alaikum Al-Jamia International School Admissions Desk,\n\nI would like to book a campus visit to 24 Bigha Road, Bahodapur Choraha, Gwalior to explore admission for Nursery to Class 8.\n\nPlease share the available days and timings.`
  )}`;

  // Curated hero showcase slides
  const heroSlides = [
    {
      id: 'summer-camp',
      image: SCHOOL_IMAGES.summerCampHero,
      title: 'Summer Camp 2027',
      tag: 'Coming Soon · 1 April',
      caption: '7 exciting modules: Martial Arts, Spoken English, Calligraphy & Sports.',
      alt: 'Summer Camp 2027 Coming Soon - 1 April at Al-Jamia International School Gwalior',
    },
    {
      id: 'campus-grounds',
      image: SCHOOL_IMAGES.campusGardenPath,
      title: 'Lush Campus Grounds',
      tag: 'Bahodapur Choraha, Gwalior',
      caption: 'Landscaped green grounds and official entrance path at 24 Bigha Road.',
      alt: 'Al-Jamia International School campus garden and entrance pathway at 24 Bigha Road Bahodapur Choraha Gwalior',
    },
    {
      id: 'smart-classrooms',
      image: SCHOOL_IMAGES.classroomDesks,
      title: 'Smart Classrooms',
      tag: 'Nursery to Class 8',
      caption: 'Ergonomic seating, natural daylight, and concept-based visual learning.',
      alt: 'Al-Jamia classroom with student benches and blackboard',
    },
    {
      id: 'play-area',
      image: SCHOOL_IMAGES.outdoorPlayArea,
      title: 'Recreational Play Area',
      tag: 'Active Physical Fitness',
      caption: 'Open grounds and play equipment for healthy motor skills and sportsmanship.',
      alt: 'Al-Jamia outdoor play area and recreational lawn',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

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

            {/* Action Buttons: Apply for Admission & Book a School Visit */}
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

          {/* Right Column: Minimalist Smooth Image Slider */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className="relative aspect-[4/5] sm:h-[480px] w-full rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-900 group select-none"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Sliding Strip */}
                <div
                  className="flex h-full w-full transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {heroSlides.map((slide, idx) => (
                    <div key={slide.id} className="w-full h-full shrink-0 relative bg-slate-950">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-full object-cover object-center"
                        referrerPolicy="no-referrer"
                        loading={idx === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                  ))}
                </div>

                {/* Subtle dark gradient overlay for minimalist readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071324]/90 via-transparent to-black/20 pointer-events-none" />

                {/* Minimalist Top Tag & Counter */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-amber-300 bg-black/45 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    {heroSlides[currentSlide].tag}
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-slate-200 bg-black/45 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10">
                    {String(currentSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
                  </span>
                </div>

                {/* Chevron Navigation Controls */}
                <button
                  type="button"
                  onClick={prevSlide}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Minimalist Bottom Caption & Indicators */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-xl bg-[#071324]/90 backdrop-blur-md border border-white/10 text-white transition-all">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-display font-bold text-sm sm:text-base text-white truncate">
                      {heroSlides[currentSlide].title}
                    </h3>

                    {/* Minimalist Slide Indicator Pills */}
                    <div className="flex items-center gap-1.5 shrink-0 pl-2">
                      {heroSlides.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setCurrentSlide(i)}
                          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                            currentSlide === i
                              ? 'w-5 bg-amber-400'
                              : 'w-1.5 bg-white/40 hover:bg-white/70'
                          }`}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-1 leading-snug">
                    {heroSlides[currentSlide].caption}
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
