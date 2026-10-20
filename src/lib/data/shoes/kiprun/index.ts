import type { Shoe } from '@/types/shoe';
import { shoe as kiprunKipstormElite } from './kiprun-kipstorm-elite';
import { shoe as kiprunKipsummitMax } from './kiprun-kipsummit-max';

// 신발 1켤레 = 파일 1개 (kiprun/{slug}.ts). 추가 시 파일 생성 후 여기 등록.
export const kiprunShoes: Shoe[] = [
  kiprunKipstormElite,
  kiprunKipsummitMax,
];
