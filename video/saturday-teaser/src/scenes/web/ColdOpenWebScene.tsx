import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { CinematicImage } from "../../components/CinematicImage";
import { FilmTexture } from "../../components/FilmTexture";
import { TextReveal } from "../../components/TextReveal";
import { COLORS, FONT, MONO, SATURDAY_COPY } from "../../theme";

// 16:9 — 좌측 타이포 칼럼 / 우측 신발끈 장면. 9:16을 늘이지 않고 재배치한다.
export const ColdOpenWebScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.asphalt, color: COLORS.paper }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "62%",
          overflow: "hidden",
        }}
      >
        <CinematicImage
          src="images/laces.webp"
          duration={72}
          fromScale={1.14}
          toScale={1.26}
          fromX={26}
          toX={-34}
          fromY={-10}
          toY={18}
          style={{
            opacity: interpolate(frame, [0, 12, 58, 71], [0, 0.85, 0.85, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            filter: "contrast(1.08) saturate(.72) brightness(.7)",
          }}
        />
      </div>
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(90deg, rgba(6,8,9,.98) 0%, rgba(6,8,9,.86) 34%, rgba(6,8,9,.12) 62%, rgba(6,8,9,.55) 100%)",
        }}
      />

      <div style={{ position: "absolute", left: 110, bottom: 168, width: 980 }}>
        <TextReveal
          start={24}
          exitAt={66}
          style={{
            color: "rgba(212,205,196,.58)",
            fontFamily: MONO,
            fontSize: 21,
            fontWeight: 600,
            letterSpacing: "0.16em",
            marginBottom: 30,
          }}
        >
          농담이었을 때
        </TextReveal>
        <TextReveal
          start={30}
          exitAt={68}
          style={{
            fontFamily: FONT,
            fontSize: 108,
            fontWeight: 900,
            lineHeight: 0.96,
            letterSpacing: "-0.065em",
            wordBreak: "keep-all",
            maxWidth: 900,
          }}
        >
          {SATURDAY_COPY.hero.question}
        </TextReveal>
      </div>
      <FilmTexture scene="01 · 농담" />
    </AbsoluteFill>
  );
};
