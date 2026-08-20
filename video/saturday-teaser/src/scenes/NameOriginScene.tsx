import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { FilmTexture } from "../components/FilmTexture";
import { COLORS, FONT, MONO, SATURDAY_COPY } from "../theme";

/**
 * 이름은 왜 쎄러데이인가.
 *
 * 웹 페이지에서 푸터 농담('토요일에만 뛰는 건 아닙니다.')이 뜬금없다는 피드백을 받고
 * 유래를 넣었더니 해결됐다. 릴스도 같은 구멍이 있었다 — 크루명이 계속 나오는데
 * 왜 그 이름인지 한 번도 말하지 않았다.
 *
 * 문장은 운영자 본인 말이고 정본(footer.nameOrigin)에서 그대로 읽는다.
 * 영상에 따로 옮겨 적지 않는 이유: 한쪽만 고치면 두 매체가 다른 말을 하게 된다.
 */
export const NameOriginScene: React.FC = () => {
  const frame = useCurrentFrame();
  const enter = (from: number) =>
    interpolate(frame, [from, from + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bluehour, color: COLORS.paper }}>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 78% 22%, rgba(243,204,124,.16), transparent 42%)",
        }}
      />

      <div style={{ position: "absolute", left: 82, right: 82, top: 560 }}>
        <div
          style={{
            color: "rgba(212,205,196,.6)",
            fontFamily: MONO,
            fontSize: 23,
            fontWeight: 600,
            letterSpacing: "0.2em",
            opacity: enter(4),
          }}
        >
          SATURDAY RUNNING CREW
        </div>
        <div
          style={{
            marginTop: 30,
            fontFamily: FONT,
            fontSize: 148,
            fontWeight: 920,
            lineHeight: 1,
            letterSpacing: "-0.07em",
            color: COLORS.paperDeep,
            opacity: enter(10),
          }}
        >
          쎄러데이
        </div>
        {/* 밑줄은 페이지 푸터와 같은 장치 — 이름과 설명을 갈라 주는 선 */}
        <div
          style={{
            marginTop: 40,
            width: 300,
            height: 4,
            background: COLORS.signal,
            opacity: enter(18),
          }}
        />
        <div
          style={{
            marginTop: 40,
            maxWidth: 820,
            fontFamily: FONT,
            fontSize: 52,
            fontWeight: 760,
            lineHeight: 1.46,
            letterSpacing: "-0.03em",
            color: COLORS.paper,
            wordBreak: "keep-all",
            opacity: enter(24),
          }}
        >
          {SATURDAY_COPY.footer.nameOrigin}
        </div>
      </div>

      <FilmTexture scene="03 · 이름" />
    </AbsoluteFill>
  );
};
