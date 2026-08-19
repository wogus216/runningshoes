import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { CinematicImage } from "../components/CinematicImage";
import { FilmTexture } from "../components/FilmTexture";
import { TextReveal } from "../components/TextReveal";
import { COLORS, FONT, MONO, SATURDAY_COPY } from "../theme";

export const ColdOpenScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.asphalt, color: COLORS.paper }}>
      <CinematicImage
        src="images/laces.webp"
        duration={72}
        fromScale={1.08}
        toScale={1.18}
        fromX={-18}
        toX={30}
        fromY={16}
        toY={-28}
        style={{
          opacity: interpolate(frame, [0, 12, 58, 71], [0, 0.82, 0.82, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          filter: "contrast(1.08) saturate(.72) brightness(.72)",
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(6,8,9,.24) 0%, rgba(6,8,9,.05) 38%, rgba(6,8,9,.8) 100%)",
        }}
      />

      <div style={{ position: "absolute", left: 82, right: 82, bottom: 230 }}>
        <TextReveal
          start={24}
          exitAt={66}
          style={{
            color: "rgba(212,205,196,.58)",
            fontFamily: MONO,
            fontSize: 23,
            fontWeight: 600,
            letterSpacing: "0.16em",
            marginBottom: 34,
          }}
        >
          농담이었을 때
        </TextReveal>
        <TextReveal
          start={30}
          exitAt={68}
          style={{
            fontFamily: FONT,
            fontSize: 112,
            fontWeight: 900,
            lineHeight: 0.94,
            letterSpacing: "-0.065em",
            wordBreak: "keep-all",
            maxWidth: 860,
          }}
        >
          {SATURDAY_COPY.hero.question}
        </TextReveal>
      </div>
      <FilmTexture scene="01 · 농담" />
    </AbsoluteFill>
  );
};
