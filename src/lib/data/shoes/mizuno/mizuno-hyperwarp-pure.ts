import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'mizuno-hyperwarp-pure',
  slug: 'mizuno-hyperwarp-pure',
  brand: 'Mizuno',
  name: '하이퍼워프 퓨어',
  image: '/images/shoes/mizuno/hyperwarppure/side.webp',
  images: [
    '/images/shoes/mizuno/hyperwarppure/side.webp',
    '/images/shoes/mizuno/hyperwarppure/top.webp',
    '/images/shoes/mizuno/hyperwarppure/outsole.webp',
    '/images/shoes/mizuno/hyperwarppure/front.webp',
    '/images/shoes/mizuno/hyperwarppure/back.webp',
  ],
  category: '레이싱',
  rating: 5,
  status: 'new',
  price: 399000,
  description: '미즈노의 초경량 엘리트 레이싱화. 139g이라는 극한의 경량에 PEBA 미드솔과 카본 플레이트를 결합해 5K~10K 단거리 레이스에 특화되었습니다.',
  oneliner: '139g 극한 경량, 5K/10K 단거리 특화 레이서',
  editorComment: '하이퍼워프 퓨어는 139g이라는 경이적 무게로 미즈노 레이싱 역사를 새로 썼습니다. PEBA 미드솔과 카본 플레이트가 만드는 공격적인 라이드는 빠르게 달릴수록 진가를 발휘합니다. 34mm 힐/30.5mm 전족부의 로우 스택과 3.5mm 드롭은 자연스러운 전족부 착지를 유도하며, 5K~10K에서 기록 단축을 노리는 엘리트에게 최적화되어 있습니다. 39만 9천원으로 비싸지만, 200km 내구성의 순수 레이싱 무기입니다. 반 사이즈 업 권장.\n\n사이즈·구매 가이드: 토박스가 좁은 내로우 폭이고 와이드 옵션이 없으므로 발볼 넓은 러너는 반드시 매장에서 시착 후 반 사이즈 업을 권장합니다. 399,000원에 km당 약 1,995원은 순수 레이스데이 투자로, 5K/10K 대회 기록 단축을 목표로 하는 경우에만 선택하세요. 유사한 단거리 레이서로 메타스피드 레이나 스트릭플라이 2를 함께 비교해보세요.',
  tags: ['레이싱', '카본', '초경량', '단거리', 'PEBA'],

  specs: {
    weight: 139,
    cushioning: 5,
    responsiveness: 10,
    stability: 4,
    drop: 4,
    durability: 200,
  },

  biomechanics: {
    stackHeight: { heel: 34, forefoot: 30.5 },
    drop: 3.5,
    carbonPlate: true,
    plateType: 'full-length carbon',
    midsoleType: 'PEBA',
    optimalPace: '2:50-4:00 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'warning',
    achillesTendinopathy: 'caution',
    kneeIssues: 'caution',
    shinSplints: 'warning',
  },

  koreanFootFit: {
    toBoxWidth: 'narrow',
    flatFootCompatibility: 'poor',
    wideOptions: false,
    winterCompatibility: 'fair',
    summerCompatibility: 'excellent',
  },

  targetUsers: {
    recommended: ['5K/10K 엘리트 레이서', '서브3 마라토너', '전족부 착지 러너', '초경량 선호'],
    notRecommended: ['입문 러너', '데일리 훈련용', '장거리 마라톤', '발볼 넓은 러너', '힐스트라이커'],
  },

  features: ['139g 극한 경량', 'PEBA 미드솔', '풀렝스 카본 플레이트', '3.5mm 로우 드롭', '5K/10K 특화'],

  priceAnalysis: {
    msrp: 399000,
    costPerKm: 1995,
    valueRating: 5,
    priceTier: 'super-premium',
    alternatives: ['asics-metaspeed-ray', 'nike-streakfly-2', 'saucony-endorphin-elite-2'],
  },

  detailedSpecs: {
    weight: '139g (US M9)',
    stackHeight: '힐 34mm / 포어풋 30.5mm',
    drop: '3.5mm',
    midsole: 'PEBA (초경량 폼)',
    plate: '풀렝스 카본 플레이트',
    outsole: '최소 러버',
    upper: '초경량 메쉬',
    width: '좁음 (반 사이즈 업 권장)',
    durability: '200km',
    price: '₩399,000',
    costPerKm: '약 ₩1,995/km (200km 기준)',
    footType: '전족부/중족부 착지',
    landingPattern: '전족부 착지',
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 88,
      text: '139g은 메타스피드 레이(129g) 다음으로 가벼운 수치이며, 미즈노가 드디어 슈퍼슈즈 경쟁에 본격 참전한 결과물입니다. PEBA 미드솔의 반응성이 뛰어나고 풀렝스 카본 플레이트가 추진력을 더하지만, 34mm 로우 스택으로 풀마라톤에는 쿠셔닝이 부족할 수 있습니다. 3.5mm 드롭이 전족부 착지를 유도하며, 2분50초~4분/km 엘리트 페이스에서 진가를 발휘합니다. 토박스가 좁아 발볼 넓은 한국 러너는 반드시 매장에서 시착해야 하며, 반 사이즈 업이 필수이고 와이드 옵션은 없습니다. 39만 9천원에 200km 내구성이라 km당 약 1,995원으로 가성비는 낮지만, 5K/10K에서 기록 단축을 노리는 엘리트에게는 투자 가치가 있습니다. 평발이나 과내전 러너는 안정성 부족으로 무릎 부담이 커질 수 있으니 피하세요. 한국 마라톤 대회 5K/10K 부문에서 PB 갱신을 목표로 하는 러너의 최종 병기입니다.',
    },
    { userType: '상급 러너', rating: 5, text: '잠실 트랙 10K 대회에서 PB를 30초 단축했습니다. 139g이라 발에 아무것도 없는 느낌이에요. PEBA 미드솔과 카본 플레이트의 스냅이 전족부에서 확실하게 느껴지고, 3.5mm 로우 드롭이 자연스러운 전방 추진을 만들어줍니다. 토박스가 좁아서 280mm에 반 사이즈 업해서 285로 신고 있어요. 발볼 넓은 한국 러너라면 매장 시착이 필수입니다. 200km 내구성은 순수 레이싱 전용이라 가성비보다 기록 갱신에 올인하는 신발이에요. 무릎에 부담이 갈 수 있어 평소 인터벌 훈련으로 하체 근력이 충분한 러너에게만 추천합니다.' },
    { userType: '중급 러너', rating: 4, text: '서울 마라톤 풀코스에 신고 뛰었는데, 30km 이후 34mm 스택의 쿠셔닝 한계가 느껴졌습니다. 139g 초경량은 5K에서 진가를 발휘하고, 풀마라톤은 38mm 스택의 엘리트가 더 적합해요. 토박스가 좁아서 270mm 발볼 105mm인 한국 러너 기준으로는 빡빡하고, 와이드 옵션이 없어 아쉽습니다. 39만 9천원에 200km 내구성이라 km당 약 1,995원으로 가성비는 낮지만, 5K/10K 기록 단축용으로는 PEBA 미드솔과 카본 플레이트의 반응성이 확실합니다. 3.5mm 드롭이 전족부 착지를 유도하는데, 무릎이 약하거나 평발인 러너는 안정성이 부족해 부상 위험이 있으니 피하세요.' },
  ],

  similarShoes: ['asics-metaspeed-ray', 'nike-streakfly-2', 'mizuno-hyperwarp-elite'],
  purchaseLinks: [],
};
