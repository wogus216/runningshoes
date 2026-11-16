import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'asics-metaspeed-ray',
  slug: 'asics-metaspeed-ray',
  brand: 'Asics',
  name: '메타스피드 레이',
  imageCaption: "메타스피드 레이 사진(1013A176-100 · WHITE/FLASH RED)은 ASICS 공식 상품 사진과 모델·색상·구도를 대조했습니다. 사진 품번을 한국 판매 규격·가격으로 읽지 마세요.",
  imageSource: {"title":"ASICS 공식 상품 갤러리","url":"https://www.asics.com/ph/en-ph/metaspeed-ray/p/1013A176-100.html"},
  image: '/images/shoes/asics/metaspeedray/side.webp',
  images: [
    '/images/shoes/asics/metaspeedray/side.webp',
    '/images/shoes/asics/metaspeedray/top.webp',
    '/images/shoes/asics/metaspeedray/outsole.webp',
    '/images/shoes/asics/metaspeedray/front.webp',
    '/images/shoes/asics/metaspeedray/back.webp',
  ],
  category: '레이싱',
  price: 439000,
  description: 'FF LEAP · 약3/4 카본 · MATRYX 어퍼 구조의 메타스피드 레이. RunRepeat 실험실 검체 129g·39.8/30mm. 한국 확인 가격 439,000원.',
  oneliner: 'FF LEAP · 약3/4 카본 · MATRYX 어퍼 · 129g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-09 원문 재확인. 한국 남녀공용1013A176.102·1013A176.400 확인 가격은439,000원입니다. .102는290mm만 활성·나머지 표시230~285mm는 비활성, .400은 표시230~285mm가 모두 비활성이었습니다. 구매에는 로그인이 필요해 결제 재고는 미확인입니다. 문자 폭·한국 와이드 SKU도 미확인입니다. 이를 전국 재고 없음으로 확대하지 않습니다. 한국 공시129g은 기준 사이즈 미표기입니다. 일본 제조사129g은27cm 한쪽, DOR 소개129g은 남성 US9·39.5/34.5mm·5mm입니다. RR129g·39.8/30.0mm·9.8mm와 별도입니다. RR 주폼28.6AC·보조37.6AC의 두 번째 검체 위치·조성은 미확인입니다. 제조사의 FF LEAP 중창·인솔 설명에 FF TURBO+나 EVA 층을 임의 추가하지 않습니다. 제조사5mm 설계·동적 드롭 주장, RR정적9.8mm, 개인 체감은 다른 종류여서 불일치가 해소됐다고 단정하지 않습니다. 200km 수명·5km 후 압박·최경량1위와 기록 향상 보장은 철회합니다. DOR David(남성 US9.5)는 정사이즈·뒤쪽 약간 밀착과 앞발 볼륨 여유, 크게 늘어나지 않는 MATRYX의 좋은 고정을 느꼈습니다. 본인은 짧은 대회를 선호하고 긴 거리에는 Edge의 추가 구조를 원했습니다. 빠른 U턴에서 바깥 발목 통증을 경험했지만 모든 러너의 질환 위험·거리 상한이나 힐 착지 금지로 확대하지 않습니다. RR 내부 최광폭91.3mm·엄지69.6mm·높이27.0mm와 DOR의 여유 체감을 함께 봅니다. 한국 와이드 현재 SKU·정확 문자 폭은 미확인입니다. 독자투표 약간 큼을 일괄 다운사이즈로 쓰지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '레이싱',
    '카본',
    '엘리트',
    '초경량',
    '전족부',
  ],
  specs: {
    weight: 129,
    drop: 9.8,
  },
  biomechanics: {
    stackHeight: {
      heel: 39.8,
      forefoot: 30,
    },
    drop: 9.8,
    carbonPlate: true,
    plateType: 'three-quarter carbon plate (RR/DOR)',
    midsoleType: 'FF LEAP · 약3/4 카본 · MATRYX 어퍼',
  },
  koreanFootFit: {
  },
  targetUsers: {
    recommended: [
      'FF LEAP·카본 전환과 좁은 중족 고정을 시착 비교하려는 러너',
      '정확한 현재 상품의 사이즈·반품 조건을 확인하려는 러너',
    ],
    notRecommended: [
      '직접 착화에서 앞코·발목 불편이나 코너 고정 문제가 생기는 경우',
      '129g·리턴81%만으로 개인 기록 향상을 기대하는 경우',
    ],
  },
  features: [
    'FF LEAP · 약3/4 카본 · MATRYX 어퍼',
    '129g · 39.8/30mm · 드롭 9.8mm (RunRepeat 실험실 검체)',
    '일본 제조사는 경량 카본, RR·DOR는 약3/4 길이로 설명합니다. 판재 길이만으로 힐 착지 러너의 성능이 없다고 단정하지 않습니다.',
    'RR 내부 최광폭91.3mm·엄지69.6mm·높이27.0mm와 DOR의 여유 체감을 함께 봅니다. 한국 와이드 현재 SKU·정확 문자 폭은 미확인입니다. 독자투표 약간 큼을 일괄 다운사이즈로 쓰지 않습니다.',
  ],
  priceAnalysis: {
    msrp: 439000,
    priceTier: 'super-premium',
    alternatives: [
      'asics-metaspeed-sky-plus',
      'nike-alphafly-3',
      'saucony-endorphin-elite-2',
    ],
  },
  detailedSpecs: {
    weight: '129g (RunRepeat 실험실 검체). 한국 공시129g은 기준 사이즈 미표기입니다. 일본 제조사129g은27cm 한쪽, DOR 소개129g은 남성 US9·39.5/34.5mm·5mm입니다. RR129g·39.8/30.0mm·9.8mm와 별도입니다.',
    stackHeight: '39.8/30mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '9.8mm (RunRepeat 실험실 검체). 한국 공시129g은 기준 사이즈 미표기입니다. 일본 제조사129g은27cm 한쪽, DOR 소개129g은 남성 US9·39.5/34.5mm·5mm입니다. RR129g·39.8/30.0mm·9.8mm와 별도입니다.',
    midsole: 'FF LEAP · 약3/4 카본 · MATRYX 어퍼. 주폼 28.6AC·보조 37.6AC, 힐/전족부 SA 170/120·에너지 리턴 78/81%. RR 주폼28.6AC·보조37.6AC의 두 번째 검체 위치·조성은 미확인입니다. 제조사의 FF LEAP 중창·인솔 설명에 FF TURBO+나 EVA 층을 임의 추가하지 않습니다. 제조사5mm 설계·동적 드롭 주장, RR정적9.8mm, 개인 체감은 다른 종류여서 불일치가 해소됐다고 단정하지 않습니다. 200km 수명·5km 후 압박·최경량1위와 기록 향상 보장은 철회합니다.',
    plate: '일본 제조사는 경량 카본, RR·DOR는 약3/4 길이로 설명합니다. 판재 길이만으로 힐 착지 러너의 성능이 없다고 단정하지 않습니다.',
    width: 'RR 내부 최광폭 91.3mm·엄지 부위 69.6mm·높이 27mm. RR 내부 최광폭91.3mm·엄지69.6mm·높이27.0mm와 DOR의 여유 체감을 함께 봅니다. 한국 와이드 현재 SKU·정확 문자 폭은 미확인입니다. 독자투표 약간 큼을 일괄 다운사이즈로 쓰지 않습니다.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 남녀공용1013A176.102·1013A176.400 확인 가격은439,000원입니다. .102는290mm만 활성·나머지 표시230~285mm는 비활성, .400은 표시230~285mm가 모두 비활성이었습니다. 구매에는 로그인이 필요해 결제 재고는 미확인입니다. 문자 폭·한국 와이드 SKU도 미확인입니다. 이를 전국 재고 없음으로 확대하지 않습니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/asics-metaspeed-ray',
      text: '한국 공시129g은 기준 사이즈 미표기입니다. 일본 제조사129g은27cm 한쪽, DOR 소개129g은 남성 US9·39.5/34.5mm·5mm입니다. RR129g·39.8/30.0mm·9.8mm와 별도입니다. RR 주폼28.6AC·보조37.6AC의 두 번째 검체 위치·조성은 미확인입니다. 제조사의 FF LEAP 중창·인솔 설명에 FF TURBO+나 EVA 층을 임의 추가하지 않습니다. 제조사5mm 설계·동적 드롭 주장, RR정적9.8mm, 개인 체감은 다른 종류여서 불일치가 해소됐다고 단정하지 않습니다. 200km 수명·5km 후 압박·최경량1위와 기록 향상 보장은 철회합니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/asics-metaspeed-ray-review-2025/',
      text: 'DOR David(남성 US9.5)는 정사이즈·뒤쪽 약간 밀착과 앞발 볼륨 여유, 크게 늘어나지 않는 MATRYX의 좋은 고정을 느꼈습니다. 본인은 짧은 대회를 선호하고 긴 거리에는 Edge의 추가 구조를 원했습니다. 빠른 U턴에서 바깥 발목 통증을 경험했지만 모든 러너의 질환 위험·거리 상한이나 힐 착지 금지로 확대하지 않습니다.',
    },
  ],
  similarShoes: [
    'asics-metaspeed-sky-plus',
    'asics-metaspeed-edge-plus',
    'nike-alphafly-3',
    'saucony-endorphin-elite-2',
  ],
  relatedPosts: [
    {
      slug: 'running-shoe-plate-guide-2026',
      title: '러닝화 플레이트 읽는 법 — 판·로드·소재·최신 대회 규정',
    },
  ],
  purchaseLinks: [
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 남녀공용 1013A176.102',
        url: 'https://asics.co.kr/p/AKR_112631106-102',
        note: '표시 가격439,000원. 로그인 후 결제 재고 미확인.',
      },
      {
        label: '한국 남녀공용 1013A176.400',
        url: 'https://asics.co.kr/p/AKR_112631106-400',
        note: '표시 가격439,000원. 로그인 후 결제 재고 미확인.',
      },
      {
        label: 'ASICS 일본 동세대 구조 발표',
        url: 'https://corp.asics.com/jp/press/article/2025-05-02-1',
        note: 'FF LEAP 중창·인솔, MATRYX·카본,129g27cm한쪽. 한국 재고 근거 아님.',
      },
      {
        label: 'ASICS 설계5mm·동적 드롭 주장',
        url: 'https://corp.asics.com/en/about_asics/history',
        note: '하중에 따른 제조사 설계 주장이며 RR 정적 단면 시험과 동등한 확인이 아님.',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://runrepeat.com/asics-metaspeed-ray',
        note: '공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 129g·39.8/30mm·9.8mm. RR 주폼28.6AC·보조37.6AC의 두 번째 검체 위치·조성은 미확인입니다. 제조사의 FF LEAP 중창·인솔 설명에 FF TURBO+나 EVA 층을 임의 추가하지 않습니다. 제조사5mm 설계·동적 드롭 주장, RR정적9.8mm, 개인 체감은 다른 종류여서 불일치가 해소됐다고 단정하지 않습니다. 200km 수명·5km 후 압박·최경량1위와 기록 향상 보장은 철회합니다.',
      },
      {
        label: 'Doctors of Running 동세대 원문',
        url: 'https://www.doctorsofrunning.com/asics-metaspeed-ray-review-2025/',
        note: '한국 공시129g은 기준 사이즈 미표기입니다. 일본 제조사129g은27cm 한쪽, DOR 소개129g은 남성 US9·39.5/34.5mm·5mm입니다. RR129g·39.8/30.0mm·9.8mm와 별도입니다.',
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
