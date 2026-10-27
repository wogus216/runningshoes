import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'hoka-cielo-x1',
  slug: 'hoka-cielo-x1',
  brand: 'Hoka',
  name: '씨엘로 X1',
  image: '/images/shoes/hoka/cielox1/side.webp',
  images: [
    '/images/shoes/hoka/cielox1/side.webp',
    '/images/shoes/hoka/cielox1/top.webp',
    '/images/shoes/hoka/cielox1/outsole.webp',
    '/images/shoes/hoka/cielox1/front.webp',
    '/images/shoes/hoka/cielox1/back.webp',
  ],
  category: '레이싱',
  rating: 5,
  status: 'new',
  price: 329000,
  description: '호카의 엘리트 카본 레이싱화. 듀얼 덴시티 PEBA 미드솔과 카본 파이버 플레이트, 46mm 슈퍼맥스 스택으로 풀마라톤에서 최고의 쿠셔닝과 추진력을 제공합니다.',
  oneliner: '208g 듀얼 PEBA+카본, 호카 최고의 레이서',
  editorComment: '씨엘로 X1은 호카의 아이코닉한 맥시멀 쿠셔닝을 레이싱화에 담은 모델입니다. 208g(2.0 기준)으로 전작(249g) 대비 41g 감량했고, 브랜드 표기 46mm 힐/39mm 전족부(RunRepeat 측정 38.8/28.1mm) 스택에 듀얼 덴시티 PEBA 폼과 카본 플레이트를 결합했습니다. 공격적인 전족부 로커와 울트라 반응성 미드솔이 빠른 전환을 돕고, 풀마라톤 후반부에서도 쿠셔닝이 유지됩니다. 32만 9천원으로 로켓 X3(29만 9천원)보다 3만원 비싸지만, 호카 레이싱 라인업의 정점입니다. Rodrigo-Carranza et al.(2024)의 450km 실도로 마모 연구에서 PEBA 계열 폼은 굽힘 에너지 리턴을 4분의 1 가까이(−24.6%) 잃었습니다(EVA는 −10.5%). 시엘로의 수명 표기가 짧은 건 소재의 숙명이니 레이스·자극 훈련 전용으로 아끼세요.\n\n사이즈·구매 가이드: RunRepeat 측정 토박스가 71.3mm로 좁은 편이고 와이드 옵션이 없어, 발볼 넓은 러너는 반드시 시착 후 구매하세요. 정가 329,000원에 예상 수명 250~350km(추정) 기준 km당 약 940~1,320원이며, 예산을 줄이고 싶다면 로켓 X 3, 더 높은 안정성을 원하면 메타스피드 스카이+가 대안입니다.',
  tags: ['레이싱', '카본', 'PEBA', '맥시멀', '풀마라톤'],

  specs: {
    weight: 208,
    cushioning: 10,
    responsiveness: 10,
    stability: 5,
    drop: 11,
    durability: 300,
  },

  biomechanics: {
    stackHeight: { heel: 39, forefoot: 28 },
    drop: 11,
    carbonPlate: true,
    plateType: 'full-length carbon fiber',
    midsoleType: 'Dual-Density PEBA',
    optimalPace: '3:30-4:30 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'good',
    kneeIssues: 'good',
    shinSplints: 'caution',
  },

  koreanFootFit: {
    toBoxWidth: 'narrow',
    flatFootCompatibility: 'fair',
    wideOptions: false,
    winterCompatibility: 'fair',
    summerCompatibility: 'excellent',
  },

  targetUsers: {
    recommended: ['풀마라톤 대회용', '서브3:30 마라토너', '호카 로커 선호', '맥시멀 쿠셔닝+레이싱 겸용'],
    notRecommended: ['입문 러너', '데일리 훈련용', '발볼 넓은 러너', '과내전 러너'],
  },

  features: ['듀얼 덴시티 PEBA 미드솔', '카본 파이버 플레이트', '맥시멀 스택 (브랜드 표기 힐 46mm)', '공격적 전족부 로커', '208g 경량 (2.0 기준)', '충격흡수 힐 160 SA (RunRepeat 실측, 2.0)', '에너지 리턴 전족부 78.4% (RunRepeat 실측, 2.0)'],

  priceAnalysis: {
    msrp: 329000,
    costPerKm: 1097,
    valueRating: 6,
    priceTier: 'super-premium',
    alternatives: ['nike-vaporfly-4', 'asics-metaspeed-sky-plus', 'hoka-rocket-x-3'],
  },

  detailedSpecs: {
    weight: '208g (US M9, 2.0 기준)',
    stackHeight: '힐 38.8mm / 포어풋 28.1mm (RunRepeat 랩, 2.0 US 9 기준 / 브랜드 표기 46/39mm)',
    drop: '10.7mm (RunRepeat 랩, 2.0 US 9 기준 / 브랜드 표기 7mm)',
    midsole: '듀얼 덴시티 PEBA 폼',
    plate: '풀렝스 카본 파이버 플레이트',
    outsole: '러버 아웃솔',
    upper: '경량 엔지니어드 메쉬',
    width: '좁은 편 (와이드 없음) · 토박스 71.3mm(2.0) — RunRepeat 평균 73.2mm보다 1.9mm 좁고 랩 원문 "the narrow-fit upper limits this shoe\'s versatility."',
    durability: '300km',
    price: '₩329,000',
    costPerKm: '약 ₩1,097/km (300km 기준)',
    footType: '중립 (레이싱)',
    landingPattern: '중족부/전족부 착지',
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 89,
      text: '씨엘로 X1은 호카의 맥시멀 DNA를 레이싱에 녹인 결과물입니다. 208g 초경량에 브랜드 표기 46mm 힐/39mm 전족부 스택(RunRepeat 측정 38.8/28.1mm, 드롭 10.7mm)이며, 듀얼 덴시티 PEBA+카본 플레이트 조합은 장거리 후반까지 쿠션과 반발을 유지하도록 설계된 구성입니다. 베이퍼플라이의 불안정함이 싫은 러너에게 강력 추천하며, 높은 스택이 무릎 충격을 효과적으로 분산시켜 후반부 페이스 드롭을 줄여줍니다. 32만 9천원은 슈퍼슈즈 중 중간 가격대이고, 300km 내구성으로 km당 약 1,097원은 대회 전용에 적합합니다. 다만 와이드 옵션이 없어 발볼 넓은 한국 러너는 토박스 사이즈를 반드시 확인하고 시착해야 하며, 평발 러너에게는 안정성이 다소 부족할 수 있습니다. 로켓 X 3(29만 9천원)보다 3만원 비싸지만 맥시멀 쿠셔닝은 장거리에서 확실한 차별점이 있는 가성비 좋은 카본 레이서입니다.',
    },
    {
        userType: '예상 적합 — 풀코스 후반 페이스 유지가 과제인 러너',
        text: '풀코스에서 30km 이후 페이스 드롭이 과제인 러너를 겨냥한 맥시멀 레이서입니다. 브랜드 표기 힐 46mm·전족부 39mm(RunRepeat 측정 38.8/28.1mm)의 높은 스택에 PEBA와 카본을 조합해, 다리가 지친 상태에서도 로커가 전환을 이어주고 반발이 남는 구조입니다. 208g으로 이 스택에서는 가벼운 축입니다. 같은 급의 베이퍼플라이 계열과 비교하면 접지 안정성과 전족부 쿠션량에서 앞서, 속도보다 완주 후반의 안정에 무게를 둔 선택입니다. 토박스가 71.3mm(RunRepeat)로 좁은 편이고 와이드 옵션이 없어 발볼이 넓다면 시착이 필요합니다. 329,000원·예상 수명 250~350km(추정) 기준 km당 약 940~1,320원입니다.',
      },
    {
        userType: '예상 적합 — 하프~풀코스 맥시멀 레이서',
        text: '하프에서 풀코스까지, 거리가 긴 레이스를 겨냥한 맥시멀 스택 레이서입니다. 브랜드 표기 힐 46mm·전족부 39mm(RunRepeat 측정 38.8/28.1mm)의 높은 스택에 PEBA와 카본을 얹어 쿠션과 반발을 동시에 가져가는 구성이고, 로커 지오메트리가 후반 전환을 돕습니다. 드롭은 RunRepeat 측정 10.7mm(브랜드 표기 7mm)입니다. 반대로 10K 이하 짧은 거리에서는 스택이 낮고 가벼운 레이서가 더 유리해, 거리 선택이 분명한 신발입니다. 토박스가 빡빡하고 와이드 옵션이 없어 발볼이 넓다면 얇은 레이싱 양말로도 여유가 부족할 수 있습니다. 329,000원·예상 수명 250~350km(추정) 기준 km당 약 940~1,320원입니다.',
      },
  ],

  similarShoes: ['nike-vaporfly-4', 'asics-metaspeed-sky-plus', 'hoka-rocket-x-3', 'saucony-endorphin-pro-5'],
  relatedPosts: [
    { slug: 'running-shoe-plate-guide-2026', title: '플레이트 완전 해설 — 카본·유리섬유·나일론' },
  ],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/51u1uP82' }, { store: '쿠팡', url: 'https://link.coupang.com/a/g5YC50ZG1I' }],
};
