/**
 * 썸네일 문구 파생.
 *
 * 이 사이트의 블로그 제목은 `주제 | 후크 — 부연` 구조가 일관된다.
 * 첫 구분자 앞을 제목으로, 그 다음 조각을 부제로 쓴다.
 * 파싱이 어색한 글은 OVERRIDES 로 손으로 고친다 — 자동 파생은 초안일 뿐이다.
 */

export type ThumbCopy = { kicker: string; title: string; subtitle: string };

const CATEGORY_LABELS: Record<string, string> = {
  guide: '가이드',
  review: '리뷰',
  news: '뉴스',
  tips: '팁',
};

/** `|` 와 `—` 중 먼저 나오는 것을 첫 구분자로 삼는다. */
export function splitTitle(raw: string): { head: string; rest: string } {
  const parts = raw.split(/\s+[|—]\s+/);
  return {
    head: (parts[0] ?? '').trim(),
    rest: (parts[1] ?? '').trim(),
  };
}

export function deriveCopy(post: { title: string; category: string }): ThumbCopy {
  const { head, rest } = splitTitle(post.title);
  return {
    kicker: CATEGORY_LABELS[post.category] ?? '',
    title: head,
    subtitle: rest,
  };
}

/**
 * 자동 파생이 어색한 글의 수동 교정.
 * Task 3·4에서 육안 검수하며 채운다. 비어 있어도 파이프라인은 돈다.
 */
export const OVERRIDES: Record<string, Partial<ThumbCopy>> = {
  // 원제목 "노바블라스트 5 vs 6 | 세대 비교 — 전족 FF Turbo Squared로 뭐가 달라졌나, ..."
  // 자동 파생 부제 "세대 비교"는 정보가 없다. 다음 조각(변경점 핵심)으로 교체.
  'asics-novablast-5-vs-6-comparison-2026': {
    subtitle: '전족 FF Turbo Squared로 뭐가 달라졌나',
  },
  // 원제목 "... | 7/1 출시 — 폼·스택 그대로, 어퍼만 바뀐 신형 살 이유 있나"
  // 자동 파생 부제 "7/1 출시"는 출시일이 이미 지나(오늘 2026-08-02) 낡은 정보다.
  // 다음 조각(비교 글의 실제 결론)으로 교체.
  'hoka-clifton-11-vs-10-comparison': {
    subtitle: '폼·스택 그대로, 어퍼만 바뀐 신형 살 이유 있나',
  },
};
