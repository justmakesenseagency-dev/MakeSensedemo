import React from 'react';
import { LEADERSHIP_PROFILES } from '../data/schoolData';
import { Award, CheckCircle2 } from 'lucide-react';

interface LeadershipTrustSectionProps {
  lang: 'en' | 'hi';
}

export const LeadershipTrustSection: React.FC<LeadershipTrustSectionProps> = ({ lang }) => {
  return (
    <section className="py-16 md:py-24 bg-[#FDFBF7] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-800 mb-3">
            <span className="w-5 h-[1.5px] bg-amber-500" />
            <span>{lang === 'hi' ? 'नेतृत्व और प्रशासन' : 'Leadership & Trust'}</span>
            <span className="w-5 h-[1.5px] bg-amber-500" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
            {lang === 'hi' ? 'स्कूल का मार्गदर्शक नेतृत्व' : 'School Leadership & Administration'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Guided by dedicated patrons and educational leaders committed to values-based English-medium schooling in Gwalior.
          </p>
        </div>

        {/* Leadership Profiles Grid with Confirmed Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {LEADERSHIP_PROFILES.map((profile) => (
            <div
              key={profile.role}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:border-amber-400 hover:shadow-md transition-all flex flex-col group"
            >
              {/* Leader Photo */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-100">
                <img
                  src={profile.photo}
                  alt={`${profile.name} - ${profile.role}, Al-Jamia International School`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-emerald-800/90 backdrop-blur-xs px-2.5 py-1 rounded shadow-xs">
                    {profile.role}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-300 bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Al-Jamia</span>
                  </div>
                </div>
              </div>

              {/* Leader Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-display font-bold text-xl text-slate-900">
                      {profile.name}
                    </h3>
                    <Award className="w-4 h-4 text-amber-500 shrink-0" />
                  </div>

                  <p className="text-xs font-semibold text-emerald-800 mb-3">
                    {profile.credentials}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {profile.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>Al-Jamia International School</span>
                  <span className="text-emerald-700 font-semibold">Gwalior Campus</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
