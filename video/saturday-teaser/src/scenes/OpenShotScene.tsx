import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { FilmTexture } from "../components/FilmTexture";
import { COLORS, FONT, MONO } from "../theme";

/**
 * 여는 컷 — 크루가 실제로 찍은 일출 사진.
 *
 * 아홉 장 중 유일하게 새벽이고, 페이지 팔레트 8토큰 중 4개가 이 사진에서 나왔다.
 * 흑백은 사진 벽·몽타주와 같은 처리다.
 */
export const OpenShotScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.asphalt, color: COLORS.paper }}>
      <AbsoluteFill style={{ overflow: "hidden" }}>
        <Img
          src={staticFile("images/hero-sunrise.webp")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "52% 46%",
            transform: `scale(${interpolate(frame, [0, 48], [1.04, 1.12])})`,
            filter: "grayscale(1) contrast(1.12)",
            opacity: interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" }),
          }}
        />
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(6,8,9,.42) 0%, rgba(6,8,9,.06) 36%, rgba(6,8,9,.88) 100%)",
        }}
      />

      <div style={{ position: "absolute", left: 82, right: 82, bottom: 260 }}>
        <div
          style={{
            color: COLORS.concrete,
            fontFamily: MONO,
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.18em",
            marginBottom: 24,
            opacity: interpolate(frame, [8, 20], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          어느 토요일 아침
        </div>
        <div
          style={{
            fontFamily: FONT,
            fontSize: 96,
            fontWeight: 900,
            lineHeight: 0.96,
            letterSpacing: "-0.06em",
            color: COLORS.paperDeep,
            opacity: interpolate(frame, [14, 28], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          해보다 먼저
        </div>
      </div>

      <FilmTexture scene="01 · 여는 컷" />
    </AbsoluteFill>
  );
};
