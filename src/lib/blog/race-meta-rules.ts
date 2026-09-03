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

// ─────────────────────────────────────────────────────────────
// deadline-strip 감시 — raceMeta 를 안 쓰는 글이 조용히 낡는 것을 막는다
// ─────────────────────────────────────────────────────────────

/**
 * 손으로 박은 상대 시간 표현. 쓸 때는 맞지만 **날짜가 지나면 아무 신호 없이 거짓이 된다.**
 * 2026-09-01 에 부산브릿지 글이 "접수 개시 8월 24일 — 이번 주 월요일입니다"로 남아 있었다.
 */
const RELATIVE_TIME =
  /이번\s?주|다음\s?주|지난\s?주|이번\s?달|오늘|내일|모레|어제|D-\d+|며칠\s?뒤|곧\s?열립니다|임박했습니다/;

/**
 * 자동 판정의 근거가 되는 날짜를 하나라도 갖고 있는가.
 * 없으면 이 글은 **날짜 기반 검사의 사각지대**에 놓인다 — 마감이 지나도 아무도 모른다.
 */
function hasDateAnchor(post: BlogPost): boolean {
  return Boolean(post.raceMeta?.raceDate || post.event?.startDate);
}

/** deadline-strip 안쪽 텍스트만 뽑는다(태그 제거). 없으면 null. */
export function extractStripText(content: string): string | null {
  const m = content.match(/<div class="deadline-strip"[^>]*>([\s\S]*?)<\/div>/);
  if (!m) return null;
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * 판정 근거 없이 deadline-strip 을 손으로 관리하는 글의 허용 기준선(래칫).
 *
 * 2026-09-01 최초 측정 시 10편이었다. **이 숫자는 오직 내려가기만 해야 한다** —
 * 새 글은 raceMeta 를 쓰거나 최소한 event.startDate 를 넣어야 하고,
 * 기존 글을 손볼 때 앵커를 채웠다면 이 값을 함께 낮춘다.
 */
export const STRIP_WITHOUT_ANCHOR_BASELINE = 4; // 2026-09-03 10→4: 메이저 5편·디즈니·보스턴에 event 앵커 추가. 남은 4편(SC 레벨 프리뷰·런칭, 10월 펀런 비교, 스우시 러너스)은 대회 글이 아니라 앵커가 부적절

/**
 * deadline-strip 을 가진 글 전체를 훑는다. raceMeta 유무와 무관하게 적용된다는 점이
 * `checkRaceMeta` 와 다르다 — 사각지대를 만드는 건 정확히 "raceMeta 를 안 쓴 글"이기 때문이다.
 */
export function checkDeadlineStrips(posts: BlogPost[]): {
  issues: RaceMetaIssue[];
  withoutAnchor: string[];
} {
  const issues: RaceMetaIssue[] = [];
  const withoutAnchor: string[] = [];

  for (const post of posts) {
    const strip = extractStripText(post.content);
    if (strip === null) continue;

    if (!hasDateAnchor(post)) withoutAnchor.push(post.slug);

    const hit = strip.match(RELATIVE_TIME);
    if (hit) {
      issues.push({
        level: 'warn',
        rule: 'strip-relative-time',
        slug: post.slug,
        message: `deadline-strip 에 상대 시간 표현("${hit[0]}")이 있습니다 — 날짜가 지나면 조용히 거짓이 됩니다. 절대 날짜로 바꾸세요`,
      });
    }
  }

  if (withoutAnchor.length > STRIP_WITHOUT_ANCHOR_BASELINE) {
    issues.push({
      level: 'error',
      rule: 'strip-without-anchor',
      slug: withoutAnchor[withoutAnchor.length - 1],
      message:
        `deadline-strip 은 있는데 raceMeta.raceDate 도 event.startDate 도 없는 글이 ` +
        `${withoutAnchor.length}편입니다(기준선 ${STRIP_WITHOUT_ANCHOR_BASELINE}편). ` +
        `날짜 기반 검사가 닿지 않아 마감이 지나도 잡히지 않습니다 — 새 글에는 앵커를 넣으세요`,
    });
  }

  return { issues, withoutAnchor };
}
