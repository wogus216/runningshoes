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
  SATURDAY_PHOTOS,
} from "../../../src/lib/data/challenge/saturday";
import { SITE_URL } from "../../../src/lib/constants";

// SATURDAY_CHAT 은 더 이상 안 가져온다 — 릴스에서 단톡 세 뭉치를 뺐다(2026-08-20).
// 단톡은 페이지가 맡는다. 되살릴 일이 생기면 이 커밋을 되돌리면 REEL_PICKS 까지 함께 온다.
export { RACE_META, SATURDAY_COPY, SATURDAY_CREW, SATURDAY_PHOTOS };

/**
 * 엔드카드에 찍히는 주소.
 *
 * 왜 필요한가: 인스타 릴스는 영상에도 캡션에도 클릭되는 링크를 못 넣는다.
 * 프로필 바이오가 유일한 클릭 경로라 3홉이고, 무엇보다 이 mp4 가 카톡으로
 * 재공유되면 출처가 통째로 사라진다 — 그때 남는 단서는 화면에 찍힌 주소뿐이다.
 *
 * 프로토콜은 뺀다. 읽고 외우거나 타이핑할 대상이지 복사할 대상이 아니다.
 */
export const REEL_SITE_LABEL = `${SITE_URL.replace(/^https?:\/\//, "")}/saturday`;

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
