import type { Shoe } from '@/types/shoe';
import { shoe as sauconyRide18 } from './saucony-ride-18';
import { shoe as sauconyGuide18 } from './saucony-guide-18';
import { shoe as sauconyTriumph23 } from './saucony-triumph-23';
import { shoe as sauconyHurricane25 } from './saucony-hurricane-25';
import { shoe as sauconyKinvara16 } from './saucony-kinvara-16';
import { shoe as sauconyEndorphinPro4 } from './saucony-endorphin-pro-4';
import { shoe as sauconyEndorphinElite2 } from './saucony-endorphin-elite-2';
import { shoe as sauconyEndorphinElite3 } from './saucony-endorphin-elite-3';
import { shoe as sauconyEndorphinSpeed5 } from './saucony-endorphin-speed-5';
import { shoe as sauconyEndorphinTrainer } from './saucony-endorphin-trainer';
import { shoe as sauconyEndorphinPro5 } from './saucony-endorphin-pro-5';
import { shoe as sauconyEndorphinAzura } from './saucony-endorphin-azura';
import { shoe as sauconyRide19 } from './saucony-ride-19';

// 신발 1켤레 = 파일 1개 (saucony/{slug}.ts). 추가 시 파일 생성 후 여기 등록.
export const sauconyShoes: Shoe[] = [
  sauconyRide18,
  sauconyGuide18,
  sauconyTriumph23,
  sauconyHurricane25,
  sauconyKinvara16,
  sauconyEndorphinPro4,
  sauconyEndorphinElite2,
  sauconyEndorphinElite3,
  sauconyEndorphinSpeed5,
  sauconyEndorphinTrainer,
  sauconyEndorphinPro5,
  sauconyEndorphinAzura,
  sauconyRide19,
];
