import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'nike-vomero-premium',
  slug: 'nike-vomero-premium',
  brand: 'Nike',
  name: '보메로 프리미엄',
  imageCaption: "vomero premium 사진(HQ2050-001 · Black/Anthracite/Volt/Iron Grey)은 Nike 공개 상품 데이터와 모델·색상·구도를 대조했습니다. 사진 품번을 한국 판매 규격·가격으로 읽지 마세요.",
  imageSource: {"title":"Nike 공식 공개 상품 데이터","url":"https://api.nike.com/product_feed/threads/v3/?filter=marketplace%28US%29&filter=language%28en%29&filter=channelId%28d9a5bc42-4b9c-4976-858a-f159cf99c647%29&filter=productInfo.merchProduct.styleColor%28HQ2050-001%29&count=100"},
  image: '/images/shoes/nike/vomeropremium/side.webp',
  images: [
    '/images/shoes/nike/vomeropremium/side.webp',
    '/images/shoes/nike/vomeropremium/front.webp',
    '/images/shoes/nike/vomeropremium/back.webp',
    '/images/shoes/nike/vomeropremium/top.webp',
    '/images/shoes/nike/vomeropremium/outsole.webp',
  ],
  category: '쿠션화',
  price: 309000,
  description: 'ZoomX · 힐·전족부 Air Zoom · 비플레이트 구조의 보메로 프리미엄. 실험실 326g·힐/전족부 50.1/41.3mm. 한국 확인 정가309,000원.',
  oneliner: '326g 실험실 무게 · ZoomX · 힐·전족부 Air Zoom · 비플레이트',
  editorComment: '2026-11-09 원문 재확인. 한국 공식 남성 II5258-100 정가309,000원, 여성 HM5973-606·IQ8102-101 정가299,000원으로 SKU별 차이가 있습니다. 대표 가격은 남성 II5258-100 기준입니다. 확인 남성색·여성 HM5973-606은 품절, 여성 IQ8102-101은240/245/250mm 선택 가능이었으며 한국 와이드 SKU는 미확인입니다. 한국 공시 남성351g(280mm)·여성278g(250mm),드롭10mm. DOR 소개329g(남성US9)·283g(여성US8),55/45mm·10mm이며 본문 스택은남성US10조건. RR은 직접 구매한 일반발매 남성US9 검체326g·50.1/41.3mm·8.8mm로 Proto나 다른 사이즈의55mm와 섞지 않습니다. 공통 확인은 ZoomX와 힐·전족부 Air Zoom 배치입니다. 유닛 개수는 공식·DOR2개와 RR4개가 충돌해 단일값으로 확정하지 않습니다. 여성 IQ8102-101의 웹캐시351g/280mm와 현재live278g/250mm도 구분합니다. 기존 역대 최고·무중력·650km·임상보호 보장은 철회합니다. DOR의 David(남성US9.5)는 길이가 맞고 약간 넓은 폭·부피와 좋은 고정, 무거운 로커와 적은 지면 감각을 언급했습니다. Andrea(여성US9.5)는 Plus·18보다 앞코가 편했지만 무게가 느껴지고 공시보다 낮은 드롭 체감을 적었습니다. 두 사람의 주관적 안정감을 관절 보호·80kg 이상 전용·회복 촉진으로 일반화하지 않습니다. 한국 와이드 SKU 미확인입니다. RR 내부 최광폭94.6mm·엄지68.6mm·높이30.8mm와 DOR 리뷰어의 여유 있는 느낌은 성별·사이즈·발 모양 조건이 달라 공존할 수 있습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '쿠션화',
    '맥스쿠션',
  ],
  specs: {
    weight: 326,
    drop: 8.8,
  },
  biomechanics: {
    stackHeight: {
      heel: 50.1,
      forefoot: 41.3,
    },
    drop: 8.8,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'ZoomX · 힐·전족부 Air Zoom · 비플레이트',
  },
  koreanFootFit: {
  },
  targetUsers: {
    recommended: [
      '높은 스택과 힐·전족부 Air Zoom의 전환을 비교하려는 러너',
      '무게·앞코 고정·노면 감각을 직접 확인하려는 러너',
    ],
    notRecommended: [
      '직접 착화에서 높은 스택의 흔들림이 불편한 경우',
      '무게·좁아지는 앞코가 맞지 않는 경우',
    ],
  },
  features: [
    'ZoomX · 힐·전족부 Air Zoom · 비플레이트',
    '326g · 힐/전족부 50.1/41.3mm (RunRepeat)',
    '힐/전족부 SA 173/147 · 에너지 리턴 63.3/64.4% (RunRepeat). 공통 확인은 ZoomX와 힐·전족부 Air Zoom 배치입니다. 유닛 개수는 공식·DOR2개와 RR4개가 충돌해 단일값으로 확정하지 않습니다. 여성 IQ8102-101의 웹캐시351g/280mm와 현재live278g/250mm도 구분합니다. 기존 역대 최고·무중력·650km·임상보호 보장은 철회합니다.',
    '한국 와이드 SKU 미확인입니다. RR 내부 최광폭94.6mm·엄지68.6mm·높이30.8mm와 DOR 리뷰어의 여유 있는 느낌은 성별·사이즈·발 모양 조건이 달라 공존할 수 있습니다.',
  ],
  priceAnalysis: {
    msrp: 309000,
    priceTier: 'premium',
    alternatives: [
      'hoka-bondi-9',
      'brooks-glycerin-max',
    ],
  },
  detailedSpecs: {
    weight: '326g (RunRepeat 공시 검체 정책:남성US9). 한국 공시 남성351g(280mm)·여성278g(250mm),드롭10mm. DOR 소개329g(남성US9)·283g(여성US8),55/45mm·10mm이며 본문 스택은남성US10조건. RR은 직접 구매한 일반발매 남성US9 검체326g·50.1/41.3mm·8.8mm로 Proto나 다른 사이즈의55mm와 섞지 않습니다.',
    stackHeight: '50.1/41.3mm (RunRepeat 힐/전족부 실측)',
    drop: '8.8mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: 'ZoomX · 힐·전족부 Air Zoom · 비플레이트 · 34.5 AC(Asker C) · 힐/전족부 SA 173/147 · 에너지 리턴 63.3/64.4%. 공통 확인은 ZoomX와 힐·전족부 Air Zoom 배치입니다. 유닛 개수는 공식·DOR2개와 RR4개가 충돌해 단일값으로 확정하지 않습니다. 여성 IQ8102-101의 웹캐시351g/280mm와 현재live278g/250mm도 구분합니다. 기존 역대 최고·무중력·650km·임상보호 보장은 철회합니다.',
    plate: 'RR은 플레이트 없음으로 명시합니다. 힐·전족부 Air Zoom 유닛 개수는 Nike·DOR2개 설명과 RR절개4개 설명이 충돌합니다.',
    width: 'RunRepeat 내부 최광폭 94.6mm / 엄지 부위 68.6mm / 엄지 높이 30.8mm. 한국 와이드 SKU 미확인입니다. RR 내부 최광폭94.6mm·엄지68.6mm·높이30.8mm와 DOR 리뷰어의 여유 있는 느낌은 성별·사이즈·발 모양 조건이 달라 공존할 수 있습니다.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '한국 공식 남성 II5258-100 정가309,000원, 여성 HM5973-606·IQ8102-101 정가299,000원으로 SKU별 차이가 있습니다. 대표 가격은 남성 II5258-100 기준입니다. 확인 남성색·여성 HM5973-606은 품절, 여성 IQ8102-101은240/245/250mm 선택 가능이었으며 한국 와이드 SKU는 미확인입니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/nike-vomero-premium',
      text: '326g과 SA 173/147·에너지 리턴 63.3/64.4%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. 공통 확인은 ZoomX와 힐·전족부 Air Zoom 배치입니다. 유닛 개수는 공식·DOR2개와 RR4개가 충돌해 단일값으로 확정하지 않습니다. 여성 IQ8102-101의 웹캐시351g/280mm와 현재live278g/250mm도 구분합니다. 기존 역대 최고·무중력·650km·임상보호 보장은 철회합니다. 한국 와이드 SKU 미확인입니다. RR 내부 최광폭94.6mm·엄지68.6mm·높이30.8mm와 DOR 리뷰어의 여유 있는 느낌은 성별·사이즈·발 모양 조건이 달라 공존할 수 있습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/nike-vomero-premium-review-2025/',
      text: 'DOR의 David(남성US9.5)는 길이가 맞고 약간 넓은 폭·부피와 좋은 고정, 무거운 로커와 적은 지면 감각을 언급했습니다. Andrea(여성US9.5)는 Plus·18보다 앞코가 편했지만 무게가 느껴지고 공시보다 낮은 드롭 체감을 적었습니다. 두 사람의 주관적 안정감을 관절 보호·80kg 이상 전용·회복 촉진으로 일반화하지 않습니다.',
    },
  ],
  similarShoes: [
    'nike-vomero-plus',
    'nike-vomero-18',
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/5ajbW7Mw',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 men · null · II5258-100',
        url: 'https://www.nike.com/kr/t/나이키-보메로-프리미엄-남성-로드-러닝화-Kz76Wr9V/II5258-100',
        note: '한국 공식 남성 II5258-100 정가309,000원, 여성 HM5973-606·IQ8102-101 정가299,000원으로 SKU별 차이가 있습니다. 대표 가격은 남성 II5258-100 기준입니다. 확인 남성색·여성 HM5973-606은 품절, 여성 IQ8102-101은240/245/250mm 선택 가능이었으며 한국 와이드 SKU는 미확인입니다.',
      },
      {
        label: '한국 공식 women · null · HM5973-606',
        url: 'https://www.nike.com/kr/t/나이키-보메로-프리미엄-여성-로드-러닝화-1NJL7Dcp',
        note: '한국 공식 남성 II5258-100 정가309,000원, 여성 HM5973-606·IQ8102-101 정가299,000원으로 SKU별 차이가 있습니다. 대표 가격은 남성 II5258-100 기준입니다. 확인 남성색·여성 HM5973-606은 품절, 여성 IQ8102-101은240/245/250mm 선택 가능이었으며 한국 와이드 SKU는 미확인입니다.',
      },
      {
        label: '한국 공식 women · null · IQ8102-101',
        url: 'https://www.nike.com/kr/t/보메로-프리미엄-여성-로드-러닝화-e6xpEHKJ/IQ8102-101',
        note: '한국 공식 남성 II5258-100 정가309,000원, 여성 HM5973-606·IQ8102-101 정가299,000원으로 SKU별 차이가 있습니다. 대표 가격은 남성 II5258-100 기준입니다. 확인 남성색·여성 HM5973-606은 품절, 여성 IQ8102-101은240/245/250mm 선택 가능이었으며 한국 와이드 SKU는 미확인입니다.',
      },
      {
        label: 'RunRepeat 보메로 프리미엄',
        url: 'https://runrepeat.com/nike-vomero-premium',
        note: '공시 검체 정책:남성US9. 개별 검체SKU·폭은 미확인. 326g · 50.1/41.3mm · 드롭8.8mm. SA 173/147 · ER 63.3/64.4%. 공통 확인은 ZoomX와 힐·전족부 Air Zoom 배치입니다. 유닛 개수는 공식·DOR2개와 RR4개가 충돌해 단일값으로 확정하지 않습니다. 여성 IQ8102-101의 웹캐시351g/280mm와 현재live278g/250mm도 구분합니다. 기존 역대 최고·무중력·650km·임상보호 보장은 철회합니다.',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/nike-vomero-premium-review-2025/',
        note: '한국 공시 남성351g(280mm)·여성278g(250mm),드롭10mm. DOR 소개329g(남성US9)·283g(여성US8),55/45mm·10mm이며 본문 스택은남성US10조건. RR은 직접 구매한 일반발매 남성US9 검체326g·50.1/41.3mm·8.8mm로 Proto나 다른 사이즈의55mm와 섞지 않습니다.',
      },
      {
        label: 'RunRepeat 측정법',
        url: 'https://runrepeat.com/testing-methodology',
        note: '내부 최광폭·엄지 너비·외부 플랫폼 폭은 다른 값입니다. AC와HA는 직접 비교하지 않습니다. 시점·측정법 버전의 차이를 구분하세요.',
      },
    ],
    limitations: [
      '질환 예방·치료 효과, 공통 최적 페이스와 수명km는 확인하지 못해 관련 등급·수명·km당 비용을 비웁니다.',
      '에디터 평점·1~10점·발볼 및 계절 적합성 분류는 실험실 단위나 임상 효과가 아닙니다.',
      '판매·재고는 확인한SKU·성별·폭·시점에만 적용합니다. 미확인을 미판매·단종·미출시로 해석하지 않습니다.',
    ],
  },
};
