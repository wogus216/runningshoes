import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'saucony-kinvara-16',
  slug: 'saucony-kinvara-16',
  brand: 'Saucony',
  name: '킨바라 16',
  image: '/images/shoes/saucony/kinvara16.webp',
  images: ['/images/shoes/saucony/kinvara16/side.webp', '/images/shoes/saucony/kinvara16/top.webp', '/images/shoes/saucony/kinvara16/outsole.webp'],
  category: '데일리',
  rating: 4,
  price: 159000,
  description: 'Saucony의 경량 데일리화로, 최소한의 미드솔과 낮은 드롭으로 자연스러운 주법을 선호하는 러너에게 적합합니다. 빠른 템포 트레이닝에 적합합니다.',
  oneliner: '207g 경량 + 4mm 드롭, 지면을 느끼며 달리는 미니멀리스트',
  editorComment: '207g과 공식 4mm 드롭(랩 실측 4.5mm)이라는 숫자가 킨바라 16의 정체성을 말해줍니다. 이건 쿠셔닝이 아니라 지면 감각과 발의 자유를 추구하는 신발입니다. 힐 109 SA(RunRepeat 실측, 로드화 평균 131 SA) 충격흡수는 요즘 데일리화보다 낮아 종아리와 아킬레스건에 부하가 걸리므로, 기초 근력이 있는 중급 이상 러너 전용입니다. 15만 9천원에 이 경량과 통기성 5/5를 제공하는 신발은 드물고, 여름 인터벌이나 빠른 페이스 훈련에 날카로운 감각을 줍니다. 토박스 내구성 1/5가 약점이라 500km 이후 교체를 각오하세요.\n\n사이즈·구매 가이드: 토박스가 RunRepeat 실측 70.8mm(평균 73.2mm)로 좁고 랩도 "tapered toebox"라 평가했으며 와이드 옵션이 없으므로, 발볼이 넓다면 시착이 필수입니다. 정가 159,000원에 내구성 500km 기준 km당 약 318원입니다. 같은 데일리화로는 마하 6·레벨 V5가 대안입니다.',
  tags: ['데일리', '경량', '로우드롭', '내추럴'],

  specs: {
    weight: 207,
    cushioning: 5,
    responsiveness: 8,
    stability: 5,
    drop: 4,
    durability: 500,
  },

  biomechanics: {
    stackHeight: {
      heel: 29,
      forefoot: 25,
    },
    drop: 4,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'PWRRUN',
    optimalPace: '4:00-6:00 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'caution',
    achillesTendinopathy: 'good',
    kneeIssues: 'good',
    shinSplints: 'caution',
  },

  koreanFootFit: {
    toBoxWidth: 'narrow',
    flatFootCompatibility: 'fair',
    wideOptions: false,
    winterCompatibility: 'fair',
    summerCompatibility: 'good',
  },

  targetUsers: {
    recommended: ['경량화 선호', '로우드롭 선호', '빠른 템포 트레이닝', '내추럴 러닝'],
    notRecommended: ['입문 러너', '과내전 러너', '맥시멀 쿠셔닝 필요'],
  },

  features: ['PWRRUN 미드솔', '경량 207g', '공식 4mm 로우드롭', '내추럴 러닝'],

  priceAnalysis: {
    msrp: 159000,
    streetPrice: 139000,
    costPerKm: 318,
    valueRating: 7,
    priceTier: 'mid',
    alternatives: ['nike-pegasus-41', 'new-balance-rebel-v5', 'hoka-mach-6'],
  },

  detailedSpecs: {
    weight: '207g (남성 US 9, 브랜드 공식 7.3oz) / 198g (여성 US 8, 7.0oz)',
    stackHeight: '힐 29mm / 포어풋 25mm (브랜드 공식) — RunRepeat 실측 28.0/23.5mm',
    drop: '4mm (브랜드 공식) — RunRepeat 실측 4.5mm',
    midsole: 'PWRRUN',
    plate: '없음',
    outsole: 'XT-900 러버',
    upper: '경량 메쉬',
    width: '좁음 (D) — RunRepeat 실측 토박스 70.8mm(평균 73.2mm), 랩: "a tapered toebox that does not suit wide feet particularly well… just 70.8 mm of toebox width" · 와이드 없음(2026-10-20 한국 공식몰 확인)',
    durability: '500km+',
    price: '159,000원',
    costPerKm: '약 ₩318/km (500km 기준)',
    footType: '중립',
    landingPattern: '중족부/전족부 착지',
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 84,
      text: '지면 감각과 경량을 중시하는 중급 이상 러너에게 적합한 미니멀 러닝화입니다. 207g 경량과 4.5mm 로우드롭(RunRepeat 실측)으로 자연스러운 주법을 추구하는 러너에게 좋고, 29mm 힐 스택(브랜드 공식)에 27.5 HA(Shore A, RunRepeat 실측)로 단단한 지면 감각을 제공합니다. 15만원대 가성비와 통기성 5/5로 여름 러닝에 최적이지만, 힐 109 SA 쿠셔닝이 로드화 평균(131 SA)보다 낮아 무릎이 약하거나 입문자에게는 비추천입니다. 토박스 너비 70.8mm(RunRepeat 실측)로 좁아 발볼 넓은 한국 러너는 시착 필수이고, 와이드 옵션이 없어 넓은 발 러너에게 불편할 수 있습니다. 500km 내구성에 km당 약 318원으로 가성비는 좋지만, 기초 근력이 있는 러너에게만 추천하며 평발이나 과내전 러너에게는 적합하지 않으니 안정화를 고려하세요.',
    },
    {
        userType: '예상 적합 — 근력이 받쳐주는 트랙 인터벌',
        text: '400m 반복 같은 트랙 인터벌 전용으로 강점이 뚜렷합니다. 207g의 경량과 4mm의 낮은 드롭이라 지면 반응이 그대로 전달되는 구성입니다. 다만 힐 109 SA(RunRepeat 실측)로 충격흡수가 낮아 다리가 충격을 스스로 감당해야 하므로, 근력과 주행거리가 쌓인 뒤에 쓰는 것이 전제입니다. 토박스 70.8mm(RunRepeat 실측)에 와이드 옵션이 없어, 발볼이 좁은 편이면 오히려 핏이 좋고 넓으면 맞지 않습니다.',
      },
    {
        userType: '적합성 경계 — 15km가 상한선',
        text: '거리에 따라 평가가 갈립니다. 짧은 거리에서는 207g의 경량과 4mm 드롭의 반응성이 장점으로 작동하지만, 거리가 길어질수록 힐 109 SA의 낮은 충격흡수 때문에 무릎과 발바닥 부담이 커질 수 있습니다. 즉 10~15km 이하 훈련으로 용도를 한정하고, 장거리는 쿠션이 두꺼운 모델로 나누는 운용이 맞습니다. 낮은 드롭이라 종아리 근력이 어느 정도 받쳐줘야 하고, 토박스 70.8mm로 좁아 발볼이 넓으면 빡빡할 수 있습니다. 내구성 500km 기준 km당 약 318원입니다.',
      },
    {
        userType: '비적합 — 기초 근력이 붙기 전 단계',
        text: '가볍다는 이유로 입문 단계에서 고르면 실패하기 쉬운 모델입니다. 207g의 경량은 미드솔을 얇게 가져간 결과이고, 힐 109 SA(RunRepeat 실측)면 충격흡수가 이 카테고리 하단이라 근력이 부족한 단계에서는 무릎과 종아리에 부하가 몰릴 수 있습니다. 경량화는 다리가 충격을 스스로 감당할 수 있을 때 의미가 있으므로, 기초 근력과 주행거리가 쌓인 뒤 넘어오는 순서가 맞습니다. 그 전까지는 스택이 확보된 데일리가 낫습니다. 토박스도 70.8mm(RunRepeat 실측)로 좁은 편이라 발볼이 넓으면 제약이 더해집니다.',
      },
  ],

  similarShoes: ['hoka-mach-6', 'nike-pegasus-41', 'asics-novablast-5', 'new-balance-rebel-v5'],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/xy7L7Ihl' }, { store: '쿠팡', url: 'https://link.coupang.com/a/g5ZjoxbBi8' }],
};
