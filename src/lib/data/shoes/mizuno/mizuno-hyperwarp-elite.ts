import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'mizuno-hyperwarp-elite',
  slug: 'mizuno-hyperwarp-elite',
  brand: 'Mizuno',
  name: '하이퍼워프 엘리트',
  image: '/images/shoes/mizuno/hyperwarpelit/side.webp',
  images: [
    '/images/shoes/mizuno/hyperwarpelit/side.webp',
    '/images/shoes/mizuno/hyperwarpelit/top.webp',
    '/images/shoes/mizuno/hyperwarpelit/outsole.webp',
    '/images/shoes/mizuno/hyperwarpelit/front.webp',
    '/images/shoes/mizuno/hyperwarpelit/back.webp',
  ],
  category: '레이싱',
  rating: 5,
  price: 279000,
  description: 'ENERZY XP 이중층 · 전장 카본 구조의 하이퍼워프 엘리트. 한국 제조사 공시·270mm 한쪽 (독립 실측 아님) 170g·38/34.5mm. 한국 확인 가격 279,000원.',
  oneliner: 'ENERZY XP 이중층 · 전장 카본 · 170g (한국 제조사 공시·270mm 한쪽 (독립 실측 아님))',
  editorComment: '2026-11-09 원문 재확인. 한국 확인 두 상품은 보통(2E), 정가 279,000원·확인시 판매 223,200원입니다. J1GC268899: 240/250/255/260/265/270/275/280/285mm 선택 가능; J1GC267181: 240/245/250/255/260/265/270/275/280/285/295mm 선택 가능. 같은 SKU가 MEN/WOMEN 목록에 함께 보이나 상품 자체 성별 명시는 미확인이라 남녀 전용·공용을 확정하지 않습니다. 다른 한국4E 상품도 미확인입니다. 한국 공시는 270mm 한쪽 약170g·38/34.5mm·3.5mm입니다. 독립 랩 실측이 아니며 상세 이미지의 제조년월은 출시일이 아닙니다. DOR 소개는 남성 US9 164g·38/34.5mm·3.5mm입니다. DOR는 ENERZY XP를 PEBA·supercritical TPE/TPEE 이중경도로 설명해 일반 TPE와 상세 TPEE 표기를 보존합니다. 다른 폼의 640km 시험을 이 모델의 수명이나 개인의 무릎 보호로 전용하지 않습니다. 기존 300km·km당 비용과 Sub3~3:30 공통 추천을 철회했습니다. DOR David(남성 US9.5)는 정사이즈, 밀착되는 뒤쪽과 넓지만 빠르게 테이퍼되는 앞쪽을 느꼈습니다. 피로할 때 뒤꿈치 쪽으로 착지하며 더 이른 로커를 원했습니다. Andrea는 평소 여성 US9.5에서 US10으로 올린 뒤 편안한 길이·폭·고정을 느꼈고 피로한 날도 긍정적으로 평가했습니다. 두 경험을 풀코스 후반 보호나 공통 반업 처방으로 합치지 않습니다. 정확한 동세대 RR의 내부 최광폭·엄지 너비·높이는 미확인입니다. 한국 기본2E를 독립 검체 치수나 모든 넓은 발의 적합성으로 바꾸지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '레이싱',
    '카본',
    'PEBA',
    '마라톤',
    '엘리트',
  ],
  specs: {
    weight: 170,
    cushioning: 7,
    responsiveness: 9,
    stability: 5,
    drop: 3.5,
  },
  biomechanics: {
    stackHeight: {
      heel: 38,
      forefoot: 34.5,
    },
    drop: 3.5,
    carbonPlate: true,
    plateType: 'full-length carbon (official/DOR)',
    midsoleType: 'ENERZY XP 이중층 · 전장 카본',
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
    winterCompatibility: 'fair',
    summerCompatibility: 'excellent',
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
    'ENERZY XP 이중층 · 전장 카본',
    '170g · 38/34.5mm · 드롭 3.5mm (한국 제조사 공시·270mm 한쪽 (독립 실측 아님))',
    '공식 Smooth Speed Plate/3D carbon plate, DOR 전장 카본 설명. 정확한 카본 함량과 폼의 화학 분석은 미확인입니다.',
    '정확한 동세대 RR의 내부 최광폭·엄지 너비·높이는 미확인입니다. 한국 기본2E를 독립 검체 치수나 모든 넓은 발의 적합성으로 바꾸지 않습니다.',
  ],
  priceAnalysis: {
    msrp: 279000,
    valueRating: 6,
    priceTier: 'super-premium',
    alternatives: [
      'nike-vaporfly-4',
      'asics-metaspeed-sky-plus',
      'saucony-endorphin-pro-5',
    ],
  },
  detailedSpecs: {
    weight: '170g (한국 제조사 공시·270mm 한쪽 (독립 실측 아님)). 한국 공시는 270mm 한쪽 약170g·38/34.5mm·3.5mm입니다. 독립 랩 실측이 아니며 상세 이미지의 제조년월은 출시일이 아닙니다. DOR 소개는 남성 US9 164g·38/34.5mm·3.5mm입니다.',
    stackHeight: '38/34.5mm (한국 제조사 공시·270mm 한쪽 (독립 실측 아님), 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '3.5mm (한국 제조사 공시·270mm 한쪽 (독립 실측 아님)). 한국 공시는 270mm 한쪽 약170g·38/34.5mm·3.5mm입니다. 독립 랩 실측이 아니며 상세 이미지의 제조년월은 출시일이 아닙니다. DOR 소개는 남성 US9 164g·38/34.5mm·3.5mm입니다.',
    midsole: 'ENERZY XP 이중층 · 전장 카본. 독립 랩 SA·에너지 리턴·AC/HA 미확인. DOR는 ENERZY XP를 PEBA·supercritical TPE/TPEE 이중경도로 설명해 일반 TPE와 상세 TPEE 표기를 보존합니다. 다른 폼의 640km 시험을 이 모델의 수명이나 개인의 무릎 보호로 전용하지 않습니다. 기존 300km·km당 비용과 Sub3~3:30 공통 추천을 철회했습니다.',
    plate: '공식 Smooth Speed Plate/3D carbon plate, DOR 전장 카본 설명. 정확한 카본 함량과 폼의 화학 분석은 미확인입니다.',
    width: '동세대 독립 랩 내부 치수 미확인. 정확한 동세대 RR의 내부 최광폭·엄지 너비·높이는 미확인입니다. 한국 기본2E를 독립 검체 치수나 모든 넓은 발의 적합성으로 바꾸지 않습니다.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 확인 두 상품은 보통(2E), 정가 279,000원·확인시 판매 223,200원입니다. J1GC268899: 240/250/255/260/265/270/275/280/285mm 선택 가능; J1GC267181: 240/245/250/255/260/265/270/275/280/285/295mm 선택 가능. 같은 SKU가 MEN/WOMEN 목록에 함께 보이나 상품 자체 성별 명시는 미확인이라 남녀 전용·공용을 확정하지 않습니다. 다른 한국4E 상품도 미확인입니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/mizuno-hyperwarp-elite-review-2026/',
      text: '한국 공시는 270mm 한쪽 약170g·38/34.5mm·3.5mm입니다. 독립 랩 실측이 아니며 상세 이미지의 제조년월은 출시일이 아닙니다. DOR 소개는 남성 US9 164g·38/34.5mm·3.5mm입니다. DOR는 ENERZY XP를 PEBA·supercritical TPE/TPEE 이중경도로 설명해 일반 TPE와 상세 TPEE 표기를 보존합니다. 다른 폼의 640km 시험을 이 모델의 수명이나 개인의 무릎 보호로 전용하지 않습니다. 기존 300km·km당 비용과 Sub3~3:30 공통 추천을 철회했습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/mizuno-hyperwarp-elite-review-2026/',
      text: 'DOR David(남성 US9.5)는 정사이즈, 밀착되는 뒤쪽과 넓지만 빠르게 테이퍼되는 앞쪽을 느꼈습니다. 피로할 때 뒤꿈치 쪽으로 착지하며 더 이른 로커를 원했습니다. Andrea는 평소 여성 US9.5에서 US10으로 올린 뒤 편안한 길이·폭·고정을 느꼈고 피로한 날도 긍정적으로 평가했습니다. 두 경험을 풀코스 후반 보호나 공통 반업 처방으로 합치지 않습니다.',
    },
  ],
  similarShoes: [
    'nike-vaporfly-4',
    'asics-metaspeed-sky-plus',
    'mizuno-hyperwarp-pure',
    'mizuno-hyperwarp-pro',
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
        label: '한국 J1GC268899 · 보통2E',
        url: 'https://kor.mizuno.com/product/detail.html?product_no=12336&cate_no=803&display_group=1&mall=sports',
        note: '정가·표시 할인은 확인 상품 범위. 실제 재고는 변동 가능.',
      },
      {
        label: 'J1GC268899 공식 상세 이미지',
        url: 'https://kor.mizuno.com/web/product/26aw_detail_page/J1GC268899-D.jpg',
        note: '270mm 한쪽 무게·굽높이·offset·2E 확인. 제조년월은 출시일 아님.',
      },
      {
        label: '한국 J1GC267181 · 보통2E',
        url: 'https://kor.mizuno.com/product/detail.html?product_no=12098&cate_no=803&display_group=1&mall=sports',
        note: '정가·표시 할인은 확인 상품 범위. 실제 재고는 변동 가능.',
      },
      {
        label: 'J1GC267181 공식 상세 이미지',
        url: 'https://cafe24img.poxo.com/mizunokorea/web/product/26aw_detail_page/J1GC267181-D.jpg',
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
        url: 'https://www.doctorsofrunning.com/mizuno-hyperwarp-elite-review-2026/',
        note: '한국 공시는 270mm 한쪽 약170g·38/34.5mm·3.5mm입니다. 독립 랩 실측이 아니며 상세 이미지의 제조년월은 출시일이 아닙니다. DOR 소개는 남성 US9 164g·38/34.5mm·3.5mm입니다.',
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
