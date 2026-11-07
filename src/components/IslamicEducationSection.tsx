import React from 'react';
import { ISLAMIC_CURRICULUM_TABLE, SCHOOL_IMAGES } from '../data/schoolData';
import { BookOpen, CheckCircle, ShieldCheck } from 'lucide-react';

interface IslamicEducationSectionProps {
  lang: 'en' | 'hi';
}

export const IslamicEducationSection: React.FC<IslamicEducationSectionProps> = ({ lang }) => {
  return (
    <section
      id="islamic-education"
      className="py-16 md:py-24 bg-[#071324] text-white relative overflow-hidden bg-islamic-dark-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
          {/* Left Column: Heading & Core Details */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400 mb-3">
              <span className="w-5 h-[1.5px] bg-amber-400" />
              <span>{lang === 'hi' ? 'दीनी तालीम' : 'Islamic Education'}</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight mb-4">
              {lang === 'hi' ? (
                <>
                  ईमान की मज़बूती, <br />
                  <span className="text-amber-300">अच्छे अख़लाक़ का निर्माण।</span>
                </>
              ) : (
                <>
                  Rooted in Faith. <br />
                  <span className="text-amber-300">Prepared for Life.</span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Alongside modern English-medium academics, students receive structured Qur’an recitation, Tajweed, daily
              Duas, Seerah stories, and Tarbiyah, helping them develop strong Imaan and moral integrity.
            </p>

            <div className="space-y-3 mb-6">
              {[
                'Nazira & Qur’an recitation with accurate pronunciation',
                'Tajweed fundamentals taught with patience and care',
                'Essential Masnoon Duas and daily Islamic manners (Adab)',
                'Seerah of Prophet Muhammad (ﷺ) and character lessons (Akhlaq)',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-lg bg-white/5 border border-emerald-500/30 text-xs text-emerald-300/95 font-medium flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Integrated into regular daily timetables from Nursery to Class 8.</span>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="rounded-2xl overflow-hidden border border-amber-400/30 shadow-xl bg-slate-900">
                <img
                  src={SCHOOL_IMAGES.classroomDesks}
                  alt="Al-Jamia classroom and learning environment in Gwalior"
                  className="w-full h-[360px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-[#071324] border-t border-amber-500/20 text-center">
                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                    Authentic Class Environment · Gwalior
                  </div>
                  <p className="text-xs text-slate-300">
                    Dedicated learning space integrating contemporary subjects and daily moral study.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Curriculum Table per Brief Requirements */}
        <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="font-display font-bold text-xl text-white">
                Islamic Syllabus &amp; Curriculum Outline
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Overview of Islamic learning modules across school grade levels
              </p>
            </div>
            <span className="text-[11px] text-emerald-300 bg-emerald-500/15 px-2.5 py-1 rounded border border-emerald-400/30 self-start sm:self-auto font-medium">
              Academic Year 2026–27
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/10 text-amber-400 font-semibold uppercase tracking-wider">
                  <th className="py-3 px-3">Class / Age Group</th>
                  <th className="py-3 px-3">Topics Taught</th>
                  <th className="py-3 px-3">Periods per Week</th>
                  <th className="py-3 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-slate-300">
                {ISLAMIC_CURRICULUM_TABLE.map((row) => (
                  <tr key={row.level} className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-3 font-semibold text-white whitespace-nowrap">
                      {row.level}
                    </td>
                    <td className="py-3.5 px-3">{row.topics}</td>
                    <td className="py-3.5 px-3 font-mono text-emerald-300 whitespace-nowrap">
                      {row.periods}
                    </td>
                    <td className="py-3.5 px-3 text-[11px] text-slate-400 italic">
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
