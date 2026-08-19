import { Audio } from "@remotion/media";
import { AbsoluteFill, Sequence, staticFile } from "remotion";
import { AssembleWebScene } from "./scenes/web/AssembleWebScene";
import { ColdOpenWebScene } from "./scenes/web/ColdOpenWebScene";
import { HookWebScene } from "./scenes/web/HookWebScene";
import { RaceTargetWebScene } from "./scenes/web/RaceTargetWebScene";
import { StartSignalWebScene } from "./scenes/web/StartSignalWebScene";
import { COLORS, SCENES } from "./theme";

// 릴과 동일한 장면 순서·타이밍·오디오. 레이아웃만 16:9 재배치.
export const SaturdayMission00Web: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.asphalt }}>
      <Sequence from={SCENES.coldOpen.from} durationInFrames={SCENES.coldOpen.duration} name="01 — The Joke">
        <ColdOpenWebScene />
      </Sequence>
      <Sequence from={SCENES.start.from} durationInFrames={SCENES.start.duration} name="02 — Start Signal">
        <StartSignalWebScene />
      </Sequence>
      <Sequence from={SCENES.assemble.from} durationInFrames={SCENES.assemble.duration} name="03 — Assemble">
        <AssembleWebScene />
      </Sequence>
      <Sequence from={SCENES.hook.from} durationInFrames={SCENES.hook.duration} name="04 — Mission Accepted">
        <HookWebScene />
      </Sequence>
      <Sequence from={SCENES.race.from} durationInFrames={SCENES.race.duration} name="05 — Race Target">
        <RaceTargetWebScene />
      </Sequence>

      <Audio src={staticFile("audio/atmosphere.wav")} volume={0.85} />
      <Sequence from={80} durationInFrames={12} name="Start beep">
        <Audio src={staticFile("audio/start-beep.wav")} volume={0.9} />
      </Sequence>
      {[150, 164, 178, 192, 206, 220, 234].map((from, index) => (
        <Sequence key={from} from={from} durationInFrames={14} name={`Footstep ${index + 1}`}>
          <Audio src={staticFile("audio/footstep.wav")} volume={() => 0.62 + index * 0.035} />
        </Sequence>
      ))}
      <Sequence from={276} durationInFrames={22} name="Mission impact">
        <Audio src={staticFile("audio/mission-impact.wav")} volume={0.95} />
      </Sequence>
      <Sequence from={360} durationInFrames={22} name="Date impact">
        <Audio src={staticFile("audio/mission-impact.wav")} volume={0.82} />
      </Sequence>
    </AbsoluteFill>
  );
};
