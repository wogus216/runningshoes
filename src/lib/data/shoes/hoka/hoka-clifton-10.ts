import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'hoka-clifton-10',
  slug: 'hoka-clifton-10',
  brand: 'Hoka',
  name: '클리프톤 10',
  image: '/images/shoes/hoka/clifton10/side.webp',
  images: ['/images/shoes/hoka/clifton10/side.webp', '/images/shoes/hoka/clifton10/front.webp', '/images/shoes/hoka/clifton10/back.webp', '/images/shoes/hoka/clifton10/outsole.webp'],
  category: '입문화',
  rating: 5,
  price: 199000,
  description: '호카의 대표 입문화로, 가볍고 푹신한 쿠셔닝과 로커 기술로 편안한 러닝을 제공합니다. 초보 러너부터 회복 러닝까지 폭넓게 활용 가능합니다.',
  oneliner: '275g에 44mm 스택, 메타로커 입문화',
  editorComment: '클리프턴 10은 275g 경량에 44mm 맥시멀 힐 스택을 결합한 호카의 대표작입니다. 147 SA 충격흡수는 Brooks Ghost 17(141 SA)보다 높아 무릎 보호에 뛰어나며, 메타로커 지오메트리가 자연스러운 착지-이탈 전환을 돕습니다. 97.2mm 넓은 토박스는 발볼 넓은 한국 러너에게 편안하고 와이드 옵션도 제공됩니다. 19만 9천원으로 본디(22만 9천원)보다 3만원 저렴하며, 52.3% 에너지 리턴으로 반발력은 약하지만 6분/km 이상 편안한 조깅에 최적입니다.\n\n사이즈·구매 가이드: 토박스가 standard 폭에 와이드 옵션도 제공되므로 발볼이 넓은 러너도 부담 없이 선택할 수 있습니다. 정가 199,000원에 내구성 500km 기준 km당 약 398원으로 입문 쿠션화 중 합리적인 가성비입니다. 더 가볍고 반응성 있는 데일리화를 원한다면 페가수스 41, 높은 반발력을 원한다면 노바블라스트 5가 대안입니다.',
  tags: ['입문화', '맥시멀 쿠셔닝', '로커 기술'],

  specs: {
    weight: 275,
    cushioning: 9,
    responsiveness: 6,
    stability: 7,
    drop: 12,
    durability: 500,
  },

  biomechanics: {
    stackHeight: {
      heel: 44,
      forefoot: 32,
    },
    drop: 12,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'CMEVA Foam',
    optimalPace: '5:30-7:00 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'excellent',
    achillesTendinopathy: 'excellent',
    kneeIssues: 'excellent',
    shinSplints: 'excellent',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'good',
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },

  targetUsers: {
    recommended: ['러닝 입문자', '맥시멀 쿠셔닝 선호', '회복 러닝용', '무릎/관절 보호 필요', '장거리 편안함 추구'],
    notRecommended: ['빠른 레이스 페이스', '강한 반발력 선호', '미니멀리스트 러너'],
  },

  features: ['맥시멀 쿠셔닝', '메타 로커 기술', '경량 CMEVA 폼', '부드러운 착지감'],

  priceAnalysis: {
    msrp: 199000,
    streetPrice: 189000,
    costPerKm: 398,
    valueRating: 8,
    priceTier: 'mid',
    alternatives: ['nike-pegasus-41', 'asics-novablast-5', 'new-balance-880-v15'],
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 88,
      text: '입문 러너의 첫 러닝화로 가장 추천하는 모델입니다. SA 147 충격흡수와 44mm 힐 스택으로 "무릎 괜찮나요?" 질문에 자신있게 추천할 수 있습니다. 97.2mm 넓은 토박스로 발볼 넓은 한국 러너에게도 편안하고, 와이드 옵션까지 있어 발볼 걱정 없이 선택 가능합니다. 275g 무게에 52.3% 에너지 리턴으로 반발력은 약하지만, CMEVA 미드솔의 500km 내구성과 km당 약 398원의 가성비는 입문화 중 최상급입니다. 19만 9천원으로 본디(22만 9천원)보다 3만원 저렴하면서 입문자에게 충분한 쿠셔닝을 제공하며, 평발 러너도 안심하고 착용할 수 있는 넉넉한 핏이 장점입니다. 12mm 하이드롭으로 힐스트라이커에게 최적화되어 있고, 6분/km 이상 편안한 조깅에 최적입니다.',
    },
    {
      userType: '입문 러너',
      rating: 5,
      text: '올해 3월에 러닝 시작하면서 동호회 선배 추천으로 270mm 샀어요. 서울숲 왕복 6km를 주 3회 뛰는데, 300km 넘게 신은 지금도 쿠션감이 살아있어서 놀랐습니다. 특히 아스팔트 내리막에서 무릎에 오던 통증이 완전히 사라졌어요. 전에 싸구려 운동화 신고 뛰다가 무릎이 아파서 포기할 뻔했는데, 클리프톤으로 바꾸고 나서 러닝이 즐거워졌습니다. 44mm 힐 스택이 충격을 확실히 흡수해주고, 275g이라 가볍지는 않지만 입문자한테는 안정감이 더 중요하니까요. 발볼이 넓은 편인데 토박스가 97.2mm라 한국 러너 발형에 잘 맞고, 19만 9천원이면 가성비도 괜찮다고 생각합니다.',
    },
    {
      userType: '회복 러너',
      rating: 5,
      text: '인터벌 훈련 다음 날 뚝섬 한강공원에서 회복 조깅용으로 씁니다. 키로당 6분 30초 정도 느릿느릿 뛰는데 44mm 힐 스택의 로커가 굴러가듯이 전환시켜줘서 지친 종아리에 부담이 없어요. SA 147 충격흡수 덕에 무릎에 오는 충격도 확실히 줄었고, 52.3% 에너지 리턴은 낮지만 회복런에서는 오히려 부드러운 쿠셔닝이 더 편합니다. 다만 킬로 5분 이하로 올리면 바닥이 물렁물렁해서 힘이 빠지는 느낌이라, 빠른 날은 마하 6로 갈아신습니다. 500km 내구성이라 km당 약 398원 수준의 가성비도 만족스럽고, 발볼이 넓은 한국 러너라 와이드 옵션을 골랐는데 토박스 97.2mm가 넉넉해서 장거리에도 발가락이 불편하지 않아요. 275g 무게가 체감되긴 하지만 회복 조깅에서는 오히려 안정감을 주는 장점이 됩니다.',
    },
  ],

  detailedSpecs: {
    weight: '275g (남성 US 9 기준)',
    stackHeight: '힐 44mm / 포어풋 32mm',
    drop: '12mm (Lab 측정치)',
    midsole: 'CMEVA 폼 (경량 압축 EVA)',
    plate: '없음',
    outsole: '듀라브레이드 러버',
    upper: '엔지니어드 메쉬',
    width: '표준 (와이드 옵션 있음)',
    durability: '500km',
    price: '₩199,000 (MSRP) / 세일 시 ₩160,000~',
    costPerKm: '약 ₩398/km (500km 기준)',
    footType: '표준~넓은 발볼 / 평발 OK / 와이드 옵션 있음',
    landingPattern: '힐스트라이크 (로커 기술로 자연스러운 전환)',
  },

  similarShoes: ['nike-pegasus-41', 'asics-gel-nimbus-28', 'new-balance-880-v15', 'brooks-ghost-max-3'],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/5no2qeeM' }],
};
