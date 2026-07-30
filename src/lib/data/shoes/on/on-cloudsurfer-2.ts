import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'on-cloudsurfer-2',
  slug: 'on-cloudsurfer-2',
  brand: 'On',
  name: '클라우드서퍼 2',
  image: '/images/shoes/on/cloudsurfer2.webp',
  images: [
    '/images/shoes/on/cloudsurfer2/side.webp',
    '/images/shoes/on/cloudsurfer2/front.webp',
    '/images/shoes/on/cloudsurfer2/back.webp',
    '/images/shoes/on/cloudsurfer2/top.webp',
    '/images/shoes/on/cloudsurfer2/outsole.webp',
  ],
  category: '입문화',
  rating: 4,
  price: 199000,
  description: 'On의 데일리 트레이너로, CloudTec Phase 기술과 Helion 슈퍼폼으로 부드러운 쿠셔닝과 자연스러운 구름 착지감을 제공합니다.',
  oneliner: 'CloudTec Phase의 세련된 전환감, On 입문자의 첫 선택',
  editorComment: '19만 9천원은 페가수스 41(₩159,000)보다 4만원 비싸지만, On이 제공하는 건 단순 성능이 아니라 브랜드 경험입니다. 52.6% 에너지 리턴은 가격 대비 솔직히 부족한 수치이고, "구름 같은 착화감"이라는 마케팅과 실제 단단한 경도 사이엔 괴리가 있어 해외 리뷰에선 "평평한 콜라처럼 생기가 없다"는 혹평(BITR D티어)과 8.2/10(RTR)이 엇갈립니다. 하지만 0.6mm 아웃솔 마모율은 내구성 최상위급이고, 254g 경량에 SNS에서 통하는 디자인은 러닝과 일상 겸용을 원하는 러너에게 매력적입니다. 단, 토박스 73.5mm 표준에 와이드 옵션이 없어 발볼 넓은 한국 러너는 실착이 필수이고, 단단한 승차감이라 10km 이상 장거리보다 단거리 데일리·출퇴근 겸용에 더 맞습니다.\n\n사이즈·구매 가이드: 토박스가 표준(73.5mm)이나 On은 와이드 옵션이 없으니 발볼이 넓다면 반드시 매장에서 착화하세요. 500km 기준 km당 약 398원으로 내구성 대비 비용은 수용 가능한 수준입니다. 비슷한 성격의 대안으로는 페가수스 41(좀 더 부드럽고 저렴)이나 슈퍼노바 라이즈 2를 비교해 보세요.',
  tags: ['입문화', '쿠셔닝', '데일리'],
  specs: {
    weight: 254,
    cushioning: 8,
    responsiveness: 7,
    stability: 6,
    drop: 10.4,
    durability: 500,
  },
  biomechanics: {
    stackHeight: { heel: 37.5, forefoot: 27.1 },
    drop: 10.4,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'Helion HF + CloudTec Phase',
    optimalPace: '5:00-6:30 min/km',
  },
  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'good',
    kneeIssues: 'caution',
    shinSplints: 'good',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'fair',
    wideOptions: false,
    winterCompatibility: 'good',
    summerCompatibility: 'good',
  },

  priceAnalysis: {
    msrp: 199000,
    streetPrice: 199000,
    costPerKm: 398,
    valueRating: 6,
    priceTier: 'premium',
    alternatives: ['nike-pegasus-41', 'asics-novablast-5', 'adidas-adizero-evo-sl'],
    valueAdvantages: ['프리미엄 소재 품질', '뛰어난 내구성', '일상용으로도 활용 가능', '반사 로고'],
  },

  targetUsers: {
    recommended: ['프리미엄 디자인을 원하는 캐주얼 러너', '편안함과 내구성을 중시하는 러너', '러닝과 일상 겸용을 원하는 러너'],
    notRecommended: ['빠른 페이스를 원하는 러너', '반발력이 중요한 러너', '가성비를 중시하는 러너'],
  },

  features: [
    '힐 137 SA 충격흡수 + 52.6% 에너지 리턴 (RunRepeat Lab Test)',
    '25.5 HA 균형 잡힌 Helion 폼 - 단단하지만 CloudTec Phase로 압축감 제공',
    '254g 경량 설계로 데일리 트레이너로 적합',
    '0.6mm 아웃솔 마모 - 뛰어난 내구성',
    'CloudTec Phase 기술로 자연스러운 전방 전환',
  ],

  reviews: [
    {
      userType: '에디터 분석',
      rating: 90,
      text: 'On 데일리 트레이너 입문으로 가장 합리적인 선택입니다. 힐 137 SA 충격흡수와 52.6% 에너지 리턴은 가격(₩199,000) 대비 솔직히 평범한 수준이고, 25.5 HA 경도는 "구름 같은 착화감"이라는 마케팅과 괴리가 있습니다. 하지만 0.6mm 아웃솔 마모율로 내구성이 입증됐고, 254g으로 가볍습니다. 토박스 너비가 73.5mm 표준 수준이지만 와이드 옵션이 없어, 발볼 넓은 한국 러너는 실착이 필수입니다. 평발 러너는 표준 어퍼라 커스텀 인솔 교체 시 내부 공간을 미리 확인하세요. 반발력보다 내구성·디자인·브랜드 경험을 중시하는 러너에게 추천하며, 단단한 승차감이라 10km 이상 장거리보다 단거리 데일리 조깅에 더 무난합니다.',
    },
    {
        userType: '예상 적합 — CloudTec 착지감을 감수할 입문자',
        text: '입문용 데일리로 무난하지만 착지감에 적응 기간이 필요한 모델입니다. CloudTec 구조라 착지 감각이 일반 미드솔과 달라 익숙해지는 데 2주 안팎이 걸리는 경우가 많고, 브랜드 이름에서 연상되는 푹신함보다 단단한 편이라는 점도 미리 알고 있어야 합니다. 그 구간을 넘기면 5km 안팎의 주 3회 러닝에서 부담 없이 쓸 수 있는 수준입니다. 와이드 옵션이 없어 발볼이 넓다면 시착이 필요하고, 내구성 500km 기준 km당 약 398원입니다. 일상복에 어울리는 디자인이라 러닝 외 착용까지 고려하는 경우에도 선택지가 됩니다.',
      },
    {
        userType: '모델 선택 — 페가수스 대비 반발은 아래, 내구성은 위',
        text: '같은 데일리군에서 페가수스 계열과 비교하면 방향이 반대입니다. 에너지 리턴 52.6%로 반발은 뚜렷하게 아래라 5분30초 안팎에서 추진력이 약하게 느껴지고, 대신 아웃솔 마모가 느려 500km를 넘겨도 접지가 유지됩니다. 즉 달리는 재미보다 오래 신는 것을 우선할 때 맞는 선택입니다. HA 25.5로 느린 조깅에서는 충격을 무리 없이 받아냅니다. km당 약 398원이며, 성능보다 디자인·내구성 비중이 큰 신발이라는 점을 감안해야 합니다.',
      },
  ],

  detailedSpecs: {
    weight: '254g (남성 US 9 기준)',
    stackHeight: '힐 37.5mm / 포어풋 27.1mm',
    drop: '10.4mm (Lab 측정치)',
    midsole: 'Helion HF + CloudTec Phase',
    plate: '없음',
    outsole: 'CloudTec 러버',
    upper: '엔지니어드 메쉬',
    width: '표준 (토박스 73.5mm · 와이드 없음)',
    durability: '500km',
    price: '₩199,000 (MSRP)',
    costPerKm: '약 ₩398/km (500km 기준)',
    footType: '표준 발볼 (와이드 옵션 없음 · 발볼 넓으면 실착 권장)',
    landingPattern: '힐스트라이크~미드풋 (CloudTec Phase)',
  },

  similarShoes: ['nike-pegasus-41', 'adidas-supernova-rise-2', 'asics-novablast-5'],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/xumQduZr' }],
};
