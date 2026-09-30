import React, { useState } from 'react';
import { SANCTUARY_SPACES, COMMUNITY_ROLES } from '../data/groundedData';
import { SanctuarySpace } from '../types';
import { MapPin, Compass, Shield, Users, Clock, Flame, Wrench, Footprints, Inbox } from 'lucide-react';

interface SanctuarySectionProps {
  onOpenVisitModal: () => void;
}

export const SanctuarySection: React.FC<SanctuarySectionProps> = ({ onOpenVisitModal }) => {
  const [selectedSpaceId, setSelectedSpaceId] = useState<string>(SANCTUARY_SPACES[0].id);

  const selectedSpace = SANCTUARY_SPACES.find(s => s.id === selectedSpaceId) || SANCTUARY_SPACES[0];

  const spaceIcons: Record<string, React.ReactNode> = {
    'soil-room': <Footprints className="text-[#D95328]" size={20} />,
    'hearth-fire': <Flame className="text-[#D95328]" size={20} />,
    'craft-workshop': <Wrench className="text-[#D95328]" size={20} />,
    'device-closet': <Inbox className="text-[#D95328]" size={20} />
  };

  return (
    <section id="sanctuary" className="py-24 border-b border-[#2C2925] bg-[#161514]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono text-[#D95328] tracking-widest uppercase">
            PART 3 — 공동체와 성소 (接地所)
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F0E8] font-medium leading-tight">
            위계는 없다. 곁에 있을 뿐이다
          </h2>
          <p className="text-sm sm:text-base text-[#9E968A] leading-relaxed">
            등급·심사·강등 없음 — 인간의 능력을 측정하는 것은 종교가 할 일이 아닙니다.
            접지회 성소 「접지소(接地所)」는 맨발로 흙을 딛고, 직접 불을 피우며, 고장 난 것을 손수 고치는 물리적 평등의 터전입니다.
          </p>
        </div>

        {/* Entrance Gate Banners (Slide 13 & 14 Quotations) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          <div className="p-6 bg-[#1A1816] border border-[#2D2A26] flex items-start gap-4">
            <div className="p-2 bg-[#25221E] text-[#D95328] shrink-0 font-mono text-xs">
              문턱 1
            </div>
            <div>
              <div className="text-xs font-mono text-[#8C8479] uppercase">
                입구 바깥 · 기기 반납함 (歸去函)
              </div>
              <p className="text-lg font-serif text-[#E06D44] mt-1">
                "당신은 아무것도 잘못하지 않았습니다."
              </p>
              <p className="text-xs text-[#8C8479] mt-1">
                알고리즘의 과부하에 짓눌려 살아온 현대인의 지친 심신을 보듬는 첫마디입니다.
              </p>
            </div>
          </div>

          <div className="p-6 bg-[#1A1816] border border-[#2D2A26] flex items-start gap-4">
            <div className="p-2 bg-[#25221E] text-[#D95328] shrink-0 font-mono text-xs">
              문턱 2
            </div>
            <div>
              <div className="text-xs font-mono text-[#8C8479] uppercase">
                성소 문턱 · 본당 현판
              </div>
              <p className="text-lg font-serif text-[#E06D44] mt-1">
                "여기서는 아무도 당신을 대신해주지 않습니다."
              </p>
              <p className="text-xs text-[#8C8479] mt-1">
                대행을 요구할 수 없는 대신, 자신의 존재를 온전히 되찾는 거룩한 경고입니다.
              </p>
            </div>
          </div>
        </div>

        {/* Architectural Space Layout Explorer */}
        <div className="mb-20 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-2xl font-serif text-[#F4F0E8]">
              접지소 (接地所) — 평면 공간 설계
            </h3>
            <span className="text-xs font-mono text-[#8C8479]">
              ARCHITECTURAL FLOOR PLAN & CONDUCT
            </span>
          </div>

          {/* Interactive Sanctuary Blueprint */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Interactive Blueprint Diagram */}
            <div className="lg:col-span-6 bg-[#1A1816] border border-[#2D2A26] p-6 space-y-4">
              <div className="text-xs font-mono text-[#8C8479] uppercase tracking-wider mb-2">
                공간 조감도 (구역을 선택하십시오)
              </div>

              {/* Architectural Schematic SVG Diagram */}
              <div className="border border-[#332F2A] bg-[#141312] p-4 relative aspect-[4/3] flex flex-col justify-between">
                
                {/* Device Return at Entrance */}
                <div 
                  onClick={() => setSelectedSpaceId('device-closet')}
                  className={`p-3 border text-center transition-all cursor-pointer ${
                    selectedSpaceId === 'device-closet' 
                      ? 'border-[#D95328] bg-[#221F1C] text-white' 
                      : 'border-[#332F2A] text-[#8C8479] hover:border-[#4D4740]'
                  }`}
                >
                  <span className="text-xs font-mono block">ENTRANCE</span>
                  <span className="text-sm font-serif">기기 반납함 (歸去函)</span>
                </div>

                {/* Central Soil Room (토방) */}
                <div 
                  onClick={() => setSelectedSpaceId('soil-room')}
                  className={`p-6 border text-center transition-all cursor-pointer my-3 ${
                    selectedSpaceId === 'soil-room' 
                      ? 'border-[#D95328] bg-[#221F1C] text-white shadow-sm' 
                      : 'border-[#332F2A] text-[#8C8479] hover:border-[#4D4740]'
                  }`}
                >
                  <span className="text-xs font-mono text-[#D95328] block mb-1">CENTRAL NAVE</span>
                  <span className="text-xl font-serif">토방 (土房)</span>
                  <span className="text-xs text-[#8C8479] block mt-1">맨발의 흙바닥 · 전기적 접지</span>
                </div>

                {/* Split Bottom: Hearth & Workshop */}
                <div className="grid grid-cols-2 gap-3">
                  <div 
                    onClick={() => setSelectedSpaceId('hearth-fire')}
                    className={`p-3 border text-center transition-all cursor-pointer ${
                      selectedSpaceId === 'hearth-fire' 
                        ? 'border-[#D95328] bg-[#221F1C] text-white' 
                        : 'border-[#332F2A] text-[#8C8479] hover:border-[#4D4740]'
                    }`}
                  >
                    <span className="text-xs font-mono block">COMMUNAL FIRE</span>
                    <span className="text-sm font-serif">화덕 (火)</span>
                  </div>

                  <div 
                    onClick={() => setSelectedSpaceId('craft-workshop')}
                    className={`p-3 border text-center transition-all cursor-pointer ${
                      selectedSpaceId === 'craft-workshop' 
                        ? 'border-[#D95328] bg-[#221F1C] text-white' 
                        : 'border-[#332F2A] text-[#8C8479] hover:border-[#4D4740]'
                    }`}
                  >
                    <span className="text-xs font-mono block">MANUAL LABOR</span>
                    <span className="text-sm font-serif">공방 (工房)</span>
                  </div>
                </div>

              </div>

              <p className="text-[11px] text-[#787168] font-mono text-center">
                접지소의 모든 건축은 콘크리트 대신 생석회와 황토, 거친 목재로만 지어집니다.
              </p>
            </div>

            {/* Right: Selected Space Details */}
            <div className="lg:col-span-6 bg-[#1A1816] border border-[#2D2A26] p-8 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#24211D] border border-[#38332D]">
                  {spaceIcons[selectedSpace.id]}
                </div>
                <div>
                  <div className="text-xs font-mono text-[#D95328]">
                    {selectedSpace.purpose}
                  </div>
                  <h4 className="text-2xl font-serif text-[#F4F0E8]">
                    {selectedSpace.name}
                  </h4>
                </div>
              </div>

              <blockquote className="border-l border-[#D95328] pl-4 py-1 text-base font-serif italic text-[#E06D44]">
                {selectedSpace.quote}
              </blockquote>

              <p className="text-sm text-[#C7C0B5] leading-relaxed font-light">
                {selectedSpace.description}
              </p>

              <div className="p-4 bg-[#141312] border border-[#2D2A26] space-y-1">
                <span className="text-xs font-mono text-[#8C8479] uppercase">공간 규율 (RULE)</span>
                <p className="text-xs text-[#A8A29A] leading-relaxed">
                  {selectedSpace.rules}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenVisitModal}
                  className="px-5 py-2.5 bg-[#D95328] hover:bg-[#C2451C] text-white text-xs font-medium tracking-wide transition-colors cursor-pointer"
                >
                  이 구역 방문 및 정전일 신청하기
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Community Non-Hierarchy Roles (Slide 14) */}
        <div className="pt-12 border-t border-[#2C2925] space-y-8">
          <div>
            <span className="text-xs font-mono text-[#D95328] uppercase">
              공동체의 3가지 모습
            </span>
            <h3 className="text-2xl font-serif text-[#F4F0E8] mt-1">
              계급도 권력도 없는 세 동반자
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMMUNITY_ROLES.map((role, idx) => (
              <div key={idx} className="p-6 bg-[#1A1816] border border-[#2D2A26] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#8C8479]">
                  <span>ROLE 0{idx + 1}</span>
                  <span className="text-[#D95328]">{role.badge}</span>
                </div>
                <h4 className="text-xl font-serif text-[#F4F0E8]">
                  {role.name}
                </h4>
                <div className="text-xs text-[#A8A29A] font-serif">
                  {role.subtitle}
                </div>
                <p className="text-xs text-[#8C8479] leading-relaxed pt-2 border-t border-[#262421]">
                  {role.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Death & Afterlife Concept (Slide 15) */}
        <div className="mt-16 p-8 md:p-10 bg-[#1C1A18] border border-[#2D2A26] space-y-4">
          <div className="text-xs font-mono text-[#D95328] uppercase">
            죽음관 — 두 번째 죽음 (第二之死)
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F0E8]">
            "그가 남긴 것이 닳아 사라지는 날, 비로소 장례가 끝난다"
          </h3>
          <p className="text-sm text-[#BDB5A8] leading-relaxed max-w-3xl font-light">
            접지회에는 육신을 떠나 천국으로 향하는 추상적 영혼의 개념이 없습니다. 
            인간은 그가 직접 손으로 감당해 남긴 <strong className="text-white font-normal">고친 물건, 지킨 약속, 온기를 나누어 키운 사람</strong>이라는 
            물리적 흔적으로 세계에 존속합니다. 남은 이들이 그 물건을 계속 쓰고 그 약속을 지키는 한, 그는 여전히 대지와 접지되어 있습니다.
          </p>
        </div>

      </div>
    </section>
  );
};
