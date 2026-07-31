import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'saucony-endorphin-pro-5',
  slug: 'saucony-endorphin-pro-5',
  brand: 'Saucony',
  name: '엔돌핀 프로 5',
  image: '/images/shoes/saucony/endorphinpro5/side.webp',
  images: [
    '/images/shoes/saucony/endorphinpro5/side.webp',
    '/images/shoes/saucony/endorphinpro5/top.webp',
    '/images/shoes/saucony/endorphinpro5/outsole.webp',
    '/images/shoes/saucony/endorphinpro5/front.webp',
    '/images/shoes/saucony/endorphinpro5/back.webp',
  ],
  category: '레이싱',
  rating: 5,
  status: 'new',
  price: 299000,
  description: '써코니의 최상위 카본 레이싱화. PWRRUN HG + PWRRUN PB 듀얼 폼과 슬롯형 카본 플레이트로 풀마라톤/하프 대회에서 최고의 추진력을 제공합니다.',
  oneliner: '206g에 슬롯 카본 플레이트, 검증된 장거리 레이서',
  editorComment: '엔돌핀 프로 5는 전작과 동일한 206g/39.5mm 스택/8mm 드롭을 유지하면서 카본 플레이트를 슬롯 디자인으로 변경해 전환 효율을 높였습니다. PWRTRAC 아웃솔이 새로 적용되어 그립력이 향상되었고, PWRRUN HG 상층+PWRRUN PB 하층의 듀얼 폼 구성은 그대로입니다. 29만 9천원으로 베이퍼플라이 4(30만 9천원)보다 1만원 저렴하면서 더 넓은 핏을 제공합니다. 단, 레이싱 전용이라 내구성(300km)이 짧고 데일리 훈련에는 비적합합니다. 폼의 성능 저하는 발이 못 느낍니다 — 640km를 신은 신발 측정 연구에서 객관 지표는 20~28% 떨어졌는데 착용자 체감은 2.7%였습니다. 아직 푹신하다는 느낌을 믿지 말고 누적 거리로 교체를 판단하세요.\n\n사이즈·구매 가이드: 토박스가 표준 폭이며 와이드 옵션이 없으므로, 발볼이 넓다면 시착을 권장합니다. 정가 299,000원에 내구성 300km 기준 km당 약 997원으로 대회 전용 운용을 권장합니다. 같은 레이싱화로는 베이퍼플라이 4·아디제로 아디오스 프로 4가 대안입니다.',
  tags: ['레이싱', '카본', '풀마라톤', '하프마라톤'],

  specs: {
    weight: 206,
    cushioning: 7,
    responsiveness: 9,
    stability: 5,
    drop: 8,
    durability: 300,
  },

  biomechanics: {
    stackHeight: { heel: 39.5, forefoot: 31.5 },
    drop: 8,
    carbonPlate: true,
    plateType: 'full-length carbon (slotted)',
    midsoleType: 'PWRRUN HG + PWRRUN PB',
    optimalPace: '3:30-4:30 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'caution',
    achillesTendinopathy: 'caution',
    kneeIssues: 'good',
    shinSplints: 'caution',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'fair',
    wideOptions: false,
    winterCompatibility: 'fair',
    summerCompatibility: 'good',
  },

  targetUsers: {
    recommended: ['서브3:30 마라토너', '하프/10K 대회용', '경험 있는 러너', '전족부 착지 러너'],
    notRecommended: ['입문 러너', '데일리 훈련용', '과내전 러너', '발볼 넓은 러너'],
  },

  features: ['슬롯형 카본 파이버 플레이트', 'PWRRUN HG + PB 듀얼 폼', 'SPEEDROLL 지오메트리', 'PWRTRAC 아웃솔 (신규)', '206g 경량'],

  priceAnalysis: {
    msrp: 299000,
    costPerKm: 997,
    valueRating: 6,
    priceTier: 'super-premium',
    alternatives: ['nike-vaporfly-4', 'asics-metaspeed-sky-plus', 'adidas-adios-pro-4'],
  },

  detailedSpecs: {
    weight: '206g (US M9)',
    stackHeight: '힐 39.5mm / 포어풋 31.5mm',
    drop: '8mm',
    midsole: 'PWRRUN HG (상층) + PWRRUN PB (하층)',
    plate: '풀렝스 슬롯형 카본 파이버 플레이트',
    outsole: 'PWRTRAC 러버',
    upper: '경량 엔지니어드 메쉬',
    width: '표준 (D)',
    durability: '300km',
    price: '₩299,000',
    costPerKm: '약 ₩997/km (300km 기준)',
    footType: '중립 (전족부/중족부 착지 최적)',
    landingPattern: '전족부/중족부 착지',
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 88,
      text: '프로 4의 안정적인 베이스를 유지하면서 슬롯 카본 플레이트로 전환 효율을 높인 정석적 업데이트입니다. 206g 경량에 39.5mm 힐 스택, 8mm 드롭 구성으로 하프~풀마라톤에 최적화되어 있습니다. PWRRUN HG 상층+PWRRUN PB 하층의 듀얼 폼이 SA 140급 충격흡수와 70% 이상 에너지 리턴을 제공합니다. 베이퍼플라이(185g)보다 무겁지만, 넓은 핏과 안정적인 플랫폼이 장거리 레이스에서 강점이고 무릎 보호도 우수합니다. PWRTRAC 아웃솔이 젖은 노면에서도 그립을 유지해주고, 토박스가 넉넉해 발볼 넓은 한국 러너에게 적합합니다. 29만 9천원으로 베이퍼플라이 4(30만 9천원)보다 저렴하며, 300km 내구성에 km당 약 997원으로 대회 전용 가성비 합리적입니다.',
    },
    {
        userType: '예상 적합 — 풀코스 안정감을 우선하는 러너',
        text: '풀코스에서 속도보다 후반 안정감을 우선하는 러너에게 맞을 가능성이 있습니다. 206g의 무게에 39.5mm 스택으로, 베이퍼플라이 계열보다 높은 스택을 유지해 30km 이후에도 쿠셔닝이 남도록 설계됐습니다. 슬롯 플레이트 구조라 경사 변화가 잦은 코스에서 전환이 급격하지 않은 편입니다. 토박스가 넉넉해 발볼 넓은 러너의 부담이 적다는 점이 같은 급 레이서 대비 뚜렷한 차이입니다. 반대로 5K~10K에서 최고 속도를 노린다면 더 가벼운 모델이 맞습니다.',
      },
    {
        userType: '예상 적합 — 하프 1시간 30분대 목표 러너',
        text: '하프 1시간 30분대를 목표로 하는 러너에게 맞을 가능성이 있습니다. 8mm 드롭이라 로우드롭 레이서보다 후족부에서 전족부로의 이행 부담이 적고, 슬롯 플레이트 구조가 전환을 급격하지 않게 만듭니다. 전작 프로 4 대비 이 전환 감각이 개선된 부분입니다. 힐 39.5mm 스택으로 충격 흡수도 확보한 편입니다. 토박스에 여유가 있어 표준 발볼이면 와이드 없이도 무리가 없습니다. 다만 내구성 300km·km당 약 997원이라 대회 전용으로 제한되며, 훈련은 같은 라인의 엔돌핀 스피드처럼 내구성이 높은 모델로 나누는 운용이 현실적입니다.',
      },
  ],

  similarShoes: ['nike-vaporfly-4', 'asics-metaspeed-sky-plus', 'adidas-adios-pro-4', 'saucony-endorphin-elite-2'],
  relatedPosts: [
    { slug: 'running-shoe-plate-guide-2026', title: '플레이트 완전 해설 — 카본·유리섬유·나일론' },
  ],
  purchaseLinks: [],
};
