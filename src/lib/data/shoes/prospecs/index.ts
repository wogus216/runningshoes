import type { Shoe } from '@/types/shoe';
import { shoe as prospecsSpeedRush3 } from './prospecs-speed-rush-3';
import { shoe as prospecsHyperRush2Tempo } from './prospecs-hyper-rush-2-tempo';
import { shoe as prospecsInfiniteRushRev } from './prospecs-infinite-rush-rev';
import { shoe as prospecsDuplexGf } from './prospecs-duplex-gf';

// 신발 1켤레 = 파일 1개 (prospecs/{slug}.ts). 추가 시 파일 생성 후 여기 등록.
export const prospecsShoes: Shoe[] = [
  prospecsSpeedRush3,
  prospecsHyperRush2Tempo,
  prospecsInfiniteRushRev,
  prospecsDuplexGf,
];
