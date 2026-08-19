import { AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { FilmTexture } from "../components/FilmTexture";
import { COLORS, FONT, MONO, SATURDAY_COPY } from "../theme";

export const HookScene: React.FC = () => {
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
          scale: interpolate(frame, [0, 84], [1.13, 1.03], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: `0px ${interpolate(frame, [0, 84], [36, -24], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}px`,
          filter: "contrast(1.18) saturate(.58) brightness(.38)",
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(6,8,9,.42) 0%, rgba(6,8,9,.1) 36%, rgba(6,8,9,.9) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 82,
          right: 82,
          top: 600,
          color: COLORS.paper,
          fontFamily: FONT,
          fontSize: 138,
          fontWeight: 920,
          lineHeight: 0.88,
          letterSpacing: "-0.075em",
          maxWidth: 800,
          wordBreak: "keep-all",
          clipPath: `inset(0 ${interpolate(frame, [6, 24], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}% 0 0)`,
          translate: `0 ${interpolate(frame, [6, 24], [76, 0], {
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
          left: 82,
          top: 906,
          width: interpolate(frame, [18, 38], [0, 740], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          height: 14,
          backgroundColor: COLORS.signal,
          rotate: "-2deg",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 82,
          bottom: 182,
          color: "rgba(212,205,196,.66)",
          fontFamily: MONO,
          fontSize: 22,
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
