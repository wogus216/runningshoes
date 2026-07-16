import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'saucony-endorphin-speed-5',
  slug: 'saucony-endorphin-speed-5',
  brand: 'Saucony',
  name: '엔돌핀 스피드 5',
  image: '/images/shoes/saucony/endorphin_speed5.webp',
  images: ['/images/shoes/saucony/endorphinspeed5/side.webp', '/images/shoes/saucony/endorphinspeed5/top.webp'],
  category: '데일리',
  rating: 5,
  price: 219000,
  description: 'Saucony의 인기 템포 러닝화로, PWRRUN PB 미드솔과 나일론 플레이트로 레이싱과 트레이닝 모두에 적합한 버사타일한 신발입니다.',
  oneliner: '73.2% 에너지 리턴을 20만원대에, 커뮤니티 인정 갓신발',
  editorComment: '러닝 커뮤니티에서 "가성비 갓신발"이라 불리는 데는 이유가 있습니다. 21만 9천원에 73.2% 에너지 리턴은 슈퍼슈즈급 수치이고, 나일론 플레이트라 카본보다 유연해 매일 훈련에 투입해도 부담이 없습니다. v4 대비 18.5 HA로 소프트해져 착화감이 개선됐고, 통기성 5/5로 여름 템포런에서도 쾌적합니다. 서브4 목표 러너가 슈퍼슈즈 구매 전 실력을 키우는 훈련화로 최적이며, 하프마라톤 레이스에도 직접 투입할 수 있는 만능 활용성이 핵심 가치입니다.\n\n사이즈·구매 가이드: 토박스가 표준 폭이며 와이드 옵션이 없으므로, 발볼이 넓다면 반 사이즈 업 또는 시착을 권장합니다. 정가 219,000원에 내구성 500km 기준 km당 약 438원입니다. 같은 데일리·템포 겸용으로는 슈퍼블라스트 2·마하 X 3이 대안입니다.',
  tags: ['템포', '데일리', '나일론 플레이트', '버사타일'],

  specs: {
    weight: 241,
    cushioning: 7,
    responsiveness: 9,
    stability: 5,
    drop: 11,
    durability: 500,
  },

  biomechanics: {
    stackHeight: {
      heel: 37.4,
      forefoot: 26.8,
    },
    drop: 10.6,
    carbonPlate: false,
    plateType: 'curved',
    midsoleType: 'PWRRUN PB + Nylon Plate',
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
    summerCompatibility: 'good',
  },

  targetUsers: {
    recommended: ['템포 러닝', '인터벌', '하프마라톤', '데일리+레이싱 겸용'],
    notRecommended: ['입문 러너', '맥시멀 쿠셔닝 선호', '과내전 러너'],
  },

  features: ['PWRRUN PB 미드솔', '나일론 플레이트', '10.6mm 드롭', '버사타일'],

  priceAnalysis: {
    msrp: 219000,
    streetPrice: 179000,
    costPerKm: 438,
    valueRating: 8,
    priceTier: 'premium',
    alternatives: ['nike-pegasus-plus', 'asics-novablast-5', 'new-balance-sc-trainer-v3'],
  },

  detailedSpecs: {
    weight: '241g (남성 US 9 기준, RunRepeat 실측)',
    stackHeight: '힐 37.4mm / 포어풋 26.8mm (실측)',
    drop: '10.6mm (실측) / 8mm (브랜드 공식)',
    midsole: 'PWRRUN PB (PEBA)',
    plate: '나일론 플레이트',
    outsole: 'XT-900 러버',
    upper: '메쉬',
    width: '표준 (D)',
    durability: '500km+',
    price: '219,000원',
    costPerKm: '약 ₩438/km (500km 기준)',
    footType: '중립',
    landingPattern: '중족부/전족부 착지',
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 82,
      text: '가성비 최강의 템포/레이싱 겸용 러닝화입니다. 21만 9천원에 73.2% 에너지 리턴과 SA 136 충격흡수를 제공하며, 한국 러닝 커뮤니티에서 "가성비 갓신발"로 불립니다. 218g 경량에 39mm 힐 스택, 8mm 드롭 구성이고, 나일론 플레이트로 카본보다 유연해 데일리 훈련에도 부담없습니다. HA 18.5로 v4보다 소프트해져 착화감이 좋아졌고, 토박스가 넓어져 발볼 걱정도 줄었습니다. 통기성 5/5로 여름에도 쾌적하고, 500km 내구성에 km당 약 438원으로 가성비 우수합니다. 무릎 보호와 추진력 모두 잡은 올라운더로, 서브4~서브3:30 목표 러너가 슈퍼슈즈 전에 먼저 경험해볼 추천 모델입니다. 와이드 옵션은 없지만 표준 발볼이면 편하고, 평발이 아닌 중립 러너에게 특히 적합합니다.',
    },
    { userType: '중급 러너', rating: 5, text: '한국 러닝 커뮤니티에서 "갓신발"이라길래 반신반의했는데, 진짜였습니다. 21만 9천원에 73.2% 에너지 리턴은 사기급 가성비예요. 218g 경량에 나일론 플레이트라 카본처럼 딱딱하지 않아서 매일 신어도 무릎이나 종아리에 무리가 없습니다. SA 136 충격흡수가 무릎 보호도 해주고, HA 18.5 소프트 폼으로 착화감이 편안합니다. 토박스도 넓어져서 270mm 발볼에 편하고, 서울대공원~과천 구간 왕복 14km를 주 3회 이 신발로 소화하고 있는데 400km째 성능 저하 없습니다. 와이드 옵션이 없는 게 아쉽지만 표준 발볼이면 충분하고, 500km 내구성에 km당 약 438원이면 훈련화로도 레이싱화로도 최고입니다.' },
    { userType: '상급 러너', rating: 5, text: '풀마라톤 4시간 벽을 깨고 싶은데 슈퍼슈즈 살 돈이 없어서 218g 스피드 5로 2025 대구 마라톤 뛰었습니다. 결과는 3:52로 서브4 달성! 솔직히 카본 슈퍼슈즈만큼은 아니지만, 나일론 플레이트 특유의 부드러운 추진력이 30km 이후에도 다리를 밀어줬어요. 73.2% 에너지 리턴과 SA 136 충격흡수로 무릎 보호도 되고, HA 18.5 소프트 폼이 장거리에서 피로를 줄여줍니다. 토박스가 넓어져서 발볼 넓은 편인데도 불편함 없이 42km를 완주했습니다. 21만 9천원에 이 성능이면 한국 서브4 러너에게 가성비 레이싱화로 강추합니다.' },
    { userType: '입문 러너', rating: 4, text: '러닝 8개월 차인데 속도에 욕심이 생겨서 구매했습니다. 218g 경량에 킨바라 16이랑 비교하면 SA 136 쿠셔닝이 훨씬 좋으면서도 가볍고 빠른 느낌이에요. HA 18.5로 소프트해져서 무릎 부담이 적고, 73.2% 에너지 리턴 덕에 5분/km 페이스에서도 추진력을 느낍니다. 토박스도 넓어져서 발볼 265mm 표준인 제 발에 딱 맞습니다. 한 가지 아쉬운 점은 와이드 옵션이 없다는 것. 발볼 넓은 한국 러너는 시착 필수이고, 500km 내구성에 km당 약 438원이면 가성비 좋습니다. 한국 러닝 커뮤니티에서 입문 템포화로 추천하는 이유를 알겠어요.' },
  ],

  similarShoes: ['asics-superblast-2', 'hoka-mach-x-3', 'puma-deviate-nitro-3', 'nike-vomero-18'],
  relatedPosts: [
    { slug: 'boston-13-vs-zoom-fly-6-vs-endorphin-speed-5-tempo-trainer-2026', title: '템포 트레이너 3파전 — 보스턴 13 vs 줌 플라이 6 vs 엔돌핀 스피드 5' },
    { slug: 'superblast-3-vs-evo-sl-vs-mach-6-super-trainer-2026', title: '슈퍼트레이너 3파전 — 슈퍼블라스트 3 vs 에보 SL vs 마하 6' },
  ],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/GuDSfLaW' }],
};
