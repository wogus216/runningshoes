import type { Shoe } from '@/types/shoe';
import { shoe as newBalance880V15 } from './new-balance-880-v15';
import { shoe as newBalance1080V15 } from './new-balance-1080-v15';
import { shoe as newBalance1080V14 } from './new-balance-1080-v14';
import { shoe as newBalanceRebelV5 } from './new-balance-rebel-v5';
import { shoe as newBalance860V15 } from './new-balance-860-v15';
import { shoe as newBalance860V14 } from './new-balance-860-v14';
import { shoe as newBalanceScTrainerV3 } from './new-balance-sc-trainer-v3';
import { shoe as newBalanceScEliteV5 } from './new-balance-sc-elite-v5';
import { shoe as newBalanceBalosV1 } from './new-balance-balos-v1';
import { shoe as newBalanceHierroV9 } from './new-balance-hierro-v9';

// 신발 1켤레 = 파일 1개 (newbalance/{slug}.ts). 추가 시 파일 생성 후 여기 등록.
export const newbalanceShoes: Shoe[] = [
  newBalance880V15,
  newBalance1080V15,
  newBalance1080V14,
  newBalanceRebelV5,
  newBalance860V15,
  newBalance860V14,
  newBalanceScTrainerV3,
  newBalanceScEliteV5,
  newBalanceBalosV1,
  newBalanceHierroV9,
];
