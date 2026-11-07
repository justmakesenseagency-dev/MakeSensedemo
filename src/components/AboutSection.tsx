import React from 'react';
import { ABOUT_COPY, SCHOOL_IMAGES } from '../data/schoolData';
import { Compass, Target, Sparkles, BookOpen } from 'lucide-react';

interface AboutSectionProps {
  lang: 'en' | 'hi';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FDFBF7] relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-800 mb-3">
            <span className="w-5 h-[1.5px] bg-amber-500" />
            <span>{lang === 'hi' ? 'स्कूल का परिचय' : 'About Al-Jamia'}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-5">
            {lang === 'hi' ? 'संस्कार और सफलता का संगम' : 'Values First, Always.'}
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            {lang === 'hi' ? ABOUT_COPY.bodyHindi : ABOUT_COPY.body}
          </p>
        </div>

        {/* Visual & Core Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left: Authentic Campus Garden Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 group">
              <img
                src={SCHOOL_IMAGES.campusGardenArea}
                alt="Al-Jamia planted garden and campus grounds in Gwalior"
                className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071324]/85 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-0.5">
                  Real Campus Grounds · Gwalior
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  Lush, planted green spaces providing a healthy and peaceful learning environment.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Three Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-amber-400 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-1">
                    Concept-Based English Medium Learning
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Building clear conceptual understanding in Mathematics, Science, and English language communication
                    from foundational Nursery through Class 8.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-amber-400 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-1">
                    Daily Qur’an, Sunnah &amp; Akhlaq Guidance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Instilling pure moral discipline, Tajweed recitation, authentic Duas, and Islamic Adab as an integral,
                    reassuring part of the regular school day.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-amber-400 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#071324] text-amber-300 flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-1">
                    Individual Care in Safe Gwalior Campus
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Caring teachers who know every child by name, fostering intellectual curiosity and confidence without
                    pressuring young minds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Mission & Vision Section per Brief */}
        <div className="bg-[#071324] text-white rounded-2xl p-7 sm:p-10 border border-amber-500/30 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">
                INSTITUTIONAL PURPOSE
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Mission &amp; Vision
              </h3>
            </div>
            <span className="text-[11px] text-amber-300 font-semibold bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Nursery to Class 8 · Gwalior
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Target className="w-4 h-4" />
                <span>Our Mission</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                To provide children in Gwalior with a high-standard English-medium education that stimulates intellect,
                creativity, and academic mastery while firmly grounding their hearts in Islamic moral values, Qur’an
                recitation, and ethical responsibility.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Compass className="w-4 h-4" />
                <span>Our Vision</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                To be Gwalior’s most trusted educational institution for parents seeking a balanced future for their
                children — where academic distinction meets strong Imaan, self-discipline, and genuine love for learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
