/**
 * 재방문 "이어보기" localStorage 유틸.
 *
 * 홈 화면이 "방금 본 신발 / 방금 비교한 두 켤레 / 방금 받은 추천 요약"을
 * 이어보기 카드로 띄우기 위한 기록·읽기 계층이다. 이 사이트는 `output: export`
 * SSG라 서버 렌더 중에는 `window`/`localStorage`가 없으므로, 읽기는 항상 안전한
 * 기본값(빈 ResumeData)을 반환하고 쓰기는 조용히 no-op 한다.
 *
 * 저장하는 필드는 slug·이름·카테고리·타임스탬프(또는 비교 slug 쌍, 추천 요약
 * 문자열)뿐이다 — 검색어·IP·사용자 식별자 등은 다루지 않는다.
 */

export type RecentShoe = { slug: string; name: string; category: string; at: number };
export type RecentCompare = { slugs: [string, string]; at: number };
export type RecentRecommend = { summary: string; at: number };
export type ResumeData = {
  shoe: RecentShoe | null;
  compare: RecentCompare | null;
  recommend: RecentRecommend | null;
};

const KEY = {
  shoe: 'arb:recent:shoe',
  compare: 'arb:recent:compare',
  recommend: 'arb:recent:recommend',
} as const;

/** SSR·프라이빗 모드 등 localStorage에 접근할 수 없는 환경에서는 null을 돌려준다. */
function store(): Storage | null {
  if (typeof window === 'undefined') return null;
  try {
    return window.localStorage;
  } catch {
    return null; // 사파리 프라이빗 모드 등, localStorage 접근 자체가 예외를 던지는 경우
  }
}

function write(key: string, value: unknown): void {
  const s = store();
  if (!s) return;
  try {
    s.setItem(key, JSON.stringify(value));
  } catch {
    // 용량 초과 등 — 기록은 부가 기능이므로 조용히 무시한다
  }
}

function read<T>(key: string): T | null {
  const s = store();
  if (!s) return null;
  try {
    const raw = s.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null; // 손상된 값(수동 편집·과거 버전 스키마 등)
  }
}

export function recordShoeView(s: Omit<RecentShoe, 'at'>): void {
  write(KEY.shoe, { ...s, at: Date.now() });
}

export function recordCompare(slugs: [string, string]): void {
  write(KEY.compare, { slugs, at: Date.now() });
}

export function recordRecommend(summary: string): void {
  write(KEY.recommend, { summary, at: Date.now() });
}

/** 삭제된 신발을 가리키는 항목은 validSlugs로 걸러내고 제외한다. */
export function readResume(validSlugs: ReadonlySet<string>): ResumeData {
  const shoe = read<RecentShoe>(KEY.shoe);
  const compare = read<RecentCompare>(KEY.compare);
  const recommend = read<RecentRecommend>(KEY.recommend);

  return {
    shoe: shoe && typeof shoe.slug === 'string' && validSlugs.has(shoe.slug) ? shoe : null,
    compare:
      compare &&
      Array.isArray(compare.slugs) &&
      compare.slugs.length === 2 &&
      compare.slugs.every((slug) => typeof slug === 'string' && validSlugs.has(slug))
        ? compare
        : null,
    recommend: recommend && typeof recommend.summary === 'string' ? recommend : null,
  };
}

export function clearResume(): void {
  const s = store();
  if (!s) return;
  Object.values(KEY).forEach((key) => {
    try {
      s.removeItem(key);
    } catch {
      // noop — 지우기 실패는 무시해도 안전하다
    }
  });
}
