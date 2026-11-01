import React, { useEffect, useState } from "react";
import {
  AbsoluteFill,
  Composition,
  Still,
  Img,
  Sequence,
  continueRender,
  cancelRender,
  delayRender,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Audio } from "@remotion/media";
import { ThreeCanvas } from "@remotion/three";
import { PCFShadowMap } from "three";
import { CourseScene } from "../../../src/components/marathon/sonkeechung/course-scene";
import {
  pointAt,
  type CourseData,
} from "../../../src/components/marathon/sonkeechung/course-model";
import { SonkeechungHeritage, SonkeechungFuelCue, SonkeechungFuelRecap } from "./SonkeechungFuel";
import { REEL_SECONDS, reelProgress, fuelStopAt } from "./sonkeechung-reel-plan";

const font = '"Pretendard Saturday", sans-serif';
const ivory = "#fff5df";
const gold = "#ecc589";
const clamp = (x: number) => Math.max(0, Math.min(1, x));

function useCourse() {
  const [handle] = useState(() => delayRender("Load verified course assets"));
  const [data, setData] = useState<CourseData | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    fetch(staticFile("sonkeechung/course.json"), { signal: controller.signal })
      .then((r) => {
        if (!r.ok) throw new Error("Course data unavailable");
        return r.json();
      })
      .then((course: CourseData) => {
        setData({
          ...course,
          imagery: course.imagery
            ? {
                ...course.imagery,
                url: staticFile("sonkeechung/satellite-2025-11-12.jpg"),
              }
            : undefined,
        });
        continueRender(handle);
      })
      .catch((error) => {
        if (error.name !== "AbortError") cancelRender(error);
      });
    return () => controller.abort();
  }, [handle]);
  return data;
}

export const CourseReelTitle: React.FC<{
  label: string;
  title: string;
  detail: string;
}> = ({ label, title, detail }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill
      style={{
        fontFamily: font,
        color: ivory,
        padding: "300px 180px 0 88px",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          opacity: interpolate(frame, [0, 0.18 * fps], [0, 1], {
            extrapolateRight: "clamp",
          }),
          translate: `0 ${interpolate(frame, [0, 0.35 * fps], [18, 0], { extrapolateRight: "clamp" })}px`,
        }}
      >
        <div
          style={{
            fontSize: 38,
            fontWeight: 600,
            color: gold,
            marginBottom: 28,
          }}
        >
          {label}
        </div>
        <h1
          style={{
            fontSize: 84,
            fontWeight: 650,
            lineHeight: 1.12,
            letterSpacing: "-.035em",
            whiteSpace: "pre-line",
            margin: 0,
            textWrap: "balance",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: 44,
            lineHeight: 1.5,
            whiteSpace: "pre-line",
            marginTop: 30,
            color: "#eee6d6",
          }}
        >
          {detail}
        </p>
      </div>
    </AbsoluteFill>
  );
};

const Profile: React.FC<{ data: CourseData; progress: number }> = ({
  data,
  progress,
}) => {
  const width = 810,
    height = 124;
  const values = data.points.filter(
    (_, i) => i % 4 === 0 || i === data.points.length - 1,
  );
  const current = pointAt(data, progress);
  const x = (km: number) => (km / data.routeDistanceKm) * width;
  const y = (m: number) => height - 12 - (m / 70) * (height - 25);
  const line = values
    .map(
      (p, i) => `${i ? "L" : "M"}${x(p[3]).toFixed(1)},${y(p[2]).toFixed(1)}`,
    )
    .join(" ");
  return (
    <div
      style={{
        position: "absolute",
        left: 88,
        top: 974,
        width,
        fontFamily: font,
      }}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        aria-label="공개 GPX 참고 고도"
      >
        {[0, 30, 60].map((m) => (
          <line
            key={m}
            x1={0}
            x2={width}
            y1={y(m)}
            y2={y(m)}
            stroke="#fff5df30"
            strokeWidth={1}
          />
        ))}
        <path
          d={`${line} L${width},${height} L0,${height}Z`}
          fill="#ecc58923"
        />
        <path d={line} fill="none" stroke={gold} strokeWidth={3} />
        <line
          x1={x(current[3])}
          x2={x(current[3])}
          y1={4}
          y2={height}
          stroke={ivory}
          strokeWidth={2}
        />
        <circle cx={x(current[3])} cy={y(current[2])} r={6} fill={ivory} />
      </svg>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 28,
          color: "#e3ddcd",
          marginTop: 9,
        }}
      >
        <span>0km</span>
        <span>21km</span>
        <span>약 42.26km</span>
      </div>
    </div>
  );
};

const RouteReadout: React.FC<{ data: CourseData; progress: number; hideNumbers: boolean }> = ({
  data,
  progress,
  hideNumbers,
}) => {
  const p = pointAt(data, progress);
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: 88,
          top: 808,
          opacity: hideNumbers ? 0 : 1,
          width: 810,
          fontFamily: font,
          color: ivory,
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <div>
          <span
            style={{
              fontSize: 90,
              fontWeight: 550,
              fontVariantNumeric: "tabular-nums",
              letterSpacing: "-.04em",
            }}
          >
            {p[3].toFixed(1)}
          </span>
          <span style={{ fontSize: 34, marginLeft: 12 }}>km</span>
          <div style={{ fontSize: 30, color: "#e0d9c8", marginTop: 4 }}>
            참고 GPX 진행 거리
          </div>
        </div>
        <div>
          <span style={{ fontSize: 34, marginRight: 12 }}>고도 약</span>
          <span
            style={{
              fontSize: 76,
              fontWeight: 500,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {Math.round(p[2])}
          </span>
          <span style={{ fontSize: 34, marginLeft: 10 }}>m</span>
        </div>
      </div>
      <Profile data={data} progress={progress} />
      <div
        style={{
          position: "absolute",
          left: 88,
          top: 1166,
          fontFamily: font,
          fontSize: 29,
          color: "#f4e8d1",
        }}
      >
        거리·고도는 공개 GPX 참고값<br />
        4시간 완주 · 아미노샷 45g 보급 예시
      </div>
    </>
  );
};

export const CourseReelRecap: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ fontFamily: font, color: ivory, padding: "308px 180px 0 88px" }}
    >
      <div style={{ fontSize: 40, color: gold, marginBottom: 30 }}>
        2026.11.15 · 임진각
      </div>
      <h1
        style={{
          fontSize: 84,
          lineHeight: 1.12,
          fontWeight: 650,
          letterSpacing: "-.035em",
          margin: 0,
        }}
      >
        손기정,
        <br />그 이름을 기억하며.
      </h1>
      <div style={{ marginTop: 48, fontSize: 44, lineHeight: 1.7 }}>
        <div>임진각 출발</div>
        <div>
          <span style={{ color: gold }}>1차 반환</span> · 도라산역 방면
        </div>
        <div>
          <span style={{ color: gold }}>2차 반환</span> · 리비삼거리 방면
        </div>
        <div>다시 임진각</div>
      </div>
      <p style={{ fontSize: 42, lineHeight: 1.4, marginTop: 36 }}>
        손기정평화마라톤 · 풀코스
      </p>
      <div
        style={{
          fontSize: 30,
          lineHeight: 1.5,
          color: "#e3ddcd",
          marginTop: 24,
        }}
      >
        공식 거리 42.195km · 실제 안내 우선
        <br />
        참고 GPX·3D 복원 / 자세한 출처는 캡션
      </div>
    </AbsoluteFill>
  );
};

export const SonkeechungReel: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const data = useCourse();
  const seconds = frame / fps;
  const progress = reelProgress(seconds);
  const fuelStop = fuelStopAt(seconds);
  if (!data) return null;
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#14221a",
        fontFamily: font,
        overflow: "hidden",
      }}
    >
      <Audio
        src={staticFile("sonkeechung/course-score.m4a")}
        volume={(f) =>
          0.8 *
          Math.min(clamp(f / (1.1 * fps)), clamp((REEL_SECONDS * fps - f) / (1.8 * fps)))
        }
      />
      <ThreeCanvas
        width={width}
        height={height}
        camera={{ fov: 43, near: 0.05, far: 1000 }}
        shadows={{ type: PCFShadowMap }}
        gl={{ antialias: true, alpha: false }}
      >
        <CourseScene
          data={data}
          time={0.085 + progress * 0.82}
          overview={seconds >= 38}
        />
      </ThreeCanvas>
      <Sequence from={4 * fps} durationInFrames={3 * fps} name="임진각 · Blender 도입">
      <AbsoluteFill style={{ overflow: "hidden" }}>
        <Img
          src={staticFile("sonkeechung/hero.webp")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            scale: interpolate(frame, [4 * fps, 7 * fps], [1.035, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        />
      </AbsoluteFill>
      </Sequence>
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg,rgba(8,19,14,.52) 0%,rgba(8,19,14,.06) 44%,rgba(8,19,14,.78) 66%,rgba(8,19,14,.14) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 88,
          top: 270,
          width: 810,
          height: 3,
          background: "#fff5df36",
        }}
      >
        <div
          style={{
            width: `${Math.min(1, seconds / REEL_SECONDS) * 100}%`,
            height: "100%",
            background: gold,
          }}
        />
      </div>
      <Sequence durationInFrames={4 * fps} name="손기정 · 1936에서 2026으로">
        <SonkeechungHeritage />
      </Sequence>
      <Sequence from={4 * fps} durationInFrames={3 * fps} name="11월 15일 임진각 출발">
        <CourseReelTitle
          label="손기정평화마라톤 · 풀코스"
          title={"11월 15일,\n임진각에서 출발."}
          detail={"그 이름을 기억하며 달릴\n42.195km를 미리 봅니다."}
        />
      </Sequence>
      <Sequence from={7 * fps} durationInFrames={5 * fps} name="01 · 통일대교">
        <CourseReelTitle
          label="01 / 임진강을 건너"
          title={"통일대교를 지나\n도라산역 방면으로."}
          detail={"임진각 → 마정교차로 → 통일대교"}
        />
      </Sequence>
      <Sequence
        from={12 * fps}
        durationInFrames={4 * fps}
        name="02 · 첫 번째 반환"
      >
        <CourseReelTitle
          label="02 / 첫 번째 반환"
          title={"도라산역 방면,\n첫 번째 반환."}
          detail={"돌아서 마정교차로로 돌아옵니다."}
        />
      </Sequence>
      <Sequence
        from={16 * fps}
        durationInFrames={7 * fps}
        name="03 · 여우고개와 37번국도"
      >
        <CourseReelTitle
          label="03 / 아직 끝이 아닙니다"
          title={"여우고개를 지나\n37번국도로."}
          detail={"마정교차로 → 여우고개사거리"}
        />
      </Sequence>
      <Sequence
        from={23 * fps}
        durationInFrames={6 * fps}
        name="04 · 두 번째 반환"
      >
        <CourseReelTitle
          label="04 / 두 번째 반환"
          title={"리비삼거리 방면,\n한 번 더 돌아서."}
          detail={"반환 후 37번국도 맞은편 도로로 복귀"}
        />
      </Sequence>
      <Sequence
        from={29 * fps}
        durationInFrames={6 * fps}
        name="05 · 후반 고도 흐름"
      >
        <CourseReelTitle
          label="05 / 돌아오는 길"
          title={"35km 근처,\n고도 흐름 한 번 더."}
          detail={"GPX 그래프로 후반 구간을 확인하세요."}
        />
      </Sequence>
      <Sequence
        from={35 * fps}
        durationInFrames={3 * fps}
        name="06 · 임진각 피니시"
      >
        <CourseReelTitle
          label="06 / 다시 임진각"
          title={"여우고개를 지나,\n다시 임진각으로."}
          detail={"왔던 순서를 기억하며 돌아옵니다."}
        />
      </Sequence>
      <Sequence
        from={7 * fps}
        durationInFrames={31 * fps}
        name="거리·고도 · GPX 참고"
      >
        <RouteReadout data={data} progress={progress} hideNumbers={Boolean(fuelStop)} />
        {fuelStop && <SonkeechungFuelCue stop={fuelStop} elevationM={pointAt(data, progress)[2]} />}
      </Sequence>
      <Sequence
        from={38 * fps}
        durationInFrames={7 * fps}
        name="저장용 · 아미노바이탈 8회 보급 예시"
      >
        <SonkeechungFuelRecap />
      </Sequence>
      <Sequence from={45 * fps} durationInFrames={7 * fps} name="손기정평화마라톤 · 코스 요약">
        <AbsoluteFill style={{ backgroundColor: "#102016b8" }} />
        <CourseReelRecap />
      </Sequence>
      {seconds >= 4 && <div
        style={{
          position: "absolute",
          left: 88,
          top: 1490,
          width: 810,
          fontSize: 26,
          lineHeight: 1.5,
          color: "#fff5dfd9",
        }}
      >
        위성영상 2025.11.12 · 건물·교량 일부 단순화
        <br />© OpenStreetMap contributors · Copernicus / RUNRUUN
      </div>}
    </AbsoluteFill>
  );
};

export const SonkeechungCover: React.FC = () => <SonkeechungHeritage cover />;

export const SonkeechungCompositions: React.FC = () => (
  <>
    <Composition
      id="Sonkeechung-Reel"
      component={SonkeechungReel}
      width={1080}
      height={1920}
      fps={30}
      durationInFrames={1560}
    />
    <Still
      id="Sonkeechung-Cover"
      component={SonkeechungCover}
      width={1080}
      height={1920}
    />
  </>
);
