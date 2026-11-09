import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'mizuno-hyperwarp-pro',
  slug: 'mizuno-hyperwarp-pro',
  brand: 'Mizuno',
  name: '하이퍼워프 프로',
  image: '/images/shoes/mizuno/hyperwarppro/side.webp',
  images: [
    '/images/shoes/mizuno/hyperwarppro/side.webp',
    '/images/shoes/mizuno/hyperwarppro/top.webp',
    '/images/shoes/mizuno/hyperwarppro/outsole.webp',
    '/images/shoes/mizuno/hyperwarppro/front.webp',
    '/images/shoes/mizuno/hyperwarppro/back.webp',
  ],
  category: '레이싱',
  rating: 4,
  price: 249000,
  description: 'ENERZY XP · 카본 혼합 나일론 판재(DOR) 구조의 하이퍼워프 프로. 한국 제조사 공시·270mm 한쪽 (독립 실측 아님) 200g·39/33.5mm. 한국 확인 가격 249,000원.',
  oneliner: 'ENERZY XP · 카본 혼합 나일론 판재(DOR) · 200g (한국 제조사 공시·270mm 한쪽 (독립 실측 아님))',
  editorComment: '2026-11-09 원문 재확인. 한국 확인 두 상품은 보통(2E), 정가 249,000원·확인시 판매 199,200원입니다. J1GC268999: 250/255/260/265/270/275/280/285mm 선택 가능; J1GC267281: 250/255/260/265/270/275/280/285/290mm 선택 가능. 같은 SKU가 MEN/WOMEN 목록에 함께 보이나 상품 자체 성별 명시는 미확인이라 남녀 전용·공용을 확정하지 않습니다. 다른 한국4E 상품도 미확인입니다. 한국 공시는 270mm 한쪽 약200g·39/33.5mm·5.5mm입니다. 독립 랩 실측이 아니며 상세 이미지의 제조년월은 출시일이 아닙니다. DOR 소개는 남성 US9/여성 US10.5 201g·39/33.5mm·5.5mm입니다. 한국270mm 한쪽 약200g과 DOR 남성 US9/여성 US10.5 소개201g은 다른 조건입니다. DOR는 ENERZY XP를 supercritical TPEE로 설명합니다. 이를 모든 PEBA보다 안정적이라고 단정하지 않습니다. RR 정확모델 파이프라인은 Will be tested이며 독립 랩 수치·400km 수명·108mm 발볼 임계값은 미확인으로 제거했습니다. DOR Matt(남성 US10)은 약간 짧고 낮은 볼륨·혀 뭉침·끈 압박·측면 움직임을 느꼈습니다. 외측 플레어·판재 연장에 의한 힐·중족의 거친 전환과 안쪽 밀림은 불편했다고 적었습니다. Andrea는 평소 여성 US9.5에서 US10으로 올린 뒤 폭·볼륨·고정이 편했고 같은 플레어가 자신의 외측 중족 착지에 잘 맞았다고 적었습니다. 서로 반대인 체감을 평균내어 발목 불안정 러너에게 추천하지 않습니다. 정확한 동세대 RR의 내부 최광폭·엄지 너비·높이는 미확인입니다. 한국 기본2E를 독립 검체 치수나 모든 넓은 발의 적합성으로 바꾸지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '레이싱',
    '슈퍼트레이너',
    '카본',
    '겸용',
  ],
  specs: {
    weight: 200,
    cushioning: 8,
    responsiveness: 8,
    stability: 6,
    drop: 5.5,
  },
  biomechanics: {
    stackHeight: {
      heel: 39,
      forefoot: 33.5,
    },
    drop: 5.5,
    carbonPlate: true,
    plateType: 'carbon-infused nylon (DOR); not pure carbon fiber',
    midsoleType: 'ENERZY XP · 카본 혼합 나일론 판재(DOR)',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
    winterCompatibility: 'good',
    summerCompatibility: 'good',
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
    'ENERZY XP · 카본 혼합 나일론 판재(DOR)',
    '200g · 39/33.5mm · 드롭 5.5mm (한국 제조사 공시·270mm 한쪽 (독립 실측 아님))',
    '한국 공식 명칭은 Mizuno Wave, DOR는 carbon-infused nylon plate입니다. 순수 카본 섬유와 구분하고 함량·정확 조성은 미확인으로 둡니다.',
    '정확한 동세대 RR의 내부 최광폭·엄지 너비·높이는 미확인입니다. 한국 기본2E를 독립 검체 치수나 모든 넓은 발의 적합성으로 바꾸지 않습니다.',
  ],
  priceAnalysis: {
    msrp: 249000,
    valueRating: 7,
    priceTier: 'super-premium',
    alternatives: [
      'hoka-mach-x-3',
      'asics-superblast-2',
      'saucony-endorphin-trainer',
    ],
  },
  detailedSpecs: {
    weight: '200g (한국 제조사 공시·270mm 한쪽 (독립 실측 아님)). 한국 공시는 270mm 한쪽 약200g·39/33.5mm·5.5mm입니다. 독립 랩 실측이 아니며 상세 이미지의 제조년월은 출시일이 아닙니다. DOR 소개는 남성 US9/여성 US10.5 201g·39/33.5mm·5.5mm입니다.',
    stackHeight: '39/33.5mm (한국 제조사 공시·270mm 한쪽 (독립 실측 아님), 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '5.5mm (한국 제조사 공시·270mm 한쪽 (독립 실측 아님)). 한국 공시는 270mm 한쪽 약200g·39/33.5mm·5.5mm입니다. 독립 랩 실측이 아니며 상세 이미지의 제조년월은 출시일이 아닙니다. DOR 소개는 남성 US9/여성 US10.5 201g·39/33.5mm·5.5mm입니다.',
    midsole: 'ENERZY XP · 카본 혼합 나일론 판재(DOR). 독립 랩 SA·에너지 리턴·AC/HA 미확인. 한국270mm 한쪽 약200g과 DOR 남성 US9/여성 US10.5 소개201g은 다른 조건입니다. DOR는 ENERZY XP를 supercritical TPEE로 설명합니다. 이를 모든 PEBA보다 안정적이라고 단정하지 않습니다. RR 정확모델 파이프라인은 Will be tested이며 독립 랩 수치·400km 수명·108mm 발볼 임계값은 미확인으로 제거했습니다.',
    plate: '한국 공식 명칭은 Mizuno Wave, DOR는 carbon-infused nylon plate입니다. 순수 카본 섬유와 구분하고 함량·정확 조성은 미확인으로 둡니다.',
    width: '동세대 독립 랩 내부 치수 미확인. 정확한 동세대 RR의 내부 최광폭·엄지 너비·높이는 미확인입니다. 한국 기본2E를 독립 검체 치수나 모든 넓은 발의 적합성으로 바꾸지 않습니다.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 확인 두 상품은 보통(2E), 정가 249,000원·확인시 판매 199,200원입니다. J1GC268999: 250/255/260/265/270/275/280/285mm 선택 가능; J1GC267281: 250/255/260/265/270/275/280/285/290mm 선택 가능. 같은 SKU가 MEN/WOMEN 목록에 함께 보이나 상품 자체 성별 명시는 미확인이라 남녀 전용·공용을 확정하지 않습니다. 다른 한국4E 상품도 미확인입니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/mizuno-hyperwarp-pro-review-2026/',
      text: '한국 공시는 270mm 한쪽 약200g·39/33.5mm·5.5mm입니다. 독립 랩 실측이 아니며 상세 이미지의 제조년월은 출시일이 아닙니다. DOR 소개는 남성 US9/여성 US10.5 201g·39/33.5mm·5.5mm입니다. 한국270mm 한쪽 약200g과 DOR 남성 US9/여성 US10.5 소개201g은 다른 조건입니다. DOR는 ENERZY XP를 supercritical TPEE로 설명합니다. 이를 모든 PEBA보다 안정적이라고 단정하지 않습니다. RR 정확모델 파이프라인은 Will be tested이며 독립 랩 수치·400km 수명·108mm 발볼 임계값은 미확인으로 제거했습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/mizuno-hyperwarp-pro-review-2026/',
      text: 'DOR Matt(남성 US10)은 약간 짧고 낮은 볼륨·혀 뭉침·끈 압박·측면 움직임을 느꼈습니다. 외측 플레어·판재 연장에 의한 힐·중족의 거친 전환과 안쪽 밀림은 불편했다고 적었습니다. Andrea는 평소 여성 US9.5에서 US10으로 올린 뒤 폭·볼륨·고정이 편했고 같은 플레어가 자신의 외측 중족 착지에 잘 맞았다고 적었습니다. 서로 반대인 체감을 평균내어 발목 불안정 러너에게 추천하지 않습니다.',
    },
  ],
  similarShoes: [
    'hoka-mach-x-3',
    'asics-superblast-2',
    'saucony-endorphin-trainer',
    'mizuno-hyperwarp-elite',
  ],
  relatedPosts: [
    {
      slug: 'running-shoe-plate-guide-2026',
      title: '플레이트 완전 해설 — 카본·유리섬유·나일론',
    },
  ],
  purchaseLinks: [
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5YIuv3ECO',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 J1GC268999 · 보통2E',
        url: 'https://kor.mizuno.com/product/detail.html?product_no=12337&cate_no=803&display_group=1&mall=sports',
        note: '정가·표시 할인은 확인 상품 범위. 실제 재고는 변동 가능.',
      },
      {
        label: 'J1GC268999 공식 상세 이미지',
        url: 'https://kor.mizuno.com/web/product/26aw_detail_page/J1GC268999-D.jpg',
        note: '270mm 한쪽 무게·굽높이·offset·2E 확인. 제조년월은 출시일 아님.',
      },
      {
        label: '한국 J1GC267281 · 보통2E',
        url: 'https://kor.mizuno.com/product/detail.html?product_no=12099&cate_no=803&display_group=1&mall=sports',
        note: '정가·표시 할인은 확인 상품 범위. 실제 재고는 변동 가능.',
      },
      {
        label: 'J1GC267281 공식 상세 이미지',
        url: 'https://cafe24img.poxo.com/mizunokorea/web/product/26aw_detail_page/J1GC267281-D.jpg',
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
        url: 'https://www.doctorsofrunning.com/mizuno-hyperwarp-pro-review-2026/',
        note: '한국 공시는 270mm 한쪽 약200g·39/33.5mm·5.5mm입니다. 독립 랩 실측이 아니며 상세 이미지의 제조년월은 출시일이 아닙니다. DOR 소개는 남성 US9/여성 US10.5 201g·39/33.5mm·5.5mm입니다.',
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
