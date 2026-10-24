import React, { useState } from 'react';
import { SCHOOL_IMAGES } from '../data/schoolData';
import { MonitorPlay, Layers, Eye, Sparkles } from 'lucide-react';

export const SmartClassroomSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'interactive' | 'digital' | 'engaging'>('interactive');

  const tabDetails = {
    interactive: {
      title: 'Interactive Learning',
      desc: 'Smart digital screens allow teachers and students to interact with multimedia lessons, diagrams, and problem sets dynamically.',
    },
    digital: {
      title: 'Digital Resources',
      desc: 'Curated audio-visual modules and illustrated presentations that make abstract concepts in Science and Math clear and enjoyable.',
    },
    engaging: {
      title: 'Engaging Classrooms',
      desc: 'Transforming traditional lectures into participatory group sessions where students actively ask questions and demonstrate understanding.',
    },
  };

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-800 mb-3">
            <span className="w-5 h-[1.5px] bg-amber-500" />
            <span>Smart Classes</span>
            <span className="w-5 h-[1.5px] bg-amber-500" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            LEARNING, REIMAGINED.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Smart classrooms bring technology and education together to create a more engaging learning experience.
          </p>
        </div>

        {/* Interactive Feature & Visual Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual with interactive spotlight pins */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-900 group">
              <img
                src={SCHOOL_IMAGES.smartClass}
                alt="Smart Classrooms at AI Jamia International School"
                className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071324]/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Element 1: Interactive Learning */}
              <div className="absolute top-6 left-6 p-2.5 px-3.5 bg-white/95 backdrop-blur-md rounded-lg border border-slate-200 shadow-md flex items-center gap-2">
                <MonitorPlay className="w-4 h-4 text-emerald-700" />
                <span className="text-xs font-bold tracking-wide uppercase text-slate-800">
                  Interactive Learning
                </span>
              </div>

              {/* Floating Element 2: Digital Resources */}
              <div className="absolute bottom-6 left-6 p-2.5 px-3.5 bg-white/95 backdrop-blur-md rounded-lg border border-slate-200 shadow-md flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-bold tracking-wide uppercase text-slate-800">
                  Digital Resources
                </span>
              </div>

              {/* Floating Element 3: Engaging Classrooms */}
              <div className="absolute top-1/2 right-6 p-2.5 px-3.5 bg-[#071324]/90 backdrop-blur-md rounded-lg border border-amber-500/30 text-white shadow-md hidden sm:flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold tracking-wide uppercase text-slate-100">
                  Engaging Classrooms
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {(['interactive', 'digital', 'engaging'] as const).map((key) => {
              const item = tabDetails[key];
              const isSelected = activeTab === key;

              return (
                <div
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`p-6 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-amber-400 shadow-md translate-x-1'
                      : 'bg-white/60 border-slate-200/80 hover:bg-white hover:border-slate-300'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveTab(key);
                    }
                  }}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isSelected ? 'bg-amber-500' : 'bg-slate-300'
                      }`}
                    />
                    <h3 className="font-display font-bold text-lg text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
