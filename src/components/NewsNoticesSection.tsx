import React from 'react';
import { Bell, Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface NewsNoticesSectionProps {
  onOpenEnquiry: () => void;
  onOpenCamp: () => void;
  lang: 'en' | 'hi';
}

export const NewsNoticesSection: React.FC<NewsNoticesSectionProps> = ({
  onOpenEnquiry,
  onOpenCamp,
  lang,
}) => {
  const notices = [
    {
      id: 1,
      date: 'Current',
      title: 'Admissions Open for Academic Session (Nursery – Class 8)',
      category: 'Admissions',
      desc: 'Admissions guidance and campus tours are now open at Al-Jamia International School Gwalior. Limited seats per class.',
      actionLabel: 'Apply Now',
      action: onOpenEnquiry,
      isPrimary: true,
    },
    {
      id: 2,
      date: '1 April 2027',
      title: 'Summer Camp 2027: 7 Activities in One Joyful Holiday',
      category: 'Summer Camp',
      desc: 'Martial Arts, Spoken English, Qur’an & Duas Circle, Islamic Calligraphy, Sports, Computer Skills, and Etiquette.',
      actionLabel: 'View Camp Details',
      action: onOpenCamp,
      isPrimary: false,
    },
    {
      id: 3,
      date: 'Ongoing',
      title: 'Campus Visits & Office Consultation Timings',
      category: 'Notice',
      desc: 'Parents are welcome to visit our Gwalior campus from 8:30 AM to 2:30 PM (Mon – Sat) to review classrooms and speak with admissions counselors.',
      actionLabel: 'Book Visit via WhatsApp',
      action: onOpenEnquiry,
      isPrimary: false,
    },
  ];

  return (
    <section id="news" className="py-16 md:py-24 bg-[#FDFBF7] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-800 mb-2">
              <span className="w-5 h-[1.5px] bg-amber-500" />
              <span>{lang === 'hi' ? 'सूचना पट्ट' : 'News & Announcements'}</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              {lang === 'hi' ? 'ताज़ा सूचनाएं और अपडेट' : 'School Notices & Updates'}
            </h2>
          </div>
          <span className="text-xs text-slate-500">
            * Official updates from Al-Jamia International School Administration
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                notice.isPrimary
                  ? 'bg-white border-emerald-600/40 shadow-sm'
                  : 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="px-2.5 py-0.5 rounded font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200/60 text-[10px]">
                    {notice.category}
                  </span>
                  <span className="text-slate-500 font-mono text-[11px] flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-amber-500" />
                    <span>{notice.date}</span>
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-slate-900 mb-2">
                  {notice.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {notice.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={notice.action}
                  className="w-full py-2.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer bg-slate-900 hover:bg-slate-800 text-white"
                >
                  <span>{notice.actionLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
