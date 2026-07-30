import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'saucony-endorphin-azura',
  slug: 'saucony-endorphin-azura',
  brand: 'Saucony',
  name: '엔돌핀 아주라',
  image: '/images/shoes/saucony/endorphinazura/side.webp',
  images: [
    '/images/shoes/saucony/endorphinazura/side.webp',
    '/images/shoes/saucony/endorphinazura/top.webp',
    '/images/shoes/saucony/endorphinazura/outsole.webp',
    '/images/shoes/saucony/endorphinazura/front.webp',
    '/images/shoes/saucony/endorphinazura/back.webp',
  ],
  category: '데일리',
  rating: 4,
  status: 'new',
  price: 189000,
  description: '써코니의 논-플레이트 데일리 퍼포먼스 트레이너. PWRRUN PB 슈퍼폼과 SPEEDROLL 지오메트리로 카본 없이도 빠르고 부드러운 주행감을 제공합니다.',
  oneliner: '240g에 PWRRUN PB 슈퍼폼, 플레이트 없는 데일리 스피드',
  editorComment: '엔돌핀 아주라는 엔돌핀 스피드에서 나일론 플레이트를 빼고 스택을 40mm로 높인 "플레이트리스 퍼포먼스 트레이너"입니다. PWRRUN PB 슈퍼폼과 SPEEDROLL 로커가 만드는 스냅피한 전환감이 핵심이며, 이지런부터 템포런까지 다양한 페이스에서 자연스러운 라이드를 제공합니다. 18만 9천원으로 스피드 5(21만 9천원)보다 3만원 저렴하면서 일상 훈련에 더 적합합니다. 경쟁 모델은 아디다스 에보 SL, 뉴발란스 레벨 v5, 푸마 벨로시티 나이트로 4입니다.\n\n사이즈·구매 가이드: 토박스가 표준 폭이며 와이드 옵션이 없으므로, 발볼이 넓다면 반 사이즈 업 또는 시착을 권장합니다. 정가 189,000원에 내구성 600km 기준 km당 약 315원입니다. 같은 데일리 퍼포먼스 트레이너로는 아디제로 Evo SL·레벨 V5가 대안입니다.',
  tags: ['데일리', '퍼포먼스 트레이너', '논플레이트', '스피드'],

  specs: {
    weight: 240,
    cushioning: 7,
    responsiveness: 8,
    stability: 6,
    drop: 8,
    durability: 600,
  },

  biomechanics: {
    stackHeight: { heel: 40, forefoot: 32 },
    drop: 8,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'PWRRUN PB',
    optimalPace: '4:00-6:00 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'good',
    kneeIssues: 'good',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'good',
    wideOptions: false,
    winterCompatibility: 'good',
    summerCompatibility: 'good',
  },

  targetUsers: {
    recommended: ['데일리 퍼포먼스 훈련', '템포런~이지런 겸용', '가벼운 트레이너 선호', '엔돌핀 라인 입문'],
    notRecommended: ['대회 레이싱', '안정화 필요 러너', '맥시멀 쿠셔닝 선호'],
  },

  features: ['PWRRUN PB 슈퍼폼', 'SPEEDROLL 로커 지오메트리', 'XT-900 아웃솔', '논-플레이트 디자인', '240g 경량'],

  priceAnalysis: {
    msrp: 189000,
    costPerKm: 315,
    valueRating: 8,
    priceTier: 'mid',
    alternatives: ['adidas-adizero-evo-sl', 'new-balance-rebel-v5', 'puma-velocity-nitro-4'],
  },

  detailedSpecs: {
    weight: '240g (US M9)',
    stackHeight: '힐 40mm / 포어풋 32mm',
    drop: '8mm',
    midsole: 'PWRRUN PB (PEBA 기반 슈퍼폼)',
    plate: '없음',
    outsole: 'XT-900 러버',
    upper: '엔지니어드 메쉬',
    width: '표준 (D)',
    durability: '600km',
    price: '₩189,000',
    costPerKm: '약 ₩315/km (600km 기준)',
    footType: '중립',
    landingPattern: '중족부/전족부 착지',
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 84,
      text: '18만 9천원에 PWRRUN PB 슈퍼폼을 데일리 트레이너에 담은 것이 아주라의 가치입니다. 플레이트 없이도 SPEEDROLL 로커가 빠른 전환을 만들어주고, 40mm 힐 스택에 8mm 드롭 구성으로 장거리에서도 쿠셔닝을 유지합니다. 233g 경량에 SA 140급 충격흡수로 무릎 보호가 좋고, 스피드 5처럼 5K 인터벌에 쓰기엔 반발력이 부족하지만 6분/km 이지런부터 4:30/km 템포런까지 편안하게 커버합니다. 600km 내구성에 km당 약 315원으로 가성비 우수합니다. 토박스가 표준 사이즈라 발볼 넓은 한국 러너는 반드시 시착하세요. 와이드 옵션이 없어 넓은 발볼 러너는 반사이즈 업을 고려해야 합니다. 평발 러너에게도 40mm 스택 쿠셔닝이 충분한 보호를 제공합니다.',
    },
    {
        userType: '모델 선택 — 아주라 vs 엔돌핀 스피드 5',
        text: '같은 라인에서 데일리용을 고를 때, 아주라는 플레이트가 없는 쪽입니다. 발목·아킬레스에 걸리는 부담이 적어 매일 신기에 적합하고, 233g의 무게라 주 40km 수준의 훈련량에서도 다리에 남는 피로가 적습니다. SPEEDROLL 지오메트리가 5분/km 안팎에서 전환을 매끄럽게 만듭니다. 반대로 반발 자체는 경쟁 모델인 아디제로 에보 SL(209,000원)보다 약한 편이라, 바운스를 우선한다면 그쪽이 맞습니다. 와이드 옵션이 없어 발볼이 넓다면 반 치수 업이 필요하고, 내구성 600km로 운용 비용은 무난합니다.',
      },
    {
        userType: '모델 선택 — 라이드 계열에서 올라오는 단계',
        text: '기본 데일리에서 퍼포먼스 트레이너로 한 단계 올라가는 지점에 맞습니다. 라이드 계열과 비교하면 233g으로 가볍고 반응이 빠른 대신, 40mm 스택으로 쿠션량은 유지해 급격한 변화가 아닙니다. 플레이트가 없어 발목·아킬레스 부담도 적어 적응 기간이 짧습니다. 토박스 폭이 넉넉한 편은 아니라 발볼이 넓으면 주의가 필요하고, 189,000원·km당 약 315원입니다.',
      },
  ],

  similarShoes: ['adidas-adizero-evo-sl', 'new-balance-rebel-v5', 'puma-velocity-nitro-4', 'saucony-endorphin-speed-5'],
  purchaseLinks: [],
};
