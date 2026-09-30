import React, { useRef, useState, useEffect } from 'react';
import { CORE_DOCTRINES } from '../data/groundedData';
import { Fingerprint, Download, RotateCcw, Sparkles } from 'lucide-react';

export const SymbolSealSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [userName, setUserName] = useState('');
  const [stampDone, setStampDone] = useState(false);
  const [stampCount, setStampCount] = useState(1);

  // Initialize canvas
  useEffect(() => {
    drawCanvas();
  }, [stampDone, stampCount]);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background
    ctx.fillStyle = '#181615';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle paper grain borders
    ctx.strokeStyle = '#2C2824';
    ctx.lineWidth = 1;
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

    // Corner marks
    const cornerSize = 12;
    ctx.strokeStyle = '#D95328';
    ctx.lineWidth = 1.5;
    // top-left
    ctx.beginPath(); ctx.moveTo(10, 10 + cornerSize); ctx.lineTo(10, 10); ctx.lineTo(10 + cornerSize, 10); ctx.stroke();
    // top-right
    ctx.beginPath(); ctx.moveTo(canvas.width - 10 - cornerSize, 10); ctx.lineTo(canvas.width - 10, 10); ctx.lineTo(canvas.width - 10, 10 + cornerSize); ctx.stroke();
    // bottom-left
    ctx.beginPath(); ctx.moveTo(10, canvas.height - 10 - cornerSize); ctx.lineTo(10, canvas.height - 10); ctx.lineTo(10 + cornerSize, canvas.height - 10); ctx.stroke();
    // bottom-right
    ctx.beginPath(); ctx.moveTo(canvas.width - 10 - cornerSize, canvas.height - 10); ctx.lineTo(canvas.width - 10, canvas.height - 10); ctx.lineTo(canvas.width - 10, canvas.height - 10 - cornerSize); ctx.stroke();

    const cx = canvas.width / 2;
    const cy = 110;

    if (stampDone) {
      // Draw first seal (동행자 or 주 상징)
      ctx.save();
      ctx.fillStyle = '#D95328';
      ctx.globalAlpha = 0.85;

      // Disc
      ctx.beginPath();
      ctx.arc(cx, cy, 45, 0, Math.PI * 2);
      ctx.fill();

      // Fingerprint / palm ridges
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 1.5;
      for (let r = 12; r <= 38; r += 7) {
        ctx.beginPath();
        ctx.arc(cx, cy + 4, r, 0.2 * Math.PI, 0.8 * Math.PI);
        ctx.stroke();
      }

      // Vertical grounding line
      ctx.strokeStyle = '#D95328';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy + 45);
      ctx.lineTo(cx, cy + 120);
      ctx.stroke();

      // Grounding bars
      ctx.beginPath(); ctx.moveTo(cx - 24, cy + 120); ctx.lineTo(cx + 24, cy + 120); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx - 16, cy + 126); ctx.lineTo(cx + 16, cy + 126); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx - 8, cy + 132); ctx.lineTo(cx + 8, cy + 132); ctx.stroke();

      // If Overlap Seal (겹장문) mode
      if (stampCount === 2) {
        ctx.fillStyle = '#A33615';
        ctx.globalAlpha = 0.7;
        ctx.beginPath();
        ctx.arc(cx + 14, cy - 8, 42, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(255, 240, 220, 0.4)';
        ctx.lineWidth = 1.5;
        for (let r = 10; r <= 35; r += 7) {
          ctx.beginPath();
          ctx.arc(cx + 14, cy - 4, r, 0.1 * Math.PI, 0.9 * Math.PI);
          ctx.stroke();
        }
      }
      ctx.restore();

      // Text label inside the card
      ctx.fillStyle = '#E8E2D7';
      ctx.font = '14px serif';
      ctx.textAlign = 'center';
      const displayName = userName.trim() || '접지자 (接地者)';
      ctx.fillText(`접지인 : ${displayName}`, cx, canvas.height - 35);

      ctx.fillStyle = '#8C8479';
      ctx.font = '10px monospace';
      ctx.fillText(stampCount === 2 ? '대행의 성사 · 겹장문(疊掌紋)' : '개인 장문(掌紋) · 실재와의 계약', cx, canvas.height - 18);
    } else {
      // Empty placeholder prompt
      ctx.strokeStyle = '#38342F';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(cx, cy, 45, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#736C63';
      ctx.font = '12px serif';
      ctx.textAlign = 'center';
      ctx.fillText('손바닥을 대어 장문을 찍으십시오', cx, cy + 4);
    }
  };

  const handleStamp = () => {
    setStampDone(true);
  };

  const handleOverlap = () => {
    setStampDone(true);
    setStampCount(prev => (prev === 1 ? 2 : 1));
  };

  const handleReset = () => {
    setStampDone(false);
    setStampCount(1);
    setUserName('');
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `접지회_장문인장_${userName || '신도'}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <section className="py-24 border-b border-[#2C2925] bg-[#141312]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono text-[#D95328] tracking-widest uppercase">
            PART 2 — 상징(SYMBOL)과 성사(SACRAMENT)
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F0E8] font-medium leading-tight">
            장문(掌紋)은 세계와 접촉한 이력이다
          </h2>
          <p className="text-sm sm:text-base text-[#9E968A] leading-relaxed">
            목수의 거친 손, 환자를 돌보는 간호사의 손, 흙을 일구는 농부와 자식을 키우는 부모의 손바닥에 새겨진 주름은
            기술 숙련의 증거가 아니라 실재하는 세계와 온몸으로 맞부딪혀 온 고유한 역사입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Canon Explanation */}
          <div className="lg:col-span-6 space-y-8">
            <div className="p-8 bg-[#1A1816] border border-[#2D2A26] space-y-4">
              <h3 className="text-xl font-serif text-[#F4F0E8]">
                주 상징과 부 상징의 구성
              </h3>
              <p className="text-sm text-[#BDB5A8] leading-relaxed font-light">
                {CORE_DOCTRINES.symbolism.meaning}
              </p>
              <div className="pt-3 border-t border-[#2C2925]">
                <p className="text-xs text-[#8C8479] leading-relaxed">
                  {CORE_DOCTRINES.symbolism.wireMeaning}
                </p>
              </div>
            </div>

            {/* Overlap Seal & Taboo */}
            <div className="p-8 bg-[#1A1816] border border-[#2D2A26] space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-serif text-[#E06D44]">
                  겹장문 (疊掌紋) — 대행의 성사
                </h4>
                <span className="text-xs font-mono text-[#8C8479]">代行之印</span>
              </div>
              <p className="text-sm text-[#BDB5A8] leading-relaxed font-light">
                {CORE_DOCTRINES.symbolism.overlapSeal}
              </p>
            </div>

            <div className="p-5 bg-[#201512] border border-[#8C2C16]/50 space-y-2">
              <div className="text-xs font-mono text-[#D95328] uppercase tracking-wider">
                금기 (禁忌) — 복제 불가능성의 계율
              </div>
              <p className="text-xs text-[#E8C2B8] leading-relaxed">
                {CORE_DOCTRINES.symbolism.taboo}
              </p>
            </div>
          </div>

          {/* Right: Interactive Palm Stamp Workshop */}
          <div className="lg:col-span-6 bg-[#1A1816] border border-[#2D2A26] p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#D95328] uppercase">
                  성표 날인 체험
                </span>
                <h3 className="text-xl font-serif text-[#F4F0E8] mt-1">
                  나의 장문 인장 날인 (掌紋 印章)
                </h3>
              </div>
              <Fingerprint className="text-[#D95328]" size={24} />
            </div>

            <div className="flex flex-col items-center justify-center">
              <canvas
                ref={canvasRef}
                width={320}
                height={300}
                className="border border-[#38332D] shadow-inner bg-[#181615] max-w-full"
              />
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs text-[#8C8479] block mb-1 font-mono">
                  날인자 서명 (성명 또는 호)
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="예: 김진우 (접지자)"
                  className="w-full px-3 py-2 bg-[#141312] border border-[#2D2A26] text-sm text-[#F4F0E8] focus:border-[#D95328] focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={handleStamp}
                  className="px-4 py-2 bg-[#D95328] hover:bg-[#C2451C] text-white text-xs font-medium tracking-wide transition-colors cursor-pointer"
                >
                  손바닥 장문 찍기
                </button>

                <button
                  onClick={handleOverlap}
                  className="px-4 py-2 border border-[#3E3A34] hover:border-[#8C8479] text-[#E0DDD5] hover:text-white text-xs tracking-wide transition-colors cursor-pointer"
                >
                  {stampCount === 1 ? '대행의 겹장문 찍기' : '단일 장문으로 전환'}
                </button>

                <button
                  onClick={handleReset}
                  className="p-2 text-[#8C8479] hover:text-white text-xs cursor-pointer"
                  title="초기화"
                >
                  <RotateCcw size={16} />
                </button>

                {stampDone && (
                  <button
                    onClick={handleDownload}
                    className="ml-auto px-4 py-2 bg-[#25221E] hover:bg-[#332F2A] text-[#E0DDD5] text-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download size={14} />
                    <span>인장 보관</span>
                  </button>
                )}
              </div>
            </div>

            <p className="text-[11px] text-[#736C63] font-mono leading-relaxed pt-2 border-t border-[#262421]">
              * 화면 날인은 상징적 성찰용입니다. 실제 성소에 방문하시면 천연 붉은 먹을 손바닥에 발라 마포 천에 직접 압흔을 남깁니다.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
