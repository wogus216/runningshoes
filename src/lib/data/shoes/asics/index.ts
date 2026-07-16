import type { Shoe } from '@/types/shoe';
import { shoe as asicsGelNimbus28 } from './asics-gel-nimbus-28';
import { shoe as asicsNovablast5 } from './asics-novablast-5';
import { shoe as asicsNovablast6 } from './asics-novablast-6';
import { shoe as asicsGelKayano32 } from './asics-gel-kayano-32';
import { shoe as asicsGelKayano33 } from './asics-gel-kayano-33';
import { shoe as asicsSuperblast2 } from './asics-superblast-2';
import { shoe as asicsSuperblast3 } from './asics-superblast-3';
import { shoe as asicsMagicSpeed4 } from './asics-magic-speed-4';
import { shoe as asicsMetaspeedSkyPlus } from './asics-metaspeed-sky-plus';
import { shoe as asicsMetaspeedEdgePlus } from './asics-metaspeed-edge-plus';
import { shoe as asicsMegablast } from './asics-megablast';
import { shoe as asicsSonicblast } from './asics-sonicblast';
import { shoe as asicsMagicSpeed5 } from './asics-magic-speed-5';
import { shoe as asicsMetaspeedRay } from './asics-metaspeed-ray';
import { shoe as asicsMetafujiTrail } from './asics-metafuji-trail';
import { shoe as asicsGelVenture10 } from './asics-gel-venture-10';

// 신발 1켤레 = 파일 1개 (asics/{slug}.ts). 추가 시 파일 생성 후 여기 등록.
export const asicsShoes: Shoe[] = [
  asicsGelNimbus28,
  asicsNovablast5,
  asicsNovablast6,
  asicsGelKayano32,
  asicsGelKayano33,
  asicsSuperblast2,
  asicsSuperblast3,
  asicsMagicSpeed4,
  asicsMetaspeedSkyPlus,
  asicsMetaspeedEdgePlus,
  asicsMegablast,
  asicsSonicblast,
  asicsMagicSpeed5,
  asicsMetaspeedRay,
  asicsMetafujiTrail,
  asicsGelVenture10,
];
