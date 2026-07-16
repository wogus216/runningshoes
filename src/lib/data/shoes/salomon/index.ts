import type { Shoe } from '@/types/shoe';
import { shoe as salomonPulsar } from './salomon-pulsar';
import { shoe as salomonUltraGlide4 } from './salomon-ultra-glide-4';
import { shoe as salomonSLabPulsar4 } from './salomon-s-lab-pulsar-4';

// 신발 1켤레 = 파일 1개 (salomon/{slug}.ts). 추가 시 파일 생성 후 여기 등록.
export const salomonShoes: Shoe[] = [
  salomonPulsar,
  salomonUltraGlide4,
  salomonSLabPulsar4,
];
