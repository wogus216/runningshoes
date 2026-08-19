import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { FilmTexture } from "../components/FilmTexture";
import { COLORS, FONT, MONO } from "../theme";
import type { REEL_CHAT } from "../shared";

type Burst = (typeof REEL_CHAT)[number];

/**
 * 단톡 한 뭉치를 릴스 한 비트로.
 *
 * 페이지에서는 스크롤이 하던 일을 여기서는 프레임이 한다 — 메시지가 한 줄씩 도착하고
 * 마지막 줄만 크게 앉는다. 카톡 UI(말풍선·프로필)는 흉내내지 않는다.
 *
 * 문장은 정본(src/lib/data/challenge/saturday.ts)에서 온다. 이 파일에는 대사를 적지 않는다.
 */
export const ChatBeatScene: React.FC<{ burst: Burst; sceneLabel: string }> = ({
  burst,
  sceneLabel,
}) => {
  const frame = useCurrentFrame();
  const lines = burst.lines;
  const lastIndex = lines.length - 1;

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bluehour, color: COLORS.paper }}>
      <div
        style={{
          position: "absolute",
          left: 82,
          right: 82,
          top: 300,
          bottom: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 34,
        }}
      >
        <div
          style={{
            paddingBottom: 20,
            borderBottom: "1px solid rgba(212,205,196,.22)",
            color: COLORS.concrete,
            fontFamily: MONO,
            fontSize: 21,
            fontWeight: 600,
            letterSpacing: "0.16em",
            opacity: interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          {burst.label}
        </div>

        {lines.map((line, index) => {
          const start = 12 + index * 20;
          const isPunch = index === lastIndex;
          const enter = interpolate(frame, [start, start + 12], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          return (
            <div
              key={`${burst.id}-${index}`}
              style={{
                display: "grid",
                gridTemplateColumns: "110px 1fr",
                gap: 28,
                alignItems: "baseline",
                opacity: enter,
                transform: `translateY(${(1 - enter) * 26}px)`,
              }}
            >
              <span
                style={{
                  color: COLORS.concrete,
                  fontFamily: MONO,
                  fontSize: 20,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textAlign: "right",
                }}
              >
                {line.who}
              </span>
              <span
                style={{
                  fontFamily: FONT,
                  fontSize: isPunch ? 74 : 38,
                  fontWeight: isPunch ? 800 : 600,
                  lineHeight: isPunch ? 1.14 : 1.44,
                  letterSpacing: isPunch ? "-0.035em" : "-0.01em",
                  color: isPunch ? COLORS.paperDeep : COLORS.paper,
                  wordBreak: "keep-all",
                }}
              >
                {line.text}
              </span>
            </div>
          );
        })}
      </div>

      <FilmTexture scene={sceneLabel} />
    </AbsoluteFill>
  );
};
