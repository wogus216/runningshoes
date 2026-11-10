import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'adidas-hyperboost-edge',
  slug: 'adidas-hyperboost-edge',
  brand: 'Adidas',
  name: '하이퍼부스트 엣지',
  image: '/images/shoes/adidas/hyperboost-edge/side.webp',
  images: [
    '/images/shoes/adidas/hyperboost-edge/side.webp',
    '/images/shoes/adidas/hyperboost-edge/angle.webp',
    '/images/shoes/adidas/hyperboost-edge/back.webp',
  ],
  category: '데일리',
  description: 'Hyperboost Pro · Primeweave · LIGHTTRAXION 구조의 하이퍼부스트 엣지. RunRepeat 실험실 검체 247g·44.6/38.1mm. 한국 현재 정가 미확인.',
  oneliner: 'Hyperboost Pro · Primeweave · LIGHTTRAXION · 247g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-09 원문 재확인. 한국 공식 캐시에서 남성KI1913·여성LA2185 249,000원, 남성KH5376·여성KH5379 259,000원이 표시됐습니다. 캐시시점은당일~2주이며 현재 정가·선택 규격·폭·재고는 미확인입니다. 단일249,000원과 와이드 없음으로 일반화하지 않습니다. 글로벌 공식255g은 남성8.5(사이즈 체계 미명시), 힐45mm·드롭6mm입니다. DOR255g(남성8.5체계미명시)/268g(남성10실측)·45/39mm·6mm, RR247g·44.6/38.1mm·6.5mm는 다른 조건입니다. 2026-03-05 발표·글로벌03-17 출시이며 한국03-23 출시는 이번 범위에서 미확인입니다. 공식73%는60명 선호 조사 중 리턴을 선호한 비율,77%는 더 부드럽다고 느낀 비율이며 RR힐73.6% 리턴과 다른 통계입니다. 제조사 Q&A는 LightstrikePro 배합·Boost 공정을 언급하지만 정확 고분자는 미공개이고 RR의 PEBA계 설명과 구분합니다. RR BR62·건조47%와 David의 통기 체감, 반거싯 표와 Matt의 전장 거싯 설명도 다릅니다. 700km·겨울최고·힐착지 일괄금지·검증완료 확정은 철회합니다. DOR Matt(남성US10)은 낮은 볼륨·단단한 어퍼, 편한 뒤쪽 갑피에도 거친 힐 전환·개인 정강이 불편과 늦은 전족 로커를 느끼며 업템포를 선호했습니다. David(남성US9.5)는 타이트한 중족·여유 있는 전족과 높은 칼라의 발목 쓸림, 이른 전족 로커를 느끼며 일상·롱런을 선호했습니다. 모두 같은 불편을 겪었다고 합치지 않습니다. RR 내부 최광폭97.4mm·엄지71.4mm·높이24.8mm입니다. 앞쪽 테이퍼와 낮은 볼륨, 실제 칼라 접촉을 따로 확인하세요. 한국 현재 와이드·D 단일 확정은 미확인입니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '데일리',
    '슈퍼트레이너',
    '고스택',
    '무플레이트',
    'Hyperboost Pro',
  ],
  specs: {
    weight: 247,
    cushioning: 10,
    responsiveness: 9,
    stability: 5,
    drop: 6.5,
  },
  biomechanics: {
    stackHeight: {
      heel: 44.6,
      forefoot: 38.1,
    },
    drop: 6.5,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'Hyperboost Pro · Primeweave · LIGHTTRAXION',
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
  },
  targetUsers: {
    recommended: [
      '플레이트 없는 고스택 전환을 비교하려는 러너',
      '실제 규격에서 발등·칼라 접촉을 확인하려는 러너',
    ],
    notRecommended: [
      '직접 착화에서 발목 쓸림이나 전환 불편이 남는 경우',
      '선호 조사 비율을 실험실 리턴으로 소개하는 매물',
    ],
  },
  features: [
    'Hyperboost Pro · Primeweave · LIGHTTRAXION',
    '247g · 44.6/38.1mm · 드롭 6.5mm (RunRepeat 실험실 검체)',
    '공식 발표는 플레이트와 보강 부품을 사용하지 않는다고 명시합니다. LIGHTTRAXION을 Continental로 바꾸지 않습니다.',
    'RR 내부 최광폭97.4mm·엄지71.4mm·높이24.8mm입니다. 앞쪽 테이퍼와 낮은 볼륨, 실제 칼라 접촉을 따로 확인하세요. 한국 현재 와이드·D 단일 확정은 미확인입니다.',
  ],
  priceAnalysis: {
    priceTier: 'premium',
    alternatives: [
      'asics-superblast-3',
      'adidas-adizero-evo-sl',
      'asics-megablast',
    ],
  },
  detailedSpecs: {
    weight: '247g (RunRepeat 실험실 검체). 글로벌 공식255g은 남성8.5(사이즈 체계 미명시), 힐45mm·드롭6mm입니다. DOR255g(남성8.5체계미명시)/268g(남성10실측)·45/39mm·6mm, RR247g·44.6/38.1mm·6.5mm는 다른 조건입니다. 2026-03-05 발표·글로벌03-17 출시이며 한국03-23 출시는 이번 범위에서 미확인입니다.',
    stackHeight: '44.6/38.1mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '6.5mm (RunRepeat 실험실 검체). 글로벌 공식255g은 남성8.5(사이즈 체계 미명시), 힐45mm·드롭6mm입니다. DOR255g(남성8.5체계미명시)/268g(남성10실측)·45/39mm·6mm, RR247g·44.6/38.1mm·6.5mm는 다른 조건입니다. 2026-03-05 발표·글로벌03-17 출시이며 한국03-23 출시는 이번 범위에서 미확인입니다.',
    midsole: 'Hyperboost Pro · Primeweave · LIGHTTRAXION. 주폼 32.5AC, 힐/전족부 SA 154/145·에너지 리턴 73.6/72.8%. 공식73%는60명 선호 조사 중 리턴을 선호한 비율,77%는 더 부드럽다고 느낀 비율이며 RR힐73.6% 리턴과 다른 통계입니다. 제조사 Q&A는 LightstrikePro 배합·Boost 공정을 언급하지만 정확 고분자는 미공개이고 RR의 PEBA계 설명과 구분합니다. RR BR62·건조47%와 David의 통기 체감, 반거싯 표와 Matt의 전장 거싯 설명도 다릅니다. 700km·겨울최고·힐착지 일괄금지·검증완료 확정은 철회합니다.',
    plate: '공식 발표는 플레이트와 보강 부품을 사용하지 않는다고 명시합니다. LIGHTTRAXION을 Continental로 바꾸지 않습니다.',
    width: 'RR 내부 최광폭 97.4mm·엄지 부위 71.4mm·높이 24.8mm. RR 내부 최광폭97.4mm·엄지71.4mm·높이24.8mm입니다. 앞쪽 테이퍼와 낮은 볼륨, 실제 칼라 접촉을 따로 확인하세요. 한국 현재 와이드·D 단일 확정은 미확인입니다.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 공식 캐시에서 남성KI1913·여성LA2185 249,000원, 남성KH5376·여성KH5379 259,000원이 표시됐습니다. 캐시시점은당일~2주이며 현재 정가·선택 규격·폭·재고는 미확인입니다. 단일249,000원과 와이드 없음으로 일반화하지 않습니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/adidas-hyperboost-edge',
      text: '글로벌 공식255g은 남성8.5(사이즈 체계 미명시), 힐45mm·드롭6mm입니다. DOR255g(남성8.5체계미명시)/268g(남성10실측)·45/39mm·6mm, RR247g·44.6/38.1mm·6.5mm는 다른 조건입니다. 2026-03-05 발표·글로벌03-17 출시이며 한국03-23 출시는 이번 범위에서 미확인입니다. 공식73%는60명 선호 조사 중 리턴을 선호한 비율,77%는 더 부드럽다고 느낀 비율이며 RR힐73.6% 리턴과 다른 통계입니다. 제조사 Q&A는 LightstrikePro 배합·Boost 공정을 언급하지만 정확 고분자는 미공개이고 RR의 PEBA계 설명과 구분합니다. RR BR62·건조47%와 David의 통기 체감, 반거싯 표와 Matt의 전장 거싯 설명도 다릅니다. 700km·겨울최고·힐착지 일괄금지·검증완료 확정은 철회합니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/adidas-hyperboost-edge-review-2026/',
      text: 'DOR Matt(남성US10)은 낮은 볼륨·단단한 어퍼, 편한 뒤쪽 갑피에도 거친 힐 전환·개인 정강이 불편과 늦은 전족 로커를 느끼며 업템포를 선호했습니다. David(남성US9.5)는 타이트한 중족·여유 있는 전족과 높은 칼라의 발목 쓸림, 이른 전족 로커를 느끼며 일상·롱런을 선호했습니다. 모두 같은 불편을 겪었다고 합치지 않습니다.',
    },
  ],
  similarShoes: [
    'asics-superblast-3',
    'adidas-adizero-evo-sl',
    'asics-megablast',
    'nike-vomero-plus',
  ],
  relatedPosts: [
    {
      slug: 'adidas-hyperboost-edge-vs-run-comparison-2026',
      title: '하이퍼부스트 엣지 vs 런 — 같은 폼, 3만원 차이',
    },
    {
      slug: 'adidas-hyperboost-edge-vs-asics-superblast-3-super-trainer-2026',
      title: '하이퍼부스트 엣지 vs 슈퍼블라스트 3 — 슈퍼트레이너',
    },
    {
      slug: 'superblast-3-vs-evo-sl-vs-mach-6-super-trainer-2026',
      title: '슈퍼블라스트3 vs 에보SL vs 마하6 — 슈퍼트레이너 비교',
    },
    {
      slug: 'adidas-running-shoes-lineup-tier-guide-2026',
      title: '아디다스 러닝화 라인업 — 용도와 구조 비교',
    },
    {
      slug: 'running-shoe-midsole-foam-guide-2026',
      title: '미드솔 폼 완전 해설 — EVA·TPU·PEBA',
    },
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/5T0hdO6i',
    },
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5Ynp9YSOa',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 캐시 KI1913 · 남성',
        url: 'https://www.adidas.co.kr/%ED%95%98%EC%9D%B4%ED%8D%BC%EB%B6%80%EC%8A%A4%ED%8A%B8-%EC%97%A3%EC%A7%80-%EB%9F%AC%EB%8B%9D%ED%99%94/KI1913.html',
        note: '표시 정가 249000원·표시 판매가 249000원. 도구 캐시 last week; 현재 가격·폭·선택 재고 미확인.',
      },
      {
        label: '한국 공식 캐시 LA2185 · Women',
        url: 'https://www.adidas.co.kr/%ED%95%98%EC%9D%B4%ED%8D%BC%EB%B6%80%EC%8A%A4%ED%8A%B8-%EC%97%A3%EC%A7%80-w/LA2185.html',
        note: '표시 정가 249000원·표시 판매가 249000원. 도구 캐시 2 weeks; 현재 가격·폭·선택 재고 미확인.',
      },
      {
        label: '한국 공식 캐시 KH5376 · 남성',
        url: 'https://www.adidas.co.kr/%ED%95%98%EC%9D%B4%ED%8D%BC%EB%B6%80%EC%8A%A4%ED%8A%B8-%EC%97%A3%EC%A7%80/KH5376.html',
        note: '표시 정가 259000원·표시 판매가 259000원. 도구 캐시 today; 현재 가격·폭·선택 재고 미확인.',
      },
      {
        label: '한국 공식 캐시 KH5379 · Women',
        url: 'https://www.adidas.co.kr/%ED%95%98%EC%9D%B4%ED%8D%BC%EB%B6%80%EC%8A%A4%ED%8A%B8-%EC%97%A3%EC%A7%80/KH5379.html',
        note: '표시 정가 259000원·표시 판매가 259000원. 도구 캐시 last week; 현재 가격·폭·선택 재고 미확인.',
      },
      {
        label: 'adidas 글로벌 공식 발표',
        url: 'https://news.adidas.com/hyperboost-edge/adidas-reveal-the-hyperboost-edge--beginning-a-new-era-of-road-running/s/74c11526-ce60-405c-8c47-c1edae16c9e3',
        note: '255g 남성8.5·45mm·6mm·플레이트 없음·선호 조사.',
      },
      {
        label: 'adidas 폼 설계 Q&A',
        url: 'https://news.adidas.com/global/hyperboost-edge-unlocked--10-things-you-need-to-know-from-vp-of-design-for-adidas-running/s/5c39a6df-59d2-415b-81e0-fe8671de5399',
        note: '정확 고분자 미공개. Boost 이름만으로 eTPU 단정 금지.',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://runrepeat.com/adidas-hyperboost-edge',
        note: '공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 247g·44.6/38.1mm·6.5mm. 공식73%는60명 선호 조사 중 리턴을 선호한 비율,77%는 더 부드럽다고 느낀 비율이며 RR힐73.6% 리턴과 다른 통계입니다. 제조사 Q&A는 LightstrikePro 배합·Boost 공정을 언급하지만 정확 고분자는 미공개이고 RR의 PEBA계 설명과 구분합니다. RR BR62·건조47%와 David의 통기 체감, 반거싯 표와 Matt의 전장 거싯 설명도 다릅니다. 700km·겨울최고·힐착지 일괄금지·검증완료 확정은 철회합니다.',
      },
      {
        label: 'Doctors of Running 동세대 원문',
        url: 'https://www.doctorsofrunning.com/adidas-hyperboost-edge-review-2026/',
        note: '글로벌 공식255g은 남성8.5(사이즈 체계 미명시), 힐45mm·드롭6mm입니다. DOR255g(남성8.5체계미명시)/268g(남성10실측)·45/39mm·6mm, RR247g·44.6/38.1mm·6.5mm는 다른 조건입니다. 2026-03-05 발표·글로벌03-17 출시이며 한국03-23 출시는 이번 범위에서 미확인입니다.',
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
