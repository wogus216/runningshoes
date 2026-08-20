import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { FilmTexture } from "../components/FilmTexture";
import { COLORS, FONT, MONO, RACE_META, REEL_SITE_LABEL, SATURDAY_COPY } from "../theme";

export const RaceTargetScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.asphalt, color: COLORS.paper }}>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 82% 36%, rgba(243,204,124,.22), transparent 25%), linear-gradient(118deg, transparent 0 67%, rgba(243,204,124,.06) 67% 79%, transparent 79%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 82,
          top: 260,
          color: "rgba(212,205,196,.64)",
          fontFamily: MONO,
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: "0.18em",
          opacity: interpolate(frame, [2, 12, 58, 66], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {SATURDAY_COPY.race.eyebrow}
      </div>
      <div
        aria-label="11월 15일"
        style={{
          position: "absolute",
          left: 70,
          top: 520,
          display: "flex",
          alignItems: "baseline",
          color: COLORS.paper,
          fontFamily: FONT,
          fontSize: 264,
          fontWeight: 920,
          lineHeight: 0.8,
          letterSpacing: "-0.095em",
          opacity: interpolate(frame, [0, 12, 58, 66], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [0, 23], [1.72, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: `${interpolate(frame, [0, 23], [300, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}px 0px`,
          filter: `blur(${interpolate(frame, [0, 18], [18, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}px)`,
        }}
      >
        <span>11</span>
        <span style={{ color: COLORS.signal }}>/</span>
        <span>15</span>
      </div>
      <div
        style={{
          position: "absolute",
          left: 82,
          right: 82,
          top: 862,
          paddingTop: 36,
          borderTop: "2px solid rgba(212,205,196,.28)",
          opacity: interpolate(frame, [18, 32, 58, 66], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div style={{ fontFamily: FONT, fontSize: 64, fontWeight: 900, letterSpacing: "-0.055em" }}>
          {RACE_META.name}
        </div>
        <div style={{ marginTop: 62, fontFamily: FONT, fontSize: 54, fontWeight: 800, lineHeight: 1.35, letterSpacing: "-0.04em", maxWidth: 780, wordBreak: "keep-all" }}>
          {SATURDAY_COPY.race.hook}
        </div>
      </div>

      <AbsoluteFill
        style={{
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 82px",
          backgroundColor: "#050505",
          opacity: interpolate(frame, [62, 73], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        {/* 엔드카드(2026-08-20 교체). 전에는 'TO BE CONTINUED' 가 128px 로 서 있었다 —
            15초를 다 본 사람에게 마지막으로 남는 게 장식 영문이면 갈 곳이 없다.
            페이지에서도 같은 이유로 걷어낸 물건이다. '다음 편이 있다'는 뜻은
            아래 race.next 한 줄이 이미 하고 있으니 큰 자리는 주소에 준다. */}
        <div style={{ color: "rgba(212,205,196,.5)", fontFamily: MONO, fontSize: 20, fontWeight: 600, letterSpacing: "0.2em" }}>
          첫 번째 이야기
        </div>
        <div style={{ marginTop: 40, color: COLORS.paperDeep, fontFamily: FONT, fontSize: 92, fontWeight: 920, lineHeight: 1.02, letterSpacing: "-0.06em" }}>
          단톡 그대로,
        </div>
        <div style={{ color: COLORS.paperDeep, fontFamily: FONT, fontSize: 92, fontWeight: 920, lineHeight: 1.02, letterSpacing: "-0.06em" }}>
          사진 그대로.
        </div>
        {/* 주소는 mono 로 둔다 — 문장이 아니라 '입력하는 것'으로 읽혀야 한다 */}
        <div
          style={{
            marginTop: 46,
            paddingBottom: 14,
            width: "fit-content",
            borderBottom: `3px solid ${COLORS.signal}`,
            color: COLORS.signal,
            fontFamily: MONO,
            fontSize: 42,
            fontWeight: 700,
            letterSpacing: "0.01em",
          }}
        >
          {REEL_SITE_LABEL}
        </div>
        <div style={{ marginTop: 44, color: "rgba(212,205,196,.45)", fontFamily: MONO, fontSize: 18, fontWeight: 600, letterSpacing: "0.18em" }}>
          {SATURDAY_COPY.race.next}
        </div>
      </AbsoluteFill>
      <FilmTexture scene="05 · 그날" />
    </AbsoluteFill>
  );
};
