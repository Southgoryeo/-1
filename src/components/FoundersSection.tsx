import React from 'react';

// 만든 사람들. 이 배열만 고치면 됩니다 (인원이 늘거나 줄어도 됩니다).
const CREDITS = [
  { name: "", role: "" },
  { name: "", role: "" },
  { name: "", role: "" },
  { name: "", role: "" },
];

export const FoundersSection: React.FC = () => {
  return (
    <section id="founders" className="py-24 border-b border-[#2C2925] bg-[#161514]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono text-[#D95328] tracking-widest uppercase">
            만든 사람들
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F0E8] font-medium leading-tight">
            창시자
          </h2>
          <p className="text-sm sm:text-base text-[#C7C0B5] leading-relaxed">
            접지회와 이 안내소를 함께 지은 사람들입니다.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CREDITS.map((credit, idx) => (
            <li key={idx} className="p-6 sm:p-8 bg-[#181615] border border-[#2C2925] space-y-3 min-w-0">
              <div className="text-xs font-mono text-[#D95328]">
                {String(idx + 1).padStart(2, '0')}
              </div>
              {credit.name.trim() ? (
                <h3 className="text-xl font-serif font-bold text-[#F4F0E8] break-words">{credit.name}</h3>
              ) : (
                <h3 className="text-xl font-serif font-bold text-[#8C8479]">
                  <span className="inline-block w-24 border-b border-dashed border-[#6B635A]">이름</span>
                </h3>
              )}
              {credit.role.trim() ? (
                <p className="text-sm text-[#C7C0B5] leading-relaxed break-words">{credit.role}</p>
              ) : (
                <p className="text-sm text-[#8C8479]">
                  <span className="inline-block w-40 max-w-full border-b border-dashed border-[#6B635A]">역할</span>
                </p>
              )}
            </li>
          ))}
        </ul>

        <p className="mt-12 pt-6 border-t border-[#2C2925] text-xs font-mono text-[#C7C0B5] tracking-wider">
          인간과 종교 · 조별 프로젝트 · 2026
        </p>

      </div>
    </section>
  );
};
