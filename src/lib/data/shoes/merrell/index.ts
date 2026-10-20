import type { Shoe } from '@/types/shoe';
import { shoe as merrellAgilityPeak6 } from './merrell-agility-peak-6';
import { shoe as merrellTrailGlove8 } from './merrell-trail-glove-8';
import { shoe as merrellMtlSpeedarcPeak } from './merrell-mtl-speedarc-peak';

// 신발 1켤레 = 파일 1개 (merrell/{slug}.ts). 추가 시 파일 생성 후 여기 등록.
export const merrellShoes: Shoe[] = [
  merrellAgilityPeak6,
  merrellTrailGlove8,
  merrellMtlSpeedarcPeak,
];
