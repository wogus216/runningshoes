import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'puma-velocity-nitro-4',
  slug: 'puma-velocity-nitro-4',
  brand: 'Puma',
  name: '벨로시티 나이트로 4',
  image: '/images/shoes/puma/velocity_Nitro4 .webp',
  images: [
    '/images/shoes/puma/velocitynitro4/side.webp',
    '/images/shoes/puma/velocitynitro4/front.webp',
    '/images/shoes/puma/velocitynitro4/back.webp',
    '/images/shoes/puma/velocitynitro4/top.webp',
    '/images/shoes/puma/velocitynitro4/outsole.webp',
  ],
  category: '입문화',
  rating: 5,
  price: 179000,
  description: '푸마의 대표 데일리 트레이너로, 풀 Nitro Foam 미드솔로 가볍고 반응성이 뛰어납니다. 2025년 최고의 가성비 데일리 트레이너로 평가받고 있습니다.',
  oneliner: '224g에 67.5% 리턴, 14만원대 가성비 최강 데일리 트레이너',
  editorComment: '페가수스 41(281g)보다 57g 가볍고, 67.5% 에너지 리턴은 입문화 카테고리에서 독보적인 수치입니다. 세일가 14만원대면 페가수스(₩159,000), 노바블라스트(₩169,000)보다 저렴하면서 성능은 동급 이상입니다. 풀 Nitro Foam으로 전작의 듀얼 폼 구조에서 단일 폼으로 바뀌면서 반응성이 한층 직관적이 됐습니다. 치명적 약점은 좁은 토박스로, 발볼 넓은 한국 러너는 와이드 모델을 반드시 선택해야 합니다. 통기성이 최상위급이라 한국 여름 러닝에 특히 적합합니다.\n\n사이즈·구매 가이드: 토박스가 좁은 편(narrow)이므로 발볼 넓은 러너는 와이드 모델을 반드시 선택하세요. 와이드 옵션이 있으니 매장 착화 후 결정을 권합니다. 179,000원 ÷ 500km = km당 약 358원입니다. 비슷한 경량 데일리 대안으로는 노바블라스트 5와 마하 6을 비교해보세요.',
  tags: ['데일리 트레이너', '경량', '가성비'],

  specs: {
    weight: 224,
    cushioning: 7,
    responsiveness: 8,
    stability: 7,
    drop: 10,
    durability: 500,
  },

  biomechanics: {
    stackHeight: {
      heel: 34,
      forefoot: 24,
    },
    drop: 10,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'Nitro Foam',
    optimalPace: '4:30-6:30 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'good',
    kneeIssues: 'good',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'narrow',
    flatFootCompatibility: 'good',
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'excellent',
  },

  targetUsers: {
    recommended: ['데일리 트레이닝', '템포 러닝', '가성비 중시', '경량화 선호', '중급 러너'],
    notRecommended: ['넓은 발볼', '맥시멀 쿠셔닝 필요', '안정화 필요'],
  },

  features: ['풀 Nitro Foam', 'PumaGrip 아웃솔', '경량 224g', '67.5% 에너지 리턴'],

  priceAnalysis: {
    msrp: 179000,
    streetPrice: 140000,
    costPerKm: 358,
    valueRating: 10,
    priceTier: 'mid',
    alternatives: ['nike-pegasus-41', 'asics-novablast-5', 'new-balance-rebel-v5'],
  },

  reviews: [
    {
        userType: '모델 선택 — 페가수스 대비 60g 가벼운 데일리',
        text: '같은 가격대 데일리 중 무게 차이가 뚜렷한 선택지입니다. 224g으로 페가수스 계열(280g대)보다 약 60g 가벼워, 5분/km 안팎의 페이스에서 발 회전이 확연히 달라집니다. 전작의 듀얼 폼에서 풀 Nitro Foam으로 바뀌며 반응이 더 직접적으로 전달되는 것이 세대 차이입니다. 힐 34mm 스택에 에너지 리턴 67.5%로 쿠션과 반발의 균형을 잡았고, 아웃솔 마모가 적어 내구성도 좋습니다. 세일가 14만원대면 페가수스(159,000원)보다 낮습니다. 다만 기본 토박스가 좁으므로 발볼이 넓다면 처음부터 와이드를 선택해야 합니다.',
      },
    {
        userType: '예상 적합 — 장마·야간 러닝의 접지와 통기성',
        text: '젖은 노면과 고습 환경에서 강점이 뚜렷한 데일리입니다. PumaGrip 아웃솔이라 비 온 뒤 보도블록에서도 접지가 안정적이고, 어퍼 통기성이 좋아 습도 높은 여름 야간 러닝에서 열감이 적습니다. 장마와 열대야가 반복되는 국내 여름 조건에 맞는 조합입니다. 224g에 10mm 드롭이라 힐부터 미드풋까지 착지 성향을 가리지 않고, 10km 템포런까지 커버합니다. 아웃솔 마모도 느린 편입니다. 토박스가 좁아 발볼이 넓다면 와이드가 필요하고, 179,000원 정가 기준에서도 운용 비용이 낮습니다.',
      },
    {
      userType: '에디터 분석',
      rating: 90,
      text: '2025년 최고의 가성비 데일리 트레이너로 강력 추천합니다. "15만원대 가볍고 반응 좋은 신발 없나요?" 질문에 정답입니다. 224g으로 페가수스(281g)보다 57g 가볍고, 67.5%의 뛰어난 에너지 리턴을 제공합니다. 발볼이 좁은 편이라 한국인 발에는 와이드 모델 권장합니다. 토박스 폭이 좁아 한국 러너 평균 발볼에 맞지 않을 수 있으니 매장 착화 필수입니다. 140,000원대(세일가)로 페가수스(159,000원), 노바블라스트(169,000원)보다 저렴하면서 성능은 동급이상. 500km 내구성으로 km당 약 358원의 가성비는 입문화~중급 카테고리 최상위입니다. 평발 러너에게도 무난하고, 무릎 부담이 적은 34mm 힐 스택이 장거리 훈련까지 소화합니다. 템포 러닝까지 커버하는 만능 트레이너로, 가성비 중시 중급 러너에게 최적입니다.',
    },
  ],

  detailedSpecs: {
    weight: '224g (남성 US 9 기준)',
    stackHeight: '힐 34mm / 포어풋 24mm',
    drop: '10mm (Lab 측정치)',
    midsole: 'Nitro Foam (풀 렝스, Supercritical 폼)',
    plate: '없음',
    outsole: 'PumaGrip 러버',
    upper: '엔지니어드 메쉬',
    width: '표준 (좁은 편, 와이드 옵션 있음)',
    durability: '500km',
    price: '₩179,000 (MSRP) / 세일 시 ₩140,000~',
    costPerKm: '약 ₩358/km (500km 기준)',
    footType: '발볼 좁은 러너 / 와이드 옵션 있음',
    landingPattern: '힐스트라이크~미드풋',
  },

  similarShoes: ['nike-pegasus-41', 'asics-novablast-5', 'hoka-mach-6', 'saucony-ride-18'],
  relatedPosts: [
    { slug: 'nike-pegasus-premium-vs-puma-velocity-nitro-4-2026', title: '벨로시티 4 vs 페가수스 프리미엄 — 10만원 비싼데 84g 무겁다' },
    { slug: 'puma-deviate-nitro-3-vs-4-comparison', title: '디비에이트 나이트로 3 vs 4' },
    { slug: 'puma-running-shoes-lineup-tier-guide-2026', title: '푸마 러닝화 계급도' },
  ],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/x2cZ9hMP' }],
};
