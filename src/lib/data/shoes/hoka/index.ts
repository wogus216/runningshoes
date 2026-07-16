import type { Shoe } from '@/types/shoe';
import { shoe as hokaClifton10 } from './hoka-clifton-10';
import { shoe as hokaBondi9 } from './hoka-bondi-9';
import { shoe as hokaMach6 } from './hoka-mach-6';
import { shoe as hokaArahi8 } from './hoka-arahi-8';
import { shoe as hokaGaviota6 } from './hoka-gaviota-6';
import { shoe as hokaMachX3 } from './hoka-mach-x-3';
import { shoe as hokaRocketX3 } from './hoka-rocket-x-3';
import { shoe as hokaCieloX1 } from './hoka-cielo-x1';
import { shoe as hokaTectonX3 } from './hoka-tecton-x-3';
import { shoe as hokaSpeedgoat6 } from './hoka-speedgoat-6';
import { shoe as hokaSpeedgoat7 } from './hoka-speedgoat-7';

// 신발 1켤레 = 파일 1개 (hoka/{slug}.ts). 추가 시 파일 생성 후 여기 등록.
export const hokaShoes: Shoe[] = [
  hokaClifton10,
  hokaBondi9,
  hokaMach6,
  hokaArahi8,
  hokaGaviota6,
  hokaMachX3,
  hokaRocketX3,
  hokaCieloX1,
  hokaTectonX3,
  hokaSpeedgoat6,
  hokaSpeedgoat7,
];
