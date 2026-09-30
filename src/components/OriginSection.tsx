import React, { useState } from 'react';
import { ORIGIN_STORIES } from '../data/groundedData';
import { BookOpen, Hammer, Sparkles, AlertCircle } from 'lucide-react';

export const OriginSection: React.FC = () => {
  const [activeStoryIdx, setActiveStoryIdx] = useState(1); // Default to the Myth of the First Grounding

  const storyIcons = [BookOpen, Hammer, AlertCircle];

  return (
    <section id="origin" className="py-24 border-b border-[#2C2925] bg-[#141312]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono text-[#D95328] tracking-widest uppercase">
            PART 1 — 왜 이 종교가 생겼는가
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F0E8] font-medium leading-tight">
            완벽한 복제의 허망함과 첫 번째 마찰
          </h2>
          <p className="text-sm sm:text-base text-[#9E968A] leading-relaxed">
            디지털 공간에 정보와 데이터가 완전하게 보존될수록, 인간의 손은 실재와의 접촉을 잃어갔습니다.
            접지회의 역사는 한 권의 파쇄된 책과 어머니의 피 묻은 식탁에서 시작되었습니다.
          </p>
        </div>

        {/* Timeline Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10 border-b border-[#2C2925] pb-4">
          {ORIGIN_STORIES.map((story, idx) => {
            const Icon = storyIcons[idx];
            const isActive = activeStoryIdx === idx;
            return (
              <button
                key={story.year}
                onClick={() => setActiveStoryIdx(idx)}
                className={`text-left p-4 transition-all duration-200 cursor-pointer border ${
                  isActive 
                    ? 'bg-[#1C1A18] border-[#D95328] text-white shadow-sm' 
                    : 'bg-transparent border-transparent hover:border-[#38342F] text-[#8C8479]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className={isActive ? 'text-[#D95328]' : 'text-[#706A62]'}>{story.year}</span>
                  <span>{story.tag}</span>
                </div>
                <div className={`text-base font-serif font-medium ${isActive ? 'text-[#F4F0E8]' : 'text-[#A8A29A]'}`}>
                  {story.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured Story Display */}
        {(() => {
          const current = ORIGIN_STORIES[activeStoryIdx];
          return (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#1A1816] border border-[#2D2A26] p-8 md:p-12">
              
              {/* Main Narrative Column */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-3 text-xs font-mono text-[#D95328]">
                  <span>연대기 기록</span>
                  <span aria-hidden="true">·</span>
                  <span>{current.year} ARCHIVE</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif text-[#F4F0E8] leading-snug">
                  {current.title}
                </h3>

                <blockquote className="border-l-2 border-[#D95328] pl-5 py-1 text-lg sm:text-xl font-serif text-[#E06D44] italic">
                  {current.summary}
                </blockquote>

                <p className="text-base text-[#BDB5A8] leading-relaxed whitespace-pre-line font-light">
                  {current.detail}
                </p>

                {activeStoryIdx === 1 && (
                  <div className="mt-8 p-5 bg-[#221F1C] border border-[#38342F] space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#A89E90]">
                      창교 신화의 두 가지 선언
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-3 bg-[#181615] border border-[#2D2925]">
                        <p className="text-sm font-serif text-[#F4F0E8]">
                          "복제된 것은 물건이었지만, 복제되지 않은 것은 그 물건이 세계와 맺었던 관계였다."
                        </p>
                      </div>
                      <div className="p-3 bg-[#181615] border border-[#2D2925]">
                        <p className="text-sm font-serif text-[#D95328]">
                          "세계는 나에게 저항했고, 나는 그 저항에 응답했다."
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Curatorial Annotation Column (Slide 3 & 4 Right Notes) */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#2C2925] lg:pl-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#8C8479]">
                    신학적 주석 (註釋)
                  </div>

                  {activeStoryIdx === 0 && (
                    <div className="text-xs text-[#A8A29A] leading-relaxed space-y-3">
                      <p className="font-serif text-[#E0DDD5]">이 장의 위치</p>
                      <p>
                        이것은 교리의 직접적 근거가 아니라 <strong>시대의 분위기</strong>입니다.
                        기계가 모든 내용을 추출하고 본체를 태워버릴 때, 문명은 물질과 책임의 끈을 놓았습니다.
                      </p>
                      <p className="text-[#756E65] pt-2 border-t border-[#2C2925]">
                        출처: 2025 법원 공개 문서 및 언론 보도 (Project Panama)
                      </p>
                    </div>
                  )}

                  {activeStoryIdx === 1 && (
                    <div className="text-xs text-[#A8A29A] leading-relaxed space-y-3">
                      <p className="font-serif text-[#E0DDD5]">첫 번째 접지 (初代 接地)</p>
                      <p>
                        모든 교리의 근거가 되는 창교 사건입니다. 손가락을 베었을 때 흐른 피는 단순한 상처가 아니라,
                        비로소 매끄러운 환각을 찢고 실재하는 세계의 저항과 물리적으로 체결된 계약이었습니다.
                      </p>
                      <p className="text-[#D95328]">
                        → 접지회는 모든 회원이 이 첫 번째 접지의 각성을 재현하기를 권면합니다.
                      </p>
                    </div>
                  )}

                  {activeStoryIdx === 2 && (
                    <div className="text-xs text-[#A8A29A] leading-relaxed space-y-3">
                      <p className="font-serif text-[#E0DDD5]">부유(浮遊)의 고통</p>
                      <p>
                        "내가 없어도 세상이 굴러간다"는 절망은 신의 침묵보다 차가웠습니다.
                        인간의 쓸모는 생산성의 효율이 아니라, <strong>마찰 속에서 고통과 책임을 대신 져주는 행위</strong>에서 부활합니다.
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-4 bg-[#141312] border border-[#2B2824] text-xs text-[#8C8479]">
                  <span className="text-[#D95328] font-mono">01/17</span> 접지회 교의문서고
                </div>
              </div>

            </div>
          );
        })()}

      </div>
    </section>
  );
};
