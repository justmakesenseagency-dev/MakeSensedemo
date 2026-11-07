import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { SCHOOL_INFO, CLASS_OPTIONS, CALL_TIME_OPTIONS } from '../data/schoolData';
import { MessageCircle, Phone, CheckCircle, AlertCircle, ArrowUpRight, RotateCcw } from 'lucide-react';

export interface EnquirySectionRef {
  setSelectedClass: (className: string) => void;
  scrollIntoView: () => void;
}

interface EnquirySectionProps {
  lang: 'en' | 'hi';
}

export const EnquirySection = forwardRef<EnquirySectionRef, EnquirySectionProps>(({ lang }, ref) => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    targetClass: 'Select class',
    phone: '',
    preferredCallTime: 'Morning (9:00 AM – 12:00 PM)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  useImperativeHandle(ref, () => ({
    setSelectedClass: (className: string) => {
      setFormData((prev) => ({ ...prev, targetClass: className }));
    },
    scrollIntoView: () => {
      const el = document.getElementById('enquiry-form-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },
  }));

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Please enter parent or guardian name';
    }
    if (!formData.childName.trim()) {
      newErrors.childName = 'Please enter child name';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number (e.g. 98XXXXXXXX)';
    }
    if (formData.targetClass === 'Select class') {
      newErrors.targetClass = 'Please select an admission class';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildWhatsAppUrl = (data: typeof formData) => {
    const text = encodeURIComponent(
      `*Admission Enquiry - Al-Jamia International School*\n` +
        `*Campus: 24 Bigha Road, Bahodapur Choraha, Gwalior*\n\n` +
        `• *Parent / Guardian:* ${data.parentName.trim()}\n` +
        `• *Child Name:* ${data.childName.trim()}\n` +
        `• *Target Class:* ${data.targetClass}\n` +
        `• *Phone / WhatsApp:* ${data.phone.trim()}\n` +
        `• *Preferred Call Time:* ${data.preferredCallTime}\n` +
        (data.message.trim() ? `• *Questions / Note:* ${data.message.trim()}\n` : '') +
        `\nAssalamu Alaikum, please guide us regarding admission availability, fee details, and campus visit at Bahodapur Choraha, Gwalior.`
    );
    return `https://wa.me/91${SCHOOL_INFO.phoneRaw}?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const url = buildWhatsAppUrl(formData);
    setSubmittedData({ ...formData });

    // Open WhatsApp in new window safely
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      parentName: '',
      childName: '',
      targetClass: 'Select class',
      phone: '',
      preferredCallTime: 'Morning (9:00 AM – 12:00 PM)',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="enquiry-form-section" className="py-16 md:py-24 bg-[#FDFBF7] relative border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-800 mb-3">
            <span className="w-5 h-[1.5px] bg-amber-500" />
            <span>{lang === 'hi' ? 'प्रवेश पूछताछ डेस्क' : 'Admission Enquiry Desk'}</span>
            <span className="w-5 h-[1.5px] bg-amber-500" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
            {lang === 'hi' ? 'प्रवेश के लिए पूछताछ करें' : 'Start The Conversation.'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mb-1.5">
            Submit your enquiry below. It connects directly with the Al-Jamia admissions desk on WhatsApp.
          </p>
          <p className="text-xs text-emerald-800 font-semibold">
            Campus: 24 Bigha Road, Bahodapur Choraha, Gwalior
          </p>
        </div>

        {/* Enquiry Card Form */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-lg">
          {submittedData ? (
            /* Submission Confirmation Message as strictly specified in brief */
            <div className="py-6 text-center max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-5 border-2 border-emerald-300">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h3 className="font-display font-bold text-2xl text-slate-900 mb-3">
                Enquiry Submitted Successfully!
              </h3>

              {/* Exact text mandated by brief */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 font-semibold text-sm leading-relaxed mb-6">
                “Thank you! Your enquiry has reached the Al Jamia admissions desk. We will contact you shortly on the
                number you shared.”
              </div>

              <div className="space-y-3 mb-8">
                <a
                  href={buildWhatsAppUrl(submittedData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>OPEN CHAT ON WHATSAPP NOW</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-200" />
                </a>

                <a
                  href={SCHOOL_INFO.phoneDial}
                  className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Or Call Admissions Desk: {SCHOOL_INFO.phone}</span>
                </a>
              </div>

              {/* Summary */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-600 font-mono space-y-1 mb-6">
                <div>• Parent: {submittedData.parentName}</div>
                <div>• Child: {submittedData.childName}</div>
                <div>• Target Class: {submittedData.targetClass}</div>
                <div>• Phone: {submittedData.phone}</div>
                <div>• Preferred Call Time: {submittedData.preferredCallTime}</div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 inline-flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Submit Another Admission Enquiry</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Parent Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Parent / Guardian Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.parentName}
                    onChange={(e) => {
                      setFormData({ ...formData, parentName: e.target.value });
                      if (errors.parentName) setErrors({ ...errors, parentName: '' });
                    }}
                    placeholder="e.g. Mohammed Farooq"
                    className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-slate-50/50 focus:bg-white focus:outline-none transition-colors ${
                      errors.parentName
                        ? 'border-rose-400 focus:border-rose-500'
                        : 'border-slate-300 focus:border-emerald-600'
                    }`}
                    required
                  />
                  {errors.parentName && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.parentName}</span>
                    </p>
                  )}
                </div>

                {/* Child Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Child Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.childName}
                    onChange={(e) => {
                      setFormData({ ...formData, childName: e.target.value });
                      if (errors.childName) setErrors({ ...errors, childName: '' });
                    }}
                    placeholder="e.g. Zaid Farooq"
                    className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-slate-50/50 focus:bg-white focus:outline-none transition-colors ${
                      errors.childName
                        ? 'border-rose-400 focus:border-rose-500'
                        : 'border-slate-300 focus:border-emerald-600'
                    }`}
                    required
                  />
                  {errors.childName && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.childName}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Class Dropdown (default: Select class) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Admission Class <span className="text-rose-600">*</span>
                  </label>
                  <select
                    value={formData.targetClass}
                    onChange={(e) => {
                      setFormData({ ...formData, targetClass: e.target.value });
                      if (errors.targetClass) setErrors({ ...errors, targetClass: '' });
                    }}
                    className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-slate-50/50 focus:bg-white focus:outline-none transition-colors ${
                      errors.targetClass
                        ? 'border-rose-400 focus:border-rose-500'
                        : 'border-slate-300 focus:border-emerald-600'
                    }`}
                  >
                    {CLASS_OPTIONS.map((cls) => (
                      <option key={cls} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                  {errors.targetClass && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.targetClass}</span>
                    </p>
                  )}
                </div>

                {/* Phone / WhatsApp (with 98XXXXXXXX placeholder) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Phone / WhatsApp Number <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="98XXXXXXXX"
                    className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-slate-50/50 focus:bg-white focus:outline-none transition-colors ${
                      errors.phone
                        ? 'border-rose-400 focus:border-rose-500'
                        : 'border-slate-300 focus:border-emerald-600'
                    }`}
                    required
                  />
                  {errors.phone && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Preferred Call Time per Brief */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Preferred Call Time
                </label>
                <select
                  value={formData.preferredCallTime}
                  onChange={(e) => setFormData({ ...formData, preferredCallTime: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                >
                  {CALL_TIME_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Query / Note */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Message or Specific Question <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ask about school visit timing, curriculum, or admission documents..."
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] text-white font-bold rounded-xl shadow-md border border-emerald-400/30 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-200" />
                  <span>SUBMIT ENQUIRY VIA WHATSAPP (93010 89001)</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-200" />
                </button>
                <p className="text-[11px] text-slate-500 text-center mt-2">
                  Connects directly to the Al-Jamia admissions desk in Gwalior · No signup required
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
});
