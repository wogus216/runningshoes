import type { Shoe } from '@/types/shoe';
import { shoe as brooksGhost17 } from './brooks-ghost-17';
import { shoe as brooksGhostMax3 } from './brooks-ghost-max-3';
import { shoe as brooksGlycerin22 } from './brooks-glycerin-22';
import { shoe as brooksGlycerinMax } from './brooks-glycerin-max';
import { shoe as brooksGlycerinGts22 } from './brooks-glycerin-gts-22';
import { shoe as brooksHyperionElite5 } from './brooks-hyperion-elite-5';
import { shoe as brooksAdrenalineGts25 } from './brooks-adrenaline-gts-25';
import { shoe as brooksHyperionMax3 } from './brooks-hyperion-max-3';
import { shoe as brooksGlycerinMax2 } from './brooks-glycerin-max-2';

// 신발 1켤레 = 파일 1개 (brooks/{slug}.ts). 추가 시 파일 생성 후 여기 등록.
export const brooksShoes: Shoe[] = [
  brooksGhost17,
  brooksGhostMax3,
  brooksGlycerin22,
  brooksGlycerinMax,
  brooksGlycerinGts22,
  brooksHyperionElite5,
  brooksAdrenalineGts25,
  brooksHyperionMax3,
  brooksGlycerinMax2,
];
