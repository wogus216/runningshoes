import type { Shoe } from '@/types/shoe';
import { shoe as nikePegasus41 } from './nike-pegasus-41';
import { shoe as nikePegasus42 } from './nike-pegasus-42';
import { shoe as nikePegasusPremium } from './nike-pegasus-premium';
import { shoe as nikePegasusPlus } from './nike-pegasus-plus';
import { shoe as nikeVomero18 } from './nike-vomero-18';
import { shoe as nikeVomeroPlus } from './nike-vomero-plus';
import { shoe as nikeVomeroPremium } from './nike-vomero-premium';
import { shoe as nikeStructure26 } from './nike-structure-26';
import { shoe as nikeRivalFly4 } from './nike-rival-fly-4';
import { shoe as nikeAlphafly3 } from './nike-alphafly-3';
import { shoe as nikeZoomFly6 } from './nike-zoom-fly-6';
import { shoe as nikeVaporfly4 } from './nike-vaporfly-4';
import { shoe as nikeStreakfly2 } from './nike-streakfly-2';
import { shoe as nikeAcgZegamaTrail } from './nike-acg-zegama-trail';
import { shoe as nikeUltrafly } from './nike-ultrafly';

// 신발 1켤레 = 파일 1개 (nike/{slug}.ts). 추가 시 파일 생성 후 여기 등록.
export const nikeShoes: Shoe[] = [
  nikePegasus41,
  nikePegasus42,
  nikePegasusPremium,
  nikePegasusPlus,
  nikeVomero18,
  nikeVomeroPlus,
  nikeVomeroPremium,
  nikeStructure26,
  nikeRivalFly4,
  nikeAlphafly3,
  nikeZoomFly6,
  nikeVaporfly4,
  nikeStreakfly2,
  nikeAcgZegamaTrail,
  nikeUltrafly,
];
