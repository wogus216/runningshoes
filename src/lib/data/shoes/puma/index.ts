import type { Shoe } from '@/types/shoe';
import { shoe as pumaVelocityNitro4 } from './puma-velocity-nitro-4';
import { shoe as pumaMagmaxNitro2 } from './puma-magmax-nitro-2';
import { shoe as pumaMagnifyNitro3 } from './puma-magnify-nitro-3';
import { shoe as pumaDeviatePureNitro } from './puma-deviate-pure-nitro';
import { shoe as pumaDeviateNitro4 } from './puma-deviate-nitro-4';
import { shoe as pumaDeviateNitro3 } from './puma-deviate-nitro-3';
import { shoe as pumaDeviateNitroElite3 } from './puma-deviate-nitro-elite-3';
import { shoe as pumaDeviateNitroElite4 } from './puma-deviate-nitro-elite-4';
import { shoe as pumaFastRNitroElite3 } from './puma-fast-r-nitro-elite-3';

// 신발 1켤레 = 파일 1개 (puma/{slug}.ts). 추가 시 파일 생성 후 여기 등록.
export const pumaShoes: Shoe[] = [
  pumaVelocityNitro4,
  pumaMagmaxNitro2,
  pumaMagnifyNitro3,
  pumaDeviatePureNitro,
  pumaDeviateNitro4,
  pumaDeviateNitro3,
  pumaDeviateNitroElite3,
  pumaDeviateNitroElite4,
  pumaFastRNitroElite3,
];
