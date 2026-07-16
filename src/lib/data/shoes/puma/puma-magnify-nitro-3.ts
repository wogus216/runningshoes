import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'puma-magnify-nitro-3',
  slug: 'puma-magnify-nitro-3',
  brand: 'Puma',
  name: '매그니파이 나이트로 3',
  image: '/images/shoes/puma/magnifyNITRO3.webp',
  images: [
    '/images/shoes/puma/magnifynitro3/side.webp',
    '/images/shoes/puma/magnifynitro3/front.webp',
    '/images/shoes/puma/magnifynitro3/back.webp',
    '/images/shoes/puma/magnifynitro3/top.webp',
    '/images/shoes/puma/magnifynitro3/outsole.webp',
  ],
  category: '쿠션화',
  rating: 4,
  price: 199000,
  description: '푸마의 맥시멀 쿠셔닝 모델로, PEBA 기반 Nitro Foam과 높은 스택으로 장거리와 회복 러닝에 최적화되어 있습니다.',
  oneliner: 'PEBA 맥시멀 쿠션을 20만원 이하에, 관절 보호의 가성비파',
  editorComment: '40mm 맥시멀 스택에 PEBA 기반 Nitro Foam을 19만 9천원에 제공하는 건 Bondi 9(₩220,000)이나 님버스 28(₩259,000)과 비교할 때 확실한 가격 우위입니다. 부상 예방 전 항목 excellent 등급은 관절 보호가 절실한 러너에게 안심을 줍니다. 264g은 맥시멀 쿠션화 중 가벼운 축에 속하고, 통기성이 최상위급이라 한국 여름에도 쾌적합니다. 와이드 옵션이 없는 점이 아쉽지만 표준 발볼 기준으로는 편안하며, 빠른 페이스에는 부적합한 순수 쿠셔닝 신발이라는 포지션이 명확합니다.\n\n사이즈·구매 가이드: 토박스 너비가 표준(standard)이며 와이드 옵션은 없습니다. 발볼이 넓은 편이라면 매장 착화 후 결정하세요. 199,000원 ÷ 500km = km당 약 398원으로 맥시멀 쿠션화 중 가성비가 뛰어납니다. 같은 가격대에서 더 강한 반발감을 원하면 1080 V14, 예산을 높여 최고 쿠션을 원하면 본디 9을 비교해보세요.',
  tags: ['맥시멀 쿠셔닝', '장거리용', 'PEBA 폼'],

  specs: {
    weight: 264,
    cushioning: 9,
    responsiveness: 6,
    stability: 7,
    drop: 10,
    durability: 500,
  },

  biomechanics: {
    stackHeight: {
      heel: 40,
      forefoot: 30,
    },
    drop: 10,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'Nitro Foam (PEBA)',
    optimalPace: '5:30-7:00 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'excellent',
    achillesTendinopathy: 'excellent',
    kneeIssues: 'excellent',
    shinSplints: 'excellent',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'good',
    wideOptions: false,
    winterCompatibility: 'good',
    summerCompatibility: 'excellent',
  },

  targetUsers: {
    recommended: ['장거리 러너', '회복 러닝', '맥시멀 쿠셔닝 선호', '무릎/관절 보호 필요'],
    notRecommended: ['빠른 페이스 훈련', '경량화 선호', '미니멀리스트'],
  },

  features: ['PEBA 기반 Nitro Foam', '40mm 맥시멀 스택', '부드러운 착지감'],

  priceAnalysis: {
    msrp: 199000,
    streetPrice: 170000,
    costPerKm: 398,
    valueRating: 7,
    priceTier: 'mid',
    alternatives: ['hoka-bondi-9', 'asics-gel-nimbus-28', 'new-balance-1080-v14'],
  },

  reviews: [
    {
      userType: '장거리 러너',
      rating: 4,
      text: '무릎 퇴행성 관절염 초기 진단 후 의사가 맥시멀 쿠션화를 권유해서 골랐습니다. 본디 9이 220,000원, 님버스 28이 259,000원인데 매그니파이는 199,000원으로 확실히 저렴해요. 주말 안양천 러닝코스 20km LSD를 6분 페이스로 뛰는데, 40mm PEBA 폼이 15km 이후에도 무릎 충격을 잡아줍니다. 세일가 170,000원대로 구매하면 맥시멀 쿠션화 중 가성비 최고예요. 264g은 맥시멀치고 가벼운 편이고, 여름 통기성도 우수해서 사계절 장거리 파트너로 쓰고 있어요. 발볼은 표준 수준이라 한국 러너 평균 발에 잘 맞고, 토박스도 압박감 없이 편안합니다. 평발인 제 발에도 10mm 드롭이 안정적인 착지를 잡아주며, 500km 넘게 신어도 쿠셔닝 저하가 거의 없어요.',
    },
    {
      userType: '에디터 분석',
      rating: 84,
      text: '"무릎 아픈데 푹신한 신발 추천해주세요" 질문에 가성비 좋은 선택입니다. 199,000원으로 40mm 맥시멀 스택과 PEBA 기반 쿠셔닝을 제공합니다. 본디 9(220,000원), 님버스 28(259,000원)과 비교해 비슷한 수준의 보호력을 3~6만원 저렴하게 제공하는 가성비가 돋보입니다. 264g으로 약간 무거운 편이지만, 장거리나 회복 러닝에 초점을 맞춘 신발입니다. 500km 내구성으로 km당 약 398원이면 맥시멀 쿠션화 카테고리에서 합리적인 가격입니다. 발볼은 표준 수준이라 한국 러너 대부분 무난하게 착용 가능하고, 토박스 여유도 적절합니다. 평발 러너에게도 호환성이 좋고 무릎 보호가 절실한 러너에게 특히 추천합니다. 빠른 페이스에는 부적합하므로, 관절 보호가 필요한 장거리 러너나 회복 러닝용으로 추천합니다.',
    },
  ],

  detailedSpecs: {
    weight: '264g (남성 US 9 기준)',
    stackHeight: '힐 40mm / 포어풋 30mm',
    drop: '10mm',
    midsole: 'Nitro Foam (PEBA 기반)',
    plate: '없음',
    outsole: 'PumaGrip 러버',
    upper: '엔지니어드 메쉬',
    width: '표준',
    durability: '500km',
    price: '₩199,000 (MSRP) / 세일 시 ₩170,000~',
    costPerKm: '약 ₩398/km (500km 기준)',
    footType: '표준 발볼 / 평발 OK / 관절 보호 필요한 러너',
    landingPattern: '힐스트라이크 (맥시멀 쿠셔닝)',
  },

  similarShoes: ['hoka-bondi-9', 'asics-gel-nimbus-28', 'new-balance-1080-v14', 'saucony-triumph-23'],
  purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBK16h' }],
};
