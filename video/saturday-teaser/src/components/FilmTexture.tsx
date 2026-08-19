import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, MONO } from "../theme";

// bare: 배경 플레이트용 — 질감과 비네트만 남기고 씬 라벨·REC·레터박스·진행바를 뺀다.
// 웹 히어로는 페이지가 자체 타이포를 얹으므로 영상 안에 글자가 있으면 안 된다.
export const FilmTexture: React.FC<{ scene: string; light?: boolean; bare?: boolean }> = ({
  scene,
  light = false,
  bare = false,
}) => {
  const frame = useCurrentFrame();

  if (bare) {
    return (
      <>
        <AbsoluteFill
          style={{
            pointerEvents: "none",
            opacity: 0.12,
            mixBlendMode: light ? "multiply" : "screen",
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent 0px, transparent 5px, rgba(255,255,255,.1) 6px), radial-gradient(circle at 30% 20%, rgba(255,255,255,.16), transparent 28%)",
            backgroundPosition: `${frame % 7}px ${frame % 11}px`,
          }}
        />
        <AbsoluteFill
          style={{
            pointerEvents: "none",
            boxShadow: "inset 0 0 220px rgba(0,0,0,.82)",
          }}
        />
      </>
    );
  }

  return (
    <>
      <AbsoluteFill
        style={{
          pointerEvents: "none",
          opacity: 0.12,
          mixBlendMode: light ? "multiply" : "screen",
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0px, transparent 5px, rgba(255,255,255,.1) 6px), radial-gradient(circle at 30% 20%, rgba(255,255,255,.16), transparent 28%)",
          backgroundPosition: `${frame % 7}px ${frame % 11}px`,
        }}
      />
      <AbsoluteFill
        style={{
          pointerEvents: "none",
          boxShadow: "inset 0 0 220px rgba(0,0,0,.82)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 68,
          right: 68,
          top: 54,
          display: "flex",
          justifyContent: "space-between",
          color: light ? "rgba(10,16,19,.5)" : "rgba(212,205,196,.52)",
          fontFamily: MONO,
          fontSize: 18,
          fontWeight: 600,
          letterSpacing: "0.18em",
        }}
      >
        <span>{scene}</span>
        <span style={{ color: light ? COLORS.signalDark : COLORS.signal }}>
          REC&nbsp;&nbsp;
          {String(Math.floor(frame / 30)).padStart(2, "0")}:
          {String(frame % 30).padStart(2, "0")}
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 22,
          backgroundColor: "#000",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 22,
          backgroundColor: "#000",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 68,
          right: 68,
          bottom: 54,
          height: 2,
          backgroundColor: light ? "rgba(10,16,19,.22)" : "rgba(212,205,196,.2)",
        }}
      >
        <div
          style={{
            width: `${interpolate(frame, [0, 120], [8, 100], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })}%`,
            height: 4,
            marginTop: -1,
            backgroundColor: light ? COLORS.signalDark : COLORS.signal,
          }}
        />
      </div>
    </>
  );
};
