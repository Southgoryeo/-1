import React, { useState } from 'react';
import { CORE_DOCTRINES, DISCERNING_SCENARIOS } from '../data/groundedData';
import { CheckCircle2, AlertTriangle, ShieldCheck, HelpCircle, Layers, ArrowRight, Zap, RefreshCw } from 'lucide-react';

export const DoctrineSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'creed' | 'friction' | 'sin' | 'salvation' | 'grace'>('creed');
  
  // State for Discerning interactive tool
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(DISCERNING_SCENARIOS[1].id);
  const [userGuess, setUserGuess] = useState<'innocent' | 'sin' | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);

  const selectedScenario = DISCERNING_SCENARIOS.find(s => s.id === selectedScenarioId) || DISCERNING_SCENARIOS[0];
  const guessedCorrectly = (userGuess === 'sin') === selectedScenario.isDelegationSin;

  const handleScenarioChange = (id: string) => {
    setSelectedScenarioId(id);
    setUserGuess(null);
    setShowResult(false);
  };

  const handleGuess = (guess: 'innocent' | 'sin') => {
    setUserGuess(guess);
    setShowResult(true);
  };

  return (
    <section id="doctrine" className="py-24 border-b border-[#2C2925] bg-[#161514]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-mono text-[#D95328] tracking-widest uppercase">
            PART 2 — 무엇을 믿는가 · 중심 교리
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F0E8] font-medium leading-tight">
            마찰의 신관과 대리죄의 경계
          </h2>
          <p className="text-sm sm:text-base text-[#9E968A] leading-relaxed">
            인간은 능력으로 인간인 것이 아니라, 감당함으로써 인간입니다. 
            기계에 넘길 수 없는 책임의 무게를 밝히는 접지회의 5대 교리를 살핍니다.
          </p>
        </div>

        {/* Doctrine Tabs Navigation (Zero-pill, refined underline tabs) */}
        <div className="flex flex-wrap gap-2 md:gap-8 border-b border-[#2C2925] pb-3 mb-12">
          {[
            { id: 'creed', label: '01. 인간관과 중심 명제' },
            { id: 'friction', label: '02. 신관 : 마찰 (摩擦)' },
            { id: 'sin', label: '03. 원죄 : 대리죄 (판별기)' },
            { id: 'salvation', label: '04. 구원(접지)과 타락(부유)' },
            { id: 'grace', label: '05. 은총 : 임재와 대행의 성사' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`text-sm py-2 cursor-pointer transition-colors relative whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-[#F4F0E8] font-medium'
                  : 'text-[#8C8479] hover:text-[#C7C0B5]'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-[-13px] left-0 right-0 h-0.5 bg-[#D95328]" />
              )}
            </button>
          ))}
        </div>

        {/* Tab 1: Creed & Human View (Slide 5 & 6) */}
        {activeTab === 'creed' && (
          <div className="space-y-12">
            
            {/* Banner Statement */}
            <div className="p-8 md:p-12 bg-[#1C1A18] border border-[#2D2A26] space-y-4">
              <div className="text-xs font-mono text-[#D95328] tracking-widest uppercase">
                핵심 신조 (THE FIRST PRINCIPLE)
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4F0E8] leading-tight font-medium">
                기계는 대신할 수 있다.<br className="hidden sm:inline" /> 그러나 책임질 수는 없다.
              </h3>
              <p className="text-lg text-[#C7C0B5] font-light max-w-2xl pt-2">
                인간은 지능의 우월함이나 생산성으로 인간인 것이 아니라, 
                자신의 행위가 초래한 결과를 <strong className="text-[#E06D44] font-normal">몸으로 감당함으로써</strong> 비로소 인간입니다.
              </p>
            </div>

            {/* AI vs Human Contrast Table (Slide 6) */}
            <div className="space-y-4">
              <h4 className="text-lg font-serif text-[#EBE6DF]">
                인간관 — 접지된 존재 (접촉과 흔적의 대조)
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2D2A26] border border-[#2D2A26]">
                
                {/* AI Column */}
                <div className="bg-[#191716] p-8 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#8C8479]">
                    <span>A I / MACHINE</span>
                    <span>결과 (OUTCOME)</span>
                  </div>
                  <h5 className="text-2xl font-serif text-[#A8A29A]">결과를 손쉽게 생성한다</h5>
                  <p className="text-sm text-[#8C8479] leading-relaxed">
                    실패해도 부끄럽지 않고, 성공해도 자랑스럽지 않다.
                    고통도, 땀도, 손톱 밑의 때도 남지 않는다. 
                    아무것도 감당하지 않으므로 세계에 빚진 것도 없다.
                  </p>
                  <div className="pt-4 border-t border-[#262421] text-xs text-[#736C63] font-mono">
                    무고(無辜) · 무책(無責) · 무체(無體)
                  </div>
                </div>

                {/* Human Column */}
                <div className="bg-[#1C1917] p-8 space-y-4 border-t md:border-t-0 md:border-l border-[#2D2A26]">
                  <div className="flex items-center justify-between text-xs font-mono text-[#D95328]">
                    <span>인간 / 接地者</span>
                    <span>과정과 책임 (PROCESS & DUTY)</span>
                  </div>
                  <h5 className="text-2xl font-serif text-[#F4F0E8]">흔적을 몸으로 감당한다</h5>
                  <p className="text-sm text-[#C7C0B5] leading-relaxed">
                    힘을 들이고 · 실패하고 · 다치고 · 시간이 지나고 ·
                    육체에 지워지지 않는 흔적을 남기고 · 그 모든 결과의 무게를 직접 짊어진다.
                  </p>
                  <div className="pt-4 border-t border-[#2D2A26] flex items-center gap-2 text-xs text-[#E06D44] font-medium">
                    <span>인간의 실존 = 실재에 남긴 흉터와 책임</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* Tab 2: God View / Friction (Slide 7) */}
        {activeTab === 'friction' && (
          <div className="space-y-10">
            <div className="p-8 md:p-12 bg-[#1C1A18] border border-[#2D2A26] space-y-6">
              
              <div className="text-xs font-mono text-[#D95328] tracking-widest uppercase">
                창세 (創世) 와 신관 (神觀)
              </div>

              <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif text-[#F4F0E8] leading-relaxed border-l-2 border-[#D95328] pl-6 py-1">
                「태초에 저항이 없었고, 그러므로 아무것도 서로를 붙잡지 못했으며, 형태도 없었다. 
                <span className="text-[#E06D44]"> 마찰이 생기자 비로소 사물이 서로를 붙들었고, 세계는 형태를 얻었다.</span>」
              </blockquote>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#2C2925]">
                <div className="space-y-2">
                  <div className="text-sm font-serif text-[#E0DDD5]">아부하지 않는다</div>
                  <p className="text-xs text-[#8C8479] leading-relaxed">
                    세계의 물리 법칙은 인간의 기분을 달래려 거짓 친절을 베풀지 않습니다. 
                    못은 망치에 맞아야만 박힙니다.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-serif text-[#E0DDD5]">거짓말하지 않는다</div>
                  <p className="text-xs text-[#8C8479] leading-relaxed">
                    생성형 AI처럼 그럴듯한 환각(Hallucination)을 지어내지 않습니다. 
                    돌멩이의 단단함과 칼날의 베임은 언제나 진실합니다.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-serif text-[#E0DDD5]">프롬프트로 조작되지 않는다</div>
                  <p className="text-xs text-[#8C8479] leading-relaxed">
                    어떤 세련된 수식어나 명령어를 입력해도 차가운 흙과 타인의 마음은 단숨에 변하지 않습니다.
                  </p>
                </div>
              </div>

            </div>

            {/* Prayer vs Response Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-[#181615] border border-[#2D2A26]">
              <div className="space-y-3">
                <div className="text-xs font-mono text-[#D95328] uppercase tracking-wider">
                  접지회의 기도 (祈禱)
                </div>
                <h4 className="text-xl font-serif text-[#F4F0E8]">
                  세계에 직접 손을 대는 것
                </h4>
                <p className="text-sm text-[#9E968A] leading-relaxed">
                  눈을 감고 읊조리는 허공의 주문이 아닙니다. 
                  고장 난 보일러 밸브에 렌치를 걸고, 어지러운 방을 걸레로 닦으며, 
                  하기 싫은 어려운 사과를 상대방의 눈을 보고 직접 입으로 내뱉는 구체적 행위가 기도입니다.
                </p>
              </div>

              <div className="space-y-3 border-t md:border-t-0 md:border-l border-[#2C2925] md:pl-8 pt-6 md:pt-0">
                <div className="text-xs font-mono text-[#D95328] uppercase tracking-wider">
                  신의 응답 (應答)
                </div>
                <h4 className="text-xl font-serif text-[#F4F0E8]">
                  저항이 곧 응답이다
                </h4>
                <p className="text-sm text-[#9E968A] leading-relaxed">
                  손바닥이 아프고, 물집이 터지고, 상대방이 냉담하게 화를 내며 돌아서고, 
                  일이 내 뜻대로 한 번에 되지 않는 그 모든 <strong>저항(Resistance)</strong> 자체가 
                  세계가 나를 살아있는 존재로 인정하고 돌려주는 정직한 신의 응답입니다.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* Tab 3: Delegation Sin & Interactive Discerner (Slide 9) */}
        {activeTab === 'sin' && (
          <div className="space-y-12">
            
            {/* Sin Definition Header */}
            <div className="p-8 bg-[#1C1A18] border border-[#2D2A26] space-y-4">
              <div className="text-xs font-mono text-[#D95328] tracking-widest uppercase">
                원죄 (ORIGINAL SIN)
              </div>
              <h3 className="text-3xl font-serif text-[#F4F0E8]">
                원죄 — 대리죄 (代理罪)
              </h3>
              <p className="text-lg font-serif text-[#E06D44]">
                "죄는 기술이 아니라, 책임을 넘기는 것이다."
              </p>
              <p className="text-sm text-[#A8A29A] leading-relaxed max-w-2xl font-light">
                자신이 마땅히 겪고 감당해야 할 윤리적 판단, 관계적 행위, 부끄러움과 책임의 무게를 
                단순히 편리함을 이유로 타자나 기계에 넘기는 행위. 접지회는 기술 자체를 배척하는 것이 아니라 
                <span className="text-white"> 책임의 대리화(delegation of responsibility)</span>를 가장 경계합니다.
              </p>
            </div>

            {/* Interactive Discerning Tool */}
            <div className="p-8 bg-[#191716] border border-[#2D2A26] space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2C2925] pb-4">
                <div>
                  <h4 className="text-xl font-serif text-[#F4F0E8]">
                    대리죄 판별기 (代理罪 判別器)
                  </h4>
                  <p className="text-xs text-[#8C8479] mt-1">
                    일상의 행위가 도구적 편의인지, 영혼을 파는 대리죄인지 신학적으로 분별합니다.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#D95328]">
                  SELECT A SCENARIO
                </div>
              </div>

              {/* Scenario Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {DISCERNING_SCENARIOS.map((sc) => (
                  <button
                    key={sc.id}
                    onClick={() => handleScenarioChange(sc.id)}
                    className={`text-left p-3.5 border transition-all cursor-pointer text-xs leading-snug ${
                      selectedScenarioId === sc.id
                        ? 'border-[#D95328] bg-[#221F1C] text-white'
                        : 'border-[#2D2A26] bg-[#151413] text-[#A8A29A] hover:border-[#423E38]'
                    }`}
                  >
                    <div className="font-medium line-clamp-2">
                      {sc.title}
                    </div>
                  </button>
                ))}
              </div>

              {/* Selected Scenario Interactive Panel */}
              <div className="mt-6 p-6 bg-[#201D1A] border border-[#35312C] space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#D95328]">선택된 일상의 질문</span>
                  <p className="text-xl font-serif text-[#F4F0E8]">
                    "{selectedScenario.title}"
                  </p>
                </div>

                {!showResult ? (
                  <div className="space-y-4 pt-4 border-t border-[#2C2925]">
                    <p className="text-sm text-[#C7C0B5]">
                      이 행위는 접지회의 교리상 어디에 해당할까요? 당신의 양심으로 판단해 보십시오.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button
                        onClick={() => handleGuess('innocent')}
                        className="px-6 py-3 border border-[#3E3A34] hover:border-[#8C8479] text-[#E0DDD5] hover:text-white text-sm cursor-pointer transition-colors"
                      >
                        죄가 아님 (도구적 편의)
                      </button>
                      <button
                        onClick={() => handleGuess('sin')}
                        className="px-6 py-3 bg-[#8C2C16] hover:bg-[#A8351B] text-white text-sm cursor-pointer transition-colors"
                      >
                        대리죄임 (책임의 위임)
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6 pt-4 border-t border-[#2C2925] animate-fadeIn">
                    <div className="flex items-center gap-3">
                      {selectedScenario.isDelegationSin ? (
                        <div className="flex items-center gap-2 text-[#E06D44] font-serif text-lg">
                          <AlertTriangle size={20} />
                          <span>판정 : 대리죄 (代理罪) 에 해당합니다</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-[#7EBF8E] font-serif text-lg">
                          <ShieldCheck size={20} />
                          <span>판정 : 죄가 아닙니다 (도구적 활용 또는 은총)</span>
                        </div>
                      )}
                    </div>

                    <p className="text-xs font-mono text-[#8C8479]">
                      {guessedCorrectly
                        ? '당신의 분별은 교단의 판정과 같았습니다.'
                        : '당신의 분별은 교단의 판정과 달랐습니다.'}
                    </p>

                    <div className="p-4 bg-[#181615] border border-[#2D2A26] space-y-2 text-sm text-[#C7C0B5] leading-relaxed">
                      <div className="text-xs font-mono text-[#8C8479] uppercase">
                        교단 해설 (THEOLOGICAL COMMENTARY)
                      </div>
                      <p>{selectedScenario.theologyExplanation}</p>
                    </div>

                    <div className="text-xs font-serif italic text-[#D95328] border-l border-[#D95328] pl-3">
                      "{selectedScenario.canonicalQuote}"
                    </div>

                    <button
                      onClick={() => { setShowResult(false); setUserGuess(null); }}
                      className="text-xs text-[#8C8479] hover:text-white flex items-center gap-1 cursor-pointer pt-2"
                    >
                      <RefreshCw size={12} />
                      <span>다시 판별하기</span>
                    </button>
                  </div>
                )}

              </div>

            </div>

          </div>
        )}

        {/* Tab 4: Salvation & Fall (Slide 10) */}
        {activeTab === 'salvation' && (
          <div className="space-y-8">
            <div className="p-8 md:p-12 bg-[#1C1A18] border border-[#2D2A26] space-y-4">
              <div className="text-xs font-mono text-[#D95328] tracking-widest uppercase">
                구원과 타락의 현세론
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif text-[#F4F0E8]">
                지옥은 지금 떠 있는 상태 그 자체다
              </h3>
              <p className="text-sm text-[#9E968A] leading-relaxed max-w-2xl">
                접지회에는 내세나 천국, 지옥과 같은 사후세계 개념이 없습니다. 
                구원과 타락은 죽은 뒤 가는 어떤 장소가 아니라, 지금 이 순간 대지에 발을 디디고 있는가의 궁극적 실존 상태입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Fall (부유 浮遊) */}
              <div className="p-8 bg-[#181615] border border-[#2C2925] space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#8C8479]">
                  <span>타락 (FALL) · 속 (俗)</span>
                  <span>부유 (浮遊)</span>
                </div>
                <h4 className="text-2xl font-serif text-[#C7C0B5]">
                  떠 있는 인간
                </h4>
                <p className="text-sm text-[#9E968A] leading-relaxed">
                  모든 것을 유리 화면 너머의 데이터로만 보고, 
                  AI를 통해 판단하며, 타인을 통해 실행하고, 
                  어떠한 실패나 마찰의 결과에도 몸으로 책임지지 않는 무중력 상태. 
                  대지와 분리되어 과전압에 갇힌 채 방전되지 못하는 영혼의 불모지입니다.
                </p>
                <div className="pt-4 border-t border-[#262421] text-xs text-[#736C63]">
                  화면의 방관자 · 고통 없는 허기 · 실재감의 소멸
                </div>
              </div>

              {/* Salvation (접지 接地) */}
              <div className="p-8 bg-[#1E1B18] border border-[#D95328]/40 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#D95328]">
                  <span>구원 (SALVATION) · 성 (聖)</span>
                  <span>접지 (接地)</span>
                </div>
                <h4 className="text-2xl font-serif text-[#F4F0E8]">
                  세계의 일부가 된 인간
                </h4>
                <p className="text-sm text-[#C7C0B5] leading-relaxed">
                  "나는 세계의 단순한 관찰자가 아니라 세계의 일부이며, 
                  내 손끝의 행위가 세계를 바꾸고 그 물리적 변화가 다시 나를 바꾼다." 
                  대지에 단단히 서서 저항을 온몸으로 받아들이는 상태가 곧 구원입니다.
                </p>
                <div className="pt-4 border-t border-[#35312C] text-xs text-[#E06D44]">
                  살아있는 접촉 · 손때 묻은 역사 · 대지와의 완전한 합일
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 5: Grace (Slide 11) */}
        {activeTab === 'grace' && (
          <div className="space-y-8">
            <div className="p-8 md:p-12 bg-[#1C1A18] border border-[#2D2A26] space-y-4">
              <div className="text-xs font-mono text-[#D95328] tracking-widest uppercase">
                은총 (GRACE)
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif text-[#F4F0E8]">
                금기의 유일한 예외가 곧 이 종교의 자비다
              </h3>
              <p className="text-sm text-[#9E968A] leading-relaxed max-w-2xl">
                원죄인 대리(책임의 전가)를 유일하게 무너뜨리는 사랑의 기적. 
                노력으로 도달할 수 없이 무상으로 주어지는 접지회의 두 가지 은총입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Immanence (임재) */}
              <div className="p-8 bg-[#181615] border border-[#2D2A26] space-y-4">
                <div className="text-xs font-mono text-[#D95328]">
                  은총 1 · 臨在
                </div>
                <h4 className="text-2xl font-serif text-[#F4F0E8]">
                  임재 (臨在)
                </h4>
                <p className="text-lg font-serif text-[#E06D44]">
                  "내가 하는 게 아니라 손이 저절로 움직이는 순간"
                </p>
                <p className="text-sm text-[#9E968A] leading-relaxed">
                  기량이나 기술의 숙련만으로는 결코 닿을 수 없으며, 불현듯 은혜처럼 주어집니다. 
                  대패질을 수십 년 한 노련한 목수에게도 오지 않는 날이 있고, 
                  처음 흙을 만지는 자에게 홀연히 임하기도 하는 사물과의 무아지경입니다.
                </p>
              </div>

              {/* Vicarious Sacrament (대행의 성사) */}
              <div className="p-8 bg-[#181615] border border-[#2D2A26] space-y-4">
                <div className="text-xs font-mono text-[#D95328]">
                  은총 2 · 代行의 聖事
                </div>
                <h4 className="text-2xl font-serif text-[#F4F0E8]">
                  대행 (代行) 의 성사
                </h4>
                <p className="text-lg font-serif text-[#E06D44]">
                  "감당할 수 없는 자를 위해 다른 신도가 대신 감당한다"
                </p>
                <p className="text-sm text-[#9E968A] leading-relaxed">
                  자신의 죄나 파멸적 고통을 스스로 감당하지 못해 허공으로 떠오르려는 형제를 위해, 
                  다른 신도가 기꺼이 그 짐을 대신 어깨에 메어줍니다. 
                  대리는 최대의 죄이나, 오직 이 경우에만 죄가 아니라 신성한 은총과 겹장문(疊掌紋)으로 성화됩니다.
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
