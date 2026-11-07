/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from 'react';
import { SummerCampBanner } from './components/SummerCampBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { AcademicsSection } from './components/AcademicsSection';
import { WhyAlJamiaSection } from './components/WhyAlJamiaSection';
import { IslamicEducationSection } from './components/IslamicEducationSection';
import { FacilitiesGallerySection } from './components/FacilitiesGallerySection';
import { LeadershipTrustSection } from './components/LeadershipTrustSection';
import { NewsNoticesSection } from './components/NewsNoticesSection';
import { SummerCampSection } from './components/SummerCampSection';
import { EnquirySection, EnquirySectionRef } from './components/EnquirySection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const enquiryRef = useRef<EnquirySectionRef>(null);
  const [isCampModalOpen, setIsCampModalOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'hi'>('en');

  const handleOpenEnquiry = (targetClass?: string) => {
    if (enquiryRef.current) {
      if (targetClass && targetClass !== 'Select class') {
        enquiryRef.current.setSelectedClass(targetClass);
      }
      enquiryRef.current.scrollIntoView();
    } else {
      const el = document.getElementById('enquiry-form-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCamp = () => {
    const el = document.getElementById('summer-camp');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsCampModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-slate-800 font-sans selection:bg-emerald-800 selection:text-amber-200">
      {/* 1. Top Summer Camp Banner per Brief */}
      <SummerCampBanner onOpenCamp={handleOpenCamp} lang={lang} />

      {/* 2. Sticky Navbar with Official Logo, Hyphenated Name & Language Switch */}
      <Navbar
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenCamp={handleOpenCamp}
        lang={lang}
        onToggleLang={(newLang) => setLang(newLang)}
      />

      <main className="flex-1">
        {/* 3. Hero Section with Real Campus Photo */}
        <HeroSection onOpenEnquiry={() => handleOpenEnquiry()} lang={lang} />

        {/* 4. Trust Strip (Nursery – Class 8 · English Medium · Gwalior · Modern & Islamic) */}
        <TrustStrip />

        {/* 5. About Section & Mission/Vision */}
        <AboutSection lang={lang} />

        {/* 6. Academics Section with 3 Stage Cards & Eligibility Calculator */}
        <AcademicsSection onOpenEnquiry={(cls) => handleOpenEnquiry(cls)} lang={lang} />

        {/* 7. Why Al-Jamia (6 simple cards) */}
        <WhyAlJamiaSection lang={lang} />

        {/* 8. Islamic Education Section with Curriculum Table & Real Photo */}
        <IslamicEducationSection lang={lang} />

        {/* 9. Facilities & Real Campus Gallery (Consolidated Section) */}
        <FacilitiesGallerySection lang={lang} />

        {/* 10. Leadership & Trust Profiles (Owner, MD, Principal with Confirmed Photos) */}
        <LeadershipTrustSection lang={lang} />

        {/* 11. School Notices & News Section */}
        <NewsNoticesSection
          onOpenEnquiry={() => handleOpenEnquiry()}
          onOpenCamp={handleOpenCamp}
          lang={lang}
        />

        {/* 12. Summer Camp 2027 (Coming Soon - 1 April with 7 Activities & WhatsApp Form) */}
        <SummerCampSection
          isModalOpen={isCampModalOpen}
          onCloseModal={() => setIsCampModalOpen(false)}
          onOpenModal={() => setIsCampModalOpen(true)}
          lang={lang}
        />

        {/* 13. Admission Enquiry Desk with Exact Confirmation Text & Direct WhatsApp */}
        <EnquirySection ref={enquiryRef} lang={lang} />

        {/* 14. Ten Parent Questions & Factual Answers per Brief */}
        <FAQSection lang={lang} />
      </main>

      {/* 15. Comprehensive Footer with Gwalior Location, Directions & Privacy Policy */}
      <Footer onOpenEnquiry={() => handleOpenEnquiry()} lang={lang} />

      {/* 16. Slim Mobile Bottom Bar (Auto-hides when admission form is in view) */}
      <MobileBottomBar onOpenEnquiry={() => handleOpenEnquiry()} lang={lang} />
    </div>
  );
}
