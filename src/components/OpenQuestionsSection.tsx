import React, { useState } from 'react';
import { OPEN_QUESTIONS } from '../data/groundedData';
import { HelpCircle, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const OpenQuestionsSection: React.FC = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);
  const [votes, setVotes] = useState<Record<string, 'A' | 'B'>>({});

  const handleVote = (questionNumber: string, choice: 'A' | 'B') => {
    setVotes(prev => ({ ...prev, [questionNumber]: choice }));
  };

  return (
    <section id="dialogue" className="py-24 border-b border-[#2C2925] bg-[#161514]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono text-[#D95328] tracking-widest uppercase">
            열린 질문 — 아직 답이 나오지 않은 논쟁
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F0E8] font-medium leading-tight">
            종교가 답을 독점하지 않는 자리
          </h2>
          <p className="text-sm sm:text-base text-[#9E968A] leading-relaxed">
            접지회는 모든 질문에 독단적 정답을 내리지 않습니다. 
            진정한 성찰은 교리의 도그마 뒤로 숨지 않고, 여전히 떨리는 신도들의 치열한 양심의 마찰에서 자라납니다.
          </p>
        </div>

        {/* 3 Open Questions Accordion List */}
        <div className="space-y-4">
          {OPEN_QUESTIONS.map((q, idx) => {
            const isExpanded = expandedIdx === idx;
            const currentVote = votes[q.number];

            return (
              <div
                key={q.number}
                className="bg-[#1A1816] border border-[#2D2A26] transition-all overflow-hidden"
              >
                {/* Header row */}
                <button
                  onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                  className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 cursor-pointer hover:bg-[#201D1A]"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-lg font-mono text-[#D95328] shrink-0 font-medium">
                      {q.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif text-[#F4F0E8] leading-snug">
                      {q.question}
                    </h3>
                  </div>

                  <div className="text-[#8C8479] shrink-0 mt-1">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-0 space-y-6 border-t border-[#262421]">
                    
                    <p className="text-sm text-[#BDB5A8] leading-relaxed font-light">
                      {q.background}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      
                      {/* Perspective A */}
                      <div 
                        onClick={() => handleVote(q.number, 'A')}
                        className={`p-5 border transition-all cursor-pointer space-y-2 ${
                          currentVote === 'A' 
                            ? 'bg-[#221F1C] border-[#D95328] text-white' 
                            : 'bg-[#151413] border-[#2C2925] text-[#A8A29A] hover:border-[#3D3832]'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className={currentVote === 'A' ? 'text-[#D95328]' : 'text-[#7A746B]'}>견해 A</span>
                          {currentVote === 'A' && <span className="text-xs text-[#D95328]">선택됨</span>}
                        </div>
                        <p className="text-xs leading-relaxed">
                          {q.communityPerspectives.sideA}
                        </p>
                      </div>

                      {/* Perspective B */}
                      <div 
                        onClick={() => handleVote(q.number, 'B')}
                        className={`p-5 border transition-all cursor-pointer space-y-2 ${
                          currentVote === 'B' 
                            ? 'bg-[#221F1C] border-[#D95328] text-white' 
                            : 'bg-[#151413] border-[#2C2925] text-[#A8A29A] hover:border-[#3D3832]'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className={currentVote === 'B' ? 'text-[#D95328]' : 'text-[#7A746B]'}>견해 B</span>
                          {currentVote === 'B' && <span className="text-xs text-[#D95328]">선택됨</span>}
                        </div>
                        <p className="text-xs leading-relaxed">
                          {q.communityPerspectives.sideB}
                        </p>
                      </div>

                    </div>

                    <div className="text-[11px] font-mono text-[#787168] text-right">
                      이 질문은 매월 정전일 집회 후 토방에서 신도들이 둘러앉아 토론합니다.
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Slide 17 Grand Finale Epigraph */}
        <div className="mt-20 pt-16 border-t border-[#2C2925] text-center space-y-4">
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#E06D44] font-medium leading-relaxed">
            "기계는 대신할 수 있다. 그러나 책임질 수는 없다."
          </p>
          <p className="text-sm font-mono tracking-widest text-[#8C8479]">
            接地會 / THE GROUNDED
          </p>
        </div>

      </div>
    </section>
  );
};
