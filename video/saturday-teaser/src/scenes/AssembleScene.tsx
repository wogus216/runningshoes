import { AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { FilmTexture } from "../components/FilmTexture";
import { COLORS, DISTANCE_TOTALS, FONT, MEMBERS, MONO, SATURDAY_COPY } from "../theme";

export const AssembleScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.paper, color: COLORS.ink }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          opacity: interpolate(frame, [0, 6, 64, 72], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {MEMBERS.map((member, index) => (
          <div
            key={member.name}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRight: index === MEMBERS.length - 1 ? 0 : "2px solid rgba(212,205,196,.38)",
              clipPath: `inset(${interpolate(
                frame,
                [index * 4, index * 4 + 14],
                [100, 0],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(0.16, 1, 0.3, 1),
                },
              )}% 0 0 0)`,
            }}
          >
            <Img
              src={staticFile("images/seven-runners.webp")}
              style={{
                position: "absolute",
                top: -30,
                bottom: -30,
                left: `${-index * 154}px`,
                width: 1080,
                height: 1980,
                objectFit: "cover",
                filter: "grayscale(.25) contrast(1.12) brightness(.72)",
                scale: interpolate(frame, [0, 72], [1.12, 1.04], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 14,
                right: 14,
                bottom: 160,
                color: COLORS.paper,
                writingMode: "vertical-rl",
                textOrientation: "upright",
                fontFamily: FONT,
                fontSize: 50,
                fontWeight: 900,
                letterSpacing: "0.03em",
              }}
            >
              {member.name}
            </div>
            <div
              style={{
                position: "absolute",
                left: 14,
                bottom: 92,
                color: member.distance === "10" ? COLORS.signal : COLORS.paper,
                fontFamily: MONO,
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {member.index}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          color: COLORS.signalDark,  // 종이 배경 위
          fontFamily: FONT,
          fontSize: 190,
          fontWeight: 920,
          lineHeight: 0.8,
          letterSpacing: "-0.05em",
          opacity: interpolate(frame, [55, 64, 82, 90], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [55, 78], [1.45, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        모였다.
      </div>

      <Img
        src={staticFile("images/seven-runners.webp")}
        style={{
          position: "absolute",
          inset: -40,
          width: "calc(100% + 80px)",
          height: "calc(100% + 80px)",
          objectFit: "cover",
          opacity: interpolate(frame, [84, 96, 125, 131], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [84, 132], [1.12, 1.02], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          filter: "contrast(1.12) saturate(.68) brightness(.7)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 82,
          right: 82,
          bottom: 176,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 32,
          alignItems: "end",
          color: COLORS.paper,
          opacity: interpolate(frame, [96, 108, 126, 131], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div style={{ fontFamily: FONT, fontSize: 76, fontWeight: 900, lineHeight: 0.94, letterSpacing: "-0.06em" }}>
          {SATURDAY_COPY.crew.title}
        </div>
        <div style={{ color: COLORS.signalDark, fontFamily: MONO, fontSize: 20, fontWeight: 600, textAlign: "right", lineHeight: 1.7 }}>
          {DISTANCE_TOTALS[0]}
          <br />{DISTANCE_TOTALS[1]}
        </div>
      </div>
      <FilmTexture scene="03 · 소집" light={frame < 86} />
    </AbsoluteFill>
  );
};
