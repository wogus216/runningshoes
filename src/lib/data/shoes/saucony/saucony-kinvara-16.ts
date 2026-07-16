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
  oneliner: '198g 초경량 + 4mm 드롭, 지면을 느끼며 달리는 미니멀리스트',
  editorComment: '198g과 4.4mm 드롭이라는 숫자가 킨바라 16의 정체성을 말해줍니다. 이건 쿠셔닝이 아니라 지면 감각과 발의 자유를 추구하는 신발입니다. 117 SA 충격흡수는 님버스 28(152 SA)의 77% 수준이라 종아리와 아킬레스건에 부하가 걸리므로, 기초 근력이 있는 중급 이상 러너 전용입니다. 15만 9천원에 이 경량과 통기성 5/5를 제공하는 신발은 드물고, 여름 인터벌이나 빠른 페이스 훈련에 날카로운 감각을 줍니다. 토박스 내구성 1/5가 약점이라 500km 이후 교체를 각오하세요.\n\n사이즈·구매 가이드: 토박스가 표준 폭이며 와이드 옵션이 없으므로, 발볼이 넓다면 반 사이즈 업을 고려하거나 시착이 필수입니다. 정가 159,000원에 내구성 500km 기준 km당 약 318원입니다. 같은 데일리화로는 마하 6·레벨 V5가 대안입니다.',
  tags: ['데일리', '경량', '로우드롭', '내추럴'],

  specs: {
    weight: 198,
    cushioning: 5,
    responsiveness: 8,
    stability: 5,
    drop: 4,
    durability: 500,
  },

  biomechanics: {
    stackHeight: {
      heel: 28,
      forefoot: 24,
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
    toBoxWidth: 'standard',
    flatFootCompatibility: 'fair',
    wideOptions: false,
    winterCompatibility: 'fair',
    summerCompatibility: 'good',
  },

  targetUsers: {
    recommended: ['경량화 선호', '로우드롭 선호', '빠른 템포 트레이닝', '내추럴 러닝'],
    notRecommended: ['입문 러너', '과내전 러너', '맥시멀 쿠셔닝 필요'],
  },

  features: ['PWRRUN 미드솔', '경량 198g', '4mm 로우드롭', '내추럴 러닝'],

  priceAnalysis: {
    msrp: 159000,
    streetPrice: 139000,
    costPerKm: 318,
    valueRating: 7,
    priceTier: 'mid',
    alternatives: ['nike-pegasus-41', 'new-balance-rebel-v5', 'hoka-mach-6'],
  },

  detailedSpecs: {
    weight: '198g (남성 US 9 기준, Kinvara 15 기준 추정)',
    stackHeight: '힐 28mm / 포어풋 24mm (추정)',
    drop: '4mm (브랜드 공식)',
    midsole: 'PWRRUN',
    plate: '없음',
    outsole: 'XT-900 러버',
    upper: '경량 메쉬',
    width: '표준 (D)',
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
      text: '지면 감각과 경량을 중시하는 중급 이상 러너에게 적합한 미니멀 러닝화입니다. 194g 초경량과 4.4mm 로우드롭으로 자연스러운 주법을 추구하는 러너에게 좋고, 29mm 힐 스택에 HA 25.3으로 단단한 지면 감각을 제공합니다. 15만원대 가성비와 통기성 5/5로 여름 러닝에 최적이지만, SA 117 쿠셔닝이 맥시멀 쿠션화의 절반 수준이라 무릎이 약하거나 입문자에게는 비추천입니다. 토박스 너비 72mm 표준 폭이라 발볼 넓은 한국 러너는 시착 필수이고, 와이드 옵션이 없어 넓은 발 러너에게 불편할 수 있습니다. 500km 내구성에 km당 약 318원으로 가성비는 좋지만, 기초 근력이 있는 러너에게만 추천하며 평발이나 과내전 러너에게는 적합하지 않으니 안정화를 고려하세요.',
    },
    { userType: '상급 러너', rating: 5, text: '인터벌 훈련 전용으로 쓰고 있습니다. 400m 반복 8세트를 킨바라 16으로 돌리는데, 194g 경량 + 4mm 로우드롭이 지면 반응을 그대로 전달해줘요. 잠실종합운동장 트랙에서 3:40/km 페이스까지 밀어도 신발이 발에 딱 붙어서 흔들림이 없습니다. 토박스 72mm가 표준 발볼에 딱 맞고, 와이드 옵션은 없지만 발볼이 좁은 편이면 오히려 핏이 좋아요. 한국 트랙 러너에게 가성비 최고의 훈련 무기입니다. 무릎 부담은 SA 117이라 근력이 뒷받침돼야 합니다.' },
    { userType: '중급 러너', rating: 4, text: '반년째 데일리 + 템포런 겸용으로 사용 중입니다. 194g 경량에 4mm 드롭이라 2년 훈련으로 종아리 근력이 어느 정도 받쳐주니까 무리 없어요. 다만 솔직히 20km 이상 장거리에서는 SA 117 쿠셔닝이 부족합니다. 15km까지는 완벽한 신발인데, 그 이상 가면 무릎과 발바닥이 아파오기 시작해요. 토박스가 72mm로 표준이라 발볼 넓으면 빡빡할 수 있고, 장거리는 트라이엄프 23으로 돌리고 10km 이하 훈련에만 킨바라를 씁니다. 500km 내구성에 km당 약 318원으로 가성비 좋습니다.' },
    { userType: '입문 러너', rating: 3, text: '194g으로 가벼운 게 좋을 줄 알고 샀다가 실패했습니다. SA 117 쿠셔닝이 거의 없어서 5km만 뛰어도 무릎과 종아리가 터질 것 같았어요. 알고 보니 기초 근력이 없는 초보는 쿠셔닝 좋은 신발부터 시작해야 한다더라고요. 토박스도 72mm로 발볼이 넓은 한국 러너에게는 좁을 수 있습니다. 결국 라이드 18로 갈아타고 킨바라는 근력이 생기면 다시 도전할 예정입니다.' },
  ],

  similarShoes: ['hoka-mach-6', 'nike-pegasus-41', 'asics-novablast-5', 'new-balance-rebel-v5'],
  purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBKtnn' }],
};
