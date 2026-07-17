import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'puma-deviate-nitro-3',
  slug: 'puma-deviate-nitro-3',
  brand: 'Puma',
  name: '디비에이트 나이트로 3',
  image: '/images/shoes/puma/deviate_NITRO3.webp',
  images: [
    '/images/shoes/puma/deviatenitro3/side.webp',
    '/images/shoes/puma/deviatenitro3/front.webp',
    '/images/shoes/puma/deviatenitro3/back.webp',
    '/images/shoes/puma/deviatenitro3/top.webp',
    '/images/shoes/puma/deviatenitro3/outsole.webp',
  ],
  category: '쿠션화',
  rating: 4,
  price: 219000,
  description: '푸마의 슈퍼트레이너로, Nitro Foam과 PWRPLATE로 레이싱화 수준의 반응성을 제공하면서도 내구성이 뛰어납니다.',
  oneliner: '22만원대 카본 슈퍼트레이너, 마하X보다 5만원 절약',
  editorComment: '마하 X(₩269,000)나 슈퍼블라스트 2(₩259,000)보다 3~5만원 저렴한 21만 9천원에 카본 PWRPLATE 슈퍼트레이너를 경험할 수 있습니다. Nitro Foam + Nitro Elite 듀얼폼이 레이싱화 수준의 반응성을 훈련에서 구현하고, 268g은 템포런에 투입 가능한 무게입니다. 세일가 18만 5천원까지 내려가면 가성비는 더욱 극대화됩니다. 발볼이 좁은~표준 수준이라 발이 넓은 한국 러너는 반사이즈 업을 고려하세요. v4가 출시되며 핏이 개선됐으니 비교 검토를 추천합니다.\n\n사이즈·구매 가이드: 토박스가 좁은~표준(standard) 수준이며 와이드 옵션이 없어 발볼 넓은 러너는 반사이즈 업을 고려하거나 v4(와이드 옵션 있음)를 검토하세요. 219,000원 ÷ 450km = km당 약 487원입니다. 핏이 개선된 최신 버전을 원하면 디비에이트 나이트로 4, 카본 없이 비용을 줄이려면 슈퍼블라스트 2를 비교해보세요.',
  tags: ['슈퍼트레이너', 'PWRPLATE', '템포 러닝'],

  specs: {
    weight: 268,
    cushioning: 8,
    responsiveness: 8,
    stability: 7,
    drop: 10,
    durability: 450,
  },

  biomechanics: {
    stackHeight: {
      heel: 37.4,
      forefoot: 27.3,
    },
    drop: 10.1,
    carbonPlate: true,
    plateType: 'curved',
    midsoleType: 'Nitro Foam + Nitro Elite',
    optimalPace: '4:00-5:30 min/km',
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
    summerCompatibility: 'excellent',
  },

  targetUsers: {
    recommended: ['템포 훈련', '하프 마라톤', '슈퍼트레이너 필요', '중상급 러너'],
    notRecommended: ['입문 러너', '느린 회복 러닝', '최대 쿠셔닝 필요'],
  },

  features: ['Nitro Foam + Nitro Elite 듀얼폼', '카본 플레이트 (PWRPLATE)', '훈련용 내구성'],

  priceAnalysis: {
    msrp: 219000,
    streetPrice: 185000,
    costPerKm: 487,
    valueRating: 7,
    priceTier: 'high',
    alternatives: ['nike-vomero-18', 'asics-superblast-2', 'hoka-mach-x-3'],
  },

  reviews: [
    {
      userType: '중상급 러너',
      rating: 4,
      text: '엔돌핀 스피드 4가 500km 되어 교체하면서 v3를 세일가 185,000원에 잡았습니다. 카본 PWRPLATE가 주는 추진력은 엔돌핀 스피드와 비슷하면서, Nitro Foam 듀얼폼의 착지감이 좀 더 단단하고 직접적이에요. 37.4mm 힐 스택에서 나오는 쿠셔닝이 무릎 충격을 잘 잡아주고, 인천 송도 센트럴파크 주 2회 10km 하프마라톤 페이스 훈련에 쓰는데 4분30초대 유지가 편합니다. 268g 무게가 템포런에 적당하고, 가성비 따지면 마하 X(269,000원)보다 8만원 이상 절약할 수 있어요. 발볼이 좁은~표준이라 토박스가 한국 러너 평균 발에는 빡빡한 편이고, 270mm인데 반사이즈 업을 권합니다. 450km 내구성은 아쉽지만 세일가 기준 km당 약 487원이면 합리적입니다.',
    },
    {
      userType: '에디터 분석',
      rating: 87,
      text: '"카본 슈퍼트레이너 뭐가 좋아요?" 질문에 가성비 좋은 선택입니다. 219,000원으로 마하 X(269,000원), 슈퍼블라스트 2(259,000원)보다 4~5만원 저렴합니다. Nitro Foam + Nitro Elite 듀얼폼에 카본 플레이트(PWRPLATE)로 레이싱화 수준의 반응성을 제공합니다. 268g 무게에 37.4mm 힐 스택으로 무릎 보호와 추진력을 동시에 잡았고, 10.1mm 드롭이 힐스트라이크 러너에게도 자연스러운 전환을 유도합니다. 발볼이 좁은 편이라 한국인 발에는 반사이즈 업 고려하세요. 토박스 폭이 좁아 발볼 넓은 러너는 v4(와이드 옵션 있음)를 검토하는 것도 방법입니다. 450km 내구성으로 km당 약 487원의 가성비는 카본 슈퍼트레이너 중 합리적이며, 평발 러너에게도 무난합니다. 가성비 좋은 카본 슈퍼트레이너를 찾는 중상급 러너에게 추천합니다.',
    },
    {
      userType: '중급 러너',
      rating: 4,
      text: '하프마라톤을 서브1:50으로 목표하는 중급 러너입니다. 석촌호수 러닝코스에서 주 2회 10km 템포런을 4분40초 페이스로 뛰는데, 카본 플레이트 특유의 밀어주는 느낌이 확실해서 페이스 유지가 한결 수월합니다. 268g 무게가 인터벌보다는 템포런에 더 잘 맞는다고 느꼈고, 37.4mm 힐 스택 덕분에 10km 넘게 뛰어도 착지 충격이 덜합니다. 다만 토박스가 좁은 편이라 평소 265mm를 신는데 270mm로 올려야 했고, 450km 내구성이라 다른 카본화보다 교체 주기가 좀 짧은 편이에요. 그래도 219,000원에 이 정도 반발력이면 하프마라톤 훈련용으로는 충분히 만족스럽습니다.',
    },
  ],

  detailedSpecs: {
    weight: '268g (남성 US 9 기준)',
    stackHeight: '힐 37.4mm / 포어풋 27.3mm',
    drop: '10.1mm (Lab 측정치)',
    midsole: 'Nitro Foam + Nitro Elite 듀얼폼',
    plate: '카본 플레이트 (PWRPLATE)',
    outsole: 'PumaGrip 러버',
    upper: '니트 어퍼',
    width: '좁음~표준',
    durability: '450km',
    price: '₩219,000 (MSRP) / 세일 시 ₩185,000~',
    costPerKm: '약 ₩487/km (450km 기준)',
    footType: '발볼 좁은~표준 / 중상급 러너',
    landingPattern: '미드풋~전방 착지',
  },

  similarShoes: ['nike-vomero-18', 'asics-superblast-2', 'hoka-mach-x-3', 'saucony-endorphin-speed-5'],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/5dA8sEdt' }],
};
