import React, { useState } from 'react';
import { X, Feather, Check } from 'lucide-react';
import { GroundingLog } from '../types';

interface JournalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddLog: (newLog: GroundingLog) => void;
}

export const JournalModal: React.FC<JournalModalProps> = ({ isOpen, onClose, onAddLog }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState<'접지자' | '동행자' | '방문인'>('방문인');
  const [category, setCategory] = useState<'수선과 노동' | '직접 쓴 말' | '돌봄과 접촉' | '정전의 시간' | '감당의 참회'>('수선과 노동');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [resistanceFelt, setResistanceFelt] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !resistanceFelt.trim()) return;

    const newLog: GroundingLog = {
      id: `user-log-${Date.now()}`,
      name: name.trim() || '무명의 접지자',
      role,
      date: new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
      category,
      title: title.trim(),
      content: content.trim(),
      resistanceFelt: resistanceFelt.trim(),
      verified: true,
      sealColor: '#D95328'
    };

    onAddLog(newLog);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#1C1A18] border border-[#38332D] max-w-xl w-full p-8 relative max-h-[90vh] overflow-y-auto space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#8C8479] hover:text-white cursor-pointer"
          aria-label="닫기"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="text-xs font-mono text-[#D95328] uppercase">
            제1의례 실천 — 일상 접지록 (接地錄)
          </div>
          <h3 className="text-2xl font-serif text-[#F4F0E8]">
            대신 시키지 않고 직접 한 일 기록하기
          </h3>
          <p className="text-xs text-[#8C8479] leading-relaxed">
            AI 프롬프트나 자동화에 넘기지 않고, 오늘 당신의 몸과 손으로 감당한 저항을 진실하게 적습니다.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full border border-[#D95328] text-[#D95328] flex items-center justify-center mx-auto">
              <Check size={24} />
            </div>
            <h4 className="text-xl font-serif text-[#F4F0E8]">
              접지록이 대지에 기록되었습니다
            </h4>
            <p className="text-xs text-[#8C8479]">
              당신의 손바닥에 남은 저항의 흔적을 영원히 기억합니다.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-[#8C8479] block mb-1">
                  기록자 성명 / 호
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="예: 박은수"
                  className="w-full px-3 py-2 bg-[#141312] border border-[#2D2A26] text-sm text-[#F4F0E8] focus:border-[#D95328] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-[#8C8479] block mb-1">
                  신분 / 관계
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as any)}
                  className="w-full px-3 py-2 bg-[#141312] border border-[#2D2A26] text-sm text-[#F4F0E8] focus:border-[#D95328] focus:outline-none"
                >
                  <option value="방문인">방문인 (성찰자)</option>
                  <option value="접지자">접지자 (입교 신도)</option>
                  <option value="동행자">동행자 (성사 봉사자)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-[#8C8479] block mb-1">
                접지 영역 (분류)
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full px-3 py-2 bg-[#141312] border border-[#2D2A26] text-sm text-[#F4F0E8] focus:border-[#D95328] focus:outline-none"
              >
                <option value="수선과 노동">수선과 노동 (손수 고치고 만든 일)</option>
                <option value="직접 쓴 말">직접 쓴 말 (대필 없는 사과·고백)</option>
                <option value="돌봄과 접촉">돌봄과 접촉 (손으로 어루만진 온기)</option>
                <option value="정전의 시간">정전의 시간 (기기를 끄고 마주한 침묵)</option>
                <option value="감당의 참회">감당의 참회 (기계 탓하지 않은 실패 고백)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-mono text-[#8C8479] block mb-1">
                기록 제목
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="예: 닳아버린 장화를 버리지 않고 고무 패치로 때우며"
                className="w-full px-3 py-2 bg-[#141312] border border-[#2D2A26] text-sm text-[#F4F0E8] focus:border-[#D95328] focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-[#8C8479] block mb-1">
                구체적 행위 내용
              </label>
              <textarea
                required
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="자동화나 대필을 거부하고 스스로 시간을 들여 마주한 구체적 상황을 적어주십시오."
                className="w-full px-3 py-2 bg-[#141312] border border-[#2D2A26] text-sm text-[#F4F0E8] focus:border-[#D95328] focus:outline-none leading-relaxed"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-[#D95328] block mb-1">
                마찰과 저항의 감각 (온몸으로 느낀 촉각/피로/부끄러움의 실재)
              </label>
              <input
                type="text"
                required
                value={resistanceFelt}
                onChange={(e) => setResistanceFelt(e.target.value)}
                placeholder="예: 접착제 냄새와 손가락 지문에 묻어 굳어버린 꺼칠한 고무의 감촉"
                className="w-full px-3 py-2 bg-[#141312] border border-[#2D2A26] text-sm text-[#F4F0E8] focus:border-[#D95328] focus:outline-none"
              />
            </div>

            <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#2C2925]">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs text-[#8C8479] hover:text-white cursor-pointer"
              >
                취소
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#D95328] hover:bg-[#C2451C] text-white text-xs font-medium tracking-wide transition-colors cursor-pointer flex items-center gap-2"
              >
                <Feather size={14} />
                <span>장문 날인 및 접지 등록</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
