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
  SATURDAY_CHAT,
  SATURDAY_COPY,
  SATURDAY_CREW,
  SATURDAY_PHOTOS,
} from "../../../src/lib/data/challenge/saturday";

export { RACE_META, SATURDAY_CHAT, SATURDAY_COPY, SATURDAY_CREW, SATURDAY_PHOTOS };

/**
 * 릴스는 15초라 단톡 뭉치를 통째로 못 넣는다. 줄을 골라 쓰되 두 가지는 지킨다 —
 * 문장을 고쳐 쓰지 않고, 원본 안에서의 순서를 바꾸지 않는다.
 * 어느 뭉치의 몇 번째 줄인지 인덱스로 박아둬서 정본과 대조할 수 있게 한다.
 */
const REEL_PICKS = [
  { burst: "signup", lines: [3, 4, 5] },  // 취소할걸 / 나도 취소할까… / 신청 완료했습니다!!
  { burst: "fee", lines: [1, 5, 6] },     // 용돈 다 떨어졌는데 / 부가세만이라도 / 아이스크림…
  { burst: "fear", lines: [1, 2, 5] },    // 버려지면 어케 완주함? / 앰뷸 탈 수 있나? / 그냥 믿고 따라와
] as const;

export const REEL_CHAT = REEL_PICKS.map((pick) => {
  const source = SATURDAY_CHAT.find((b) => b.id === pick.burst);
  if (!source) throw new Error(`릴스가 참조하는 단톡 뭉치가 없다: ${pick.burst}`);
  return {
    id: source.id,
    label: source.label,
    lines: pick.lines.map((i) => {
      const line = source.lines[i];
      if (!line) throw new Error(`${pick.burst} 에 ${i}번 줄이 없다`);
      return line;
    }),
  };
});

/** 릴스 몽타주에 쓰는 실제 사진 — 흑백 처리는 씬에서 한다 */
export const REEL_PHOTOS = ["spring-road", "selfie-four", "track-pose", "race-beach"] as const;

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
