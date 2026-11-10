import type { Brand } from '@/types/brand';

export const asicsBrand: Brand = {
  "id": "asics",
  "name": "Asics",
  "nameKo": "아식스",
  "tagline": "Sound Mind, Sound Body",
  "description": "1949년 고베에서 시작한 오니츠카의 사업을 기원으로 하는 스포츠 브랜드입니다. 현재 ASICS Corporation은 1977년 오니츠카·GTO·JELENK의 합병으로 출범했습니다. 러닝화의 폼·젤·지지 구조·판은 모델과 세대에 따라 다르므로, 상표명과 실제 적용 구성을 나누어 살펴볼 필요가 있습니다.",
  "founded": 1949,
  "headquarters": "일본 고베",
  "website": "https://www.asics.co.kr",
  "technologies": [
    {
      "id": "ff-leap",
      "name": "FF LEAP™",
      "nameKo": "FF 리프",
      "category": "midsole",
      "description": "슈퍼블라스트 3·매직 스피드 5·메타스피드 레이에서 확인한 폼 명칭입니다. 다른 폼과의 조합과 적용 위치는 모델마다 다릅니다.",
      "benefits": [
        "슈퍼블라스트 3·매직 스피드 5: FF LEAP과 FF BLAST PLUS 조합",
        "레이: FF LEAP, 어퍼는 MATRYX로 구분",
        "같은 상표명으로 모든 모델의 고분자·성능을 확정하지 않기"
      ],
      "scienceExplanation": "슈퍼블라스트 3과 매직 스피드 5의 제조사 원문은 FF LEAP 위층과 FF BLAST PLUS 아래층을 설명합니다. 메타스피드 레이에서도 FF LEAP을 확인했습니다. 스카이 도쿄·엣지 도쿄는 FF TURBO PLUS와 조합하지만 2022년 스카이+·엣지+는 별도 세대입니다. 확인한 제품·출시 원문은 기본 고분자를 공시하지 않아 모든 FF LEAP을 PEBA나 TPU로 일괄 분류하지 않았습니다. 슈퍼블라스트 3에 관한 브랜드 호스팅 전문가의 TPU-based 설명은 제조사 원료 공시와 구분하며 모든 적용 모델로 확대하지 않습니다.",
      "usedInShoes": [
        "asics-superblast-3",
        "asics-magic-speed-5",
        "asics-metaspeed-ray"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사 원문의 정확 모델·세대 기술명과 확인된 적용 예시. 미공개 원료나 충돌 항목은 추정하지 않습니다. 설계 의도는 개인의 기록·통증·부상 예방·수명 보장이 아닙니다.",
        "sources": [
          {
            "title": "ASICS 공식 — super3-press",
            "url": "https://corp.asics.com/jp/press/article/2026-02-16_superblast_3",
            "scope": "2026-02-16 정확 3 일본 발표: LEAP/PLUS, woven, ASICSGRIP. 약15.2% 반발성 향상은 TURBO PLUS 사용 전작 대비 제조사 주장."
          },
          {
            "title": "ASICS 공식 — magic5",
            "url": "https://corp.asics.com/jp/press/article/2025-11-04_ekiden-pack",
            "scope": "2025-11-04 일본 EKIDEN 발표의 정확 MAGIC SPEED 5 부분: FF LEAP 상층/PLUS 하층, full-length carbon plate, engineered mesh, ASICSGRIP."
          },
          {
            "title": "ASICS 공식 — ray",
            "url": "https://www.asics.com/sg/en-sg/metaspeed-ray/p/1013A176-102.html",
            "scope": "정확 METASPEED RAY PDP: FF LEAP, 가벼운 carbon plate와 높은 전족 위치, MATRYX technical mesh, ASICSGRIP. MATRYX의 세부 섬유 조성 미공개."
          },
          {
            "title": "ASICS 메타스피드 도쿄 시리즈 공식 안내",
            "url": "https://www.asics.com/jp/ja-jp/mk/running/metaspeed",
            "scope": "SKY TOKYO·EDGE TOKYO의 MOTION WRAP 3.0, RAY의 MATRYX 구분. 2022년 + 세대와 구분"
          },
          {
            "title": "ASICS 공식 — super3-expert",
            "url": "https://www.asics.com/nz/en-nz/medical/review/superblast-3-review",
            "scope": "브랜드 호스팅 Anthony Ng 기고: SUPERBLAST 3 FF LEAP을 TPU-based로 설명. 제조사 PDP/출시 원문의 직접 재질 공시와 구분하며 모든 LEAP 모델로 일반화하지 않음."
          }
        ]
      }
    },
    {
      "id": "ff-turbo-plus",
      "name": "FF TURBO™ PLUS",
      "nameKo": "FF 터보 플러스",
      "category": "midsole",
      "description": "슈퍼블라스트 2에서 확인한 폼입니다. 2022년 스카이+·엣지+의 FF BLAST TURBO와, 슈퍼블라스트 3의 FF LEAP을 구분합니다.",
      "benefits": [
        "슈퍼블라스트 2 출시 발표: FF TURBO PLUS·FF BLAST PLUS ECO",
        "슈퍼블라스트 3: FF LEAP·FF BLAST PLUS",
        "2022년 SKY+·EDGE+의 폼 이름에 PLUS를 추가하지 않기"
      ],
      "scienceExplanation": "2024년 슈퍼블라스트 2 발표는 FF TURBO PLUS와 FF BLAST PLUS ECO 조합을 명시합니다. 전작 슈퍼블라스트의 FF BLAST TURBO보다 8% 가볍고 6% 부드러우며 에너지 리턴이 8.2% 높다는 내용은 제조사 폼 비교 주장입니다. 독립적인 RunRepeat 측정치나 8.2퍼센트포인트 상승으로 바꾸지 않습니다. NZ AW25 기술지는 하층을 PLUS로 줄여 표기하므로 원 발표의 ECO와 명칭 차이를 남깁니다. 2022년 SKY+·EDGE+는 FF BLAST TURBO로 확인되어 이 항목의 적용 연결에서 제거했습니다.",
      "usedInShoes": [
        "asics-superblast-2"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사 원문의 정확 모델·세대 기술명과 확인된 적용 예시. 미공개 원료나 충돌 항목은 추정하지 않습니다. 설계 의도는 개인의 기록·통증·부상 예방·수명 보장이 아닙니다.",
        "sources": [
          {
            "title": "ASICS 공식 — super2",
            "url": "https://corp.asics.com/en/press/article/unleash-the-responsive-power-asics-injects-ff-turbotm-plus-midsole-into-the-superblasttm-2-shoe",
            "scope": "2024 정확 2 출시 발표: FF TURBO PLUS+FF BLAST PLUS ECO(약24% bio-based), ASICSGRIP, one-piece engineered woven mesh. 비교 수치는 전작 TURBO 대비 제조사 주장."
          },
          {
            "title": "ASICS 공식 — aw25-pdf",
            "url": "https://www.asics.com/nz/en-nz/media/wysiwyg/pdf/AS-0539_Medical_TechBrochure_AW25_NZ_2.pdf",
            "scope": "Printed12 MagicSpeed4 exploded diagram: PLUS top/bottom, TURBO forefoot insert, one1.5mm full-length carbon-infused TPU plate, woven, ASICSGRIP. Printed13 Super2 upperTURBO+/lowerPLUS, HYBRIDASICSGRIP; Nova5MAX/AHAR. Printed14 MegaSQUARED,mesh/HYBRID; SonicSQUARED/MAX,forefootPebax/HYBRID. Printed11RayLEAP/MATRYX/carbon."
          },
          {
            "title": "ASICS 공식 — metaplus",
            "url": "https://corp.asics.com/jp/press/article/2022-04-24",
            "scope": "2022-04-24 일본 SKY+/EDGE+ 발표: FF BLAST TURBO와 carbon plate. SKY+ 상부 flat 배치, EDGE+ 발끝 방향 하강 형상. 4%/16%는 폼 양 증가로 ER 증가와 구분."
          }
        ]
      }
    },
    {
      "id": "ff-blast-max",
      "name": "FF BLAST™ MAX",
      "nameKo": "FF 블라스트 맥스",
      "category": "midsole",
      "description": "노바블라스트 5·6, 카야노 33, 소닉블라스트 초대에서 확인한 폼 이름입니다. MAX가 전체 폼인지 일부 층인지 구분해야 합니다.",
      "benefits": [
        "노바블라스트 6: MAX 본체·전족 TURBO SQUARED 삽입부",
        "카야노 33: MAX 위층·PLUS 아래층",
        "소닉블라스트: SQUARED 위층·MAX 아래층"
      ],
      "scienceExplanation": "노바블라스트 5는 FF BLAST MAX 미드솔을 명시합니다. 6은 같은 MAX 이름에 전족부 FF TURBO SQUARED 삽입부가 추가되어 전부 같은 폼이라고 설명하면 부정확합니다. 카야노 33은 MAX 상층·PLUS 하층, 소닉블라스트 초대는 SQUARED 상층·MAX 하층으로 확인했습니다. 카야노 32와 님버스 28의 확인 폼은 FF BLAST PLUS여서 MAX 적용 목록에 넣지 않았습니다. MAX라는 이름으로 독립적인 경도·반발률이나 장거리 수명을 결정할 수 없습니다.",
      "usedInShoes": [
        "asics-novablast-5",
        "asics-novablast-6",
        "asics-gel-kayano-33",
        "asics-sonicblast"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사 원문의 정확 모델·세대 기술명과 확인된 적용 예시. 미공개 원료나 충돌 항목은 추정하지 않습니다. 설계 의도는 개인의 기록·통증·부상 예방·수명 보장이 아닙니다.",
        "sources": [
          {
            "title": "ASICS 공식 — nova5",
            "url": "https://www.asics.com/ph/en-ph/novablast-5/p/1011B974-800.html",
            "scope": "정확 5 PDP: FF BLAST MAX, engineered jacquard mesh, tongue wing, AHAR LO. 6의 SQUARED pod와 구분."
          },
          {
            "title": "ASICS 공식 — nova6",
            "url": "https://corp.asics.com/jp/press/article/2026-07-02_novablast_6",
            "scope": "2026-07-02 일본 발표: FF BLAST MAX 본체+전족 FF TURBO SQUARED 삽입부, AHAR LO+전족 ASICSGRIP, engineered woven."
          },
          {
            "title": "ASICS 공식 — kay33",
            "url": "https://corp.asics.com/jp/press/article/2026-06-04_gel-kayano_33",
            "scope": "2026-06-04 일본 발표: MAX 상층/PLUS 하층, PureGEL, FLUIDSUPPORT. 4D는 설계 계보이며 현행 명칭과 구분. HYBRID ASICSGRIP, engineered mesh."
          },
          {
            "title": "ASICS 공식 — tokyo25",
            "url": "https://corp.asics.com/jp/press/article/2025-08-13_tokyo-collection",
            "scope": "2025-08-13 일본 출시 발표의 정확 MEGABLAST/SONICBLAST 부분만 사용. Sonic 상층 SQUARED/하층 MAX 및 ASTROPLATE resin plate, ASICSGRIP."
          }
        ]
      }
    },
    {
      "id": "puregel",
      "name": "PureGEL™",
      "nameKo": "퓨어젤",
      "category": "cushioning",
      "description": "카야노 32·33과 님버스 28에서 확인한 젤 부품입니다. 슬로우쿠시의 PureGEL PLUS는 이름과 구성이 다른 항목으로 구분합니다.",
      "benefits": [
        "카야노 32·33: 후족부 PureGEL 확인",
        "65% 더 부드럽다는 문구는 제조사 부품 비교",
        "PureGEL PLUS의 경량화와 완성화 성능을 혼동하지 않기"
      ],
      "scienceExplanation": "제조사 제품 설명에는 표준 GEL보다 PureGEL이 65% 부드럽다는 비교 문구가 있습니다. 이 수치를 충격흡수 65% 향상, 관절 부하 65% 감소, 부상 예방률로 바꾸지 않습니다. PureGEL은 폼 상표명과 별개의 부품이며 확인하지 않은 모든 모델로 적용을 확대하지 않습니다. 슬로우쿠시의 명칭은 PureGEL PLUS이고 제조사가 말하는 약 20% 경량화는 PureGEL 대비 부품 무게 비교입니다. 신발 전체가 20% 가벼워졌다는 뜻이 아니므로 동일 제품 연결로 묶지 않았습니다.",
      "usedInShoes": [
        "asics-gel-kayano-32",
        "asics-gel-kayano-33",
        "asics-gel-nimbus-28"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사 원문의 정확 모델·세대 기술명과 확인된 적용 예시. 미공개 원료나 충돌 항목은 추정하지 않습니다. 설계 의도는 개인의 기록·통증·부상 예방·수명 보장이 아닙니다.",
        "sources": [
          {
            "title": "ASICS 공식 — kay32",
            "url": "https://www.asics.com/sg/en-sg/gel-kayano-32/p/1011C052-401.html",
            "scope": "정확 32 PDP: FF BLAST PLUS, rearfoot PureGEL, 4D GUIDANCE SYSTEM, engineered mesh, OrthoLite X-55, HYBRID ASICSGRIP(ASICSGRIP+AHARPLUS)."
          },
          {
            "title": "ASICS 공식 — kay33",
            "url": "https://corp.asics.com/jp/press/article/2026-06-04_gel-kayano_33",
            "scope": "2026-06-04 일본 발표: MAX 상층/PLUS 하층, PureGEL, FLUIDSUPPORT. 4D는 설계 계보이며 현행 명칭과 구분. HYBRID ASICSGRIP, engineered mesh."
          },
          {
            "title": "ASICS 공식 — nimbus28",
            "url": "https://www.asics.com/nz/en-nz/gel-nimbus-28-mens-1011c127-020",
            "scope": "정확 NZ 28 PDP: FF BLAST PLUS, PureGEL, engineered knit, OrthoLite X-55, HYBRID ASICSGRIP. 폼 기초 고분자 미공개."
          },
          {
            "title": "ASICS 공식 — slow",
            "url": "https://corp.asics.com/jp/press/article/2026-10-01_gel-slowcush",
            "scope": "2026-10-01 일본 정확 GEL-SLOWCUSH 발표: FF LUXE PLUS, rearfoot PureGEL PLUS, engineered mesh, HYBRID ASICSGRIP. PureGEL PLUS 약20% 경량은 PureGEL 대비 부품 주장."
          }
        ]
      }
    },
    {
      "id": "3d-guidance-system",
      "name": "3D / 4D GUIDANCE · FLUIDSUPPORT",
      "nameKo": "세대별 가이던스·지지 구조",
      "category": "stability",
      "description": "3D GUIDANCE·4D GUIDANCE·FLUIDSUPPORT는 같은 이름이 아닙니다. GT-2000 14, 카야노 32, 카야노 33의 확인 명칭을 나눕니다.",
      "benefits": [
        "GT-2000 14: 3D GUIDANCE SYSTEM",
        "카야노 32: 4D GUIDANCE SYSTEM",
        "카야노 33: FLUIDSUPPORT"
      ],
      "scienceExplanation": "GT-2000 14의 공식 제품 설명은 3D GUIDANCE SYSTEM을 명시합니다. 카야노 32의 확인 명칭은 4D GUIDANCE SYSTEM이고, 33의 출시 발표는 그 설계 개념을 계승한 FLUIDSUPPORT를 설명합니다. 따라서 카야노 32를 3D 적용 모델로 연결하던 설명을 수정했습니다. 아래 카야노 연결은 각각 4D와 FLUIDSUPPORT의 예시입니다. GT-2000 14는 현재 사이트 등록 모델이 아니어서 제품 목록에는 추가하지 않습니다. 슬로우쿠시의 FLUIDSUPPORT 적용은 확인되지 않았습니다. 발 모양만으로 자동 교정·부상 예방 효과를 판정하지 않습니다.",
      "usedInShoes": [
        "asics-gel-kayano-32",
        "asics-gel-kayano-33"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사 원문의 정확 모델·세대 기술명과 확인된 적용 예시. 미공개 원료나 충돌 항목은 추정하지 않습니다. 설계 의도는 개인의 기록·통증·부상 예방·수명 보장이 아닙니다.",
        "sources": [
          {
            "title": "ASICS 공식 GT-2000 14 제품 설명",
            "url": "https://outlet.asics.com/pl/en-pl/gt-2000-14/p/1011C056-400.html",
            "scope": "정확 14세대 3D GUIDANCE 명칭. 다른 세대와 가격·재고로 확대하지 않음"
          },
          {
            "title": "ASICS 공식 — kay32",
            "url": "https://www.asics.com/sg/en-sg/gel-kayano-32/p/1011C052-401.html",
            "scope": "정확 32 PDP: FF BLAST PLUS, rearfoot PureGEL, 4D GUIDANCE SYSTEM, engineered mesh, OrthoLite X-55, HYBRID ASICSGRIP(ASICSGRIP+AHARPLUS)."
          },
          {
            "title": "ASICS 공식 — kay33",
            "url": "https://corp.asics.com/jp/press/article/2026-06-04_gel-kayano_33",
            "scope": "2026-06-04 일본 발표: MAX 상층/PLUS 하층, PureGEL, FLUIDSUPPORT. 4D는 설계 계보이며 현행 명칭과 구분. HYBRID ASICSGRIP, engineered mesh."
          },
          {
            "title": "ASICS 공식 — slow-pdp",
            "url": "https://www.asics.com/sg/en-sg/gel-slowcush/p/1013A187-250.html",
            "scope": "FF LUXE PLUS, physically foamed PureGEL PLUS arranged as hexagonal prisms with gaps that compress/fill under load, engineered mesh, OrthoLite sockliner, HYBRID ASICSGRIP(ASICSGRIP+AHARPLUS). No FLUIDSUPPORT statement found in full technical section."
          }
        ]
      }
    },
    {
      "id": "carbon-plate",
      "name": "Carbon Plate",
      "nameKo": "카본 플레이트",
      "category": "plate",
      "description": "메타스피드의 카본판은 세대와 모델마다 형상·배치가 다릅니다. 소닉블라스트의 Pebax 판을 카본에 포함하지 않습니다.",
      "benefits": [
        "2022년 SKY+·EDGE+: 전장 카본판과 다른 배치",
        "메타스피드 레이: 가벼운 카본판, 전장 여부는 미확인",
        "매직 스피드의 TPU 복합재 문구는 별도로 확인"
      ],
      "scienceExplanation": "2022년 발표는 SKY+의 높은 위치·평평한 판과 EDGE+의 발끝 방향으로 내려가는 판을 구분합니다. 레이 원문도 카본판을 명시하지만 전장이라고 확정할 근거까지 확인한 것은 아닙니다. 판 하나만으로 효율 향상을 정량화하거나 모든 모델의 길이·섬유 적층이 같다고 설명하지 않습니다. 매직 스피드 4·5는 더 구체적인 carbon TPU 또는 carbon-infused TPU 문구가 확인되어 다음 항목으로 구분했고, 소닉블라스트는 PEBAX 판이므로 이 카본 적용 목록에서 제거했습니다.",
      "usedInShoes": [
        "asics-metaspeed-sky-plus",
        "asics-metaspeed-edge-plus",
        "asics-metaspeed-ray"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사 원문의 정확 모델·세대 기술명과 확인된 적용 예시. 미공개 원료나 충돌 항목은 추정하지 않습니다. 설계 의도는 개인의 기록·통증·부상 예방·수명 보장이 아닙니다.",
        "sources": [
          {
            "title": "ASICS 공식 — metaplus",
            "url": "https://corp.asics.com/jp/press/article/2022-04-24",
            "scope": "2022-04-24 일본 SKY+/EDGE+ 발표: FF BLAST TURBO와 carbon plate. SKY+ 상부 flat 배치, EDGE+ 발끝 방향 하강 형상. 4%/16%는 폼 양 증가로 ER 증가와 구분."
          },
          {
            "title": "ASICS 공식 — au-distance",
            "url": "https://www.asics.com/au/en-au/blog/how-to-choose-the-best-long-distance-running-shoes-for-you/",
            "scope": "Only exact SKY+/EDGE+ named sections used: both full-length carbon plates; EDGE+ ASICSGRIP. Other models and dynamic menu excluded."
          },
          {
            "title": "ASICS 공식 — ray",
            "url": "https://www.asics.com/sg/en-sg/metaspeed-ray/p/1013A176-102.html",
            "scope": "정확 METASPEED RAY PDP: FF LEAP, 가벼운 carbon plate와 높은 전족 위치, MATRYX technical mesh, ASICSGRIP. MATRYX의 세부 섬유 조성 미공개."
          },
          {
            "title": "ASICS 공식 — aw25-pdf",
            "url": "https://www.asics.com/nz/en-nz/media/wysiwyg/pdf/AS-0539_Medical_TechBrochure_AW25_NZ_2.pdf",
            "scope": "Printed12 MagicSpeed4 exploded diagram: PLUS top/bottom, TURBO forefoot insert, one1.5mm full-length carbon-infused TPU plate, woven, ASICSGRIP. Printed13 Super2 upperTURBO+/lowerPLUS, HYBRIDASICSGRIP; Nova5MAX/AHAR. Printed14 MegaSQUARED,mesh/HYBRID; SonicSQUARED/MAX,forefootPebax/HYBRID. Printed11RayLEAP/MATRYX/carbon."
          },
          {
            "title": "ASICS 공식 — sonic",
            "url": "https://www.asics.com/sg/en-sg/sonicblast/p/1012B862-001.html",
            "scope": "정확 초대 SG 여성 SKU PDP: FF TURBO SQUARED+FF BLAST MAX, 두 폼 사이 PEBAX plate, engineered mesh, ASICSGRIP. Sonicblast 2 형상 대입 없음."
          }
        ]
      }
    },
    {
      "id": "hybrid-plate",
      "name": "TPU Composite / PEBAX Plate",
      "nameKo": "TPU 복합재 / PEBAX 플레이트",
      "category": "plate",
      "description": "매직 스피드의 TPU 복합재 판과 소닉블라스트의 Pebax ASTROPLATE를 구분해 설명합니다. 둘을 동일한 카본판으로 묶지 않습니다.",
      "benefits": [
        "매직 스피드 4: NZ 기술지의 carbon-infused TPU",
        "매직 스피드 5: NZ 본문의 carbon TPU·일반 carbon 표현 병존",
        "소닉블라스트 초대: PEBAX 판, 카본 적용 근거와 구분"
      ],
      "scienceExplanation": "ASICS NZ AW25 기술지 12쪽은 매직 스피드 4의 1.5mm 전장 carbon-infused TPU 판과 한 장의 판 도식을 제공합니다. 매직 스피드 5의 NZ 제품 본문은 carbon TPU, 기술 항목은 full-length carbon plate로 표기합니다. 이 표현만으로 연속 탄소섬유 적층판과 동일하다거나 카본 함량·유연성 순위를 확정하지 않습니다. 소닉블라스트 초대의 공식 SG 원문은 두 폼 사이 PEBAX 판을 명시하고 일본 발표는 ASTROPLATE 수지판으로 설명합니다. 아래 매직 4·5와 소닉의 연결은 서로 다른 재료 사례를 비교하기 위한 것입니다.",
      "usedInShoes": [
        "asics-magic-speed-4",
        "asics-magic-speed-5",
        "asics-sonicblast"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사 원문의 정확 모델·세대 기술명과 확인된 적용 예시. 미공개 원료나 충돌 항목은 추정하지 않습니다. 설계 의도는 개인의 기록·통증·부상 예방·수명 보장이 아닙니다.",
        "sources": [
          {
            "title": "ASICS 공식 — aw25-pdf",
            "url": "https://www.asics.com/nz/en-nz/media/wysiwyg/pdf/AS-0539_Medical_TechBrochure_AW25_NZ_2.pdf",
            "scope": "Printed12 MagicSpeed4 exploded diagram: PLUS top/bottom, TURBO forefoot insert, one1.5mm full-length carbon-infused TPU plate, woven, ASICSGRIP. Printed13 Super2 upperTURBO+/lowerPLUS, HYBRIDASICSGRIP; Nova5MAX/AHAR. Printed14 MegaSQUARED,mesh/HYBRID; SonicSQUARED/MAX,forefootPebax/HYBRID. Printed11RayLEAP/MATRYX/carbon."
          },
          {
            "title": "ASICS 공식 — magic5-nz",
            "url": "https://www.asics.com/nz/en-nz/magic-speed-5-unisex-1013a183-300",
            "scope": "정확 5 NZ PDP: 본문 carbon TPU plate, 기술항목 full-length carbon plate. LEAP/PLUS. LEAP 대 FF BLAST 33% 경량/13% 반발성은 제조사 문구로 분리."
          },
          {
            "title": "ASICS 공식 — magic5",
            "url": "https://corp.asics.com/jp/press/article/2025-11-04_ekiden-pack",
            "scope": "2025-11-04 일본 EKIDEN 발표의 정확 MAGIC SPEED 5 부분: FF LEAP 상층/PLUS 하층, full-length carbon plate, engineered mesh, ASICSGRIP."
          },
          {
            "title": "ASICS 공식 — sonic",
            "url": "https://www.asics.com/sg/en-sg/sonicblast/p/1012B862-001.html",
            "scope": "정확 초대 SG 여성 SKU PDP: FF TURBO SQUARED+FF BLAST MAX, 두 폼 사이 PEBAX plate, engineered mesh, ASICSGRIP. Sonicblast 2 형상 대입 없음."
          },
          {
            "title": "ASICS 공식 — tokyo25",
            "url": "https://corp.asics.com/jp/press/article/2025-08-13_tokyo-collection",
            "scope": "2025-08-13 일본 출시 발표의 정확 MEGABLAST/SONICBLAST 부분만 사용. Sonic 상층 SQUARED/하층 MAX 및 ASTROPLATE resin plate, ASICSGRIP."
          }
        ]
      }
    },
    {
      "id": "motion-wrap-3",
      "name": "MOTION WRAP™ 3.0",
      "nameKo": "모션 랩 3.0",
      "category": "upper",
      "description": "스카이 도쿄·엣지 도쿄 공식 안내에서 확인한 어퍼 명칭입니다. 2022년 SKY+·EDGE+나 레이에 3.0을 붙이지 않습니다.",
      "benefits": [
        "SKY TOKYO·EDGE TOKYO: MOTION WRAP 3.0",
        "RAY: MATRYX로 구분",
        "세대가 다른 SKY+·EDGE+의 미확인 연결 제거"
      ],
      "scienceExplanation": "공식 메타스피드 도쿄 안내는 SKY TOKYO와 EDGE TOKYO에 MOTION WRAP 3.0을 적용하고 레이는 MATRYX를 쓴다고 명시합니다. 이번에 대조한 2022년 SKY+·EDGE+ 원문은 3.0 적용을 확인할 근거가 아니므로 기존 연결을 비웠습니다. 도쿄 두 모델은 현재 사이트 등록 모델이 아니어서 임의 새 상품을 만들지 않았습니다. 통기성과 발 고정을 위한 제조사 설계 설명이며, 레이스 내내 발 밀림이 없거나 모든 발볼에 편안하다는 보장은 아닙니다.",
      "usedInShoes": [],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사 원문의 정확 모델·세대 기술명과 확인된 적용 예시. 미공개 원료나 충돌 항목은 추정하지 않습니다. 설계 의도는 개인의 기록·통증·부상 예방·수명 보장이 아닙니다.",
        "sources": [
          {
            "title": "ASICS 메타스피드 도쿄 시리즈 공식 안내",
            "url": "https://www.asics.com/jp/ja-jp/mk/running/metaspeed",
            "scope": "SKY TOKYO·EDGE TOKYO의 MOTION WRAP 3.0, RAY의 MATRYX 구분. 2022년 + 세대와 구분"
          },
          {
            "title": "ASICS 공식 — skyplus",
            "url": "https://www.asics.com/jp/ja-jp/metaspeed-sky%2B/p/1013A115-700.html",
            "scope": "정확 2022 SKY+ 1013A115-700 PDP: FF BLAST TURBO, synthetic-fiber upper, 고정 FLYTEFOAM synthetic-resin sockliner. MotionWrap 버전 확인 불가."
          },
          {
            "title": "ASICS 공식 — edgeplus",
            "url": "https://www.asics.com/jp/ja-jp/metaspeed-edge%2B/p/1013A116-700.html",
            "scope": "정확 2022 EDGE+ 1013A116-700 PDP: FF BLAST TURBO, synthetic-fiber upper, 고정 FLYTEFOAM synthetic-resin sockliner. PARIS/TOKYO 자료 대입 없음."
          },
          {
            "title": "ASICS 공식 — ray",
            "url": "https://www.asics.com/sg/en-sg/metaspeed-ray/p/1013A176-102.html",
            "scope": "정확 METASPEED RAY PDP: FF LEAP, 가벼운 carbon plate와 높은 전족 위치, MATRYX technical mesh, ASICSGRIP. MATRYX의 세부 섬유 조성 미공개."
          }
        ]
      }
    },
    {
      "id": "hybrid-asicsgrip",
      "name": "HYBRID ASICSGRIP™",
      "nameKo": "하이브리드 아식스그립",
      "category": "outsole",
      "description": "ASICSGRIP과 AHARPLUS를 조합하는 아웃솔 명칭입니다. 정확 원문으로 확인한 모델과 지역 자료가 충돌하는 모델을 나눕니다.",
      "benefits": [
        "카야노 32·33, 님버스 28, 슬로우쿠시에서 명칭 확인",
        "슈퍼블라스트 2의 지역 자료 간 명칭 차이는 보류",
        "빗길에서도 미끄러지지 않는다는 표현 제거"
      ],
      "scienceExplanation": "카야노 32·33, 님버스 28, 슬로우쿠시의 정확 제품/발표 원문은 HYBRID ASICSGRIP과 ASICSGRIP·AHARPLUS 조합을 설명합니다. 슈퍼블라스트 2는 2024년 출시 발표의 ASICSGRIP, NZ AW25 기술지의 HYBRID ASICSGRIP, PH 제품 본문의 AHARPLUS heel plug 표기가 달라 단일한 전장 재료로 확정하지 않았습니다. 메가블라스트·소닉블라스트도 NZ 기술지와 출시·지역 제품 문구가 달라 미확인 목록을 억지로 늘리지 않습니다. 실제 접지는 고무 이름뿐 아니라 배치·노면·마모에 따라 달라집니다.",
      "usedInShoes": [
        "asics-gel-kayano-32",
        "asics-gel-kayano-33",
        "asics-gel-nimbus-28",
        "asics-gel-slowcush"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사 원문의 정확 모델·세대 기술명과 확인된 적용 예시. 미공개 원료나 충돌 항목은 추정하지 않습니다. 설계 의도는 개인의 기록·통증·부상 예방·수명 보장이 아닙니다.",
        "sources": [
          {
            "title": "ASICS 공식 — kay32",
            "url": "https://www.asics.com/sg/en-sg/gel-kayano-32/p/1011C052-401.html",
            "scope": "정확 32 PDP: FF BLAST PLUS, rearfoot PureGEL, 4D GUIDANCE SYSTEM, engineered mesh, OrthoLite X-55, HYBRID ASICSGRIP(ASICSGRIP+AHARPLUS)."
          },
          {
            "title": "ASICS 공식 — kay33",
            "url": "https://corp.asics.com/jp/press/article/2026-06-04_gel-kayano_33",
            "scope": "2026-06-04 일본 발표: MAX 상층/PLUS 하층, PureGEL, FLUIDSUPPORT. 4D는 설계 계보이며 현행 명칭과 구분. HYBRID ASICSGRIP, engineered mesh."
          },
          {
            "title": "ASICS 공식 — nimbus28",
            "url": "https://www.asics.com/nz/en-nz/gel-nimbus-28-mens-1011c127-020",
            "scope": "정확 NZ 28 PDP: FF BLAST PLUS, PureGEL, engineered knit, OrthoLite X-55, HYBRID ASICSGRIP. 폼 기초 고분자 미공개."
          },
          {
            "title": "ASICS 공식 — slow",
            "url": "https://corp.asics.com/jp/press/article/2026-10-01_gel-slowcush",
            "scope": "2026-10-01 일본 정확 GEL-SLOWCUSH 발표: FF LUXE PLUS, rearfoot PureGEL PLUS, engineered mesh, HYBRID ASICSGRIP. PureGEL PLUS 약20% 경량은 PureGEL 대비 부품 주장."
          },
          {
            "title": "ASICS 공식 — super2",
            "url": "https://corp.asics.com/en/press/article/unleash-the-responsive-power-asics-injects-ff-turbotm-plus-midsole-into-the-superblasttm-2-shoe",
            "scope": "2024 정확 2 출시 발표: FF TURBO PLUS+FF BLAST PLUS ECO(약24% bio-based), ASICSGRIP, one-piece engineered woven mesh. 비교 수치는 전작 TURBO 대비 제조사 주장."
          },
          {
            "title": "ASICS 공식 — aw25-pdf",
            "url": "https://www.asics.com/nz/en-nz/media/wysiwyg/pdf/AS-0539_Medical_TechBrochure_AW25_NZ_2.pdf",
            "scope": "Printed12 MagicSpeed4 exploded diagram: PLUS top/bottom, TURBO forefoot insert, one1.5mm full-length carbon-infused TPU plate, woven, ASICSGRIP. Printed13 Super2 upperTURBO+/lowerPLUS, HYBRIDASICSGRIP; Nova5MAX/AHAR. Printed14 MegaSQUARED,mesh/HYBRID; SonicSQUARED/MAX,forefootPebax/HYBRID. Printed11RayLEAP/MATRYX/carbon."
          },
          {
            "title": "ASICS 공식 — super2-ph",
            "url": "https://www.asics.com/ph/en-ph/superblast-2/p/1013A142-402.html",
            "scope": "정확 2 PH PDP: PLUS ECO/TURBO PLUS. AHARPLUS heel plug 및 engineered mesh 표현이 원 출시 발표와 다름. SKU 변경으로 단정하지 않음."
          }
        ]
      }
    },
    {
      "id": "aharplus",
      "name": "AHARPLUS",
      "nameKo": "아하플러스",
      "category": "outsole",
      "description": "내마모성을 목표로 한 고무 명칭입니다. 제조사의 약 3배 비교를 신발 전체의 수명 3배로 바꾸지 않습니다.",
      "benefits": [
        "카야노 32·33, 님버스 28, 슬로우쿠시에서 조합 확인",
        "노바블라스트 5의 AHAR LO와 구분",
        "고무의 내마모성 비교와 폼 교체 시점은 별개"
      ],
      "scienceExplanation": "카야노 33과 슬로우쿠시 발표는 AHARPLUS를 제조사의 기존 고무보다 약 3배 내마모성이 높은 소재라고 설명합니다. 이는 제조사 소재 비교이며 공개 원문에서 동일 조건의 독립 주행 수명 시험까지 확인한 것은 아닙니다. 카야노 32와 님버스 28도 HYBRID ASICSGRIP의 구성 요소로 AHARPLUS를 명시합니다. 노바블라스트 5는 AHAR LO로 확인되어 기존 연결에서 제거했습니다. AHAR·AHAR LO·AHARPLUS를 같은 이름으로 합치거나 km당 비용 계산에 임의 수명을 넣지 않습니다.",
      "usedInShoes": [
        "asics-gel-kayano-32",
        "asics-gel-kayano-33",
        "asics-gel-nimbus-28",
        "asics-gel-slowcush"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사 원문의 정확 모델·세대 기술명과 확인된 적용 예시. 미공개 원료나 충돌 항목은 추정하지 않습니다. 설계 의도는 개인의 기록·통증·부상 예방·수명 보장이 아닙니다.",
        "sources": [
          {
            "title": "ASICS 공식 — kay32",
            "url": "https://www.asics.com/sg/en-sg/gel-kayano-32/p/1011C052-401.html",
            "scope": "정확 32 PDP: FF BLAST PLUS, rearfoot PureGEL, 4D GUIDANCE SYSTEM, engineered mesh, OrthoLite X-55, HYBRID ASICSGRIP(ASICSGRIP+AHARPLUS)."
          },
          {
            "title": "ASICS 공식 — kay33",
            "url": "https://corp.asics.com/jp/press/article/2026-06-04_gel-kayano_33",
            "scope": "2026-06-04 일본 발표: MAX 상층/PLUS 하층, PureGEL, FLUIDSUPPORT. 4D는 설계 계보이며 현행 명칭과 구분. HYBRID ASICSGRIP, engineered mesh."
          },
          {
            "title": "ASICS 공식 — nimbus28",
            "url": "https://www.asics.com/nz/en-nz/gel-nimbus-28-mens-1011c127-020",
            "scope": "정확 NZ 28 PDP: FF BLAST PLUS, PureGEL, engineered knit, OrthoLite X-55, HYBRID ASICSGRIP. 폼 기초 고분자 미공개."
          },
          {
            "title": "ASICS 공식 — slow",
            "url": "https://corp.asics.com/jp/press/article/2026-10-01_gel-slowcush",
            "scope": "2026-10-01 일본 정확 GEL-SLOWCUSH 발표: FF LUXE PLUS, rearfoot PureGEL PLUS, engineered mesh, HYBRID ASICSGRIP. PureGEL PLUS 약20% 경량은 PureGEL 대비 부품 주장."
          },
          {
            "title": "ASICS 공식 — nova5",
            "url": "https://www.asics.com/ph/en-ph/novablast-5/p/1011B974-800.html",
            "scope": "정확 5 PDP: FF BLAST MAX, engineered jacquard mesh, tongue wing, AHAR LO. 6의 SQUARED pod와 구분."
          }
        ]
      }
    }
  ],
  "verification": {
    "checkedAt": "2026-11-10",
    "scope": "1949년 사업 기원과 1977년 현 법인 출범, 고베 본사 및 아래 10개 기술 설명의 한정된 확인 범위.",
    "sources": [
      {
        "title": "ASICS 공식 연혁",
        "url": "https://corp.asics.com/en/about_asics/history",
        "scope": "1949년 오니츠카 창업, 1977년 세 회사 합병"
      },
      {
        "title": "ASICS 공식 회사 개요",
        "url": "https://corp.asics.com/en/about_asics/practical_information",
        "scope": "창업/법인 출범일과 현재 고베 본사"
      }
    ]
  }
};
