import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-10. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'brooks-hyperion-elite-6',
  slug: 'brooks-hyperion-elite-6',
  brand: 'Brooks',
  name: '하이페리온 엘리트 6',
  image: '/images/shoes/brooks/hyperionelite6/side.webp',
  images: [
    '/images/shoes/brooks/hyperionelite6/side.webp',
    '/images/shoes/brooks/hyperionelite6/angle.webp',
    '/images/shoes/brooks/hyperionelite6/detail.webp',
  ],
  category: '레이싱',
  rating: 4,
  description: 'DNA Gold PEBA · 전장 SpeedVault+ 카본 구조의 하이페리온 엘리트 6. RunRepeat 실험실 검체 193g·39.9/29.3mm. 한국 현재 정가 미확인.',
  oneliner: 'DNA Gold PEBA · 전장 SpeedVault+ 카본 · 193g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-10 원문 재확인. 한국 공식 캐시: 정확 모델 상품 원문은 공식 홈502·타임아웃과 검색 미발견으로 확보하지 못함. 현재 가격·폭별 선택 재고는 미확인입니다. 공통 SOLD OUT 템플릿과 장바구니 버튼을 실제 재고로 보지 않으며 검색 미발견을 단종·미출시로 단정하지 않습니다. DOR 소개192g(남성 US9)/172g(여성 US8)·40/33mm·7mm와 RR193g·39.9/29.3mm·10.6mm를 구분합니다. 테스터 실제US10.5를 소개US9와 섞지 않습니다. DOR 인솔 비분리와 RR 분리 가능은 상충합니다. 거싯도 RR표 양측부분·본문안쪽만·DOR없음이 다릅니다. 저온 변화4%를 겨울 레이스 성능 보장으로 해석하지 않으며300km·한국319,000원 현재가·미확인 매체 점수를 반복하지 않습니다. DOR Matt는 자신의 브룩스 남성US10.5(타브랜드 보통10)를 신었습니다. 앞코 테이퍼 뒤 공간은 여유 있으나 끈 조임·얇은 혀 압박·칼라 마찰이 있어 양말을 선호했습니다. 부드러운 폼과 매우 뻣뻣한 카본·로커의 지속주행은 좋았으나 짧은 빠른 세션은 너무 단단했고 자갈에서 노출 폼 손상을 적었습니다.40마일은 개인 시험 거리입니다. RR 내부 최광폭 93.3mm·엄지 70.3mm·높이 27.7mm입니다. 다른 위치인 외부 바닥 폭과 구분하고 실제 규격에서 길이·높이·고정을 확인하세요. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '레이싱',
    '카본 플레이트',
    'PEBA',
    '대회용',
    '신상',
  ],
  specs: {
    weight: 193,
    cushioning: 10,
    responsiveness: 10,
    stability: 6,
    drop: 10.6,
  },
  biomechanics: {
    stackHeight: {
      heel: 39.9,
      forefoot: 29.3,
    },
    drop: 10.6,
    carbonPlate: true,
    plateType: 'SpeedVault+ full-length carbon',
    midsoleType: 'DNA Gold PEBA · 전장 SpeedVault+ 카본',
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
    winterCompatibility: 'good',
    summerCompatibility: 'good',
  },
  targetUsers: {
    recommended: [
      '공시·실측·개인 착화 조건을 구분하려는 러너',
      '실제 규격에서 앞코·힐 고정과 로커를 확인하려는 러너',
    ],
    notRecommended: [
      '시착에서 압박·마찰·불편한 전환이 남는 경우',
      '단기 착화·국소 마모를 공통 수명·임상 보호로 읽는 경우',
    ],
  },
  priceAnalysis: {
    valueRating: 5,
    priceTier: 'super-premium',
    alternatives: [
      'brooks-hyperion-elite-5',
      'adidas-adios-pro-5',
      'nike-alphafly-4',
    ],
  },
  features: [
    'DNA Gold PEBA · 전장 SpeedVault+ 카본',
    '193g · 39.9/29.3mm · 드롭 10.6mm (RunRepeat 실험실 검체)',
    '정확6의 전장 SpeedVault+ 카본은 전작 Arris 구조를 그대로 대입한 것이 아닙니다. 재설계 곡률과 폼을 구분합니다.',
    'RR 내부 최광폭 93.3mm·엄지 70.3mm·높이 27.7mm입니다. 다른 위치인 외부 바닥 폭과 구분하고 실제 규격에서 길이·높이·고정을 확인하세요.',
  ],
  detailedSpecs: {
    weight: '193g (RunRepeat 실험실 검체). DOR 소개192g(남성 US9)/172g(여성 US8)·40/33mm·7mm와 RR193g·39.9/29.3mm·10.6mm를 구분합니다. 테스터 실제US10.5를 소개US9와 섞지 않습니다.',
    stackHeight: '39.9/29.3mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '10.6mm (RunRepeat 실험실 검체). DOR 소개192g(남성 US9)/172g(여성 US8)·40/33mm·7mm와 RR193g·39.9/29.3mm·10.6mm를 구분합니다. 테스터 실제US10.5를 소개US9와 섞지 않습니다.',
    midsole: 'DNA Gold PEBA · 전장 SpeedVault+ 카본. 주폼 28.3AC·보조 28.3AC, 힐/전족부 SA 159/123·에너지 리턴 65.4/75.2%. DOR 인솔 비분리와 RR 분리 가능은 상충합니다. 거싯도 RR표 양측부분·본문안쪽만·DOR없음이 다릅니다. 저온 변화4%를 겨울 레이스 성능 보장으로 해석하지 않으며300km·한국319,000원 현재가·미확인 매체 점수를 반복하지 않습니다.',
    plate: '정확6의 전장 SpeedVault+ 카본은 전작 Arris 구조를 그대로 대입한 것이 아닙니다. 재설계 곡률과 폼을 구분합니다.',
    width: 'RR 내부 최광폭 93.3mm·엄지 부위 70.3mm·높이 27.7mm. RR 내부 최광폭 93.3mm·엄지 70.3mm·높이 27.7mm입니다. 다른 위치인 외부 바닥 폭과 구분하고 실제 규격에서 길이·높이·고정을 확인하세요.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 공식 캐시: 정확 모델 상품 원문은 공식 홈502·타임아웃과 검색 미발견으로 확보하지 못함. 현재 가격·폭별 선택 재고는 미확인입니다. 공통 SOLD OUT 템플릿과 장바구니 버튼을 실제 재고로 보지 않으며 검색 미발견을 단종·미출시로 단정하지 않습니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/brooks-hyperion-elite-6',
      text: 'DOR 소개192g(남성 US9)/172g(여성 US8)·40/33mm·7mm와 RR193g·39.9/29.3mm·10.6mm를 구분합니다. 테스터 실제US10.5를 소개US9와 섞지 않습니다. DOR 인솔 비분리와 RR 분리 가능은 상충합니다. 거싯도 RR표 양측부분·본문안쪽만·DOR없음이 다릅니다. 저온 변화4%를 겨울 레이스 성능 보장으로 해석하지 않으며300km·한국319,000원 현재가·미확인 매체 점수를 반복하지 않습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/brooks-hyperion-elite-6-review/',
      text: 'DOR Matt는 자신의 브룩스 남성US10.5(타브랜드 보통10)를 신었습니다. 앞코 테이퍼 뒤 공간은 여유 있으나 끈 조임·얇은 혀 압박·칼라 마찰이 있어 양말을 선호했습니다. 부드러운 폼과 매우 뻣뻣한 카본·로커의 지속주행은 좋았으나 짧은 빠른 세션은 너무 단단했고 자갈에서 노출 폼 손상을 적었습니다.40마일은 개인 시험 거리입니다.',
    },
  ],
  similarShoes: [
    'brooks-hyperion-elite-5',
    'adidas-adios-pro-5',
    'nike-alphafly-4',
  ],
  relatedPosts: [
    {
      slug: 'brooks-running-shoes-lineup-tier-guide-2026',
      title: '브룩스 러닝화 계급도',
    },
    {
      slug: 'running-shoe-plate-guide-2026',
      title: '플레이트 완전 해설 — 카본·유리섬유·나일론',
    },
    {
      slug: 'running-shoe-midsole-foam-guide-2026',
      title: '미드솔 폼 완전 해설 — EVA·TPU·PEBA',
    },
  ],
  verification: {
    checkedAt: '2026-11-10',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 확인 실패 범위',
        url: 'https://www.brooksrunning.co.kr/',
        note: '502·타임아웃. 정확 모델 현재 상품·가격·재고 미확인.',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://runrepeat.com/brooks-hyperion-elite-6',
        note: '공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 193g·39.9/29.3mm·10.6mm. DOR 인솔 비분리와 RR 분리 가능은 상충합니다. 거싯도 RR표 양측부분·본문안쪽만·DOR없음이 다릅니다. 저온 변화4%를 겨울 레이스 성능 보장으로 해석하지 않으며300km·한국319,000원 현재가·미확인 매체 점수를 반복하지 않습니다.',
      },
      {
        label: 'Doctors of Running 동세대 원문',
        url: 'https://www.doctorsofrunning.com/brooks-hyperion-elite-6-review/',
        note: 'DOR 소개192g(남성 US9)/172g(여성 US8)·40/33mm·7mm와 RR193g·39.9/29.3mm·10.6mm를 구분합니다. 테스터 실제US10.5를 소개US9와 섞지 않습니다.',
      },
      {
        label: 'RunRepeat 측정법',
        url: 'https://runrepeat.com/testing-methodology',
        note: 'AC·HA·HC, SA·에너지 리턴, BR·구방식1~5와 내부/외부 폭을 구분합니다. 일반 정책은 개별 라벨 확인과 다릅니다.',
      },
    ],
    limitations: [
      '모델별 임상 예방·치료 등급, 공통 최적 페이스·주행 수명·km당 비용은 미확인으로 제거했습니다.',
      '에디터 평점·1~10점·발볼 및 계절 분류·구매 링크는 모든 항목을 새로 검증한 수치나 임상 효과가 아닙니다.',
      '판매 조건은 확인한 상품·시점에 한정합니다. 미확인을 미출시·단종·전국 재고 없음으로 해석하지 않습니다.',
    ],
  },
};
