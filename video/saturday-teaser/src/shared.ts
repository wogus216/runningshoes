// 웹과 영상이 공유하는 단 하나의 정본 통로.
//
// 멤버·대회·화면 카피는 앱의 src/lib/data/challenge/saturday.ts 한 곳에만 적는다.
// 이 파일이 유일한 seam이고, 나머지 Remotion 코드는 여기서만 가져다 쓴다.
//
// 왜 필요한가: 예전에는 로스터("재춘"…)와 카피("농담은 접수됐다.")가 앱과 영상에
// 따로 적혀 있었다. 그래서 페이지에서 ASSEMBLE을 "모였다."로 바꿔도 릴은 옛 문구로
// 남았다. 데이터를 한 곳으로 모아 그 표류를 구조적으로 막는다.
//
// saturday.ts는 순수 데이터라 Next.js 런타임 의존이 없고, 타입은 `import type`이라
// 번들 시점에 지워진다. tsc는 tsconfig의 paths(@/* → ../../src/*)로 해석한다.

import {
  RACE_META,
  SATURDAY_COPY,
  SATURDAY_CREW,
} from "../../../src/lib/data/challenge/saturday";

export { RACE_META, SATURDAY_COPY, SATURDAY_CREW };

/** 영상 장면이 쓰는 표시용 멤버 목록 — 순서·인원은 앱 정본을 그대로 따른다 */
export const MEMBERS = SATURDAY_CREW.map((member, index) => ({
  index: String(index + 1).padStart(2, "0"),
  name: member.codeName,
  distance: member.distance === "풀코스" ? "42.195" : "10",
}));

const fullCount = SATURDAY_CREW.filter((m) => m.distance === "풀코스").length;
const tenKCount = SATURDAY_CREW.length - fullCount;

/** `6 × 42.195 KM` / `1 × 10 KM` — 하드코딩하지 않고 로스터에서 센다 */
export const DISTANCE_TOTALS = [
  `${fullCount} × 42.195 KM`,
  `${tenKCount} × 10 KM`,
] as const;

export const CREW_SIZE = SATURDAY_CREW.length;
