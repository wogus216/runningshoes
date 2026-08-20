import { Audio } from "@remotion/media";
import { AbsoluteFill, Sequence, staticFile } from "remotion";
import { FriendsScene } from "./scenes/FriendsScene";
import { NameOriginScene } from "./scenes/NameOriginScene";
import { OpenShotScene } from "./scenes/OpenShotScene";
import { PhotoMontageScene } from "./scenes/PhotoMontageScene";
import { RaceTargetScene } from "./scenes/RaceTargetScene";
import { COLORS } from "./theme";

/**
 * 시즌 1 릴스 — MISSION 00 티저와 다른 물건이다.
 *
 * 티저는 사진이 없던 시절에 만든 것이라 AI 컷과 큰 문장이 주연이었다.
 * 이건 재료가 생긴 뒤의 버전이다: 실제 사진과 실제 사실로만 간다.
 *
 * 2026-08-20 개편 — 단톡 세 뭉치(264프레임, 릴스의 절반)를 뺐다.
 *   왜: 15초 안에서 남의 대화를 세 화면 연속으로 읽히는 건 요구가 크다.
 *       단톡은 스크롤을 쥐고 천천히 읽는 페이지가 맡는 게 맞다.
 *   대신 세운 것: (1) 누구인지 — 중학교 때 만난 친구 일곱 명
 *                 (2) 이름이 왜 쎄러데이인지 — 페이지에서 효과를 본 그 한 줄
 *                 (3) 사진 4장 → 6장, 시간도 2.3초 → 4.4초
 *
 * 흐름: 해보다 먼저 → 누구 → 이름 → 지금까지 → 11/15 → 주소
 */
export const REEL_S1 = {
  // 48 → 78 (2026-08-20). 1.6초는 첫 컷을 보기도 전에 넘어갔다 —
  // 일출 사진이 이 릴스에서 유일한 새벽이고 팔레트가 나온 컷이라 볼 시간을 준다.
  open: { from: 0, duration: 78 },
  friends: { from: 78, duration: 78 },
  name: { from: 156, duration: 78 },
  montage: { from: 234, duration: 132 },
  // 150 → 120. 엔드카드에서 주소를 뺐으므로 읽을 양이 줄었다.
  // 그래도 원래 값(70)으로는 못 돌아간다 — 카드가 로컬 62 에 뜨는데 70이면 0.27초다.
  race: { from: 366, duration: 120 },
} as const;

/**
 * 이 릴스만의 총 길이. REEL.durationInFrames(450)를 그대로 쓰면 안 된다 —
 * 그 값은 MISSION 00 티저 것이라, 여기서 바꾸면 그쪽 길이가 함께 흔들린다.
 */
export const REEL_S1_DURATION = REEL_S1.race.from + REEL_S1.race.duration;

/** 사진이 바뀌는 지점에만 발소리를 얹는다 — 몽타주 6장 × 22프레임 */
const MONTAGE_TICKS = Array.from({ length: 6 }, (_, i) => REEL_S1.montage.from + i * 22);

export const SaturdayReelS1: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.asphalt }}>
      <Sequence from={REEL_S1.open.from} durationInFrames={REEL_S1.open.duration} name="01 — 어느 토요일 아침">
        <OpenShotScene />
      </Sequence>

      <Sequence from={REEL_S1.friends.from} durationInFrames={REEL_S1.friends.duration} name="02 — 중학교 때 만난 친구들">
        <FriendsScene />
      </Sequence>

      <Sequence from={REEL_S1.name.from} durationInFrames={REEL_S1.name.duration} name="03 — 이름이 왜 쎄러데이인지">
        <NameOriginScene />
      </Sequence>

      <Sequence from={REEL_S1.montage.from} durationInFrames={REEL_S1.montage.duration} name="04 — 사진 몽타주">
        <PhotoMontageScene />
      </Sequence>

      <Sequence from={REEL_S1.race.from} durationInFrames={REEL_S1.race.duration} name="05 — 11/15 · 주소">
        <RaceTargetScene />
      </Sequence>

      <Audio src={staticFile("audio/atmosphere.wav")} volume={0.8} />
      {MONTAGE_TICKS.map((from, index) => (
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
