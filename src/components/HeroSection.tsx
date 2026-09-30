import React from 'react';
import { GroundedEmblem } from './GroundedEmblem';
import { CORE_CREED } from '../data/groundedData';
import { ArrowDown, Flame, Compass, Feather } from 'lucide-react';

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
  onOpenJournalModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollTo, onOpenJournalModal }) => {
  return (
    <section id="hero" className="relative pt-16 pb-24 md:pt-24 md:pb-36 border-b border-[#2C2925] overflow-hidden">
      {/* Background ambient texture lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#E06D44_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-6xl mx-auto px-6 relative">
        
        {/* Top Minimal Editorial Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#8C8479] tracking-widest border-b border-[#2C2925] pb-4 mb-12">
          <div className="flex items-center gap-3">
            <span>2035</span>
            <span aria-hidden="true">·</span>
            <span>A RELIGION OF CONTACT</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#D95328]">接地會</span>
          </div>
          <div className="hidden sm:block">
            <span>HUMAN & CONTACT PROTOCOL / REV. 2035</span>
          </div>
        </div>

        {/* Hero Grid: Left Content, Right Emblem */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-8">
            
            {/* Title Lockup */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-[#F4F0E8] tracking-tight leading-none font-medium">
                접지회
              </h1>
              <p className="text-sm md:text-base tracking-[0.25em] text-[#A69E93] uppercase font-light">
                THE GROUNDED · 接地會
              </p>
            </div>

            {/* Core Dogma Banner */}
            <div className="border-l-2 border-[#D95328] pl-6 py-2">
              <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#E06D44] font-medium leading-snug">
                "기계는 대신할 수 있다.<br className="hidden sm:inline" /> 그러나 책임질 수는 없다."
              </p>
              <p className="text-base sm:text-lg text-[#C7C0B5] mt-3 font-light leading-relaxed">
                인간은 능력으로 인간인 것이 아니라, 감당함으로써 인간이다.
              </p>
            </div>

            {/* Existential Crisis Narrative Context */}
            <p className="text-base text-[#9E968A] leading-relaxed max-w-2xl">
              AI가 글도 판단도 창작도 더 잘하고, 로봇이 물리 노동까지 무결하게 완수하자 
              사람들을 무너뜨린 것은 실업이 아니었습니다. 
              <span className="text-[#E7E2D8] font-normal"> "내가 없어도 세상이 아무 문제 없이 굴러간다"</span>는 
              서늘한 부유감(浮遊感)이었습니다. 
              접지회는 바로 이 <span className="text-[#E06D44]">"그렇다면 인간은 왜 필요한가?"</span>라는 질문에 온몸으로 답하며 탄생했습니다.
            </p>

            {/* Action Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenJournalModal}
                className="px-6 py-3.5 bg-[#D95328] hover:bg-[#C2451C] text-white text-sm font-medium tracking-wide transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
              >
                <Feather size={16} />
                <span>오늘의 접지(接地) 기록하기</span>
              </button>

              <button
                onClick={() => onScrollTo('doctrine')}
                className="px-6 py-3.5 border border-[#3E3A34] hover:border-[#8C8479] text-[#E0DDD5] hover:text-white text-sm tracking-wide transition-colors cursor-pointer flex items-center gap-2"
              >
                <Compass size={16} />
                <span>대리죄 판별 및 교리 보기</span>
              </button>
            </div>

          </div>

          {/* Right Pillar: Large Distinctive Emblem */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 bg-[#1C1A18] border border-[#2D2A26] relative">
            <div className="text-center mb-6">
              <p className="text-xs uppercase tracking-widest text-[#8C8479] font-mono">
                SACRED SYMBOL / 聖標
              </p>
              <p className="text-sm font-serif text-[#C7C0B5] mt-1">
                장문(掌紋)과 접지선(接地線)
              </p>
            </div>

            <GroundedEmblem size="lg" withGlow={true} interactive={true} />

            <div className="mt-8 pt-6 border-t border-[#2C2925] w-full text-center">
              <p className="text-xs text-[#8C8479] leading-relaxed">
                손바닥은 세계와 접촉한 이력이며,<br />
                수직선은 과전압의 환각을 대지로 방전하는 접지선입니다.
              </p>
              <div className="mt-3 text-[11px] text-[#A65436] font-mono tracking-wider">
                금기: 인쇄·스캔·디지털 표시 금지
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Three Solace Pillars (Slide 16) */}
        <div className="mt-20 pt-12 border-t border-[#2C2925] grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_CREED.comfortQuotes.map((quote, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-xs font-mono text-[#D95328] tracking-widest">
                0{idx + 1} · 위로 (慰勞)
              </div>
              <p className="text-lg font-serif text-[#EBE6DF] leading-snug">
                "{quote}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
