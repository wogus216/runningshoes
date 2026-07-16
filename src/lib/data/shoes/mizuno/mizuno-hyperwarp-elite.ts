import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'mizuno-hyperwarp-elite',
  slug: 'mizuno-hyperwarp-elite',
  brand: 'Mizuno',
  name: '하이퍼워프 엘리트',
  image: '/images/shoes/mizuno/hyperwarpelit/side.webp',
  images: [
    '/images/shoes/mizuno/hyperwarpelit/side.webp',
    '/images/shoes/mizuno/hyperwarpelit/top.webp',
    '/images/shoes/mizuno/hyperwarpelit/outsole.webp',
    '/images/shoes/mizuno/hyperwarpelit/front.webp',
    '/images/shoes/mizuno/hyperwarpelit/back.webp',
  ],
  category: '레이싱',
  rating: 5,
  status: 'new',
  price: 349000,
  description: '미즈노의 풀마라톤 카본 레이싱화. 170g에 38mm 스택으로 퓨어보다 쿠셔닝이 풍부하며, PEBA 미드솔과 카본 플레이트로 장거리에서 안정적인 추진력을 제공합니다.',
  oneliner: '170g에 38mm 스택, 풀마라톤 특화 카본 레이서',
  editorComment: '하이퍼워프 엘리트는 퓨어(139g/34mm)와 프로(201g/39mm) 사이에서 최적의 균형점을 찾은 마라톤 레이싱화입니다. 170g에 38mm 스택은 풀마라톤 후반부에서도 충분한 쿠셔닝을 제공하면서 가벼움을 유지합니다. 3-3.5mm 로우 드롭과 PEBA+카본 조합이 효율적인 전방 추진을 만들어내며, 서브엘리트~엘리트 러너의 마라톤 무기로 최적입니다. 34만 9천원으로 베이퍼플라이(30만 9천원)와 경쟁하며, 안정적인 플랫폼이 장점입니다.\n\n사이즈·구매 가이드: 토박스가 좁은 내로우 폭이고 와이드 옵션이 없으므로 발볼 넓은 러너는 반드시 반 사이즈 업 후 매장 시착을 거치세요. 349,000원에 km당 약 1,163원은 레이스 전용 투자이며, 풀마라톤 서브3~서브3:30 목표 러너에게 적합합니다. 베이퍼플라이 4나 메타스피드 스카이+를 함께 비교해 착화감과 안정성 차이를 확인해보세요.',
  tags: ['레이싱', '카본', 'PEBA', '마라톤', '엘리트'],

  specs: {
    weight: 170,
    cushioning: 7,
    responsiveness: 9,
    stability: 5,
    drop: 4,
    durability: 300,
  },

  biomechanics: {
    stackHeight: { heel: 38, forefoot: 34.5 },
    drop: 3.5,
    carbonPlate: true,
    plateType: 'full-length carbon',
    midsoleType: 'PEBA',
    optimalPace: '3:00-4:30 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'caution',
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
    recommended: ['풀마라톤 엘리트', '하프마라톤 대회용', '서브3:30 마라토너', '안정적인 카본 레이서 선호'],
    notRecommended: ['입문 러너', '데일리 훈련용', '발볼 넓은 러너', '힐스트라이커'],
  },

  features: ['170g 경량', 'PEBA 미드솔', '풀렝스 카본 플레이트', '38mm 마라톤 최적 스택', '3.5mm 로우 드롭'],

  priceAnalysis: {
    msrp: 349000,
    costPerKm: 1163,
    valueRating: 6,
    priceTier: 'super-premium',
    alternatives: ['nike-vaporfly-4', 'asics-metaspeed-sky-plus', 'saucony-endorphin-pro-5'],
  },

  detailedSpecs: {
    weight: '170g (US M9)',
    stackHeight: '힐 38mm / 포어풋 34.5mm',
    drop: '3-3.5mm',
    midsole: 'PEBA 폼',
    plate: '풀렝스 카본 플레이트',
    outsole: '러버 아웃솔',
    upper: '경량 메쉬',
    width: '좁음 (반 사이즈 업 권장)',
    durability: '300km',
    price: '₩349,000',
    costPerKm: '약 ₩1,163/km (300km 기준)',
    footType: '전족부/중족부 착지',
    landingPattern: '중족부/전족부 착지',
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 90,
      text: '하이퍼워프 엘리트는 미즈노 하이퍼워프 3형제 중 가장 균형 잡힌 마라톤 레이싱화입니다. 170g으로 충분히 가벼우면서 38mm 스택이 풀마라톤 후반부 35km 이후에도 쿠셔닝을 보장합니다. PEBA 미드솔과 풀렝스 카본 플레이트의 자연스러운 추진감이 인상적이며, 3.5mm 로우 드롭으로 미드풋/전족부 착지에 최적화되어 있습니다. 토박스가 좁아 발볼 넓은 한국 러너는 반 사이즈 업이 필수이고, 와이드 옵션이 없는 점이 아쉽습니다. 34만 9천원에 300km 내구성이라 km당 약 1,163원으로 가성비보다는 레이스데이 성능에 집중한 신발이며, 베이퍼플라이(309,000원)와 비교해 안정적인 플랫폼이 차별점입니다. 평발 러너는 안정성이 부족하니 주의가 필요하고, 무릎 부담을 줄이려면 충분한 훈련 베이스가 필요합니다. 서브3~서브3:30 한국 마라토너의 레이스데이 최적 선택입니다.',
    },
    { userType: '상급 러너', rating: 5, text: '춘천 마라톤 풀코스 서브3 목표로 구매했습니다. 170g에 38mm 스택이 35km 이후에도 쿠셔닝을 유지해주고, 3.5mm 드롭이 전방 추진을 자연스럽게 만들어줍니다. 베이퍼플라이(309,000원)보다 안정감이 좋고, 씨엘로보다 가벼워서 한국 마라톤 대회에서 선택지가 넓어졌어요. 토박스가 좁아서 275mm에 반 사이즈 업해서 280으로 신고 있는데, 발볼 넓은 한국 러너는 꼭 매장 시착하세요. 무릎 부하를 PEBA 폼이 잘 흡수해줘서 후반 30km 이후에도 무릎 통증 없이 완주했습니다. 300km 내구성으로 레이스 전용 관리하면 3~4번의 풀마라톤을 뛸 수 있습니다.' },
    { userType: '중급 러너', rating: 4, text: '서울 하프마라톤에서 1시간 35분을 1시간 32분으로 3분 단축했습니다. 170g 경량에 카본 플레이트의 추진감은 확실하지만, 토박스가 좁아 발볼 넓은 한국 러너에게는 빡빡합니다. 270mm 발볼 106mm인데 와이드 옵션이 없어서 반 사이즈 업해도 약간 조이는 느낌이에요. 가성비로 따지면 km당 약 1,163원이라 부담이 있지만, 레이스데이 성능을 생각하면 투자 가치가 있습니다. 평발 경향이 있어서 20km 이후 발 안쪽이 피로해지는데, 안정성이 필요한 러너는 프로 모델이 더 나을 수 있어요.' },
  ],

  similarShoes: ['nike-vaporfly-4', 'asics-metaspeed-sky-plus', 'mizuno-hyperwarp-pure', 'mizuno-hyperwarp-pro'],
  purchaseLinks: [],
};
