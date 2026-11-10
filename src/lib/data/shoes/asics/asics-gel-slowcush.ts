import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-10. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'asics-gel-slowcush',
  slug: 'asics-gel-slowcush',
  brand: 'Asics',
  name: '젤 슬로우쿠시',
  category: '쿠션화',
  rating: 4,
  image: '/images/shoes/asics/gelslowcush/side.webp',
  images: [
    '/images/shoes/asics/gelslowcush/side.webp',
    '/images/shoes/asics/gelslowcush/angle.webp',
    '/images/shoes/asics/gelslowcush/front.webp',
    '/images/shoes/asics/gelslowcush/back.webp',
    '/images/shoes/asics/gelslowcush/top.webp',
    '/images/shoes/asics/gelslowcush/outsole.webp',
  ],
  description: 'FF Luxe Plus · 넓은 바닥과 로커 구조의 젤 슬로우쿠시. DOR 소개 공시 · 독립 랩 미확인 298g·48/40mm. 한국 현재 정가 미확인.',
  oneliner: 'FF Luxe Plus · 넓은 바닥과 로커 · 298g (DOR 소개 공시 · 독립 랩 미확인)',
  editorComment: '2026-11-10 원문 재확인. 한국 공식 캐시: Unisex 1013A187.250 폭 미확인 표시249,000원. 현재 가격·선택 재고·숫자 폭 규격은 미확인입니다. 일반 사이즈 환산표·공통2E/4E 내비게이션·장바구니 버튼을 정확 모델 재고나 폭 증거로 쓰지 않습니다. 298g(유니섹스 남성US9/여성US10.5)·48/40mm·8mm는 DOR 소개 공시입니다. 정확 RR 독립 랩·내부 치수는 미확인이며 한국 확인 문서의 실측으로 바꾸지 않습니다. 이 묶음에서RTINGS 수치·PureGEL PLUS·AHAR+·10월7일 한국 발매를 새로 검증하지 못해 확정 정보로 반복하지 않습니다. 아킬레스 재활 체감을 보편적 부담 감소·무릎 압력 증가의 임상 법칙으로 바꾸지 않습니다.500km·단일폭부재·6~8분/km 처방을 제거했습니다. DOR Matt(남성US10/JP28/EU44)는 넓고 늘어나는 메시지만 낮은 앞발 볼륨·발등, 강한 거싯 혀와 밀착 패딩 힐을 적었습니다. 부드럽고 제어되는 탄성과 매끄러운 로커는 이지·롱런에서 좋았으나 속도 활용은 적었습니다.35마일의 약한 마모는 수명 시험이 아니며 성긴 Hybrid ASICSGRIP·노출 폼은 거친 표면에서 제한이 있었습니다. 정확 모델의 독립 내부 치수는 미확인입니다. 실제 상품에서 앞코 높이·길이·발등과 힐 고정을 확인하세요. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '쿠션화',
    '맥시멀',
    '회복런',
    '이지런',
    '로커',
    '신상',
  ],
  specs: {
    weight: 298,
    cushioning: 10,
    responsiveness: 4,
    stability: 7,
    drop: 8,
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },
  targetUsers: {
    recommended: [
      '실제 규격에서 낮은 앞코·중족·힐 고정을 비교하려는 러너',
      '공시·랩·개인 체감과 원문 상충을 구분하려는 러너',
    ],
    notRecommended: [
      '시착에서 압박·마찰·불편한 전환이 남는 경우',
      '국소 마모·개인 경험을 공통 수명·임상 효과로 읽는 경우',
    ],
  },
  priceAnalysis: {
    valueRating: 5,
    priceTier: 'premium',
    alternatives: [
      'brooks-glycerin-max-2',
      'saucony-paramount-max',
      'hoka-bondi-9',
    ],
  },
  features: [
    'FF Luxe Plus · 넓은 바닥과 로커',
    '298g · 48/40mm · 드롭 8mm (DOR 소개 공시 · 독립 랩 미확인)',
    'DOR은 정확 폼 조성을 제조사로부터 듣지 못했다고 밝힙니다. 임의로PEBA/TPEE/EVA라고 채우지 않으며 별도 플레이트 유무도 이번 재확인 범위에서는 미확인입니다.',
    '정확 모델의 독립 내부 치수는 미확인입니다. 실제 상품에서 앞코 높이·길이·발등과 힐 고정을 확인하세요.',
  ],
  detailedSpecs: {
    weight: '298g (DOR 소개 공시 · 독립 랩 미확인). 298g(유니섹스 남성US9/여성US10.5)·48/40mm·8mm는 DOR 소개 공시입니다. 정확 RR 독립 랩·내부 치수는 미확인이며 한국 확인 문서의 실측으로 바꾸지 않습니다.',
    stackHeight: '48/40mm (DOR 소개 공시 · 독립 랩 미확인, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '8mm (DOR 소개 공시 · 독립 랩 미확인). 298g(유니섹스 남성US9/여성US10.5)·48/40mm·8mm는 DOR 소개 공시입니다. 정확 RR 독립 랩·내부 치수는 미확인이며 한국 확인 문서의 실측으로 바꾸지 않습니다.',
    midsole: 'FF Luxe Plus · 넓은 바닥과 로커. 독립 랩 SA·에너지 리턴·AC/HA 미확인. 이 묶음에서RTINGS 수치·PureGEL PLUS·AHAR+·10월7일 한국 발매를 새로 검증하지 못해 확정 정보로 반복하지 않습니다. 아킬레스 재활 체감을 보편적 부담 감소·무릎 압력 증가의 임상 법칙으로 바꾸지 않습니다.500km·단일폭부재·6~8분/km 처방을 제거했습니다.',
    plate: 'DOR은 정확 폼 조성을 제조사로부터 듣지 못했다고 밝힙니다. 임의로PEBA/TPEE/EVA라고 채우지 않으며 별도 플레이트 유무도 이번 재확인 범위에서는 미확인입니다.',
    width: '동세대 독립 랩 내부 치수 미확인. 정확 모델의 독립 내부 치수는 미확인입니다. 실제 상품에서 앞코 높이·길이·발등과 힐 고정을 확인하세요.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 공식 캐시: Unisex 1013A187.250 폭 미확인 표시249,000원. 현재 가격·선택 재고·숫자 폭 규격은 미확인입니다. 일반 사이즈 환산표·공통2E/4E 내비게이션·장바구니 버튼을 정확 모델 재고나 폭 증거로 쓰지 않습니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/asics-gel-slowcush-review/',
      text: '298g(유니섹스 남성US9/여성US10.5)·48/40mm·8mm는 DOR 소개 공시입니다. 정확 RR 독립 랩·내부 치수는 미확인이며 한국 확인 문서의 실측으로 바꾸지 않습니다. 이 묶음에서RTINGS 수치·PureGEL PLUS·AHAR+·10월7일 한국 발매를 새로 검증하지 못해 확정 정보로 반복하지 않습니다. 아킬레스 재활 체감을 보편적 부담 감소·무릎 압력 증가의 임상 법칙으로 바꾸지 않습니다.500km·단일폭부재·6~8분/km 처방을 제거했습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/asics-gel-slowcush-review/',
      text: 'DOR Matt(남성US10/JP28/EU44)는 넓고 늘어나는 메시지만 낮은 앞발 볼륨·발등, 강한 거싯 혀와 밀착 패딩 힐을 적었습니다. 부드럽고 제어되는 탄성과 매끄러운 로커는 이지·롱런에서 좋았으나 속도 활용은 적었습니다.35마일의 약한 마모는 수명 시험이 아니며 성긴 Hybrid ASICSGRIP·노출 폼은 거친 표면에서 제한이 있었습니다.',
    },
  ],
  similarShoes: [
    'asics-gel-nimbus-28',
    'saucony-paramount-max',
    'hoka-bondi-9',
    'brooks-glycerin-max-2',
    'nike-vomero-18',
  ],
  relatedPosts: [
    {
      slug: 'asics-gel-slowcush-korea-launch-2026',
      title: '젤 슬로우쿠시 한국 출시 — 님버스 28과 무엇이 다른가',
    },
    {
      slug: 'recovery-run-vs-lsd-guide-2026',
      title: '회복런 vs LSD 가이드',
    },
    {
      slug: 'asics-running-shoes-lineup-tier-guide-2026',
      title: '아식스 러닝화 계급도',
    },
  ],
  verification: {
    checkedAt: '2026-11-10',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 1013A187.250',
        url: 'https://m.asics.co.kr/p/AKR_112631101-250',
        note: '캐시 today; 판매가/예상결제금액249000; separateMSRP not stated',
      },
      {
        label: 'Doctors of Running 동세대 원문',
        url: 'https://www.doctorsofrunning.com/asics-gel-slowcush-review/',
        note: '298g(유니섹스 남성US9/여성US10.5)·48/40mm·8mm는 DOR 소개 공시입니다. 정확 RR 독립 랩·내부 치수는 미확인이며 한국 확인 문서의 실측으로 바꾸지 않습니다.',
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
