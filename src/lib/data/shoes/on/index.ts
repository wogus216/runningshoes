import type { Shoe } from '@/types/shoe';
import { shoe as onCloudsurfer2 } from './on-cloudsurfer-2';
import { shoe as onCloudrunner2 } from './on-cloudrunner-2';
import { shoe as onCloudmonster2 } from './on-cloudmonster-2';
import { shoe as onCloudmonsterHyper } from './on-cloudmonster-hyper';
import { shoe as onCloudrunner3 } from './on-cloudrunner-3';
import { shoe as onCloudsurferMax } from './on-cloudsurfer-max';
import { shoe as onCloudmonster3 } from './on-cloudmonster-3';
import { shoe as onCloudmonster3Hyper } from './on-cloudmonster-3-hyper';
import { shoe as onCloudmonster3HyperLightspray } from './on-cloudmonster-3-hyper-lightspray';
import { shoe as onCloudflow5 } from './on-cloudflow-5';
import { shoe as onCloudboomStrike } from './on-cloudboom-strike';

// 신발 1켤레 = 파일 1개 (on/{slug}.ts). 추가 시 파일 생성 후 여기 등록.
export const onShoes: Shoe[] = [
  onCloudsurfer2,
  onCloudrunner2,
  onCloudmonster2,
  onCloudmonsterHyper,
  onCloudrunner3,
  onCloudsurferMax,
  onCloudmonster3,
  onCloudmonster3Hyper,
  onCloudmonster3HyperLightspray,
  onCloudflow5,
  onCloudboomStrike,
];
