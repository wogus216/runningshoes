import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'puma-deviate-nitro-elite-4',
  slug: 'puma-deviate-nitro-elite-4',
  brand: 'Puma',
  name: '디비에이트 나이트로 엘리트 4',
  image: '/images/shoes/puma/deviatenitroelite4/side.webp',
  images: [
    '/images/shoes/puma/deviatenitroelite4/side.webp',
    '/images/shoes/puma/deviatenitroelite4/front.webp',
    '/images/shoes/puma/deviatenitroelite4/back.webp',
    '/images/shoes/puma/deviatenitroelite4/angle.webp',
    '/images/shoes/puma/deviatenitroelite4/detail.webp',
  ],
  status: 'new',
  category: '레이싱',
  rating: 5,
  price: 289000,
  description: '푸마의 최신 카본 레이싱화로, ATPU 기반 NITROFOAM ELITE와 PWRPLATE를 결합해 5K부터 마라톤까지 빠른 전개를 노리는 PR 체이서용 모델입니다.',
  oneliner: '170g 초경량과 더 부드러워진 ATPU 폼, 푸마의 가장 현실적인 마라톤 슈퍼슈즈',
  editorComment: '푸마 코리아 공식 스펙 기준 Deviate NITRO Elite 4는 170g(UK 8), 40/32mm 스택, 8mm 드롭, 권장 수명 400km의 최신 레이스데이 모델입니다. Believe in the Run 리뷰에서도 전작보다 확실히 더 가볍고 부드러워졌으며, Fast-R 3보다 덜 공격적이지만 훨씬 접근하기 쉬운 마라톤 슈퍼슈즈로 평가했습니다. 한국 러너 기준으로는 카본화 입문까지 노려볼 수 있는 타입이지만, 안정화 대체재로 보기엔 여전히 레이스 중심 플랫폼입니다.\n\n사이즈·구매 가이드: 토박스 너비가 표준(standard)으로 전작보다 발볼 호환성이 개선되었으며, 와이드 옵션은 없으나 표준 발볼이면 정사이즈 착용이 가능합니다. 289,000원 ÷ 400km = km당 약 722원이므로 레이스 전용으로 운용하세요. 접근성이 더 좋은 대안으로는 SC Elite V5, 더 공격적인 레이싱을 원하면 패스트알 나이트로 엘리트 3를 비교해보세요.',
  tags: ['레이싱', '카본 플레이트', 'NITROFOAM ELITE', '신규'],

  specs: {
    weight: 170,
    cushioning: 8,
    responsiveness: 10,
    stability: 6,
    drop: 8,
    durability: 400,
  },

  biomechanics: {
    stackHeight: {
      heel: 40,
      forefoot: 32,
    },
    drop: 8,
    carbonPlate: true,
    plateType: 'curved',
    midsoleType: 'NITROFOAM ELITE (듀얼 레이어)',
    optimalPace: '3:00-4:30 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'caution',
    achillesTendinopathy: 'caution',
    kneeIssues: 'caution',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'fair',
    wideOptions: false,
    winterCompatibility: 'fair',
    summerCompatibility: 'excellent',
  },

  targetUsers: {
    recommended: ['5K~마라톤 레이스', 'PB 경신 목표 러너', '첫 카본 레이싱화 후보', '중족부 스트라이드 러너'],
    notRecommended: ['일상 조깅', '회복 러닝', '강한 안정성 필요', '극단적으로 공격적인 토스프링 선호'],
  },

  features: [
    'NITROFOAM ELITE 듀얼 레이어 미드솔',
    'PWRPLATE 카본 플레이트',
    'PUMAGRIP 아웃솔',
    '170g 초경량 (UK 8 기준)',
    '공식 권장 수명 400km',
  ],

  priceAnalysis: {
    msrp: 289000,
    streetPrice: 289000,
    costPerKm: 722,
    valueRating: 8,
    priceTier: 'premium',
    alternatives: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'new-balance-sc-elite-v5', 'puma-fast-r-nitro-elite-3'],
    valueAdvantages: ['최신 푸마 레이싱 플랫폼', '공식 170g 초경량', '풀마라톤 대응 스택', '공식몰 판매 확인'],
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 93,
      text: '푸마 코리아 공식 정보 기준으로 Elite 4는 170g 초경량에 40mm/32mm 스택, 8mm 드롭, 400km 수명을 제시하는 최신 레이스데이 모델입니다. 289,000원 가격은 알파플라이 3(370,000원)보다 확실히 저렴하고, 메타스피드 스카이+(330,000원) 대비로도 가성비가 뛰어납니다. 한국 러너 관점에서 토박스가 표준~약간 여유로 전작 Elite 3보다 발볼 호환성이 개선되었고, 와이드 옵션은 없지만 표준 발볼이면 정사이즈 착용이 가능합니다. 5K부터 풀 마라톤까지 명확히 레이스 전용으로 포지셔닝되어 있으며, 평발이나 무릎 보호가 필요한 입문 러너보다는 기록 지향 중상급 이상 러너에게 적합합니다.',
      source: 'editor',
      sourceUrl: 'https://kr.puma.com/kr/ko/pd/deviate-nitro-elite-4/312127.html?dwvar_312127_color=06',
    },
    {
      userType: 'Believe in the Run',
      rating: 92,
      text: 'Believe in the Run은 Elite 4를 전작보다 더 부드럽고 가벼운 업그레이드로 평가했습니다. 170g이라는 무게는 슈퍼슈즈 시장에서도 최상위 경량이고, 와이드한 발볼에도 true-to-size로 무난하다는 점이 한국 러너에게 희소식입니다. ATPU 폼의 에너지 리턴이 체감될 정도로 향상되었고, 카본 PWRPLATE의 추진감도 더 또렷해졌습니다. 40mm 힐 스택에서 나오는 쿠셔닝이 마라톤 후반 35km 이후 무릎 피로를 줄여주며, Fast-R 3보다 훨씬 접근하기 쉬운 레이싱화라는 총평입니다. 289,000원에 이 퍼포먼스라면 가성비 측면에서도 충분히 경쟁력 있습니다.',
      source: 'editor',
      sourceUrl: 'https://believeintherun.com/shoe-reviews/puma-deviate-nitro-elite-4-review/',
    },
    {
      userType: 'Believe in the Run',
      rating: 88,
      text: '단점으로는 평소의 푸마그립만큼 끈끈한 접지감이 아니라는 점과, Fast-R 3 같은 더 공격적인 토스프링을 기대한 러너에겐 살짝 무난하게 느껴질 수 있다는 점이 언급됐습니다. 400km 내구성은 레이싱화 중 양호한 편이고, km당 약 722원의 가성비는 알파플라이 3 대비 합리적입니다. 토박스 너비가 표준 수준으로 개선되어 발볼 넓은 한국 러너도 반사이즈 업 없이 시도해볼 만합니다. 무릎이 약한 러너라면 8mm 드롭과 40mm 스택의 충격 흡수가 레이스 후반 보호에 도움이 됩니다. 최종 평가는 지금까지 나온 Deviate Elite 중 최고이자, 푸마의 가장 완성도 높은 마라톤 레이스화에 가깝다는 쪽입니다.',
      source: 'editor',
      sourceUrl: 'https://believeintherun.com/shoe-reviews/puma-deviate-nitro-elite-4-review/',
    },
  ],

  detailedSpecs: {
    weight: '170g (UK 8 기준, 공식)',
    stackHeight: '힐 40mm / 포어풋 32mm (공식)',
    drop: '8mm (공식)',
    midsole: 'ATPU 기반 NITROFOAM ELITE 쿠셔닝 (질소 주입 듀얼 레이어)',
    plate: 'PWRPLATE 카본 플레이트',
    outsole: 'PUMAGRIP 퍼포먼스 러버',
    upper: 'ULTRAWEAVE + PWRTAPE',
    width: '표준~약간 여유 (와이드 옵션 없음)',
    durability: '400km (공식 권장 수명)',
    price: '₩289,000 (공식몰)',
    costPerKm: '약 ₩722/km (400km 기준)',
    footType: '기록 지향 러너 / 중립 발 / 중족부 스트라이드 선호',
    landingPattern: '중족부~전족부 착지',
  },

  similarShoes: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'new-balance-sc-elite-v5', 'puma-fast-r-nitro-elite-3'],
  purchaseLinks: [{ store: '네이버', url: 'https://search.shopping.naver.com/search/all?query=푸마+데비에이트+니트로+엘리트+4' }],
};
