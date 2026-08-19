import { AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { FilmTexture } from "../../components/FilmTexture";
import { COLORS, FONT, MONO, SATURDAY_COPY } from "../../theme";

// 16:9 — 어두운 집결 장면 위 한 줄 선언. 훅이 화면 폭을 가로지른다.
export const HookWebScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.asphalt, color: COLORS.paper }}>
      <Img
        src={staticFile("images/seven-runners.webp")}
        style={{
          position: "absolute",
          inset: -70,
          width: "calc(100% + 140px)",
          height: "calc(100% + 140px)",
          objectFit: "cover",
          objectPosition: "50% 30%",
          scale: interpolate(frame, [0, 84], [1.1, 1.02], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: `0px ${interpolate(frame, [0, 84], [24, -18], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}px`,
          filter: "contrast(1.18) saturate(.58) brightness(.36)",
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(6,8,9,.46) 0%, rgba(6,8,9,.12) 40%, rgba(6,8,9,.9) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 110,
          right: 110,
          top: 380,
          color: COLORS.paper,
          fontFamily: FONT,
          fontSize: 172,
          fontWeight: 920,
          lineHeight: 0.9,
          letterSpacing: "-0.075em",
          clipPath: `inset(0 ${interpolate(frame, [6, 24], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}% 0 0)`,
          translate: `0 ${interpolate(frame, [6, 24], [64, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}px`,
        }}
      >
        {SATURDAY_COPY.hero.hook}
      </div>
      <div
        style={{
          position: "absolute",
          left: 110,
          top: 596,
          width: interpolate(frame, [18, 38], [0, 1080], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          height: 14,
          backgroundColor: COLORS.signal,
          rotate: "-1.2deg",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 110,
          bottom: 150,
          color: "rgba(212,205,196,.66)",
          fontFamily: MONO,
          fontSize: 23,
          fontWeight: 600,
          letterSpacing: "0.12em",
          opacity: interpolate(frame, [34, 47, 74, 83], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {SATURDAY_COPY.hero.support}
      </div>
      <FilmTexture scene="04 · 접수" />
    </AbsoluteFill>
  );
};
