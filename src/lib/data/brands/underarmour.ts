import type { Brand } from '@/types/brand';

export const underArmourBrand: Brand = {
  id: 'under-armour',
  name: 'Under Armour',
  nameKo: '언더아머',
  tagline: 'The Only Way Is Through',
  description:
    '1996년 케빈 플랭크가 할머니 집 지하실에서 땀을 빨리 말리는 기능성 티셔츠로 시작한 미국 스포츠 브랜드로, 1998년 메릴랜드주 볼티모어로 본사를 옮겼습니다. 러닝화에서는 2018년 선보인 UA HOVR 쿠셔닝과 고무 아웃솔 없이 폼이 바닥을 겸하는 UA Flow가 핵심 기술이며, 최신 라인은 HOVR+ 폼을 쓰는 인피니트(쿠션 데일리)와 카본 플레이트 레이싱 라인 벨로시티로 나뉩니다. 한국에서는 언더아머코리아가 공식 온라인스토어를 운영합니다.',
  founded: 1996,
  headquarters: '미국 메릴랜드주 볼티모어',
  website: 'https://www.underarmour.co.kr',
  technologies: [
    {
      id: 'under-armour-hovr-plus',
      name: 'UA HOVR+',
      nameKo: 'HOVR+',
      category: 'midsole',
      description: '언더아머가 "가장 새롭고 탄력 있는 HOVR"라고 소개하는 HOVR 쿠셔닝의 최신 버전입니다.',
      benefits: ['충격 흡수', '높은 에너지 리턴', '장거리 쿠션 유지'],
      scienceExplanation:
        '언더아머 공식 설명에 따르면 UA HOVR는 "부드럽거나 탄력 있거나 둘 중 하나인 기존 쿠션과 달리 둘 다를 갖춘" 쿠셔닝으로, 착지 때 에너지를 되돌려 앞으로 밀어 줍니다. HOVR+는 그 최신·고탄성 버전으로 인피니트 엘리트 2에 풀사이즈로 들어갔고, RunRepeat 실측 에너지 리턴은 힐 72.6%·전족부 74.8%입니다.',
      performanceRating: 8,
      usedInShoes: ['under-armour-infinite-elite-2'],
    },
    {
      id: 'under-armour-flow',
      name: 'UA Flow',
      nameKo: 'UA 플로우',
      category: 'outsole',
      description: '고무 아웃솔 없이 미드솔 폼이 그대로 지면에 닿도록 만든 언더아머의 쿠셔닝 겸 바닥 구조입니다.',
      benefits: ['고무 아웃솔을 없앤 경량화', '노면 접지', '부드러운 착지감'],
      scienceExplanation:
        '언더아머는 UA Flow가 "부드러우면서도 매우 튼튼해 고무 아웃솔이 필요 없고, 더 가볍고 접지가 좋다"고 설명합니다. 벨로시티 엘리트 2에서는 전족부 Pebax 층 아래 바닥층으로 쓰였는데, RunRepeat 드레멜 테스트 마모가 6.2mm로 커 레이스 전용 내구성으로 보는 편이 맞습니다.',
      performanceRating: 6,
      usedInShoes: ['under-armour-velociti-elite-2'],
    },
    {
      id: 'under-armour-carbon-plate',
      name: 'Carbon Fiber Plate',
      nameKo: '카본 플레이트',
      category: 'plate',
      description: '벨로시티 엘리트 라인의 풀사이즈 탄소 섬유 플레이트입니다.',
      benefits: ['추진력 보조', '전족부 강성'],
      scienceExplanation:
        '벨로시티 엘리트 2는 Pebax와 UA Flow 두 폼 층 사이에 풀사이즈 탄소 섬유 플레이트를 넣은 구조입니다(한국 공식 상세). RunRepeat는 플레이트가 "꽤 단단하다"고 적었습니다.',
      performanceRating: 7,
      usedInShoes: ['under-armour-velociti-elite-2'],
    },
  ],
};
