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
  editorComment: '엔돌핀 프로 5는 전작과 동일한 206g/39.5mm 스택/8mm 드롭을 유지하면서 카본 플레이트를 슬롯 디자인으로 변경해 전환 효율을 높였습니다. PWRTRAC 아웃솔이 새로 적용되어 그립력이 향상되었고, PWRRUN HG 상층+PWRRUN PB 하층의 듀얼 폼 구성은 그대로입니다. 29만 9천원으로 베이퍼플라이 4(30만 9천원)보다 1만원 저렴하면서 더 넓은 핏을 제공합니다. 단, 레이싱 전용이라 내구성(300km)이 짧고 데일리 훈련에는 비적합합니다.\n\n사이즈·구매 가이드: 토박스가 표준 폭이며 와이드 옵션이 없으므로, 발볼이 넓다면 시착을 권장합니다. 정가 299,000원에 내구성 300km 기준 km당 약 997원으로 대회 전용 운용을 권장합니다. 같은 레이싱화로는 베이퍼플라이 4·아디제로 아디오스 프로 4가 대안입니다.',
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
    { userType: '상급 러너', rating: 5, text: '서울마라톤 서브3:15 목표로 구매했습니다. 275mm 착용 중인데 토박스가 넉넉한 편이라 발볼 걱정이 없어요. 206g이라 35km 이후에도 무게 부담 없이 카본의 추진력이 살아있어서 후반부 페이스 유지에 큰 도움이 됩니다. 베이퍼플라이보다 39.5mm 높은 스택이 쿠셔닝을 유지해주고, 안정감이 좋아서 풀마라톤에서는 프로 5가 더 낫다고 봅니다. 무릎 부담도 적어서 회복이 빨랐습니다. 한국 대회 코스 특성상 오르막이 많은 구간에서도 슬롯 플레이트의 유연한 전환이 도움됩니다.' },
    { userType: '중급 러너', rating: 4, text: '하프마라톤 1시간 35분 목표 러너입니다. 프로 4에서 업그레이드했는데 슬롯 플레이트 덕분에 전환이 더 자연스러워졌어요. 8mm 드롭이 후족부 착지에서 전족부로의 이행을 부드럽게 해줍니다. 다만 300km 내구성은 대회 전용으로만 써야 하는 제약이 있고, km당 약 997원이라 가성비는 아쉽습니다. 훈련은 스피드 5로, 대회는 프로 5로 나눠 신고 있어요. 발볼이 270mm 표준인데 토박스 여유가 있어서 와이드 없이도 편합니다. 무릎 보호 면에서도 39.5mm 스택이 충격을 잘 흡수해줍니다.' },
  ],

  similarShoes: ['nike-vaporfly-4', 'asics-metaspeed-sky-plus', 'adidas-adios-pro-4', 'saucony-endorphin-elite-2'],
  purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dRV51m' }],
};
