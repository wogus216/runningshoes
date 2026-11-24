import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-11. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'saucony-endorphin-speed-6',
  slug: 'saucony-endorphin-speed-6',
  priceCheck: {
    "kind": "unconfirmed",
    "checkedAt": "2026-11-24",
    "url": "https://saucony.co.kr/",
    "note": "한국 공식몰의 스피드 5 판매와 스피드 6을 구분했습니다."
  },
  brand: 'Saucony',
  name: '엔돌핀 스피드 6',
  imageCaption: "엔돌핀 스피드 6 사진은 미국 써코니 공식 White/Citron S101825-1006 상품 사진입니다. 한국 출시·가격·재고의 근거는 아닙니다.",
  imageSource: {"title":"써코니 공식 상품 갤러리","url":"https://www.saucony.com/en/endorphin-speed-6/61331M.html?dwvar_61331M_color=S101825-1006"},
  image: "/images/shoes/saucony/endorphinspeed6/side.webp",
  images: ["/images/shoes/saucony/endorphinspeed6/side.webp"],
  category: '데일리',
  description: 'PWRRUN PBX 폼·나일론 플레이트의 엔돌핀 스피드6. DOR·BITR의 남성 US9 소개 무게는232g입니다. 독립 랩·미국 제조사 별도 무게 공시·한국 정가는 미확인입니다.',
  oneliner: 'PWRRUN PBX 비즈 PEBA · 나일론 날개 플레이트 · 232g (DOR 소개 공시 · 독립 랩 미확인)',
  editorComment: '2026-11-12 원문 재확인. BITR 동세대 3인 착화 리뷰를 추가로 확인했습니다. 미국 써코니의 별도 무게 공시 근거는 확보하지 못해 기존233g 비교를 철회합니다. DOR·BITR 남성US9 소개232g과 여성 소개203g(DOR US8·BITR US7.5), Meg의 실제US7.5 197g은 측정 조건을 나눕니다. BITR의 개인 핏·장거리 피로 평가는 모두에게 적용되는 판정이 아닙니다. 한국 공식 캐시: 정확6의 한국 상품 원문 미확인. 현재 가격·폭별 선택 재고는 미확인입니다. 옵션 목록·장바구니·품절 문구를 현재 전체 재고로 해석하지 않습니다. 한국 무게·전체 스택 공시가 없는 제품은 해외 소개로 채우지 않습니다. 232g(남성 US9)/203g(여성 US8)·38/30mm·8mm는 DOR 소개 공시이며 독립 절단 실측이 아닙니다. 정확6 RR 자료는 미확인으로5세대 값을 대입하지 않습니다. 미국 소매 링크의2026-10-15 공급 안내는 한국 출시일이 아닙니다. DOR의 개인 마모 차이를500km 수명으로 환산하지 않습니다. 새 폼의 저온 랩이 미확인이므로 겨울 개선·악화와 임상 등급을 추정하지 않습니다. DOR 직접403 이후 검색에 노출된 원문 캐시를 확인했습니다. DOR Matt(남성 US10/EU44/JP28)는 초기 앞코 테이퍼·토가드가 밀착되고 뻣뻣했으나 주행 뒤 정사이즈에 가까워졌으며 빠른 움직임의 반응을 좋아했습니다.35마일에서 마모를 보았지만 힐 고무 파손은 예상 우려입니다. Bach는 편한 트레이너 핏과 구름을 좋아했지만 급내리막에서 조금 흔들렸고20마일에서 큰 마모는 없었습니다. Bach 실제 사이즈는 미확인입니다. 정확6 독립 랩 내부 치수는 미확인입니다. 실제 규격에서 앞코 테이퍼·높이·힐 고정을 확인하세요. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '데일리',
    '템포',
    'PWRRUN PBX',
    '나일론 플레이트',
    '신상',
  ],
  specs: {
    weight: 232,
    drop: 8,
  },
  biomechanics: {
    stackHeight: {
      heel: 38,
      forefoot: 30,
    },
    drop: 8,
    carbonPlate: false,
    plateType: 'Winged nylon plate',
    midsoleType: 'PWRRUN PBX 비즈 PEBA · 나일론 날개 플레이트',
  },
  koreanFootFit: {
  },
  targetUsers: {
    recommended: [
      '실제 규격에서 앞코·중족·힐 고정을 비교하려는 러너',
      '공시와 독립 랩·개인 체감의 차이를 확인하려는 러너',
    ],
    notRecommended: [
      '시착에서 압박·마찰이나 불편한 전환이 남는 경우',
      '국소 마모·개인 경험을 공통 수명이나 임상 효과로 읽는 경우',
    ],
  },
  features: [
    'PWRRUN PBX 비즈 PEBA · 나일론 날개 플레이트',
    '232g · 38/30mm · 드롭 8mm (DOR 소개 공시 · 독립 랩 미확인)',
    '정확6의 DOR은 안쪽·바깥쪽 날개가 있는 나일론 플레이트를 설명합니다. 바깥 날개 제거가 새 변화라는 기존 소매 설명은 이번 원문으로 확정하지 않습니다.',
    '정확6 독립 랩 내부 치수는 미확인입니다. 실제 규격에서 앞코 테이퍼·높이·힐 고정을 확인하세요.',
  ],
  detailedSpecs: {
    weight: '232g (DOR 소개 공시 · 독립 랩 미확인). 232g(남성 US9)/203g(여성 US8)·38/30mm·8mm는 DOR 소개 공시이며 독립 절단 실측이 아닙니다. 정확6 RR 자료는 미확인으로5세대 값을 대입하지 않습니다.',
    stackHeight: '38/30mm (DOR 소개 공시 · 독립 랩 미확인, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '8mm (DOR 소개 공시 · 독립 랩 미확인). 232g(남성 US9)/203g(여성 US8)·38/30mm·8mm는 DOR 소개 공시이며 독립 절단 실측이 아닙니다. 정확6 RR 자료는 미확인으로5세대 값을 대입하지 않습니다.',
    midsole: 'PWRRUN PBX 비즈 PEBA · 나일론 날개 플레이트. 독립 랩 SA·에너지 리턴·AC/HA 미확인. 미국 소매 링크의2026-10-15 공급 안내는 한국 출시일이 아닙니다. DOR의 개인 마모 차이를500km 수명으로 환산하지 않습니다. 새 폼의 저온 랩이 미확인이므로 겨울 개선·악화와 임상 등급을 추정하지 않습니다.',
    plate: '정확6의 DOR은 안쪽·바깥쪽 날개가 있는 나일론 플레이트를 설명합니다. 바깥 날개 제거가 새 변화라는 기존 소매 설명은 이번 원문으로 확정하지 않습니다.',
    width: '동세대 독립 랩 내부 치수 미확인. 정확6 독립 랩 내부 치수는 미확인입니다. 실제 규격에서 앞코 테이퍼·높이·힐 고정을 확인하세요.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 공식 캐시: 정확6의 한국 상품 원문 미확인. 현재 가격·폭별 선택 재고는 미확인입니다. 옵션 목록·장바구니·품절 문구를 현재 전체 재고로 해석하지 않습니다. 한국 무게·전체 스택 공시가 없는 제품은 해외 소개로 채우지 않습니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/saucony-endorphin-speed-6-review/',
      text: '232g(남성 US9)/203g(여성 US8)·38/30mm·8mm는 DOR 소개 공시이며 독립 절단 실측이 아닙니다. 정확6 RR 자료는 미확인으로5세대 값을 대입하지 않습니다. 미국 소매 링크의2026-10-15 공급 안내는 한국 출시일이 아닙니다. DOR의 개인 마모 차이를500km 수명으로 환산하지 않습니다. 새 폼의 저온 랩이 미확인이므로 겨울 개선·악화와 임상 등급을 추정하지 않습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/saucony-endorphin-speed-6-review/',
      text: 'DOR 직접403 이후 검색에 노출된 원문 캐시를 확인했습니다. DOR Matt(남성 US10/EU44/JP28)는 초기 앞코 테이퍼·토가드가 밀착되고 뻣뻣했으나 주행 뒤 정사이즈에 가까워졌으며 빠른 움직임의 반응을 좋아했습니다.35마일에서 마모를 보았지만 힐 고무 파손은 예상 우려입니다. Bach는 편한 트레이너 핏과 구름을 좋아했지만 급내리막에서 조금 흔들렸고20마일에서 큰 마모는 없었습니다. Bach 실제 사이즈는 미확인입니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Believe in the Run',
      source: 'editor',
      sourceUrl: 'https://believeintherun.com/shoe-reviews/saucony-endorphin-speed-6-review/',
      text: '동세대 리뷰어 3인의 의견입니다. Meg은 발볼이 넓은 자신의 발에 앞코 공간이 충분했고, Thomas는 남성 US10.5에서 정사이즈 핏과 빠른 훈련·이지런의 전환을 좋게 봤습니다. Tina는 중족부가 가끔 조였고 14마일 도중 발 피로를 느꼈습니다. 리뷰어별 발·주행 거리가 달라 보편적 발볼·장거리 적합성으로 일반화하지 않습니다.',
    },
  ],
  similarShoes: [
    'saucony-endorphin-speed-5',
    'asics-sonicblast-2',
    'nike-pegasus-plus-2',
    'saucony-endorphin-pro-5',
  ],
  verification: {
    checkedAt: '2026-11-12',
    scope: 'DOR·BITR 동세대 착화 리뷰·소개 조건과 미국 제조사의 제품 구조·사진을 대조했습니다. 별도 제조사 무게 공시 근거는 확보하지 못했습니다. 한국 상품·독립 랩·제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: 'Doctors of Running 동세대 원문',
        url: 'https://www.doctorsofrunning.com/saucony-endorphin-speed-6-review/',
        note: '232g(남성 US9)/203g(여성 US8)·38/30mm·8mm는 DOR 소개 공시이며 독립 절단 실측이 아닙니다. 정확6 RR 자료는 미확인으로5세대 값을 대입하지 않습니다.',
      },
      {
        label: 'Believe in the Run 동세대 착화 리뷰',
        url: 'https://believeintherun.com/shoe-reviews/saucony-endorphin-speed-6-review/',
        note: '3인 착화 의견과 소개 스펙. 남성US9 232g·여성US7.5 203g은 소개값이며 Meg의 실제US7.5 197g과 측정 맥락이 다릅니다. DOR 여성 소개203g의 기준은US8입니다.',
      },
      {
        label: '미국 써코니 공식 제품 정보',
        url: 'https://www.saucony.com/en/endorphin-speed-6/61331M.html?dwvar_61331M_color=S101825-1005',
        note: '11/12 정확 상품 본문은 PBX 폼·재설계 나일론 플레이트를 설명합니다. 별도 무게·스택 공시는 확인하지 못했습니다. 이전233g 무게 표기의 근거를 확보하지 못해 철회합니다. 한국 가격·재고나 독립 랩 실측의 근거는 아닙니다.',
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
      '동세대 독립 실험실 자료 미확인. 제조사 공시와 DOR 소개를 독립 실측으로 표시하지 않음.',
    ],
  },
};
