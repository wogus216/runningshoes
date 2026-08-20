// 웹(/saturday)의 --sat-* 토큰과 같은 값이다. 한쪽만 바꾸면 영상과 페이지가 어긋난다.
// 근거: 크루 실제 사진 실측 (docs/superpowers/design/saturday-design-system.md §4)
export const COLORS = {
  asphalt: "#060809",
  asphaltSoft: "#1c2430",
  bluehour: "#133142",    // 단톡 비트 배경 (웹 --sat-bluehour)
  paper: "#d4cdc4",
  paperDeep: "#efe9e1",   // 하늘 최고광 (웹 --sat-paper-deep)
  ink: "#0a1013",
  signal: "#f3cc7c",      // 일출컷의 해. 어두운 면 위 전용
  signalDark: "#7a4520",  // 밝은 종이면 위 글자·선 (노랑은 여기서 대비 1.3:1)
  concrete: "#afaea0",
} as const;

export const FONT = '"Pretendard Saturday", "Apple SD Gothic Neo", sans-serif';
export const MONO = 'ui-monospace, "SFMono-Regular", Menlo, monospace';

// 로스터·카피는 여기 적지 않는다. 앱 정본(src/lib/data/challenge/saturday.ts)에서 온다.
// 기존 사용처가 theme에서 MEMBERS를 가져오고 있어 통로만 유지한다.
export { MEMBERS, DISTANCE_TOTALS, RACE_META, SATURDAY_COPY, CREW_SIZE, REEL_PHOTOS, ARCHIVE_COUNTS, ARCHIVE_LINES } from "./shared";

export const REEL = {
  fps: 30,
  durationInFrames: 450,
  width: 1080,
  height: 1920,
} as const;

// 웹 Hero용 16:9 — 릴과 같은 장면 순서·자산·타이밍, 레이아웃만 데스크톱 재배치
export const WEB = {
  fps: 30,
  durationInFrames: 450,
  width: 1920,
  height: 1080,
} as const;

export const SCENES = {
  coldOpen: { from: 0, duration: 72 },
  start: { from: 72, duration: 72 },
  assemble: { from: 144, duration: 132 },
  hook: { from: 276, duration: 84 },
  race: { from: 360, duration: 90 },
} as const;
