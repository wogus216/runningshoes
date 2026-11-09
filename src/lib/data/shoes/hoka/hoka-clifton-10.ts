import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'hoka-clifton-10',
  slug: 'hoka-clifton-10',
  brand: 'Hoka',
  name: '클리프톤 10',
  image: '/images/shoes/hoka/clifton10/side.webp',
  images: [
    '/images/shoes/hoka/clifton10/side.webp',
    '/images/shoes/hoka/clifton10/front.webp',
    '/images/shoes/hoka/clifton10/back.webp',
    '/images/shoes/hoka/clifton10/outsole.webp',
  ],
  category: '입문화',
  rating: 5,
  description: 'CMEVA · 로커 구조의 클리프톤 10. 실험실 275g·힐/전족부 44.4/32mm. 한국 현재 정가 미확인.',
  oneliner: '275g 실험실 무게 · CMEVA · 로커',
  editorComment: '2026-11-09 원문 재확인. 호카 코리아 공식 연결 스토어의 정확검색에서 현재 클리프톤10 상품을 찾지 못했습니다. 현재 한국 정가·성별·폭·SKU·재고는 미확인이며 단종·국내 미출시로 해석하지 않습니다. DOR 표제 남성278g(US10으로표기)·여성227g(US8),드롭8mm·스택미공시. RR275g·44.4/32.0mm·드롭12.4mm와 구분. RR 힐 외부플랫폼 폭은 본문97.8mm·표94.5mm로 충돌해 해당 수치는 채택하지 않습니다. DOR의 Matt(US10)과 David(US9.5)은 길이는 맞지만 타이트하고 낮은볼륨이라 느꼈습니다. Matt은 패딩이 눌린 뒤 카운터를 더 의식했고 David은 힐 고정을 좋게 봤습니다. 약간 단단한 데일리 주행감·로커·사이드월을 설명하며, Matt의 초기 발목자극이나30마일 마모를 모델전체 부상효과·수명으로 바꾸지 않습니다. 한국 와이드 현재SKU는 미확인입니다. RR 내부최광폭97.2mm·엄지73.1mm·높이27.3mm는 DOR의 낮은볼륨 체감과 다른 종류의 정보입니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '입문화',
    '맥시멀 쿠셔닝',
    '로커 기술',
  ],
  specs: {
    weight: 275,
    cushioning: 9,
    responsiveness: 7,
    stability: 7,
    drop: 12.4,
  },
  biomechanics: {
    stackHeight: {
      heel: 44.4,
      forefoot: 32,
    },
    drop: 12.4,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'CMEVA · 로커',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },
  targetUsers: {
    recommended: [
      'CMEVA와 높은 실측스택의 전환감을 시착 비교하려는 러너',
      '기존 신발과 내부볼륨·힐 고정을 확인하려는 러너',
    ],
    notRecommended: [
      '낮은볼륨·카운터 압박이 생기는 경우',
      '가벼운 무게·높은 에너지리턴이 우선인 경우',
    ],
  },
  features: [
    'CMEVA · 로커',
    '275g · 힐/전족부 44.4/32mm (RunRepeat)',
    '힐/전족부 SA 147/122 · 에너지 리턴 52.3/57.2% (RunRepeat). RR 힐 외부플랫폼 폭은 본문97.8mm·표94.5mm로 충돌해 해당 수치는 채택하지 않습니다.',
    '한국 와이드 현재SKU는 미확인입니다. RR 내부최광폭97.2mm·엄지73.1mm·높이27.3mm는 DOR의 낮은볼륨 체감과 다른 종류의 정보입니다.',
  ],
  priceAnalysis: {
    valueRating: 8,
    priceTier: 'mid',
    alternatives: [
      'nike-pegasus-41',
      'asics-novablast-5',
      'new-balance-880-v15',
    ],
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/hoka-clifton-10',
      text: '275g과 SA 147/122·에너지 리턴 52.3/57.2%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. RR 힐 외부플랫폼 폭은 본문97.8mm·표94.5mm로 충돌해 해당 수치는 채택하지 않습니다. 한국 와이드 현재SKU는 미확인입니다. RR 내부최광폭97.2mm·엄지73.1mm·높이27.3mm는 DOR의 낮은볼륨 체감과 다른 종류의 정보입니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/hoka-clifton-10-review-2025/',
      text: 'DOR의 Matt(US10)과 David(US9.5)은 길이는 맞지만 타이트하고 낮은볼륨이라 느꼈습니다. Matt은 패딩이 눌린 뒤 카운터를 더 의식했고 David은 힐 고정을 좋게 봤습니다. 약간 단단한 데일리 주행감·로커·사이드월을 설명하며, Matt의 초기 발목자극이나30마일 마모를 모델전체 부상효과·수명으로 바꾸지 않습니다.',
    },
  ],
  detailedSpecs: {
    weight: '275g (RunRepeat 공시 검체 정책:남성US9). DOR 표제 남성278g(US10으로표기)·여성227g(US8),드롭8mm·스택미공시. RR275g·44.4/32.0mm·드롭12.4mm와 구분.',
    stackHeight: '44.4/32mm (RunRepeat 힐/전족부 실측)',
    drop: '12.4mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: 'CMEVA · 로커 · 34.2 AC(Asker C) · 힐/전족부 SA 147/122 · 에너지 리턴 52.3/57.2%. RR 힐 외부플랫폼 폭은 본문97.8mm·표94.5mm로 충돌해 해당 수치는 채택하지 않습니다.',
    plate: '확인한 원문 설명에 전장 카본 플레이트는 보고되지 않음',
    width: 'RunRepeat 내부 최광폭 97.2mm / 엄지 부위 73.1mm / 엄지 높이 27.3mm. 한국 와이드 현재SKU는 미확인입니다. RR 내부최광폭97.2mm·엄지73.1mm·높이27.3mm는 DOR의 낮은볼륨 체감과 다른 종류의 정보입니다.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '호카 코리아 공식 연결 스토어의 정확검색에서 현재 클리프톤10 상품을 찾지 못했습니다. 현재 한국 정가·성별·폭·SKU·재고는 미확인이며 단종·국내 미출시로 해석하지 않습니다.',
  },
  similarShoes: [
    'nike-pegasus-41',
    'asics-gel-nimbus-28',
    'new-balance-880-v15',
    'brooks-ghost-max-3',
  ],
  purchaseLinks: [
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/h6Zc0Chwk0',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '호카 코리아 공식 연결',
        url: 'https://linktr.ee/hoka_korea',
        note: '공식연결스토어 확인',
      },
      {
        label: '한국 공식 스토어 검색 범위',
        url: 'https://brand.naver.com/hoka/search?q=%ED%81%B4%EB%A6%AC%ED%94%84%ED%86%A4%2010',
        note: '현재정가·SKU미확인. 전체미판매와 구분.',
      },
      {
        label: 'RunRepeat 클리프톤 10',
        url: 'https://runrepeat.com/hoka-clifton-10',
        note: '공시 검체 정책:남성US9. 개별 검체SKU·폭은 미확인. 275g · 44.4/32mm · 드롭12.4mm. SA 147/122 · ER 52.3/57.2%. RR 힐 외부플랫폼 폭은 본문97.8mm·표94.5mm로 충돌해 해당 수치는 채택하지 않습니다.',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/hoka-clifton-10-review-2025/',
        note: 'DOR 표제 남성278g(US10으로표기)·여성227g(US8),드롭8mm·스택미공시. RR275g·44.4/32.0mm·드롭12.4mm와 구분.',
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
