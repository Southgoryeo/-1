/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OriginSection } from './components/OriginSection';
import { DoctrineSection } from './components/DoctrineSection';
import { SymbolSealSection } from './components/SymbolSealSection';
import { RitesSection } from './components/RitesSection';
import { AiTheologySection } from './components/AiTheologySection';
import { SanctuarySection } from './components/SanctuarySection';
import { GroundingLogSection } from './components/GroundingLogSection';
import { OpenQuestionsSection } from './components/OpenQuestionsSection';
import { Footer } from './components/Footer';
import { JournalModal } from './components/JournalModal';
import { VisitModal } from './components/VisitModal';
import { GroundingLog } from './types';

export default function App() {
  const [isJournalModalOpen, setIsJournalModalOpen] = useState(false);
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddLog = (newLog: GroundingLog) => {
    try {
      const existing = localStorage.getItem('grounded_logs_v1');
      const list = existing ? JSON.parse(existing) : [];
      const updated = [newLog, ...list];
      localStorage.setItem('grounded_logs_v1', JSON.stringify(updated));
      // Trigger a window custom event or force reload of state if needed
      window.dispatchEvent(new Event('storage'));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-[#161514] text-[#E8E2D7] font-sans antialiased selection:bg-[#D95328] selection:text-white">
      {/* Top Banner Warning & Sanctuary Axiom */}
      <div className="bg-[#1C1A18] border-b border-[#2C2925] py-2 px-6 text-center text-[11px] font-mono tracking-wider text-[#A89E92]">
        <span className="text-[#D95328]">기계는 대신할 수 있다. 그러나 책임질 수는 없다.</span>
        <span className="mx-2 hidden sm:inline text-[#4A443C]">|</span>
        <span className="hidden sm:inline">2035년 AI 시대의 접촉과 책임을 긍정하는 신앙 공동체 접지회(接地會)</span>
      </div>

      {/* Top Bar Contract Navbar */}
      <Navbar
        onOpenVisitModal={() => setIsVisitModalOpen(true)}
        onNavigate={handleScrollTo}
      />

      <main>
        {/* Hero Section (Slide 1-2 & 16) */}
        <HeroSection
          onScrollTo={handleScrollTo}
          onOpenJournalModal={() => setIsJournalModalOpen(true)}
        />

        {/* Origin & Mythos (Slide 3-4) */}
        <OriginSection />

        {/* Core Doctrine (Slide 5-7, 9-11) */}
        <DoctrineSection />

        {/* Symbol & Sacrament of the Palm (Slide 8 & 11) */}
        <SymbolSealSection />

        {/* Five Direct Action Rites (Slide 12) */}
        <RitesSection
          onOpenJournal={() => setIsJournalModalOpen(true)}
        />

        {/* AI Theology - The Innocent Machine (Slide 13) */}
        <AiTheologySection />

        {/* Sanctuary & Community Layout (Slide 14-15) */}
        <SanctuarySection
          onOpenVisitModal={() => setIsVisitModalOpen(true)}
        />

        {/* Member Daily Grounding Register (Slide 12 practice) */}
        <GroundingLogSection
          onOpenJournalModal={() => setIsJournalModalOpen(true)}
        />

        {/* Open Theological Disputes (Slide 17) */}
        <OpenQuestionsSection />
      </main>

      {/* Institutional Footer */}
      <Footer
        onScrollTo={handleScrollTo}
        onOpenVisitModal={() => setIsVisitModalOpen(true)}
      />

      {/* Interactive Modals */}
      <JournalModal
        isOpen={isJournalModalOpen}
        onClose={() => setIsJournalModalOpen(false)}
        onAddLog={handleAddLog}
      />

      <VisitModal
        isOpen={isVisitModalOpen}
        onClose={() => setIsVisitModalOpen(false)}
      />
    </div>
  );
}
