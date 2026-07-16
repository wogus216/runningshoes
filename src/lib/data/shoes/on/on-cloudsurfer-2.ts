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
      userType: '입문 러너',
      rating: 4,
      text: '성수동 러닝크루에서 첫 러닝화로 추천받아 샀어요. 발볼이 표준이라 정사이즈로 맞았는데, 처음엔 CloudTec 착지감이 독특해서 적응에 2주 정도 걸렸어요. 근데 300km 넘기니까 이 착지감이 은근 중독됩니다. 서울숲 5km 코스를 주 3회 뛰는데 무릎에 특별한 부담 없이 뛸 수 있어 초보에게 안성맞춤이에요. 다만 단단한 편이라 "구름처럼 푹신"을 기대했다면 의외일 수 있고, 와이드 옵션이 없어 발볼 넓은 분들은 매장에서 꼭 신어봐야 합니다. 러닝 끝나고 카페 들러도 디자인이 안 튀고, km당 약 398원 가성비도 내구성 500km 감안하면 납득 가능합니다.',
    },
    {
      userType: '중급 러너',
      rating: 3.5,
      text: '페가수스 40에서 넘어왔는데 솔직히 반발력은 체감상 떨어져요. 한강 여의도~반포 10km를 5분30초 페이스로 뛰면 나이키 때보다 추진력이 약합니다. 대신 아웃솔 내구성은 확실히 인정합니다. 페가수스는 400km에 밑창이 닳았는데 클라우드서퍼는 500km 넘어도 멀쩡해요. 발볼 표준이면 일반 사이즈로 충분하고, 5분30초 이상 편안한 조깅에서는 25.5 HA 경도가 무릎 부담 없이 잘 받쳐줍니다. 52.6% 에너지 리턴이라는 수치가 아쉽지만 km당 약 398원에 내구성 500km는 장기 투자 관점에서 가성비가 나쁘지 않습니다. 디자인 8할, 성능 2할로 사는 신발이라 생각하면 충분히 만족할 수 있어요.',
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
