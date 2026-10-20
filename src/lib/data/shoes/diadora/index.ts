import type { Shoe } from '@/types/shoe';
import { shoe as diadoraAtomoStar } from './diadora-atomo-star';
import { shoe as diadoraFrequenza2 } from './diadora-frequenza-2';
import { shoe as diadoraNucleo2 } from './diadora-nucleo-2';
import { shoe as diadoraMythosBlushieldVolo5 } from './diadora-mythos-blushield-volo-5';

// 신발 1켤레 = 파일 1개 (diadora/{slug}.ts). 추가 시 파일 생성 후 여기 등록.
export const diadoraShoes: Shoe[] = [
  diadoraAtomoStar,
  diadoraFrequenza2,
  diadoraNucleo2,
  diadoraMythosBlushieldVolo5,
];
