import type { Shoe } from '@/types/shoe';
import { shoe as underArmourVelocitiElite2 } from './under-armour-velociti-elite-2';
import { shoe as underArmourInfiniteElite2 } from './under-armour-infinite-elite-2';

// 신발 1켤레 = 파일 1개 (underarmour/{slug}.ts). 추가 시 파일 생성 후 여기 등록.
export const underArmourShoes: Shoe[] = [
  underArmourVelocitiElite2,
  underArmourInfiniteElite2,
];
