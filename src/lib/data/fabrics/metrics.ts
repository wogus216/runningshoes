import type { Fabric } from '@/types/fabric';

// 성능 지표·시험 규격 — 수치가 존재하는 자리와, 아무도 공개하지 않는 자리
// 근거: docs/references/apparel-fabric-research.md (B-1 · B-2 · B-3 · E-1c · E-2)

export const metricFabrics: Fabric[] = [
  {
    id: 'ret-iso-11092',
    slug: 'ret-iso-11092',
    type: 'metric',
    name: '증발저항 Ret (ISO 11092)',
    nameEn: 'Water-vapour resistance, ISO 11092',
    summary: '땀이 원단을 통과하는 어려움을 재는 국제규격. 그런데 러닝복에 이 수치가 적힌 사례는 0건이다.',
    intro:
      '"통기성이 좋다"를 숫자로 만들면 Ret입니다. 원단이 수증기를 얼마나 막는지를 재는 값이고, 낮을수록 잘 통과시킵니다. ' +
      '국제규격도 있고 시험 장비도 있습니다. **그런데 러닝복 판매 페이지에서 이 숫자를 본 적이 있으신가요?** 저희가 찾은 표기 사례는 0건입니다.',
    claims: [
      {
        text:
          '현행 규격은 ISO 11092:2026입니다. 2026년 5월 발행, 제3판, 17쪽, ISO/TC 38 소관입니다. 이전 판인 ISO 11092:2014는 폐지(Withdrawn)됐습니다.',
        grade: 'A',
        source: 'ISO 공식 규격 페이지',
        sourceUrl: 'https://www.iso.org/standard/85998.html',
        caveat: '"ISO 11092:2014"로 연도를 박아 인용하면 폐지된 판을 가리키게 됩니다.',
      },
      {
        text:
          '규격 스스로가 이 시험을 쾌적성 등급으로 바꿔 읽지 말라고 적어 뒀습니다. 3판 초록의 문장은 이렇습니다 — ' +
          '"The test conditions used in this document are not intended to represent specific comfort situations, and performance specifications in relation to physiological comfort are not stated." ' +
          '(이 문서의 시험 조건은 특정 쾌적 상황을 나타내려는 것이 아니며, 생리적 쾌적성에 관한 성능 사양을 제시하지 않는다.)',
        grade: 'A',
        source: 'ISO 11092:2026, Abstract',
        sourceUrl: 'https://www.iso.org/standard/85998.html',
        caveat: '2014년판 초록에는 이 문장이 없습니다. 3판에서 추가됐습니다. 규격 본문은 유료이나 초록은 무료로 공개됩니다.',
      },
      {
        text:
          '따라서 "Ret 6 미만 = 매우 우수" 같은 등급표는 ISO 규격의 내용이 아닙니다. Hohenstein 계열의 상업적 등급 체계이며, 규격 문구인 것처럼 쓰면 틀립니다.',
        grade: 'A',
        source: 'ISO 11092:2026 원문 대조',
        sourceUrl: 'https://www.iso.org/standard/85998.html',
      },
      {
        text:
          '측정 방식 자체에도 한계가 있습니다. ISO 11092는 정상상태 시험이라 실제 착용만큼 섬유별 차이를 잡아내지 못합니다. 미국 NC State가 이 문제 때문에 ASTM F3628을 새로 만들었습니다.',
        grade: 'A',
        source: 'ASTM F3628 제정 배경 문서',
      },
    ],
    measurements: [
      { label: '규격 번호', value: 'ISO 11092:2026', note: '2014년판은 폐지' },
      { label: '단위', value: 'm²·Pa/W', note: '증발저항 Ret' },
      { label: '열저항 단위', value: 'm²·K/W', note: 'Rct' },
      { label: '러닝복 표기 사례', value: '0건', note: '자체 조사 범위 내' },
    ],
    misconceptions: [
      {
        myth: '논문에 나온 Ret 값을 특정 브랜드 원단의 성능으로 쓸 수 있다.',
        reality:
          '쓸 수 없습니다. 논문 시료는 시판 제품이 아닙니다. "폴리에스터 니트 Ret 1.4~1.9"는 물성 경향으로 쓸 수 있지만 "Dri-FIT의 Ret은 1.43"으로 쓰면 거짓입니다. ' +
          '같은 싱글저지끼리도 문헌 표에서 2.3배까지 차이가 납니다.',
        source: 'Özkan 2023 등 문헌 대조',
      },
    ],
    unknowns: [
      '방풍성과 통기성의 정량적 상충 관계를 겨울 운동 조건에서 측정한 논문을 찾지 못했습니다.',
      '높은 습도에서 원단 간 차이가 사라지는 교차점은 논리적 귀결일 뿐 실측이 아닙니다.',
      '규격 본문(17쪽)은 유료라 열람하지 못했습니다. 이 페이지의 인용은 전부 무료 공개된 초록 범위입니다.',
    ],
    related: ['gore-tex-infinium', 'polyester', 'kca-running-jacket-2025'],
    updatedAt: '2026-09-07',
    keywords: ['Ret', 'ISO 11092', '증발저항', '원단 통기성', '투습도'],
  },

  {
    id: 'upf',
    slug: 'upf',
    type: 'metric',
    name: 'UPF 자외선 차단지수',
    nameEn: 'UPF (Ultraviolet Protection Factor)',
    summary: '러닝복에서 널리 표기되는 사실상 유일한 성능 수치. 그래서 비교에 실제로 쓸 수 있다.',
    intro:
      '이 섹션 전체를 관통하는 결론은 "브랜드가 수치를 안 준다"입니다. **UPF만 예외입니다.** ' +
      '자외선 차단지수는 여름 러닝복에 널리 표기되고, 등급 체계가 규격으로 정해져 있어 제품 간 비교가 실제로 가능합니다.',
    claims: [
      {
        text:
          'UPF는 AS/NZS 4399(호주·뉴질랜드 규격) 또는 KS K 0850으로 측정하며, 15 / 30 / 50 / 50+ 등급으로 표기됩니다.',
        grade: 'A',
        source: 'AS/NZS 4399, KS K 0850 규격 체계',
      },
      {
        text:
          '러닝 의류에서 소비자에게 널리 공개되는 성능 수치는 확인한 범위에서 UPF가 유일합니다. GSM·공기투과도·Ret·건조속도·발수는 브랜드 표기 사례를 찾지 못했습니다.',
        grade: 'A',
        source: '자체 조사 — 브랜드 공식 기술 페이지 및 한국 판매 페이지, 2026-09-04',
      },
      {
        text:
          '젝시믹스는 상품 상세 페이지에 KOTITI 공인시험성적서를 이미지로 공개하며, 여기에 UPF 실측치가 포함됩니다. 조성(%)은 끝내 공개하지 않으면서 시험성적서는 공개하는 구조입니다.',
        grade: 'A',
        source: '자체 확인 — 젝시믹스 상품 상세 페이지 KOTITI 성적서 2개 SKU, 2026-09-04',
        caveat:
          '재현 확인은 2개 SKU에서만 했습니다. 다른 브랜드 4곳은 각 1개 SKU만 열람해 성적서가 없음을 확인했으므로, "젝시믹스만 그렇다"고 단정하지 않습니다.',
      },
    ],
    measurements: [
      { label: '규격', value: 'AS/NZS 4399 · KS K 0850' },
      { label: '등급', value: '15 / 30 / 50 / 50+' },
      { label: '러닝복 표기', value: '널리 표기됨', note: '다른 지표는 사실상 0건' },
    ],
    unknowns: [
      'UPF 등급이 세탁·마모 후 얼마나 유지되는지에 대한 브랜드 공개 데이터는 확보하지 못했습니다.',
      '젖은 상태에서 UPF가 어떻게 변하는지도 확인하지 못했습니다.',
    ],
    related: ['wicking-ommc', 'polyester'],
    updatedAt: '2026-09-07',
    keywords: ['UPF', '자외선 차단', '여름 러닝복', '기능성 의류 자외선'],
  },

  {
    id: 'wicking-ommc',
    slug: 'wicking-ommc',
    type: 'metric',
    name: '흡한속건은 어떻게 재는가 (AATCC TM195 · ISO 17617)',
    nameEn: 'Liquid Moisture Management, AATCC TM195',
    summary: '"흡한속건"에는 실제 시험 규격이 있다. 브랜드는 그 결과를 공개하지 않고, 공공기관은 공개한다.',
    intro:
      '"흡한속건"은 마케팅 문구처럼 들리지만 측정 규격이 실재합니다. 액체수분관리성 시험(MMT)은 물이 원단에서 퍼지고 통과하는 과정을 여러 지표로 나눠 재고, ' +
      '종합 등급인 OMMC를 1~5급으로 냅니다. **문제는 브랜드가 이 결과를 내놓지 않는다는 것입니다.**',
    claims: [
      {
        text:
          '액체수분관리성은 AATCC TM195(MMT)로 측정하며 OMMC 1~5급으로 표기합니다. 건조속도는 ISO 17617(= KS K ISO 17617)로 별도 측정합니다.',
        grade: 'A',
        source: 'AATCC TM195, ISO 17617 규격 체계',
      },
      {
        text:
          '이 지표들은 브랜드 표기 사례가 없는 반면, 한국소비자원 시험 결과에는 등급으로 공개됩니다. 즉 수치가 없는 게 아니라 **판매자가 아니라 공공기관 쪽에 있습니다.**',
        grade: 'A',
        source: '자체 조사 — 브랜드 공식 문서 대조 + 한국소비자원 시험 결과, 2026-09-04',
      },
      {
        text:
          '정량 수치를 대는 쪽은 브랜드가 아니라 소재 공급사입니다. Pertex Quantum · Salomon AdvancedSkin Dry · HeiQ Smart Temp · UA Iso-Chill · 37.5는 숫자를 냅니다. ' +
          'Nike · adidas · lululemon · Brooks · New Balance · ASICS는 정성 표현뿐입니다.',
        grade: 'B',
        source: '각 소재 공급사 공식 기술 자료',
        caveat: '37.5와 Iso-Chill의 수치는 자체 시험이며 프로토콜과 표본수가 공개되지 않았습니다. 인용 시 "브랜드 자체 시험"을 병기해야 합니다.',
      },
      {
        text:
          '접촉냉감(Qmax)은 JIS L 1927로 측정하며 0.100 W/cm² 이상이면 냉감으로 봅니다. 러닝복에서는 문구만 쓰이고 수치는 대개 표기되지 않습니다.',
        grade: 'A',
        source: 'JIS L 1927 규격',
      },
    ],
    measurements: [
      { label: '액체수분관리', value: 'AATCC TM195 (MMT)', note: 'OMMC 1~5급' },
      { label: '건조속도', value: 'ISO 17617 = KS K ISO 17617' },
      { label: '공기투과도', value: 'ISO 9237 = KS K ISO 9237', note: 'L/m²/s' },
      { label: '단위면적당 질량', value: 'ISO 3801', note: 'g/m² (GSM)' },
      { label: '발수(스프레이)', value: 'ISO 4920 = KS K ISO 4920', note: '0~5급' },
      { label: '접촉냉감', value: 'JIS L 1927', note: '0.100 W/cm² 이상 = 냉감' },
    ],
    misconceptions: [
      {
        myth: '흡한속건은 정해진 기준이 없는 마케팅 용어다.',
        reality:
          '규격은 있습니다. AATCC TM195·ISO 17617·ISO 9237 등이 각각 다른 국면을 잽니다. 없는 것은 기준이 아니라 **브랜드가 그 결과를 공개할 의무**입니다.',
        source: '규격 체계 대조',
      },
    ],
    unknowns: [
      'AATCC·ASTM 규격 전문은 유료라 열람하지 못했습니다. 이 페이지는 규격 번호와 단위·등급 체계까지만 다룹니다.',
      '한국 시험기관 3사에서 공개된 러닝복 시험 데이터는 찾지 못했습니다.',
      '해외 소비자기관 6곳을 확인했으나 러닝 의류를 시험하는 곳은 없었습니다.',
    ],
    related: ['ret-iso-11092', 'upf', 'kca-running-jacket-2025'],
    relatedPosts: ['hot-weather-summer-running-safety-guide-korea', 'summer-breathable-running-shoes-2026'],
    updatedAt: '2026-09-07',
    keywords: ['흡한속건', 'AATCC TM195', 'OMMC', '건조속도', '접촉냉감', 'Qmax'],
  },
];
