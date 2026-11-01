import { useEffect, useState } from "react";
import {
  AbsoluteFill,
  Composition,
  Folder,
  Still,
  Sequence,
  cancelRender,
  continueRender,
  delayRender,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Audio } from "@remotion/media";
import { ThreeCanvas } from "@remotion/three";
import { CourseScene } from "../../../src/components/marathon/sonkeechung/course-scene";
import {
  CHAPTERS,
  COURSE_SECONDS,
  pointAt,
  routeProgress,
  type CourseData,
} from "../../../src/components/marathon/sonkeechung/course-model";

const FACE = '"Pretendard Saturday", sans-serif';
const GOLD = "#f1c98e";

function useCourse() {
  const [data, setData] = useState<CourseData | null>(null);
  const [handle] = useState(() =>
    delayRender("Load Son Kee Chung terrain and course"),
  );
  useEffect(() => {
    fetch(staticFile("sonkeechung/course.json"))
      .then((r) => {
        if (!r.ok) throw new Error("Could not load course data");
        return r.json();
      })
      .then((d) => {
        setData(d);
        continueRender(handle);
      })
      .catch(cancelRender);
  }, [handle]);
  return data;
}

function FilmScene({
  data,
  time,
  overview = false,
}: {
  data: CourseData;
  time: number;
  overview?: boolean;
}) {
  const { width, height } = useVideoConfig();
  return (
    <ThreeCanvas
      width={width}
      height={height}
      dpr={1}
      camera={{ fov: 43, near: 0.05, far: 1000 }}
      gl={{ antialias: true, alpha: false }}
    >
      <CourseScene data={data} time={time} overview={overview} />
    </ThreeCanvas>
  );
}

function Chapter({ chapter }: { chapter: (typeof CHAPTERS)[number] }) {
  const frame = useCurrentFrame(),
    { fps } = useVideoConfig();
  const duration = (chapter.end - chapter.start) * fps;
  return (
    <AbsoluteFill style={{ pointerEvents: "none", fontFamily: FACE }}>
      <div
        style={{
          position: "absolute",
          left: 90,
          right: 145,
          top: 306,
          opacity: interpolate(
            frame,
            [0, 0.35 * fps, duration - 0.25 * fps, duration],
            [0, 1, 1, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          ),
          translate: `0 ${interpolate(frame, [0, 0.65 * fps], [18, 0], { extrapolateRight: "clamp" })}px`,
        }}
      >
        <div
          style={{
            fontSize: 25,
            letterSpacing: 3,
            color: GOLD,
            marginBottom: 30,
            fontWeight: 550,
          }}
        >
          {chapter.eyebrow}
        </div>
        <div
          style={{
            fontSize: 86,
            lineHeight: 1.22,
            fontWeight: 680,
            letterSpacing: -4.7,
            color: "#faf4e7",
            whiteSpace: "pre-line",
            textShadow: "0 3px 35px #15221b55",
          }}
        >
          {chapter.title}
        </div>
        <div
          style={{
            fontSize: 35,
            lineHeight: 1.65,
            color: "#deded0",
            marginTop: 30,
            letterSpacing: -1.1,
          }}
        >
          {chapter.body}
        </div>
      </div>
    </AbsoluteFill>
  );
}

function RouteInset({
  data,
  progress,
}: {
  data: CourseData;
  progress: number;
}) {
  const xs = data.points.map((p) => p[0]),
    zs = data.points.map((p) => p[1]);
  const minX = Math.min(...xs),
    minZ = Math.min(...zs),
    width = Math.max(...xs) - minX,
    height = Math.max(...zs) - minZ;
  const scale = Math.min(200 / width, 115 / height);
  const coords = data.points.map((p) => [
    (p[0] - minX) * scale + 5,
    (p[1] - minZ) * scale + 5,
  ]);
  const path = coords
    .map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)},${p[1].toFixed(1)}`)
    .join(" ");
  const point = pointAt(data, progress);
  return (
    <svg
      width="210"
      height="130"
      viewBox="0 0 210 130"
      style={{ position: "absolute", right: 145, top: 825, opacity: 0.9 }}
      aria-label="코스 전체에서 현재 위치"
    >
      <path
        d={path}
        fill="none"
        stroke="#e3dfcc"
        strokeOpacity=".45"
        strokeWidth="1.5"
      />
      <circle
        cx={(point[0] - minX) * scale + 5}
        cy={(point[1] - minZ) * scale + 5}
        r="5"
        fill={GOLD}
      />
    </svg>
  );
}

export function SonkeechungReel({
  showSafeZones = false,
}: {
  showSafeZones?: boolean;
}) {
  const data = useCourse(),
    frame = useCurrentFrame(),
    { fps } = useVideoConfig();
  const time = Math.min(1, frame / (COURSE_SECONDS * fps - 1)),
    progress = routeProgress(time);
  if (!data) return null;
  return (
    <AbsoluteFill style={{ background: "#18251c", fontFamily: FACE }}>
      <FilmScene data={data} time={time} />
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg,rgba(12,25,18,.72) 0%,rgba(12,25,18,.48) 27%,rgba(12,25,18,0) 46%,rgba(12,25,18,.08) 65%,rgba(12,25,18,.58) 100%)",
        }}
      />
      <Sequence name="01 · Hook / two turns" durationInFrames={4 * fps}>
        <Chapter chapter={CHAPTERS[0]} />
      </Sequence>
      <Sequence
        name="02 · Imjin River crossing"
        from={4 * fps}
        durationInFrames={7 * fps}
      >
        <Chapter chapter={CHAPTERS[1]} />
      </Sequence>
      <Sequence
        name="03 · First turnaround"
        from={11 * fps}
        durationInFrames={6 * fps}
      >
        <Chapter chapter={CHAPTERS[2]} />
      </Sequence>
      <Sequence
        name="04 · National Route 37"
        from={17 * fps}
        durationInFrames={8 * fps}
      >
        <Chapter chapter={CHAPTERS[3]} />
      </Sequence>
      <Sequence
        name="05 · Second turnaround"
        from={25 * fps}
        durationInFrames={7 * fps}
      >
        <Chapter chapter={CHAPTERS[4]} />
      </Sequence>
      <Sequence
        name="06 · Back to Imjingak"
        from={32 * fps}
        durationInFrames={6 * fps}
      >
        <Chapter chapter={CHAPTERS[5]} />
      </Sequence>
      <Sequence
        name="07 · Save before race day"
        from={38 * fps}
        durationInFrames={4 * fps}
      >
        <Chapter chapter={CHAPTERS[6]} />
      </Sequence>
      <RouteInset data={data} progress={progress} />
      <div
        style={{
          position: "absolute",
          top: 1030,
          left: 90,
          right: 145,
          color: "#f6eddc",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <span style={{ fontSize: 21, letterSpacing: 2 }}>
            참고 경로상 거리
          </span>
          <div
            style={{
              fontFamily: "Georgia,serif",
              fontSize: 76,
              letterSpacing: -4,
            }}
          >
            <span
              style={{
                fontFamily: FACE,
                fontSize: 24,
                letterSpacing: 0,
                marginRight: 12,
              }}
            >
              약
            </span>
            {(progress * data.routeDistanceKm).toFixed(1)}{" "}
            <span style={{ fontFamily: FACE, fontSize: 24, letterSpacing: 1 }}>
              KM
            </span>
          </div>
        </div>
        <div style={{ height: 2, background: "#efe4d344", marginTop: 20 }}>
          <div
            style={{
              height: "100%",
              width: `${progress * 100}%`,
              background: GOLD,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 21,
            marginTop: 19,
            color: "#e4ddcc",
          }}
        >
          <span>임진각 → 두 번의 반환 → 임진각</span>
          <span>복원 경로</span>
        </div>
        <div style={{ fontSize: 17, marginTop: 13, color: "#d0d4c7" }}>
          공식 측량 경로 아님 · 지형 높이 1.8× · 실제 대회 안내 우선
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: 90,
          bottom: 294,
          fontSize: 24,
          letterSpacing: 2,
          color: "#f0e3ca",
        }}
      >
        allrunabout
        <span style={{ opacity: 0.6, fontSize: 16, marginLeft: 22 }}>
          COURSE FILM 01
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          left: 90,
          right: 145,
          bottom: 190,
          fontSize: 15,
          lineHeight: 1.8,
          color: "#d2d7cb",
          opacity: 0.85,
        }}
      >
        경로 RUNRUUN · 지도 © OpenStreetMap contributors
        <br />
        지형 Mapzen / USGS SRTM · 구조물과 색감은 시각화 표현
      </div>
      <Audio
        src={staticFile("sonkeechung/course-score.m4a")}
        volume={(f) =>
          interpolate(f, [0, 2 * fps, 39 * fps, 42 * fps], [0, 0.55, 0.55, 0], {
            extrapolateRight: "clamp",
          })
        }
      />
      {showSafeZones ? (
        <AbsoluteFill style={{ pointerEvents: "none" }}>
          <div
            style={{
              height: 269,
              background: "#ff44444d",
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
            }}
          />
          <div
            style={{
              height: 672,
              background: "#ff44444d",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 269,
              bottom: 672,
              left: 65,
              right: 65,
              border: "3px dashed #8df4a4",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 200,
              left: 90,
              color: "white",
              fontFamily: FACE,
              fontSize: 25,
            }}
          >
            검수용 UI 여백 가이드 · 출력본에서는 제외
          </div>
        </AbsoluteFill>
      ) : null}
    </AbsoluteFill>
  );
}

export function SonkeechungPoster() {
  const data = useCourse();
  return data ? (
    <AbsoluteFill>
      <FilmScene data={data} time={0.035} overview />
    </AbsoluteFill>
  ) : null;
}

export const SonkeechungCompositions = () => (
  <Folder name="Sonkeechung-Course">
    <Composition
      id="Sonkeechung-Reel"
      component={SonkeechungReel}
      durationInFrames={1260}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{ showSafeZones: false }}
    />
    <Composition
      id="Sonkeechung-Reel-SafeZones"
      component={SonkeechungReel}
      durationInFrames={1260}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{ showSafeZones: true }}
    />
    <Composition
      id="Sonkeechung-First10Seconds"
      component={SonkeechungReel}
      durationInFrames={300}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{ showSafeZones: false }}
    />
    <Still
      id="Sonkeechung-WebPoster"
      component={SonkeechungPoster}
      width={1600}
      height={1000}
    />
  </Folder>
);
