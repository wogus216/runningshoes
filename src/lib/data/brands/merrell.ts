import type { Brand } from '@/types/brand';

export const merrellBrand: Brand = {
  id: 'merrell',
  name: 'Merrell',
  nameKo: '머렐',
  tagline: 'The simple power of being outside',
  description:
    '1981년 로시뇰(Rossignol) 스키 회사 임원이던 클라크 마티스(Clark Matis)와 존 슈바이처(John Schweizer)가 하이킹 부츠 브랜드로 세운 머렐은, 1997년부터 울버린 월드와이드(Wolverine World Wide)의 자회사입니다. 모압(Moab) 하이킹화로 잘 알려진 아웃도어 신발 브랜드이며, 트레일러닝에서는 Vibram 아웃솔을 폭넓게 쓰는 어질리티 피크, 제로드롭 베어풋 라인인 트레일 글러브, 카본 플레이트 레이서 MTL 스피드아크 피크까지 라인업을 갖추고 있습니다.',
  founded: 1981,
  website: 'https://merrellkorea.co.kr',
  technologies: [
    {
      id: 'merrell-floatpro',
      name: 'FloatPro',
      nameKo: '플로트프로',
      category: 'midsole',
      description: '머렐의 자체 경량 미드솔 폼으로, 트레일러닝 라인 전반에 쓰입니다.',
      benefits: ['가벼운 무게', '긴 시간 유지되는 쿠셔닝(공식 설명)', '모델별로 다른 폼과 조합'],
      scienceExplanation:
        '머렐 공식 테크 페이지는 FloatPro를 "불필요한 무게 없이 오래가는 쿠셔닝·편안함·에너지 리턴을 주는 자체 경량 폼"으로 설명합니다. RunRepeat 랩은 이를 EVA 계열 폼으로 분류하며, 어질리티 피크 6에서 에너지 리턴 힐 41.9%·전족 47.0%, 트레일 글러브 8에서 51.6~51.7%로 트레일 평균(59.7%)보다 낮게 측정했습니다. MTL 스피드아크 피크는 FloatPro를 하층에 두고 PEBA 폼을 상층에 올려 에너지 리턴을 61.9~64.1%까지 끌어올렸습니다.',
      performanceRating: 5,
      usedInShoes: ['merrell-agility-peak-6', 'merrell-trail-glove-8', 'merrell-mtl-speedarc-peak'],
    },
    {
      id: 'merrell-flexplate',
      name: 'FlexPlate',
      nameKo: '플렉스플레이트',
      category: 'plate',
      description: '미드솔에 넣은 경량 플레이트로, 유연성을 유지하면서 안정성·보호·추진 효율을 높이는 머렐의 플레이트 기술입니다.',
      benefits: ['불규칙한 노면에서 비틀림 억제(공식 설명)', '돌 보호', '카본 버전은 추진력 보조'],
      scienceExplanation:
        '머렐 공식 테크 페이지는 FlexPlate를 "유연성을 유지하면서 안정성과 보호를 높이고, 고르지 않은 지형에서 비틀림을 막아 움직임 효율을 높이는 경량 플레이트"로 설명합니다. MTL 스피드아크 피크에는 카본 버전이 들어가며, RunRepeat가 신발을 잘라 확인한 결과 3/4 길이에 전족부가 두 갈래로 갈라진 형태였습니다. 갈라진 앞부분이 바위 위에서 앞발이 노면에 맞춰 휘게 해, 통짜 카본보다 덜 딱딱하다는 것이 랩의 평가입니다(굽힘 16.7N, 비틀림 16.9Nm로 트레일 평균과 비슷).',
      performanceRating: 7,
      usedInShoes: ['merrell-mtl-speedarc-peak'],
    },
    {
      id: 'merrell-vibram',
      name: 'Vibram Outsole (Megagrip · TC5+ · Traction Lug)',
      nameKo: '비브람 아웃솔',
      category: 'outsole',
      description: '머렐 트레일러닝화 대부분에 쓰이는 Vibram 고무 아웃솔로, 모델별로 Megagrip·Megagrip Elite·TC5+ 컴파운드와 Traction Lug 설계를 조합합니다.',
      benefits: ['젖은 노면·마른 노면 접지력', '아웃솔 마모 저항', '러그 표면 돌기로 접지 면적 확대(Traction Lug)'],
      scienceExplanation:
        '머렐 공식 테크 페이지는 Vibram Traction Lug가 그립과 접지 면적을 늘리고 진흙·이물질을 털어내도록 설계됐으며, Megagrip과 TC5+가 젖은 노면과 마른 노면 모두에서 접지력을 준다고 설명합니다. RunRepeat 실측 접지력 계수는 어질리티 피크 6(Megagrip) 0.64, 트레일 글러브 8(TC5+) 0.69, MTL 스피드아크 피크(Megagrip Elite) 1.02였고(트레일 평균 0.68), 아웃솔 마모는 0.6~0.8mm로 모두 트레일 평균(0.9mm)보다 적었습니다.',
      performanceRating: 9,
      usedInShoes: ['merrell-agility-peak-6', 'merrell-trail-glove-8', 'merrell-mtl-speedarc-peak'],
    },
    {
      id: 'merrell-matryx',
      name: 'Matryx',
      nameKo: '매트릭스',
      category: 'upper',
      description: '케블라 섬유를 포함한 고강도 원사로 짠 단일층 어퍼 소재로, 내구성·통기성·경량성의 균형을 노립니다.',
      benefits: ['찢김·마모 저항', '높은 통기성', '가벼운 단일층 구조'],
      scienceExplanation:
        '머렐 공식 테크 페이지는 Matryx를 "케블라 등 고강도 원사로 보강한 직조 어퍼"로 설명하고, MTL 스피드아크 피크 공식 제품 페이지는 케블라와 고강도 폴리아미드 멀티필라멘트를 한 겹으로 짰다고 밝힙니다. RunRepeat 랩에서 이 어퍼는 통기성 79 BR(트레일 평균 71 BR), 3시간 시험 후 건조율 65%(평균 51%)로 측정됐습니다.',
      performanceRating: 8,
      usedInShoes: ['merrell-mtl-speedarc-peak'],
    },
  ],
};
