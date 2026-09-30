import React, { useState } from 'react';
import { FIVE_RITES } from '../data/groundedData';
import { RiteItem } from '../types';
import { Calendar, MessageSquare, ZapOff, UserCheck, Award, ChevronRight, CheckCircle } from 'lucide-react';

interface RitesSectionProps {
  onOpenJournal: () => void;
}

export const RitesSection: React.FC<RitesSectionProps> = ({ onOpenJournal }) => {
  const [selectedRiteId, setSelectedRiteId] = useState<string>(FIVE_RITES[0].id);

  const selectedRite = FIVE_RITES.find((r) => r.id === selectedRiteId) || FIVE_RITES[0];

  const riteIcons: Record<string, React.ReactNode> = {
    'grounding-daily': <Calendar size={18} className="text-[#D95328]" />,
    'straight-word': <MessageSquare size={18} className="text-[#D95328]" />,
    'blackout-day': <ZapOff size={18} className="text-[#D95328]" />,
    'bearing-confession': <UserCheck size={18} className="text-[#D95328]" />,
    'scar-baptism': <Award size={18} className="text-[#D95328]" />
  };

  return (
    <section id="rites" className="py-24 border-b border-[#2C2925] bg-[#141312]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono text-[#D95328] tracking-widest uppercase">
            PART 3 — 어떻게 사는가 · 의례 체계
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F0E8] font-medium leading-tight">
            다섯 개의 의례는 모두 '직접 하기'다
          </h2>
          <p className="text-sm sm:text-base text-[#9E968A] leading-relaxed">
            말하기도, 실패도, 흉터도 — 기계에 대신 시키지 않습니다.
            접지회 신도들은 일상과 삶의 중대한 국면마다 다섯 가지 신체적 의례를 통해 대지에 발을 딛습니다.
          </p>
        </div>

        {/* 5 Rites Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
          {FIVE_RITES.map((rite, idx) => {
            const isSelected = rite.id === selectedRiteId;
            return (
              <button
                key={rite.id}
                onClick={() => setSelectedRiteId(rite.id)}
                className={`text-left p-5 border transition-all cursor-pointer flex flex-col justify-between h-44 ${
                  isSelected
                    ? 'bg-[#1C1A18] border-[#D95328] shadow-sm'
                    : 'bg-[#181615] border-[#2C2925] hover:border-[#3E3A34]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#8C8479] mb-3">
                    <span>0{idx + 1}</span>
                    <span>{rite.frequency}</span>
                  </div>
                  <div className="text-xl font-serif text-[#F4F0E8] flex items-center gap-2">
                    <span>{rite.korean}</span>
                    <span className="text-xs text-[#8C8479] font-normal">({rite.chinese})</span>
                  </div>
                </div>

                <div className="text-xs text-[#9E968A] line-clamp-2 mt-2 leading-relaxed">
                  {rite.summary}
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured Rite In-Depth Detail View */}
        <div className="bg-[#1A1816] border border-[#2D2A26] p-8 md:p-12 space-y-8">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2C2925] pb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#24211D] border border-[#38332D] flex items-center justify-center">
                {riteIcons[selectedRite.id]}
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#D95328]">
                  <span>{selectedRite.type}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedRite.frequency}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F0E8]">
                  {selectedRite.korean} ({selectedRite.chinese})
                </h3>
              </div>
            </div>

            {selectedRite.id === 'grounding-daily' && (
              <button
                onClick={onOpenJournal}
                className="px-4 py-2 bg-[#D95328] hover:bg-[#C2451C] text-white text-xs font-medium tracking-wide transition-colors cursor-pointer whitespace-nowrap"
              >
                접지록 직접 쓰기
              </button>
            )}
          </div>

          {/* Core Precept */}
          <div className="border-l-2 border-[#D95328] pl-5 py-1">
            <div className="text-xs font-mono text-[#8C8479] uppercase mb-1">
              핵심 계율 (PRECEPT)
            </div>
            <p className="text-lg sm:text-xl font-serif text-[#E06D44]">
              "{selectedRite.precept}"
            </p>
          </div>

          {/* Description */}
          <p className="text-base text-[#C7C0B5] leading-relaxed max-w-3xl font-light">
            {selectedRite.description}
          </p>

          {/* Detailed Guide Checklist */}
          <div className="pt-6 border-t border-[#2C2925] space-y-4">
            <h4 className="text-xs font-mono text-[#8C8479] tracking-wider uppercase">
              실천 수칙 (PRACTICAL CONDUCT)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedRite.detailedGuide.map((guide, gIdx) => (
                <div key={gIdx} className="p-4 bg-[#141312] border border-[#262421] space-y-2">
                  <div className="text-xs font-mono text-[#D95328]">
                    수칙 0{gIdx + 1}
                  </div>
                  <p className="text-xs text-[#B5ADA0] leading-relaxed">
                    {guide}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Epigram */}
        <div className="mt-12 text-center">
          <p className="text-xl sm:text-2xl font-serif text-[#E06D44]">
            "말하기도, 실패도, 흉터도 — 대신 시키지 않는다."
          </p>
        </div>

      </div>
    </section>
  );
};
