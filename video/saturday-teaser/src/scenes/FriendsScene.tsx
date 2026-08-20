import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { FilmTexture } from "../components/FilmTexture";
import { COLORS, DISTANCE_TOTALS, FONT, MONO, SATURDAY_COPY } from "../theme";

/**
 * 누구인가 — 이 릴스의 전제.
 *
 * 전에는 이 자리가 없어서, 보는 사람이 "웬 사람들이 마라톤을 신청했네"까지만 알고 끝났다.
 * 회사 동료도 러닝크루도 아니고 중학교 때 만난 사이라는 게 이 이야기의 시작이다.
 *
 * 문구는 전부 정본에서 온다 — 인원("일곱 명")과 거리 분해는 로스터에서 계산되므로
 * 사람이 늘거나 종목이 바뀌면 영상도 따라온다. 여기 숫자를 적지 않는 이유다.
 */
export const FriendsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const enter = (from: number) =>
    interpolate(frame, [from, from + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.asphalt, color: COLORS.paper }}>
      <AbsoluteFill style={{ overflow: "hidden" }}>
        <Img
          src={staticFile("images/crew/selfie-four.webp")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "52% 40%",
            transform: `scale(${interpolate(frame, [0, 78], [1.05, 1.13])})`,
            filter: "grayscale(1) contrast(1.1)",
            opacity: interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" }),
          }}
        />
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(6,8,9,.46) 0%, rgba(6,8,9,.08) 30%, rgba(6,8,9,.9) 72%, rgba(6,8,9,.97) 100%)",
        }}
      />

      <div style={{ position: "absolute", left: 82, right: 82, bottom: 230 }}>
        <div
          style={{
            color: COLORS.signal,
            fontFamily: MONO,
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "0.16em",
            marginBottom: 28,
            opacity: enter(6),
          }}
        >
          {SATURDAY_COPY.crew.bond}
        </div>
        <div
          style={{
            fontFamily: FONT,
            fontSize: 104,
            fontWeight: 920,
            lineHeight: 1.0,
            letterSpacing: "-0.06em",
            color: COLORS.paperDeep,
            wordBreak: "keep-all",
            opacity: enter(14),
          }}
        >
          {SATURDAY_COPY.hero.hook}
        </div>
        {/* 거리 분해 — "일곱 명"이 다 같은 종목이 아니라는 사실을 한 줄로 못 박는다 */}
        <div
          style={{
            marginTop: 34,
            display: "flex",
            gap: 26,
            color: "rgba(212,205,196,.72)",
            fontFamily: MONO,
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: "0.06em",
            opacity: enter(26),
          }}
        >
          {DISTANCE_TOTALS.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </div>

      <FilmTexture scene="02 · 누구" />
    </AbsoluteFill>
  );
};
