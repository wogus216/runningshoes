import {
  AbsoluteFill,
  Easing,
  Img,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { CinematicImage } from "./components/CinematicImage";
import { FilmTexture } from "./components/FilmTexture";
import { COLORS, MEMBERS, SCENES } from "./theme";

// 웹/모바일 히어로 배경 전용 "클린 플레이트".
//
// 릴·웹 티저와 컷 순서·타이밍은 같지만 글자가 하나도 없다.
// 페이지가 자체 타이포(풀마라톤… → 신청 완료했습니다!! → 11/15)를 얹기 때문에,
// 영상에 자막이 박혀 있으면 두 겹이 겹쳐 읽히지 않는다.
// 이 파일이 없으면 히어로에서 영상을 흐리게 눌러야 하고, 그러면 영화가 사라진다.

type PlateProps = {
  portrait?: boolean;
};

const Scene01Laces: React.FC<PlateProps> = ({ portrait }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.asphalt }}>
      <CinematicImage
        src="images/laces.webp"
        duration={SCENES.coldOpen.duration}
        fromScale={portrait ? 1.08 : 1.14}
        toScale={portrait ? 1.2 : 1.26}
        fromX={portrait ? -14 : 22}
        toX={portrait ? 26 : -30}
        fromY={portrait ? 14 : -8}
        toY={portrait ? -24 : 16}
        style={{
          opacity: interpolate(frame, [0, 10, 60, 71], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          filter: "contrast(1.06) saturate(.8) brightness(.86)",
        }}
      />
      <FilmTexture scene="" bare />
    </AbsoluteFill>
  );
};

const Scene02StartSignal: React.FC<PlateProps> = ({ portrait }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.asphalt }}>
      <Img
        src={staticFile("images/watch-start.webp")}
        style={{
          position: "absolute",
          inset: -70,
          width: "calc(100% + 140px)",
          height: "calc(100% + 140px)",
          objectFit: "cover",
          objectPosition: portrait ? "50% 50%" : "50% 34%",
          opacity: interpolate(frame, [0, 8, 28, 38], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [0, 38], [1.1, 1.2], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: `${interpolate(frame, [0, 38], [-26, 34], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}px 0px`,
          filter: "contrast(1.08) saturate(.78) brightness(.8)",
        }}
      />
      {/* 발 착지가 옆에서 밀고 들어오는 컷 — 개인의 준비가 시작되는 지점 */}
      <Img
        src={staticFile("images/foot-strike.webp")}
        style={{
          position: "absolute",
          inset: -90,
          width: "calc(100% + 180px)",
          height: "calc(100% + 180px)",
          objectFit: "cover",
          objectPosition: portrait ? "50% 50%" : "50% 64%",
          opacity: interpolate(frame, [30, 34, 62, 71], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [30, 72], [1.18, 1.06], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: `${interpolate(frame, [30, 72], [70, -22], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}px 0px`,
          filter: `contrast(1.08) saturate(.8) brightness(.82) blur(${interpolate(
            frame,
            [30, 38, 54],
            [16, 0, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          )}px)`,
          clipPath: `inset(0 0 0 ${interpolate(frame, [30, 39], [100, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}%)`,
        }}
      />
      <FilmTexture scene="" bare />
    </AbsoluteFill>
  );
};

// 개인 → 팀. 7개 슬롯이 차례로 열리고 하나의 크루로 합쳐진다.
// 이름·번호는 넣지 않는다 (페이지의 로스터가 그 역할을 한다).
const Scene03Assemble: React.FC<PlateProps> = ({ portrait }) => {
  const frame = useCurrentFrame();
  const canvasWidth = portrait ? 1080 : 1920;
  const canvasHeight = portrait ? 1980 : 1160;

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.asphalt }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          opacity: interpolate(frame, [0, 6, 70, 80], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {MEMBERS.map((member, index) => (
          <div
            key={member.name}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRight:
                index === MEMBERS.length - 1 ? 0 : "2px solid rgba(6,8,9,.55)",
              clipPath: `inset(${interpolate(
                frame,
                [index * 4, index * 4 + 14],
                [100, 0],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(0.16, 1, 0.3, 1),
                },
              )}% 0 0 0)`,
            }}
          >
            <Img
              src={staticFile("images/seven-runners.webp")}
              style={{
                position: "absolute",
                top: -40,
                bottom: -40,
                left: `${-index * (canvasWidth / 7 - (portrait ? 26 : 46))}px`,
                width: canvasWidth,
                height: canvasHeight,
                objectFit: "cover",
                filter: "grayscale(.2) contrast(1.08) brightness(.84)",
                scale: interpolate(frame, [0, 80], [1.12, 1.04], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
              }}
            />
          </div>
        ))}
      </div>

      {/* 분할이 사라지고 한 장면으로 — 팀이 됐다는 신호 */}
      <Img
        src={staticFile("images/seven-runners.webp")}
        style={{
          position: "absolute",
          inset: -40,
          width: "calc(100% + 80px)",
          height: "calc(100% + 80px)",
          objectFit: "cover",
          objectPosition: portrait ? "50% 50%" : "50% 38%",
          opacity: interpolate(frame, [72, 86, 122, 131], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [72, 132], [1.12, 1.02], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          filter: "contrast(1.08) saturate(.76) brightness(.8)",
        }}
      />
      <FilmTexture scene="" bare />
    </AbsoluteFill>
  );
};

const Scene04Crew: React.FC<PlateProps> = ({ portrait }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.asphalt }}>
      <Img
        src={staticFile("images/seven-runners.webp")}
        style={{
          position: "absolute",
          inset: -70,
          width: "calc(100% + 140px)",
          height: "calc(100% + 140px)",
          objectFit: "cover",
          objectPosition: portrait ? "50% 46%" : "50% 30%",
          scale: interpolate(frame, [0, 84], [1.1, 1.02], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: `0px ${interpolate(frame, [0, 84], [22, -16], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}px`,
          filter: "contrast(1.1) saturate(.72) brightness(.74)",
        }}
      />
      {/* 결정 프레임 구간 — 페이지의 히어로 훅(SATURDAY_COPY.hero.hook)이 이 위에 얹힌다.
          시그널 밑줄은 페이지가 그리므로 여기서는 그리지 않는다 (이중선 방지) */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(6,8,9,.26) 0%, rgba(6,8,9,.04) 40%, rgba(6,8,9,.66) 100%)",
        }}
      />
      <FilmTexture scene="" bare />
    </AbsoluteFill>
  );
};

// 마지막 — 날짜가 박히는 구간. 어둠으로 닫혀 페이지의 blackout으로 이어진다.
const Scene05RaceTarget: React.FC<PlateProps> = ({ portrait }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.asphalt }}>
      <AbsoluteFill
        style={{
          background: portrait
            ? "radial-gradient(circle at 82% 36%, rgba(243,204,124,.26), transparent 26%), linear-gradient(118deg, transparent 0 64%, rgba(243,204,124,.09) 64% 78%, transparent 78%)"
            : "radial-gradient(circle at 76% 32%, rgba(243,204,124,.24), transparent 28%), linear-gradient(112deg, transparent 0 66%, rgba(243,204,124,.09) 66% 79%, transparent 79%)",
          opacity: interpolate(frame, [0, 14], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
      <AbsoluteFill
        style={{
          backgroundColor: "#050505",
          opacity: interpolate(frame, [58, 78], [0, 0.76], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />
      <FilmTexture scene="" bare />
    </AbsoluteFill>
  );
};

export const SaturdayPlate: React.FC<PlateProps> = ({ portrait = false }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.asphalt }}>
      <Sequence from={SCENES.coldOpen.from} durationInFrames={SCENES.coldOpen.duration}>
        <Scene01Laces portrait={portrait} />
      </Sequence>
      <Sequence from={SCENES.start.from} durationInFrames={SCENES.start.duration}>
        <Scene02StartSignal portrait={portrait} />
      </Sequence>
      <Sequence from={SCENES.assemble.from} durationInFrames={SCENES.assemble.duration}>
        <Scene03Assemble portrait={portrait} />
      </Sequence>
      <Sequence from={SCENES.hook.from} durationInFrames={SCENES.hook.duration}>
        <Scene04Crew portrait={portrait} />
      </Sequence>
      <Sequence from={SCENES.race.from} durationInFrames={SCENES.race.duration}>
        <Scene05RaceTarget portrait={portrait} />
      </Sequence>
    </AbsoluteFill>
  );
};
