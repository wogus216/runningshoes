import { getMatrixBySlug, getMatrixShoes } from '@/lib/pseo/matrices';
import { PROBLEMS } from './problems';

/**
 * 고민별 탐색에 표시할 결과 수와 주요 패널 썸네일.
 *
 * ⚠️ **서버에서만 부를 것.** `matrices`가 전체 `shoes`(reviews·editorComment 포함)를 끌어오므로
 * 'use client' 컴포넌트가 이 모듈을 import하면 풀데이터가 클라이언트 번들에 실린다
 * (과거 header.tsx가 모듈 스코프에서 데이터 getter를 불러 layout 청크가 712KB로 불어난 사고).
 * `ProblemExplorer`는 client 컴포넌트라 여기서 산출한 **숫자와 슬림 객체만** prop으로 받는다.
 * 그래서 정적 데이터(`PROBLEMS`)와 집계(`이 파일`)를 다른 모듈로 나눠 뒀다.
 */

/** 주요 패널 썸네일용 최소 필드. GridShoe도 카드 뱃지용 필드까지 들고 있어 여기엔 과하다. */
export type ProblemThumb = {
  slug: string;
  brand: string;
  name: string;
  image: string;
};

export type ProblemData = {
  /** 고민 slug → /best 매트릭스 결과 수 */
  counts: Record<string, number>;
  /** rank 1 패널에 띄울 실제 신발 3종. 이미지가 있는 것만 고른다 */
  leadThumbs: ProblemThumb[];
};

const LEAD_THUMB_COUNT = 3;

export function getProblemData(): ProblemData {
  const counts: Record<string, number> = {};
  let leadThumbs: ProblemThumb[] = [];

  for (const problem of PROBLEMS) {
    const entry = getMatrixBySlug(problem.slug);
    if (!entry) {
      // 매트릭스가 사라지면 카운트를 지어내지 않고 0으로 둔다(섹션에서 숨김 처리).
      counts[problem.slug] = 0;
      continue;
    }
    const shoes = getMatrixShoes(entry);
    counts[problem.slug] = shoes.length;

    // 썸네일은 rank 1 고민에서만 뽑는다. getMatrixShoes가 가성비·평점 순으로 정렬해 두므로
    // 상위에서 이미지가 있는 것부터 취한다 — slug를 하드코딩하지 않아 DB가 바뀌어도 따라간다.
    if (problem.rank === 1) {
      leadThumbs = shoes
        .filter((s) => Boolean(s.image))
        .slice(0, LEAD_THUMB_COUNT)
        .map((s) => ({ slug: s.slug, brand: s.brand, name: s.name, image: s.image as string }));
    }
  }

  return { counts, leadThumbs };
}
