import React, { useEffect, useRef, useState } from 'react';

// Fades a stage in once it scrolls into view; shown immediately under prefers-reduced-motion
const Reveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const ref = useRef<HTMLLIElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <li
      ref={ref}
      className={`relative transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      } ${className}`}
    >
      {children}
    </li>
  );
};

// Numbered node sitting on the grounding line
const StageMarker: React.FC<{ number: string }> = ({ number }) => (
  <div
    aria-hidden="true"
    className="absolute left-0 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#D95328] bg-[#141312] flex items-center justify-center text-[11px] sm:text-xs font-mono text-[#E06D44]"
  >
    {number}
  </div>
);

const StageLabel: React.FC<{ number: string; children: React.ReactNode }> = ({ number, children }) => (
  <div className="text-xs font-mono text-[#D95328] tracking-widest">
    <span className="sr-only">{number}단계 — </span>
    {children}
  </div>
);

export const WorldviewSection: React.FC = () => {
  return (
    <section id="worldview" className="py-24 border-b border-[#2C2925] bg-[#141312]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono text-[#D95328] tracking-widest uppercase">
            세계관 — 다섯 단계의 추론
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F0E8] font-medium leading-tight">
            우리가 본 2035년
          </h2>
          <p className="text-sm sm:text-base text-[#C7C0B5] leading-relaxed">
            접지회는 하나의 실제 사건에서 출발해, 그 논리를 끝까지 따라가 본 결과입니다.
          </p>
        </div>

        {/* Five stages threaded on one grounding line */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-[#4A443C]"
          />

          <ol className="space-y-16 sm:space-y-20">

            {/* Stage 1 */}
            <Reveal className="pl-12 sm:pl-20">
              <StageMarker number="01" />
              <div className="bg-[#E8E2D7] text-[#1C1A18] p-6 sm:p-10 space-y-5">
                <div className="text-xs font-mono text-[#A33C17] tracking-widest">
                  <span className="sr-only">1단계 — </span>
                  실제 있었던 일 · 2025
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium leading-snug">
                  실제 있었던 일
                </h3>
                <p className="text-base leading-relaxed max-w-3xl">
                  2025년 6월, 법원 문서를 통해 한 AI 기업이 학습을 위해 수백만 권의 인쇄본을 구매해
                  제본을 절단·스캔한 뒤 원본을 폐기한 사실이 공개됐다. 내부 명칭 'Project Panama'.
                </p>
                <p className="text-base leading-relaxed max-w-3xl">
                  법원은 이 디지털화를 fair use(공정이용)로 인정했고,
                  그 근거 중 하나가 "스캔 후 원본을 파기했으므로 복제본이 늘지 않았다"는 점이었다.
                </p>
                <p className="pt-4 border-t border-[#BFB7A8] text-[11px] font-mono text-[#4A443C] leading-relaxed">
                  출처: Bartz v. Anthropic (Alsup, 2025.6.23) / 워싱턴포스트·Ars Technica 보도 (2025)
                </p>
              </div>
            </Reveal>

            {/* Stage 2 */}
            <Reveal className="pl-12 sm:pl-20">
              <StageMarker number="02" />
              <div className="space-y-5">
                <StageLabel number="2">우리가 읽은 질문</StageLabel>
                <h3 className="sr-only">우리가 읽은 질문</h3>
                <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#F4F0E8] leading-snug max-w-3xl">
                  "내용이 완전히 보존되었다면, 원본은 사라져도 괜찮은가?"
                </blockquote>
                <p className="text-base text-[#C7C0B5] leading-relaxed max-w-2xl">
                  한 책의 가치는 그 안에 기록된 정보만으로 이루어져 있을까.
                  책에는 내용 외에도 누군가 읽은 흔적, 낡아간 시간, 물질적 역사,
                  그리고 누군가와 맺었던 관계가 있다.
                </p>
              </div>
            </Reveal>

            {/* Stage 3 */}
            <Reveal className="pl-12 sm:pl-20">
              <StageMarker number="03" />
              <div className="space-y-6">
                <StageLabel number="3">확장</StageLabel>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F0E8] leading-snug">
                  그 논리가 인간에게 확장된다
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 sm:p-8 bg-[#1A1816] border border-[#2D2A26] space-y-4">
                    <div className="text-sm font-mono text-[#C7C0B5] tracking-widest">2025</div>
                    <p className="text-xl sm:text-2xl font-serif text-[#F4F0E8] leading-snug">
                      "내용이 동일하다면, 원본 책이 꼭 필요한가?"
                    </p>
                  </div>
                  <div className="p-6 sm:p-8 bg-[#1A1816] border border-[#D95328] space-y-4">
                    <div className="text-sm font-mono text-[#E06D44] tracking-widest">2035</div>
                    <p className="text-xl sm:text-2xl font-serif text-[#E06D44] leading-snug">
                      "결과가 동일하다면, 인간이 직접 해야 하는가?"
                    </p>
                  </div>
                </div>

                <ul className="text-base text-[#C7C0B5] leading-relaxed space-y-1">
                  <li>AI가 나 대신 글을 써도 결과물은 남고,</li>
                  <li>AI가 나 대신 판단해도 결정은 내려지고,</li>
                  <li>AI가 나 대신 사과문을 써도 메시지는 전달되고,</li>
                  <li>로봇이 나 대신 만들고 고쳐도 완성품은 남는다.</li>
                </ul>
              </div>
            </Reveal>

            {/* Stage 4 */}
            <Reveal className="pl-12 sm:pl-20">
              <StageMarker number="04" />
              <div className="space-y-6">
                <StageLabel number="4">위기</StageLabel>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F0E8] leading-snug">
                  그래서 생긴 위기
                </h3>

                <ul className="border-t border-[#2C2925]">
                  <li className="py-4 border-b border-[#2C2925] text-lg sm:text-xl font-serif text-[#E0DDD5]">
                    내가 하지 않아도 같은 결과가 나온다
                  </li>
                  <li className="py-4 border-b border-[#2C2925] text-lg sm:text-xl font-serif text-[#E0DDD5]">
                    내가 판단하지 않아도 더 좋은 판단이 나온다
                  </li>
                  <li className="py-4 border-b border-[#2C2925] text-lg sm:text-xl font-serif text-[#E0DDD5]">
                    내가 만들지 않아도 더 좋은 것이 만들어진다
                  </li>
                  <li className="py-4 border-b border-[#2C2925] text-lg sm:text-xl font-serif text-[#F4F0E8] font-medium">
                    그렇다면 내가 세계에 존재해야 할 이유는 무엇인가
                  </li>
                </ul>

                <div className="p-6 sm:p-8 bg-[#1C1A18] border border-[#38342F]">
                  <p className="text-base sm:text-lg text-[#E0DDD5] leading-relaxed max-w-3xl">
                    책에서 정보만 추출하고 원본을 없앨 수 있다면,
                    인간에게서 능력과 결과만 추출한 뒤 인간 자체는 불필요해지는 것은 아닌가?
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Stage 5 */}
            <Reveal className="pl-12 sm:pl-20">
              <StageMarker number="05" />
              <div className="space-y-5">
                <StageLabel number="5">응답</StageLabel>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F0E8] leading-snug">
                  그래서 왜 종교인가
                </h3>
                <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#F4F0E8] leading-snug max-w-3xl">
                  "AI의 성능을 낮춘다고 해서<br className="hidden sm:inline" />{' '}
                  '인간은 왜 필요한가'라는 질문에 답할 수는 없다."
                </blockquote>
                <p className="text-base text-[#C7C0B5] leading-relaxed max-w-2xl">
                  접지회가 필요한 이유는 AI 문제를 해결하기 위해서가 아니라,
                  AI 이후에도 인간의 존재 의미를 설명하기 위해서다.
                </p>
                <p className="text-lg sm:text-xl font-serif text-[#E06D44] leading-snug">
                  이것은 더 이상 기술의 문제가 아니라, 종교가 다뤄온 궁극적 질문이다.
                </p>
              </div>
            </Reveal>

          </ol>

          {/* The line reaches ground */}
          <div aria-hidden="true" className="relative mt-12 ml-4 sm:ml-5 h-6">
            <span className="absolute left-0 top-0 -translate-x-1/2 w-7 h-0.5 bg-[#D95328]" />
            <span className="absolute left-0 top-[7px] -translate-x-1/2 w-[18px] h-0.5 bg-[#D95328]" />
            <span className="absolute left-0 top-[14px] -translate-x-1/2 w-2 h-0.5 bg-[#D95328]" />
          </div>
        </div>

      </div>
    </section>
  );
};
