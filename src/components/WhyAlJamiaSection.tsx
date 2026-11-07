import React from 'react';
import { WHY_CHOOSE_CARDS } from '../data/schoolData';
import { MonitorPlay, BookOpen, Languages, Sparkles, Trophy, Heart } from 'lucide-react';

const icons = [MonitorPlay, BookOpen, Languages, Sparkles, Trophy, Heart];

interface WhyAlJamiaSectionProps {
  lang: 'en' | 'hi';
}

export const WhyAlJamiaSection: React.FC<WhyAlJamiaSectionProps> = ({ lang }) => {
  return (
    <section className="py-16 md:py-24 bg-[#FDFBF7] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-800 mb-3">
            <span className="w-5 h-[1.5px] bg-amber-500" />
            <span>{lang === 'hi' ? 'विशेषताएं' : 'Why Al-Jamia'}</span>
            <span className="w-5 h-[1.5px] bg-amber-500" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
            {lang === 'hi' ? 'क्लासरूम से आगे की सोच' : 'More Than A Classroom.'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {lang === 'hi'
              ? 'आधुनिक शिक्षा, दीनी तालीम और चरित्र निर्माण का एक संतुलित वातावरण।'
              : 'Six grounded promises that define daily learning and values at Al-Jamia International School.'}
          </p>
        </div>

        {/* 6 Simple Cards per Audit - No repeated "Core Offering" tags */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_CARDS.map((card, index) => {
            const IconComponent = icons[index] || Sparkles;

            return (
              <div
                key={card.num}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:border-amber-400 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#071324] text-amber-400 flex items-center justify-center border border-amber-500/20 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {card.num}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2 group-hover:text-emerald-900 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {lang === 'hi' ? card.descHindi : card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
