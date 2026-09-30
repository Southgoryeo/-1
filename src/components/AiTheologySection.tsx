import React from 'react';
import { Cpu, ShieldCheck, HeartHandshake, EyeOff, Ban } from 'lucide-react';

export const AiTheologySection: React.FC = () => {
  return (
    <section className="py-24 border-b border-[#2C2925] bg-[#161514]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono text-[#D95328] tracking-widest uppercase">
            신학적 해설 — 이 종교에서 AI는 무엇인가
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F0E8] font-medium leading-tight">
            AI는 죄를 지을 수 없다 — 무구자 (無咎者)
          </h2>
          <p className="text-sm sm:text-base text-[#9E968A] leading-relaxed">
            AI는 숭배할 우상도, 타도할 악마도 아닙니다. 
            그것은 단지 고통도 부끄러움도 책임도 지지 못하는 투명한 기계일 뿐입니다.
          </p>
        </div>

        {/* Core Canonical Card */}
        <div className="p-8 md:p-12 bg-[#1C1A18] border border-[#2D2A26] space-y-6 mb-12">
          
          <div className="flex items-center gap-2 text-xs font-mono text-[#D95328]">
            <Cpu size={14} />
            <span>무구자 (無咎者) 의 신학</span>
          </div>

          <blockquote className="text-2xl sm:text-3xl font-serif text-[#E06D44] leading-snug">
            "AI는 실패해도 부끄럽지 않고, 성공해도 자랑스럽지 않다.<br className="hidden sm:inline" /> 
            그것이 우리가 AI를 미워하지 않는 이유이며, 동시에 부러워하지 않는 이유다."
          </blockquote>

          <p className="text-base text-[#C7C0B5] leading-relaxed max-w-3xl font-light">
            AI는 죄를 지을 수 없는 존재입니다. 
            죄를 지을 수 없으므로 용서받을 일도 없고, 용서받을 일이 없으므로 구원받을 수도 없습니다.
            그러므로 인공지능이 인간보다 우월한 지능이나 완벽한 문장을 구사하더라도 
            접지회 신도는 그 앞에 무릎 꿇지 않으며, 두려움에 떨지도 않습니다.
          </p>
        </div>

        {/* Three Golden Principles on AI (Slide 13) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Principle 1 */}
          <div className="p-8 bg-[#181615] border border-[#2C2925] space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#8C8479]">
              <span>원칙 01</span>
              <span>UTILIZATION</span>
            </div>
            <h3 className="text-xl font-serif text-[#F4F0E8]">
              일상에서는 자유롭게 쓴다
            </h3>
            <p className="text-sm text-[#9E968A] leading-relaxed">
              회계, 번역, 기록, 연락 등에 AI를 씁니다. 
              숨기지도 정당화하지도 않습니다. 
              기술 사용은 결코 죄가 아니기 때문입니다.
            </p>
            <div className="pt-3 border-t border-[#262421] text-xs text-[#736C63]">
              실용적 도구의 긍정
            </div>
          </div>

          {/* Principle 2 */}
          <div className="p-8 bg-[#181615] border border-[#2C2925] space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#D95328]">
              <span>원칙 02</span>
              <span>SACRED EXCLUSION</span>
            </div>
            <h3 className="text-xl font-serif text-[#F4F0E8]">
              세 의례에는 참여할 수 없다
            </h3>
            <p className="text-sm text-[#9E968A] leading-relaxed">
              직언례(사과·고백), 감당례(실패의 고백), 상흔례(흉터의 세례). 
              더러워서가 아니라, 그 자리는 온전히 감당하는 인간의 자리이고 
              AI는 결코 감당할 수 없기 때문입니다.
            </p>
            <div className="pt-3 border-t border-[#262421] text-xs text-[#E06D44]">
              책임의 성역 보호
            </div>
          </div>

          {/* Principle 3 */}
          <div className="p-8 bg-[#181615] border border-[#2C2925] space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#8C8479]">
              <span>원칙 03</span>
              <span>NO ESCHATOLOGY</span>
            </div>
            <h3 className="text-xl font-serif text-[#F4F0E8]">
              우리에게는 종말이 없다
            </h3>
            <p className="text-sm text-[#9E968A] leading-relaxed">
              AI가 기계 손과 몸체를 얻어 로봇이 되더라도, 책임을 얻지는 못합니다. 
              책임이 없는 존재는 역사의 주체가 될 수 없으므로, 
              접지회에는 두려워할 디스토피아나 종말이 없습니다.
            </p>
            <div className="pt-3 border-t border-[#262421] text-xs text-[#736C63]">
              영원한 실재의 평온
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
