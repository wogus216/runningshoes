import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'mizuno-hyperwarp-pure',
  slug: 'mizuno-hyperwarp-pure',
  brand: 'Mizuno',
  name: '하이퍼워프 퓨어',
  image: '/images/shoes/mizuno/hyperwarppure/side.webp',
  images: [
    '/images/shoes/mizuno/hyperwarppure/side.webp',
    '/images/shoes/mizuno/hyperwarppure/top.webp',
    '/images/shoes/mizuno/hyperwarppure/outsole.webp',
    '/images/shoes/mizuno/hyperwarppure/front.webp',
    '/images/shoes/mizuno/hyperwarppure/back.webp',
  ],
  category: '레이싱',
  price: 309000,
  description: 'ENERZY XP · 전장 카본 · 낮고 완만한 로커 구조의 하이퍼워프 퓨어. 한국 제조사 공시·270mm 한쪽 (독립 실측 아님) 137g·34.5/31.5mm. 한국 확인 가격 309,000원.',
  oneliner: 'ENERZY XP · 전장 카본 · 낮고 완만한 로커 · 137g (한국 제조사 공시·270mm 한쪽 (독립 실측 아님))',
  editorComment: '2026-11-09 원문 재확인. 한국 확인 두 상품은 보통(2E), 정가 309,000원·확인시 판매 247,200원입니다. J1GC268799: 250/255/260/265/270/275/280/285/290mm 선택 가능; J1GC267081: 245/250/260/270/275/280/285/290mm 선택 가능. 같은 SKU가 MEN/WOMEN 목록에 함께 보이나 상품 자체 성별 명시는 미확인이라 남녀 전용·공용을 확정하지 않습니다. 다른 한국4E 상품도 미확인입니다. 한국 공시는 270mm 한쪽 약137g·34.5/31.5mm·3mm입니다. 독립 랩 실측이 아니며 상세 이미지의 제조년월은 출시일이 아닙니다. DOR 소개는 남성 US9 139g·34/30.5mm·3.5mm입니다. 한국 공시 34.5/31.5mm·3mm·270mm 한쪽 약137g과 DOR 34/30.5mm·3.5mm·남성 US9 139g은 다릅니다. RR 독립 실측을 확보하지 못해 어느 공시도 실측으로 승격하지 않습니다. 다른 PEBA의450km 연구를 이 모델200km 수명이나 풀코스30km 후 쿠션 소진 증거로 쓰지 않습니다. DOR David(남성 US9.5)는 정사이즈, 넓은 중족골 부위와 빠른 발가락 테이퍼·좋은 고정을 느꼈으며 본인의 종아리 부담을 더 느꼈다고 적었습니다. Andrea는 평소 여성 US9.5에서 US10으로 올렸어도 앞길이 여유가 크지 않았지만 높이·앞볼·고정은 편했다고 적었습니다. 개인의 착지·사이징 경험으로 모든 러너의 10km 상한이나 반업 필수를 정하지 않습니다. 정확한 동세대 RR의 내부 최광폭·엄지 너비·높이는 미확인입니다. 한국 기본2E를 독립 검체 치수나 모든 넓은 발의 적합성으로 바꾸지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '레이싱',
    '카본',
    '초경량',
    '단거리',
    'PEBA',
  ],
  specs: {
    weight: 137,
    cushioning: 5,
    responsiveness: 10,
    stability: 4,
    drop: 3,
  },
  biomechanics: {
    stackHeight: {
      heel: 34.5,
      forefoot: 31.5,
    },
    drop: 3,
    carbonPlate: true,
    plateType: 'full-length carbon (official/DOR)',
    midsoleType: 'ENERZY XP · 전장 카본 · 낮고 완만한 로커',
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
  },
  targetUsers: {
    recommended: [
      '실제 2E 상품의 앞코·발등·힐 고정을 시착 비교하려는 러너',
      '낮은 로커·판재 전환이 자신의 주행에 맞는지 확인하려는 러너',
    ],
    notRecommended: [
      '직접 착화에서 앞코 압박·전환 불편이 생기는 경우',
      '다른 세대·다른 모델 실측이 혼용된 매물',
    ],
  },
  features: [
    'ENERZY XP · 전장 카본 · 낮고 완만한 로커',
    '137g · 34.5/31.5mm · 드롭 3mm (한국 제조사 공시·270mm 한쪽 (독립 실측 아님))',
    '공식 Smooth Speed Plate/3D carbon plate, DOR 전장 카본. 판재와 폼 명칭만으로 전족 착지를 강제로 유도한다고 단정하지 않습니다.',
    '정확한 동세대 RR의 내부 최광폭·엄지 너비·높이는 미확인입니다. 한국 기본2E를 독립 검체 치수나 모든 넓은 발의 적합성으로 바꾸지 않습니다.',
  ],
  priceAnalysis: {
    msrp: 309000,
    priceTier: 'super-premium',
    alternatives: [
      'nike-vaporfly-4',
      'adidas-adios-pro-4',
      'saucony-endorphin-elite-2',
    ],
  },
  detailedSpecs: {
    weight: '137g (한국 제조사 공시·270mm 한쪽 (독립 실측 아님)). 한국 공시는 270mm 한쪽 약137g·34.5/31.5mm·3mm입니다. 독립 랩 실측이 아니며 상세 이미지의 제조년월은 출시일이 아닙니다. DOR 소개는 남성 US9 139g·34/30.5mm·3.5mm입니다.',
    stackHeight: '34.5/31.5mm (한국 제조사 공시·270mm 한쪽 (독립 실측 아님), 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '3mm (한국 제조사 공시·270mm 한쪽 (독립 실측 아님)). 한국 공시는 270mm 한쪽 약137g·34.5/31.5mm·3mm입니다. 독립 랩 실측이 아니며 상세 이미지의 제조년월은 출시일이 아닙니다. DOR 소개는 남성 US9 139g·34/30.5mm·3.5mm입니다.',
    midsole: 'ENERZY XP · 전장 카본 · 낮고 완만한 로커. 독립 랩 SA·에너지 리턴·AC/HA 미확인. 한국 공시 34.5/31.5mm·3mm·270mm 한쪽 약137g과 DOR 34/30.5mm·3.5mm·남성 US9 139g은 다릅니다. RR 독립 실측을 확보하지 못해 어느 공시도 실측으로 승격하지 않습니다. 다른 PEBA의450km 연구를 이 모델200km 수명이나 풀코스30km 후 쿠션 소진 증거로 쓰지 않습니다.',
    plate: '공식 Smooth Speed Plate/3D carbon plate, DOR 전장 카본. 판재와 폼 명칭만으로 전족 착지를 강제로 유도한다고 단정하지 않습니다.',
    width: '동세대 독립 랩 내부 치수 미확인. 정확한 동세대 RR의 내부 최광폭·엄지 너비·높이는 미확인입니다. 한국 기본2E를 독립 검체 치수나 모든 넓은 발의 적합성으로 바꾸지 않습니다.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 확인 두 상품은 보통(2E), 정가 309,000원·확인시 판매 247,200원입니다. J1GC268799: 250/255/260/265/270/275/280/285/290mm 선택 가능; J1GC267081: 245/250/260/270/275/280/285/290mm 선택 가능. 같은 SKU가 MEN/WOMEN 목록에 함께 보이나 상품 자체 성별 명시는 미확인이라 남녀 전용·공용을 확정하지 않습니다. 다른 한국4E 상품도 미확인입니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/mizuno-hyperwarp-pure-review-2026/',
      text: '한국 공시는 270mm 한쪽 약137g·34.5/31.5mm·3mm입니다. 독립 랩 실측이 아니며 상세 이미지의 제조년월은 출시일이 아닙니다. DOR 소개는 남성 US9 139g·34/30.5mm·3.5mm입니다. 한국 공시 34.5/31.5mm·3mm·270mm 한쪽 약137g과 DOR 34/30.5mm·3.5mm·남성 US9 139g은 다릅니다. RR 독립 실측을 확보하지 못해 어느 공시도 실측으로 승격하지 않습니다. 다른 PEBA의450km 연구를 이 모델200km 수명이나 풀코스30km 후 쿠션 소진 증거로 쓰지 않습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/mizuno-hyperwarp-pure-review-2026/',
      text: 'DOR David(남성 US9.5)는 정사이즈, 넓은 중족골 부위와 빠른 발가락 테이퍼·좋은 고정을 느꼈으며 본인의 종아리 부담을 더 느꼈다고 적었습니다. Andrea는 평소 여성 US9.5에서 US10으로 올렸어도 앞길이 여유가 크지 않았지만 높이·앞볼·고정은 편했다고 적었습니다. 개인의 착지·사이징 경험으로 모든 러너의 10km 상한이나 반업 필수를 정하지 않습니다.',
    },
  ],
  similarShoes: [
    'asics-metaspeed-ray',
    'nike-streakfly-2',
    'mizuno-hyperwarp-elite',
  ],
  relatedPosts: [
    {
      slug: 'running-shoe-plate-guide-2026',
      title: '플레이트 완전 해설 — 카본·유리섬유·나일론',
    },
  ],
  purchaseLinks: [
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 J1GC268799 · 보통2E',
        url: 'https://kor.mizuno.com/product/detail.html?product_no=12335&cate_no=803&display_group=1&mall=sports',
        note: '정가·표시 할인은 확인 상품 범위. 실제 재고는 변동 가능.',
      },
      {
        label: 'J1GC268799 공식 상세 이미지',
        url: 'https://kor.mizuno.com/web/product/26aw_detail_page/J1GC268799-D.jpg',
        note: '270mm 한쪽 무게·굽높이·offset·2E 확인. 제조년월은 출시일 아님.',
      },
      {
        label: '한국 J1GC267081 · 보통2E',
        url: 'https://kor.mizuno.com/product/detail.html?product_no=12097&cate_no=803&display_group=1&mall=sports',
        note: '정가·표시 할인은 확인 상품 범위. 실제 재고는 변동 가능.',
      },
      {
        label: 'J1GC267081 공식 상세 이미지',
        url: 'https://cafe24img.poxo.com/mizunokorea/web/product/26aw_detail_page/J1GC267081-D.jpg',
        note: '270mm 한쪽 무게·굽높이·offset·2E 확인. 제조년월은 출시일 아님.',
      },
      {
        label: 'RunRepeat 자체 검색 확인 범위',
        url: 'https://runrepeat.com/search?q=Hyperwarp',
        note: '동세대 정확모델 랩 미확보. 후속 Elite2/Pure2를 전용하지 않음.',
      },
      {
        label: 'RunRepeat 정확 모델 테스트 계획 확인 범위',
        url: 'https://runrepeat.com/shoe-pipeline',
        note: 'Pro=Will be tested. Elite2/Pure2는 초대와 별개 모델.',
      },
      {
        label: 'Doctors of Running 동세대 원문',
        url: 'https://www.doctorsofrunning.com/mizuno-hyperwarp-pure-review-2026/',
        note: '한국 공시는 270mm 한쪽 약137g·34.5/31.5mm·3mm입니다. 독립 랩 실측이 아니며 상세 이미지의 제조년월은 출시일이 아닙니다. DOR 소개는 남성 US9 139g·34/30.5mm·3.5mm입니다.',
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
