import React, { useState } from 'react';
import {
  ACADEMIC_JOURNEY_STAGES,
  SCHOOL_INFO,
  calculateEligibility,
} from '../data/schoolData';
import { Check, Calculator, Sparkles, ArrowRight } from 'lucide-react';

interface AcademicJourneyProps {
  onSelectClassForEnquiry: (className: string) => void;
}

export const AcademicJourney: React.FC<AcademicJourneyProps> = ({
  onSelectClassForEnquiry,
}) => {
  const [selectedAge, setSelectedAge] = useState<number>(6);
  const eligibility = calculateEligibility(selectedAge);

  return (
    <section id="academics" className="py-20 md:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-800 mb-3">
            <span className="w-5 h-[1.5px] bg-amber-500" />
            <span>Academic Progression</span>
            <span className="w-5 h-[1.5px] bg-amber-500" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            A JOURNEY THAT GROWS WITH THEM.
          </h2>
          <p className="text-base text-slate-600">
            A continuous English-medium academic pathway designed to build confidence, intellect, and moral fortitude at
            every stage of development.
          </p>
        </div>

        {/* Three Large Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ACADEMIC_JOURNEY_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:border-amber-400/80 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl font-extrabold text-amber-500">
                    {stage.step}
                  </span>
                  <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded">
                    {stage.subtitle}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-slate-900 mb-3">
                  {stage.stage}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {stage.description}
                </p>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Curriculum Highlights:
                  </div>
                  <ul className="space-y-2">
                    {stage.focusPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onSelectClassForEnquiry(stage.subtitle.split(',')[0].trim())}
                  className="w-full text-xs font-semibold text-slate-800 hover:text-emerald-800 flex items-center justify-between py-2 group cursor-pointer"
                >
                  <span>Enquire for {stage.stage.split('&')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Span Banner */}
        <div className="bg-white rounded-xl p-5 border border-slate-200/90 flex flex-wrap items-center justify-between gap-4 mb-16 shadow-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
              {SCHOOL_INFO.grades}
            </span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-800">
              {SCHOOL_INFO.medium}
            </span>
          </div>
          <div className="text-xs text-slate-500">
            Structured English-medium instruction accompanied by daily Qur’an &amp; Sunnah learning.
          </div>
        </div>

        {/* Interactive Parent Feature: Age-to-Grade Eligibility Checker */}
        <div className="bg-[#071324] text-white rounded-2xl p-7 sm:p-10 border border-amber-500/30 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
                <Calculator className="w-4 h-4" />
                <span>Interactive Parent Tool</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-3">
                Age &amp; Class Eligibility Checker
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Determine the recommended academic grade for your child at AI Jamia International School based on age.
              </p>

              {/* Age Selector */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                  Select Child's Age: <span className="text-amber-400 font-bold font-mono text-base">{selectedAge} Years</span>
                </label>
                <input
                  type="range"
                  min="3"
                  max="14"
                  value={selectedAge}
                  onChange={(e) => setSelectedAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none"
                  aria-label="Child's age slider"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono">
                  <span>3 Yrs (Nursery)</span>
                  <span>6 Yrs (Class 1)</span>
                  <span>10 Yrs (Class 5)</span>
                  <span>14 Yrs (Class 8)</span>
                </div>
              </div>
            </div>

            {/* Calculated Result Card */}
            <div className="lg:col-span-7 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 flex flex-col justify-between">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/15 mb-4">
                <div>
                  <div className="text-[11px] text-amber-300 uppercase tracking-widest font-semibold">
                    Recommended Admission Grade
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

              <div>
                <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                  Academic &amp; Tarbiyah Focus for {eligibility.grade}:
                </div>
                <div className="grid grid-cols-2 gap-2 mb-6">
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
                onClick={() => onSelectClassForEnquiry(eligibility.grade)}
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] text-white text-xs sm:text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Apply for {eligibility.grade} Admission</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
