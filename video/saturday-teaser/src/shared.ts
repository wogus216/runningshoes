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

// 릴스 본편에서는 단톡을 뺐다(2026-08-20). SATURDAY_CHAT 을 다시 가져오는 건
// 대사를 쓰기 위해서가 아니라 '분량'을 세기 위해서다 — 아래 ARCHIVE_COUNTS.
export { RACE_META, SATURDAY_COPY, SATURDAY_CREW, SATURDAY_PHOTOS };

/**
 * 사이트에 지금 올라가 있는 분량. 스토리 스틸이 이걸 말한다.
 *
 * 세는 값이라 절대 손으로 적지 않는다 — 단톡 줄이나 사진이 늘면 문구가 따라와야 하고,
 * 실제로 "여덟 명"이 로스터만 고쳐진 채 카피에 남아 있던 사고가 이 프로젝트에 있었다.
 */
export const ARCHIVE_COUNTS = {
  chatLines: SATURDAY_CHAT.reduce((total, burst) => total + burst.lines.length, 0),
  photos: SATURDAY_PHOTOS.length,
} as const;

/**
 * REEL_SITE_LABEL(엔드카드 주소)은 2026-08-20 에 넣었다가 같은 날 뺐다 —
 * 링크를 인스타 스티커/버튼으로 붙이기로 해서 영상 안에 박을 이유가 없어졌다.
 * 되살릴 일이 생기면 SITE_URL 에서 파생시킬 것. 영상에 도메인을 직접 적으면
 * 나중에 도메인을 옮길 때 여기만 조용히 남는다.
 */

/**
 * 릴스 몽타주에 쓰는 실제 사진 — 흑백 처리는 씬에서 한다.
 *
 * 2026-08-20 에 4장 → 6장. 단톡 세 뭉치(8.8초, 릴스의 절반)를 빼면서 생긴 자리를
 * 사진에 줬다. 15초짜리에서 남의 대화를 세 화면 연속으로 읽히는 것보다,
 * 이 사람들이 실제로 같이 뛰어온 장면을 보여주는 쪽이 짧은 영상에서 더 빨리 읽힌다.
 *
 * selfie-four 는 여기 없다 — FriendsScene 배경으로 쓰므로 중복을 피한다.
 * sunrise-bridge 는 여는 컷(hero-sunrise)이라 역시 뺀다.
 */
export const REEL_PHOTOS = [
  "spring-road",
  "summer-uphill",
  "mirror",
  "track-pose",
  "blue-sky-walk",
  "race-beach",
] as const;

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
