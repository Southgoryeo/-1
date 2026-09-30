import React, { useState } from 'react';
import { X, Check, MapPin, Calendar, Clock, ShieldCheck } from 'lucide-react';

interface VisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisitModal: React.FC<VisitModalProps> = ({ isOpen, onClose }) => {
  const [visitorName, setVisitorName] = useState('');
  const [contact, setContact] = useState('');
  const [sanctuaryLocation, setSanctuaryLocation] = useState('서울 북촌 본부 접지소');
  const [program, setProgram] = useState('정전일 공동 화덕 및 토방 참관');
  const [visitDate, setVisitDate] = useState('2035-10-20');
  const [agreeDeviceReturn, setAgreeDeviceReturn] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeDeviceReturn) return;
    setSubmitted(true);
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
            성소 참배 및 방문 안내
          </div>
          <h3 className="text-2xl font-serif text-[#F4F0E8]">
            접지소 (接地所) 참관 신청
          </h3>
          <p className="text-xs text-[#8C8479] leading-relaxed">
            신발을 벗고 차가운 황토를 디디며, 직접 불을 피우고 음식을 나누는 마찰의 성소로 당신을 초대합니다.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 space-y-6 text-center">
            <div className="w-12 h-12 rounded-full border border-[#D95328] text-[#D95328] flex items-center justify-center mx-auto">
              <Check size={24} />
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-serif text-[#F4F0E8]">
                방문 접수가 완료되었습니다
              </h4>
              <p className="text-xs text-[#C7C0B5] max-w-md mx-auto leading-relaxed">
                [{sanctuaryLocation}] 에서 <br />
                {visitorName} 님을 맨발로 맞이하겠습니다.
              </p>
            </div>

            <div className="p-4 bg-[#141312] border border-[#2D2A26] text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between text-[#8C8479] font-mono">
                <span>예약 일자:</span>
                <span className="text-[#E0DDD5]">{visitDate}</span>
              </div>
              <div className="flex justify-between text-[#8C8479] font-mono">
                <span>선택 의례:</span>
                <span className="text-[#E0DDD5]">{program}</span>
              </div>
              <div className="pt-2 border-t border-[#262421] text-[#D95328] font-serif">
                "여기서는 아무도 당신을 대신해주지 않습니다."
              </div>
            </div>

            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-2.5 bg-[#D95328] hover:bg-[#C2451C] text-white text-xs font-medium cursor-pointer"
            >
              확인 및 창 닫기
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="p-4 bg-[#151413] border border-[#2D2A26] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D95328]">
                <ShieldCheck size={14} />
                <span>입소자 서약 규율</span>
              </div>
              <p className="text-xs text-[#A8A29A] leading-relaxed">
                성소 문턱에 들어서면 모든 휴대기기와 스마트 글래스를 반납함(歸去函)에 보관하셔야 합니다. 
                토방에서는 맨발로 이동하며 일체의 디지털 대필 및 인공지능 보조 도구를 사용할 수 없습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-[#8C8479] block mb-1">
                  신청인 성함
                </label>
                <input
                  type="text"
                  required
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  placeholder="홍길동"
                  className="w-full px-3 py-2 bg-[#141312] border border-[#2D2A26] text-sm text-[#F4F0E8] focus:border-[#D95328] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-[#8C8479] block mb-1">
                  연락처 (문자 발송용)
                </label>
                <input
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="010-0000-0000"
                  className="w-full px-3 py-2 bg-[#141312] border border-[#2D2A26] text-sm text-[#F4F0E8] focus:border-[#D95328] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-[#8C8479] block mb-1">
                  방문 성소 위치
                </label>
                <select
                  value={sanctuaryLocation}
                  onChange={(e) => setSanctuaryLocation(e.target.value)}
                  className="w-full px-3 py-2 bg-[#141312] border border-[#2D2A26] text-sm text-[#F4F0E8] focus:border-[#D95328] focus:outline-none"
                >
                  <option value="서울 북촌 본부 접지소">서울 북촌 본부 접지소 (흙길 성소)</option>
                  <option value="경기 양평 화덕 터전">경기 양평 화덕 터전 (노작 성소)</option>
                  <option value="부산 금정 산성 접지소">부산 금정 산성 접지소 (해안 마찰소)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono text-[#8C8479] block mb-1">
                  희망 참배 일자
                </label>
                <input
                  type="date"
                  required
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full px-3 py-2 bg-[#141312] border border-[#2D2A26] text-sm text-[#F4F0E8] focus:border-[#D95328] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-[#8C8479] block mb-1">
                참여 의례 및 프로그램
              </label>
              <select
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                className="w-full px-3 py-2 bg-[#141312] border border-[#2D2A26] text-sm text-[#F4F0E8] focus:border-[#D95328] focus:outline-none"
              >
                <option value="정전일 공동 화덕 및 토방 참관">정전일 공동 화덕 및 토방 참관 (주말 성일)</option>
                <option value="토방 맨발 접지 좌선">토방 맨발 접지 좌선 (평일 상시)</option>
                <option value="공방 목공 및 가전 수리 노작">공방 목공 및 가전 수리 노작 (직접 고치기)</option>
                <option value="동행자와의 직언례 및 면담">동행자와의 직언례 및 면담 (심적 마찰 나눔)</option>
              </select>
            </div>

            {/* Covenant Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={agreeDeviceReturn}
                  onChange={(e) => setAgreeDeviceReturn(e.target.checked)}
                  className="mt-1 accent-[#D95328]"
                />
                <span className="text-xs text-[#C7C0B5] leading-relaxed">
                  [필수] "여기서는 아무도 당신을 대신해주지 않습니다"라는 원칙을 숙지하였으며, 
                  성소 입장 시 기기를 자발적으로 반납하고 물리적 마찰과 노동에 직접 참여할 것을 서약합니다.
                </span>
              </label>
            </div>

            <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#2C2925]">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs text-[#8C8479] hover:text-white cursor-pointer"
              >
                닫기
              </button>
              <button
                type="submit"
                disabled={!agreeDeviceReturn}
                className="px-6 py-2.5 bg-[#D95328] hover:bg-[#C2451C] disabled:bg-[#473027] disabled:text-[#887870] text-white text-xs font-medium tracking-wide transition-colors cursor-pointer"
              >
                방문 신청서 제출
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
