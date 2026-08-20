import { Composition, Folder } from "remotion";
import { SaturdayMission00 } from "./SaturdayMission00";
import { SaturdayMission00Web } from "./SaturdayMission00Web";
import { SaturdayPlate } from "./SaturdayPlate";
import { REEL_S1_DURATION, SaturdayReelS1 } from "./SaturdayReelS1";
import { AssembleScene } from "./scenes/AssembleScene";
import { ColdOpenScene } from "./scenes/ColdOpenScene";
import { HookScene } from "./scenes/HookScene";
import { RaceTargetScene } from "./scenes/RaceTargetScene";
import { StartSignalScene } from "./scenes/StartSignalScene";
import { REEL, SCENES, WEB } from "./theme";

const base = {
  fps: REEL.fps,
  width: REEL.width,
  height: REEL.height,
};

export const SaturdayCompositions: React.FC = () => {
  return (
    <>
      <Composition
        id="SaturdayMission00-Reel"
        component={SaturdayMission00}
        durationInFrames={REEL.durationInFrames}
        {...base}
      />
      {/* 시즌 1 릴스 — 실제 대화·실제 사진. MISSION 00 티저와 별개 물건이다 */}
      <Composition
        id="SaturdayReel-S1"
        component={SaturdayReelS1}
        durationInFrames={REEL_S1_DURATION}
        {...base}
      />
      <Composition
        id="SaturdayMission00-Web"
        component={SaturdayMission00Web}
        durationInFrames={WEB.durationInFrames}
        fps={WEB.fps}
        width={WEB.width}
        height={WEB.height}
      />
      {/* 웹 히어로 배경 전용 — 글자 없는 플레이트. 페이지가 타이포를 얹는다 */}
      <Composition
        id="SaturdayMission00-WebPlate"
        component={SaturdayPlate}
        durationInFrames={WEB.durationInFrames}
        fps={WEB.fps}
        width={WEB.width}
        height={WEB.height}
        defaultProps={{ portrait: false }}
      />
      <Composition
        id="SaturdayMission00-ReelPlate"
        component={SaturdayPlate}
        durationInFrames={REEL.durationInFrames}
        defaultProps={{ portrait: true }}
        {...base}
      />
      <Folder name="SaturdayMission00-Scenes">
        <Composition id="Scene01-TheJoke" component={ColdOpenScene} durationInFrames={SCENES.coldOpen.duration} {...base} />
        <Composition id="Scene02-StartSignal" component={StartSignalScene} durationInFrames={SCENES.start.duration} {...base} />
        <Composition id="Scene03-Assemble" component={AssembleScene} durationInFrames={SCENES.assemble.duration} {...base} />
        <Composition id="Scene04-MissionAccepted" component={HookScene} durationInFrames={SCENES.hook.duration} {...base} />
        <Composition id="Scene05-RaceTarget" component={RaceTargetScene} durationInFrames={SCENES.race.duration} {...base} />
      </Folder>
    </>
  );
};
