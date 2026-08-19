import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { FilmTexture } from "../../components/FilmTexture";
import { COLORS, FONT, MONO, RACE_META, SATURDAY_COPY } from "../../theme";

// 16:9 — 좌측에 거대한 11 / 15, 우측 하단에 대회명과 결말 훅. blackout으로 닫는다.
export const RaceTargetWebScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.asphalt, color: COLORS.paper }}>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 78% 30%, rgba(243,204,124,.2), transparent 26%), linear-gradient(112deg, transparent 0 70%, rgba(243,204,124,.06) 70% 80%, transparent 80%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 110,
          top: 132,
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
          left: 96,
          top: 300,
          display: "flex",
          alignItems: "baseline",
          color: COLORS.paper,
          fontFamily: FONT,
          fontSize: 430,
          fontWeight: 920,
          lineHeight: 0.8,
          letterSpacing: "-0.095em",
          opacity: interpolate(frame, [0, 12, 58, 66], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [0, 23], [1.6, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: `${interpolate(frame, [0, 23], [340, 0], {
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
          right: 110,
          bottom: 120,
          width: 620,
          paddingTop: 34,
          borderTop: "2px solid rgba(212,205,196,.28)",
          textAlign: "right",
          opacity: interpolate(frame, [18, 32, 58, 66], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div style={{ fontFamily: FONT, fontSize: 58, fontWeight: 900, letterSpacing: "-0.055em" }}>
          {RACE_META.name}
        </div>
        <div style={{ marginTop: 36, fontFamily: FONT, fontSize: 42, fontWeight: 800, lineHeight: 1.4, letterSpacing: "-0.04em", wordBreak: "keep-all" }}>
          {SATURDAY_COPY.race.hook}
        </div>
      </div>

      <AbsoluteFill
        style={{
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 110px",
          backgroundColor: "#050505",
          opacity: interpolate(frame, [62, 73], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <div style={{ color: "rgba(212,205,196,.5)", fontFamily: MONO, fontSize: 20, fontWeight: 600, letterSpacing: "0.2em" }}>
          첫 번째 이야기
        </div>
        <div style={{ marginTop: 30, display: "flex", alignItems: "baseline", gap: 44 }}>
          <span style={{ color: COLORS.signal, fontFamily: FONT, fontSize: 168, fontWeight: 920, lineHeight: 0.82, letterSpacing: "-0.075em" }}>
            TO BE
          </span>
          <span style={{ color: COLORS.paper, fontFamily: FONT, fontSize: 168, fontWeight: 920, lineHeight: 0.82, letterSpacing: "-0.07em" }}>
            CONTINUED
          </span>
        </div>
        <div style={{ marginTop: 44, color: "rgba(212,205,196,.45)", fontFamily: MONO, fontSize: 18, fontWeight: 600, letterSpacing: "0.18em" }}>
          {SATURDAY_COPY.race.next}
        </div>
      </AbsoluteFill>
      <FilmTexture scene="05 · 그날" />
    </AbsoluteFill>
  );
};
