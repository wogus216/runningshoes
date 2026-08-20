import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { FilmTexture } from "../components/FilmTexture";
import { ARCHIVE_LINES, COLORS, FONT, MONO, RACE_META, SATURDAY_COPY } from "../theme";

export const RaceTargetScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.asphalt, color: COLORS.paper }}>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 82% 36%, rgba(243,204,124,.22), transparent 25%), linear-gradient(118deg, transparent 0 67%, rgba(243,204,124,.06) 67% 79%, transparent 79%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 82,
          top: 260,
          color: "rgba(212,205,196,.64)",
          fontFamily: MONO,
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: "0.18em",
          opacity: interpolate(frame, [2, 12, 58, 66], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {SATURDAY_COPY.race.eyebrow}
      </div>
      <div
        aria-label="11월 15일"
        style={{
          position: "absolute",
          left: 70,
          top: 520,
          display: "flex",
          alignItems: "baseline",
          color: COLORS.paper,
          fontFamily: FONT,
          fontSize: 264,
          fontWeight: 920,
          lineHeight: 0.8,
          letterSpacing: "-0.095em",
          opacity: interpolate(frame, [0, 12, 58, 66], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [0, 23], [1.72, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: `${interpolate(frame, [0, 23], [300, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}px 0px`,
          filter: `blur(${interpolate(frame, [0, 18], [18, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}px)`,
        }}
      >
        <span>11</span>
        <span style={{ color: COLORS.signal }}>/</span>
        <span>15</span>
      </div>
      <div
        style={{
          position: "absolute",
          left: 82,
          right: 82,
          top: 862,
          paddingTop: 36,
          borderTop: "2px solid rgba(212,205,196,.28)",
          opacity: interpolate(frame, [18, 32, 58, 66], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div style={{ fontFamily: FONT, fontSize: 64, fontWeight: 900, letterSpacing: "-0.055em" }}>
          {RACE_META.name}
        </div>
        <div style={{ marginTop: 62, fontFamily: FONT, fontSize: 54, fontWeight: 800, lineHeight: 1.35, letterSpacing: "-0.04em", maxWidth: 780, wordBreak: "keep-all" }}>
          {SATURDAY_COPY.race.hook}
        </div>
      </div>

      <AbsoluteFill
        style={{
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 82px",
          backgroundColor: "#050505",
          opacity: interpolate(frame, [62, 73], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        {/* 엔드카드 — 하루 사이 세 번 바뀐 자리라 이유를 남긴다.
              (1) TO BE CONTINUED 128px  → 15초를 다 본 사람에게 갈 곳이 없었다
              (2) allrunabout.com/saturday → 링크를 인스타 스티커로 붙이기로 해서 뺐다
              (3) 지금: 분량 + '프로필 링크에서'

            (1)로 되돌렸던 게 잘못이었다. 'TO BE CONTINUED'는 "다음을 기다려라"인데
            릴스의 목적은 "지금 가라"라서 문구가 목적과 반대였다.
            '없는 버튼을 가리키면 거짓말'이라는 논리는 '눌러서 보기 ↓' 에만 해당하지,
            사실 진술(단톡 N줄·사진 M장)에는 해당하지 않았다.

            프로필 링크는 릴스에서 유일하게 항상 존재하는 클릭 경로다 —
            URL 을 영상에 박지 않으면서 '어디로'에 답할 수 있는 유일한 말.
            '다음 편이 있다'는 뜻은 위 킥커(첫 번째 이야기)와 아래 race.next 가 이미 한다. */}
        <div style={{ color: COLORS.signal, fontFamily: MONO, fontSize: 24, fontWeight: 600, letterSpacing: "0.18em" }}>
          첫 번째 이야기
        </div>
        {ARCHIVE_LINES.map((line, index) => (
          <div
            key={line}
            style={{
              marginTop: index === 0 ? 38 : 0,
              color: COLORS.paperDeep,
              fontFamily: FONT,
              fontSize: 92,
              fontWeight: 920,
              lineHeight: 1.08,
              letterSpacing: "-0.06em",
              wordBreak: "keep-all",
            }}
          >
            {line}
          </div>
        ))}
        <div
          style={{
            marginTop: 48,
            paddingBottom: 14,
            width: "fit-content",
            borderBottom: `3px solid ${COLORS.signal}`,
            color: COLORS.signal,
            fontFamily: FONT,
            fontSize: 46,
            fontWeight: 800,
            letterSpacing: "-0.03em",
          }}
        >
          프로필 링크에서
        </div>
        <div style={{ marginTop: 44, color: "rgba(212,205,196,.45)", fontFamily: MONO, fontSize: 18, fontWeight: 600, letterSpacing: "0.18em" }}>
          {SATURDAY_COPY.race.next}
        </div>
      </AbsoluteFill>
      <FilmTexture scene="05 · 그날" />
    </AbsoluteFill>
  );
};
