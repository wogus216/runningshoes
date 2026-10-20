import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'brooks-hyperion-elite-6',
  slug: 'brooks-hyperion-elite-6',
  brand: 'Brooks',
  name: '하이페리온 엘리트 6',
  image: '/images/shoes/brooks/hyperionelite6/side.webp',
  images: [
    '/images/shoes/brooks/hyperionelite6/side.webp',
    '/images/shoes/brooks/hyperionelite6/angle.webp',
    '/images/shoes/brooks/hyperionelite6/detail.webp',
  ],
  category: '레이싱',
  rating: 4,
  status: 'new',
  price: 319000,
  description:
    'DNA Gold(PEBA) 폼과 더 가파르게 재설계한 SpeedVault+ 카본 플레이트를 쓴 브룩스 레이싱화. 브랜드·리뷰어 표기 드롭은 7mm지만 RunRepeat 랩 실측은 10.6mm이고, 한국 정가는 319,000원(브룩스 코리아, 2026-10-02 확인)입니다.',
  oneliner: '랩 실측 193g·에너지 리턴 75.2%, 브룩스가 처음으로 경쟁 가능한 레이서로 평가받은 6세대',
  editorComment:
    'RunRepeat 랩 실측(남성 US 9 기준)이 게시돼 무게 193g, 힐 39.9mm·포어풋 29.3mm, 드롭 10.6mm, 충격흡수 힐 159 SA, 에너지 리턴 포어풋 75.2%·힐 65.4%가 확인됐습니다. 브랜드와 Believe in the Run이 적은 드롭 7mm(힐 40mm·포어풋 33mm)와 달리 랩 드롭은 전작 5(11.2mm)와 0.6mm 차이라, "드롭이 크게 낮아졌다"는 설명은 랩 수치로는 뒷받침되지 않습니다. 점수는 랩 게시 전에 보수적으로 잡은 값을 그대로 두었습니다.\n\n' +
    '전작 5(랩 실측 204g, 에너지 리턴 포어풋 77.7%)와 비교하면 11g 가벼워졌고 포어풋 스택이 26.4mm에서 29.3mm로 두꺼워졌으며, 플레이트는 더 가파른 각도로 재설계됐습니다. 랩의 냉동 테스트에서 폼 경도 변화는 4%에 그쳐 겨울 레이스에도 성질이 크게 변하지 않습니다. Believe in the Run은 이 모델에 A 티어(디자인 A·퍼포먼스 A·가치 C)를 주면서 "브룩스 레이싱화 중 처음으로 실제로 고를 만하다"고 평가했고, 빠른 페이스에서 살아나면서 워밍업 때도 불편하지 않다는 점을 장점으로 꼽았습니다. 반대로 가치는 낮게 봤습니다. 319,000원은 직전작 5의 한국 정가(299,000원)보다 2만원 올랐고, 같은 리뷰어는 이 가격이 "경쟁력 있는 첫 레이싱화"에 비해 과하다고 평가했습니다.\n\n' +
    '한국 러너가 먼저 볼 것은 핏과 사이즈 선택지입니다. RunRepeat 랩 토박스는 70.3mm로 평균 73.2mm보다 2.9mm 좁고, 랩은 "noticeably tapered toebox"라며 발볼이 넓으면 "very restrictive"할 수 있다고 적었습니다. 한국 공식몰에는 남녀공용 MEDIUM 폭만 올라와 있고 와이드는 확인되지 않아, 발볼이 넓다면 매장 착화가 먼저입니다. 같은 리뷰어는 혀(텅)가 고정되지 않아 달리는 중 밀린다는 점도 단점으로 지적했습니다.',
  tags: ['레이싱', '카본 플레이트', 'PEBA', '대회용', '신상'],
  specs: {
    weight: 193,
    cushioning: 10,
    responsiveness: 10,
    stability: 6,
    drop: 11,
    durability: 300,
  },
  biomechanics: {
    stackHeight: { heel: 39.9, forefoot: 29.3 },
    drop: 10.6,
    carbonPlate: true,
    plateType: 'curved',
    midsoleType: 'DNA Gold (PEBA)',
    optimalPace: '3:30-4:45 min/km',
  },
  injuryPrevention: {
    plantarFasciitis: 'caution',
    achillesTendinopathy: 'caution',
    kneeIssues: 'caution',
    shinSplints: 'caution',
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
    flatFootCompatibility: 'poor',
    wideOptions: false,
    winterCompatibility: 'good',
    summerCompatibility: 'good',
  },
  targetUsers: {
    recommended: [
      '풀·하프 기록을 노리는 중상급 러너',
      '발볼이 좁고 레이싱 핏을 선호하는 러너',
      '레이스 외에 워밍업에서도 편한 레이서를 찾는 러너',
    ],
    notRecommended: [
      '입문 러너·훈련용으로 쓰려는 러너',
      '발볼이 넓은 러너 (랩 토박스 70.3mm·와이드 미확인)',
      '평발·과내전',
    ],
  },
  priceAnalysis: {
    msrp: 319000,
    costPerKm: 1063,
    valueRating: 5,
    priceTier: 'super-premium',
    alternatives: ['brooks-hyperion-elite-5', 'adidas-adios-pro-5', 'nike-alphafly-4'],
  },
  features: [
    'DNA Gold(PEBA) 폼',
    '더 가파른 각도로 재설계한 SpeedVault+ 카본 플레이트',
    '브랜드 표기 드롭 7mm (랩 실측 10.6mm, 전작 5는 11.2mm)',
    '통기성 플랫 니트 어퍼 + 힐 필로우',
  ],
  detailedSpecs: {
    weight: '193g (RunRepeat 랩 실측, 남성 US 9) · Believe in the Run 표기 198g(US M9)/172g(US W7.5)',
    stackHeight: '힐 39.9mm / 포어풋 29.3mm (RunRepeat 랩 실측, 남성 US 9) · Believe in the Run 표기 40/33mm',
    drop: '10.6mm (RunRepeat 랩 실측, 남성 US 9) · 브랜드·Believe in the Run 표기 7mm — 전작 5는 랩 11.2mm',
    midsole: 'DNA Gold (PEBA)',
    plate: 'SpeedVault+ 카본 플레이트 (재설계, 전작보다 가파른 각도)',
    outsole: '미니멀 러버',
    upper: '플랫 니트 어퍼 + 힐 필로우(실리콘 처리)',
    width: '좁은 편 — RunRepeat 랩 토박스 70.3mm(평균 73.2mm보다 2.9mm 좁음, Width/Fit 93.3mm). 랩 본문: "retains a noticeably tapered toebox"·"it can become very restrictive for those with wide feet". 한국 공식몰에는 남녀공용 MEDIUM만 확인(와이드 미확인). 전작 5는 71.5mm',
    durability: '300km 안팎(추정) — 랩 마모 실측 없음. PEBA 미드솔은 아웃솔보다 폼 성능이 먼저 꺾일 가능성이 있음',
    price: '₩319,000 (브룩스 코리아 공식몰, 2026-10-02 확인) · 미국 $275 · 전작 5는 한국 ₩299,000',
    costPerKm: '약 ₩1,063/km (300km 가정, 추정)',
    footType: '중립~언더프로네이션',
    landingPattern: '미드풋~포어풋',
  },
  reviews: [
    {
      userType: '에디터 분석 — 랩 실측으로 본 5와의 차이',
      text: 'RunRepeat 랩(남성 US 9 기준)으로 보면 6은 5보다 11g 가벼운 193g이고, 포어풋 스택이 26.4mm에서 29.3mm로 늘었으며, 힐 충격흡수는 151에서 159 SA로 올랐습니다. 반면 포어풋 에너지 리턴은 77.7%에서 75.2%로 소폭 낮고, 랩 드롭은 10.6mm로 5(11.2mm)와 거의 같아 브랜드 표기 7mm만큼 낮아지지는 않았습니다. 토박스는 70.3mm로 5(71.5mm)보다 좁아져 발볼이 넓은 러너에게는 더 불리해졌습니다. 한국 정가는 299,000원에서 319,000원으로 올랐습니다.',
    },
    {
      userType: 'Believe in the Run 리뷰 종합 — 처음으로 고를 만한 브룩스 레이서',
      text: 'Believe in the Run은 A 티어(디자인 A·퍼포먼스 A·가치 C)를 줬고, 리뷰어는 이 모델을 "브룩스 레이싱화 중 처음으로 실제로 고를 만하다"고 표현했습니다. 호평은 빠른 페이스에서 살아나는 반응, 워밍업·쿨다운 때도 불편하지 않은 승차감, 통기성 좋은 니트 어퍼와 힐 필로우의 고정력에 모였습니다. 유보는 가격과 개성입니다 — 319,000원이 첫 경쟁력 있는 레이싱화로는 과하다는 평가와, 경쟁 모델처럼 확 끌리는 요소가 없다는 지적이 함께 나왔습니다. 혀가 고정되지 않아 달리는 중 밀린다는 점도 단점으로 적혔습니다.',
    },
    {
      userType: '예상 적합 — 발볼이 좁은 풀코스 기록 도전 러너',
      text: '발볼이 좁거나 보통이고 풀코스 기록을 노리는 러너에게 맞을 가능성이 있습니다. 랩 실측 193g에 포어풋 에너지 리턴 75.2%라 후반 구간 부담이 적은 편이고, 힐 충격흡수 159 SA로 레이서치고 쿠션 여유가 있습니다. 다만 랩 드롭은 10.6mm로 높은 편이라 낮은 드롭을 기대했다면 맞지 않을 수 있고, 토박스 70.3mm에 한국 공식몰은 남녀공용 MEDIUM 폭만 확인돼 발볼이 넓다면 매장 착화가 먼저입니다. 카본 레이서 특성상 아킬레스·종아리 부담은 훈련 이력에 따라 갈립니다.',
    },
    {
      userType: '비적합 — 레이스 횟수가 적고 훈련까지 겸하려는 경우',
      text: '319,000원에 PEBA 폼 수명이 제한적일 가능성이 있어(추정), 연간 대회 횟수가 적고 훈련용으로도 쓰려는 러너에게는 단가 부담이 큽니다. 같은 값이면 한 켤레로 레이스 한두 번과 템포 훈련을 나누는 편이 합리적이고, 속도 훈련 위주라면 플레이트 없는 트레이너가 더 맞습니다. 평발·과내전 성향이라면 좁은 미드풋 구조에서 안정성이 부족할 수 있습니다.',
    },
  ],
  similarShoes: ['brooks-hyperion-elite-5', 'adidas-adios-pro-5', 'nike-alphafly-4'],
  relatedPosts: [
    { slug: 'brooks-running-shoes-lineup-tier-guide-2026', title: '브룩스 러닝화 계급도' },
    { slug: 'running-shoe-plate-guide-2026', title: '플레이트 완전 해설 — 카본·유리섬유·나일론' },
    { slug: 'running-shoe-midsole-foam-guide-2026', title: '미드솔 폼 완전 해설 — EVA·TPU·PEBA' },
  ],
};
