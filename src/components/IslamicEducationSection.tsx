import React from 'react';
import { SCHOOL_IMAGES } from '../data/schoolData';
import { BookOpen, Heart, Shield, CheckCircle } from 'lucide-react';

export const IslamicEducationSection: React.FC = () => {
  return (
    <section
      id="islamic-education"
      className="py-24 md:py-32 bg-[#071324] text-white relative overflow-hidden bg-islamic-dark-pattern"
    >
      {/* Decorative ambient light */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading, Copy, & Core Pillars */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400 mb-4">
              <span className="w-5 h-[1.5px] bg-amber-400" />
              <span>ISLAMIC EDUCATION</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
              ROOTED IN FAITH. <br />
              <span className="text-amber-300">PREPARED FOR LIFE.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Alongside modern education, students are introduced to Qur’an and Sunnah learning, helping them develop a
              strong foundation of faith, values and character.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-4 mb-8">
              {[
                {
                  title: 'Qur’an & Tajweed Instruction',
                  desc: 'Structured recitation practice with accurate pronunciation and love for Allah’s words.',
                },
                {
                  title: 'Sunnah & Daily Adab',
                  desc: 'Practical etiquette, truthfulness, kindness to family and peers, and essential daily Duas.',
                },
                {
                  title: 'Character Development (Tarbiyah)',
                  desc: 'Instilling sincere humility, moral courage, empathy, and positive habits from an early age.',
                },
                {
                  title: 'Strong Imaan & Identity',
                  desc: 'Equipping young minds with firm self-worth, spiritual clarity, and moral resilience.',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3.5 p-3.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-white mb-0.5">{item.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-3 text-xs text-amber-200/90 font-medium tracking-wide">
              <span>English Medium Instruction</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Islamic Core Morals</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Nursery to Class 8</span>
            </div>
          </div>

          {/* Right Column: Arched Islamic Architectural Visual Frame */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Islamic Arch Shaped Frame with Gold Border */}
              <div className="relative rounded-t-full rounded-b-2xl overflow-hidden border-2 border-amber-400/40 shadow-2xl bg-slate-900 group">
                <img
                  src={SCHOOL_IMAGES.islamicStudy}
                  alt="Islamic education and library study corner at AI Jamia International School"
                  className="w-full h-[460px] sm:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071324] via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#071324]/90 backdrop-blur-md border border-amber-500/30 text-white text-center">
                  <div className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-1">
                    Tarbiyah &amp; Knowledge
                  </div>
                  <p className="text-xs text-slate-300">
                    Nurturing hearts with the light of the Qur’an while building sharp, analytical minds.
                  </p>
                </div>
              </div>

              {/* Decorative Corner Stars */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                <span className="text-xs">✦</span>
              </div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                <span className="text-xs">✦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
