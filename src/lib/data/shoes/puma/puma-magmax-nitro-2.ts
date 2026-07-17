import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'puma-magmax-nitro-2',
  slug: 'puma-magmax-nitro-2',
  brand: 'Puma',
  name: '매그맥스 나이트로 2',
  image: '/images/shoes/puma/magMax_NITRO2.webp',
  images: [
    '/images/shoes/puma/magmaxnitro2/side.webp',
    '/images/shoes/puma/magmaxnitro2/front.webp',
    '/images/shoes/puma/magmaxnitro2/back.webp',
    '/images/shoes/puma/magmaxnitro2/top.webp',
    '/images/shoes/puma/magmaxnitro2/outsole.webp',
  ],
  category: '쿠션화',
  rating: 4,
  price: 239000,
  description: '푸마의 슈퍼트레이너로, 디비에이트 나이트로 3의 슈퍼폼과 벨로시티의 내구성을 결합한 모델입니다. PWRPLATE로 추진력을 더하고 장거리 훈련에 적합합니다.',
  oneliner: '엘리트 슈퍼폼 + 훈련용 내구성, 두 마리 토끼 잡기',
  editorComment: '디비에이트 엘리트의 Nitro Elite Foam을 훈련용 내구성(500km) 위에 올려놓은 하이브리드 구조가 매그맥스의 정체성입니다. 23만 9천원은 슈퍼블라스트 2(₩259,000)보다 2만원 저렴하지만, TPU 플레이트(PWRPLATE)라 카본 슈퍼트레이너 대비 반발력에서 한 수 뒤집니다. 268g은 장거리 템포 훈련에 적당한 무게이고, PumaGrip 아웃솔의 접지력은 젖은 노면에서도 신뢰할 수 있습니다. 발볼은 표준 수준이라 한국 러너 대부분이 편하게 착용 가능하며, 레이싱이 아닌 훈련 중심 러너에게 실용적입니다.\n\n사이즈·구매 가이드: 토박스 너비가 표준(standard)이며 와이드 옵션은 없으나 표준 발볼 러너는 정사이즈로 편하게 착용 가능합니다. 239,000원 ÷ 500km = km당 약 478원입니다. 카본 플레이트 슈퍼트레이너를 원하면 디비에이트 나이트로 4, 더 부드러운 쿠션을 원하면 슈퍼블라스트 2를 비교해보세요.',
  tags: ['슈퍼트레이너', 'PWRPLATE', '장거리 훈련'],

  specs: {
    weight: 268,
    cushioning: 8,
    responsiveness: 8,
    stability: 7,
    drop: 10,
    durability: 500,
  },

  biomechanics: {
    stackHeight: {
      heel: 37,
      forefoot: 27,
    },
    drop: 10,
    carbonPlate: false,
    plateType: 'PWRPLATE (TPU)',
    midsoleType: 'Nitro Elite Foam',
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
    recommended: ['슈퍼트레이너 필요', '장거리 훈련', '템포 러닝', '중상급 러너'],
    notRecommended: ['입문 러너', '맥시멀 쿠셔닝 선호', '레이싱 전용'],
  },

  features: ['Nitro Elite Foam', 'PWRPLATE (TPU 플레이트)', '뛰어난 내구성', '슈퍼폼+내구성 결합'],

  priceAnalysis: {
    msrp: 239000,
    streetPrice: 200000,
    costPerKm: 478,
    valueRating: 8,
    priceTier: 'mid',
    alternatives: ['nike-vomero-18', 'asics-superblast-2', 'hoka-mach-x-3'],
  },

  reviews: [
    {
      userType: '중상급 러너',
      rating: 4,
      text: '디비에이트 엘리트 3를 레이스 전용으로 쓰면서, 매그맥스를 훈련용으로 병행합니다. 엘리트 버전의 Nitro Elite Foam이 그대로 들어가 있어서 착지감이 거의 같은데, 500km 내구성이라 훈련에서 마음 편히 밟을 수 있어요. 대전 갑천 러닝코스 주 3회 15km 장거리 템포를 4분50초 페이스로 돌리는데, TPU 플레이트가 카본만큼은 아니지만 충분한 추진력을 줍니다. 268g이 장거리에서 오히려 안정감 있게 느껴져요. 37mm 힐 스택에서 나오는 쿠셔닝이 무릎 충격을 잘 흡수해줘서 20km 넘는 LSD에서도 관절 부담이 적습니다. 발볼은 표준 수준이라 한국 러너 평균 발에 잘 맞고, 토박스 여유도 있어서 와이드 모델 없이도 충분합니다. 가성비 따지면 슈퍼블라스트 2(26만원)보다 2만원 저렴하면서 훈련용 내구성은 더 뛰어나요.',
    },
    {
      userType: '에디터 분석',
      rating: 86,
      text: '"슈퍼트레이너 필요한데 뭐가 좋을까요?" 질문에 가성비 좋은 선택입니다. 239,000원으로 보메로 18(23만원), 슈퍼블라스트 2(26만원)와 비슷한 가격대입니다. Nitro Elite Foam + TPU 플레이트로 레이싱화 느낌의 반응성을 훈련에서 경험할 수 있습니다. 268g으로 적당한 무게감, 내구성 500km로 km당 약 478원의 훈련용 가성비가 뛰어납니다. 37mm 힐 스택이 무릎 보호에 효과적이고, 발볼은 표준 수준이라 한국 러너 대부분이 편하게 착용 가능합니다. 다만 TPU 플레이트라 카본 슈퍼트레이너(마하X, 슈퍼블라스트)보다는 반발력이 약하고, 평발 러너에게는 추가 인솔을 권합니다. 토박스 폭이 넉넉한 편이라 발볼 넓은 러너도 무난하게 신을 수 있어요. 장거리 템포 훈련 중심 러너에게 추천합니다.',
    },
    {
      userType: '가성비 중시',
      rating: 4,
      text: '슈퍼블라스트2와 마하X 사이에서 고민하다가 가격 차이 때문에 매그맥스로 결정했습니다. 68kg에 주간 40km를 뛰는데, 탄천 러닝코스에서 5분 페이스 템포훈련 12km를 뛰어도 268g 무게가 부담스럽지 않아요. 카본이 아닌 TPU 플레이트라 반발력이 살짝 아쉽긴 하지만, 239,000원에 km당 약 478원이면 슈퍼트레이너 치고는 합리적인 가격이라 만족합니다. 37mm 힐 스택 쿠셔닝 덕분에 12km 템포 후에도 무릎이 편안하고, 발볼도 표준이라 착화감이 무난합니다.',
    },
  ],

  detailedSpecs: {
    weight: '268g (남성 US 9 기준)',
    stackHeight: '힐 37mm / 포어풋 27mm',
    drop: '10mm',
    midsole: 'Nitro Elite Foam',
    plate: 'PWRPLATE (TPU, 탄소 아님)',
    outsole: 'PumaGrip 러버',
    upper: '엔지니어드 메쉬',
    width: '표준',
    durability: '500km',
    price: '₩239,000 (MSRP) / 세일 시 ₩200,000~',
    costPerKm: '약 ₩478/km (500km 기준)',
    footType: '표준 발볼 / 평발 OK',
    landingPattern: '미드풋~전방 착지',
  },

  similarShoes: ['nike-vomero-18', 'asics-superblast-2', 'hoka-mach-x-3', 'saucony-endorphin-speed-5'],
  purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBKZ52' }],
};
