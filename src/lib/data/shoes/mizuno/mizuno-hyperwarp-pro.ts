import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'mizuno-hyperwarp-pro',
  slug: 'mizuno-hyperwarp-pro',
  brand: 'Mizuno',
  name: '하이퍼워프 프로',
  image: '/images/shoes/mizuno/hyperwarppro/side.webp',
  images: [
    '/images/shoes/mizuno/hyperwarppro/side.webp',
    '/images/shoes/mizuno/hyperwarppro/top.webp',
    '/images/shoes/mizuno/hyperwarppro/outsole.webp',
    '/images/shoes/mizuno/hyperwarppro/front.webp',
    '/images/shoes/mizuno/hyperwarppro/back.webp',
  ],
  category: '레이싱',
  rating: 4,
  status: 'new',
  price: 319000,
  description: '미즈노의 슈퍼트레이너/레이서. 201g에 Enerzy XP 미드솔과 카본 인퓨즈드 나일론 플레이트로 훈련과 대회를 겸용할 수 있는 하이퍼워프 라인의 가장 접근성 높은 모델입니다.',
  oneliner: '201g에 39mm 스택, 훈련+대회 겸용 슈퍼트레이너',
  editorComment: '하이퍼워프 프로는 퓨어/엘리트의 공격적인 성격을 순화해 접근성을 높인 슈퍼트레이너입니다. 201g으로 가볍고 39mm 스택이 충분한 쿠셔닝을 제공하며, 카본 인퓨즈드 나일론 플레이트는 순수 카본보다 유연해 전환이 자연스럽습니다. Enerzy XP 미드솔은 PEBA보다 안정적이어서 템포런부터 대회까지 폭넓게 활용 가능합니다. 31만 9천원으로 3형제 중 가장 저렴하며, 극단적 측면 플레어가 발목 안정성에 도움을 줍니다.\n\n사이즈·구매 가이드: 토박스가 표준 폭이고 와이드 옵션이 없으므로 발볼이 넓은 경우 반 사이즈 업을 권장합니다. 319,000원에 km당 약 798원은 훈련과 대회를 겸용하는 슈퍼트레이너 중 합리적인 수준입니다. 마하 X 3나 슈퍼블라스트 2와 비교해 플레이트 성격과 가격 차이를 확인한 후 구매를 결정하세요.',
  tags: ['레이싱', '슈퍼트레이너', '카본', '겸용'],

  specs: {
    weight: 201,
    cushioning: 8,
    responsiveness: 8,
    stability: 6,
    drop: 6,
    durability: 400,
  },

  biomechanics: {
    stackHeight: { heel: 39, forefoot: 33.5 },
    drop: 5.5,
    carbonPlate: true,
    plateType: 'carbon-infused nylon',
    midsoleType: 'Enerzy XP',
    optimalPace: '3:30-5:00 min/km',
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
    recommended: ['템포런/인터벌 훈련', '하프/풀마라톤 대회', '슈퍼트레이너 겸 레이서', '발목 불안정 러너'],
    notRecommended: ['이지런/리커버리', '맥시멀 쿠셔닝 선호', '조용한 신발 선호'],
  },

  features: ['Enerzy XP 미드솔', '카본 인퓨즈드 나일론 플레이트', '39mm 높은 스택', '극단적 측면 플레어', '201g 경량'],

  priceAnalysis: {
    msrp: 319000,
    costPerKm: 798,
    valueRating: 7,
    priceTier: 'super-premium',
    alternatives: ['hoka-mach-x-3', 'asics-superblast-2', 'saucony-endorphin-trainer'],
  },

  detailedSpecs: {
    weight: '201g (US M9)',
    stackHeight: '힐 39mm / 포어풋 33.5mm',
    drop: '5.5mm',
    midsole: 'Enerzy XP (바운시 폼)',
    plate: '카본 인퓨즈드 나일론 플레이트',
    outsole: '러버 아웃솔',
    upper: '엔지니어드 메쉬',
    width: '표준',
    durability: '400km',
    price: '₩319,000',
    costPerKm: '약 ₩798/km (400km 기준)',
    footType: '중립',
    landingPattern: '중족부/전족부 착지',
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 84,
      text: '하이퍼워프 프로는 3형제 중 가장 실용적인 선택입니다. 카본 인퓨즈드 나일론 플레이트가 순수 카본보다 부드럽고, Enerzy XP 미드솔이 PEBA보다 안정적이어서 템포런부터 대회까지 매일 신을 수 있습니다. 201g에 39mm 스택은 슈퍼트레이너 카테고리에서 경쟁력 있으며, 극단적 측면 플레어가 발목 불안정 러너에게 도움이 됩니다. 토박스 너비가 표준이라 발볼 넓은 한국 러너도 비교적 편하지만, 와이드 옵션이 없어 발볼 108mm 이상이면 주의하세요. 31만 9천원에 400km 내구성으로 km당 약 798원이라 가성비가 뛰어나지는 않지만, 훈련+대회 겸용으로 쓸 수 있어 실질적 활용도는 높습니다. 평발 러너도 측면 플레어 덕분에 안정성이 괜찮고, 무릎 부담도 39mm 쿠셔닝으로 잘 흡수합니다.',
    },
    { userType: '중급 러너', rating: 4, text: '매주 인터벌+장거리를 소화하는데, 프로 하나로 두 가지를 다 커버합니다. 201g이 인터벌(4분/km)에서도 가볍게 느껴지고, 39mm 스택이 20km 장거리에서 쿠셔닝을 유지해줍니다. 마하 X3(249,000원)보다 7만원 비싸지만 미즈노의 측면 플레어 안정감이 차별점이에요. 토박스 너비는 표준이라 발볼 넓은 한국 러너 기준으로도 무난하게 신을 수 있었고, 무릎 부담도 적었습니다. 400km 내구성이면 약 4개월치 훈련량인데, km당 약 798원은 슈퍼트레이너 중 합리적인 편이라 가성비도 나쁘지 않습니다.' },
    { userType: '입문~중급 러너', rating: 4, text: '첫 슈퍼트레이너로 구매했어요. 카본 인퓨즈드 나일론 플레이트라 순수 카본화보다 전환이 부드럽고 자연스럽습니다. 측면 플레어 덕분에 발목이 안정적인데, 계단 내려갈 때 뒤꿈치가 걸리는 느낌은 있어요. 5.5mm 드롭이 미드풋 착지에 자연스럽고, 토박스도 한국 러너 평균 발볼에 맞는 편이라 별도 와이드 없이도 편합니다. 270mm 기준 발볼 103mm인데 압박감이 없었어요. 31만 9천원이 부담되긴 하지만 평발 교정이 필요한 러너에게는 안정성과 추진력을 동시에 제공해서 무릎 부담 줄이는 데 도움이 됩니다.' },
  ],

  similarShoes: ['hoka-mach-x-3', 'asics-superblast-2', 'saucony-endorphin-trainer', 'mizuno-hyperwarp-elite'],
  purchaseLinks: [],
};
