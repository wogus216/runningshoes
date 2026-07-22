import type { Shoe } from '@/types/shoe';
import { shoe as adidasSupernovaRise3 } from './adidas-supernova-rise-3';
import { shoe as adidasSupernovaRise2 } from './adidas-supernova-rise-2';
import { shoe as adidasAdizeroSl2 } from './adidas-adizero-sl2';
import { shoe as adidasBoston13 } from './adidas-boston-13';
import { shoe as adidasAdizeroEvoSl } from './adidas-adizero-evo-sl';
import { shoe as adidasAdiosPro4 } from './adidas-adios-pro-4';
import { shoe as adidasHyperboostEdge } from './adidas-hyperboost-edge';
import { shoe as adidasTerrexAgravic4 } from './adidas-terrex-agravic-4';
import { shoe as adidasTerrexAgravicSpeedUltra } from './adidas-terrex-agravic-speed-ultra';

// 신발 1켤레 = 파일 1개 (adidas/{slug}.ts). 추가 시 파일 생성 후 여기 등록.
export const adidasShoes: Shoe[] = [
  adidasSupernovaRise3,
  adidasSupernovaRise2,
  adidasAdizeroSl2,
  adidasBoston13,
  adidasAdizeroEvoSl,
  adidasHyperboostEdge,
  adidasAdiosPro4,
  adidasTerrexAgravic4,
  adidasTerrexAgravicSpeedUltra,
];
