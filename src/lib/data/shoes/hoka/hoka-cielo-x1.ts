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
  oneliner: '208g에 46mm PEBA 스택, 호카 최고의 레이서',
  editorComment: '씨엘로 X1은 호카의 아이코닉한 맥시멀 쿠셔닝을 레이싱화에 담은 모델입니다. 208g(2.0 기준)으로 전작(249g) 대비 41g 감량했고, 46mm 힐/39mm 전족부 슈퍼맥스 스택에 듀얼 덴시티 PEBA 폼과 카본 플레이트를 결합했습니다. 공격적인 전족부 로커와 울트라 반응성 미드솔이 빠른 전환을 돕고, 풀마라톤 후반부에서도 쿠셔닝이 유지됩니다. 32만 9천원으로 로켓 X3(29만 9천원)보다 3만원 비싸지만, 호카 레이싱 라인업의 정점입니다.\n\n사이즈·구매 가이드: 토박스가 standard 폭이고 와이드 옵션이 없어, 발볼 넓은 러너는 반드시 시착 후 구매하세요. 정가 329,000원에 내구성 300km 기준 km당 약 1,097원이며, 예산을 줄이고 싶다면 로켓 X 3, 더 높은 안정성을 원하면 메타스피드 스카이+가 대안입니다.',
  tags: ['레이싱', '카본', 'PEBA', '맥시멀', '풀마라톤'],

  specs: {
    weight: 208,
    cushioning: 8,
    responsiveness: 9,
    stability: 5,
    drop: 7,
    durability: 300,
  },

  biomechanics: {
    stackHeight: { heel: 46, forefoot: 39 },
    drop: 7,
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
    toBoxWidth: 'standard',
    flatFootCompatibility: 'fair',
    wideOptions: false,
    winterCompatibility: 'fair',
    summerCompatibility: 'excellent',
  },

  targetUsers: {
    recommended: ['풀마라톤 대회용', '서브3:30 마라토너', '호카 로커 선호', '맥시멀 쿠셔닝+레이싱 겸용'],
    notRecommended: ['입문 러너', '데일리 훈련용', '좁은 발 러너', '과내전 러너'],
  },

  features: ['듀얼 덴시티 PEBA 미드솔', '카본 파이버 플레이트', '46mm 슈퍼맥스 스택', '공격적 전족부 로커', '208g 경량 (2.0 기준)'],

  priceAnalysis: {
    msrp: 329000,
    costPerKm: 1097,
    valueRating: 6,
    priceTier: 'super-premium',
    alternatives: ['nike-vaporfly-4', 'asics-metaspeed-sky-plus', 'hoka-rocket-x-3'],
  },

  detailedSpecs: {
    weight: '208g (US M9, 2.0 기준)',
    stackHeight: '힐 46mm / 포어풋 39mm',
    drop: '7mm',
    midsole: '듀얼 덴시티 PEBA 폼',
    plate: '풀렝스 카본 파이버 플레이트',
    outsole: '러버 아웃솔',
    upper: '경량 엔지니어드 메쉬',
    width: '표준',
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
      text: '씨엘로 X1은 호카의 맥시멀 DNA를 레이싱에 녹인 결과물입니다. 208g 초경량에 46mm 힐/39mm 전족부 스택으로 7mm 드롭을 제공하며, 듀얼 덴시티 PEBA+카본 플레이트 조합이 풀마라톤 35km 이후에도 발이 살아있게 해줍니다. 베이퍼플라이의 불안정함이 싫은 러너에게 강력 추천하며, 46mm 맥시멀 스택이 무릎 충격을 효과적으로 분산시켜 후반부 페이스 드롭을 줄여줍니다. 32만 9천원은 슈퍼슈즈 중 중간 가격대이고, 300km 내구성으로 km당 약 1,097원은 대회 전용에 적합합니다. 다만 와이드 옵션이 없어 발볼 넓은 한국 러너는 토박스 사이즈를 반드시 확인하고 시착해야 하며, 평발 러너에게는 안정성이 다소 부족할 수 있습니다. 로켓 X 3(29만 9천원)보다 3만원 비싸지만 46mm 맥시멀 쿠셔닝은 장거리에서 확실한 차별점이 있는 가성비 좋은 카본 레이서입니다.',
    },
    {
      userType: '상급 러너',
      rating: 5,
      text: '서울마라톤 서브3:20으로 완주했습니다. 씨엘로의 46mm 힐 스택이 35km 이후 진가를 발휘하는데, 다리가 지쳐도 로커가 굴러가듯 전환시켜주고 PEBA의 반발이 살아있어서 후반부 페이스 드롭이 적었어요. 208g이라 42km 내내 발이 가볍고, 카본 플레이트의 추진력 덕에 무릎 피로가 확실히 줄어들었습니다. 베이퍼플라이보다 안정적이고 39mm 전족부 스택의 쿠셔닝이 풍부해서 풀마라톤에 더 적합하다고 봅니다. 토박스가 표준 수준이라 발볼 넓은 한국 러너는 시착 필수이고, 와이드 옵션이 없는 게 아쉽지만 260mm 표준발인 저에겐 문제없었습니다. 300km 내구성에 32만 9천원이면 km당 약 1,097원인데, 대회 전용으로 3~4번 뛰면 가성비는 로켓 X 3과 비교할 만합니다.',
    },
    {
      userType: '중급 러너',
      rating: 4,
      text: '하프마라톤 1시간 40분 목표 러너입니다. 씨엘로 X1으로 하프 PB를 3분 단축했어요. 208g 경량에 46mm 맥시멀 스택이 무릎 충격을 확실히 줄여주고, 39mm 전족부 스택에서 PEBA+카본의 반발력이 오르막에서도 느껴집니다. 7mm 드롭이 베이퍼플라이(8mm)보다 낮아 중족부 착지에 유리하고, 로커 지오메트리가 전환을 도와줘서 후반부에도 리듬이 유지됩니다. 다만 10K 이하 짧은 거리에서는 베이퍼플라이가 더 빠른 느낌이고, 풀마라톤이나 하프에서 진가를 발휘하는 신발이에요. 발볼이 넓은 한국 러너인데 토박스가 빡빡해서 얇은 레이싱 양말로 바꿔야 했고, 와이드 옵션이 없는 건 아쉽습니다. 32만 9천원에 300km 내구성이라 km당 약 1,097원인데, 대회 전용으로 3~4번 레이스에 활용하면 가성비는 나쁘지 않습니다.',
    },
  ],

  similarShoes: ['nike-vaporfly-4', 'asics-metaspeed-sky-plus', 'hoka-rocket-x-3', 'saucony-endorphin-pro-5'],
  purchaseLinks: [],
};
