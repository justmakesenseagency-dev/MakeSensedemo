import React, { useState } from 'react';
import { ACADEMIC_STAGES, SCHOOL_INFO, calculateEligibility } from '../data/schoolData';
import { Check, ArrowRight, Calculator } from 'lucide-react';

interface AcademicsSectionProps {
  onOpenEnquiry: (targetClass?: string) => void;
  lang: 'en' | 'hi';
}

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({ onOpenEnquiry, lang }) => {
  const [selectedAge, setSelectedAge] = useState<number>(6);
  const eligibility = calculateEligibility(selectedAge);

  return (
    <section id="academics" className="py-16 md:py-24 bg-[#F8FAFC] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-800 mb-3">
            <span className="w-5 h-[1.5px] bg-amber-500" />
            <span>{lang === 'hi' ? 'शैक्षणिक यात्रा' : 'Academics at Al-Jamia'}</span>
            <span className="w-5 h-[1.5px] bg-amber-500" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            {lang === 'hi'
              ? 'नर्सरी से कक्षा 8: निरंतर विकास की राह'
              : 'Nursery to Class 8: A Clear Academic Pathway'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A cohesive English-medium academic journey designed to build strong literacy, numerical reasoning, scientific
            curiosity, and daily Islamic etiquette.
          </p>
        </div>

        {/* 3 Stage Cards - Complete text, single font, no clipped phrases per brief */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {ACADEMIC_STAGES.map((stage) => (
            <div
              key={stage.stage}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display font-extrabold text-xl text-emerald-900">
                    {stage.stage}
                  </span>
                  <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                    {stage.ageNote}
                  </span>
                </div>

                <div className="text-sm font-bold text-slate-800 mb-3">
                  {stage.title}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {stage.description}
                </p>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                    Curriculum Highlights:
                  </div>
                  <ul className="space-y-2.5">
                    {stage.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry(stage.stage.split('–')[0].trim())}
                  className="w-full py-2.5 px-4 bg-[#071324] hover:bg-[#0c2242] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply for {stage.stage}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Single Action Button per audit */}
        <div className="text-center mb-16">
          <button
            type="button"
            onClick={() => onOpenEnquiry('Class 1')}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm rounded-xl shadow-sm transition-all cursor-pointer"
          >
            <span>Apply for Nursery – Class 8</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </button>
        </div>

        {/* Interactive Parent Tool: Age Eligibility Checker */}
        <div className="bg-[#071324] text-white rounded-2xl p-7 sm:p-10 border border-amber-500/30 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
                <Calculator className="w-4 h-4" />
                <span>Admission Eligibility Calculator</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-2">
                Check Recommended Grade by Age
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Slide to select your child’s current age to view the recommended entry class and curriculum priorities at
                Al-Jamia International School.
              </p>

              {/* Slider */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                  Child's Age: <span className="text-amber-400 font-bold font-mono text-base">{selectedAge} Years</span>
                </label>
                <input
                  type="range"
                  min="3"
                  max="14"
                  value={selectedAge}
                  onChange={(e) => setSelectedAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  aria-label="Child's age slider"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono">
                  <span>3 Yrs (Nursery)</span>
                  <span>5.5–6 Yrs (Class 1)</span>
                  <span>10 Yrs (Class 5)</span>
                  <span>14 Yrs (Class 8)</span>
                </div>
              </div>
            </div>

            {/* Result Box */}
            <div className="lg:col-span-7 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/15 flex flex-col justify-between">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/15 mb-4">
                <div>
                  <div className="text-[11px] text-amber-300 uppercase tracking-widest font-semibold">
                    Recommended Entry Class
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    {eligibility.grade}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-slate-400 uppercase tracking-widest font-medium">
                    Age Group
                  </div>
                  <div className="text-sm font-semibold text-emerald-300 font-mono">
                    {eligibility.recommendedAge}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                  Key Focus for {eligibility.grade}:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {eligibility.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-1.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenEnquiry(eligibility.grade)}
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] text-white text-xs sm:text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Enquire for {eligibility.grade} Admission</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
