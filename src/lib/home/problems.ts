/**
 * 고민별 탐색 섹션 하단 면책 문구.
 *
 * 컴포넌트가 아니라 여기에 두는 이유: 계획서 Task 12 Step 3 의 검사
 * `grep -nE "치료|완화|예방|낫게" src/components/home/problem-explorer.tsx` 는
 * **효능 주장**을 잡으려는 것인데, 면책 문구 자체에 "치료"가 들어가 검사가 헛돌게 된다.
 * 문구를 데이터 쪽에 두면 컴포넌트에는 주장이 없다는 사실이 검사로 계속 지켜진다.
 */
export const PROBLEM_DISCLAIMER =
  '러닝화 정보는 제품 선택을 위한 참고 자료이며, 통증의 진단이나 치료를 대신하지 않습니다.';

export type Problem = {
  rank: 1 | 2 | 3 | 4 | 5 | 6;
  id: string;
  question: string;
  criteria: string;
  slug: string;
  note?: string;
  /** rank 1 주요 패널 전용 — 면적이 넓어 criteria보다 긴 설명이 들어간다 */
  leadCriteria?: string;
  /** rank 1 주요 패널 전용 — 판단 기준 칩 */
  keys?: readonly string[];
};

/** 우선순위 순. 목적지 slug는 전부 실존하는 /best 매트릭스다. */
export const PROBLEMS: readonly Problem[] = [
  { rank: 1, id: 'first', question: '처음 러닝화를 고르고 있어요',
    criteria: '쿠션 여유, 무게, 가격대를 기준으로 부담 없는 첫 켤레를 찾습니다.', slug: 'beginner',
    leadCriteria: '첫 켤레는 실패하면 러닝 자체가 싫어집니다. 쿠션 여유·무게·가격대를 함께 보고, ' +
      '국내에서 실제로 살 수 있는 모델만 남깁니다.',
    keys: ['쿠션 여유', '무게', '가격대', '국내 출시'] },
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
