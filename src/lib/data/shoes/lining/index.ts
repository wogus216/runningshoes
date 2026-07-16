import type { Shoe } from '@/types/shoe';
import { shoe as liNingRedHare9Ultra } from './li-ning-red-hare-9-ultra';
import { shoe as liNingRedHare9Pro } from './li-ning-red-hare-9-pro';
import { shoe as liNingRedHare9 } from './li-ning-red-hare-9';

// 신발 1켤레 = 파일 1개 (lining/{slug}.ts). 추가 시 파일 생성 후 여기 등록.
export const liningShoes: Shoe[] = [
  liNingRedHare9Ultra,
  liNingRedHare9Pro,
  liNingRedHare9,
];
