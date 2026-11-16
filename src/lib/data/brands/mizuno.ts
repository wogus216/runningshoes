import type { Brand } from '@/types/brand';

export const mizunoBrand: Brand = {
  "id": "mizuno",
  "name": "Mizuno",
  "nameKo": "미즈노",
  "tagline": "Reach Beyond",
  "description": "MIZUNO ENERZY 계열 폼, MIZUNO WAVE 구조와 Smooth Speed Assist 형상 설계를 사용하는 스포츠 브랜드입니다. WAVE에는 별도 판과 FOAM WAVE가 있고, NXT도 모델에 따라 원료·발포 공정·배치가 다릅니다. 세대별 공식 구성과 소재 비교 수치의 범위를 나누어 안내합니다.",
  "founded": 1906,
  "headquarters": "일본 오사카·도쿄",
  "website": "https://www.mizuno.co.kr",
  "technologies": [
    {
      "id": "enerzy-core",
      "name": "MIZUNO ENERZY CORE",
      "nameKo": "에너지 코어",
      "category": "midsole",
      "description": "2020년 공식 발표에서 U4ic 소재와 비교한 ENERZY 계열 폼입니다. 라이더 29·스카이 9의 정확 원문에서는 CORE 적용을 확인하지 못했습니다.",
      "benefits": [
        "293%·56%는 U4ic 대비 제조사 소재 비교",
        "반발 56% 향상과 절대 에너지 리턴 56%는 다름",
        "현재 확인 여덟 모델에 미확인 CORE 연결 제거"
      ],
      "scienceExplanation": "2020년 미즈노 소재 발표는 CORE의 부드러움 약 293% 향상·반발 약 56% 향상을 U4ic 대비 제조사 비교로 설명합니다. 수직 압축을 이용한 소재 시험이며 완성화 설계·개인의 느낌은 다를 수 있다고 명시합니다. 실제 신발의 부상 예방·수명·장거리에서 꺼지지 않는 쿠션을 입증한 결과가 아닙니다. 라이더 29는 양쪽 NXT, 스카이 9는 NXT와 FOAM WAVE가 확인되지만 CORE라는 물리적 부품은 확인되지 않아 적용 연결을 제거했습니다. 미확인 연결의 제거가 모든 제품에서 CORE가 없다는 뜻은 아닙니다.",
      "usedInShoes": [],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대 제조사 원문의 폼·구조·판·아웃솔 명칭 확인. 공통 기술 카드와 지역별 충돌, 미확인 원료·임상 효과는 구분했습니다.",
        "sources": [
          {
            "title": "Mizuno 공식 — MIZUNO ENERZY original material launch",
            "url": "https://corp.mizuno.com/jp/news-release/2020/20200701",
            "scope": "Full original; Core/Lite/base distinction, U4ic comparator, vertical compression and materials-only footnotes."
          },
          {
            "title": "Mizuno 공식 — WAVE RIDER 29 launch",
            "url": "https://corp.mizuno.com/jp/news-release/2025/20250808",
            "scope": "Japanese original full article; two-layer NXT, supercritical process, WAVE and comparison footnotes."
          },
          {
            "title": "Mizuno 공식 — Men’s Wave Sky 9",
            "url": "https://usa.mizuno.com/running-wave-sky-9-mens",
            "scope": "Exact model style411533; description and Technical details: multi-material Foam Wave, nitrogen NXT EVA version, X10 and Smooth Stretch Woven."
          },
          {
            "title": "Mizuno 공식 — WAVE SKY 9 J1GC250202",
            "url": "https://emea.mizuno.com/eu/en-be/wave-sky-9/J1GC250202.html",
            "scope": "Exact Description/Features: nitrogen NXT upper midsole, FOAM WAVE, Smooth Stretch Woven. Generic Technology block separated."
          }
        ]
      }
    },
    {
      "id": "enerzy-nxt",
      "name": "MIZUNO ENERZY NXT",
      "nameKo": "에너지 NXT",
      "category": "midsole",
      "description": "같은 NXT 안에서도 모델별 원료·질소 주입 여부·배치가 다른 폼 계열입니다. 공통 기술 카드의 상·하층 설명을 모든 제품에 복사하지 않습니다.",
      "benefits": [
        "라이더 29: 양층 NXT, 일본 발표에 초임계 공정",
        "라이더 30: 상층 질소 주입·하층 일반 NXT 구분",
        "비스타 3: 호주 원문은 TPU 상층·EVA 하층 명시"
      ],
      "scienceExplanation": "라이더 29 일본 발표는 양층 NXT의 초임계 발포, 미국 정확 제품은 EVA 버전을 설명합니다. 라이더 30은 상층 질소 주입·초임계 NXT와 하층 비질소 NXT를 구분하므로 양층 질소 주입으로 쓰지 않았습니다. 인스파이어 21은 뒤꿈치 웨지에 NXT, 상층에는 일반 ENERZY를 배치합니다. 22의 재설계 구조에 21의 구성을 그대로 옮기지 않습니다. 비스타 3 호주 정확 제품 원문은 질소 주입 TPU 상층·EVA 하층을 명시하지만 이 배합은 NXT 전체의 정의가 아닙니다. 스카이 9는 상층 NXT와 FOAM WAVE, 플래시 3는 XP 상층·NXT 하층으로 구분했습니다. 발포 가스·공정과 원료 고분자는 서로 다른 정보입니다.",
      "usedInShoes": [
        "mizuno-wave-rider-29",
        "mizuno-wave-rider-30",
        "mizuno-wave-inspire-21",
        "mizuno-wave-inspire-22",
        "mizuno-neo-vista-3",
        "mizuno-wave-sky-9",
        "mizuno-wave-rebellion-flash-3"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대 제조사 원문의 폼·구조·판·아웃솔 명칭 확인. 공통 기술 카드와 지역별 충돌, 미확인 원료·임상 효과는 구분했습니다.",
        "sources": [
          {
            "title": "Mizuno 공식 — WAVE RIDER 29 launch",
            "url": "https://corp.mizuno.com/jp/news-release/2025/20250808",
            "scope": "Japanese original full article; two-layer NXT, supercritical process, WAVE and comparison footnotes."
          },
          {
            "title": "Mizuno 공식 — Men’s Wave Rider 29",
            "url": "https://usa.mizuno.com/running-wave-rider-29-mens",
            "scope": "Style 411538 exact standard model; description and Technical details: nitrogen-infused EVA version, jacquard mesh, X10."
          },
          {
            "title": "Mizuno 공식 — WAVE RIDER 30 launch",
            "url": "https://corp.mizuno.com/jp/news-release/2026/20260610",
            "scope": "Full Japanese original; supercritical top/ordinary bottom NXT, first full-length WAVE and changes."
          },
          {
            "title": "Mizuno 공식 — WAVE RIDER 30 J1GU262381",
            "url": "https://emea.mizuno.com/eu/en-gb/wave-rider-30/J1GU262381.html",
            "scope": "Sole/Upper Description; exact Features; Technical Details; NXT nitrogen vs non-nitrogen distinction."
          },
          {
            "title": "Mizuno 공식 — WAVE INSPIRE 21 J1GC254402",
            "url": "https://emea.mizuno.com/eu/en/wave-inspire-21/J1GC254402.html",
            "scope": "Exact Features: NXT heel wedge, ENERZY top midsole, support-type WAVE; AIRmesh/X10 icons and descriptions."
          },
          {
            "title": "Mizuno 공식 — WAVE INSPIRE 22 J1GD264427",
            "url": "https://emea.mizuno.com/eu/en-es/wave-inspire-22/J1GD264427.html",
            "scope": "Description/Sole/Support Type WAVE/Upper; live Technical Details; X10; SmoothRide distinct from Speed Assist."
          },
          {
            "title": "Mizuno 공식 — MIZUNO NEO VISTA 3 launch",
            "url": "https://corp.mizuno.com/jp/news-release/2026/20260511",
            "scope": "Full Japanese original: top SCF NXT volume +12%, two-layer midsole, glass-fibre nylon 3D plate, SSA protocol, rubber grooves."
          },
          {
            "title": "Mizuno 공식 — MIZUNO NEO VISTA 3 (U) J1GU2610",
            "url": "https://mizuno.com.au/products/mizuno-neo-vista-3-u",
            "scope": "Exact DESCRIPTION: nitrogen-infused TPU top / EVA bottom; full-length 3D WAVE and knit upper."
          },
          {
            "title": "Mizuno 공식 — Men’s Wave Sky 9",
            "url": "https://usa.mizuno.com/running-wave-sky-9-mens",
            "scope": "Exact model style411533; description and Technical details: multi-material Foam Wave, nitrogen NXT EVA version, X10 and Smooth Stretch Woven."
          },
          {
            "title": "Mizuno 공식 — WAVE REBELLION FLASH 3 launch",
            "url": "https://corp.mizuno.com/jp/news-release/2025/20250722",
            "scope": "Full Japanese original: XP top/NXT bottom, full-length glass-fibre reinforced nylon plate, Rilsan trade-name, SSA footnotes."
          }
        ]
      }
    },
    {
      "id": "enerzy-xp",
      "name": "MIZUNO ENERZY XP",
      "nameKo": "에너지 XP",
      "category": "midsole",
      "description": "플래시 3 상층과 하이퍼워프 퓨어 초대에서 확인한 폼 계열입니다. 퓨어의 PEBA 버전 원료를 플래시 3에 자동으로 적용하지 않습니다.",
      "benefits": [
        "플래시 3: XP 상층·NXT 하층",
        "퓨어 초대: XP PEBA Version 명시",
        "XP와 함께 쓰인 판의 재질도 모델별로 다름"
      ],
      "scienceExplanation": "플래시 3의 일본 출시문은 XP 상층·NXT 하층과 유리섬유 보강 나일론 WAVE를 확인해 줍니다. 이 정확 XP의 고분자 원료는 읽은 원문에서 확정하지 못했습니다. 하이퍼워프 퓨어 초대의 유럽 제품은 XP PEBA Version과 3D 전장 카본 Smooth Speed Plate를 명시합니다. 같은 XP 상표에 모두 카본판이 필수라는 설명은 맞지 않으며, PEBA라는 재료명만으로 최고 에너지 리턴이나 개인 기록을 보장할 수 없습니다. 하이퍼워프의 다른 모델·후속 세대 배합도 초대 퓨어에 복사하지 않습니다.",
      "usedInShoes": [
        "mizuno-wave-rebellion-flash-3",
        "mizuno-hyperwarp-pure"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대 제조사 원문의 폼·구조·판·아웃솔 명칭 확인. 공통 기술 카드와 지역별 충돌, 미확인 원료·임상 효과는 구분했습니다.",
        "sources": [
          {
            "title": "Mizuno 공식 — WAVE REBELLION FLASH 3 launch",
            "url": "https://corp.mizuno.com/jp/news-release/2025/20250722",
            "scope": "Full Japanese original: XP top/NXT bottom, full-length glass-fibre reinforced nylon plate, Rilsan trade-name, SSA footnotes."
          },
          {
            "title": "Mizuno 공식 — Men’s Wave Rebellion Flash 3",
            "url": "https://usa.mizuno.com/running-wave-rebellion-flash-3-mens/",
            "scope": "Style411524 exact model; description and Technical details: glass-fibre nylon WAVE, SSA, engineered mesh, rubber outsole."
          },
          {
            "title": "Mizuno 공식 — HYPERWARP first-generation launch",
            "url": "https://corp.mizuno.com/jp/news-release/2025/20251202",
            "scope": "Full article with model sections kept separate. Pure lightweight XP/full carbon SSP; Pro carbon-reinforced nylon/SSA excluded from Pure."
          },
          {
            "title": "Mizuno 공식 — HYPERWARP PURE J1GC268799",
            "url": "https://emea.mizuno.com/eu/en-gb/hyperwarp-pure/J1GC268799.html",
            "scope": "Exact first-generation Description/Technical details: XP PEBA Version, 3D full carbon SSP, G3, monofilament woven."
          }
        ]
      }
    },
    {
      "id": "enerzy-lite",
      "name": "MIZUNO ENERZY LITE",
      "nameKo": "에너지 라이트",
      "category": "midsole",
      "description": "2020년 공식 발표에 포함된 경량 지향 소재 명칭입니다. 이번 여덟 정확 모델에서 확인한 적용 예시는 없습니다.",
      "benefits": [
        "2020년 발표의 LITE·CORE·기본 소재를 구분",
        "현재 전 계열 최경량이라는 미확인 순위 제거",
        "플래시 3의 XP·NXT를 LITE로 바꾸지 않기"
      ],
      "scienceExplanation": "2020년 소재 발표에는 ENERZY LITE가 이미 포함되어 있으므로 근거 없는 2022년 최초 도입 표기를 제거했습니다. 현행 모든 ENERZY 중 가장 가볍다는 비교도 이번 원문이 입증하지 않습니다. 플래시 3의 일본·미국·유럽 정확 자료는 XP와 NXT를 설명하므로 다른 지역의 충돌하는 LITE 문구를 적용 근거로 채택하지 않았습니다. 이번에 재확인하지 않은 플래시 2 등 과거 세대의 연결도 보류했습니다. 아래 목록은 확인된 정확 예시에 한하며 기술이 사라졌거나 모든 다른 신발에 없다는 판정은 아닙니다.",
      "usedInShoes": [],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대 제조사 원문의 폼·구조·판·아웃솔 명칭 확인. 공통 기술 카드와 지역별 충돌, 미확인 원료·임상 효과는 구분했습니다.",
        "sources": [
          {
            "title": "Mizuno 공식 — MIZUNO ENERZY original material launch",
            "url": "https://corp.mizuno.com/jp/news-release/2020/20200701",
            "scope": "Full original; Core/Lite/base distinction, U4ic comparator, vertical compression and materials-only footnotes."
          },
          {
            "title": "Mizuno 공식 — WAVE REBELLION FLASH 3 launch",
            "url": "https://corp.mizuno.com/jp/news-release/2025/20250722",
            "scope": "Full Japanese original: XP top/NXT bottom, full-length glass-fibre reinforced nylon plate, Rilsan trade-name, SSA footnotes."
          },
          {
            "title": "Mizuno 공식 — Men’s Wave Rebellion Flash 3",
            "url": "https://usa.mizuno.com/running-wave-rebellion-flash-3-mens/",
            "scope": "Style411524 exact model; description and Technical details: glass-fibre nylon WAVE, SSA, engineered mesh, rubber outsole."
          },
          {
            "title": "Mizuno 공식 — WAVE REBELLION FLASH 3 J1GC253501",
            "url": "https://emea.mizuno.com/eu/en-gb/wave-rebellion-flash-3/J1GC253501.html",
            "scope": "Description/Features: XP top, NXT bottom, WAVE extended to forefoot, SSA; shared NXT card conflict separated."
          }
        ]
      }
    },
    {
      "id": "enerzy",
      "name": "MIZUNO ENERZY",
      "nameKo": "에너지",
      "category": "midsole",
      "description": "인스파이어 21의 상부 미드솔에서 확인한 기본 ENERZY 명칭입니다. 계열 전체를 가리키는 이름과 별도 물리적 폼을 구분합니다.",
      "benefits": [
        "인스파이어 21: 상층 ENERZY·뒤꿈치 NXT",
        "라이더 29의 양층 NXT를 일반 ENERZY로 부르지 않기",
        "미확인 수명·전 라인업 적용 주장 제외"
      ],
      "scienceExplanation": "2020년 공식 소재 발표는 기본 ENERZY와 CORE·LITE를 나누어 소개합니다. 이번 정확 모델 가운데 인스파이어 21 유럽 원문은 ENERZY 상부 미드솔과 NXT 뒤꿈치 웨지를 구체적으로 구분합니다. 라이더 29는 양층 NXT가 확인되므로 일반 ENERZY 부품을 추가하지 않았습니다. 스카이 9의 일반 기술 아이콘만으로 두 번째 폼의 정확 상표·원료를 확정하지도 않았습니다. 장기간 꺼지지 않는다거나 데일리 러너 모두에게 적합하다는 결과를 이 소재 명칭만으로 보장하지 않습니다.",
      "usedInShoes": [
        "mizuno-wave-inspire-21"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대 제조사 원문의 폼·구조·판·아웃솔 명칭 확인. 공통 기술 카드와 지역별 충돌, 미확인 원료·임상 효과는 구분했습니다.",
        "sources": [
          {
            "title": "Mizuno 공식 — MIZUNO ENERZY original material launch",
            "url": "https://corp.mizuno.com/jp/news-release/2020/20200701",
            "scope": "Full original; Core/Lite/base distinction, U4ic comparator, vertical compression and materials-only footnotes."
          },
          {
            "title": "Mizuno 공식 — WAVE INSPIRE 21 J1GC254402",
            "url": "https://emea.mizuno.com/eu/en/wave-inspire-21/J1GC254402.html",
            "scope": "Exact Features: NXT heel wedge, ENERZY top midsole, support-type WAVE; AIRmesh/X10 icons and descriptions."
          },
          {
            "title": "Mizuno 공식 — WAVE RIDER 29 launch",
            "url": "https://corp.mizuno.com/jp/news-release/2025/20250808",
            "scope": "Japanese original full article; two-layer NXT, supercritical process, WAVE and comparison footnotes."
          },
          {
            "title": "Mizuno 공식 — Men’s Wave Sky 9",
            "url": "https://usa.mizuno.com/running-wave-sky-9-mens",
            "scope": "Exact model style411533; description and Technical details: multi-material Foam Wave, nitrogen NXT EVA version, X10 and Smooth Stretch Woven."
          },
          {
            "title": "Mizuno 공식 — WAVE SKY 9 J1GC250202",
            "url": "https://emea.mizuno.com/eu/en-be/wave-sky-9/J1GC250202.html",
            "scope": "Exact Description/Features: nitrogen NXT upper midsole, FOAM WAVE, Smooth Stretch Woven. Generic Technology block separated."
          }
        ]
      }
    },
    {
      "id": "mizuno-wave",
      "name": "MIZUNO WAVE",
      "nameKo": "미즈노 웨이브",
      "category": "plate",
      "description": "WAVE에는 별도 판을 쓰는 구조와 여러 폼으로 만드는 FOAM WAVE가 있습니다. 모든 WAVE를 같은 수지·형상의 판으로 설명하지 않습니다.",
      "benefits": [
        "스카이 9: 별도 수지판 대신 FOAM WAVE",
        "비스타 3·플래시 3: 유리섬유 보강 나일론 WAVE",
        "라이더 30: 시리즈 첫 전장 WAVE라는 공식 설명"
      ],
      "scienceExplanation": "라이더·인스파이어 계열에서 확인한 WAVE 판은 모델별 지지 형상과 범위가 다릅니다. 라이더 30 일본 발표는 라이더 시리즈의 첫 전장 WAVE를 명시합니다. 비스타 3는 3D 전장 유리섬유 보강 나일론 WAVE, 플래시 3도 유리섬유 보강 나일론 판입니다. 반면 스카이 9의 FOAM WAVE는 여러 폼 소재의 구조이므로 별도 수지판이 있다는 뜻으로 바꾸지 않았습니다. 과거의 공통 Pebax 설명을 모든 현행 판의 재질로 일반화하지 않습니다. 하이퍼워프 퓨어의 카본 SSP를 별도 WAVE라는 이름으로 중복 연결할 근거도 확인하지 못했습니다.",
      "usedInShoes": [
        "mizuno-wave-rider-29",
        "mizuno-wave-rider-30",
        "mizuno-wave-inspire-21",
        "mizuno-wave-inspire-22",
        "mizuno-neo-vista-3",
        "mizuno-wave-sky-9",
        "mizuno-wave-rebellion-flash-3"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대 제조사 원문의 폼·구조·판·아웃솔 명칭 확인. 공통 기술 카드와 지역별 충돌, 미확인 원료·임상 효과는 구분했습니다.",
        "sources": [
          {
            "title": "Mizuno 공식 — WAVE RIDER 29 launch",
            "url": "https://corp.mizuno.com/jp/news-release/2025/20250808",
            "scope": "Japanese original full article; two-layer NXT, supercritical process, WAVE and comparison footnotes."
          },
          {
            "title": "Mizuno 공식 — WAVE RIDER 30 launch",
            "url": "https://corp.mizuno.com/jp/news-release/2026/20260610",
            "scope": "Full Japanese original; supercritical top/ordinary bottom NXT, first full-length WAVE and changes."
          },
          {
            "title": "Mizuno 공식 — WAVE INSPIRE 21 J1GC254402",
            "url": "https://emea.mizuno.com/eu/en/wave-inspire-21/J1GC254402.html",
            "scope": "Exact Features: NXT heel wedge, ENERZY top midsole, support-type WAVE; AIRmesh/X10 icons and descriptions."
          },
          {
            "title": "Mizuno 공식 — WAVE INSPIRE 22 J1GD264427",
            "url": "https://emea.mizuno.com/eu/en-es/wave-inspire-22/J1GD264427.html",
            "scope": "Description/Sole/Support Type WAVE/Upper; live Technical Details; X10; SmoothRide distinct from Speed Assist."
          },
          {
            "title": "Mizuno 공식 — MIZUNO NEO VISTA 3 launch",
            "url": "https://corp.mizuno.com/jp/news-release/2026/20260511",
            "scope": "Full Japanese original: top SCF NXT volume +12%, two-layer midsole, glass-fibre nylon 3D plate, SSA protocol, rubber grooves."
          },
          {
            "title": "Mizuno 공식 — Men’s Wave Sky 9",
            "url": "https://usa.mizuno.com/running-wave-sky-9-mens",
            "scope": "Exact model style411533; description and Technical details: multi-material Foam Wave, nitrogen NXT EVA version, X10 and Smooth Stretch Woven."
          },
          {
            "title": "Mizuno 공식 — WAVE REBELLION FLASH 3 launch",
            "url": "https://corp.mizuno.com/jp/news-release/2025/20250722",
            "scope": "Full Japanese original: XP top/NXT bottom, full-length glass-fibre reinforced nylon plate, Rilsan trade-name, SSA footnotes."
          },
          {
            "title": "Mizuno 공식 — Mizuno Technology",
            "url": "https://emea.mizuno.com/eu/en-gb/technology.html",
            "scope": "WAVE variants, G3, X10, AIRmesh, ENERZY terms. Generic old Pebax statement not extrapolated to all eight current models."
          }
        ]
      }
    },
    {
      "id": "smooth-speed-plate",
      "name": "Smooth Speed Plate",
      "nameKo": "스무스 스피드 플레이트",
      "category": "plate",
      "description": "하이퍼워프 퓨어 초대에서 정확 상표를 확인한 3D 전장 카본판입니다. 추진을 돕는 다른 WAVE 판을 모두 SSP라고 부르지 않습니다.",
      "benefits": [
        "퓨어 초대: 3D full carbon SSP",
        "비스타 3·플래시 3의 유리섬유 WAVE와 구분",
        "판 강성 비교를 에너지 리턴 비율로 바꾸지 않기"
      ],
      "scienceExplanation": "하이퍼워프 출시문은 퓨어의 전장 카본 Smooth Speed Plate와 다른 모델의 카본 보강 나일론 판을 구분합니다. 정확 유럽 제품도 퓨어의 3D full carbon 명칭을 확인해 줍니다. 비스타 3와 플래시 3에서 판의 존재·재질을 확인했다고 해서 SSP라는 상표까지 확인한 것은 아니므로 이 목록에서 제외했습니다. 제조사의 전작 대비 판 강성 비교를 달리기 효율이나 기록 향상률로 읽지 않습니다. 퓨어 후속 세대의 폼·어퍼 정보도 초대 설명에 이식하지 않았습니다.",
      "usedInShoes": [
        "mizuno-hyperwarp-pure"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대 제조사 원문의 폼·구조·판·아웃솔 명칭 확인. 공통 기술 카드와 지역별 충돌, 미확인 원료·임상 효과는 구분했습니다.",
        "sources": [
          {
            "title": "Mizuno 공식 — HYPERWARP first-generation launch",
            "url": "https://corp.mizuno.com/jp/news-release/2025/20251202",
            "scope": "Full article with model sections kept separate. Pure lightweight XP/full carbon SSP; Pro carbon-reinforced nylon/SSA excluded from Pure."
          },
          {
            "title": "Mizuno 공식 — HYPERWARP PURE J1GC268799",
            "url": "https://emea.mizuno.com/eu/en-gb/hyperwarp-pure/J1GC268799.html",
            "scope": "Exact first-generation Description/Technical details: XP PEBA Version, 3D full carbon SSP, G3, monofilament woven."
          },
          {
            "title": "Mizuno 공식 — MIZUNO NEO VISTA 3 launch",
            "url": "https://corp.mizuno.com/jp/news-release/2026/20260511",
            "scope": "Full Japanese original: top SCF NXT volume +12%, two-layer midsole, glass-fibre nylon 3D plate, SSA protocol, rubber grooves."
          },
          {
            "title": "Mizuno 공식 — WAVE REBELLION FLASH 3 launch",
            "url": "https://corp.mizuno.com/jp/news-release/2025/20250722",
            "scope": "Full Japanese original: XP top/NXT bottom, full-length glass-fibre reinforced nylon plate, Rilsan trade-name, SSA footnotes."
          }
        ]
      }
    },
    {
      "id": "smooth-speed-assist",
      "name": "Smooth Speed Assist",
      "nameKo": "스무스 스피드 어시스트",
      "category": "midsole",
      "description": "비스타 3와 플래시 3에서 확인한 밑창 형상 설계 개념입니다. 판 재질이나 과회내 지지 기술과 구분합니다.",
      "benefits": [
        "비스타 3·플래시 3의 정확 적용 확인",
        "SmoothRide·SSP와 각각 다른 명칭",
        "제조사 근육·힘줄 부담 지표와 임상 부상 결과는 별개"
      ],
      "scienceExplanation": "공식 출시문은 Smooth Speed Assist를 착지에서 이륙으로 이어지는 전환을 목표로 한 형상 설계로 설명합니다. 근육·힘줄 부담 관련 제조사 시험은 시속 12km, 중족·전족 착지 참가자에서 자사 SSA·비SSA 신발의 발목 관련 역학 지표를 비교한 조건입니다. 이 조건을 모든 뒤꿈치 착지 러너의 부상 예방·회복 촉진이나 반드시 달려야 하는 페이스로 일반화하지 않았습니다. 인스파이어 22의 SmoothRide를 같은 이름으로 합치지 않으며, 출시문에서 다른 하이퍼워프 모델의 SSA 문장을 퓨어에 옮기지 않습니다.",
      "usedInShoes": [
        "mizuno-neo-vista-3",
        "mizuno-wave-rebellion-flash-3"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대 제조사 원문의 폼·구조·판·아웃솔 명칭 확인. 공통 기술 카드와 지역별 충돌, 미확인 원료·임상 효과는 구분했습니다.",
        "sources": [
          {
            "title": "Mizuno 공식 — MIZUNO NEO VISTA 3 launch",
            "url": "https://corp.mizuno.com/jp/news-release/2026/20260511",
            "scope": "Full Japanese original: top SCF NXT volume +12%, two-layer midsole, glass-fibre nylon 3D plate, SSA protocol, rubber grooves."
          },
          {
            "title": "Mizuno 공식 — WAVE REBELLION FLASH 3 launch",
            "url": "https://corp.mizuno.com/jp/news-release/2025/20250722",
            "scope": "Full Japanese original: XP top/NXT bottom, full-length glass-fibre reinforced nylon plate, Rilsan trade-name, SSA footnotes."
          },
          {
            "title": "Mizuno 공식 — Men’s Wave Rebellion Flash 3",
            "url": "https://usa.mizuno.com/running-wave-rebellion-flash-3-mens/",
            "scope": "Style411524 exact model; description and Technical details: glass-fibre nylon WAVE, SSA, engineered mesh, rubber outsole."
          },
          {
            "title": "Mizuno 공식 — WAVE INSPIRE 22 J1GD264427",
            "url": "https://emea.mizuno.com/eu/en-es/wave-inspire-22/J1GD264427.html",
            "scope": "Description/Sole/Support Type WAVE/Upper; live Technical Details; X10; SmoothRide distinct from Speed Assist."
          },
          {
            "title": "Mizuno 공식 — HYPERWARP first-generation launch",
            "url": "https://corp.mizuno.com/jp/news-release/2025/20251202",
            "scope": "Full article with model sections kept separate. Pure lightweight XP/full carbon SSP; Pro carbon-reinforced nylon/SSA excluded from Pure."
          }
        ]
      }
    },
    {
      "id": "x10",
      "name": "X10",
      "nameKo": "X10",
      "category": "outsole",
      "description": "라이더 29·30, 인스파이어 21·22, 비스타 3, 스카이 9에서 확인한 고무 아웃솔 명칭입니다. 카본 고무는 카본 섬유 판과 다릅니다.",
      "benefits": [
        "정확 원문에서 X10 명칭을 확인한 여섯 모델",
        "카본 러버와 카본 플레이트 구분",
        "고정 수명·젖은 노면 미끄럼 방지 보장 제외"
      ],
      "scienceExplanation": "제조사 기술 안내는 X10을 마모가 큰 부위를 고려한 내구성 지향 카본 고무로 설명합니다. 정확 모델별 제품에서 이름을 확인한 여섯 예시만 연결했습니다. 스카이 9는 지역에 따라 carbon rubber 또는 blown rubber X10이라는 표현을 쓰므로 이를 단일 배합의 상세 공시로 바꾸지 않았습니다. 플래시 3 미국 원문은 고무 아웃솔을 명시하지만 X10 상표까지 확인한 것은 아니므로 추가하지 않습니다. 아웃솔 상표만으로 일정 거리의 수명이나 비·유분·매끈한 노면에서 미끄러지지 않는다는 보장은 할 수 없습니다.",
      "usedInShoes": [
        "mizuno-wave-rider-29",
        "mizuno-wave-rider-30",
        "mizuno-wave-inspire-21",
        "mizuno-wave-inspire-22",
        "mizuno-neo-vista-3",
        "mizuno-wave-sky-9"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대 제조사 원문의 폼·구조·판·아웃솔 명칭 확인. 공통 기술 카드와 지역별 충돌, 미확인 원료·임상 효과는 구분했습니다.",
        "sources": [
          {
            "title": "Mizuno 공식 — Men’s Wave Rider 29",
            "url": "https://usa.mizuno.com/running-wave-rider-29-mens",
            "scope": "Style 411538 exact standard model; description and Technical details: nitrogen-infused EVA version, jacquard mesh, X10."
          },
          {
            "title": "Mizuno 공식 — Men’s Wave Rider 30",
            "url": "https://usa.mizuno.com/running-wave-rider-30-mens/",
            "scope": "Style 411621; main description, full-length WAVE, nitrogen NXT EVA-version technical entry; jacquard mesh and X10."
          },
          {
            "title": "Mizuno 공식 — WAVE INSPIRE 21 J1GC254402",
            "url": "https://emea.mizuno.com/eu/en/wave-inspire-21/J1GC254402.html",
            "scope": "Exact Features: NXT heel wedge, ENERZY top midsole, support-type WAVE; AIRmesh/X10 icons and descriptions."
          },
          {
            "title": "Mizuno 공식 — WAVE INSPIRE 22 J1GD264427",
            "url": "https://emea.mizuno.com/eu/en-es/wave-inspire-22/J1GD264427.html",
            "scope": "Description/Sole/Support Type WAVE/Upper; live Technical Details; X10; SmoothRide distinct from Speed Assist."
          },
          {
            "title": "Mizuno 공식 — MIZUNO NEO VISTA 3 J1GM261051",
            "url": "https://emea.mizuno.com/eu/en-gb/mizuno-neo-vista-3/J1GM261051.html",
            "scope": "Exact Description/Features/Technical Details; NXT top; full-length 3D WAVE; one-piece knit; SSA; X10."
          },
          {
            "title": "Mizuno 공식 — Men’s Wave Sky 9",
            "url": "https://usa.mizuno.com/running-wave-sky-9-mens",
            "scope": "Exact model style411533; description and Technical details: multi-material Foam Wave, nitrogen NXT EVA version, X10 and Smooth Stretch Woven."
          },
          {
            "title": "Mizuno 공식 — WAVE SKY 9 J1GC2502",
            "url": "https://mizuno.com.au/products/wave-sky-9",
            "scope": "Exact specification block: Foam Wave, NXT nitrogen-infused, blown rubber X10, Smooth Stretch Woven."
          },
          {
            "title": "Mizuno 공식 — Mizuno Technology",
            "url": "https://emea.mizuno.com/eu/en-gb/technology.html",
            "scope": "WAVE variants, G3, X10, AIRmesh, ENERZY terms. Generic old Pebax statement not extrapolated to all eight current models."
          }
        ]
      }
    },
    {
      "id": "g3-outsole",
      "name": "G3 Outsole",
      "nameKo": "G3 아웃솔",
      "category": "outsole",
      "description": "하이퍼워프 퓨어 초대에서 확인한 경량 접지용 아웃솔 명칭입니다. 이번 정확 원문에서 원료 수지의 배합은 확인하지 못했습니다.",
      "benefits": [
        "퓨어 초대 G3 적용 확인",
        "미확인 PU 레진·플래시 3 적용 제거",
        "접지 설계와 모든 고속·젖은 노면의 안전 보장은 다름"
      ],
      "scienceExplanation": "퓨어 초대 유럽 제품과 미즈노 기술 안내에서 G3 명칭을 확인했습니다. 읽은 자료는 가벼움과 접지를 목표로 하지만 PU 수지의 정확 배합을 공시하지 않아 기존 폴리우레탄 단정은 제거했습니다. 플래시 3의 일본·미국·유럽 원문은 G3 적용을 확인해 주지 않으며 충돌하는 지역 문구는 근거로 채택하지 않았습니다. 이번에 재확인하지 않은 플래시 2의 연결도 보류했습니다. 레이싱용이라는 설명을 모든 고속 주행에서의 미끄럼 방지나 최고의 경기 결과로 보장하지 않습니다.",
      "usedInShoes": [
        "mizuno-hyperwarp-pure"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대 제조사 원문의 폼·구조·판·아웃솔 명칭 확인. 공통 기술 카드와 지역별 충돌, 미확인 원료·임상 효과는 구분했습니다.",
        "sources": [
          {
            "title": "Mizuno 공식 — HYPERWARP PURE J1GC268799",
            "url": "https://emea.mizuno.com/eu/en-gb/hyperwarp-pure/J1GC268799.html",
            "scope": "Exact first-generation Description/Technical details: XP PEBA Version, 3D full carbon SSP, G3, monofilament woven."
          },
          {
            "title": "Mizuno 공식 — Mizuno Technology",
            "url": "https://emea.mizuno.com/eu/en-gb/technology.html",
            "scope": "WAVE variants, G3, X10, AIRmesh, ENERZY terms. Generic old Pebax statement not extrapolated to all eight current models."
          },
          {
            "title": "Mizuno 공식 — WAVE REBELLION FLASH 3 launch",
            "url": "https://corp.mizuno.com/jp/news-release/2025/20250722",
            "scope": "Full Japanese original: XP top/NXT bottom, full-length glass-fibre reinforced nylon plate, Rilsan trade-name, SSA footnotes."
          },
          {
            "title": "Mizuno 공식 — Men’s Wave Rebellion Flash 3",
            "url": "https://usa.mizuno.com/running-wave-rebellion-flash-3-mens/",
            "scope": "Style411524 exact model; description and Technical details: glass-fibre nylon WAVE, SSA, engineered mesh, rubber outsole."
          },
          {
            "title": "Mizuno 공식 — WAVE REBELLION FLASH 3 J1GC253501",
            "url": "https://emea.mizuno.com/eu/en-gb/wave-rebellion-flash-3/J1GC253501.html",
            "scope": "Description/Features: XP top, NXT bottom, WAVE extended to forefoot, SSA; shared NXT card conflict separated."
          }
        ]
      }
    }
  ]
};
