import React from 'react';
import { GroundedEmblem } from './GroundedEmblem';

interface FooterProps {
  onScrollTo: (id: string) => void;
  onOpenVisitModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo, onOpenVisitModal }) => {
  return (
    <footer className="bg-[#121110] border-t border-[#262421] text-[#8C8479] py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-12">

        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand & Creed Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <GroundedEmblem size="sm" />
              <div>
                <div className="text-base font-serif text-[#F4F0E8] tracking-wider">
                  접지회 接地會
                </div>
                <div className="text-xs font-mono tracking-widest text-[#736C63]">
                  THE GROUNDED · 2035
                </div>
              </div>
            </div>

            <p className="text-sm font-serif text-[#C7C0B5] leading-relaxed pt-2">
              "기계는 대신할 수 있다. 그러나 책임질 수는 없다."<br />
              인간은 능력으로 인간인 것이 아니라, 감당함으로써 인간이다.
            </p>

            <div className="text-xs text-[#736C63] leading-relaxed font-light">
              본 웹사이트는 접지회의 교리와 의례를 알리기 위한 최소한의 디지털 안내소이며, 
              모든 참된 신앙과 마찰은 오프라인 성소와 손끝의 노동에서 이루어집니다.
            </div>
          </div>

          {/* Directory Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#D95328]">
              교단 문서고 및 바로가기
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onScrollTo('origin')}
                  className="hover:text-[#F4F0E8] transition-colors cursor-pointer text-left"
                >
                  창교 신화 (첫 번째 접지와 식탁)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('doctrine')}
                  className="hover:text-[#F4F0E8] transition-colors cursor-pointer text-left"
                >
                  마찰 신관과 대리죄 판별
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('rites')}
                  className="hover:text-[#F4F0E8] transition-colors cursor-pointer text-left"
                >
                  다섯 개의 직접 하기 의례
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('sanctuary')}
                  className="hover:text-[#F4F0E8] transition-colors cursor-pointer text-left"
                >
                  토방과 화덕 성소 설계
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('journal')}
                  className="hover:text-[#F4F0E8] transition-colors cursor-pointer text-left"
                >
                  신도 일상 접지록 (接地錄)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('dialogue')}
                  className="hover:text-[#F4F0E8] transition-colors cursor-pointer text-left"
                >
                  3대 열린 질문과 토론
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('founders')}
                  className="hover:text-[#F4F0E8] transition-colors cursor-pointer text-left"
                >
                  창시자 (만든 사람들)
                </button>
              </li>
            </ul>
          </div>

          {/* Sanctuary Location & Hours */}
          <div className="md:col-span-4 space-y-3 text-xs leading-relaxed">
            <div className="text-xs font-mono uppercase tracking-widest text-[#D95328]">
              성소 참배처
            </div>
            <div>
              <p className="font-serif text-[#C7C0B5]">본부 접지소 (흙길 성소)</p>
              <p className="text-[#787168]">서울특별시 종로구 계동 흙담길 24</p>
            </div>
            <div className="pt-1">
              <p className="font-serif text-[#C7C0B5]">정전일(停電日) 공동식사</p>
              <p className="text-[#787168]">매주 토요일 일몰 ~ 일요일 일몰 (24시간 전자기기 미사용)</p>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenVisitModal}
                className="px-4 py-2 border border-[#3E3A34] hover:border-[#8C8479] text-[#E0DDD5] hover:text-white transition-colors cursor-pointer"
              >
                오프라인 방문 예약 안내
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-[#1F1E1B] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#666057]">
          <div>
            © 2035 접지회 (接地會 · THE GROUNDED). A Religion of Contact.
          </div>
          <div>
            금기: 장문의 무단 디지털 스캔 및 인쇄를 금합니다.
          </div>
        </div>

      </div>
    </footer>
  );
};
