import React from 'react';
import { WHY_CHOOSE_CARDS } from '../data/schoolData';
import {
  MonitorPlay,
  BookOpen,
  Trophy,
  Sparkles,
  Languages,
  Compass,
} from 'lucide-react';

const iconMap = {
  MonitorPlay: MonitorPlay,
  BookOpen: BookOpen,
  Trophy: Trophy,
  Sparkles: Sparkles,
  Languages: Languages,
  Compass: Compass,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-800 mb-3">
            <span className="w-5 h-[1.5px] bg-amber-500" />
            <span>Why Choose AI Jamia</span>
            <span className="w-5 h-[1.5px] bg-amber-500" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            MORE THAN A CLASSROOM.
          </h2>
          <p className="text-base text-slate-600">
            A purposeful ecosystem where academic excellence, Islamic upbringing, and vibrant student life work in complete
            harmony.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_CARDS.map((card) => {
            const IconComponent = iconMap[card.icon as keyof typeof iconMap] || Sparkles;

            return (
              <div
                key={card.num}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:border-amber-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#071324] text-amber-400 flex items-center justify-center border border-amber-500/20 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 tracking-wider">
                      {card.num}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-900 mb-2.5 group-hover:text-emerald-900 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Core Offering
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
