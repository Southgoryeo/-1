import React, { useState, useEffect } from 'react';
import { INITIAL_GROUNDING_LOGS } from '../data/groundedData';
import { GroundingLog } from '../types';
import { Feather, Check, Filter, Calendar } from 'lucide-react';

interface GroundingLogSectionProps {
  onOpenJournalModal: () => void;
}

export const GroundingLogSection: React.FC<GroundingLogSectionProps> = ({ onOpenJournalModal }) => {
  const [logs, setLogs] = useState<GroundingLog[]>(INITIAL_GROUNDING_LOGS);
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  // Load any stored logs from localStorage
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

  const categories = ['전체', '수선과 노동', '직접 쓴 말', '돌봄과 접촉', '정전의 시간', '감당의 참회'];

  const filteredLogs = filterCategory === '전체' 
    ? logs 
    : logs.filter(l => l.category === filterCategory);

  return (
    <section id="journal" className="py-24 border-b border-[#2C2925] bg-[#141312]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono text-[#D95328] tracking-widest uppercase">
              매일의 제1의례 — 일상 접지록 (接地錄)
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F0E8] font-medium leading-tight">
              대신 시킬 수 있었으나 직접 한 일
            </h2>
            <p className="text-sm text-[#9E968A] leading-relaxed">
              기계의 손을 빌리지 않고 나의 손과 말, 나의 시간으로 실재의 마찰을 감당한 신도들의 매일의 기록입니다.
            </p>
          </div>

          <button
            onClick={onOpenJournalModal}
            className="px-5 py-3 bg-[#D95328] hover:bg-[#C2451C] text-white text-xs font-medium tracking-wide transition-colors cursor-pointer flex items-center gap-2 self-start md:self-auto shrink-0 shadow-sm"
          >
            <Feather size={14} />
            <span>나의 접지록 남기기</span>
          </button>
        </div>

        {/* Categories (Functional filter buttons per Section 1.A) */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#2C2925] pb-4 mb-8">
          <span className="text-xs font-mono text-[#736C63] mr-2 flex items-center gap-1">
            <Filter size={12} /> 분류
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 text-xs transition-colors cursor-pointer whitespace-nowrap ${
                filterCategory === cat
                  ? 'bg-[#221F1C] text-[#F4F0E8] border border-[#D95328]'
                  : 'text-[#8C8479] hover:text-[#C7C0B5] border border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Logs Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredLogs.map((log) => (
            <div
              key={log.id}
              className="p-8 bg-[#1A1816] border border-[#2D2A26] flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              {/* Corner Watermark Seal Indicator */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full border border-[#D95328]/30 flex items-center justify-center pointer-events-none opacity-40">
                <span className="text-[10px] font-serif text-[#D95328]">印</span>
              </div>

              <div className="space-y-4">
                {/* Meta without pill capsules */}
                <div className="flex items-center gap-2 text-xs text-[#8C8479] font-mono">
                  <span className="text-[#D95328]">{log.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{log.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{log.name} ({log.role})</span>
                </div>

                <h3 className="text-xl font-serif text-[#F4F0E8] leading-snug">
                  {log.title}
                </h3>

                <p className="text-sm text-[#BDB5A8] leading-relaxed whitespace-pre-line font-light">
                  {log.content}
                </p>
              </div>

              {/* The Friction Felt in the Flesh */}
              <div className="pt-4 border-t border-[#262421] space-y-1">
                <div className="text-[11px] font-mono text-[#D95328] uppercase">
                  마찰과 저항의 감각 (몸이 감당한 흔적)
                </div>
                <p className="text-xs text-[#A8A29A] italic">
                  "{log.resistanceFelt}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
