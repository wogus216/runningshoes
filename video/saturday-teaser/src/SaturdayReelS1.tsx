import { Audio } from "@remotion/media";
import { AbsoluteFill, Sequence, staticFile } from "remotion";
import { ChatBeatScene } from "./scenes/ChatBeatScene";
import { OpenShotScene } from "./scenes/OpenShotScene";
import { PhotoMontageScene } from "./scenes/PhotoMontageScene";
import { RaceTargetScene } from "./scenes/RaceTargetScene";
import { COLORS, REEL_CHAT } from "./theme";

/**
 * 시즌 1 릴스 — MISSION 00 티저와 다른 물건이다.
 *
 * 티저는 사진이 없던 시절에 만든 것이라 AI 컷과 큰 문장이 주연이었다.
 * 이건 재료가 생긴 뒤의 버전이다: 실제 대화와 실제 사진으로만 간다.
 *
 * 페이지에서 스크롤이 하던 일을 여기서는 프레임이 한다 —
 * 단톡이 한 줄씩 도착하고 마지막 줄에서 끊는다.
 */
export const REEL_S1 = {
  open: { from: 0, duration: 48 },
  chat1: { from: 48, duration: 96 },
  chat2: { from: 144, duration: 84 },
  chat3: { from: 228, duration: 84 },
  montage: { from: 312, duration: 68 },
  // 70 → 150 (2026-08-20). 엔드카드(주소)가 이 씬의 로컬 프레임 62 에서 뜨는데
  // 70프레임짜리 씬에서는 8프레임 = 0.27초만 보였다 — 주소를 읽을 시간이 아니다.
  // 150 이면 완전히 뜬 상태로 2.6초. 24자짜리 주소를 읽기에 이 정도는 필요하다.
  // (날짜 11/15 구간을 줄여서 벌지 않았다 — 거기가 이 영상의 결론이다)
  race: { from: 380, duration: 150 },
} as const;

/**
 * 이 릴스만의 총 길이. REEL.durationInFrames(450)를 그대로 쓰면 안 된다 —
 * 그 값은 MISSION 00 티저 것이라, 여기서 늘리면 그쪽에 빈 프레임이 붙는다.
 */
export const REEL_S1_DURATION = REEL_S1.race.from + REEL_S1.race.duration;

export const SaturdayReelS1: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.asphalt }}>
      <Sequence from={REEL_S1.open.from} durationInFrames={REEL_S1.open.duration} name="01 — 어느 토요일 아침">
        <OpenShotScene />
      </Sequence>

      {[REEL_S1.chat1, REEL_S1.chat2, REEL_S1.chat3].map((slot, index) => (
        <Sequence
          key={REEL_CHAT[index].id}
          from={slot.from}
          durationInFrames={slot.duration}
          name={`0${index + 2} — 단톡 ${REEL_CHAT[index].id}`}
        >
          <ChatBeatScene burst={REEL_CHAT[index]} sceneLabel={`0${index + 2} · 단톡`} />
        </Sequence>
      ))}

      <Sequence from={REEL_S1.montage.from} durationInFrames={REEL_S1.montage.duration} name="05 — 사진 몽타주">
        <PhotoMontageScene />
      </Sequence>

      <Sequence from={REEL_S1.race.from} durationInFrames={REEL_S1.race.duration} name="06 — 11/15">
        <RaceTargetScene />
      </Sequence>

      <Audio src={staticFile("audio/atmosphere.wav")} volume={0.8} />
      {/* 메시지가 도착하는 지점에만 발소리를 얹는다 — 알림음을 흉내내지 않는다 */}
      {[60, 80, 100, 156, 176, 196, 240, 260, 280].map((from, index) => (
        <Sequence key={from} from={from} durationInFrames={12} name={`Tick ${index + 1}`}>
          <Audio src={staticFile("audio/footstep.wav")} volume={0.5} />
        </Sequence>
      ))}
      <Sequence from={REEL_S1.race.from} durationInFrames={22} name="Date impact">
        <Audio src={staticFile("audio/mission-impact.wav")} volume={0.85} />
      </Sequence>
    </AbsoluteFill>
  );
};
