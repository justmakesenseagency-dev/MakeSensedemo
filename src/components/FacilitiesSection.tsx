import React from 'react';
import { FACILITIES } from '../data/schoolData';
import { ArrowUpRight } from 'lucide-react';

interface FacilitiesSectionProps {
  onOpenEnquiry: () => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="facilities" className="py-20 md:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-800 mb-3">
              <span className="w-5 h-[1.5px] bg-amber-500" />
              <span>Campus Facilities</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
              DESIGNED FOR ENGAGEMENT &amp; SAFETY.
            </h2>
          </div>
          <button
            type="button"
            onClick={onOpenEnquiry}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 hover:text-emerald-900 group"
          >
            <span>Enquire About Campus Admissions</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Facilities 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FACILITIES.map((facility) => (
            <div
              key={facility.title}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-slate-900 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md shadow-xs">
                    {facility.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-2 group-hover:text-emerald-900 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>AI Jamia International School</span>
                  <span className="text-emerald-800">English Medium Campus</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
