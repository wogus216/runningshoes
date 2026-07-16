import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'on-cloudrunner-2',
  slug: 'on-cloudrunner-2',
  brand: 'On',
  name: '클라우드러너 2',
  image: '/images/shoes/on/cloudrunner2.webp',
  images: [
    '/images/shoes/on/cloudrunner2/side.webp',
    '/images/shoes/on/cloudrunner2/front.webp',
    '/images/shoes/on/cloudrunner2/back.webp',
    '/images/shoes/on/cloudrunner2/top.webp',
    '/images/shoes/on/cloudrunner2/outsole.webp',
  ],
  category: '입문화',
  rating: 4,
  price: 189000,
  description: 'On의 안정성 러닝화로, CloudTec과 Helion 폼으로 과내전 러너에게 안정적인 지지력과 편안한 쿠셔닝을 제공합니다.',
  oneliner: '힐 카운터 5/5 최강 안정성, 겨울에도 17%만 경화',
  editorComment: '5/5 힐 카운터 강도는 On 라인업 중 안정성 최정상이며, 과내전 경향이 있는 러너의 발목을 확실히 잡아줍니다. 18만 9천원으로 카야노 32(₩259,000)보다 7만원 저렴하고, 겨울 경화율 17%는 Helion 폼의 온도 안정성을 증명합니다. v1 대비 27.3 HA로 소프트해졌지만 여전히 단단한 축에 속하며, 푹신한 착지감보다 탄탄한 지지력을 원하는 러너에게 맞습니다. 단, 와이드는 미국 공식(Wide SKU)에만 있고 한국 공식엔 없으며, 현재 클라우드러너 2는 한국 공식몰에서 단종(후속작 클라우드러너 3로 대체)돼 중고·병행·재고로만 구할 수 있습니다. 아웃솔 내구성도 On의 고질적 약점이라 500km 교체를 감안하세요.\n\n사이즈·구매 가이드: 토박스가 표준(72.4mm)이지만 On은 한국 공식 와이드 옵션이 없으니 발볼이 넓다면 매장 착화를 먼저 하세요. 500km 기준 km당 약 378원으로 안정화 중 합리적인 비용입니다. 한국 공식 단종 모델이므로 구매 전 재고를 확인하거나 후속 모델 클라우드러너 3를 대안으로 검토하세요.',
  tags: ['입문화', '안정화', '쿠셔닝'],
  specs: {
    weight: 275,
    cushioning: 8,
    responsiveness: 7,
    stability: 8,
    drop: 8.5,
    durability: 500,
  },
  biomechanics: {
    stackHeight: { heel: 33.6, forefoot: 25.1 },
    drop: 8.5,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'Helion + CloudTec',
    optimalPace: '5:30-7:00 min/km',
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

  priceAnalysis: {
    msrp: 189000,
    streetPrice: 189000,
    costPerKm: 378,
    valueRating: 7,
    priceTier: 'mid',
    alternatives: ['asics-gel-kayano-32', 'brooks-adrenaline-gts-25', 'hoka-gaviota-6'],
    valueAdvantages: ['프리미엄 빌드 품질', '뛰어난 통기성', '일상용 착용 가능', '추위에 강한 Helion 폼'],
  },

  targetUsers: {
    recommended: ['지지력 있는 데일리 트레이너를 원하는 러너', '중립~약간 안정 사이 신발이 필요한 러너', 'On 팬 러너', '종일 착용과 러닝 겸용 원하는 러너'],
    notRecommended: ['푹신한 쿠셔닝을 원하는 러너', '가벼운 신발을 원하는 러너', '반발력이 중요한 러너'],
  },

  features: [
    '힐 126 SA 충격흡수 + 57.1% 에너지 리턴 (RunRepeat Lab Test)',
    '27.3 HA Helion 폼 - v1 대비 소프트해진 착화감',
    '5/5 힐 카운터 - 최대 안정성',
    '4/5 통기성 - 프리미엄 메쉬 어퍼',
    '추위에 17%만 경화 - 겨울 러닝에 최적',
  ],

  reviews: [
    {
      userType: '에디터 분석',
      rating: 88,
      text: 'On의 안정화 라인업 중 가격 대비 가장 균형 잡힌 선택입니다. 힐 126 SA와 57.1% 에너지 리턴은 안정화치고 반응성이 있는 편이고, 5/5 힐 카운터로 과내전 러너의 발목을 확실히 잡아줍니다. 27.3 HA는 전작보다 소프트해졌어도 여전히 단단한 편이라 "푹신한 On"을 기대하면 실망할 수 있습니다. 18만 9천원으로 카야노 32보다 7만원 저렴하고, 겨울 경화율 17%는 사계절 사용에 유리합니다. 와이드 옵션이 있어 발볼 넓은 한국 러너도 선택할 수 있고, 평발 러너에게도 힐 카운터의 지지력이 도움이 됩니다. 아웃솔 내구성이 아쉽지만 500km 기준 km당 약 378원으로 적절한 수준입니다. "가성비 안정화" 질문에 카야노보다 7만원 저렴한 On 특유의 핏과 지지력을 원하는 러너에게 추천합니다.',
    },
    {
      userType: '평발 러너',
      rating: 4.5,
      text: '과내전 때문에 브룩스 아드레날린 GTS를 3년 신다가 On 디자인에 끌려 넘어왔습니다. 발볼이 표준이라 정사이즈로 맞았고, 힐 카운터가 정말 단단해서 발목이 안쪽으로 꺾이는 게 확 줄었어요. 평발이라 보통 아웃솔 안쪽이 많이 닳는데, 500km 넘게 신어도 비교적 균일하게 닳고 있어 지지력이 실제로 발을 잡아준다는 걸 확인했습니다. 대구 앞산 둘레길 주 2회, 수성못 평지 주 3회 뛰는데 겨울 영하 5도에서도 착지감 변화가 거의 없어서 놀랐습니다. 다만 한국 공식엔 와이드가 없어 발볼 넓은 분들은 직구나 매장 착화를 확인해야 합니다. 힐 카운터가 잘 잡아줘서 무릎 통증도 눈에 띄게 줄었고, 가성비 측면에서도 km당 약 378원이면 안정화 중 합리적입니다.',
    },
    {
      userType: '중급 러너',
      rating: 4,
      text: '회사 러닝 동호회에서 주 2회 여의도공원 7km 뛰고, 주말엔 혼자 15km 뜹니다. 10km 52분 페이스인데 5/5 힐 카운터 안정감이 확실히 좋아요. 카야노 32보다 7만원 저렴한데 안정성은 80% 이상 커버한다는 게 제 체감입니다. 발볼이 표준이라 일반 사이즈로 맞았는데, 한국 공식엔 와이드가 없어 발볼 넓은 분들은 직구나 매장 착화를 확인해야 합니다. 27.3 HA로 단단한 편이라 "푹신한 구름 착화감"을 기대하면 실망할 수 있어요. 126 SA 충격흡수는 무릎 보호에 도움이 되지만, 무릎이 많이 나쁘다면 스택이 더 높은 클라우드몬스터 쪽을 고려하세요. 겨울 경화율 17%는 사계절 러닝에 유리하고, km당 약 378원 가성비는 On 라인업 중 합리적인 편입니다.',
    },
  ],

  detailedSpecs: {
    weight: '275g (남성 US 9 기준)',
    stackHeight: '힐 33.6mm / 포어풋 25.1mm',
    drop: '8.5mm (Lab 측정치)',
    midsole: 'Helion + CloudTec',
    plate: '없음',
    outsole: 'CloudTec 러버',
    upper: '엔지니어드 메쉬',
    width: '표준 (토박스 72.4mm · 한국 와이드 없음 / 미국 Wide SKU)',
    durability: '500km',
    price: '₩189,000 (과거 MSRP · 한국 공식 단종)',
    costPerKm: '약 ₩378/km (500km 기준)',
    footType: '과내전 러너 (한국 와이드 미판매 · 발볼 넓으면 직구 확인)',
    landingPattern: '힐스트라이크~미드풋 (안정화)',
  },

  similarShoes: ['asics-gel-kayano-32', 'brooks-adrenaline-gts-25', 'nike-structure-26'],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/Ig4lczAV' }],
};
