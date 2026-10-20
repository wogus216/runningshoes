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
  description: 'NITRO 러닝 시리즈 중 가장 높은 스택(푸마 공식 46/38mm)을 쓴 푸마의 맥시멀 쿠션화입니다. 플레이트 없이 NITROFOAM 쿠션으로 느린 장거리와 회복 러닝에 맞춥니다.',
  oneliner: '공식 46mm 스택 NITROFOAM 맥시멀 쿠션, 플레이트 없음',
  editorComment: '매그맥스 나이트로 2는 푸마 코리아 공식 설명대로 NITRO 러닝 시리즈에서 가장 높은 스택(공식 46/38mm, RunRepeat 측정 45.5/35.0mm)을 쓴 맥시멀 쿠션화입니다. 미드솔은 NITROFOAM이고 공식 페이지에 플레이트 언급이 없으며, RunRepeat도 "even without a carbon plate"라고 적었습니다. 충격흡수는 SA 힐 141·전족 137(평균 131)로 높지만, 에너지 리턴은 힐 50.1%·전족 54.6%(평균 61.5%)로 낮아 반발로 밀어주기보다 충격을 받아내는 쪽입니다. 정가 23만 9천원에 무게는 RunRepeat 측정 269g입니다. 가장 큰 주의점은 발볼로, 토박스가 70.4mm(평균 73.2mm)이고 RunRepeat가 "aggressive taper"라며 "won\'t work well for runners with wide feet"라고 평가했습니다. 푸마 코리아 공식몰에는 와이드 상품도 없습니다.\n\n사이즈·구매 가이드: 토박스가 좁게 테이퍼진 편이고 와이드 옵션이 없어, 발볼이 넓다면 반드시 시착하세요. 정가는 239,000원이며, 반발까지 원하면 카본 PWRPLATE의 디비에이트 나이트로 4, 더 가볍고 반발 있는 맥시멀 쿠션을 원하면 슈퍼블라스트 2를 비교해보세요.',
  tags: ['맥시멀 쿠션', 'NITROFOAM', '장거리 훈련'],

  specs: {
    weight: 269,
    cushioning: 9,
    responsiveness: 6,
    stability: 7,
    drop: 10.5,
    durability: 500,
  },

  biomechanics: {
    stackHeight: {
      heel: 45.5,
      forefoot: 35,
    },
    drop: 10.5,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'NITROFOAM',
    optimalPace: '4:00-5:30 min/km',
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
    wideOptions: false,
    winterCompatibility: 'good',
    summerCompatibility: 'excellent',
  },

  targetUsers: {
    recommended: ['맥시멀 쿠셔닝 선호', '느린 장거리 훈련', '회복 러닝', '착지 충격 완화 우선'],
    notRecommended: ['빠른 템포 훈련', '발볼 넓은 러너', '레이싱 전용'],
  },

  features: ['NITROFOAM 미드솔', 'NITRO 러닝 시리즈 최고 스택 (공식 46/38mm)', '플레이트 없음', '높은 충격흡수 (RunRepeat SA 힐 141)'],

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
        userType: '예상 적합 — 느린 장거리·회복 러닝용 쿠션화',
        text: '20km 이상 느린 장거리나 고강도 훈련 다음 날 회복 러닝처럼 착지 충격을 줄이는 것이 우선인 경우에 맞는 성격입니다. RunRepeat 측정 힐 45.5mm 스택에 충격흡수 SA 141(평균 131)이라 충격을 크게 받아냅니다. 반대로 에너지 리턴은 50%대로 평균보다 낮아 템포런처럼 페이스를 올리는 용도에는 맞지 않습니다. 토박스가 70.4mm로 좁게 테이퍼져 발볼이 넓다면 시착이 필요합니다.',
      },
    {
      userType: '에디터 분석',
      rating: 86,
      text: '플레이트 없는 맥시멀 쿠션을 찾는 러너에게 맞는 모델입니다. 푸마 공식 스택 46/38mm(RunRepeat 측정 45.5/35.0mm)로 NITRO 러닝 시리즈 중 가장 높고, SA 힐 141·전족 137의 충격흡수는 평균(131)을 웃돕니다. 다만 에너지 리턴이 힐 50.1%·전족 54.6%로 평균(61.5%)보다 낮아, 반발을 기대하는 슈퍼트레이너와는 성격이 다릅니다. 무게는 RunRepeat 측정 269g으로 가볍지 않고, 토박스가 70.4mm로 좁게 테이퍼져 발볼 넓은 한국 러너는 반드시 시착하세요. 안정화 기능이 있는 모델은 아닙니다. 정가는 239,000원입니다.',
    },
    {
        userType: '예상 적합 — 정가 24만원 이하 맥시멀 쿠션을 찾는 경우',
        text: '맥시멀 쿠션화 가운데 정가 239,000원으로 고려할 수 있는 선택지입니다. 플레이트가 없고 에너지 리턴이 50%대라, 템포 훈련보다는 느린 장거리에 쓰는 신발로 예산을 잡는 경우에 맞습니다. 충격흡수는 SA 힐 141로 평균보다 높습니다. 반발을 원한다면 플레이트가 들어간 모델이, 발볼 여유를 원한다면 토박스가 넓은 모델이 맞습니다(이 모델 토박스 70.4mm).',
      },
  ],

  detailedSpecs: {
    weight: '269g (RunRepeat 랩, 측정 사이즈 미표기) · 푸마 코리아 공식 275g(UK 8)',
    stackHeight: '힐 45.5mm / 포어풋 35.0mm (RunRepeat 랩) · 푸마 코리아 공식 46/38mm',
    drop: '10.5mm (RunRepeat 랩) · 푸마 코리아 공식 8mm',
    midsole: 'NITROFOAM (푸마 코리아 공식)',
    plate: '없음 (공식 페이지에 플레이트 언급 없음 · RunRepeat "even without a carbon plate")',
    outsole: 'PumaGrip 러버',
    upper: '엔지니어드 메쉬',
    width: '좁은 편 (와이드 없음) · 토박스 70.4mm — RunRepeat 평균 73.2mm보다 2.8mm 좁고 랩 원문 "The MagMax Nitro 2 features an aggressive taper (70.4 mm)"',
    durability: '500km',
    price: '₩239,000 (MSRP) / 세일 시 ₩200,000~',
    costPerKm: '약 ₩478/km (500km 기준)',
    footType: '좁은~보통 발볼 / 평발 OK',
    landingPattern: '미드풋~전방 착지',
  },

  similarShoes: ['nike-vomero-18', 'asics-superblast-2', 'hoka-mach-x-3', 'saucony-endorphin-speed-5'],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/5OldpCvg' }, { store: '쿠팡', url: 'https://link.coupang.com/a/g5Za8o8aei' }],
};
