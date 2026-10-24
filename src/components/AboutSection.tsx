import React from 'react';
import { ABOUT_FEATURES, SCHOOL_IMAGES } from '../data/schoolData';
import { Sparkles, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-800 mb-3">
            <span className="w-5 h-[1.5px] bg-amber-500" />
            <span>About The School</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-6">
            EDUCATION WITH PURPOSE.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            At AI Jamia International School, education goes beyond the classroom. We aim to provide children with a
            strong academic foundation while nurturing faith, character, discipline and confidence.
          </p>
        </div>

        {/* Visual & Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Large School Image composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-lg bg-slate-900 group">
              <img
                src={SCHOOL_IMAGES.smartClass}
                alt="AI Jamia International School students engaged in learning"
                className="w-full h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071324]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                  Balanced Development
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Cultivating young minds with both contemporary scientific knowledge and timeless moral compass.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Three Feature Blocks with 01, 02, 03 */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {ABOUT_FEATURES.map((feature) => (
              <div
                key={feature.number}
                className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-amber-400/60 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="font-mono text-2xl sm:text-3xl font-extrabold text-amber-500/80 group-hover:text-amber-500 transition-colors shrink-0">
                    {feature.number}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-2 group-hover:text-emerald-900 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
