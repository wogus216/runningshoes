import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'mizuno-neo-vista-3',
  slug: 'mizuno-neo-vista-3',
  brand: 'Mizuno',
  name: '네오 비스타 3',
  category: '데일리',
  price: 219000,
  image: '/images/shoes/mizuno/neo-vista-3/side.webp',
  description: 'ENERZY NXT 이중폼 · 유리섬유 보강 Wave Plate 구조의 네오 비스타 3. RunRepeat 실험실 검체 266g·43.5/35mm. 한국 확인 가격 219,000원.',
  oneliner: 'ENERZY NXT 이중폼 · 유리섬유 보강 Wave Plate · 266g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-09 원문 재확인. 한국 남성 J1GM261051·여성 J1GW261071은 보통(2E), 정가 219,000원입니다. 확인 남성 상품은 255~285mm·295mm, 여성은 230~250mm가 선택 가능이었습니다. 별도 한국 와이드 SKU는 미확인이며 기본 2E를 SW로 바꾸어 부르지 않습니다. 한국 한쪽 약 265g(남성 27cm)·220g(여성 24.5cm), 44.5/36.5mm·8mm입니다. DOR 소개 272g(남성 US9)·224g(여성 US8), 50/42mm·8mm와 RR 266g·43.5/35.0mm·8.5mm는 큰 차이가 있어 그대로 구분합니다. RR 19.8AC·보조 30.1AC의 층 위치는 미확인입니다. DOR는 위 TPU·아래 EVA로 설명하며 RR의 A-TPU 제안을 일반 TPU가 없다는 증거로 쓰지 않습니다. BR83·건조율62%는 구방식 통기 1~5와 다른 시험이며 한국 여름 내내 쾌적함을 보장하지 않습니다. 마모 0.7mm·힐 패딩 1/5를 500km 수명으로 바꾸지 않습니다. DOR Matt(남성 US10/JP28.0)은 길이는 맞았지만 낮은 볼륨의 테이퍼 니트·발등 압박·코너에서 측면 슬립과 힐 패딩의 아킬레스 압박을 느꼈습니다. 편집자 주석은 해당 부위가 민감하지 않은 팀원들은 문제없었다고 적어 개인차를 남깁니다. Matt은 외측 폼의 압축과 자신의 외측 하퇴 피로, 홈의 자갈 끼임도 언급했습니다. RR 내부 최광폭 95.2mm·엄지 71.7mm·높이 29.4mm와 니트 어퍼의 체감은 다른 정보입니다. 측정 높이만으로 아킬레스·발등의 편안함을 보장하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '데일리',
    '슈퍼트레이너',
    '쿠셔닝',
    'Enerzy NXT',
    '신상',
  ],
  specs: {
    weight: 266,
    cushioning: 10,
    responsiveness: 7,
    stability: 5,
    drop: 8.5,
  },
  biomechanics: {
    stackHeight: {
      heel: 43.5,
      forefoot: 35,
    },
    drop: 8.5,
    carbonPlate: false,
    midsoleType: 'ENERZY NXT 이중폼 · 유리섬유 보강 Wave Plate',
    plateType: 'split glass-fiber-infused nylon Wave Plate (DOR)',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
  },
  targetUsers: {
    recommended: [
      'Wave Plate·니트·이중폼의 전환을 비교하려는 러너',
      '발등·힐 패딩 압박과 코너 고정을 직접 확인하려는 러너',
    ],
    notRecommended: [
      '실제 착화에서 아킬레스·발등 압박이나 측면 슬립이 생기는 경우',
      'DOR 스택 50/42mm를 독립 실측으로 소개한 매물',
    ],
  },
  features: [
    'ENERZY NXT 이중폼 · 유리섬유 보강 Wave Plate',
    '266g · 43.5/35mm · 드롭 8.5mm (RunRepeat 실험실 검체)',
    'RR는 fiberglass Wave Plate, DOR는 전장 glass-fiber-infused nylon 분기형 판재로 설명합니다. 정확 조성의 화학 분석이나 카본 플레이트로 표시하지 않습니다.',
    'RR 내부 최광폭 95.2mm·엄지 71.7mm·높이 29.4mm와 니트 어퍼의 체감은 다른 정보입니다. 측정 높이만으로 아킬레스·발등의 편안함을 보장하지 않습니다.',
  ],
  priceAnalysis: {
    msrp: 219000,
    priceTier: 'premium',
    alternatives: [
      'asics-superblast-3',
      'adidas-hyperboost-edge',
      'mizuno-wave-sky-9',
    ],
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/mizuno-neo-vista-3',
      text: '한국 한쪽 약 265g(남성 27cm)·220g(여성 24.5cm), 44.5/36.5mm·8mm입니다. DOR 소개 272g(남성 US9)·224g(여성 US8), 50/42mm·8mm와 RR 266g·43.5/35.0mm·8.5mm는 큰 차이가 있어 그대로 구분합니다. RR 19.8AC·보조 30.1AC의 층 위치는 미확인입니다. DOR는 위 TPU·아래 EVA로 설명하며 RR의 A-TPU 제안을 일반 TPU가 없다는 증거로 쓰지 않습니다. BR83·건조율62%는 구방식 통기 1~5와 다른 시험이며 한국 여름 내내 쾌적함을 보장하지 않습니다. 마모 0.7mm·힐 패딩 1/5를 500km 수명으로 바꾸지 않습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/mizuno-neo-vista-3-review/',
      text: 'DOR Matt(남성 US10/JP28.0)은 길이는 맞았지만 낮은 볼륨의 테이퍼 니트·발등 압박·코너에서 측면 슬립과 힐 패딩의 아킬레스 압박을 느꼈습니다. 편집자 주석은 해당 부위가 민감하지 않은 팀원들은 문제없었다고 적어 개인차를 남깁니다. Matt은 외측 폼의 압축과 자신의 외측 하퇴 피로, 홈의 자갈 끼임도 언급했습니다.',
    },
  ],
  detailedSpecs: {
    weight: '266g (RunRepeat 실험실 검체). 한국 한쪽 약 265g(남성 27cm)·220g(여성 24.5cm), 44.5/36.5mm·8mm입니다. DOR 소개 272g(남성 US9)·224g(여성 US8), 50/42mm·8mm와 RR 266g·43.5/35.0mm·8.5mm는 큰 차이가 있어 그대로 구분합니다.',
    stackHeight: '43.5/35mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '8.5mm (RunRepeat 실험실 검체). 한국 한쪽 약 265g(남성 27cm)·220g(여성 24.5cm), 44.5/36.5mm·8mm입니다. DOR 소개 272g(남성 US9)·224g(여성 US8), 50/42mm·8mm와 RR 266g·43.5/35.0mm·8.5mm는 큰 차이가 있어 그대로 구분합니다.',
    midsole: 'ENERZY NXT 이중폼 · 유리섬유 보강 Wave Plate. 주폼 19.8AC·보조 30.1AC, 힐/전족부 SA 167/133·에너지 리턴 57.7/57.1%. RR 19.8AC·보조 30.1AC의 층 위치는 미확인입니다. DOR는 위 TPU·아래 EVA로 설명하며 RR의 A-TPU 제안을 일반 TPU가 없다는 증거로 쓰지 않습니다. BR83·건조율62%는 구방식 통기 1~5와 다른 시험이며 한국 여름 내내 쾌적함을 보장하지 않습니다. 마모 0.7mm·힐 패딩 1/5를 500km 수명으로 바꾸지 않습니다.',
    plate: 'RR는 fiberglass Wave Plate, DOR는 전장 glass-fiber-infused nylon 분기형 판재로 설명합니다. 정확 조성의 화학 분석이나 카본 플레이트로 표시하지 않습니다.',
    width: 'RR 내부 최광폭 95.2mm·엄지 부위 71.7mm·높이 29.4mm. RR 내부 최광폭 95.2mm·엄지 71.7mm·높이 29.4mm와 니트 어퍼의 체감은 다른 정보입니다. 측정 높이만으로 아킬레스·발등의 편안함을 보장하지 않습니다.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 남성 J1GM261051·여성 J1GW261071은 보통(2E), 정가 219,000원입니다. 확인 남성 상품은 255~285mm·295mm, 여성은 230~250mm가 선택 가능이었습니다. 별도 한국 와이드 SKU는 미확인이며 기본 2E를 SW로 바꾸어 부르지 않습니다.',
  },
  similarShoes: [
    'mizuno-wave-sky-9',
    'asics-superblast-3',
    'adidas-hyperboost-edge',
    'mizuno-wave-rider-29',
  ],
  relatedPosts: [
    {
      slug: 'mizuno-neo-vista-3-review-2026',
      title: '네오 비스타 3 심층 후기',
    },
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/xRg8g5ta',
    },
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5YJar4ohg',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 J1GM261051 · 보통(2E)',
        url: 'https://kor.mizuno.com/product/detail.html?product_no=12063&cate_no=803&display_group=1',
        note: '정가 219,000원. 실제 확인 사이즈 범위는 본문 참조.',
      },
      {
        label: 'J1GM261051 공식 상세 이미지',
        url: 'https://kor.mizuno.com/web/product/26aw_detail_page/J1GM261051-D.jpg',
        note: '무게 기준 사이즈·2E·높이 확인.',
      },
      {
        label: '한국 J1GW261071 · 보통(2E)',
        url: 'https://kor.mizuno.com/product/detail.html?product_no=12068&cate_no=821&display_group=1',
        note: '정가 219,000원. 실제 확인 사이즈 범위는 본문 참조.',
      },
      {
        label: 'J1GW261071 공식 상세 이미지',
        url: 'https://kor.mizuno.com/web/product/26aw_detail_page/J1GW261071-D.jpg',
        note: '무게 기준 사이즈·2E·높이 확인.',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://runrepeat.com/mizuno-neo-vista-3',
        note: '공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 266g·43.5/35mm·8.5mm. RR 19.8AC·보조 30.1AC의 층 위치는 미확인입니다. DOR는 위 TPU·아래 EVA로 설명하며 RR의 A-TPU 제안을 일반 TPU가 없다는 증거로 쓰지 않습니다. BR83·건조율62%는 구방식 통기 1~5와 다른 시험이며 한국 여름 내내 쾌적함을 보장하지 않습니다. 마모 0.7mm·힐 패딩 1/5를 500km 수명으로 바꾸지 않습니다.',
      },
      {
        label: 'Doctors of Running 동세대 원문',
        url: 'https://www.doctorsofrunning.com/mizuno-neo-vista-3-review/',
        note: '한국 한쪽 약 265g(남성 27cm)·220g(여성 24.5cm), 44.5/36.5mm·8mm입니다. DOR 소개 272g(남성 US9)·224g(여성 US8), 50/42mm·8mm와 RR 266g·43.5/35.0mm·8.5mm는 큰 차이가 있어 그대로 구분합니다.',
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
