import React, { useState } from 'react';
import { SUMMER_CAMP_ACTIVITIES, SCHOOL_INFO } from '../data/schoolData';
import {
  Sparkles,
  Shield,
  MessageCircle,
  BookOpen,
  Palette,
  Trophy,
  Laptop,
  HeartHandshake,
  ArrowRight,
  Check,
  CheckCircle2,
  X,
  AlertCircle,
} from 'lucide-react';

const activityIcons: Record<string, React.FC<{ className?: string }>> = {
  'martial-arts': Shield,
  'spoken-english': MessageCircle,
  'quran-duas': BookOpen,
  'calligraphy-art': Palette,
  'sports-outdoor': Trophy,
  'computer-smart': Laptop,
  'life-skills': HeartHandshake,
};

interface SummerCampSectionProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
  onOpenModal: () => void;
  lang: 'en' | 'hi';
}

export const SummerCampSection: React.FC<SummerCampSectionProps> = ({
  isModalOpen,
  onCloseModal,
  onOpenModal,
  lang,
}) => {
  const [campForm, setCampForm] = useState({
    parentName: '',
    childName: '',
    age: '',
    currentClass: 'Class 2',
    phone: '',
    selectedActivities: ['martial-arts', 'quran-duas', 'spoken-english'],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<typeof campForm | null>(null);

  const toggleActivity = (id: string) => {
    setCampForm((prev) => {
      const exists = prev.selectedActivities.includes(id);
      return {
        ...prev,
        selectedActivities: exists
          ? prev.selectedActivities.filter((a) => a !== id)
          : [...prev.selectedActivities, id],
      };
    });
  };

  const handleCampSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!campForm.parentName.trim()) newErrors.parentName = 'Parent name is required';
    if (!campForm.childName.trim()) newErrors.childName = 'Child name is required';
    if (!campForm.age.trim()) newErrors.age = 'Age is required';
    const cleanPhone = campForm.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) newErrors.phone = 'Valid 10-digit mobile number required';
    if (campForm.selectedActivities.length === 0) newErrors.activities = 'Select at least one activity';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const activityNames = campForm.selectedActivities
      .map((id) => SUMMER_CAMP_ACTIVITIES.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const text = encodeURIComponent(
      `*Summer Camp 2027 Registration - Al-Jamia International School*\n\n` +
        `• *Parent Name:* ${campForm.parentName.trim()}\n` +
        `• *Child Name:* ${campForm.childName.trim()}\n` +
        `• *Age:* ${campForm.age.trim()} years\n` +
        `• *Class:* ${campForm.currentClass}\n` +
        `• *WhatsApp Phone:* ${campForm.phone.trim()}\n` +
        `• *Preferred Activities:* ${activityNames}\n\n` +
        `Assalamu Alaikum, please confirm seat availability and fees for Summer Camp 2027 starting 1 April.`
    );

    setSubmittedData({ ...campForm });
    window.location.href = `https://wa.me/91${SCHOOL_INFO.phoneRaw}?text=${text}`;
  };

  return (
    <section id="summer-camp" className="py-16 md:py-24 bg-[#071324] text-white relative overflow-hidden bg-islamic-dark-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400 mb-3 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMING SOON · 1 APRIL 2027</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Summer Camp 2027 · 1 April
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6 font-light">
            Seven exciting activities in one joyful holiday. Learn new skills, make friends and stay active, with the care
            of Al Jamia values.
          </p>

          <button
            type="button"
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <span>Register for Summer Camp</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 7 Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {SUMMER_CAMP_ACTIVITIES.map((act) => {
            const IconComp = activityIcons[act.id] || Sparkles;

            return (
              <div
                key={act.id}
                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 hover:bg-white/10 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-300 flex items-center justify-center mb-4 border border-amber-400/20">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-white mb-1.5">
                    {act.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {act.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Plus 8th Card: Open for all schools */}
          <div className="p-5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-4 border border-emerald-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-white mb-1.5">
                Open for All School Children
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Open to students of all schools across Gwalior. Daily healthy environment with certified care.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white/5 border border-emerald-500/20 text-center max-w-2xl mx-auto text-xs text-slate-300">
          Registrations now open for students across Gwalior. Limited batch sizes with personalized supervision.
        </div>
      </div>

      {/* Summer Camp Application Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-lg w-full bg-[#071324] text-white rounded-2xl p-6 sm:p-8 border border-amber-500/40 shadow-2xl my-8">
            <button
              type="button"
              onClick={onCloseModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
              aria-label="Close Summer Camp modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submittedData ? (
              <div className="py-6 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  Registration Sent to Admissions WhatsApp!
                </h3>
                <p className="text-xs text-slate-300 mb-6">
                  Thank you! Your registration for <strong>{submittedData.childName}</strong> has been forwarded directly
                  to the Al-Jamia admissions desk at 93010 89001.
                </p>
                <button
                  type="button"
                  onClick={onCloseModal}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleCampSubmit} className="space-y-4">
                <div className="text-left mb-4">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                    Summer Camp 2027 Registration
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">
                    Register Your Child
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Select your preferred activities. Submitting will open WhatsApp directly with all details filled.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Parent Name *
                    </label>
                    <input
                      type="text"
                      value={campForm.parentName}
                      onChange={(e) => setCampForm({ ...campForm, parentName: e.target.value })}
                      placeholder="e.g. Farooq Khan"
                      className="w-full px-3 py-2 text-xs rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                    />
                    {errors.parentName && <p className="text-[10px] text-rose-400 mt-0.5">{errors.parentName}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Child Name *
                    </label>
                    <input
                      type="text"
                      value={campForm.childName}
                      onChange={(e) => setCampForm({ ...campForm, childName: e.target.value })}
                      placeholder="e.g. Zaid Khan"
                      className="w-full px-3 py-2 text-xs rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                    />
                    {errors.childName && <p className="text-[10px] text-rose-400 mt-0.5">{errors.childName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Child Age *
                    </label>
                    <input
                      type="number"
                      min="3"
                      max="15"
                      value={campForm.age}
                      onChange={(e) => setCampForm({ ...campForm, age: e.target.value })}
                      placeholder="e.g. 8"
                      className="w-full px-3 py-2 text-xs rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                    />
                    {errors.age && <p className="text-[10px] text-rose-400 mt-0.5">{errors.age}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Current Class
                    </label>
                    <input
                      type="text"
                      value={campForm.currentClass}
                      onChange={(e) => setCampForm({ ...campForm, currentClass: e.target.value })}
                      placeholder="e.g. Class 2"
                      className="w-full px-3 py-2 text-xs rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={campForm.phone}
                    onChange={(e) => setCampForm({ ...campForm, phone: e.target.value })}
                    placeholder="98XXXXXXXX"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                  />
                  {errors.phone && <p className="text-[10px] text-rose-400 mt-0.5">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Preferred Activities (Multi-select) *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {SUMMER_CAMP_ACTIVITIES.map((act) => {
                      const isChecked = campForm.selectedActivities.includes(act.id);
                      return (
                        <label
                          key={act.id}
                          className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${
                            isChecked
                              ? 'bg-emerald-950/80 border-emerald-500/80 text-white'
                              : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleActivity(act.id)}
                            className="rounded border-slate-600 text-emerald-600 focus:ring-0"
                          />
                          <span className="truncate">{act.name}</span>
                        </label>
                      );
                    })}
                  </div>
                  {errors.activities && (
                    <p className="text-[10px] text-rose-400 mt-1">{errors.activities}</p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-200" />
                    <span>Apply on WhatsApp</span>
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-2">
                    Open for children from all schools · Gwalior
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
