import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'brooks-hyperion-elite-5',
  slug: 'brooks-hyperion-elite-5',
  brand: 'Brooks',
  name: '하이페리온 엘리트 5',
  image: '/images/shoes/brooks/hyperionelite5/side.webp',
  images: [
    '/images/shoes/brooks/hyperionelite5/side.webp',
    '/images/shoes/brooks/hyperionelite5/front.webp',
    '/images/shoes/brooks/hyperionelite5/back.webp',
    '/images/shoes/brooks/hyperionelite5/top.webp',
    '/images/shoes/brooks/hyperionelite5/outsole.webp',
  ],
  category: '레이싱',
  description: 'DNA GOLD(PEBA) · 격자형 SpeedVault+ 카본 구조의 하이페리온 엘리트 5. RunRepeat 실험실 검체 204g·37.6/26.4mm. 한국 현재 정가 미확인.',
  oneliner: 'DNA GOLD(PEBA) · 격자형 SpeedVault+ 카본 · 204g (RunRepeat 실험실 검체)',
  editorComment: "2026-11-09 원문 재확인. 한국 공식 현재 접속 실패로 현행 정가·SKU·폭·재고는 미확인입니다. 열린 공식 과거 캐시는 남녀공용 MEDIUM1000491D756 정가 299,000원·할인 149,500원을 보여 주지만 현재 판매 확정으로 쓰지 않습니다. 과거 OUTLET검색 239,200원은 원문실패로 최종근거에서 제외했습니다. DOR 소개남성 US9 201g·38/30mm·8mm, RR 브랜드 40/32mm·8mm·201/166g(사이즈 미확인), RR204g·37.6/26.4mm·11.2mm 를 구분합니다. 한국 공시검체 무게는 미확인입니다. 주폼 27.5AC·보조 23.6AC 의 정확 위치는 미확인입니다. RR 혀 full양쪽 라벨과 DOR 내측부착·외측자유 설명의 충돌을 보존합니다. Matt의 8mm 이하 느낌과 공시 8mm·실측 11.2mm 는 다른 정보입니다. 다른 PEBA의 450km 연구·국소마모 2.2mm 를 이 모델 300km수명·대회 3~4회 상한으로 전용하지 않습니다. Sub3전용·입문자 6분대 역효과·사계절 보호 보장은 철회했습니다. DOR Matt(남성 US10)은 대체로 정사이즈이나 좁고 낮은 앞쪽·힐 슬립·쓸림을 느꼈고 끈을 더 조이면 발등이 눌렸다고 적었습니다. 부드럽고 튀는 힐과 강한 전족 로커·토스프링, 좁은 중족의 안쪽 편향을 느꼈습니다. 본인의 전족 푸시가 어색했다는 경험을 모든 착지 유형의 금지·전용 규칙으로 만들지 않습니다. RR 내부 최광폭 92.7mm·엄지 71.5mm·높이 24.1mm 를 실제앞코 압박·힐 고정과 함께 확인하세요. 한국 현재 와이드 SKU 는 미확인입니다. 모든 발에 5mm 업을 처방하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.",
  specs: {
    weight: 204,
    drop: 11.2,
  },
  biomechanics: {
    stackHeight: {
      heel: 37.6,
      forefoot: 26.4,
    },
    drop: 11.2,
    carbonPlate: true,
    plateType: 'Arris Composites latticed full-length carbon SpeedVault+',
    midsoleType: 'DNA GOLD(PEBA) · 격자형 SpeedVault+ 카본',
  },
  koreanFootFit: {
  },
  targetUsers: {
    recommended: [
      '격자형카본·강한전족로커의 전환을 비교하려는 러너',
      "실제규격에서 앞코 높이·혀·힐 고정을 확인하려는 러너",
    ],
    notRecommended: [
      "직접 착화에서 힐 슬립·발등 압박이 해결되지 않는 경우",
      "공시 8mm 와 실측 11.2mm 를 같은 측정이라고 소개한 매물",
    ],
  },
  features: [
    'DNA GOLD(PEBA) · 격자형 SpeedVault+ 카본',
    '204g · 37.6/26.4mm · 드롭 11.2mm (RunRepeat 실험실 검체)',
    'Arris Composites 격자형 전장 카본 SpeedVault+. 격자 모양만으로 개인의 효율·기록 향상률을 계산하지 않습니다.',
    "RR 내부 최광폭 92.7mm·엄지 71.5mm·높이 24.1mm 를 실제앞코 압박·힐 고정과 함께 확인하세요. 한국 현재 와이드 SKU 는 미확인입니다. 모든 발에 5mm 업을 처방하지 않습니다.",
  ],
  priceAnalysis: {
    priceTier: 'super-premium',
    alternatives: [
      'nike-alphafly-3',
      'asics-metaspeed-sky-plus',
    ],
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/brooks-hyperion-elite-5',
      text: "DOR 소개남성 US9 201g·38/30mm·8mm, RR 브랜드 40/32mm·8mm·201/166g(사이즈 미확인), RR204g·37.6/26.4mm·11.2mm 를 구분합니다. 한국 공시검체 무게는 미확인입니다. 주폼 27.5AC·보조 23.6AC 의 정확 위치는 미확인입니다. RR 혀 full양쪽 라벨과 DOR 내측부착·외측자유 설명의 충돌을 보존합니다. Matt의 8mm 이하 느낌과 공시 8mm·실측 11.2mm 는 다른 정보입니다. 다른 PEBA의 450km 연구·국소마모 2.2mm 를 이 모델 300km수명·대회 3~4회 상한으로 전용하지 않습니다. Sub3전용·입문자 6분대 역효과·사계절 보호 보장은 철회했습니다.",
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/brooks-hyperion-elite-5-review-2025/',
      text: "DOR Matt(남성 US10)은 대체로 정사이즈이나 좁고 낮은 앞쪽·힐 슬립·쓸림을 느꼈고 끈을 더 조이면 발등이 눌렸다고 적었습니다. 부드럽고 튀는 힐과 강한 전족 로커·토스프링, 좁은 중족의 안쪽 편향을 느꼈습니다. 본인의 전족 푸시가 어색했다는 경험을 모든 착지 유형의 금지·전용 규칙으로 만들지 않습니다.",
    },
  ],
  detailedSpecs: {
    weight: "204g (RunRepeat 실험실 검체). DOR 소개남성 US9 201g·38/30mm·8mm, RR 브랜드 40/32mm·8mm·201/166g(사이즈 미확인), RR204g·37.6/26.4mm·11.2mm 를 구분합니다. 한국 공시검체 무게는 미확인입니다.",
    stackHeight: '37.6/26.4mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: "11.2mm (RunRepeat 실험실 검체). DOR 소개남성 US9 201g·38/30mm·8mm, RR 브랜드 40/32mm·8mm·201/166g(사이즈 미확인), RR204g·37.6/26.4mm·11.2mm 를 구분합니다. 한국 공시검체 무게는 미확인입니다.",
    midsole: "DNA GOLD(PEBA) · 격자형 SpeedVault+ 카본. 주폼 27.5AC·보조 23.6AC, 힐/전족부 SA 151/107·에너지 리턴 76.9/77.7%. 주폼 27.5AC·보조 23.6AC 의 정확 위치는 미확인입니다. RR 혀 full양쪽 라벨과 DOR 내측부착·외측자유 설명의 충돌을 보존합니다. Matt의 8mm 이하 느낌과 공시 8mm·실측 11.2mm 는 다른 정보입니다. 다른 PEBA의 450km 연구·국소마모 2.2mm 를 이 모델 300km수명·대회 3~4회 상한으로 전용하지 않습니다. Sub3전용·입문자 6분대 역효과·사계절 보호 보장은 철회했습니다.",
    plate: 'Arris Composites 격자형 전장 카본 SpeedVault+. 격자 모양만으로 개인의 효율·기록 향상률을 계산하지 않습니다.',
    width: "RR 내부 최광폭 92.7mm·엄지 부위 71.5mm·높이 24.1mm. RR 내부 최광폭 92.7mm·엄지 71.5mm·높이 24.1mm 를 실제앞코 압박·힐 고정과 함께 확인하세요. 한국 현재 와이드 SKU 는 미확인입니다. 모든 발에 5mm 업을 처방하지 않습니다.",
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: "한국 공식 현재 접속 실패로 현행 정가·SKU·폭·재고는 미확인입니다. 열린 공식 과거 캐시는 남녀공용 MEDIUM1000491D756 정가 299,000원·할인 149,500원을 보여 주지만 현재 판매 확정으로 쓰지 않습니다. 과거 OUTLET검색 239,200원은 원문실패로 최종근거에서 제외했습니다.",
  },
  similarShoes: [
    'nike-alphafly-3',
    'asics-metaspeed-sky-plus',
    'adidas-adios-pro-4',
  ],
  relatedPosts: [
    {
      slug: 'running-shoe-plate-guide-2026',
      title: '플레이트 완전 해설 — 카본·유리섬유·나일론',
    },
    {
      slug: 'running-shoe-midsole-foam-guide-2026',
      title: '미드솔 폼 완전 해설 — EVA·TPU·PEBA',
    },
  ],
  purchaseLinks: [
  ],
  tags: [
    '레이싱',
    '카본 플레이트',
    'PEBA',
    '대회용',
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 과거 BLACK FRIDAY 캐시',
        url: 'https://brooksrunning.co.kr/product/black-friday-%EB%82%A8%EB%85%80%EA%B3%B5%EC%9A%A9-%ED%95%98%EC%9D%B4%ED%8E%98%EB%A6%AC%EC%98%A8-%EC%97%98%EB%A6%AC%ED%8A%B8-5%EC%98%90%EB%A1%9C%EC%9A%B0medium/817/category/89/display/1/',
        note: "299,000/149,500원은 과거 관찰. 현재 가격·판매옵션 미확인.",
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://runrepeat.com/brooks-hyperion-elite-5',
        note: "공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 204g·37.6/26.4mm·11.2mm. 주폼 27.5AC·보조 23.6AC 의 정확 위치는 미확인입니다. RR 혀 full양쪽 라벨과 DOR 내측부착·외측자유 설명의 충돌을 보존합니다. Matt의 8mm 이하 느낌과 공시 8mm·실측 11.2mm 는 다른 정보입니다. 다른 PEBA의 450km 연구·국소마모 2.2mm 를 이 모델 300km수명·대회 3~4회 상한으로 전용하지 않습니다. Sub3전용·입문자 6분대 역효과·사계절 보호 보장은 철회했습니다.",
      },
      {
        label: 'Doctors of Running 동세대 원문',
        url: 'https://www.doctorsofrunning.com/brooks-hyperion-elite-5-review-2025/',
        note: "DOR 소개남성 US9 201g·38/30mm·8mm, RR 브랜드 40/32mm·8mm·201/166g(사이즈 미확인), RR204g·37.6/26.4mm·11.2mm 를 구분합니다. 한국 공시검체 무게는 미확인입니다.",
      },
      {
        label: 'RunRepeat 측정법',
        url: 'https://runrepeat.com/testing-methodology',
        note: "AC·HA·HC, SA·에너지 리턴, BR·구방식 1~5와 내부/외부 폭을 구분합니다. 일반 정책은 개별 라벨 확인과 다릅니다.",
      },
    ],
    limitations: [
      '모델별 임상 예방·치료 등급, 공통 최적 페이스·주행 수명·km당 비용은 미확인으로 제거했습니다.',
      '에디터 평점·1~10점·발볼 및 계절 분류·구매 링크는 모든 항목을 새로 검증한 수치나 임상 효과가 아닙니다.',
      '판매 조건은 확인한 상품·시점에 한정합니다. 미확인을 미출시·단종·전국 재고 없음으로 해석하지 않습니다.',
    ],
  },
};
