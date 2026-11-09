import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'nike-pegasus-premium',
  slug: 'nike-pegasus-premium',
  brand: 'Nike',
  name: '페가수스 프리미엄',
  image: '/images/shoes/nike/pegasus-premium/side.webp',
  images: [
    '/images/shoes/nike/pegasus-premium/side.webp',
    '/images/shoes/nike/pegasus-premium/outsole.webp',
    '/images/shoes/nike/pegasus-premium/top.webp',
    '/images/shoes/nike/pegasus-premium/pair.webp',
  ],
  category: '입문화',
  rating: 4.5,
  price: 289000,
  description: '상부 ZoomX · 하부 ReactX · 성형 전장 Air Zoom 구조의 페가수스 프리미엄. 실험실 308g·힐/전족부 42.8/31mm. 한국 확인 정가289,000원.',
  oneliner: '308g 실험실 무게 · 상부 ZoomX · 하부 ReactX · 성형 전장 Air Zoom',
  editorComment: '2026-11-09 원문 재확인. 한국 공식 남성 IM8342-200 정가289,000원·확인 시 할인가260,100원, 여성 IO9918-100 정가279,000원으로 SKU별 차이가 있습니다. 대표 가격은 남성 IM8342-200 정가 기준입니다. 남성 확인색250~300mm 선택 가능, 여성 확인SKU 품절이며 한국 와이드 SKU·문자 폭코드는 미확인입니다. 한국 공시 남성325g(280mm)·여성275g(250mm),드롭10mm. DOR 소개326g(남성US10)·275g(여성US8),45/35mm·10mm와 RR308g·42.8/31.0mm·11.8mm는 조건이 다릅니다. RR 개별 검체 사이즈·폭 라벨은 독립 확인하지 못했습니다. RR 주폼 ZoomX36.9AC·보조폼 ReactX39.9AC를 구분합니다. SA155/136과 에너지 리턴67.3/68.3%는 임상 보호나 기록 개선 비율이 아닙니다. 기존 무조건 반 사이즈 업·평발 인솔 처방·최적 장거리·수명600km 보장은 제거합니다. DOR의 Matt(남성US10)은 대체로 길이가 맞지만 앞코 테이퍼·혀 이동·단단한 카운터 자극을 느꼈으며 힐 전환과 무게가 본인에게 부담이었다고 평가했습니다. Andrea(여성US9.5)는 길이가 맞아도 엄지·발등·힐 압박으로 편하게 걷거나 달릴 수 없어 주행 성능 테스트를 하지 못했습니다. Andrea를 주행감 리뷰어로 인용하지 않습니다. 한국 와이드 현재SKU는 미확인입니다. RR 본문의 와이드 없음과 같은 페이지 메타의Wide 표기가 충돌해 한국 와이드 유무를 확정하지 않습니다. RR 내부 최광폭91.3mm·엄지70.3mm·높이29.1mm는 높이가 있다고 폭이 맞는다는 뜻이 아닙니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '입문화',
    '쿠셔닝',
    '데일리',
  ],
  specs: {
    weight: 308,
    cushioning: 10,
    responsiveness: 8,
    stability: 6,
    drop: 11.8,
  },
  biomechanics: {
    stackHeight: {
      heel: 42.8,
      forefoot: 31,
    },
    drop: 11.8,
    carbonPlate: false,
    plateType: null,
    midsoleType: '상부 ZoomX · 하부 ReactX · 성형 전장 Air Zoom',
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },
  targetUsers: {
    recommended: [
      '전장 Air Zoom과 이중폼의 전환을 시착 비교하려는 러너',
      '발등·힐·엄지 압박과 혀 고정을 직접 확인하려는 러너',
    ],
    notRecommended: [
      '직접 착화에서 발등·힐·엄지 압박이 생기는 경우',
      '무게와 전환의 감각이 맞지 않는 경우',
    ],
  },
  features: [
    '상부 ZoomX · 하부 ReactX · 성형 전장 Air Zoom',
    '308g · 힐/전족부 42.8/31mm (RunRepeat)',
    '힐/전족부 SA 155/136 · 에너지 리턴 67.3/68.3% (RunRepeat). RR 주폼 ZoomX36.9AC·보조폼 ReactX39.9AC를 구분합니다. SA155/136과 에너지 리턴67.3/68.3%는 임상 보호나 기록 개선 비율이 아닙니다. 기존 무조건 반 사이즈 업·평발 인솔 처방·최적 장거리·수명600km 보장은 제거합니다.',
    '한국 와이드 현재SKU는 미확인입니다. RR 본문의 와이드 없음과 같은 페이지 메타의Wide 표기가 충돌해 한국 와이드 유무를 확정하지 않습니다. RR 내부 최광폭91.3mm·엄지70.3mm·높이29.1mm는 높이가 있다고 폭이 맞는다는 뜻이 아닙니다.',
  ],
  priceAnalysis: {
    msrp: 289000,
    valueRating: 8,
    priceTier: 'mid',
    alternatives: [
      'new-balance-1080-v14',
      'asics-gel-nimbus-28',
    ],
  },
  detailedSpecs: {
    weight: '308g (RunRepeat 공시 검체 정책:남성US9). 한국 공시 남성325g(280mm)·여성275g(250mm),드롭10mm. DOR 소개326g(남성US10)·275g(여성US8),45/35mm·10mm와 RR308g·42.8/31.0mm·11.8mm는 조건이 다릅니다. RR 개별 검체 사이즈·폭 라벨은 독립 확인하지 못했습니다.',
    stackHeight: '42.8/31mm (RunRepeat 힐/전족부 실측)',
    drop: '11.8mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: '상부 ZoomX · 하부 ReactX · 성형 전장 Air Zoom · 36.9 AC(Asker C) · 힐/전족부 SA 155/136 · 에너지 리턴 67.3/68.3%. RR 주폼 ZoomX36.9AC·보조폼 ReactX39.9AC를 구분합니다. SA155/136과 에너지 리턴67.3/68.3%는 임상 보호나 기록 개선 비율이 아닙니다. 기존 무조건 반 사이즈 업·평발 인솔 처방·최적 장거리·수명600km 보장은 제거합니다.',
    plate: 'RR은 카본 플레이트 대신 Air Zoom을 사용한다고 설명하며 DOR도 본인이 아는 범위에서 플레이트 없음으로 적었습니다. Air Zoom을 카본 플레이트로 동일시하지 않습니다.',
    width: 'RunRepeat 내부 최광폭 91.3mm / 엄지 부위 70.3mm / 엄지 높이 29.1mm. 한국 와이드 현재SKU는 미확인입니다. RR 본문의 와이드 없음과 같은 페이지 메타의Wide 표기가 충돌해 한국 와이드 유무를 확정하지 않습니다. RR 내부 최광폭91.3mm·엄지70.3mm·높이29.1mm는 높이가 있다고 폭이 맞는다는 뜻이 아닙니다.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '한국 공식 남성 IM8342-200 정가289,000원·확인 시 할인가260,100원, 여성 IO9918-100 정가279,000원으로 SKU별 차이가 있습니다. 대표 가격은 남성 IM8342-200 정가 기준입니다. 남성 확인색250~300mm 선택 가능, 여성 확인SKU 품절이며 한국 와이드 SKU·문자 폭코드는 미확인입니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/nike-pegasus-premium',
      text: '308g과 SA 155/136·에너지 리턴 67.3/68.3%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. RR 주폼 ZoomX36.9AC·보조폼 ReactX39.9AC를 구분합니다. SA155/136과 에너지 리턴67.3/68.3%는 임상 보호나 기록 개선 비율이 아닙니다. 기존 무조건 반 사이즈 업·평발 인솔 처방·최적 장거리·수명600km 보장은 제거합니다. 한국 와이드 현재SKU는 미확인입니다. RR 본문의 와이드 없음과 같은 페이지 메타의Wide 표기가 충돌해 한국 와이드 유무를 확정하지 않습니다. RR 내부 최광폭91.3mm·엄지70.3mm·높이29.1mm는 높이가 있다고 폭이 맞는다는 뜻이 아닙니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/nike-pegasus-premium-review-2025/',
      text: 'DOR의 Matt(남성US10)은 대체로 길이가 맞지만 앞코 테이퍼·혀 이동·단단한 카운터 자극을 느꼈으며 힐 전환과 무게가 본인에게 부담이었다고 평가했습니다. Andrea(여성US9.5)는 길이가 맞아도 엄지·발등·힐 압박으로 편하게 걷거나 달릴 수 없어 주행 성능 테스트를 하지 못했습니다. Andrea를 주행감 리뷰어로 인용하지 않습니다.',
    },
  ],
  similarShoes: [
    'nike-pegasus-41',
    'adidas-supernova-rise-2',
  ],
  relatedPosts: [
    {
      slug: 'pegasus-42-vs-premium-daily-2026',
      title: '페가수스 42 vs 프리미엄',
    },
    {
      slug: 'nike-pegasus-premium-vs-vomero-18',
      title: '페가수스 프리미엄 vs 보메로 18',
    },
    {
      slug: 'nike-pegasus-premium-vs-puma-velocity-nitro-4-2026',
      title: '페가수스 프리미엄 vs 벨로시티 4',
    },
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/5ajbWFsp',
    },
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5YWLNjZ4C',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 men · null · IM8342-200',
        url: 'https://www.nike.com/kr/t/페가수스-프리미엄-남성-로드-러닝화-rqFZ3AUC/IM8342-200',
        note: '한국 공식 남성 IM8342-200 정가289,000원·확인 시 할인가260,100원, 여성 IO9918-100 정가279,000원으로 SKU별 차이가 있습니다. 대표 가격은 남성 IM8342-200 정가 기준입니다. 남성 확인색250~300mm 선택 가능, 여성 확인SKU 품절이며 한국 와이드 SKU·문자 폭코드는 미확인입니다.',
      },
      {
        label: '한국 공식 women · null · IO9918-100',
        url: 'https://www.nike.com/kr/t/나이키-페가수스-프리미엄-여성-로드-러닝화-lK8RQGYN',
        note: '한국 공식 남성 IM8342-200 정가289,000원·확인 시 할인가260,100원, 여성 IO9918-100 정가279,000원으로 SKU별 차이가 있습니다. 대표 가격은 남성 IM8342-200 정가 기준입니다. 남성 확인색250~300mm 선택 가능, 여성 확인SKU 품절이며 한국 와이드 SKU·문자 폭코드는 미확인입니다.',
      },
      {
        label: 'RunRepeat 페가수스 프리미엄',
        url: 'https://runrepeat.com/nike-pegasus-premium',
        note: '공시 검체 정책:남성US9. 개별 검체SKU·폭은 미확인. 308g · 42.8/31mm · 드롭11.8mm. SA 155/136 · ER 67.3/68.3%. RR 주폼 ZoomX36.9AC·보조폼 ReactX39.9AC를 구분합니다. SA155/136과 에너지 리턴67.3/68.3%는 임상 보호나 기록 개선 비율이 아닙니다. 기존 무조건 반 사이즈 업·평발 인솔 처방·최적 장거리·수명600km 보장은 제거합니다.',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/nike-pegasus-premium-review-2025/',
        note: '한국 공시 남성325g(280mm)·여성275g(250mm),드롭10mm. DOR 소개326g(남성US10)·275g(여성US8),45/35mm·10mm와 RR308g·42.8/31.0mm·11.8mm는 조건이 다릅니다. RR 개별 검체 사이즈·폭 라벨은 독립 확인하지 못했습니다.',
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
