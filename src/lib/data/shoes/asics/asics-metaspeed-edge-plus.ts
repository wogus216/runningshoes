import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'asics-metaspeed-edge-plus',
  slug: 'asics-metaspeed-edge-plus',
  brand: 'Asics',
  name: '메타스피드 엣지+',
  image: '/images/shoes/asics/metaspeedge/1.webp',
  images: [
    '/images/shoes/asics/metaspeedge/1.webp',
    '/images/shoes/asics/metaspeedge/2.webp',
    '/images/shoes/asics/metaspeedge/3.webp',
    '/images/shoes/asics/metaspeedge/4.webp',
    '/images/shoes/asics/metaspeedge/5.webp',
  ],
  category: '레이싱',
  description: '2022 Edge+의 FF BLAST TURBO·V형 카본 구조. DOR 소개39/31mm·드롭8mm이며 독립 랩 실측과 한국 현재 정가는 미확인입니다.',
  oneliner: '2022 Edge+ · FF BLAST TURBO · 전방으로 낮아지는 V형 카본',
  editorComment: '2026-11-09 원문 재확인. 한국 검색결과는Tokyo만 확인돼2022 Edge+의 현재 가격·SKU·성별·폭·재고는 미확인입니다. RunRepeat 후보URL은404로 동세대 랩을 확보하지 못했습니다. DOR 소개는39/31mm·8mm, 남성US9의7.4oz이며 약210g은 이 온스 공시의 환산·반올림 값으로 실측이 아닙니다. 2022제조사 원문은 FF BLAST TURBO와 전방으로 낮아지는 V형 카본을 설명합니다. 기존33/25mm·208g·FFTurbo+ 확정과180이상케이던스 선택 규칙·풀코스 비추천을 철회합니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '레이싱',
    '마라톤',
    '카본플레이트',
    '케이던스',
  ],
  specs: {
    weight: 210,
    cushioning: 6,
    responsiveness: 10,
    stability: 7,
    drop: 8,
  },
  biomechanics: {
    stackHeight: {
      heel: 39,
      forefoot: 31,
    },
    drop: 8,
    carbonPlate: true,
    plateType: 'V-shaped carbon plate lowered toward forefoot',
    midsoleType: 'FF BLAST TURBO · V형 전방 하향 카본 (2022 Edge+)',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
  },
  targetUsers: {
    recommended: [
      '2022 Edge+의 앞쪽 로커·V형 카본을 시착 비교하려는 러너',
      '매물의 정확 세대·품번·반품 조건을 확인할 수 있는 구매자',
    ],
    notRecommended: [
      '직접 착화에서 안쪽 중족부 고정이 맞지 않는 경우',
      '다른Paris·Tokyo세대와 모델명이 혼용된 매물',
    ],
  },
  features: [
    '2022 FF BLAST TURBO · V형 전방 하향 카본',
    'DOR 소개39/31mm·드롭8mm (독립 실측 아님)',
    '약210g은 DOR 남성US9공시7.4oz의 환산·반올림 값',
    '한국 현재 정가·폭·SKU와 해외 독립 랩 수치는 미확인',
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
    weight: '약210g (DOR 남성US9소개7.4oz ×28.3495g/oz,반올림). 독립 랩 실측은 미확인.',
    stackHeight: 'DOR 소개39/31mm. 기존33/25mm의 완성화 실측 근거는 확보하지 못해 대체.',
    drop: '8mm (2022제조사·DOR 공시). 독립 실측 미확인.',
    midsole: 'FF BLAST TURBO. DOR 일부 문장의Flytefoam Blast명칭과 제조사·다른본문의Turbo명칭 차이를 별도층으로 해석하지 않음.',
    plate: '2022제조사 V형 카본을 전방으로 낮게 배치. Sky+의 상부 평판형과 구분.',
    width: '내부 최광폭·엄지너비·높이·한국 현재 와이드 모두 미확인. Sky+외부92.2mm나Paris/Tokyo수치로 채우지 않음.',
    durability: '검증된 공통 수명km 미확인.',
    price: '한국 현재 공식 정가·SKU·재고 미확인. Tokyo검색결과를2022모델에 전용하지 않음.',
  },
  reviews: [
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/asics-metaspeed-edge-review-2022/',
      text: 'Matt(남성US10)은 길이는 맞고 밀착되는 어퍼·얇고 거친 메쉬·설포 주름을 언급했습니다. 앞쪽 롤링이 자연스럽고 자신의 워밍업·빠른 훈련·긴 주행에 썼지만 느릴 때 좁은 중족부의 안쪽 벗어남을 느꼈습니다. 임상 효과·케이던스 기준으로 일반화하지 않습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/asics-metaspeed-edge-review-2022/',
      text: 'David는 정확 시험사이즈를 이번 읽은 문단에 밝히지 않았으며 길이는 맞고 고정이 좋다고 적었습니다. 개인적으로Sky+보다 자연스러운 굴림과 균형을 느꼈지만 중족 전환의 철퍼덕거리는 느낌은 한계로 봤습니다. 두 사람의 의견으로 질환별 등급이나 공통 최적 거리를 정하지 않습니다.',
    },
  ],
  similarShoes: [
    'nike-alphafly-3',
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
      url: 'https://naver.me/GZDLDL2p',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '2022동세대 구조·DOR 공시/착화 의견과 한국 현재상품·독립 랩 접근 한계를 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: 'ASICS2022 Sky+/Edge+ 공식 구조 발표',
        url: 'https://corp.asics.com/jp/press/article/2022-04-24',
        note: 'FF BLAST TURBO·V형 카본·드롭8mm. 일본코드1013A116을 현재한국SKU로 사용하지 않음.',
      },
      {
        label: 'Doctors of Running2022 Edge+원문',
        url: 'https://www.doctorsofrunning.com/asics-metaspeed-edge-review-2022/',
        note: '공시39/31mm·8mm·남성US9 7.4oz.210g은 환산값, 실제g실측 아님.',
      },
      {
        label: '한국 공식 현재 검색 범위',
        url: 'https://asics.co.kr/goods/search?search_text=%EB%A9%94%ED%83%80%EC%8A%A4%ED%94%BC%EB%93%9C%20%EC%97%A3%EC%A7%80',
        note: '현재Tokyo3개만 확인.2022 +모델 정보 미확인, 단종·폭옵션 부재 확정 아님.',
      },
    ],
    limitations: [
      'RunRepeat 동세대 후보URL404. 동세대 실측·SA·에너지 리턴·AC/HA·내부 젤 치수는 미확인, 다른 세대로 대체하지 않음.',
      '에디터 점수·발볼 및 계절 분류는 새로 검증한 실험실 수치나 임상효과가 아님.',
      '임상 효과·공통 최적페이스·수명km·km당비용은 미확인으로 제거.',
    ],
  },
};
