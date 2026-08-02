/**
 * 썸네일 문구 파생.
 *
 * 이 사이트의 블로그 제목은 `주제 | 후크 — 부연` 구조가 일관된다.
 * 첫 구분자 앞을 제목으로, 그 다음 조각을 부제로 쓴다.
 * 파싱이 어색한 글은 OVERRIDES 로 손으로 고친다 — 자동 파생은 초안일 뿐이다.
 */

export type ThumbCopy = { kicker: string; title: string; subtitle: string; data: string };

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
    data: '',
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
    // 출처: posts/2026-07.ts 본문 표 — 가격 179,000원(line 3612), 무게 249g 실측(line 3604),
    // RunRepeat 종합 93/100(line 3644). 셋 다 제목·부제에 없는 실측치.
    data: '179,000원 · 249g · 종합 93/100',
  },
  // 원제목 "... | 7/1 출시 — 폼·스택 그대로, 어퍼만 바뀐 신형 살 이유 있나"
  // 자동 파생 부제 "7/1 출시"는 출시일이 이미 지나(오늘 2026-08-02) 낡은 정보다.
  // 다음 조각(비교 글의 실제 결론)으로 교체.
  'hoka-clifton-11-vs-10-comparison': {
    subtitle: '폼·스택 그대로, 어퍼만 바뀐 신형 살 이유 있나',
    // 출처: posts/2026-06.ts 본문 표 — 무게 공식 280g·핸즈온 실측 258g(line 1241),
    // 한국 정가 199,000원(추정, line 1246). 출시 전 신상이라 실측·추정을 구분해 표기.
    data: '공식 280g·실측 258g · 199,000원(추정)',
  },
  // 출처: posts/2026-07.ts 본문 표 — 가격 $165(line 3509), 무게 296g(+16g, line 3512),
  // Believe in the Run Tier B(line 3516/3527). 제목엔 없는 실측·평가치.
  'hoka-clifton-pro-preview-2026': {
    data: '$165 · 296g(+16g) · Tier B',
  },
  // 출처: posts/2026-06.ts 본문 — 무게 298g(line 9302), 실측 힐 스택 36.8mm(line 9303),
  // SA(충격흡수) 132(line 9304). 신발 DB(shoes/asics/asics-gel-kayano-33.ts)의
  // weight:298, stackHeight.heel(detailedSpecs 36.8mm)와 대조 일치 확인.
  // 본문의 "209,000원"은 DB price(199000)와 불일치해 가격은 데이터 줄에서 제외.
  'asics-gel-kayano-33-review': {
    data: '298g · 힐 36.8mm · SA 132',
  },
  // 출처: posts/2026-05.ts 본문 표 — 힐 SA 125→131(line 4888), 힐 스택 +2.4mm(line 4884).
  // 제목은 가격(1만원 차이)만 말하므로 스펙 변화로 보완.
  'nike-pegasus-41-vs-42-comparison': {
    data: '힐 SA 125→131 · 스택 +2.4mm',
  },
  // 출처: posts/2026-06.ts 본문 표 — 스택 힐/전족 47/42mm(line 10792), 무게 220~246g(line 10791),
  // 중국 공식가 CNY 599(line 10805).
  'li-ning-red-hare-9-ultra-budget-supertrainer': {
    data: '스택 47/42mm · 220~246g · CNY 599',
  },
  // 출처: posts/2026-06.ts 본문 표 — 3종 직구가(line 7655~7657): 울트라 ~15만, 프로 ~14만, 베이스 ~9.5만원.
  'li-ning-red-hare-9-lineup-2026': {
    data: '울트라 15만·프로 14만·베이스 9.5만원',
  },
  // 출처: posts/2026-05.ts 본문 표 — 무게 v14 295g/v15 330g(line 3072), 드롭 v14 9mm/v15 6mm(line 3075).
  'new-balance-860-v14-vs-v15-comparison': {
    data: 'v14 295g·9mm / v15 330g·6mm',
  },
  // 출처: posts/2026-05.ts stat-grid — 무게 286g(line 10740), 힐 스택 36mm(line 10745);
  // 본문 표 SA 131(line 10792). 제목의 "16만원"과 중복을 피해 가격 대신 스펙 수치로 구성.
  'nike-pegasus-42-review': {
    data: '286g · 힐 스택 36mm · SA 131',
  },
  // 출처: posts/2026-05.ts 본문 — 드롭 4-6mm(line 7003), 2026년 11월 시카고 마라톤 직전 예상(line 7009),
  // 글로벌 정가 $285~330 예상(line 7010).
  '2026-nike-alphafly-4-prototype': {
    data: '드롭 4-6mm · 11월 시카고 직전 · $285~330',
  },
  // '2026-mudo-run-gyeongju' 는 의도적으로 미등록 — 본문이 "종목·참가비·접수 일정·접수처
  // 모두 미발표"라고 명시한다(posts/2026-07.ts line 2603). 검증 가능한 수치가 없어 data 를
  // 비운다(기본값 '' 유지). 규칙선·데이터 줄이 통째로 사라진다.
};
