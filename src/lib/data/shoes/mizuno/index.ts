import type { Shoe } from '@/types/shoe';
import { shoe as mizunoWaveRider29 } from './mizuno-wave-rider-29';
import { shoe as mizunoWaveInspire21 } from './mizuno-wave-inspire-21';
import { shoe as mizunoWaveRebellionFlash2 } from './mizuno-wave-rebellion-flash-2';
import { shoe as mizunoWaveSky9 } from './mizuno-wave-sky-9';
import { shoe as mizunoWaveRebellionFlash3 } from './mizuno-wave-rebellion-flash-3';
import { shoe as mizunoWaveHorizon8 } from './mizuno-wave-horizon-8';
import { shoe as mizunoHyperwarpPure } from './mizuno-hyperwarp-pure';
import { shoe as mizunoHyperwarpElite } from './mizuno-hyperwarp-elite';
import { shoe as mizunoHyperwarpPro } from './mizuno-hyperwarp-pro';

// 신발 1켤레 = 파일 1개 (mizuno/{slug}.ts). 추가 시 파일 생성 후 여기 등록.
export const mizunoShoes: Shoe[] = [
  mizunoWaveRider29,
  mizunoWaveInspire21,
  mizunoWaveRebellionFlash2,
  mizunoWaveSky9,
  mizunoWaveRebellionFlash3,
  mizunoWaveHorizon8,
  mizunoHyperwarpPure,
  mizunoHyperwarpElite,
  mizunoHyperwarpPro,
];
