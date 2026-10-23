import type { CompareItem } from '@/contexts/compare-context';

/** 비교함 최대 개수 — compare-context 와 공유 */
export const MAX_COMPARE_ITEMS = 4;

/**
 * 탭 안에서 비교함을 이어 붙이는 저장 키(sessionStorage).
 * 모바일은 광고 실험으로 내부 이동이 전체 페이지 로드라(full-reload-nav.tsx) 메모리 상태만으로는
 * 페이지를 넘길 때마다 비교함이 비워졌다 — 데스크톱만 누적됐다(2026-10-23 점검).
 * 탭을 닫으면 사라지는 sessionStorage 로 둔다(사용자 데이터 보관이 목적이 아니다).
 */
export const COMPARE_STORAGE_KEY = 'compare-list-v1';

/** 저장값을 검증해 복원한다 — 형식이 깨졌거나 접근이 막혀도 빈 목록으로 조용히 시작한다 */
export function parseStoredCompare(raw: string | null): CompareItem[] {
  if (!raw) return [];
  try {
    const arr: unknown = JSON.parse(raw);
    if (!Array.isArray(arr)) return [];
    return arr
      .filter((x): x is CompareItem => !!x && typeof x === 'object' && typeof (x as CompareItem).slug === 'string'
        && typeof (x as CompareItem).brand === 'string' && typeof (x as CompareItem).name === 'string')
      .slice(0, MAX_COMPARE_ITEMS);
  } catch {
    return [];
  }
}
