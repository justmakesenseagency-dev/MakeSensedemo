import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { SCHOOL_INFO, CLASS_OPTIONS } from '../data/schoolData';
import { MessageCircle, Phone, CheckCircle, AlertCircle, ArrowUpRight, RotateCcw } from 'lucide-react';

export interface EnquirySectionRef {
  setSelectedClass: (className: string) => void;
  scrollIntoView: () => void;
}

export const EnquirySection = forwardRef<EnquirySectionRef>((_, ref) => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    targetClass: 'Class 1',
    phone: '',
    email: '',
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
    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Please enter student name';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Construct structured WhatsApp URL
  const buildWhatsAppUrl = (data: typeof formData) => {
    const text = encodeURIComponent(
      `*Admission Enquiry - AI Jamia International School*\n\n` +
        `• *Student Name:* ${data.studentName.trim()}\n` +
        `• *Target Class:* ${data.targetClass}\n` +
        `• *Parent / Guardian:* ${data.parentName.trim()}\n` +
        `• *Contact Phone:* ${data.phone.trim()}\n` +
        (data.email.trim() ? `• *Email:* ${data.email.trim()}\n` : '') +
        (data.message.trim() ? `• *Note / Query:* ${data.message.trim()}\n` : '') +
        `\nAssalamu Alaikum, please guide us on the admission process and requirements.`
    );
    return `https://wa.me/91${SCHOOL_INFO.whatsapp}?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const url = buildWhatsAppUrl(formData);
    setSubmittedData({ ...formData });

    // Direct redirection to WhatsApp
    window.location.href = url;
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      parentName: '',
      studentName: '',
      targetClass: 'Class 1',
      phone: '',
      email: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="enquiry-form-section" className="py-20 md:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-800 mb-3">
            <span className="w-5 h-[1.5px] bg-amber-500" />
            <span>Admissions Desk</span>
            <span className="w-5 h-[1.5px] bg-amber-500" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            START THE CONVERSATION.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Submit your enquiry below to connect directly with the AI Jamia Admissions Desk on WhatsApp. No complicated
            portal or login required.
          </p>
        </div>

        {/* Enquiry Card Form */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-lg">
          {submittedData ? (
            /* Direct WhatsApp confirmation & re-trigger view */
            <div className="py-6 text-center max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-5 border-2 border-emerald-300">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">
                Redirecting to WhatsApp...
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Your admission enquiry for <strong className="text-slate-900">{submittedData.studentName}</strong> (
                {submittedData.targetClass}) has been compiled. If WhatsApp did not open automatically, tap the button
                below:
              </p>

              {/* Direct Tap Link */}
              <div className="space-y-3 mb-8">
                <a
                  href={buildWhatsAppUrl(submittedData)}
                  className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>OPEN IN WHATSAPP NOW</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-200" />
                </a>

                <a
                  href={SCHOOL_INFO.phoneDial}
                  className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Call School Desk: {SCHOOL_INFO.phone}</span>
                </a>
              </div>

              {/* Summary Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-600 font-mono space-y-1 mb-6">
                <div>• Student: {submittedData.studentName}</div>
                <div>• Class: {submittedData.targetClass}</div>
                <div>• Parent: {submittedData.parentName}</div>
                <div>• Phone: {submittedData.phone}</div>
                {submittedData.email && <div>• Email: {submittedData.email}</div>}
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
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Parent Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
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
                    className={`w-full px-4 py-3 text-sm rounded-lg border bg-slate-50/50 focus:bg-white focus:outline-none transition-colors ${
                      errors.parentName
                        ? 'border-rose-400 focus:border-rose-500'
                        : 'border-slate-300 focus:border-emerald-600'
                    }`}
                    required
                  />
                  {errors.parentName && (
                    <p className="text-xs text-rose-600 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.parentName}</span>
                    </p>
                  )}
                </div>

                {/* Student Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Student Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.studentName}
                    onChange={(e) => {
                      setFormData({ ...formData, studentName: e.target.value });
                      if (errors.studentName) setErrors({ ...errors, studentName: '' });
                    }}
                    placeholder="e.g. Zaid Farooq"
                    className={`w-full px-4 py-3 text-sm rounded-lg border bg-slate-50/50 focus:bg-white focus:outline-none transition-colors ${
                      errors.studentName
                        ? 'border-rose-400 focus:border-rose-500'
                        : 'border-slate-300 focus:border-emerald-600'
                    }`}
                    required
                  />
                  {errors.studentName && (
                    <p className="text-xs text-rose-600 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.studentName}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Class Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Admission Class <span className="text-rose-600">*</span>
                  </label>
                  <select
                    value={formData.targetClass}
                    onChange={(e) => setFormData({ ...formData, targetClass: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-lg border border-slate-300 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                  >
                    {CLASS_OPTIONS.map((cls) => (
                      <option key={cls} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                  <p className="text-[11px] text-slate-500 mt-1">Available from Nursery to Class 8</p>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Phone Number <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="e.g. 9301089001"
                    className={`w-full px-4 py-3 text-sm rounded-lg border bg-slate-50/50 focus:bg-white focus:outline-none transition-colors ${
                      errors.phone
                        ? 'border-rose-400 focus:border-rose-500'
                        : 'border-slate-300 focus:border-emerald-600'
                    }`}
                    required
                  />
                  {errors.phone && (
                    <p className="text-xs text-rose-600 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Email Field (Optional) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  placeholder="parent@example.com"
                  className={`w-full px-4 py-3 text-sm rounded-lg border bg-slate-50/50 focus:bg-white focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-rose-400 focus:border-rose-500'
                      : 'border-slate-300 focus:border-emerald-600'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-rose-600 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Message or Specific Questions <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ask about school timings, smart classroom methods, Islamic studies, or campus visit..."
                  className="w-full px-4 py-3 text-sm rounded-lg border border-slate-300 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] text-white font-bold rounded-xl shadow-md border border-emerald-400/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer text-sm sm:text-base group"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span className="tracking-wide">SEND ENQUIRY VIA WHATSAPP (9301089001)</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-200 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <p className="text-[11px] text-slate-500 text-center mt-2.5">
                  Direct connection to school admissions on WhatsApp · Zero signup or portal required
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
});
