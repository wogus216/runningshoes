import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'saucony-ride-19',
  slug: 'saucony-ride-19',
  brand: 'Saucony',
  name: '라이드 19',
  image: '/images/shoes/saucony/ride19/side.webp',
  images: [
    '/images/shoes/saucony/ride19/side.webp',
    '/images/shoes/saucony/ride19/top.webp',
    '/images/shoes/saucony/ride19/outsole.webp',
    '/images/shoes/saucony/ride19/front.webp',
    '/images/shoes/saucony/ride19/back.webp',
  ],
  category: '입문화',
  rating: 4,
  status: 'new',
  price: 179000,
  description: '써코니의 대표 데일리 트레이너. 개선된 SCF PWRRUN+ 폼으로 전작보다 부드럽고 반응성 좋은 주행감을 제공하며, 10mm 넓어진 전족부로 편안한 핏을 갖췄습니다.',
  oneliner: '255g에 개선된 PWRRUN+, 더 부드럽고 넓어진 데일리 트레이너',
  editorComment: '라이드 19는 전작(라이드 18) 대비 SCF PWRRUN+ 폼을 개선해 "더 가볍고, 부드럽고, 반응성 좋은" 착지감을 실현했습니다. 전족부가 10mm 넓어져 한국 러너의 넓은 발볼에 더 친화적이며, 255g 무게는 전작과 동일합니다. 17만 9천원으로 라이드 18(15만 9천원)보다 2만원 올랐지만, 미국 기준 $145로 같은 카테고리 중 합리적인 가격입니다. 와이드 옵션 제공으로 발볼 걱정을 덜어주며, 주 3-5회 데일리 훈련에 가장 신뢰할 수 있는 중립화입니다.\n\n사이즈·구매 가이드: 토박스가 표준 폭이라 발볼이 보통인 러너에게 잘 맞으며, 넓은 발볼이라면 와이드(2E) 옵션을 선택하세요. 정가 179,000원에 내구성 700km 기준 km당 약 256원으로 입문화 중 내구성 대비 가성비 최상입니다. 같은 입문·데일리화로는 페가수스 41·고스트 17이 대안입니다.',
  tags: ['입문화', '데일리', '쿠셔닝', '중립'],

  specs: {
    weight: 255,
    cushioning: 7,
    responsiveness: 6,
    stability: 6,
    drop: 8,
    durability: 700,
  },

  biomechanics: {
    stackHeight: { heel: 36, forefoot: 28 },
    drop: 8,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'SCF PWRRUN+',
    optimalPace: '5:00-7:00 min/km',
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
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'good',
  },

  targetUsers: {
    recommended: ['입문 러너', '데일리 트레이닝', '중립 발', '편안한 쿠셔닝 선호'],
    notRecommended: ['레이싱', '빠른 템포 러닝', '과내전 러너'],
  },

  features: ['개선된 SCF PWRRUN+ 미드솔', 'FORMFIT 기술', '10mm 넓어진 전족부', '와이드 옵션 제공', '8mm 드롭'],

  priceAnalysis: {
    msrp: 179000,
    costPerKm: 256,
    valueRating: 8,
    priceTier: 'mid',
    alternatives: ['nike-pegasus-41', 'asics-gel-nimbus-28', 'brooks-ghost-17'],
  },

  detailedSpecs: {
    weight: '255g (US M9)',
    stackHeight: '힐 36mm / 포어풋 28mm',
    drop: '8mm (8.5mm 실측)',
    midsole: 'SCF PWRRUN+ (개선된 질소 주입 TPU)',
    plate: '없음',
    outsole: 'PWRTRAC 러버',
    upper: '엔지니어드 메쉬',
    width: '표준 (D), 와이드 (2E) 옵션',
    durability: '700km',
    price: '₩179,000',
    costPerKm: '약 ₩256/km (700km 기준)',
    footType: '중립',
    landingPattern: '후족부/중족부 착지',
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 85,
      text: '라이드 19는 전작의 장점을 유지하면서 쿠셔닝을 부드럽게 개선한 안정적 업데이트입니다. 개선된 SCF PWRRUN+ 폼이 전작의 단단한 느낌(HA 26.1)을 줄이고 더 쿠션감 있는 착지를 제공합니다. 252g 경량에 37mm 힐 스택, 8mm 드롭 구성으로 무릎 보호가 충분하고, SA 141급 충격흡수로 입문자도 안심하고 달릴 수 있습니다. 전족부 10mm 확장으로 토박스가 넓어져 발볼 넓은 한국 러너에게 큰 장점이며, 와이드 옵션까지 있어 평발이나 넓은 발 러너도 편합니다. 17만 9천원에 700km 내구성이면 km당 약 256원으로 가성비 최고 수준이고, 통기성 5/5로 여름 러닝에도 쾌적합니다. 라이드 18 사용자라면 더 부드러워진 쿠셔닝을 체감할 수 있어 업그레이드 가치가 충분합니다.',
    },
    { userType: '입문 러너', rating: 5, text: '라이드 18에서 업그레이드했어요. 265mm 와이드 착용 중인데, 전족부가 10mm 넓어져서 토박스 압박이 완전히 사라졌습니다. 발볼이 넓은 편이라 와이드 옵션이 있는 게 결정적이었어요. 한강 잠원~반포 구간 주 3회 5km 뛰는데, 확실히 착지가 부드러워져서 무릎 부담이 줄었습니다. 252g이라 가벼운 느낌이고, 700km 내구성이면 km당 약 256원이라 가성비도 좋아요. 한국 러닝 커뮤니티에서 입문화 추천 1순위인 이유를 알겠습니다.' },
    { userType: '중급 러너', rating: 4, text: '주간 35km 데일리 훈련용으로 쓰고 있습니다. 5분30초/km 페이스에서 252g 무게가 부담 없고, 37mm 힐 스택 덕에 18보다 쿠셔닝이 부드러워져서 장거리 15km 이상에서 피로감이 덜해요. 토박스가 넓어져서 발볼 270mm인 저도 표준 폭으로 편하게 신습니다. 다만 빠른 페이스(4:30/km 이하)에서는 여전히 물렁한 느낌이라 템포런은 스피드 5로 돌리고 있습니다. 무릎 보호와 가성비(km당 약 256원)를 모두 잡은 데일리화입니다.' },
  ],

  similarShoes: ['saucony-ride-18', 'nike-pegasus-41', 'brooks-ghost-17', 'asics-gel-nimbus-28'],
  relatedPosts: [
    { slug: 'saucony-ride-18-vs-19-comparison', title: '라이드 18 vs 19 — 세대 비교' },
    { slug: 'saucony-running-shoes-lineup-tier-guide-2026', title: '써코니 러닝화 계급도' },
  ],
  purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dRV7Ln' }],
};
