import React from 'react';
import { STUDENT_PILLARS } from '../data/schoolData';
import { BookOpen, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';

const iconList = [BookOpen, ShieldCheck, HeartHandshake, Compass];

export const StudentPillarsSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#071324] text-white relative overflow-hidden bg-islamic-dark-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Center Editorial Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400 mb-4">
            <span className="w-5 h-[1.5px] bg-amber-400" />
            <span>FOUR CORE PILLARS</span>
            <span className="w-5 h-[1.5px] bg-amber-400" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            HELPING YOUNG MINDS <br />
            <span className="text-amber-300">GROW WITH PURPOSE.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            A balanced architecture of personal growth ensuring academic achievement is anchored in strong moral character.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDENT_PILLARS.map((pillar, index) => {
            const Icon = iconList[index] || BookOpen;

            return (
              <div
                key={pillar.name}
                className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 hover:bg-white/10 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-500">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 mb-1">
                    {pillar.role}
                  </div>

                  <h3 className="font-display font-bold text-2xl text-white mb-3">
                    {pillar.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                    Core Foundation
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
