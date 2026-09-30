import React from 'react';
import { ArrowRight, BookOpen, Compass, Flame, Footprints, Feather, ShieldCheck } from 'lucide-react';
import { GroundingLog } from '../types';

interface HomeOverviewSectionProps {
  onNavigateTab: (tabId: string) => void;
  onOpenJournalModal: () => void;
  onOpenVisitModal: () => void;
  recentLogs: GroundingLog[];
}

export const HomeOverviewSection: React.FC<HomeOverviewSectionProps> = ({
  onNavigateTab,
  onOpenJournalModal,
  onOpenVisitModal,
  recentLogs,
}) => {
  return (
    <div className="space-y-20 py-16">
      
      {/* 4 Core Pillars Overview Grid */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 border-b border-[#2C2925] pb-4">
          <div>
            <div className="text-xs font-mono text-[#D95328] uppercase tracking-widest">
              FOUR PILLARS OF GROUNDING
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F4F0E8] mt-1">
              접지회 핵심 안내
            </h2>
          </div>
          <p className="text-xs text-[#8C8479] max-w-sm">
            각 항목을 누르면 해당 교의와 실천 지침의 상세 페이지로 이동합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Origin & First Grounding */}
          <div 
            onClick={() => onNavigateTab('origin')}
            className="p-8 bg-[#1A1816] border border-[#2D2A26] hover:border-[#D95328] transition-all cursor-pointer group flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#8C8479]">
                <span>PART 1 · 創敎</span>
                <span className="text-[#D95328] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  자세히 보기 <ArrowRight size={14} />
                </span>
              </div>
              <h3 className="text-xl font-serif text-[#F4F0E8] group-hover:text-[#E06D44] transition-colors">
                창교 신화 — 어머니의 낡은 식탁과 피
              </h3>
              <p className="text-sm text-[#9E968A] leading-relaxed line-clamp-3">
                AI는 완벽하게 식탁을 재현했으나, 어머니가 닦고 남긴 시간은 존재하지 않았습니다.
                직접 식탁을 고치다 손을 베었을 때 깨달은 실재와의 마찰: "세계는 나에게 저항했고, 나는 그 저항에 응답했다."
              </p>
            </div>
            <div className="text-xs text-[#736C63] font-mono border-t border-[#262421] pt-3">
              2025 Project Panama · 2031 첫 번째 접지 · 2035 접지회 설립
            </div>
          </div>

          {/* Card 2: Doctrine & Friction */}
          <div 
            onClick={() => onNavigateTab('doctrine')}
            className="p-8 bg-[#1A1816] border border-[#2D2A26] hover:border-[#D95328] transition-all cursor-pointer group flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#8C8479]">
                <span>PART 2 · 敎理</span>
                <span className="text-[#D95328] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  자세히 보기 <ArrowRight size={14} />
                </span>
              </div>
              <h3 className="text-xl font-serif text-[#F4F0E8] group-hover:text-[#E06D44] transition-colors">
                마찰(摩擦) 신관과 대리죄 판별
              </h3>
              <p className="text-sm text-[#9E968A] leading-relaxed line-clamp-3">
                인격신은 없습니다. 신적인 것은 세계가 나에게 되돌려주는 저항(Resistance) 그 자체입니다.
                기술을 부정하지 않되, 마땅히 자신이 감당해야 할 윤리와 책임을 넘기는 대리죄를 경계합니다.
              </p>
            </div>
            <div className="text-xs text-[#736C63] font-mono border-t border-[#262421] pt-3">
              인간관 · 저항이 곧 응답이다 · 대리죄 판별기 · 임재와 대행의 성사
            </div>
          </div>

          {/* Card 3: Five Rites */}
          <div 
            onClick={() => onNavigateTab('rites')}
            className="p-8 bg-[#1A1816] border border-[#2D2A26] hover:border-[#D95328] transition-all cursor-pointer group flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#8C8479]">
                <span>PART 3 · 儀禮</span>
                <span className="text-[#D95328] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  자세히 보기 <ArrowRight size={14} />
                </span>
              </div>
              <h3 className="text-xl font-serif text-[#F4F0E8] group-hover:text-[#E06D44] transition-colors">
                다섯 개의 의례 — 모두 '직접 하기'다
              </h3>
              <p className="text-sm text-[#9E968A] leading-relaxed line-clamp-3">
                매일 손수 한 일을 적는 '접지(接地)', 사과와 고백을 대필하지 않는 '직언례(直言禮)', 
                주 1회 24시간 스크린 없이 불을 피우는 '정전일(停電日)', 실패를 고백하는 '감당례', 흉터에 이름 붙이는 '상흔례'.
              </p>
            </div>
            <div className="text-xs text-[#736C63] font-mono border-t border-[#262421] pt-3">
              5대 의례 규범 · 장문(掌紋) 인장 캔버스 날인 체험
            </div>
          </div>

          {/* Card 4: Sanctuary & Community */}
          <div 
            onClick={() => onNavigateTab('sanctuary')}
            className="p-8 bg-[#1A1816] border border-[#2D2A26] hover:border-[#D95328] transition-all cursor-pointer group flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#8C8479]">
                <span>PART 3 · 聖所</span>
                <span className="text-[#D95328] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  자세히 보기 <ArrowRight size={14} />
                </span>
              </div>
              <h3 className="text-xl font-serif text-[#F4F0E8] group-hover:text-[#E06D44] transition-colors">
                성소 「접지소(接地所)」와 공동체
              </h3>
              <p className="text-sm text-[#9E968A] leading-relaxed line-clamp-3">
                등급과 위계가 없는 평등한 터전. 맨발로 흙을 디디는 토방(土房), 손수 불을 피우는 화덕(火), 
                고장 난 것을 고치는 공방(工房), 그리고 "당신은 아무것도 잘못하지 않았습니다" 기기 반납함.
              </p>
            </div>
            <div className="text-xs text-[#736C63] font-mono border-t border-[#262421] pt-3">
              성소 평면 조감도 · 접지자/동행자/친방 · 두 번째 죽음관 · 방문 신청
            </div>
          </div>

        </div>
      </section>

      {/* Recent Grounding Logs Preview (Compact 2 items) */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="p-8 md:p-10 bg-[#1A1816] border border-[#2D2A26] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2C2925] pb-4">
            <div>
              <div className="text-xs font-mono text-[#D95328] uppercase tracking-wider">
                DAILY GROUNDING REGISTER
              </div>
              <h3 className="text-xl font-serif text-[#F4F0E8] mt-1">
                신도들의 최근 일상 접지록
              </h3>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenJournalModal}
                className="px-4 py-2 bg-[#D95328] hover:bg-[#C2451C] text-white text-xs font-medium cursor-pointer flex items-center gap-1.5"
              >
                <Feather size={14} />
                <span>나의 접지록 쓰기</span>
              </button>
              <button
                onClick={() => onNavigateTab('community')}
                className="px-4 py-2 border border-[#3E3A34] hover:border-[#8C8479] text-[#C7C0B5] hover:text-white text-xs cursor-pointer"
              >
                전체 피드 보기 ➔
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentLogs.slice(0, 2).map((log) => (
              <div key={log.id} className="p-5 bg-[#141312] border border-[#282622] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8C8479]">
                  <span className="text-[#D95328]">{log.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{log.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{log.name}</span>
                </div>
                <h4 className="text-base font-serif text-[#F4F0E8]">
                  {log.title}
                </h4>
                <p className="text-xs text-[#A8A29A] leading-relaxed line-clamp-2">
                  {log.content}
                </p>
                <div className="pt-2 border-t border-[#22201D] text-[11px] text-[#787168] italic">
                  "{log.resistanceFelt}"
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sanctuary Invitation Callout */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="p-8 md:p-12 bg-gradient-to-r from-[#1F1C19] to-[#171615] border border-[#332F2A] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono text-[#D95328] uppercase tracking-wider">
              성소 참배 및 방문 초청
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F0E8] leading-snug">
              "여기서는 아무도 당신을 대신해주지 않습니다."
            </h3>
            <p className="text-sm text-[#A8A29A] leading-relaxed font-light">
              양말을 벗고 흙바닥에 서서, 직접 불을 지피고 밥을 짓는 정전일(停電日)에 참여해 보세요.
              당신의 지친 신경계를 대지에 온전히 방전할 수 있습니다.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenVisitModal}
              className="px-6 py-3.5 bg-[#D95328] hover:bg-[#C2451C] text-white text-xs font-medium tracking-wide transition-colors cursor-pointer shadow-sm text-center"
            >
              성소 방문 신청하기
            </button>
            <button
              onClick={() => onNavigateTab('sanctuary')}
              className="px-6 py-3.5 border border-[#3E3A34] hover:border-[#8C8479] text-[#E0DDD5] hover:text-white text-xs tracking-wide transition-colors cursor-pointer text-center"
            >
              공간 조감도 살펴보기
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
