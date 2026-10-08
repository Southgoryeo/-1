/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HomeOverviewSection } from './components/HomeOverviewSection';
import { WorldviewSection } from './components/WorldviewSection';
import { OriginSection } from './components/OriginSection';
import { DoctrineSection } from './components/DoctrineSection';
import { SymbolSealSection } from './components/SymbolSealSection';
import { RitesSection } from './components/RitesSection';
import { AiTheologySection } from './components/AiTheologySection';
import { SanctuarySection } from './components/SanctuarySection';
import { GroundingLogSection } from './components/GroundingLogSection';
import { OpenQuestionsSection } from './components/OpenQuestionsSection';
import { FoundersSection } from './components/FoundersSection';
import { Footer } from './components/Footer';
import { JournalModal } from './components/JournalModal';
import { VisitModal } from './components/VisitModal';
import { GroundingLog } from './types';
import { INITIAL_GROUNDING_LOGS } from './data/groundedData';
import { LayoutList, Columns } from 'lucide-react';

const SECTION_TO_TAB: Record<string, string> = {
  ai: 'doctrine',
  journal: 'community',
  dialogue: 'community',
};

const TAB_TO_ANCHOR: Record<string, string> = {
  home: 'hero',
  community: 'journal',
};

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [viewMode, setViewMode] = useState<'paged' | 'all'>('paged');
  const [isJournalModalOpen, setIsJournalModalOpen] = useState(false);
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [logs, setLogs] = useState<GroundingLog[]>(INITIAL_GROUNDING_LOGS);
  const pendingAnchor = useRef<string | null>(null);

  // Load stored logs
  const loadLogs = () => {
    try {
      const saved = localStorage.getItem('grounded_logs_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setLogs([...parsed, ...INITIAL_GROUNDING_LOGS]);
          return;
        }
      }
      setLogs(INITIAL_GROUNDING_LOGS);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadLogs();
    window.addEventListener('storage', loadLogs);
    return () => window.removeEventListener('storage', loadLogs);
  }, []);

  const handleTabChange = (targetId: string) => {
    // Section anchors that live inside a tab rather than being tabs themselves
    const tabId = SECTION_TO_TAB[targetId] ?? targetId;
    setActiveTab(tabId);

    if (viewMode === 'all') {
      const el = document.getElementById(TAB_TO_ANCHOR[targetId] ?? targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    } else if (tabId !== targetId) {
      if (tabId === activeTab) {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // The section only exists once its tab has rendered
        pendingAnchor.current = targetId;
      }
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (!pendingAnchor.current) return;
    document.getElementById(pendingAnchor.current)?.scrollIntoView({ behavior: 'smooth' });
    pendingAnchor.current = null;
  }, [activeTab]);

  const handleAddLog = (newLog: GroundingLog) => {
    try {
      const existing = localStorage.getItem('grounded_logs_v1');
      const list = existing ? JSON.parse(existing) : [];
      const updated = [newLog, ...list];
      localStorage.setItem('grounded_logs_v1', JSON.stringify(updated));
      setLogs(updated);
      window.dispatchEvent(new Event('storage'));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-[#161514] text-[#E8E2D7] font-sans antialiased selection:bg-[#D95328] selection:text-white">
      {/* Top Banner Warning & Sanctuary Axiom */}
      <div className="bg-[#1C1A18] border-b border-[#2C2925] py-2 px-6 flex items-center justify-between text-[11px] font-mono tracking-wider text-[#A89E92]">
        <div className="flex items-center gap-2 truncate">
          <span className="text-[#D95328] font-medium">기계는 대신할 수 있다. 그러나 책임질 수는 없다.</span>
          <span className="hidden sm:inline text-[#4A443C]">|</span>
          <span className="hidden md:inline">2035년 접촉과 책임의 종교 접지회 (接地會)</span>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setViewMode(viewMode === 'paged' ? 'all' : 'paged')}
            className="text-[11px] text-[#8C8479] hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
          >
            {viewMode === 'paged' ? (
              <>
                <LayoutList size={12} />
                <span className="hidden sm:inline">전체 펼쳐보기</span>
              </>
            ) : (
              <>
                <Columns size={12} />
                <span className="hidden sm:inline">챕터별 보기</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Top Bar Contract Navbar */}
      <Navbar
        activeTab={activeTab}
        onOpenVisitModal={() => setIsVisitModalOpen(true)}
        onNavigate={handleTabChange}
      />

      <main className="animate-fadeIn">
        {viewMode === 'all' ? (
          /* Continuous All-in-One Scroll Mode */
          <>
            <HeroSection
              onScrollTo={handleTabChange}
              onOpenJournalModal={() => setIsJournalModalOpen(true)}
            />
            <WorldviewSection />
            <OriginSection />
            <DoctrineSection />
            <SymbolSealSection />
            <RitesSection
              onOpenJournal={() => setIsJournalModalOpen(true)}
            />
            <AiTheologySection />
            <SanctuarySection
              onOpenVisitModal={() => setIsVisitModalOpen(true)}
            />
            <GroundingLogSection
              onOpenJournalModal={() => setIsJournalModalOpen(true)}
            />
            <OpenQuestionsSection />
            <FoundersSection />
          </>
        ) : (
          /* Clean Chapter / Paged Mode (Default: Compact & Paced) */
          <>
            {activeTab === 'home' && (
              <>
                <HeroSection
                  onScrollTo={handleTabChange}
                  onOpenJournalModal={() => setIsJournalModalOpen(true)}
                />
                <HomeOverviewSection
                  onNavigateTab={handleTabChange}
                  onOpenJournalModal={() => setIsJournalModalOpen(true)}
                  onOpenVisitModal={() => setIsVisitModalOpen(true)}
                  recentLogs={logs}
                />
              </>
            )}

            {activeTab === 'worldview' && (
              <div className="pt-4">
                <WorldviewSection />
              </div>
            )}

            {activeTab === 'origin' && (
              <div className="pt-4">
                <OriginSection />
              </div>
            )}

            {activeTab === 'doctrine' && (
              <div className="pt-4 space-y-8">
                <DoctrineSection />
                <AiTheologySection />
              </div>
            )}

            {activeTab === 'rites' && (
              <div className="pt-4 space-y-8">
                <RitesSection
                  onOpenJournal={() => setIsJournalModalOpen(true)}
                />
                <SymbolSealSection />
              </div>
            )}

            {activeTab === 'sanctuary' && (
              <div className="pt-4">
                <SanctuarySection
                  onOpenVisitModal={() => setIsVisitModalOpen(true)}
                />
              </div>
            )}

            {activeTab === 'founders' && (
              <div className="pt-4">
                <FoundersSection />
              </div>
            )}

            {activeTab === 'community' && (
              <div className="pt-4 space-y-8">
                <GroundingLogSection
                  onOpenJournalModal={() => setIsJournalModalOpen(true)}
                />
                <OpenQuestionsSection />
              </div>
            )}
          </>
        )}
      </main>

      {/* Institutional Footer */}
      <Footer
        onScrollTo={handleTabChange}
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
