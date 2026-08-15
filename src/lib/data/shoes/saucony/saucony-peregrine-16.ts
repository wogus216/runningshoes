import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'saucony-peregrine-16',
  slug: 'saucony-peregrine-16',
  brand: 'Saucony',
  name: '페레그린 16',
  image: '/images/shoes/saucony/peregrine16/side.jpg',
  images: ['/images/shoes/saucony/peregrine16/side.jpg'],
  category: '트레일',
  rating: 4.5,
  status: 'new',
  price: 179000,
  description:
    '써코니 트레일의 표준 모델. 16세대에서 아웃솔이 Vibram Megagrip으로 바뀌면서 젖은 바위·진흙 접지력이 크게 개선됐고, PWRRUN 폼이 소폭 부드러워지며 스택도 1mm씩 올랐습니다.',
  oneliner: 'Vibram Megagrip 채용 — 드롭 4mm의 민첩한 트레일 표준',
  editorComment:
    '페레그린 16의 변화는 아웃솔에 집중돼 있습니다. 전 세대까지의 자체 러버에서 Vibram Megagrip + 트랙션 러그로 바뀌면서, 젖은 바위처럼 미끄러운 노면에서의 접지가 눈에 띄게 좋아졌다는 평이 일관됩니다. 러그 높이는 5mm에서 4mm로 오히려 낮아졌는데, 고무 자체의 그립이 올라가 오르막·내리막 모두에서 손해가 없다는 것이 리뷰들의 공통된 평가입니다.\n\n성격은 "민첩한 트레일화"입니다. 스택 32/28mm에 드롭 4mm로 낮고 평평해, 기술적인 바위·나무뿌리 구간에서 발밑 감각이 살아 있습니다. 반대로 울트라 거리의 충격 누적을 견디는 용도라면 스택이 더 높은 엑소더스 울트라 4(36/30mm) 쪽이 맞습니다.\n\n사이즈·구매 가이드: 국내 공식몰에 와이드 옵션이 함께 유통됩니다. 드롭 4mm는 로드화(보통 8~10mm)에서 넘어오면 종아리·아킬레스 부하가 확실히 다르니, 첫 몇 회는 거리를 줄여 적응하세요. 2026-08-15 기준 국내 유통 2종 전량이 20% 할인된 143,200원입니다.',
  tags: ['트레일', '비브람', '경량', '기술적 지형'],

  specs: {
    weight: 269,
    cushioning: 6,
    responsiveness: 7,
    stability: 7,
    drop: 4,
    durability: 600,
  },

  biomechanics: {
    stackHeight: { heel: 32, forefoot: 28 },
    drop: 4,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'PWRRUN (16세대에서 소폭 소프트화) + 록플레이트',
    optimalPace: '5:30-8:00 min/km (트레일 기준)',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'caution',
    kneeIssues: 'good',
    shinSplints: 'caution',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'good',
    wideOptions: true,
    winterCompatibility: 'excellent',
    summerCompatibility: 'good',
  },

  priceAnalysis: {
    msrp: 179000,
    streetPrice: 143200,
    costPerKm: 298,
    valueRating: 8,
    priceTier: 'mid',
    alternatives: ['saucony-xodus-ultra-4', 'hoka-speedgoat-7', 'salomon-ultra-glide-4'],
    valueAdvantages: [
      'Vibram Megagrip 채용 — 젖은 노면 접지력이 세대 최대 개선점',
      '와이드 옵션 국내 유통',
      '2026-08-15 기준 2종 전량 20% 할인(143,200원)',
      '드롭 4mm의 낮고 평평한 구성 — 기술적 지형에서 발밑 감각 유지',
    ],
  },

  targetUsers: {
    recommended: [
      '바위·나무뿌리가 많은 기술적 트레일을 자주 달리는 러너',
      '젖은 노면·계곡 구간에서 접지력이 최우선인 러너',
      '낮은 드롭의 지면 감각을 선호하는 트레일 러너',
      '발볼이 넓어 트레일화 와이드가 필요한 러너',
    ],
    notRecommended: [
      '울트라 거리 위주 러너 (스택 32mm — 엑소더스 울트라 4 권장)',
      '로드 위주 러너 (러그가 아스팔트에서 불필요하게 닳음)',
      '드롭 8mm 이상에 적응된 러너 (4mm — 종아리 부하 증가)',
      '최대 쿠션을 원하는 러너',
    ],
  },

  features: [
    '아웃솔을 Vibram Megagrip + 트랙션 러그로 전면 교체 — 16세대 핵심 변화',
    '러그 높이 5mm → 4mm로 낮아졌으나 고무 그립 상승으로 상쇄',
    '스택 힐·전족 각 1mm 상승(32/28mm), PWRRUN 폼 소폭 소프트화',
    '드롭 4mm — 써코니 라인 중 가장 낮은 축',
    '국내 179,000원 · 와이드 옵션 유통 · 2026-08-15 기준 20% 할인',
  ],

  reviews: [
    {
      userType: '에디터 분석',
      rating: 88,
      text: '페레그린은 오랫동안 "무난한 트레일 표준"이었는데, 16세대에서 Vibram Megagrip을 얻으면서 약점이던 젖은 노면 접지가 정리됐습니다. 러그를 5mm에서 4mm로 낮췄는데도 그립이 개선됐다는 평가가 일관된 건 고무 배합의 차이입니다. 스택은 32/28mm로 여전히 낮은 편이고 드롭도 4mm라, 성격은 "푹신하게 오래"보다 "발밑을 읽으며 민첩하게" 쪽입니다. 기술적 지형에서 이 구성이 강점이 되지만, 장시간 충격 누적에는 불리하니 울트라 거리는 다른 모델을 보는 편이 낫습니다.',
    },
    {
      userType: '엑소더스 울트라 4와 비교 — 거리로 갈린다',
      text: '써코니 트레일 두 갈래의 기준은 거리입니다. 페레그린 16(179,000원)은 낮고 민첩한 표준 트레일화이고, 엑소더스 울트라 4(219,000원)는 이름 그대로 울트라 거리용으로 스택과 쿠션이 더 두껍습니다. 하프~30km 수준의 산길이 주력이면 페레그린이 가볍고 값도 4만 원 저렴합니다. 50km 이상, 특히 후반부 충격 누적이 부담되는 거리라면 엑소더스 쪽입니다. 2026-08-15 기준 페레그린 16은 전량 20% 할인 중이고 엑소더스 울트라 4는 할인이 없어, 가격 차이가 실질적으로는 7만 원대로 벌어져 있습니다.',
    },
    {
      userType: '로드 러너의 트레일 입문 조언',
      text: '로드화만 신다가 트레일로 넘어올 때 가장 크게 체감되는 것이 드롭입니다. 로드 데일리는 보통 8~10mm인데 페레그린 16은 4mm라, 뒤꿈치가 낮아진 만큼 종아리와 아킬레스에 걸리는 부하가 늘어납니다. 첫 몇 회는 거리를 절반으로 줄여 적응 기간을 두세요. 반대로 익숙해지면 낮은 드롭이 불규칙한 노면에서 발목 흔들림을 줄여주는 장점으로 바뀝니다. 러그가 있는 아웃솔은 아스팔트에서 빨리 닳으니, 접근 구간이 긴 코스라면 산 입구에서 갈아신는 운용도 고려할 만합니다.',
    },
  ],

  detailedSpecs: {
    weight: '269g (남성 US 9 기준, 공식 표기 9.5oz)',
    stackHeight: '힐 32mm / 포어풋 28mm',
    drop: '4mm',
    midsole: 'PWRRUN (16세대에서 소폭 소프트화, 스택 각 1mm 상승)',
    plate: '록플레이트 (돌 보호)',
    outsole: 'Vibram Megagrip + 트랙션 러그 4mm',
    upper: '트레일용 메쉬',
    width: '표준 · 와이드 옵션 국내 유통',
    durability: '600km+',
    price: '179,000원 · 2026-08-15 기준 20% 할인 143,200원 (국내 2종 전량)',
    costPerKm: '약 ₩298/km (600km, 정가 기준)',
    footType: '중립 / 트레일',
    landingPattern: '미드풋 중심',
  },

  similarShoes: ['saucony-xodus-ultra-4', 'hoka-speedgoat-7', 'adidas-terrex-agravic-4'],
  purchaseLinks: [{ store: '네이버', url: 'https://search.shopping.naver.com/search/all?query=써코니+페레그린+16' }],
};
