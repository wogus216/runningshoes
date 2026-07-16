import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'hoka-mach-6',
  slug: 'hoka-mach-6',
  brand: 'Hoka',
  name: '마하 6',
  image: '/images/shoes/hoka/mach6/side.webp',
  images: ['/images/shoes/hoka/mach6/side.webp', '/images/shoes/hoka/mach6/front.webp', '/images/shoes/hoka/mach6/top.webp', '/images/shoes/hoka/mach6/outsole.webp'],
  category: '데일리',
  rating: 4,
  price: 185000,
  description: '가볍고 반응성 좋은 데일리 트레이너입니다. 템포 러닝부터 일상 훈련까지 다양하게 활용 가능한 올라운더입니다.',
  oneliner: '232g+65.4% 에너지, 5/5 통기성 최상',
  editorComment: '마하 6는 232g 경량에 65.4% 에너지 리턴으로 호카 라인업 중 가장 빠른 페이스에 대응 가능한 데일리화입니다. Supercritical EVA는 클리프턴/본디보다 반응성(8/10)이 높고, 통기성 5/5 최상위급으로 여름 러닝에 쾌적합니다. 18만 5천원으로 Pegasus 41(19만 9천원)보다 저렴하며 템포런부터 장거리까지 다용도 활용이 가능합니다. 단, 70.1mm narrow 토박스로 발볼 넓은 러너는 와이드 선택이 필수이고, EVA 폼이 겨울에 42% 더 단단해지는 점은 주의해야 합니다.\n\n사이즈·구매 가이드: 토박스가 standard 폭이지만 체감이 좁다는 평가가 많아 발볼 넓은 러너는 와이드 옵션을 권장합니다. 정가 185,000원에 내구성 450km 기준 km당 약 411원이며, 반발력과 통기성이 비슷한 대안으로는 페가수스 41이나 노바블라스트 5가 있습니다.',
  tags: ['데일리 트레이너', '경량', '반응성'],

  specs: {
    weight: 232,
    cushioning: 7,
    responsiveness: 8,
    stability: 7,
    drop: 10,
    durability: 450,
  },

  biomechanics: {
    stackHeight: {
      heel: 36,
      forefoot: 26,
    },
    drop: 10,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'Supercritical EVA',
    optimalPace: '4:30-6:00 min/km',
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
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },

  targetUsers: {
    recommended: ['데일리 트레이닝', '템포 러닝', '올라운드 러너', '경량화 선호', '다양한 페이스 훈련'],
    notRecommended: ['최대 쿠셔닝 필요', '마라톤 레이싱 전용', '안정화 필요'],
  },

  features: ['경량 디자인', 'Supercritical EVA', '메타 로커', '다용도 활용'],

  priceAnalysis: {
    msrp: 185000,
    streetPrice: 156500,
    costPerKm: 411,
    valueRating: 8,
    priceTier: 'mid',
    alternatives: ['nike-pegasus-41', 'asics-novablast-5', 'new-balance-1080-v14'],
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 87,
      text: '호카의 가벼움과 반응성을 원하는 중급 러너에게 최적의 데일리 트레이너입니다. 232g 경량에 65.4% 에너지 리턴으로 클리프톤/본디보다 빠른 페이스에 적합하며, 36mm 힐 스택과 10mm 드롭으로 힐스트라이커에게 편안합니다. 18만 5천원으로 페가수스 41(19만 9천원)보다 저렴해 가성비가 좋고, 450km 내구성으로 km당 약 411원 수준입니다. 토박스가 70.1mm로 좁아 발볼 넓은 한국 러너는 와이드 옵션을 반드시 선택하세요. 통기성 5/5 최상위급으로 여름 러닝에 쾌적하지만, 겨울에는 Supercritical EVA 폼이 42% 더 단단해져 무릎 보호를 위해 클리프톤으로 교체하는 것을 권장합니다. 평발 러너도 무난하게 착용 가능하며 템포런부터 롱런까지 다용도 활용이 가능한 올라운더입니다.',
    },
    {
      userType: '중급 러너',
      rating: 5,
      text: '퇴근 후 여의도 한강공원에서 주 4회 뛰는데, 마하 6가 제 원픽 데일리화가 됐습니다. 화요일 인터벌(400m x 8, 킬로 4분 20초), 목요일 템포런(10km, 킬로 4분 50초), 주말 15km 롱런까지 전부 이 신발 하나로 커버해요. 232g이라 가벼워서 인터벌에서도 답답하지 않고, 65.4% 에너지 리턴 덕에 템포런에서 반발력이 확실히 느껴집니다. 토박스가 70.1mm로 좀 좁아서 발볼 넓은 한국 러너라면 와이드를 추천하고, 저는 265mm 표준인데 발등이 높은 편이라 처음에 좀 꽉 끼었는데 3번 뛰고 나니까 완벽히 맞더라고요. 450km 넘게 신었는데 아직 쿠션이 살아있어서 가성비 만족합니다.',
    },
    {
      userType: '올라운드 러너',
      rating: 4,
      text: '여름 러닝에 통기성이 최고예요. 새벽 5시 북한산 둘레길 입구까지 왕복 8km 뛰는데, 7월에도 발이 쾌적합니다. 36mm 힐 스택이 아스팔트 충격을 잘 잡아주고, 232g 경량에 65.4% 에너지 리턴 덕에 언덕 오르막에서도 무릎에 부담이 적어요. 반면 12월에 같은 코스 뛸 때는 EVA 폼이 42% 더 단단해져서 충격이 그대로 올라오더라고요. 겨울에는 클리프톤으로 바꿔 신고, 마하 6는 3월~10월 전용으로 씁니다. 발볼이 넓은 한국 러너라 와이드 옵션을 골랐는데 토박스가 여유로워서 좋고, 450km 내구성에 km당 약 411원 가성비면 데일리 트레이너로 만점이에요. 평발이지만 안정성도 무난해서 별도 인솔 없이도 편안합니다.',
    },
  ],

  detailedSpecs: {
    weight: '232g (남성 US 9 기준)',
    stackHeight: '힐 36mm / 포어풋 26mm',
    drop: '10mm (Lab 측정치)',
    midsole: 'Supercritical EVA',
    plate: '없음',
    outsole: '러버 커버리지',
    upper: '엔지니어드 메쉬',
    width: '표준 (와이드 옵션 있음)',
    durability: '500km',
    price: '₩185,000 (MSRP) / 세일 시 ₩160,000~',
    costPerKm: '약 ₩411/km (450km 기준)',
    footType: '표준 발볼 / 와이드 옵션 있음',
    landingPattern: '힐스트라이크~미드풋',
  },

  similarShoes: ['nike-pegasus-41', 'asics-novablast-5', 'puma-velocity-nitro-4', 'saucony-kinvara-16'],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/xMnfwsEh' }],
};
