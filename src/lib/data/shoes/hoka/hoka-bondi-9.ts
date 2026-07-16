import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'hoka-bondi-9',
  slug: 'hoka-bondi-9',
  brand: 'Hoka',
  name: '본디 9',
  image: '/images/shoes/hoka/bondi9/side.webp',
  images: ['/images/shoes/hoka/bondi9/side.webp', '/images/shoes/hoka/bondi9/front.webp', '/images/shoes/hoka/bondi9/back.webp', '/images/shoes/hoka/bondi9/outsole.webp'],
  category: '쿠션화',
  rating: 5,
  price: 229000,
  description: '호카의 최대 쿠셔닝 모델로, 극강의 푹신함과 안정감을 제공합니다. 관절 보호가 필요하거나 장시간 서있는 분들에게 최적입니다.',
  oneliner: '303g 최대 쿠션, 123.2mm 초광폭 플랫폼',
  editorComment: '본디 9는 146 SA 충격흡수와 41mm 힐 스택으로 관절 보호가 최우선인 러너를 위한 신발입니다. 123.2mm 초광폭 플랫폼은 안정성(8/10)을 제공하지만, 303g 무게는 Glycerin 22(283g)보다 20g 무겁습니다. Supercritical EVA 폼은 클리프턴 10의 CMEVA보다 탄성이 좋지만, 72.5mm narrow 토박스로 발볼 넓은 한국 러너는 와이드 필수입니다. 22만 9천원 프리미엄 가격이지만 550km 내구성과 7분/km 이상 느린 페이스 전용입니다.\n\n사이즈·구매 가이드: 토박스가 narrow(72.5mm)이므로 발볼 넓은 러너는 반드시 와이드 옵션을 선택하세요. 정가 229,000원에 내구성 550km 기준 km당 약 416원이며, 맥시멀 쿠션이 필요하면서 예산이 부담된다면 젤 님버스 28나 1080 V14가 비슷한 성격의 대안입니다.',
  tags: ['맥시멀 쿠셔닝', '관절 보호', '장거리용'],

  specs: {
    weight: 303,
    cushioning: 10,
    responsiveness: 5,
    stability: 8,
    drop: 9,
    durability: 550,
  },

  biomechanics: {
    stackHeight: {
      heel: 41,
      forefoot: 32,
    },
    drop: 9,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'Supercritical EVA',
    optimalPace: '6:00-8:00 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'excellent',
    achillesTendinopathy: 'excellent',
    kneeIssues: 'excellent',
    shinSplints: 'excellent',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'excellent',
    wideOptions: true,
    winterCompatibility: 'excellent',
    summerCompatibility: 'fair',
  },

  targetUsers: {
    recommended: ['관절 보호 최우선', '장시간 서있는 직업', '체중이 있는 러너', '회복 러닝 전용', '느린 페이스 러너'],
    notRecommended: ['빠른 페이스 훈련', '경량화 선호', '민첩한 움직임 필요'],
  },

  features: ['최대 쿠셔닝', '넓은 베이스', '로커 기술', 'Supercritical EVA'],

  priceAnalysis: {
    msrp: 229000,
    streetPrice: 195000,
    costPerKm: 416,
    valueRating: 7,
    priceTier: 'high',
    alternatives: ['asics-gel-nimbus-28', 'new-balance-1080-v14', 'brooks-glycerin-22'],
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 90,
      text: '무릎이나 발목 부상 이력이 있는 러너, 체중이 있는 러너에게 최적의 맥시멀 쿠션화입니다. SA 146 충격흡수와 41mm 힐 스택으로 관절 보호 최상위급이며, 123.2mm 초광폭 플랫폼으로 안정성도 뛰어납니다. 303g 무게에 Supercritical EVA 미드솔은 일반 EVA보다 탄성이 오래 유지되어 550km 내구성으로 km당 약 416원의 가성비를 제공합니다. 토박스가 72.5mm로 좁아 발볼 넓은 한국 러너는 반드시 와이드 옵션을 선택하세요. 22만 9천원은 프리미엄 가격이지만 관절 보호가 필요한 러너에게는 충분한 투자 가치가 있습니다. 평발 러너에게도 초광폭 베이스가 아치를 안정적으로 지지해주며, 무릎 통증 이력이 있는 러너도 7분/km 이상 편안한 조깅에서 안심하고 사용할 수 있는 맥시멀 쿠션의 정석입니다.',
    },
    {
      userType: '무릎 통증 러너',
      rating: 5,
      text: '작년 가을 마라톤 훈련 중 우측 슬개건염이 왔는데, 정형외과 선생님이 쿠션 좋은 신발 권해서 본디 9 와이드로 바꿨습니다. 280mm 와이드인데 착화감이 넉넉하고, 한강 반포 구간 10km를 7분 페이스로 뛰는데 이전에 매번 6km 지점에서 오던 무릎 통증이 완전히 사라졌어요. 91kg 체중에도 41mm 스택 덕에 바닥이 안 꺼지는 느낌이라 믿음직합니다. 발볼이 넓은 한국 남성이라 토박스 72.5mm는 좀 빡빡하게 느껴졌는데, 와이드 선택하니 딱 맞더라고요. 가격이 22만원대로 좀 있지만 550km 내구성에 km당 약 416원이면 무릎 건강 생각했을 때 충분히 가성비 있는 투자입니다.',
    },
    {
      userType: '장거리 러너',
      rating: 4,
      text: '매주 토요일 팔당댐까지 25km 롱런에 본디 9를 신는데, 20km 넘어서도 발바닥 피로가 거의 없습니다. SA 146 충격흡수와 41mm 힐 스택이 장거리에서 진가를 발휘해요. 킬로 7분 전후 슬로우 런에는 세상에서 제일 편한 신발이고, 평발인 제 아치도 123.2mm 광폭 플랫폼이 잘 잡아줍니다. 한 가지 아쉬운 건 303g이다 보니 동호회 그룹런에서 페이스가 올라갈 때 발이 무겁게 느껴진다는 거예요. 토박스가 72.5mm로 좁아서 발볼 넓은 한국 러너라면 와이드 필수이고, 저도 와이드 선택했더니 장거리에서 발가락 불편함이 사라졌습니다. 550km 내구성에 km당 약 416원 가성비면 무릎 부담 없이 장거리를 즐기고 싶은 러너에게 본디가 정답입니다.',
    },
  ],

  detailedSpecs: {
    weight: '303g (남성 US 9 기준)',
    stackHeight: '힐 41mm / 포어풋 32mm',
    drop: '9mm (Lab 측정치)',
    midsole: 'Supercritical EVA (초경량 고탄성 폼)',
    plate: '없음',
    outsole: '듀라브레이드 러버',
    upper: '엔지니어드 메쉬',
    width: '표준 / 와이드',
    durability: '550km',
    price: '₩229,000 (MSRP) / 세일 시 ₩195,000~',
    costPerKm: '약 ₩416/km (550km 기준)',
    footType: '표준~넓은 발볼 / 평발 OK / 관절 보호 필요한 러너',
    landingPattern: '힐스트라이크 (맥시멀 쿠셔닝)',
  },

  similarShoes: ['asics-gel-nimbus-28', 'new-balance-1080-v14', 'brooks-glycerin-22', 'puma-magnify-nitro-3'],
  relatedPosts: [
    { slug: 'bondi-9-vs-glycerin-max-2-cushion-2026', title: '본디 9 vs 글리세린 맥스 2 — 맥스쿠션 대결' },
  ],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/5TQWU20i' }],
};
