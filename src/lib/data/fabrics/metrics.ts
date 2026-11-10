import type { Fabric } from '@/types/fabric';

// 성능 지표·시험 규격 — 수치가 존재하는 자리와, 아무도 공개하지 않는 자리
// 근거: docs/references/apparel-fabric-provenance.md (B-1 · B-2 · B-3 · E-1c · E-2)

export const metricFabrics: Fabric[] = [
  {
  "id": "ret-iso-11092",
  "slug": "ret-iso-11092",
  "type": "metric",
  "name": "증발저항 Ret (ISO 11092)",
  "nameEn": "Water-vapour resistance, ISO 11092",
  "summary": "열저항·수증기 저항을 정상상태에서 재는 규격입니다. 공기투과도나 모든 상황의 쾌적성 점수와 다릅니다.",
  "intro": "Ret는 수증기 이동에 대한 저항을 나타냅니다. 공기의 통과와 액체 땀의 이동은 다른 시험이며, 공개된 규격 소개만으로 특정 상표의 Ret값이나 쾌적성 등급을 만들 수 없습니다.",
  "claims": [
    {
      "text": "2026년11월 확인한 ISO 공식 페이지는 ISO11092:2026을2026년5월 발행한 제3판으로 안내합니다. 의류용 원단·필름·폼·여러 층 등의 정상상태 열저항과 수증기 저항 시험을 다룹니다.",
      "grade": "A",
      "source": "ISO11092:2026 공식 공개 소개·초록",
      "sourceUrl": "https://www.iso.org/standard/85998.html"
    },
    {
      "text": "공개 초록은 시험 조건이 특정 쾌적 상황을 대표하지 않으며 생리적 쾌적성의 성능 사양을 제시하지 않는다고 설명합니다. 따라서 한 Ret값만으로 모든 러너의 체감 등급을 확정하지 않습니다.",
      "grade": "A",
      "source": "ISO11092:2026 공개 초록",
      "sourceUrl": "https://www.iso.org/standard/85998.html"
    },
    {
      "text": "ASTM F3628-24 공식 소개는 발한·건조 단계의 수분 이동과 증발에 따른 냉각 에너지를 별도로 다룹니다. 정상상태 증발저항과 이 시험을 같은 값으로 합치지 않습니다.",
      "grade": "A",
      "source": "ASTM F3628-24 공식 공개 소개",
      "sourceUrl": "https://store.astm.org/f3628-24.html",
      "caveat": "유료 전문을 열람한 것은 아닙니다. 기존23판 링크 대신 공식 목록의24판을 확인했습니다."
    }
  ],
  "unknowns": [
    "유료 규격 전문과 개별 브랜드 제품 성적서를 열람하지 않았습니다.",
    "2014년판을 사용한 과거 논문은 당시 시험판을 그대로 밝혀 인용해야 하며 오늘 규격의 시험을 했다고 바꾸지 않습니다."
  ],
  "related": [
    "gore-tex-infinium",
    "polyester",
    "kca-running-jacket-2025",
    "air-permeability-iso-9237"
  ],
  "updatedAt": "2026-11-10",
  "keywords": [
    "Ret",
    "ISO 11092",
    "증발저항",
    "원단 통기성",
    "투습도"
  ],
  "measurements": [
    {
      "label": "현재 확인 판",
      "value": "ISO11092:2026",
      "note": "제3판·2026-05 발행"
    },
    {
      "label": "수증기 저항",
      "value": "Ret",
      "note": "공기투과·액체수분 시험과 구분"
    }
  ],
  "misconceptions": [
    {
      "myth": "논문의 일반 원단 Ret값을 Dri-FIT 전체 값으로 쓸 수 있다.",
      "reality": "정확 시료와 시험 조건이 같은지 확인해야 합니다. 다른 논문의 원단을 상표 전체의 성적서로 옮길 근거는 없습니다.",
      "source": "ISO 시험 범위와 시료 구분",
      "sourceUrl": "https://www.iso.org/standard/85998.html"
    }
  ]
},

  {
  "id": "upf",
  "slug": "upf",
  "type": "metric",
  "name": "UPF 자외선 차단지수",
  "nameEn": "UPF (Ultraviolet Protection Factor)",
  "summary": "의복·원단의 자외선 차단을 시험하는 지수입니다. 호주 현행 기준 안내와 개별 제품 시험을 구분합니다.",
  "intro": "호주 방사선방호청 ARPANSA는 원단의 UPF를 실험으로 확인하고 제품을 표시하는 절차를 안내합니다. UPF가 높다는 사실만으로 시원함·흡한속건·옷이 덮지 않는 부위의 보호를 보장하지 않습니다.",
  "claims": [
    {
      "text": "ARPANSA 안내는15를 최소 보호,30을 양호,50·50+를 우수 보호로 구분합니다. 이는 해당 기준의 분류이며 모든 국가의 의류 시험을 하나의 동일 규격으로 합친 것은 아닙니다.",
      "grade": "A",
      "source": "ARPANSA 공식 의복·원단 시험 안내",
      "sourceUrl": "https://www.arpansa.gov.au/our-services/testing-and-calibration/ultraviolet-radiation-testing/fabric-testing"
    },
    {
      "text": "ARPANSA는 AS4399에 따른 시험을 안내합니다. 기존 AS/NZS4399와 KS K0850을 판·목적 확인 없이 같은 현행 표시 체계로 묶은 표현은 수정했습니다.",
      "grade": "A",
      "source": "ARPANSA 공식 의복 시험·기준 안내",
      "sourceUrl": "https://www.arpansa.gov.au/our-services/testing-and-calibration/ultraviolet-radiation-testing/fabric-testing"
    },
    {
      "text": "공식 선택 안내는 조직 밀도·구조 등 여러 조건이 차단에 영향을 주며 옷이 덮는 부위도 중요하다고 설명합니다. UPF라벨만으로 전체 피부의 보호가 끝나는 것은 아닙니다.",
      "grade": "A",
      "source": "ARPANSA 공식 의복 자외선 보호 안내",
      "sourceUrl": "https://www.arpansa.gov.au/understanding-radiation/radiation-sources/more-radiation-sources/sun-protection-clothing"
    }
  ],
  "unknowns": [
    "이번에는 개별 러닝복 KOTITI 성적서의 현재 제품·시료 동일성을 재검증하지 않아 특정 상품의 최신 UPF로 남기지 않았습니다.",
    "국내 KS규격의 현행 전문·각 상품의 세탁·젖음·신장 조건별 결과는 확인하지 않았습니다."
  ],
  "related": [
    "wicking-ommc",
    "polyester"
  ],
  "updatedAt": "2026-11-10",
  "keywords": [
    "UPF",
    "자외선 차단",
    "여름 러닝복",
    "기능성 의류 자외선"
  ],
  "measurements": [
    {
      "label": "ARPANSA 안내 분류",
      "value": "15 / 30 / 50·50+",
      "note": "최소 / 양호 / 우수"
    }
  ]
},

  {
  "id": "wicking-ommc",
  "slug": "wicking-ommc",
  "type": "metric",
  "name": "흡한속건은 어떻게 재는가 (AATCC TM195 · ISO 17617)",
  "nameEn": "Liquid Moisture Management, AATCC TM195",
  "summary": "액체 땀 이동·건조속도·접촉냉감은 다른 시험입니다. OMMC 자체 값과1~5급 분류도 구분합니다.",
  "intro": "흡한속건이라는 문구를 보았다면 무엇을 어떻게 시험했는지 확인하세요. 액체 수분의 이동과 수분이 마르는 속도, 수증기 저항을 한 가지 점수로 합치지 않습니다.",
  "claims": [
    {
      "text": "AATCC TM195 공식 공개 소개는 편물·직물·부직포의 액체 수분 관리 특성을 측정·평가·분류하는 시험이라고 설명합니다. 공개 소개만으로 모든 상표의 합격선이나 실제 제품 결과를 정할 수 없습니다.",
      "grade": "A",
      "source": "AATCC TM195 공식 공개 소개",
      "sourceUrl": "https://members.aatcc.org/store/tm195/591/"
    },
    {
      "text": "2025년 Vasile 연구는 MMT로 젖음 시간·확산·흡수 등을 측정하고 OMMC를 계산한 뒤 지표를1~5급으로 분류했습니다. OMMC 지수 자체와1~5급 등급을 같은 숫자로 쓰지 않습니다.",
      "grade": "A",
      "source": "Vasile et al., Materials2025 — 시험 방법2.2.2",
      "sourceUrl": "https://www.mdpi.com/1996-1944/18/8/1859",
      "caveat": "18종 작업복용 니트 시료의 시험입니다. 러닝복 모든 상표의 공통 성적서가 아닙니다."
    },
    {
      "text": "ISO17617:2014는 원단의 수분 건조 성질을 다루며2025년 재검토 확인으로 현행 안내됩니다. 느슨한 섬유나 실 자체의 건조속도 시험에는 적합하지 않다고 명시합니다.",
      "grade": "A",
      "source": "ISO17617 공식 공개 소개",
      "sourceUrl": "https://www.iso.org/standard/60156.html"
    },
    {
      "text": "2022년 소비자원 티셔츠 안내는 JIS L1927 부속서B의0.100W/cm²를 해외 참고 냉감 기준으로 사용했습니다. 이를 모든 원단·시험 조건에 적용되는 보편적 합격선으로 확대하지 않습니다.",
      "grade": "A",
      "source": "한국소비자원2022 스포츠 티셔츠 공식 안내",
      "sourceUrl": "https://www.kca.go.kr/kca/sub.do?menukey=5293&mode=view&no=1003341998"
    }
  ],
  "unknowns": [
    "AATCC·ISO 유료 전문과 모든 제품의 시험성적서는 이번에 열람하지 않았습니다.",
    "브랜드가 수치를 절대 공개하지 않는다거나 공개 의무가 없다는 포괄적 단정은 이번 근거 범위에서 제외했습니다."
  ],
  "related": [
    "ret-iso-11092",
    "upf",
    "kca-running-jacket-2025"
  ],
  "relatedPosts": [
    "hot-weather-summer-running-safety-guide-korea",
    "summer-breathable-running-shoes-2026"
  ],
  "updatedAt": "2026-11-10",
  "keywords": [
    "흡한속건",
    "AATCC TM195",
    "OMMC",
    "건조속도",
    "접촉냉감",
    "Qmax"
  ],
  "measurements": [
    {
      "label": "액체수분 관리",
      "value": "AATCC TM195",
      "note": "OMMC 지수와 등급은 구분"
    },
    {
      "label": "수분 건조 성질",
      "value": "ISO17617:2014",
      "note": "2025년 재검토 확인"
    },
    {
      "label": "접촉냉감",
      "value": "별도 조건의 시험",
      "note": "액체 땀 이동·증발저항과 다름"
    }
  ],
  "misconceptions": [
    {
      "myth": "흡한속건이라는 말 하나면 건조·투습·냉감까지 같은 시험으로 검증됐다.",
      "reality": "측정 대상과 시료·세탁·온도·습도 조건을 나누어 보세요. TM195와 건조속도 규격은 다른 성질을 다룹니다.",
      "source": "AATCC TM195와 ISO17617 공개 소개",
      "sourceUrl": "https://members.aatcc.org/store/tm195/591/"
    }
  ]
},
  {
  "id": "air-permeability-iso-9237",
  "slug": "air-permeability-iso-9237",
  "type": "metric",
  "name": "공기투과도 (ISO 9237)",
  "nameEn": "Air Permeability (ISO 9237)",
  "summary": "정해진 압력에서 원단을 통과하는 공기를 재는 규격입니다. 높은 값이 언제나 더 좋은 재킷이라는 뜻은 아닙니다.",
  "intro": "바람의 통과와 수증기 저항은 다른 값입니다. 공기투과 수치를 비교하려면 시험 압력·면적·단위를 맞추고, 재킷을 입을 바람·기온·운동 조건을 함께 보아야 합니다.",
  "claims": [
    {
      "text": "ISO9237:1995 공식 소개는 대부분의 공기 투과성 원단·부직포 등의 측정법을 설명하고2023년 재검토에서 확인되어 현행이라고 안내합니다.",
      "grade": "A",
      "source": "ISO9237 공식 공개 소개",
      "sourceUrl": "https://www.iso.org/standard/16869.html"
    },
    {
      "text": "소비자원2025년 재킷 시험은 원단 공기투과도를 KS K ISO9237로 시험했습니다. 이 시험에서는 뉴발란스·아디다스·젝시믹스의 정확 세 제품이★★★이고 나머지 다섯은★★입니다.",
      "grade": "A",
      "source": "한국소비자원2025 러닝 재킷 PDF7·9·19쪽",
      "sourceUrl": "https://www.kca.go.kr/home/board/download.do?menukey=4002&fno=10048804&bid=00000013&did=1003952123",
      "caveat": "브랜드 전체 순위나 백분율의 차이를 뜻하지 않습니다."
    },
    {
      "text": "Vasile2025는 작업복용 니트18종을100Pa·20cm² 조건으로 비교해138~1,382mm/s 범위를 보고했습니다. 같은 섬유 이름만으로 동일 공기투과도를 기대할 수 없는 시료별 비교입니다.",
      "grade": "A",
      "source": "Vasile et al., Materials2025 — 방법·결과",
      "sourceUrl": "https://www.mdpi.com/1996-1944/18/8/1859"
    },
    {
      "text": "소비자원은 이 재킷 시험의 체온유지·공기투과 특성을 함께 보고 용도에 맞게 선택하도록 안내합니다. 이는 공기투과도와 수증기 저항이 같은 지표라는 뜻은 아닙니다.",
      "grade": "A",
      "source": "한국소비자원2025 재킷 구매 안내",
      "sourceUrl": "https://www.kca.go.kr/home/board/download.do?menukey=4002&fno=10048804&bid=00000013&did=1003952123"
    }
  ],
  "unknowns": [
    "규격 유료 전문과 모든 시판 러닝복의 공기투과 수치는 확인하지 않았습니다.",
    "시험 압력·면적·단위가 다른 숫자를 그대로 순위로 묶지 않습니다."
  ],
  "related": [
    "kca-running-jacket-2025",
    "ret-iso-11092",
    "wicking-ommc",
    "gore-tex-infinium"
  ],
  "relatedPosts": [
    "fall-marathon-race-day-checklist-2026",
    "hot-weather-summer-running-safety-guide-korea"
  ],
  "updatedAt": "2026-11-10",
  "keywords": [
    "공기투과도",
    "통기성",
    "ISO 9237",
    "KS K ISO 9237",
    "바람막이 통기성",
    "러닝 재킷 통기성"
  ],
  "measurements": [
    {
      "label": "확인 규격",
      "value": "ISO9237:1995",
      "note": "2023년 확인·현행 안내"
    },
    {
      "label": "연구 시료 조건",
      "value": "100Pa·20cm²",
      "note": "Vasile2025의18종 작업복 니트"
    }
  ],
  "misconceptions": [
    {
      "myth": "공기투과도가 높은 재킷이 모든 계절에 더 좋다.",
      "reality": "바람과 보온·운동 중 열 배출의 필요가 다릅니다. 시험 등급을 실제 착용 환경과 함께 보세요.",
      "source": "한국소비자원2025 구매 안내",
      "sourceUrl": "https://www.kca.go.kr/home/board/download.do?menukey=4002&fno=10048804&bid=00000013&did=1003952123"
    }
  ]
},
];
