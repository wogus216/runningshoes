// ⚠️ 자동 생성 파일 — 손으로 고치지 마세요. `npm run popular` 로 갱신합니다.
//
// GA4 실측(pagePath × screenPageViews)에서 뽑은 인기 순위입니다.
// 조회수 숫자는 일부러 담지 않습니다 — 개별 페이지 조회수가 수십~수백 규모라
// 화면에 노출하면 죽은 사이트로 읽힙니다. 순위(배열 순서)만 씁니다.
//
// 표기 규칙: "실시간 인기" 같은 문구 금지(SSG라 사실이 아님).
// `windowDays`·`generatedAt` 을 근거로 "최근 N일 기준"으로 표기하세요.

export interface PopularData {
  /** 생성일 (KST) */
  generatedAt: string;
  /** 집계 창 (일) */
  windowDays: number;
  /** 카테고리 → 인기순 slug 배열 */
  shoesByCategory: Record<string, string[]>;
  /** 직전 같은 기간 대비 조회수 증가폭 상위 */
  trendingShoes: string[];
  /** 많이 읽은 글 slug 배열 */
  posts: string[];
}

export const popular: PopularData = {
  generatedAt: '2026-08-12',
  windowDays: 28,
  shoesByCategory: {
      "입문화": [
          "puma-velocity-nitro-4"
      ],
      "데일리": [
          "adidas-adizero-evo-sl"
      ],
      "쿠션화": [
          "nike-vomero-18"
      ],
      "레이싱": [
          "asics-superblast-3"
      ],
      "안정화": [
          "asics-gel-kayano-33"
      ],
      "트레일": [
          "asics-gel-venture-10"
      ]
  },
  trendingShoes: [
      "saucony-hurricane-26",
      "hoka-mach-x-3",
      "nike-acg-zegama-trail"
  ],
  posts: [
      "asics-gel-kayano-33-review",
      "asics-go-free-run-2026",
      "nike-pegasus-41-vs-42-comparison",
      "new-balance-sc-rebel-preview-2026",
      "li-ning-red-hare-9-lineup-2026"
  ],
};
