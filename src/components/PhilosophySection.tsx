import React from 'react';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#071324] text-white relative overflow-hidden bg-islamic-dark-pattern">
      {/* Decorative radial lighting */}
      <div className="absolute inset-0 bg-radial-gradient from-emerald-950/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Subtle geometric star ornament */}
        <div className="inline-flex items-center justify-center mb-8">
          <div className="w-12 h-12 rounded-full border border-amber-400/30 flex items-center justify-center bg-amber-500/10">
            <svg
              className="w-6 h-6 text-amber-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 2L15 8.5L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8.5L12 2Z" />
            </svg>
          </div>
        </div>

        <div className="text-xs font-bold tracking-[0.2em] uppercase text-amber-400 mb-6">
          OUR EDUCATIONAL PHILOSOPHY
        </div>

        {/* Large Statement */}
        <blockquote className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-snug sm:leading-tight mb-8 max-w-4xl mx-auto">
          &ldquo;EDUCATION SHOULD SHAPE <br className="hidden sm:inline" />
          <span className="text-amber-300">BOTH THE MIND</span> AND{' '}
          <span className="text-emerald-400">THE CHARACTER</span>.&rdquo;
        </blockquote>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
          At AI Jamia, modern learning and Islamic values come together to create a balanced educational journey.
        </p>

        {/* Quiet divider */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <div className="w-12 h-[1px] bg-slate-700" />
          <span className="w-2 h-2 rounded-full bg-amber-400/60" />
          <div className="w-12 h-[1px] bg-slate-700" />
        </div>
      </div>
    </section>
  );
};
