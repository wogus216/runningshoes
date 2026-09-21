import type { Fabric } from '@/types/fabric';

// 브랜드 원단 상표 — 이름이 실제로 무엇을 뜻하는가
// 근거: docs/references/apparel-fabric-research.md (A-1 · A-2 · A-3 · A-4 · D-7-10)
//
// 이 유형의 핵심 발견: 브랜드 상표명은 소재가 아니라 "성능 기준을 통과한 원단군의 라벨"이다.
// 따라서 "Dri-FIT = 폴리에스터 XX%" 같은 단일 답은 존재하지 않는다.

export const brandmarkFabrics: Fabric[] = [
  {
    id: 'dri-fit',
    slug: 'dri-fit',
    type: 'brandmark',
    name: 'Dri-FIT (나이키)',
    nameEn: 'Nike Dri-FIT',
    summary: '소재 이름이 아니라 원단군의 라벨이다. 나이키 자신은 "폴리코튼"이라 적어놨다.',
    intro:
      'Dri-FIT가 무슨 소재냐는 질문에는 답이 없습니다. 있는 것은 **"Dri-FIT라는 이름이 붙은 원단은 서로 조성이 다르다"**는 사실뿐입니다. ' +
      '나이키 공식 설명 페이지에는 조성 수치가 없고, 오히려 널리 퍼진 통념과 어긋나는 표현이 적혀 있습니다.',
    claims: [
      {
        text:
          '나이키 공식 설명이 쓰는 동사는 "wicking"(흡상)과 "dispersing"(표면 확산)입니다. 수분을 밖으로 밀어내는 것이 아니라, **빨아들여 넓게 펴서 증발 면적을 키우는** 방식입니다.',
        grade: 'C',
        source: 'Nike 공식 고객센터 — Dri-FIT 설명',
        sourceUrl: 'https://www.nike.com/help/a/nike-dri-fit',
        caveat: '기전 서술뿐이고 정량 수치는 없습니다. 브랜드 주장으로만 인용해야 합니다.',
      },
      {
        text:
          '같은 페이지에서 나이키는 소재를 "innovative polycotton fabric"이라고 적었습니다. 널리 퍼진 "Dri-FIT는 100% 폴리에스터"와 불일치합니다.',
        grade: 'C',
        source: 'Nike 공식 고객센터 — Dri-FIT 설명',
        sourceUrl: 'https://www.nike.com/help/a/nike-dri-fit',
      },
      {
        text:
          '실제 제품 라벨은 또 다릅니다. AeroSwift ADV 러닝 상의는 100% 폴리에스터입니다. 즉 같은 Dri-FIT 라벨이 폴리 100%와 폴리/코튼 혼방 양쪽에 붙습니다.',
        grade: 'A',
        source: '자체 실측 — Nike.com(미국) 러닝 의류 67벌 조성 수집, 2026-09-04',
      },
      {
        text:
          'Nike 러닝 의류 67벌 중 55벌(82.1%)이 재생 폴리에스터를 명시했습니다.',
        grade: 'A',
        source: '자체 실측 — Nike.com(미국), 2026-09-04',
        caveat: '미국 사이트 기준입니다. 한국 판매 제품과 조성이 같다는 보장은 없습니다.',
      },
    ],
    misconceptions: [
      {
        myth: 'Dri-FIT는 땀을 옷 밖으로 밀어낸다.',
        reality:
          '나이키 원문에 "밀어낸다"는 표현은 없습니다. 흡상해서 표면에 넓게 펴는 것이며, 증발은 결국 주변 공기가 받아 줘야 일어납니다. 습도가 높으면 이 마지막 단계가 막힙니다.',
        source: 'Nike 공식 고객센터',
        sourceUrl: 'https://www.nike.com/help/a/nike-dri-fit',
      },
      {
        myth: 'Dri-FIT는 폴리에스터 100%다.',
        reality: '제품마다 다릅니다. 나이키 공식 설명은 폴리코튼이라 적었고, 실제 러닝 상의 중에는 폴리 100%도 있습니다. 조성은 라벨에서 개별 확인해야 합니다.',
        source: 'Nike 공식 설명 + 자체 실측 67벌',
      },
    ],
    unknowns: [
      'Dri-FIT로 인정되는 성능 기준(무엇을 통과해야 그 이름을 붙일 수 있는지)은 공개되지 않았습니다.',
      '흡한속건 성능의 정량 수치(건조 시간, Ret 등)는 나이키 공식 문서에 없습니다.',
    ],
    related: ['aeroready', 'polyester'],
    updatedAt: '2026-09-07',
    keywords: ['드라이핏', 'Dri-FIT', '나이키 원단', '나이키 러닝복 소재'],
  },

  {
    id: 'aeroready',
    slug: 'aeroready',
    type: 'brandmark',
    name: 'AEROREADY (아디다스)',
    nameEn: 'adidas AEROREADY',
    summary: '아디다스 한국은 이 이름을 설명하지 않는다. /aeroready 페이지는 기술 문서가 아니라 상품 필터다.',
    intro:
      'AEROREADY가 무엇인지 알아보려고 아디다스 코리아에서 해당 페이지를 열면, 기술 설명이 아니라 **상품 목록 131개**가 나옵니다. ' +
      '정의도, 기준도, 수치도 없습니다. 이건 자료를 못 찾았다는 뜻이 아니라 — **열어봤는데 없다**는 뜻입니다.',
    claims: [
      {
        text:
          'adidas.co.kr의 AEROREADY 페이지는 상품 131개를 거는 필터 페이지입니다. 페이지 어디에도 AEROREADY의 정의나 성능 기준이 없고, 하단 안내 문구에도 설명이 없습니다.',
        grade: 'A',
        source: '자체 확인 — adidas.co.kr/aeroready 직접 열람, 2026-09-05',
        caveat:
          '이전 조사에서 아디다스는 "접근 차단"으로 기록돼 있었으나, 실제로는 봇 확인이 끝나기 전에 판정한 것이었습니다. 2026-09-05에 정상 열람했습니다.',
      },
      {
        text:
          '조성은 상표 페이지가 아니라 개별 상품 페이지의 「세부 정보」 탭에 있습니다. 아디제로 에센셜 러닝 티셔츠(IN1172)는 겉감 100% 폴리에스터, 제조국 중국으로 표기됩니다.',
        grade: 'A',
        source: '자체 실측 — adidas.co.kr 상품 페이지 IN1172, 2026-09-05',
        caveat: '표본 1건입니다. AEROREADY 전체의 조성 분포는 아직 집계하지 않았습니다.',
      },
      {
        text:
          '같은 상품 페이지의 구조화 데이터에는 material 값이 "Recycled Polyester"로 적혀 있습니다. 정성 라벨과 정량 조성이 한 페이지에 따로 존재합니다.',
        grade: 'A',
        source: '자체 실측 — adidas.co.kr 상품 페이지 JSON-LD, 2026-09-05',
      },
    ],
    misconceptions: [
      {
        myth: 'Primeblue·Primegreen은 흡한속건 성능 표시다.',
        reality:
          '재생소재 조달 기준입니다. 성능을 규정하지 않으므로 기능 비교에 쓰면 틀립니다. AEROREADY와는 다른 축의 라벨입니다.',
        source: 'adidas 공식 소재 정책 문서',
      },
    ],
    unknowns: [
      'AEROREADY로 인정되는 성능 기준은 공개되지 않았습니다.',
      'HEAT.RDY·COLD.RDY·WIND.RDY·CLIMACOOL의 전용 설명 페이지는 아직 찾지 못했습니다(추정 경로 두 곳은 404였습니다).',
      'AEROREADY 131개 상품의 조성 분포는 아직 집계하지 않았습니다 — 수집 경로는 확인됐으므로 못 하는 게 아니라 안 한 것입니다.',
    ],
    related: ['dri-fit', 'solarflect', 'polyester'],
    updatedAt: '2026-09-07',
    keywords: ['에어로레디', 'AEROREADY', '아디다스 원단', '아디다스 러닝복'],
  },

  {
    id: 'solarflect',
    slug: 'solarflect',
    type: 'brandmark',
    name: '솔라플렉트·플랫드라이·에어도트 (코오롱스포츠)',
    nameEn: 'KOLON SPORT SolarFlect',
    summary: '한국 브랜드도 구조가 같다. 소재 이름이 상품 필터로만 존재하고 수치가 붙지 않는다.',
    intro:
      '국내 브랜드는 다를까 싶어 코오롱스포츠를 열어 봤습니다. 「기술력과 혁신」 페이지에서 여름 대응 소재로 **솔라플렉트(적외선 차단)**를 내세우는데, ' +
      '링크를 따라가면 아디다스와 **똑같이 상품 목록**이 나옵니다. 국내외 브랜드가 같은 구조입니다.',
    claims: [
      {
        text:
          '코오롱스포츠 「기술력과 혁신」 페이지는 솔라플렉트를 "적외선 차단 기술 — 더위에 대응하는 새로운 소재"로 소개합니다. 정량 수치는 없습니다.',
        grade: 'C',
        source: '코오롱스포츠 공식 사이트 — 기술력과 혁신, 2026-09-05 직접 열람',
      },
      {
        text:
          '해당 링크는 상품 8개짜리 목록으로 이어집니다. 「썸머프로텍션」 컬렉션 아래 플랫드라이·에어도트·솔라플렉트 세 소재 이름이 **필터로만** 존재하고, 각각이 무엇인지는 설명되지 않습니다.',
        grade: 'A',
        source: '자체 확인 — kolonsport.com 직접 열람, 2026-09-05',
        caveat: '이전 조사에서 "본문 미렌더"로 기록됐던 페이지입니다. 실제로는 정상 렌더됩니다.',
      },
      {
        text:
          '확인한 범위에서 프로스펙스·블랙야크는 자체 러닝복 원단 상표를 운영하지 않습니다. 코오롱만 「쿨론」이 계열 원사사 레벨에 존재합니다 — 폴리에스터 이형단면사입니다.',
        grade: 'B',
        source: '코오롱FM / TK케미칼 원사 자료',
        caveat: 'TK케미칼은 50·75·150데니어 규격을 공개합니다. 다만 아래 「확인하지 못한 것」을 함께 볼 것.',
      },
      {
        text:
          '코오롱스포츠에서 "러닝"이라는 단어는 트레일러닝 라인에만 쓰이는 것으로 보입니다. 브랜드숍 상의·아우터·바지 탭 상위 노출에 "러닝"이 들어간 이름이 하나도 없었습니다.',
        grade: 'A',
        source: '자체 실측 — 무신사 코오롱스포츠 브랜드숍 전수 스캔, 2026-09-04',
      },
    ],
    unknowns: [
      '코오롱FM의 "쿨론"과 TK케미칼의 "COOLON"이 같은 상표인지 별개인지 확정하지 못했습니다.',
      '솔라플렉트의 적외선 차단 성능 수치(차단율·시험 규격)는 공개되지 않았습니다.',
      '플랫드라이·에어도트가 각각 무엇인지는 어느 페이지에서도 설명되지 않았습니다.',
    ],
    related: ['aeroready', 'polyester'],
    updatedAt: '2026-09-07',
    keywords: ['솔라플렉트', '코오롱스포츠 원단', '쿨론', '국산 기능성 원단'],
  },

  {
    id: 'gore-tex-infinium',
    slug: 'gore-tex-infinium',
    type: 'brandmark',
    name: 'GORE-TEX INFINIUM / WINDSTOPPER',
    nameEn: 'GORE-TEX INFINIUM (WINDSTOPPER)',
    summary: '재킷에 "GORE-TEX"만 적혀 있으면 방수인지 방풍인지 알 수 없다. 공식 판별법은 라벨 색이다.',
    intro:
      '러닝 재킷을 고를 때 실질적으로 가장 쓸모 있는 판별법 하나가 여기 있습니다. ' +
      '**GORE-TEX라는 이름이 붙었다고 방수가 아닙니다.** 방풍 전용 등급이 따로 있고, 둘을 가르는 공식 표시가 존재합니다.',
    claims: [
      {
        text:
          'GORE-TEX INFINIUM은 WINDSTOPPER로 리브랜딩됐습니다. 공식 문서 제목 자체가 "Formerly known as GORE-TEX INFINIUM™"입니다. 그리고 이 등급은 **방수가 아닙니다.**',
        grade: 'B',
        source: 'W. L. Gore & Associates 공식 제품 문서',
      },
      {
        text:
          '유일한 공식 구분자는 다이아몬드 라벨의 색입니다. **흰 다이아몬드 = 방풍(WINDSTOPPER), 검은 다이아몬드 = 정식 GORE-TEX(방수 보증)**입니다.',
        grade: 'B',
        source: 'W. L. Gore & Associates 공식 라벨 정책',
        caveat: '브랜드 자체 규정입니다. 다만 소비자가 매장에서 실제로 확인할 수 있는 유일한 표시입니다.',
      },
    ],
    misconceptions: [
      {
        myth: 'GORE-TEX가 적혀 있으면 비를 막아 준다.',
        reality:
          '등급에 따라 다릅니다. WINDSTOPPER(구 INFINIUM)는 방풍 전용이고 방수 보증이 없습니다. 러닝 재킷에 "GORE-TEX"만 적혀 있으면 어느 쪽인지 알 수 없으므로, 라벨의 다이아몬드 색을 확인해야 합니다.',
        source: 'W. L. Gore & Associates 공식 문서',
      },
    ],
    unknowns: [
      '방풍성과 통기성이 정량적으로 어떻게 상충하는지는 확보하지 못했습니다. ISO 11092의 Ret 틀은 있으나 겨울 러닝 조건에서 측정한 논문을 찾지 못했습니다.',
      'DWR(발수 코팅)이 몇 번 세탁하면 떨어지는지는 브랜드 공식 문서가 말하지 않습니다.',
    ],
    related: ['ret-iso-11092', 'kca-running-jacket-2025'],
    relatedPosts: ['rainy-season-running-guide-korea', 'wet-running-shoes-drying-care-guide-korea'],
    updatedAt: '2026-09-07',
    keywords: ['고어텍스', 'GORE-TEX INFINIUM', '윈드스토퍼', '러닝 재킷 방수', '방풍 재킷'],
  },
];
