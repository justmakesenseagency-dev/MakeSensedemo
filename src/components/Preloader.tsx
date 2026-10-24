import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onFinish?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onFinish }) => {
  const [phase, setPhase] = useState<'jamia' | 'international' | 'complete'>('jamia');
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Check if user already saw the preloader in this session for snappy navigation
    const timer1 = setTimeout(() => {
      setPhase('international');
    }, 550);

    const timer2 = setTimeout(() => {
      setPhase('complete');
    }, 1100);

    const timer3 = setTimeout(() => {
      setHidden(true);
      if (onFinish) onFinish();
    }, 1350);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onFinish]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#071324] text-white transition-opacity duration-300 ease-out ${
        phase === 'complete' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading AI Jamia International School"
    >
      {/* Subtle geometric motif */}
      <div className="relative mb-6 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border border-amber-500/30 flex items-center justify-center animate-spin-slow">
          <svg
            className="w-8 h-8 text-amber-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {/* 8-point geometric star */}
            <path d="M12 2L15 8.5L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8.5L12 2Z" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-xl animate-pulse" />
      </div>

      <div className="text-center px-4">
        <div className="overflow-hidden mb-1">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-widest text-white transition-transform duration-500 font-display">
            AI JAMIA
          </h1>
        </div>
        <div className="overflow-hidden">
          <p
            className={`text-xs md:text-sm tracking-[0.25em] text-amber-300 uppercase font-medium transition-all duration-500 ${
              phase === 'international' || phase === 'complete'
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-2'
            }`}
          >
            INTERNATIONAL SCHOOL
          </p>
        </div>
      </div>

      {/* Elegant animated progress line */}
      <div className="w-36 h-[2px] bg-slate-800 rounded-full mt-6 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-500 transition-all duration-1000 ease-out ${
            phase === 'complete' ? 'w-full' : phase === 'international' ? 'w-2/3' : 'w-1/4'
          }`}
        />
      </div>
    </div>
  );
};
