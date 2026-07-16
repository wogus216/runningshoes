import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'new-balance-balos-v1',
  slug: 'new-balance-balos-v1',
  brand: 'New Balance',
  name: '발로스 V1',
  image: '/images/shoes/newbalance/balosv1/side.webp',
  images: [
    '/images/shoes/newbalance/balosv1/side.webp',
    '/images/shoes/newbalance/balosv1/top.webp',
    '/images/shoes/newbalance/balosv1/outsole.webp',
    '/images/shoes/newbalance/balosv1/front.webp',
  ],
  category: '쿠션화',
  rating: 4,
  status: 'new',
  price: 259000,
  description: '뉴발란스의 프리미엄 PEBA 데일리 쿠션화. 20% PEBA + 80% EVA 블렌드 폼으로 경량이면서 바운시한 라이드를 제공하며, 로커 지오메트리로 빠른 전환을 돕습니다.',
  oneliner: '261g에 PEBA 블렌드 폼, 바운시한 프리미엄 데일리',
  editorComment: '발로스 V1은 뉴발란스에서 레이싱화 외 유일하게 PEBA 폼(20%)을 사용한 데일리 트레이너입니다. 261g으로 1080 v15(280g)보다 가볍고, 38.5mm 힐 스택에서 나오는 쿠셔닝이 충분합니다. 힐 베벨+전족부 로커+토 스프링이 만드는 롤링감이 핵심이며, 이지런부터 템포런까지 자연스럽게 커버합니다. 25만 9천원으로 프리미엄 가격대이지만, PEBA 폼의 바운시한 느낌은 Fresh Foam X와 확실히 차별됩니다. 다만 빠른 페이스에서는 폼이 너무 부드러워 안정감이 부족합니다.\n\n사이즈·구매 가이드: 토박스 너비가 표준(standard)이며 2E 와이드 옵션이 있어 발볼 넓은 러너도 편하게 착용할 수 있습니다. 259,000원 ÷ 500km = km당 약 518원입니다. 5만원 저렴한 대안으로 1080 V15(바운시함은 덜하지만 쿠션 동급), 비슷한 바운시 성격으로는 노바블라스트 5와 비교해보세요.',
  tags: ['쿠션화', 'PEBA', '프리미엄', '바운시'],

  specs: {
    weight: 261,
    cushioning: 9,
    responsiveness: 7,
    stability: 5,
    drop: 6,
    durability: 500,
  },

  biomechanics: {
    stackHeight: { heel: 38.5, forefoot: 32.5 },
    drop: 6,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'PEBA + EVA Blend (20/80)',
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
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'good',
  },

  targetUsers: {
    recommended: ['데일리 퍼포먼스 러너', '바운시한 쿠셔닝 선호', 'PEBA 폼 경험', '이지런~템포런 겸용'],
    notRecommended: ['빠른 레이싱', '안정화 필요 러너', '미니멀 선호'],
  },

  features: ['PEBA 20% + EVA 80% 블렌드 폼', '힐 베벨 + 전족부 로커 + 토 스프링', '261g 경량', '6mm 드롭', '와이드 옵션 제공'],

  priceAnalysis: {
    msrp: 259000,
    costPerKm: 518,
    valueRating: 6,
    priceTier: 'premium',
    alternatives: ['new-balance-1080-v15', 'asics-novablast-5', 'hoka-mach-6'],
  },

  detailedSpecs: {
    weight: '261g (US M9)',
    stackHeight: '힐 38.5mm / 포어풋 32.5mm',
    drop: '6mm',
    midsole: 'PEBA 20% + EVA 80% 블렌드 (레이싱 외 유일한 PEBA 적용)',
    plate: '없음',
    outsole: '러버 아웃솔',
    upper: '엔지니어드 메쉬',
    width: '표준 (D), 와이드 (2E) 옵션',
    durability: '500km',
    price: '₩259,000',
    costPerKm: '약 ₩518/km (500km 기준)',
    footType: '중립',
    landingPattern: '중족부/전족부 착지',
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 82,
      text: 'PEBA 폼을 데일리 트레이너에 담은 뉴발란스의 프리미엄 신발입니다. 261g으로 가볍고 바운시한 느낌이 Fresh Foam X와 확실히 다릅니다. 힐 38.5mm 스택에서 나오는 쿠셔닝이 충분하면서도, 힐 베벨과 로커가 만드는 롤링 전환이 매끄럽고 이지런부터 템포런까지 폭넓게 쓸 수 있습니다. 2E 와이드 옵션이 제공되어 발볼 넓은 한국 러너도 편하게 착용 가능합니다. 다만 25만 9천원이라는 가격이 부담이고, 빠른 페이스(4:00/km 이하)에서는 폼이 너무 말랑해 안정감이 떨어집니다. 1080 v15(20만 9천원)보다 5만원 비싸므로, 500km 내구성 기준 km당 약 518원으로 가성비가 뛰어나다고 보기는 어렵습니다. 무릎 보호 측면에서는 쿠셔닝이 충분하지만 안정성이 5/10으로 낮아 과내전 러너는 주의가 필요합니다.',
    },
    {
      userType: '중급 러너',
      rating: 4,
      text: '1080 v14에서 갈아탔는데 바운스가 확실히 다릅니다. 올림픽공원 외곽 12km 코스에서 주 4회 뛰는데, PEBA 폼이 착지마다 톡톡 튀어오르는 느낌이 좋아요. 261g이라 1080보다 20g 가볍고, 6mm 드롭의 로커 전환이 자연스럽습니다. 발볼이 넓은 편이라 275mm 2E 와이드로 착용 중인데 토박스 여유가 충분해서 12km 후반에도 발가락이 눌리지 않습니다. 다만 4:30/km 템포에서 폼이 물렁해지는 느낌이 있어 빠른 훈련에는 아쉽습니다. 현재 250km 정도 신었는데 PEBA 특성상 폼 꺼짐이 적어 500km까지 충분히 갈 것 같습니다. 가성비 면에서는 25만 9천원이 부담되지만, 바운시한 라이드를 원하는 러너에게는 만족스러운 선택입니다.',
    },
    {
      userType: '입문 러너',
      rating: 4,
      text: '275mm 와이드로 신고 있어요. 한국인 발볼이 넓은 편인데 2E 와이드가 있어서 토박스가 편하고 새끼발가락 눌림이 전혀 없습니다. PEBA 블렌드 폼의 부드럽고 탄력 있는 느낌이 매일 신고 싶게 만들어요. 힐 38.5mm 스택과 6mm 드롭 덕분에 무릎 충격이 거의 없고, 탄천에서 주 3회 5km 조깅할 때 261g 무게가 가볍게 느껴집니다. 평발 기미가 있는데 쿠셔닝이 충분해서 발바닥 피로가 적습니다. 한 가지 아쉬운 건 25만 9천원이라 입문자에게는 가성비가 좋다고 하기 어렵고, 500km 내구성 기준 km당 약 518원으로 비싼 편입니다. 1080 v15가 5만원 저렴하면서 비슷한 쿠셔닝을 제공하므로 예산이 빠듯하면 1080도 괜찮은 대안입니다.',
    },
  ],

  similarShoes: ['new-balance-1080-v15', 'asics-novablast-5', 'hoka-mach-6', 'saucony-endorphin-azura'],
  purchaseLinks: [],
};
