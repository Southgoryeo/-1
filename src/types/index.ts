export interface GroundingLog {
  id: string;
  name: string;
  role: '접지자' | '동행자' | '방문인';
  date: string;
  category: '수선과 노동' | '직접 쓴 말' | '돌봄과 접촉' | '정전의 시간' | '감당의 참회';
  title: string;
  content: string;
  resistanceFelt: string; // 마찰과 저항의 감각
  verified: boolean;
  sealColor?: string;
}

export interface DiscerningScenario {
  id: string;
  title: string;
  description?: string;
  actionType: '죄 아님 (도구적 편의)' | '대리죄 (책임의 위임)';
  isDelegationSin: boolean;
  theologyExplanation: string;
  canonicalQuote: string;
}

export interface RiteItem {
  id: string;
  chinese: string;
  korean: string;
  frequency: string;
  type: string;
  summary: string;
  description: string;
  precept: string;
  detailedGuide: string[];
}

export interface SanctuarySpace {
  id: string;
  name: string;
  chinese: string;
  purpose: string;
  rules: string;
  description: string;
  quote: string;
}

export interface OpenQuestion {
  number: string;
  question: string;
  background: string;
  communityPerspectives: {
    sideA: string;
    sideB: string;
  };
}
