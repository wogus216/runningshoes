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
  editorComment: '라이드 19는 전작(라이드 18) 대비 SCF PWRRUN+ 폼을 개선해 "더 가볍고, 부드럽고, 반응성 좋은" 착지감을 실현했습니다. 전족부가 10mm 넓어져 한국 러너의 넓은 발볼에 더 친화적이며, 255g 무게는 전작과 동일합니다. 17만 9천원으로 라이드 18(15만 9천원)보다 2만원 올랐지만, 미국 기준 $145로 같은 카테고리 중 합리적인 가격입니다. 와이드 옵션 제공으로 발볼 걱정을 덜어주며, 주 3-5회 데일리 훈련에 가장 신뢰할 수 있는 중립화입니다. 500km에서 무조건 교체라는 통념의 출처는 1985년 기계 실험입니다 — 요즘 소재에 재검증된 적이 없는 숫자인 데다, 이 신발의 질소 주입 TPU 계열은 폼 중에서도 내구가 긴 축입니다. 700km 표기를 믿고 아웃솔 마모로 판단하세요.\n\n사이즈·구매 가이드: 토박스가 표준 폭이라 발볼이 보통인 러너에게 잘 맞으며, 넓은 발볼이라면 와이드(2E) 옵션을 선택하세요. 정가 179,000원에 내구성 700km 기준 km당 약 256원으로 입문화 중 내구성 대비 가성비 최상입니다. 같은 입문·데일리화로는 페가수스 41·고스트 17이 대안입니다.',
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
    {
        userType: '세대 비교 — 라이드 18에서 넘어오는 경우',
        text: '전작 18과 비교하면 핏에서 가장 큰 변화가 있습니다. 전족부가 약 10mm 넓어져 토박스 압박이 크게 줄었고, 와이드 옵션까지 감안하면 발볼 넓은 러너의 선택지가 뚜렷하게 개선된 세대입니다. 착지 감각도 전작보다 부드러워져 관절에 오는 자극이 완만해졌습니다. 252g으로 가벼운 축이고, 내구성 700km 기준 km당 약 256원이라 데일리 중 운용 비용이 가장 낮은 편입니다. 반대로 단단한 반발을 선호했다면 전작 쪽 감각이 맞을 수 있습니다.',
      },
    {
        userType: '세대 비교 — 18보다 부드럽고 넓어졌다',
        text: '전작 18과 비교하면 두 가지가 바뀌었습니다. 힐 37mm 스택으로 쿠션이 부드러워져 15km 이상 장거리에서 피로가 덜하고, 토박스가 넓어져 발볼이 있어도 표준 폭으로 대응되는 경우가 늘었습니다. 252g으로 무게는 비슷합니다. 반대로 4:30/km 이하의 빠른 페이스에서는 폼이 물러 반응이 무뎌지므로 템포런은 다른 신발로 나누는 편이 맞습니다. km당 약 256원으로 데일리 중 운용 비용이 낮은 축입니다.',
      },
  ],

  similarShoes: ['saucony-ride-18', 'nike-pegasus-41', 'brooks-ghost-17', 'asics-gel-nimbus-28'],
  relatedPosts: [
    { slug: 'saucony-ride-18-vs-19-comparison', title: '라이드 18 vs 19 — 세대 비교' },
    { slug: 'saucony-running-shoes-lineup-tier-guide-2026', title: '써코니 러닝화 계급도' },
    { slug: 'running-shoe-500km-replacement-myth-2026', title: '"500km 교체설"의 진실 — 소재별 수명' },
  ],
  purchaseLinks: [],
};
