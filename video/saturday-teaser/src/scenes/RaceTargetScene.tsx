import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { FilmTexture } from "../components/FilmTexture";
import { COLORS, FONT, MONO, RACE_META, SATURDAY_COPY } from "../theme";

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
        {/* 엔드카드 — 하루 사이 네 번 바뀐 자리라 이유를 남긴다.
              (1) TO BE CONTINUED 128px    → 다 본 사람에게 갈 곳이 없었다
              (2) allrunabout.com/saturday → 링크를 인스타 스티커로 붙이기로 해서 뺐다
              (3) (1)로 복귀              → 시제가 반대였다("기다려라" vs "지금 가라")
              (4) 자세한 내용은 사이트에서 → '사이트'가 어디인지 화면에 없었다
              (5) 지금: '자세한 내용은 프로필에서'

            ✅ 확정 사실(2026-08-20 운영자가 인스타 앱에서 확인):
               릴스에는 링크 스티커가 없다. 클릭되는 경로는 프로필 바이오 하나뿐이다.
               그래서 '사이트에서'는 갈 곳을 안 알려주는 말이었고, '프로필에서'가
               유일하게 정확한 지시다. (스토리에는 스티커가 있으므로 StoryEndCard 는
               '여기 눌러서 보기 ↓' 로 다르게 쓴다 — 두 판이 갈리는 지점이 이것이다)

            마지막 3초에 필요한 건 '더 있다'와 '어디' 둘뿐이라 한 문장으로 둔다.
            분량을 세는 안(단톡 42줄·사진 8장)은 말이 많아 스토리 쪽으로 넘겼다.
            '다음 편이 있다'는 뜻은 위 킥커(첫 번째 이야기)와 아래 race.next 가 이미 한다.
            ⚠️ 주소를 안 박았으므로 mp4 가 인스타 밖으로 재공유되면 출처가 안 남는다. */}
        <div style={{ color: COLORS.signal, fontFamily: MONO, fontSize: 24, fontWeight: 600, letterSpacing: "0.18em" }}>
          첫 번째 이야기
        </div>
        <div
          style={{
            marginTop: 40,
            color: COLORS.paperDeep,
            fontFamily: FONT,
            fontSize: 96,
            fontWeight: 920,
            lineHeight: 1.08,
            letterSpacing: "-0.06em",
            wordBreak: "keep-all",
          }}
        >
          자세한 내용은
          <br />
          프로필에서
        </div>
        <div style={{ marginTop: 52, color: "rgba(212,205,196,.45)", fontFamily: MONO, fontSize: 18, fontWeight: 600, letterSpacing: "0.18em" }}>
          {SATURDAY_COPY.race.next}
        </div>
      </AbsoluteFill>
      <FilmTexture scene="05 · 그날" />
    </AbsoluteFill>
  );
};
