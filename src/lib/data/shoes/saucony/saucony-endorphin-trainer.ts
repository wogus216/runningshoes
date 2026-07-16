import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'saucony-endorphin-trainer',
  slug: 'saucony-endorphin-trainer',
  brand: 'Saucony',
  name: '엔돌핀 트레이너',
  image: '/images/shoes/saucony/endorphin_Trainer.webp',
  images: [
    '/images/shoes/saucony/endorphintrainer/main.webp',
    '/images/shoes/saucony/endorphintrainer/side.webp',
    '/images/shoes/saucony/endorphintrainer/heel.webp',
    '/images/shoes/saucony/endorphintrainer/top.webp',
    '/images/shoes/saucony/endorphintrainer/outsole.webp',
  ],
  category: '쿠션화',
  rating: 4,
  price: 219000,
  description: 'Saucony의 프리미엄 트레이너로, IncrediRUN 미드솔을 사용해 엘리트급 에너지 리턴을 데일리 트레이닝에서 경험할 수 있습니다.',
  oneliner: 'IncrediRUN 폼을 매일 훈련에, 엘리트 감각의 슈퍼트레이너',
  editorComment: '엔돌핀 엘리트의 IncrediRUN 폼을 121.7mm 초광폭 플랫폼 위에 올려놓은 구조가 이 신발의 핵심입니다. 전족부 76.3% 에너지 리턴은 훈련용치고 파격적인 수치이고, 3/4 길이 카본 플레이트가 추진력을 더합니다. 21만 9천원으로 슈퍼블라스트 2(₩259,000)보다 저렴하면서 600km 내구성으로 오래 신을 수 있습니다. 다만 285g 무게는 템포런에 투입하기엔 무겁고, 70.1mm 좁은 토박스는 발볼 넓은 한국 러너에게 구매 장벽이 됩니다. 장거리 훈련 위주의 시리어스 러너에게 적합합니다.\n\n사이즈·구매 가이드: 토박스가 표준 폭이나 실측 70.1mm로 다소 좁으며 와이드 옵션이 없으므로, 발볼이 넓다면 반드시 시착 후 반 사이즈 업을 고려하세요. 정가 219,000원에 내구성 600km 기준 km당 약 365원입니다. 같은 쿠션화 트레이너로는 슈퍼블라스트 2·마하 X 3이 대안입니다.',
  tags: ['쿠션화', '트레이너', 'IncrediRUN', '프리미엄'],

  specs: {
    weight: 285,
    cushioning: 8,
    responsiveness: 8,
    stability: 6,
    drop: 7,
    durability: 600,
  },

  biomechanics: {
    stackHeight: {
      heel: 38.9,
      forefoot: 32,
    },
    drop: 6.9,
    carbonPlate: true,
    plateType: 'flat',
    midsoleType: 'IncrediRUN + PWRRUN',
    optimalPace: '4:30-6:30 min/km',
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
    recommended: ['데일리 트레이닝', '장거리', '중상급 러너', '템포 러닝'],
    notRecommended: ['입문 러너', '레이싱 전용', '과내전 러너'],
  },

  features: ['IncrediRUN 미드솔', '3/4 카본 플레이트', '6.9mm 드롭', '엘리트급 에너지 리턴'],

  priceAnalysis: {
    msrp: 219000,
    streetPrice: 189000,
    costPerKm: 365,
    valueRating: 7,
    priceTier: 'premium',
    alternatives: ['nike-zoom-fly-6', 'asics-superblast-2', 'new-balance-sc-trainer-v3'],
  },

  detailedSpecs: {
    weight: '285g (Lab)',
    stackHeight: '힐 38.9mm / 포어풋 32mm (Lab)',
    drop: '6.9mm (Lab 측정)',
    midsole: 'IncrediRUN + PWRRUN (듀얼 폼)',
    plate: '3/4 길이 카본 플레이트',
    outsole: '러버 + 강화 EVA',
    upper: '메쉬 (고통기성)',
    width: '표준 (D) - 토박스 좁음',
    durability: '600km+',
    price: '219,000원',
    costPerKm: '약 ₩365/km (600km 기준)',
    footType: '중립',
    landingPattern: '중족부/전족부 착지',
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 77,
      text: '엔돌핀 엘리트의 IncrediRUN 폼을 훈련에서 경험하고 싶은 시리어스 러너를 위한 슈퍼트레이너입니다. 21만원대에 76.3% 에너지 리턴을 데일리 훈련에서 누릴 수 있고, 3/4 카본 플레이트가 추진력을 더해줍니다. 285g에 42mm 힐 스택, 8mm 드롭 구성이고, 121.7mm 초광폭 플랫폼으로 안정성이 뛰어납니다. SA 148 충격흡수로 무릎 보호가 훌륭하고 600km 내구성에 km당 약 365원으로 가성비 좋습니다. 다만 토박스가 70.1mm로 좁아 발볼 넓은 한국 러너는 착화감이 불편할 수 있고, 와이드 옵션도 없어 반사이즈 업을 고려하세요. 285g 무게 때문에 4:30/km 이하 템포런보다는 5분대 이상 장거리 훈련에 더 적합하며, 평발 러너에게도 광폭 플랫폼이 안정감을 제공합니다.',
    },
    { userType: '상급 러너', rating: 5, text: '월 280km 서브3 러너입니다. 엘리트 2의 IncrediRUN 폼을 매일 훈련에서 쓸 수 있다는 발상이 좋아서 바로 구매했어요. 285g이지만 76.3% 에너지 리턴이 남산 둘레길 왕복 16km 경사면에서 추진력을 확실히 더해줍니다. 토박스가 70.1mm로 좁은 편이라 발볼 넓은 한국 러너는 주의하세요. 슈퍼블라스트 2(26만원)보다 4만원 싸면서 600km 내구성이니 가성비 최고의 훈련화입니다. 무릎 보호도 충분해서 매일 달리기에 좋습니다.' },
    { userType: '중급 러너', rating: 4, text: '엔돌핀 스피드 5와 비교 구매를 고민하다가, 장거리 훈련 비중이 높아서 285g 트레이너를 선택했습니다. 3/4 카본 플레이트가 들어있어서 76.3% 에너지 리턴으로 스피드보다 추진력이 더 좋고, 121.7mm 광폭 플랫폼이 30km 장거리에서 안정감을 줍니다. 아쉬운 건 토박스가 70.1mm로 좁다는 것. 270mm 발볼에 약간 빡빡하게 맞아서, 발볼 넓으신 한국 러너는 반 사이즈 업이 필요할 것 같아요. 600km 내구성에 무릎 보호도 좋아 가성비 괜찮습니다.' },
    { userType: '중급 러너', rating: 3, text: '냉정하게 평가하면, 285g은 슈퍼트레이너라기엔 무거운 편입니다. 줌플라이 6(269g)이나 하이페리온 맥스 3(283g)이 비슷한 가격에 더 가볍거든요. IncrediRUN 폼의 76.3% 에너지 리턴 반발력은 인정하지만, 토박스 70.1mm가 발볼 넓은 한국 러너에게 좁고, 4:30/km 템포런에서 무게가 걸림돌이에요. 무릎 보호와 가성비(km당 약 365원)는 좋지만 5:00/km 이상 장거리 훈련 전용으로 생각해야 합니다.' },
  ],

  similarShoes: ['asics-superblast-2', 'new-balance-sc-trainer-v3', 'hoka-mach-x-3', 'nike-vomero-18'],
  purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBKxM0' }],
};
