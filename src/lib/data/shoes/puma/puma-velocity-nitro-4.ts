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
      userType: '중급 러너',
      rating: 5,
      text: '페가수스 41에서 갈아탔는데 57g 차이가 발에서 바로 느껴집니다. 224g은 신발을 안 신은 것 같아요. 주 4회 한강 여의도~마포대교 8km를 5분 페이스로 뛰는데, 풀 Nitro Foam이 전작 듀얼 폼보다 반응성이 직관적이에요. 34mm 힐 스택에서 나오는 쿠셔닝이 무릎 충격을 적절히 흡수해주면서도 반응성 67.5% 에너지 리턴으로 빠져나가는 느낌이 좋습니다. 세일가 140,000원에 이 성능이면 페가수스(159,000원)보다 확실히 가성비 좋습니다. 265mm D 사이즈인데 토박스가 좁아서 와이드를 살 걸 후회해요. 한국 러너라면 발볼 확인 후 와이드 모델을 강력 추천합니다. 500km 넘게 신어도 아웃솔 마모가 적어서 내구성도 만족스럽습니다.',
    },
    {
      userType: '템포 러너',
      rating: 5,
      text: '서울숲 야간 런 주 2회, 성수대교~뚝섬 코스에서 PumaGrip의 진가가 나옵니다. 비 온 뒤 젖은 보도블록에서도 미끄러짐 제로예요. 10km 44분 템포런까지 커버 가능한 만능 트레이너입니다. 224g 경량에 10mm 드롭 구성이라 힐스트라이크부터 미드풋까지 다양한 착지에 대응합니다. 8월 습도 80% 서울 야간에도 통기성이 최상이라 발이 쾌적해요. 한국 여름 러닝에 이만한 데일리 트레이너는 못 찾았습니다. 500km 좀 넘게 신었는데 아웃솔 마모도 적은 편이에요. 토박스가 좁은 편이라 발볼 넓은 분은 와이드 필수이고, 무릎이 약한 러너라면 34mm 스택의 충격흡수력이 도움됩니다. 가성비로는 179,000원 정가도 훌륭한데 세일가 14만원대면 진짜 가격 파괴예요.',
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
    { slug: 'puma-deviate-nitro-3-vs-4-comparison', title: '디비에이트 나이트로 3 vs 4' },
    { slug: 'puma-running-shoes-lineup-tier-guide-2026', title: '푸마 러닝화 계급도' },
  ],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/x2cZ9hMP' }],
};
