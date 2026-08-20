import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { FilmTexture } from "../components/FilmTexture";
import { COLORS, FONT, MONO, REEL_PHOTOS } from "../theme";

// 6장 × 22프레임 = 132프레임 ≈ 4.4초. 전에는 4장 × 17 = 2.3초였다 —
// 단톡을 뺀 자리를 여기 줬다. 장수는 REEL_PHOTOS 가 정하므로 나눗셈으로 받는다.
const TOTAL_FRAMES = 132;
const PER_SHOT = Math.floor(TOTAL_FRAMES / REEL_PHOTOS.length);

/**
 * 크루가 실제로 찍은 사진 몽타주.
 *
 * 흑백은 페이지의 사진 벽과 같은 처리다 — 서로 다른 날·다른 폰이라 색온도가 제각각이고,
 * 그대로 두면 네 장이 한 세트로 안 묶인다. 컷과 컷 사이는 크로스페이드 없이 딱 끊는다.
 */
export const PhotoMontageScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.asphalt, color: COLORS.paper }}>
      {REEL_PHOTOS.map((name, index) => {
        const from = index * PER_SHOT;
        const local = frame - from;
        const visible = local >= 0 && local < PER_SHOT;
        if (!visible) return null;

        // 컷마다 아주 느리게 밀어 넣는다. 정지 사진이 죽어 보이지 않을 만큼만.
        const scale = interpolate(local, [0, PER_SHOT], [1.06, 1.13]);

        return (
          <AbsoluteFill key={name} style={{ overflow: "hidden" }}>
            <Img
              src={staticFile(`images/crew/${name}.webp`)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "50% 45%",
                transform: `scale(${scale})`,
                filter: "grayscale(1) contrast(1.1)",
              }}
            />
          </AbsoluteFill>
        );
      })}

      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(6,8,9,.5) 0%, rgba(6,8,9,.05) 34%, rgba(6,8,9,.86) 100%)",
        }}
      />

      <div style={{ position: "absolute", left: 82, right: 82, bottom: 250 }}>
        <div
          style={{
            color: COLORS.concrete,
            fontFamily: MONO,
            fontSize: 21,
            fontWeight: 600,
            letterSpacing: "0.18em",
            marginBottom: 26,
            opacity: interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          방이 생기기 전부터
        </div>
        <div
          style={{
            fontFamily: FONT,
            fontSize: 88,
            fontWeight: 900,
            lineHeight: 0.98,
            letterSpacing: "-0.055em",
            color: COLORS.paperDeep,
            wordBreak: "keep-all",
            opacity: interpolate(frame, [6, 20], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          이미 같이<br />뛰고 있었다
        </div>
      </div>

      <FilmTexture scene="04 · 기록" />
    </AbsoluteFill>
  );
};
