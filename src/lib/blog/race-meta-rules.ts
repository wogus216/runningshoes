import type { BlogPost } from '@/types/blog';
import { countUniqueShoeLinks } from './shoe-links';
import { parseKst } from './race-status';

export interface RaceMetaIssue {
  level: 'error' | 'warn';
  rule: string;
  slug: string;
  message: string;
}

const MAX_DISPLAY_TITLE = 40;

/**
 * raceMeta 를 가진 글에만 적용되는 구성 표준 검사.
 * 기존 70편은 raceMeta 가 없어 자동으로 대상 밖이다 —
 * "앞으로 쓰는 글부터"가 규칙이 아니라 구조로 보장된다.
 */
export function checkRaceMeta(post: BlogPost): RaceMetaIssue[] {
  const meta = post.raceMeta;
  if (!meta) return [];

  const issues: RaceMetaIssue[] = [];
  const push = (level: RaceMetaIssue['level'], rule: string, message: string) =>
    issues.push({ level, rule, slug: post.slug, message });

  if (meta.facts.length < 4 || meta.facts.length > 6) {
    push('error', 'facts-count', `facts 는 4~6개여야 합니다 (현재 ${meta.facts.length}개)`);
  }

  if (meta.highlights.length < 2 || meta.highlights.length > 4) {
    push('error', 'highlights-count', `highlights 는 2~4개여야 합니다 (현재 ${meta.highlights.length}개)`);
  }

  if (post.content.includes('class="tldr"')) {
    push('error', 'no-tldr', '대회 글에서 3줄 요약은 접수 정보 반복이라 폐지했습니다');
  }

  if (/20\d\d/.test(post.slug)) {
    push('error', 'slug-no-year', 'slug 에 연도를 넣지 않습니다 — 매년 같은 URL이 권위를 쌓습니다');
  }

  if (meta.displayTitle.length > MAX_DISPLAY_TITLE) {
    push('error', 'display-title-length', `displayTitle 은 ${MAX_DISPLAY_TITLE}자 이하여야 합니다 (현재 ${meta.displayTitle.length}자)`);
  }

  if (meta.displayTitle === post.title) {
    push('warn', 'display-title-same', 'displayTitle 이 title 과 같습니다 — 검색 제목을 복사한 것이라면 별도 필드를 둔 의미가 없습니다');
  }

  if (Number.isNaN(parseKst(meta.raceDate).getTime())) {
    push('error', 'race-date-parse', `raceDate 를 날짜로 읽을 수 없습니다: ${meta.raceDate}`);
  }

  if (meta.registrationStart && meta.registrationEnd) {
    const s = parseKst(meta.registrationStart).getTime();
    const e = parseKst(meta.registrationEnd).getTime();
    if (!Number.isNaN(s) && !Number.isNaN(e) && e < s) {
      push('error', 'registration-order', '접수 마감이 시작보다 빠릅니다 — 상태가 영구 closed 가 됩니다');
    }
  }

  const shoeLinks = countUniqueShoeLinks(post.content);
  if (shoeLinks >= 3) {
    push('warn', 'shoe-links', `수동 신발 링크가 ${shoeLinks}개라 자동 카드 브릿지가 렌더되지 않습니다`);
  }

  if (meta.elevation && meta.elevation.length > 0 && !meta.elevationSource) {
    push('warn', 'elevation-source', '고도 수치에 출처(elevationSource)가 없습니다 — 실측처럼 읽힙니다');
  }

  return issues;
}
