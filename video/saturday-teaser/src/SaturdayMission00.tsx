import { Audio } from "@remotion/media";
import { AbsoluteFill, Sequence, staticFile } from "remotion";
import { AssembleScene } from "./scenes/AssembleScene";
import { ColdOpenScene } from "./scenes/ColdOpenScene";
import { HookScene } from "./scenes/HookScene";
import { RaceTargetScene } from "./scenes/RaceTargetScene";
import { StartSignalScene } from "./scenes/StartSignalScene";
import { COLORS, SCENES } from "./theme";

export const SaturdayMission00: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.asphalt }}>
      <Sequence from={SCENES.coldOpen.from} durationInFrames={SCENES.coldOpen.duration} name="01 — The Joke">
        <ColdOpenScene />
      </Sequence>
      <Sequence from={SCENES.start.from} durationInFrames={SCENES.start.duration} name="02 — Start Signal">
        <StartSignalScene />
      </Sequence>
      <Sequence from={SCENES.assemble.from} durationInFrames={SCENES.assemble.duration} name="03 — Assemble">
        <AssembleScene />
      </Sequence>
      <Sequence from={SCENES.hook.from} durationInFrames={SCENES.hook.duration} name="04 — Mission Accepted">
        <HookScene />
      </Sequence>
      <Sequence from={SCENES.race.from} durationInFrames={SCENES.race.duration} name="05 — Race Target">
        <RaceTargetScene />
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
