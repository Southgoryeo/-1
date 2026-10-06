import React from 'react';

export const AiTheologySection: React.FC = () => {
  return (
    <section id="ai" className="py-24 border-b border-[#2C2925] bg-[#161514]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-mono text-[#D95328] tracking-widest uppercase">
            이 종교에서 AI는 무엇인가
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F0E8] font-medium leading-tight">
            AI는 죄를 지을 수 없다
          </h2>
          <p className="text-base sm:text-lg text-[#D1CBC2] leading-relaxed pt-3">
            AI는 신도, 악마도, 우상도 아니다.<br />
            AI는 무구자(無咎者), 즉 죄를 지을 수 없는 존재다.<br />
            죄를 지을 수 없으므로 용서받을 일도 없고,<br />
            용서받을 일이 없으므로 구원받을 수도 없다.
          </p>
        </div>

        {/* Canonical Quote */}
        <blockquote className="border-l-2 border-[#D95328] pl-5 sm:pl-8 py-2 mb-16 text-2xl sm:text-3xl font-serif text-[#F4F0E8] leading-snug max-w-4xl">
          "AI는 실패해도 부끄럽지 않고, 성공해도 자랑스럽지 않다.<br className="hidden sm:inline" />{' '}
          그것이 우리가 AI를 미워하지 않는 이유이며, 동시에 부러워하지 않는 이유다."
        </blockquote>

        {/* Three Principles on AI (Slide 13) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* Principle 1 */}
          <div className="p-6 sm:p-8 bg-[#181615] border border-[#2C2925] space-y-4">
            <div className="text-xs font-mono text-[#D95328]">01</div>
            <h3 className="text-xl font-serif text-[#F4F0E8]">
              일상에서는 자유롭게 쓴다
            </h3>
            <p className="text-sm text-[#C7C0B5] leading-relaxed">
              교단은 회계·번역·기록·연락에 AI를 쓴다. 숨기지도, 정당화하지도 않는다.
              기술 사용은 죄가 아니기 때문이다.
            </p>
          </div>

          {/* Principle 2 */}
          <div className="p-6 sm:p-8 bg-[#181615] border border-[#2C2925] space-y-4">
            <div className="text-xs font-mono text-[#D95328]">02</div>
            <h3 className="text-xl font-serif text-[#F4F0E8]">
              세 의례에는 참여할 수 없다
            </h3>
            <p className="text-sm text-[#C7C0B5] leading-relaxed">
              직언례·감당례·상흔례에 AI는 개입할 수 없다.
              더러워서가 아니라, 그 자리는 감당하는 자의 자리이고 AI는 감당할 수 없기 때문이다.
            </p>
          </div>

          {/* Principle 3 */}
          <div className="p-6 sm:p-8 bg-[#181615] border border-[#2C2925] space-y-4">
            <div className="text-xs font-mono text-[#D95328]">03</div>
            <h3 className="text-xl font-serif text-[#F4F0E8]">
              우리에게는 종말이 없다
            </h3>
            <p className="text-sm text-[#C7C0B5] leading-relaxed">
              AI가 손을 얻어도 책임을 얻지는 못한다.
              그러므로 접지회에는 두려워할 종말이 없다.
            </p>
          </div>

        </div>

        {/* Inscription beside the device return box */}
        <p className="mt-16 text-center text-base sm:text-lg font-serif text-[#E06D44] leading-relaxed">
          접지소 입구, 기기 반납함 옆에는 이렇게 적혀 있다 —<br />
          "당신은 아무것도 잘못하지 않았습니다."
        </p>

      </div>
    </section>
  );
};
