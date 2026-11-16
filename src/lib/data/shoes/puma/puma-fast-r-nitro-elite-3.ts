import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-10. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'puma-fast-r-nitro-elite-3',
  slug: 'puma-fast-r-nitro-elite-3',
  brand: 'Puma',
  name: '패스트알 나이트로 엘리트 3',
  imageCaption: "패스트알 나이트로 엘리트 3 사진(312060-03 · Heat Fire-Sun Stream)입니다. 공식 상품 사진과 대조했으며 구매할 성별·폭·색상 옵션과 구분하세요.",
  imageSource: {"title":"PUMA 공식 상품 갤러리","url":"https://kr.puma.com/kr/ko/pd/fast-r-nitro-elite-3/312060.html?dwvar_312060_color=03"},
  image: '/images/shoes/puma/fAST-R_NITROElite3.webp',
  images: [
    '/images/shoes/puma/fastrnitroelite3/side.webp',
    '/images/shoes/puma/fastrnitroelite3/front.webp',
    '/images/shoes/puma/fastrnitroelite3/back.webp',
    '/images/shoes/puma/fastrnitroelite3/top.webp',
    '/images/shoes/puma/fastrnitroelite3/official-312060-03-pair.jpg',
  ],
  category: '레이싱',
  price: 379000,
  description: 'NITROFOAM Elite · 돌출형 전장 카본 PWRPLATE 구조의 패스트알 나이트로 엘리트 3. RunRepeat 실험실 검체 173g·38.5/30.2mm. 한국 공식 312060_15 정가 379,000원(11/13 선택 상품).',
  oneliner: 'NITROFOAM Elite · 돌출형 전장 카본 PWRPLATE · 173g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-12 제조사·외부 리뷰의 소재 출처 추가 대조. 한국312060_15와 미국312060_01 공식 제품은 NITROFOAM Elite·카본 PWRPLATE를 설명하지만 이번 본문에 A-TPU 원료 표기는 없습니다. A-TPU라는 설명은 RR·DOR의 외부 리뷰 근거로 구분합니다. 한국 권장 수명150km와 미국 평균300km도 서로 다른 상품 표시이며 개인 교체 주기나 보장 수명으로 사용하지 않습니다. 2026-11-10 원문 재확인. 2026-11-13 한국 공식 남성 선택 색상 312060_15의 정가 379,000원, 표시 판매가 270,000원을 본문에서 확인했습니다. 해당 품번의 정가와 할인 가격을 구분하며 다른 성별·색상·폭·특별판의 동일 가격이나 실제 재고·결제 가능 여부를 뜻하지 않습니다. 한국170g(UK8)·40/32mm, DOR 소개170g(남성US9)/147g(여성US8)·39/31mm·8mm와 RR173g·38.5/30.2mm·8.3mm를 나눕니다. 여성 한국PDP의170g/UK8 복제 문구를 여성 실제 검체로 보지 않습니다. RR 국소 마모3.1mm·두께1.5mm를 원문대로 남겨 오타 교정이나250km 수명으로 바꾸지 않습니다. Matt와 Andrea의 형상 적합·반업 차이를 모두의 규칙으로 합치지 않으며 서브3 전용·마라톤 후반 추진 보장을 제거했습니다. DOR Matt(남성US10)는 정사이즈의 낮은 볼륨·약간 늘어나는 Ultraweave를 느꼈지만 내측 힐/중족 유도가 맞지 않았고30마일에 전족 마모를 적었습니다. Andrea는 평소여성US9.5에서10으로 올려 편하게 맞았고 본인의 외측 중족 착지에 형상이 잘 맞았습니다.25마일의 돌 눌림은 있었지만 당시 고무 마모는 없었고 최장10마일로 풀마라톤 시험은 아닙니다. RR 내부 최광폭 92.9mm·엄지 72.3mm·높이 26.3mm입니다. 너비 하나로 발등·길이·힐 고정이나 한국 와이드 적합을 보장하지 않습니다. 실제 규격·양말에서 접촉과 전환을 확인하세요. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '마라톤',
    '카본 플레이트',
    '맥시멀 스택',
  ],
  specs: {
    weight: 173,
    drop: 8.3,
  },
  biomechanics: {
    stackHeight: {
      heel: 38.5,
      forefoot: 30.2,
    },
    drop: 8.3,
    carbonPlate: true,
    plateType: 'Extended full-length carbon-fibre PWRPLATE',
    midsoleType: 'NITROFOAM Elite · 돌출형 전장 카본 PWRPLATE',
  },
  koreanFootFit: {
  },
  targetUsers: {
    recommended: [
      '실제 규격에서 앞코·힐 고정과 전환을 비교하려는 러너',
      '공시·실측·개인 체감의 조건을 구분하려는 러너',
    ],
    notRecommended: [
      '시착에서 압박·마찰·불편한 전환이 남는 경우',
      '짧은 시험과 광고를 수명·개인 기록·임상 효과로 읽는 경우',
    ],
  },
  features: [
    "NITROFOAM Elite · 돌출형 전장 카본 PWRPLATE",
    "173g · 38.5/30.2mm · 드롭 8.3mm (RunRepeat 실험실 검체)",
    "한국은 앞코 너머로 돌출된 전장 카본 PWRPLATE, RR/DOR은 A-TPU 폼과 분리된 힐/전족 구조를 설명합니다. 제조사·소규모 연구의 개선율을 모두의 기록 향상 보장으로 해석하지 않습니다.",
    "RR 내부 최광폭 92.9mm·엄지 72.3mm·높이 26.3mm입니다. 너비 하나로 발등·길이·힐 고정이나 한국 와이드 적합을 보장하지 않습니다. 실제 규격·양말에서 접촉과 전환을 확인하세요."
  ],
  priceAnalysis: {
    priceTier: 'super-premium',
    alternatives: [
      'nike-alphafly-3',
      'asics-metaspeed-edge-plus',
      'new-balance-sc-elite-v5',
    ],
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/puma-fast-r-nitro-elite-3',
      text: '한국170g(UK8)·40/32mm, DOR 소개170g(남성US9)/147g(여성US8)·39/31mm·8mm와 RR173g·38.5/30.2mm·8.3mm를 나눕니다. 여성 한국PDP의170g/UK8 복제 문구를 여성 실제 검체로 보지 않습니다. RR 국소 마모3.1mm·두께1.5mm를 원문대로 남겨 오타 교정이나250km 수명으로 바꾸지 않습니다. Matt와 Andrea의 형상 적합·반업 차이를 모두의 규칙으로 합치지 않으며 서브3 전용·마라톤 후반 추진 보장을 제거했습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/puma-fast-r-nitro-elite-3-review-2025/',
      text: 'DOR Matt(남성US10)는 정사이즈의 낮은 볼륨·약간 늘어나는 Ultraweave를 느꼈지만 내측 힐/중족 유도가 맞지 않았고30마일에 전족 마모를 적었습니다. Andrea는 평소여성US9.5에서10으로 올려 편하게 맞았고 본인의 외측 중족 착지에 형상이 잘 맞았습니다.25마일의 돌 눌림은 있었지만 당시 고무 마모는 없었고 최장10마일로 풀마라톤 시험은 아닙니다.',
    },
  ],
  detailedSpecs: {
    weight: '173g (RunRepeat 실험실 검체). 한국170g(UK8)·40/32mm, DOR 소개170g(남성US9)/147g(여성US8)·39/31mm·8mm와 RR173g·38.5/30.2mm·8.3mm를 나눕니다. 여성 한국PDP의170g/UK8 복제 문구를 여성 실제 검체로 보지 않습니다.',
    stackHeight: '38.5/30.2mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '8.3mm (RunRepeat 실험실 검체). 한국170g(UK8)·40/32mm, DOR 소개170g(남성US9)/147g(여성US8)·39/31mm·8mm와 RR173g·38.5/30.2mm·8.3mm를 나눕니다. 여성 한국PDP의170g/UK8 복제 문구를 여성 실제 검체로 보지 않습니다.',
    midsole: 'NITROFOAM Elite · 돌출형 전장 카본 PWRPLATE. 주폼 36.1AC, 힐/전족부 SA 148/124·에너지 리턴 80.4/82.6%. RR 국소 마모3.1mm·두께1.5mm를 원문대로 남겨 오타 교정이나250km 수명으로 바꾸지 않습니다. Matt와 Andrea의 형상 적합·반업 차이를 모두의 규칙으로 합치지 않으며 서브3 전용·마라톤 후반 추진 보장을 제거했습니다. 한국312060_15와 미국312060_01 공식 제품은 NITROFOAM Elite·카본 PWRPLATE를 설명하지만 이번 본문에 A-TPU 원료 표기는 없습니다. A-TPU라는 설명은 RR·DOR의 외부 리뷰 근거로 구분합니다. 한국 권장 수명150km와 미국 평균300km도 서로 다른 상품 표시이며 개인 교체 주기나 보장 수명으로 사용하지 않습니다.',
    plate: '한국은 앞코 너머로 돌출된 전장 카본 PWRPLATE, RR/DOR은 A-TPU 폼과 분리된 힐/전족 구조를 설명합니다. 제조사·소규모 연구의 개선율을 모두의 기록 향상 보장으로 해석하지 않습니다.',
    width: 'RR 내부 최광폭 92.9mm·엄지 부위 72.3mm·높이 26.3mm. RR 내부 최광폭 92.9mm·엄지 72.3mm·높이 26.3mm입니다. 너비 하나로 발등·길이·힐 고정이나 한국 와이드 적합을 보장하지 않습니다. 실제 규격·양말에서 접촉과 전환을 확인하세요.',
    durability: '2026-11-12 확인한 한국312060_15는 권장 수명150km, 미국312060_01은 평균300km로 서로 다르게 안내합니다. 시험 조건·기준의 일치 여부는 미확인입니다. 이 수치를 개인의 교체 시점·품질 보장 거리나 독립 주행 수명으로 바꾸지 않습니다.',
    price: '2026-11-13 한국 공식 남성 선택 색상 312060_15의 정가 379,000원, 표시 판매가 270,000원을 본문에서 확인했습니다. 해당 품번의 정가와 할인 가격을 구분하며 다른 성별·색상·폭·특별판의 동일 가격이나 실제 재고·결제 가능 여부를 뜻하지 않습니다.',
  },
  similarShoes: [
    'nike-alphafly-3',
    'asics-metaspeed-edge-plus',
    'new-balance-sc-elite-v5',
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
    "checkedAt": "2026-11-13",
    "scope": "11월12일에는 정확 제조사 제품의 소재·구조 표현과 외부 리뷰 귀속을 추가 대조했습니다. 한국 가격·기존 랩 수치·착화 의견은 각 근거의 기존 확인 시점에 한정하며 전체 제품·재고 인증은 아닙니다. / 2026-11-13 후속: 정확 한국 품번의 정가·표시 판매가만 재확인. 기존 랩·리뷰·타 색상·성별·폭의 새 검증 아님.",
    "sources": [
      {
        "url": "https://kr.puma.com/kr/ko/pd/%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%95%8C-%EB%82%98%EC%9D%B4%ED%8A%B8%EB%A1%9C-%EC%97%98%EB%A6%AC%ED%8A%B8-3-%3Cbr%3Efast-r-nitro-elite-3/312060.html?dwvar_312060_color=15",
        "note": "2026-11-13 한국 공식 남성 선택 색상 312060_15의 정가 379,000원, 표시 판매가 270,000원을 본문에서 확인했습니다. 해당 품번의 정가와 할인 가격을 구분하며 다른 성별·색상·폭·특별판의 동일 가격이나 실제 재고·결제 가능 여부를 뜻하지 않습니다. 가격 후속 대조이며 기존 측정·실착 원문 확인일은 별도입니다.",
        "label": "한국 공식 선택 품번 정가·할인가 재확인 · 2026-11-13"
      },
      {
        "label": "한국 공식 312060_15",
        "url": "https://kr.puma.com/kr/ko/pd/패스트알-나이트로-엘리트-3-%3Cbr%3Efast-r-nitro-elite-3/312060.html?dwvar_312060_color=15",
        "note": "캐시 last week; 현재가격·선택재고 미확인."
      },
      {
        "label": "한국 공식 312060_03",
        "url": "https://kr.puma.com/kr/ko/pd/패스트알-나이트로-엘리트-3-%3Cbr%3Efast-r-nitro-elite-3/312060.html?dwvar_312060_color=03&dwvar_312060_size=0190",
        "note": "캐시 last month; 현재가격·선택재고 미확인."
      },
      {
        "label": "한국 공식 312061_13",
        "url": "https://kr.puma.com/kr/ko/pd/패스트알-나이트로-엘리트-3-우먼스-%3Cbr%3Efast-r-nitro-elite-3-wns/312061.html?dwvar_312061_color=13",
        "note": "캐시 last month; 현재가격·선택재고 미확인."
      },
      {
        "label": "RunRepeat 동세대 실험실 원문",
        "url": "https://runrepeat.com/puma-fast-r-nitro-elite-3",
        "note": "공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 173g·38.5/30.2mm·8.3mm. RR 국소 마모3.1mm·두께1.5mm를 원문대로 남겨 오타 교정이나250km 수명으로 바꾸지 않습니다. Matt와 Andrea의 형상 적합·반업 차이를 모두의 규칙으로 합치지 않으며 서브3 전용·마라톤 후반 추진 보장을 제거했습니다."
      },
      {
        "label": "Doctors of Running 동세대 원문",
        "url": "https://www.doctorsofrunning.com/puma-fast-r-nitro-elite-3-review-2025/",
        "note": "한국170g(UK8)·40/32mm, DOR 소개170g(남성US9)/147g(여성US8)·39/31mm·8mm와 RR173g·38.5/30.2mm·8.3mm를 나눕니다. 여성 한국PDP의170g/UK8 복제 문구를 여성 실제 검체로 보지 않습니다."
      },
      {
        "label": "RunRepeat 측정법",
        "url": "https://runrepeat.com/testing-methodology",
        "note": "AC·HA·HC, SA·에너지 리턴, BR·구방식1~5와 내부/외부 폭을 구분합니다. 일반 정책은 개별 라벨 확인과 다릅니다."
      },
      {
        "label": "정확 제조사 소재 안내 추가 대조 · 2026-11-12",
        "url": "https://kr.puma.com/kr/ko/pd/패스트알-나이트로-엘리트-3-%3Cbr%3Efast-r-nitro-elite-3/312060.html?dwvar_312060_color=15",
        "note": "한국312060_15와 미국312060_01 공식 제품은 NITROFOAM Elite·카본 PWRPLATE를 설명하지만 이번 본문에 A-TPU 원료 표기는 없습니다. A-TPU라는 설명은 RR·DOR의 외부 리뷰 근거로 구분합니다. 한국 권장 수명150km와 미국 평균300km도 서로 다른 상품 표시이며 개인 교체 주기나 보장 수명으로 사용하지 않습니다."
      },
      {
        "label": "PUMA 미국312060_01 수명 표현 · 2026-11-12",
        "url": "https://us.puma.com/us/en/pd/fast-r-nitro-elite-3-mens-road-running-shoes/312060?swatch=01",
        "note": "미국 average number of kilometers300km와 한국312060_15 권장150km를 별도로 보존. 실제 수명·공통 교체 명령으로 사용하지 않음."
      }
    ],
    "limitations": [
      "모델별 임상 예방·치료 등급, 공통 최적 페이스·주행 수명·km당 비용은 미확인으로 제거했습니다.",
      "에디터 평점·1~10점·발볼 및 계절 분류·구매 링크는 모든 항목을 새로 검증한 수치나 임상 효과가 아닙니다.",
      "판매 조건은 확인한 상품·시점에 한정합니다. 미확인을 미출시·단종·전국 재고 없음으로 해석하지 않습니다.",
      "이번 소재 출처·수명 표시 대조는 기존 랩 숫자·가격·사진·성별/폭·현재 재고 전체의 새 검증이 아닙니다."
    ]
  },
};
