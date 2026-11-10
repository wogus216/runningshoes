import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'nike-vaporfly-4',
  slug: 'nike-vaporfly-4',
  brand: 'Nike',
  name: '베이퍼플라이 4',
  image: '/images/shoes/nike/vaporfly4/side.webp',
  images: [
    '/images/shoes/nike/vaporfly4/side.webp',
    '/images/shoes/nike/vaporfly4/outsole.webp',
    '/images/shoes/nike/vaporfly4/top.webp',
    '/images/shoes/nike/vaporfly4/pair.webp',
  ],
  category: '레이싱',
  price: 319000,
  description: "ZoomX · 전장 카본 Flyplate 구조의 베이퍼플라이 4. 실험실 166g·힐/전족부 34.1/25.5mm. 한국 확인 정가 319,000원.",
  oneliner: '166g 실험실 무게 · ZoomX · 전장 카본 Flyplate',
  editorComment: "2026-11-09 원문 재확인. 한국 공식 남성 IM8203-001 정가 319,000원·확인 시 판매 255,200원,여성 HF6412-102 정가 309,000원으로 SKU 별 차이가 있습니다. 대표 가격은 남성 IM8203-001 정가입니다. 남성 250~300mm·여성 225~255mm 가 선택 가능이었으며 한국 와이드 SKU·문자폭코드는 미확인입니다. 한국공시 남성 190g(280mm)·여성 152g(250mm),드롭 6mm. DOR 소개 167g(남성 US9)·139g(여성 US8),36/30mm·6mm 와 RR166g·34.1/25.5mm·8.6mm 는 조건이 다릅니다. RR 주폼 34.7AC·보조 37.8AC 의정확한 층 위치는 미확인입니다. RR Dremel힐 8.6mm·전족 4.6mm 는특수 아웃솔 시험의 한계와 함께 보고했으며 오타로 교정하거나 수명 km로환산하지 않습니다. 2021Vaporfly4% 절개연구를 4세대의폼 단독 효과로 해석하지 않습니다. DOR Matt(남성 US10)은 길이는 맞지만 낮은 앞쪽과 혀·힐 이동·맨발의 힐 탭 마찰을 느꼈습니다. Andrea(평소여성 US9.5)는 9.5에서 발톱 통증,US10에서도낮고 좁은 앞코의 넷째 발가락 자극을 느꼈습니다. Matt은단단한 주행감,Andrea는초기 압축감을 느껴 개인차가 있습니다. 두 사람 모두 노출부 마모·중앙 홈의 돌 끼임을 언급했습니다. 한국 와이드 현재 SKU 는 미확인입니다. RR 내부 최광폭 91.7mm·엄지 73.2mm·높이 27.3mm 를 한국모든폭에 대입하지 않습니다. 한국여성구매가이드의 반업 권고도 모든발에 적용하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.",
  tags: [
    '레이싱',
    '마라톤',
    '카본플레이트',
    '슈퍼슈즈',
  ],
  specs: {
    weight: 166,
    cushioning: 8,
    responsiveness: 10,
    stability: 6,
    drop: 8.6,
  },
  biomechanics: {
    stackHeight: {
      heel: 34.1,
      forefoot: 25.5,
    },
    drop: 8.6,
    carbonPlate: true,
    plateType: 'full-length angled carbon Flyplate',
    midsoleType: 'ZoomX · 전장 카본 Flyplate',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
  },
  targetUsers: {
    recommended: [
      "전장 Flyplate와 ZoomX전환을 시착 비교하려는 러너",
      "혀·힐 이동과앞쪽 높이를 직접 확인하려는 러너",
    ],
    notRecommended: [
      "실제 착화에서발톱·넷째발가락압박이나 힐 마찰이 생기는 경우",
      "직접 착화에서전환·고정이 불편한 경우",
    ],
  },
  features: [
    'ZoomX · 전장 카본 Flyplate',
    '166g · 힐/전족부 34.1/25.5mm (RunRepeat)',
    "힐/전족부 SA 137/94 · 에너지 리턴 78.1/74.5% (RunRepeat). RR 주폼 34.7AC·보조 37.8AC 의정확한 층 위치는 미확인입니다. RR Dremel힐 8.6mm·전족 4.6mm 는특수 아웃솔 시험의 한계와 함께 보고했으며 오타로 교정하거나 수명 km로환산하지 않습니다. 2021Vaporfly4% 절개연구를 4세대의폼 단독 효과로 해석하지 않습니다.",
    "한국 와이드 현재 SKU 는 미확인입니다. RR 내부 최광폭 91.7mm·엄지 73.2mm·높이 27.3mm 를 한국모든폭에 대입하지 않습니다. 한국여성구매가이드의 반업 권고도 모든발에 적용하지 않습니다.",
  ],
  priceAnalysis: {
    msrp: 319000,
    priceTier: 'super-premium',
    alternatives: [
      'nike-alphafly-3',
      'asics-metaspeed-sky-plus',
      'adidas-adios-pro-4',
      'saucony-endorphin-pro-4',
    ],
  },
  detailedSpecs: {
    weight: "166g (RunRepeat 공시 검체 정책:남성 US9). 한국공시 남성 190g(280mm)·여성 152g(250mm),드롭 6mm. DOR 소개 167g(남성 US9)·139g(여성 US8),36/30mm·6mm 와 RR166g·34.1/25.5mm·8.6mm 는 조건이 다릅니다.",
    stackHeight: '34.1/25.5mm (RunRepeat 힐/전족부 실측)',
    drop: '8.6mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: "ZoomX · 전장 카본 Flyplate · 34.7 AC(Asker C) · 힐/전족부 SA 137/94 · 에너지 리턴 78.1/74.5%. RR 주폼 34.7AC·보조 37.8AC 의정확한 층 위치는 미확인입니다. RR Dremel힐 8.6mm·전족 4.6mm 는특수 아웃솔 시험의 한계와 함께 보고했으며 오타로 교정하거나 수명 km로환산하지 않습니다. 2021Vaporfly4% 절개연구를 4세대의폼 단독 효과로 해석하지 않습니다.",
    plate: "한국제조사 원문은 각도를 높인 전장 카본 Flyplate를 설명합니다. 일반적인 스푼형 명칭을 3/4길이로 해석하지 않습니다.",
    width: "RunRepeat 내부 최광폭 91.7mm / 엄지 부위 73.2mm / 엄지 높이 27.3mm. 한국 와이드 현재 SKU 는 미확인입니다. RR 내부 최광폭 91.7mm·엄지 73.2mm·높이 27.3mm 를 한국모든폭에 대입하지 않습니다. 한국여성구매가이드의 반업 권고도 모든발에 적용하지 않습니다.",
    durability: "검증된 공통 수명 km 미확인. 짧은 착화·마모 깊이를 수명 km로 환산하지 않습니다.",
    price: "한국 공식 남성 IM8203-001 정가 319,000원·확인 시 판매 255,200원,여성 HF6412-102 정가 309,000원으로 SKU 별 차이가 있습니다. 대표 가격은 남성 IM8203-001 정가입니다. 남성 250~300mm·여성 225~255mm 가 선택 가능이었으며 한국 와이드 SKU·문자폭코드는 미확인입니다.",
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/nike-vaporfly-4',
      text: "166g 과 SA 137/94·에너지 리턴 78.1/74.5% 는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. RR 주폼 34.7AC·보조 37.8AC 의정확한 층 위치는 미확인입니다. RR Dremel힐 8.6mm·전족 4.6mm 는특수 아웃솔 시험의 한계와 함께 보고했으며 오타로 교정하거나 수명 km로환산하지 않습니다. 2021Vaporfly4% 절개연구를 4세대의폼 단독 효과로 해석하지 않습니다. 한국 와이드 현재 SKU 는 미확인입니다. RR 내부 최광폭 91.7mm·엄지 73.2mm·높이 27.3mm 를 한국모든폭에 대입하지 않습니다. 한국여성구매가이드의 반업 권고도 모든발에 적용하지 않습니다.",
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/nike-vaporfly-4-review-2025-midfoot-and/',
      text: "DOR Matt(남성 US10)은 길이는 맞지만 낮은 앞쪽과 혀·힐 이동·맨발의 힐 탭 마찰을 느꼈습니다. Andrea(평소여성 US9.5)는 9.5에서 발톱 통증,US10에서도낮고 좁은 앞코의 넷째 발가락 자극을 느꼈습니다. Matt은단단한 주행감,Andrea는초기 압축감을 느껴 개인차가 있습니다. 두 사람 모두 노출부 마모·중앙 홈의 돌 끼임을 언급했습니다.",
    },
  ],
  similarShoes: [
    'nike-alphafly-3',
    'asics-metaspeed-sky-plus',
    'adidas-adios-pro-4',
    'saucony-endorphin-pro-4',
  ],
  relatedPosts: [
    {
      slug: 'running-shoe-plate-guide-2026',
      title: '플레이트 완전 해설 — 카본·유리섬유·나일론',
    },
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/5KqWcsAl',
    },
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5Y0aGIrKu',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: "한국 확인 SKU 의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.",
    sources: [
      {
        label: '한국 공식 men · 폭미확인 · IM8203-001',
        url: 'https://www.nike.com/kr/t/나이키-베이퍼플라이-4-남성-로드-레이싱화-q7ZtUIuq/IM8203-001',
        note: "한국 공식 남성 IM8203-001 정가 319,000원·확인 시 판매 255,200원,여성 HF6412-102 정가 309,000원으로 SKU 별 차이가 있습니다. 대표 가격은 남성 IM8203-001 정가입니다. 남성 250~300mm·여성 225~255mm 가 선택 가능이었으며 한국 와이드 SKU·문자폭코드는 미확인입니다.",
      },
      {
        label: '한국 공식 women · 폭미확인 · HF6412-102',
        url: 'https://www.nike.com/kr/t/나이키-베이퍼플라이-4-여성-로드-레이싱화-0oXAqkyJ/HF6412-102',
        note: "한국 공식 남성 IM8203-001 정가 319,000원·확인 시 판매 255,200원,여성 HF6412-102 정가 309,000원으로 SKU 별 차이가 있습니다. 대표 가격은 남성 IM8203-001 정가입니다. 남성 250~300mm·여성 225~255mm 가 선택 가능이었으며 한국 와이드 SKU·문자폭코드는 미확인입니다.",
      },
      {
        label: 'RunRepeat 베이퍼플라이 4',
        url: 'https://runrepeat.com/nike-vaporfly-4',
        note: "공시 검체 정책:남성 US9. 개별 검체 SKU·폭은 미확인. 166g · 34.1/25.5mm · 드롭 8.6mm. SA 137/94 · ER 78.1/74.5%. RR 주폼 34.7AC·보조 37.8AC 의정확한 층 위치는 미확인입니다. RR Dremel힐 8.6mm·전족 4.6mm 는특수 아웃솔 시험의 한계와 함께 보고했으며 오타로 교정하거나 수명 km로환산하지 않습니다. 2021Vaporfly4% 절개연구를 4세대의폼 단독 효과로 해석하지 않습니다.",
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/nike-vaporfly-4-review-2025-midfoot-and/',
        note: "한국공시 남성 190g(280mm)·여성 152g(250mm),드롭 6mm. DOR 소개 167g(남성 US9)·139g(여성 US8),36/30mm·6mm 와 RR166g·34.1/25.5mm·8.6mm 는 조건이 다릅니다.",
      },
      {
        label: 'RunRepeat 측정법',
        url: 'https://runrepeat.com/testing-methodology',
        note: "내부 최광폭·엄지 너비·외부 플랫폼 폭은 다른 값입니다. AC 와 HA 는 직접 비교하지 않습니다. 시점·측정법 버전의 차이를 구분하세요.",
      },
    ],
    limitations: [
      "질환 예방·치료 효과, 공통 최적 페이스와 수명 km는 확인하지 못해 관련 등급·수명·km당 비용을 비웁니다.",
      '에디터 평점·1~10점·발볼 및 계절 적합성 분류는 실험실 단위나 임상 효과가 아닙니다.',
      "판매·재고는 확인한 SKU·성별·폭·시점에만 적용합니다. 미확인을 미판매·단종·미출시로 해석하지 않습니다.",
    ],
  },
};
