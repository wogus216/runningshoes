export type Problem = {
  rank: 1 | 2 | 3 | 4 | 5 | 6;
  id: string;
  question: string;
  criteria: string;
  slug: string;
  note?: string;
};

/** 우선순위 순. 목적지 slug는 전부 실존하는 /best 매트릭스다. */
export const PROBLEMS: readonly Problem[] = [
  { rank: 1, id: 'first', question: '처음 러닝화를 고르고 있어요',
    criteria: '쿠션 여유, 무게, 가격대를 기준으로 부담 없는 첫 켤레를 찾습니다.', slug: 'beginner' },
  { rank: 2, id: 'wide', question: '발볼이 넓어서 선택이 어려워요',
    criteria: '와이드 출시 여부, 토박스 너비, 갑피 여유를 기준으로 찾습니다.', slug: 'wide-toebox' },
  { rank: 3, id: 'long', question: '편안하게 오래 달리고 싶어요',
    criteria: '스택 높이, 충격흡수 성향, 로커 구조를 기준으로 찾습니다.', slug: 'max-cushion' },
  { rank: 4, id: 'race', question: '기록을 줄이고 싶어요',
    criteria: '플레이트 유무, 무게, 에너지 리턴을 기준으로 찾습니다.', slug: 'racing' },
  { rank: 5, id: 'knee', question: '무릎 부담이 걱정돼요',
    criteria: '충격흡수 성향과 안정성 구조를 기준으로 살펴봅니다.', slug: 'knee-protection',
    note: '러닝화 정보는 진단이나 치료를 대신하지 않습니다.' },
  { rank: 6, id: 'all', question: '한 켤레로 다양하게 뛰고 싶어요',
    criteria: '다목적 성향, 내구성 범위, 가격 균형을 기준으로 찾습니다.', slug: 'daily-trainer' },
] as const;
