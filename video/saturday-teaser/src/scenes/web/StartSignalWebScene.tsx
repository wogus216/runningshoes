import { AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { FilmTexture } from "../../components/FilmTexture";
import { TextReveal } from "../../components/TextReveal";
import { COLORS, FONT, MONO, SATURDAY_COPY } from "../../theme";

// 16:9 — 워치 클로즈업 full-bleed 뒤 발 착지가 우측에서 와이프. 문장은 좌측 하단 고정.
export const StartSignalWebScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.asphalt, color: COLORS.paper }}>
      <Img
        src={staticFile("images/watch-start.webp")}
        style={{
          position: "absolute",
          inset: -70,
          width: "calc(100% + 140px)",
          height: "calc(100% + 140px)",
          objectFit: "cover",
          objectPosition: "50% 32%",
          opacity: interpolate(frame, [0, 8, 28, 38], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [0, 38], [1.1, 1.2], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: `${interpolate(frame, [0, 38], [-30, 40], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}px 0px`,
          filter: "contrast(1.12) saturate(.7) brightness(.62)",
        }}
      />
      <Img
        src={staticFile("images/foot-strike.webp")}
        style={{
          position: "absolute",
          inset: -90,
          width: "calc(100% + 180px)",
          height: "calc(100% + 180px)",
          objectFit: "cover",
          objectPosition: "50% 64%",
          opacity: interpolate(frame, [30, 34, 65, 71], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [30, 72], [1.18, 1.06], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: `${interpolate(frame, [30, 72], [80, -26], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}px 0px`,
          filter: `contrast(1.12) saturate(.72) brightness(.66) blur(${interpolate(
            frame,
            [30, 38, 54],
            [18, 0, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          )}px)`,
          clipPath: `inset(0 0 0 ${interpolate(frame, [30, 39], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}%)`,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(90deg, rgba(6,8,9,.78) 0%, rgba(6,8,9,.18) 46%, rgba(6,8,9,.5) 100%)",
        }}
      />

      <TextReveal
        start={8}
        exitAt={30}
        style={{
          position: "absolute",
          left: 110,
          bottom: 200,
          color: COLORS.paper,
          fontFamily: FONT,
          fontSize: 88,
          fontWeight: 850,
          letterSpacing: "-0.055em",
        }}
      >
        {SATURDAY_COPY.hero.turn}
      </TextReveal>
      <TextReveal
        start={41}
        exitAt={68}
        style={{
          position: "absolute",
          left: 110,
          bottom: 180,
          color: COLORS.paper,
          fontFamily: MONO,
          fontSize: 24,
          fontWeight: 600,
          letterSpacing: "0.18em",
        }}
      >
        시계를 켰다
      </TextReveal>
      <FilmTexture scene="02 · 출발 신호" />
    </AbsoluteFill>
  );
};
