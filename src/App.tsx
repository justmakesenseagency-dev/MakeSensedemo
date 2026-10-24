/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { PhilosophySection } from './components/PhilosophySection';
import { AcademicJourney } from './components/AcademicJourney';
import { WhyChooseUs } from './components/WhyChooseUs';
import { SmartClassroomSection } from './components/SmartClassroomSection';
import { IslamicEducationSection } from './components/IslamicEducationSection';
import { SchoolLifeGallery } from './components/SchoolLifeGallery';
import { FacilitiesSection } from './components/FacilitiesSection';
import { StudentPillarsSection } from './components/StudentPillarsSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { EnquirySection, EnquirySectionRef } from './components/EnquirySection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const enquiryRef = useRef<EnquirySectionRef>(null);
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  const handleOpenEnquiry = (targetClass?: string) => {
    if (enquiryRef.current) {
      if (targetClass) {
        enquiryRef.current.setSelectedClass(targetClass);
      }
      enquiryRef.current.scrollIntoView();
    } else {
      const el = document.getElementById('enquiry-form-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-slate-800 font-sans selection:bg-emerald-800 selection:text-amber-200">
      {/* 1. Preloader */}
      <Preloader onFinish={() => setPreloaderFinished(true)} />

      {/* 2. Sticky Navigation */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      <main className="flex-1">
        {/* 3. Hero Section */}
        <HeroSection onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 4. Trust / Quick Highlights Strip */}
        <TrustStrip />

        {/* 5. About the School */}
        <AboutSection />

        {/* 6. Education Philosophy */}
        <PhilosophySection />

        {/* 7. Academic Journey + Interactive Eligibility Tool */}
        <AcademicJourney onSelectClassForEnquiry={(cls) => handleOpenEnquiry(cls)} />

        {/* 8. Why Choose AI Jamia */}
        <WhyChooseUs />

        {/* 9. Smart Classes */}
        <SmartClassroomSection />

        {/* 10. Islamic Education */}
        <IslamicEducationSection />

        {/* 11. School Life Gallery */}
        <SchoolLifeGallery />

        {/* 12. Facilities */}
        <FacilitiesSection onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 13. Student Development Pillars */}
        <StudentPillarsSection />

        {/* 14. Admissions Guidance */}
        <AdmissionsSection onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 15. Parent Admission Enquiry Form */}
        <EnquirySection ref={enquiryRef} />

        {/* 16. FAQ */}
        <FAQSection />

        {/* 17. Final CTA */}
        <FinalCTA onOpenEnquiry={() => handleOpenEnquiry()} />
      </main>

      {/* 18. Footer */}
      <Footer />

      {/* Mobile Sticky Contact Bar (Under 15% Viewport Cap) */}
      <MobileBottomBar onOpenEnquiry={() => handleOpenEnquiry()} />
    </div>
  );
}
