import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'asics-metaspeed-sky-plus',
  slug: 'asics-metaspeed-sky-plus',
  brand: 'Asics',
  name: '메타스피드 스카이+',
  image: '/images/shoes/asics/metaspeedskyplus/side.webp',
  images: [
    '/images/shoes/asics/metaspeedskyplus/side.webp',
    '/images/shoes/asics/metaspeedskyplus/angle1.webp',
    '/images/shoes/asics/metaspeedskyplus/angle2.webp',
    '/images/shoes/asics/metaspeedskyplus/back.webp',
    '/images/shoes/asics/metaspeedskyplus/top.webp',
  ],
  category: '레이싱',
  description: 'FF BLAST TURBO · 상부 평판형 카본 (2022 Sky+) 구조의 메타스피드 스카이+. 실험실 205g·힐/전족부 33.5/30.8mm. 한국 현재 정가 미확인.',
  oneliner: '205g 실험실 무게 · FF BLAST TURBO · 상부 평판형 카본 (2022 Sky+)',
  editorComment: '2026-11-09 원문 재확인. 한국 공식 현재 검색결과는Tokyo만 확인돼2022 Sky+의 현재 정가·성별·폭·SKU·재고는 미확인입니다. Tokyo의 가격·폼·상품코드를 Sky+에 대입하지 않으며 미노출을 단종 확정으로 해석하지 않습니다. RR 실측205g·33.5/30.8mm·드롭2.7mm는 방법론2.0의2025-08-19 갱신 원문입니다. DOR의 인솔 포함 소개39/34mm·5mm,2022제조사 미드솔 최대두께33mm·드롭5mm는 정의와 조건이 달라 구분합니다. 원형2022세대는 FF BLAST TURBO이며 FF Turbo+나Tokyo의 이름과 혼용하지 않습니다. 주폼 경도·내부 젤 치수는 미확인입니다. RR방법론2.0의 기존 모든 지표가 현재 환경·방법으로 다시 측정됐다고 단정하지 않습니다. DOR의 Matt(남성US10)은 정사이즈와 약간 넓은 중족부, 끈 조임·얇은 혀 주름·거친 메쉬를 언급했고 힐·중족의 안쪽 벗어남을 느꼈습니다. David(남성US9.5)은 정사이즈와 좋은 고정·접지를 느꼈지만 자신에게Edge+의 굴림이 더 자연스럽다고 평가했습니다. 개인의 보폭·무릎·종아리 하중 느낌을 임상 효과나180케이던스 규칙으로 만들지 않습니다. RR92.2mm는 구방식 외부 어퍼 최광폭으로 내부 젤 최광폭·엄지 너비가 아닙니다. 현재 원문의 내부 너비·높이·AC·HA는 미확인이며 다른Sky세대로 채우지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '레이싱',
    '마라톤',
    '카본플레이트',
    '슈퍼슈즈',
  ],
  specs: {
    weight: 205,
    cushioning: 8,
    responsiveness: 9,
    stability: 6,
    drop: 2.7,
  },
  biomechanics: {
    stackHeight: {
      heel: 33.5,
      forefoot: 30.8,
    },
    drop: 2.7,
    carbonPlate: true,
    plateType: 'flat carbon plate near upper midsole (2022 Sky+)',
    midsoleType: 'FF BLAST TURBO · 상부 평판형 카본 (2022 Sky+)',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
  },
  targetUsers: {
    recommended: [
      '2022 Sky+의 상부 평판형 카본·전환을 비교하려는 러너',
      '매물의 정확 세대·품번·반품 조건을 확인할 수 있는 구매자',
    ],
    notRecommended: [
      '시착에서 안쪽 중족부 고정이 맞지 않는 경우',
      'Tokyo등 다른세대와 상품명이 혼용된 매물',
    ],
  },
  features: [
    'FF BLAST TURBO · 상부 평판형 카본 (2022 Sky+)',
    '205g · 힐/전족부 33.5/30.8mm (RunRepeat)',
    '힐/전족부 SA 130/102 · 에너지 리턴 70.1/74.4% (RunRepeat). 원형2022세대는 FF BLAST TURBO이며 FF Turbo+나Tokyo의 이름과 혼용하지 않습니다. 주폼 경도·내부 젤 치수는 미확인입니다. RR방법론2.0의 기존 모든 지표가 현재 환경·방법으로 다시 측정됐다고 단정하지 않습니다.',
    'RR92.2mm는 구방식 외부 어퍼 최광폭으로 내부 젤 최광폭·엄지 너비가 아닙니다. 현재 원문의 내부 너비·높이·AC·HA는 미확인이며 다른Sky세대로 채우지 않습니다.',
  ],
  priceAnalysis: {
    priceTier: 'super-premium',
    alternatives: [
      'nike-alphafly-3',
      'adidas-adios-pro-4',
      'saucony-endorphin-pro-4',
    ],
  },
  detailedSpecs: {
    weight: '205g (RunRepeat 공시 검체 정책:남성US9). RR 실측205g·33.5/30.8mm·드롭2.7mm는 방법론2.0의2025-08-19 갱신 원문입니다. DOR의 인솔 포함 소개39/34mm·5mm,2022제조사 미드솔 최대두께33mm·드롭5mm는 정의와 조건이 달라 구분합니다.',
    stackHeight: '33.5/30.8mm (RunRepeat 힐/전족부 실측)',
    drop: '2.7mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: 'FF BLAST TURBO · 상부 평판형 카본 (2022 Sky+) · 경도 미확인 · 힐/전족부 SA 130/102 · 에너지 리턴 70.1/74.4%. 원형2022세대는 FF BLAST TURBO이며 FF Turbo+나Tokyo의 이름과 혼용하지 않습니다. 주폼 경도·내부 젤 치수는 미확인입니다. RR방법론2.0의 기존 모든 지표가 현재 환경·방법으로 다시 측정됐다고 단정하지 않습니다.',
    plate: '2022제조사 원문은 미드솔 상부의 평평한 카본 플레이트로 설명합니다. Edge+의V형 전방 하향 구조와 다릅니다.',
    width: 'RunRepeat 내부 최광폭 미확인 / 엄지 부위 미확인 / 엄지 높이 미확인. RR92.2mm는 구방식 외부 어퍼 최광폭으로 내부 젤 최광폭·엄지 너비가 아닙니다. 현재 원문의 내부 너비·높이·AC·HA는 미확인이며 다른Sky세대로 채우지 않습니다.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '한국 공식 현재 검색결과는Tokyo만 확인돼2022 Sky+의 현재 정가·성별·폭·SKU·재고는 미확인입니다. Tokyo의 가격·폼·상품코드를 Sky+에 대입하지 않으며 미노출을 단종 확정으로 해석하지 않습니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/asics-metaspeed-sky-plus',
      text: '205g과 SA 130/102·에너지 리턴 70.1/74.4%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. 원형2022세대는 FF BLAST TURBO이며 FF Turbo+나Tokyo의 이름과 혼용하지 않습니다. 주폼 경도·내부 젤 치수는 미확인입니다. RR방법론2.0의 기존 모든 지표가 현재 환경·방법으로 다시 측정됐다고 단정하지 않습니다. RR92.2mm는 구방식 외부 어퍼 최광폭으로 내부 젤 최광폭·엄지 너비가 아닙니다. 현재 원문의 내부 너비·높이·AC·HA는 미확인이며 다른Sky세대로 채우지 않습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/asics-metaspeed-sky-review-2022/',
      text: 'DOR의 Matt(남성US10)은 정사이즈와 약간 넓은 중족부, 끈 조임·얇은 혀 주름·거친 메쉬를 언급했고 힐·중족의 안쪽 벗어남을 느꼈습니다. David(남성US9.5)은 정사이즈와 좋은 고정·접지를 느꼈지만 자신에게Edge+의 굴림이 더 자연스럽다고 평가했습니다. 개인의 보폭·무릎·종아리 하중 느낌을 임상 효과나180케이던스 규칙으로 만들지 않습니다.',
    },
  ],
  similarShoes: [
    'nike-alphafly-3',
    'adidas-adios-pro-4',
    'saucony-endorphin-pro-4',
  ],
  relatedPosts: [
    {
      slug: 'nike-alphafly-3-vs-asics-metaspeed-sky-vs-nb-sc-elite-v5-carbon-racer-2026',
      title: '카본 3파전 — 알파플라이 3 vs 메타스카이+ vs SC 엘리트 v5',
    },
    {
      slug: 'running-shoe-plate-guide-2026',
      title: '플레이트 완전 해설 — 카본·유리섬유·나일론',
    },
  ],
  purchaseLinks: [
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: 'ASICS 한국 현재 검색 범위',
        url: 'https://asics.co.kr/goods/search?search_text=%EB%A9%94%ED%83%80%EC%8A%A4%ED%94%BC%EB%93%9C%20%EC%8A%A4%EC%B9%B4%EC%9D%B4',
        note: '현재검색은Tokyo4개.2022Sky+의 현재상품정보 미확인.',
      },
      {
        label: 'ASICS2022 Sky+/Edge+ 공식 구조 발표',
        url: 'https://corp.asics.com/jp/press/article/2022-04-24',
        note: 'FF BLAST TURBO·상부 평판형Sky+카본. 일본코드1013A115는 현재한국SKU확인이 아님.',
      },
      {
        label: 'RunRepeat 메타스피드 스카이+',
        url: 'https://runrepeat.com/asics-metaspeed-sky-plus',
        note: '공시 검체 정책:남성US9. 개별 검체SKU·폭은 미확인. 205g · 33.5/30.8mm · 드롭2.7mm. SA 130/102 · ER 70.1/74.4%. 원형2022세대는 FF BLAST TURBO이며 FF Turbo+나Tokyo의 이름과 혼용하지 않습니다. 주폼 경도·내부 젤 치수는 미확인입니다. RR방법론2.0의 기존 모든 지표가 현재 환경·방법으로 다시 측정됐다고 단정하지 않습니다.',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/asics-metaspeed-sky-review-2022/',
        note: 'RR 실측205g·33.5/30.8mm·드롭2.7mm는 방법론2.0의2025-08-19 갱신 원문입니다. DOR의 인솔 포함 소개39/34mm·5mm,2022제조사 미드솔 최대두께33mm·드롭5mm는 정의와 조건이 달라 구분합니다.',
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
