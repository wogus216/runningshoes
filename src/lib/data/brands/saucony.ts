import type { Brand } from '@/types/brand';

export const sauconyBrand: Brand = {
  "id": "saucony",
  "name": "Saucony",
  "nameKo": "써코니",
  "tagline": "A Good Day To Run",
  "description": "1898년 미국 펜실베이니아 커츠타운에서 시작한 러닝 브랜드입니다. 같은 PWRRUN 계열이라도 PWRRUN·PWRRUN+·PB·HG는 원료와 쓰임이 다르고, 모델별로 폼·판·로커·지지 구조를 조합합니다. 최신 모델에도 예전 구성이나 기술명을 그대로 붙이지 않고 확인한 정확 세대의 예시를 소개합니다.",
  "founded": 1898,
  "website": "https://www.saucony.co.kr",
  "technologies": [
    {
      "id": "pwrrun-hg",
      "name": "PWRRUN HG",
      "nameKo": "PWRRUN HG",
      "category": "midsole",
      "description": "프로 4의 PB·HG 조합과 프로 5의 PB·Super Critical HG 조합을 구분합니다. 엘리트 2의 확인 폼은 IncrediRUN입니다.",
      "benefits": [
        "프로 4: PWRRUN PB와 HG 조합",
        "프로 5: PB와 Super Critical HG 조합",
        "엘리트 2를 HG 적용 목록에서 제거"
      ],
      "scienceExplanation": "써코니 공식 기술 안내는 HG를 PEBA 계열로 설명하고 정확 프로 4·5 제품은 PB와의 조합을 명시합니다. 프로 5의 Super Critical 표기는 공정에 관한 명칭이며 원료 비율·밀도·프로 4와 같은 처방을 증명하지 않습니다. 엘리트 2 일반형 공식 원문은 IncrediRUN을 명시하므로 HG 연결을 제거했습니다. HG라는 이름만으로 현재 써코니 전체 폼 중 가장 우수하거나 일정 거리 동안 반발력이 유지된다고 확정하지 않습니다.",
      "usedInShoes": [
        "saucony-endorphin-pro-4",
        "saucony-endorphin-pro-5"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사 기술군 원료 정의와 정확 세대의 부품·위치·적용 예시. 개별 배합·측정 성능·기록·통증·주행 수명을 보장하지 않습니다. 자료 간 충돌은 표시했습니다.",
        "sources": [
          {
            "title": "Saucony 공식 — foam",
            "url": "https://www.saucony.com/en/foam-technologies/",
            "scope": "공식 표는 PB=PEBA(연결 Speed5/Triumph23/Hurricane25), PWRRUN+=TPU/steam-fused(명시 Ride18), HG+PB=PEBA(연결 Pro4), PWRRUN=blended EVA(명시 Guide18)로 구분한다. 배합비나 정확 SKU별 제조 공정 수치는 없다."
          },
          {
            "title": "Saucony 공식 — foamGuide",
            "url": "https://www.saucony.com/en/blog-foam-cushioning-guide-for-runners/",
            "scope": "PWRRUN=proprietary EVA blend; +=TPU steam-fused; PB=PEBA beads(Speed5 명시); HG=PEBA(Pro5 명시). 다만 incrediLUX 항목의 Triumph23 표기는 해당 모델 공식 PDP 및 다른 공식 기술 페이지 PB와 충돌한다. 이 모델 연결은 채택하지 않았다."
          },
          {
            "title": "Saucony 공식 — pro4",
            "url": "https://www.saucony.com/UK/en_GB/endorphin-pro-4/58850M.html",
            "scope": "PB+HG midsole, full carbon plate, SPEEDROLL, silky heel liner와 integrated tongue. Pro5의 slotted 형상은 이 문서에 없다."
          },
          {
            "title": "Saucony 공식 — pro5",
            "url": "https://www.saucony.com/en/endorphin-pro-5/60803M.html?dwvar_60803M_color=S21064-172",
            "scope": "PB+Super Critical HG dual-layer, 새 slotted carbon plate, SPEEDROLL, PWRTRAC rubber outsole. 정확 upper 섬유/구조는 여기서 확인 못함."
          },
          {
            "title": "Saucony 공식 엔돌핀 엘리트 2",
            "url": "https://www.saucony.com/en/endorphin-elite-2/59824U.html?dwvar_59824U_color=S30994-98",
            "scope": "IncrediRUN 폼·전장 slotted carbon fiber plate, 일반형 S30994-98. SILO 파생형과 구분"
          }
        ]
      }
    },
    {
      "id": "pwrrun-pb",
      "name": "PWRRUN PB",
      "nameKo": "PWRRUN PB",
      "category": "midsole",
      "description": "제조사가 PEBA 구슬형 폼으로 설명하는 계열입니다. 스피드 5·프로 4/5·트라이엄프 23·허리케인 25의 조합과 적용 위치를 나눕니다.",
      "benefits": [
        "스피드 5·트라이엄프 23에서 PB 확인",
        "프로 4/5: HG와 조합, 허리케인 25: PWRRUN 지지 프레임과 조합",
        "원료 정의를 모든 SKU의 에너지 리턴 88%로 바꾸지 않기"
      ],
      "scienceExplanation": "공식 폼 안내는 PWRRUN PB를 PEBA 구슬형 폼으로 분류하며 해당 모델과 연결합니다. 스피드 5는 나일론판 양쪽의 PB 층, 프로 4·5는 HG와의 조합, 허리케인 25는 발 바로 아래 PB와 주변/하부 PWRRUN 프레임을 설명합니다. 트라이엄프 23의 정확 제품과 공식 기술 표는 PB를 명시하지만 다른 공식 가이드는 incrediLUX로 잘못 연결하는 충돌이 있어 그대로 남겼습니다. 정확 모델 원문을 우선했고 별도 처방 변경으로 해석하지 않았습니다. 모든 PB 모델의 동일 반발률이나 EVA 대비 고정 무게비를 확정하지 않습니다.",
      "usedInShoes": [
        "saucony-endorphin-speed-5",
        "saucony-endorphin-pro-4",
        "saucony-endorphin-pro-5",
        "saucony-triumph-23",
        "saucony-hurricane-25"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사 기술군 원료 정의와 정확 세대의 부품·위치·적용 예시. 개별 배합·측정 성능·기록·통증·주행 수명을 보장하지 않습니다. 자료 간 충돌은 표시했습니다.",
        "sources": [
          {
            "title": "Saucony 공식 — foam",
            "url": "https://www.saucony.com/en/foam-technologies/",
            "scope": "공식 표는 PB=PEBA(연결 Speed5/Triumph23/Hurricane25), PWRRUN+=TPU/steam-fused(명시 Ride18), HG+PB=PEBA(연결 Pro4), PWRRUN=blended EVA(명시 Guide18)로 구분한다. 배합비나 정확 SKU별 제조 공정 수치는 없다."
          },
          {
            "title": "Saucony 공식 — foamGuide",
            "url": "https://www.saucony.com/en/blog-foam-cushioning-guide-for-runners/",
            "scope": "PWRRUN=proprietary EVA blend; +=TPU steam-fused; PB=PEBA beads(Speed5 명시); HG=PEBA(Pro5 명시). 다만 incrediLUX 항목의 Triumph23 표기는 해당 모델 공식 PDP 및 다른 공식 기술 페이지 PB와 충돌한다. 이 모델 연결은 채택하지 않았다."
          },
          {
            "title": "Saucony 공식 — speedJp",
            "url": "https://saucony.jp/products/mens-endorphin-speed-5",
            "scope": "PB, NYLON PLATE, SPEEDROLL, super-responsive sockliner를 명시. sockliner는 supercritical expanded thermoplastic resin이며 정확 고분자 이름은 없다."
          },
          {
            "title": "Saucony 공식 — pro4",
            "url": "https://www.saucony.com/UK/en_GB/endorphin-pro-4/58850M.html",
            "scope": "PB+HG midsole, full carbon plate, SPEEDROLL, silky heel liner와 integrated tongue. Pro5의 slotted 형상은 이 문서에 없다."
          },
          {
            "title": "Saucony 공식 — pro5",
            "url": "https://www.saucony.com/en/endorphin-pro-5/60803M.html?dwvar_60803M_color=S21064-172",
            "scope": "PB+Super Critical HG dual-layer, 새 slotted carbon plate, SPEEDROLL, PWRTRAC rubber outsole. 정확 upper 섬유/구조는 여기서 확인 못함."
          },
          {
            "title": "Saucony 공식 — triumphJp",
            "url": "https://saucony.jp/products/mens-triumph-23-n02",
            "scope": "PB,SRS,XT900을 명시. SRS는 supercritical expanded thermoplastic resin, XT900은 premium carbon rubber로 설명. incrediLUX 표기는 없음."
          },
          {
            "title": "Saucony 공식 — hurricane",
            "url": "https://www.saucony.com/en/hurricane-25/60323M.html?dwvar_60323M_color=S21026-205",
            "scope": "상층 PB와 하층/주변 PWRRUN frame의 dual-cushioning,CENTERPATH,engineered breathable mesh,재설계 XT900. 비교표의 Guide19/Hurricane26 정보를 채택하지 않음."
          }
        ]
      }
    },
    {
      "id": "pwrrun-plus",
      "name": "PWRRUN+",
      "nameKo": "PWRRUN+",
      "category": "midsole",
      "description": "공식 기술 안내가 TPU 계열로 설명하는 폼입니다. 라이드 18·19의 미드솔과 가이드 18의 인솔을 같은 부품으로 취급하지 않습니다.",
      "benefits": [
        "라이드 18·19: PWRRUN+ 미드솔",
        "라이드 19: 정확 US 원문에 SCF PWRRUN+ 명시",
        "가이드 18은 PWRRUN+가 인솔이며 주미드솔은 PWRRUN"
      ],
      "scienceExplanation": "공식 기술군 안내는 TPU와 steam-fused 공정을 설명합니다. 라이드 18은 reformulated PWRRUN+, 라이드 19의 정확 미국 원문은 PWRRUN+와 SCF 표기를 확인했습니다. 일반 기술군 공정 문구만으로 라이드 19의 상세 공정 조건까지 단정하지 않습니다. 일본 라이드 19의 PB 아이콘과 미국 제품·공식 가이드의 + 표기가 충돌하지만, 고유 본문을 우선해 PB로 바꾸지 않았습니다. 트라이엄프 23은 PB여서 + 미드솔 연결에서 제거했습니다. 가이드 18의 PWRRUN+ e-TPU는 인솔로 구분하며 아래 미드솔 예시에는 포함하지 않았습니다.",
      "usedInShoes": [
        "saucony-ride-18",
        "saucony-ride-19"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사 기술군 원료 정의와 정확 세대의 부품·위치·적용 예시. 개별 배합·측정 성능·기록·통증·주행 수명을 보장하지 않습니다. 자료 간 충돌은 표시했습니다.",
        "sources": [
          {
            "title": "Saucony 공식 — foam",
            "url": "https://www.saucony.com/en/foam-technologies/",
            "scope": "공식 표는 PB=PEBA(연결 Speed5/Triumph23/Hurricane25), PWRRUN+=TPU/steam-fused(명시 Ride18), HG+PB=PEBA(연결 Pro4), PWRRUN=blended EVA(명시 Guide18)로 구분한다. 배합비나 정확 SKU별 제조 공정 수치는 없다."
          },
          {
            "title": "Saucony 공식 — ride18",
            "url": "https://www.saucony.com/FR/fr_FR/ride-18/59943M.html",
            "scope": "reformulated PWRRUN+,engineered mesh,heel collar padding,heel-to-toe XT900 coverage 및 forefoot rubber/flex groove 설명. plate/FORMFIT/ISOFIT 공시 없음."
          },
          {
            "title": "Saucony 공식 — ride19M",
            "url": "https://www.saucony.com/en/ride-19/60823M.html",
            "scope": "reformulated PWRRUN+,flex grooves/forefoot durability,stretch engineered mesh 및 padded heel collar를 명시. PB나 정확 outsole 상품명은 이 본문에 없음."
          },
          {
            "title": "Saucony 공식 — ride19W",
            "url": "https://www.saucony.com/en/ride-19/60827W.html",
            "scope": "SCF PWRRUN+,SRS,engineered mesh,forefoot rubber 증가 및 flex grooves를 명시. 정확 공정 조건과 rubber 기술명은 미공개."
          },
          {
            "title": "Saucony 공식 — ride19Jp",
            "url": "https://saucony.jp/products/mens-ride-19",
            "scope": "제품명은 Ride19인데 탑재기능의 foam icon은 PWRRUN PB로 나온다. US정확 남녀 PDP와 제조사 foam guide의 PWRRUN+와 충돌하므로 PB 적용 근거로 채택하지 않음. SRS 항목은 별도로 확인."
          },
          {
            "title": "Saucony 공식 — guideJp",
            "url": "https://saucony.jp/products/mens-guide-18-n02",
            "scope": "PWRRUN,CENTERPATH,PWRRUN+ sockliner,XT900. sockliner는 e-TPU(expanded thermoplastic polyurethane),XT900은 carbon rubber로 명시. CENTERPATH는 midsole geometry로 설명."
          },
          {
            "title": "Saucony 공식 — triumphJp",
            "url": "https://saucony.jp/products/mens-triumph-23-n02",
            "scope": "PB,SRS,XT900을 명시. SRS는 supercritical expanded thermoplastic resin, XT900은 premium carbon rubber로 설명. incrediLUX 표기는 없음."
          }
        ]
      }
    },
    {
      "id": "pwrrun",
      "name": "PWRRUN",
      "nameKo": "PWRRUN",
      "category": "midsole",
      "description": "공식 기술 안내가 EVA 혼합 계열로 설명하는 폼입니다. 가이드 18의 주미드솔과 허리케인 25의 하부·주변 프레임이 확인 예시입니다.",
      "benefits": [
        "가이드 18: PWRRUN 주미드솔",
        "허리케인 25: PB 위층과 PWRRUN 하부·주변 프레임",
        "라이드 18을 일반 PWRRUN에 연결하지 않기"
      ],
      "scienceExplanation": "써코니 공식 기술 안내는 PWRRUN을 EVA 혼합 폼으로 설명하지만 정확 배합비를 공시하지 않습니다. 가이드 18의 제품은 주미드솔 PWRRUN과 인솔 PWRRUN+를 구분합니다. 허리케인 25는 PB 상층과 PWRRUN 프레임이 함께 있으므로 전부 PB 또는 전부 PWRRUN이라고 쓰면 불완전합니다. 라이드 18은 +로 확인되어 연결을 제거했습니다. 이번 정확 모델 원문을 읽지 않은 킨바라 16의 적용도 임의 유지하지 않았습니다. 이는 미탑재 확정이 아니라 확인된 예시만 남긴 목록입니다.",
      "usedInShoes": [
        "saucony-guide-18",
        "saucony-hurricane-25"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사 기술군 원료 정의와 정확 세대의 부품·위치·적용 예시. 개별 배합·측정 성능·기록·통증·주행 수명을 보장하지 않습니다. 자료 간 충돌은 표시했습니다.",
        "sources": [
          {
            "title": "Saucony 공식 — foam",
            "url": "https://www.saucony.com/en/foam-technologies/",
            "scope": "공식 표는 PB=PEBA(연결 Speed5/Triumph23/Hurricane25), PWRRUN+=TPU/steam-fused(명시 Ride18), HG+PB=PEBA(연결 Pro4), PWRRUN=blended EVA(명시 Guide18)로 구분한다. 배합비나 정확 SKU별 제조 공정 수치는 없다."
          },
          {
            "title": "Saucony 공식 — guide",
            "url": "https://www.saucony.com/UK/en_GB/guide-18/59947M.html?details=complete&dwvar_59947M_color=S20998-240&isProductSetPage=false",
            "scope": "PWRRUN midsole/PWRRUN+ sockliner,CENTERPATH의 넓은 기반과 높은 sidewall,engineered breathable mesh/padded heel collar. PWRRUN+를 주미드솔로 기록하지 않음."
          },
          {
            "title": "Saucony 공식 — guideJp",
            "url": "https://saucony.jp/products/mens-guide-18-n02",
            "scope": "PWRRUN,CENTERPATH,PWRRUN+ sockliner,XT900. sockliner는 e-TPU(expanded thermoplastic polyurethane),XT900은 carbon rubber로 명시. CENTERPATH는 midsole geometry로 설명."
          },
          {
            "title": "Saucony 공식 — hurricane",
            "url": "https://www.saucony.com/en/hurricane-25/60323M.html?dwvar_60323M_color=S21026-205",
            "scope": "상층 PB와 하층/주변 PWRRUN frame의 dual-cushioning,CENTERPATH,engineered breathable mesh,재설계 XT900. 비교표의 Guide19/Hurricane26 정보를 채택하지 않음."
          },
          {
            "title": "Saucony 공식 — ride18",
            "url": "https://www.saucony.com/FR/fr_FR/ride-18/59943M.html",
            "scope": "reformulated PWRRUN+,engineered mesh,heel collar padding,heel-to-toe XT900 coverage 및 forefoot rubber/flex groove 설명. plate/FORMFIT/ISOFIT 공시 없음."
          }
        ]
      }
    },
    {
      "id": "speedroll",
      "name": "SPEEDROLL",
      "nameKo": "스피드롤",
      "category": "midsole",
      "description": "발이 앞쪽으로 넘어가는 전환을 목표로 한 밑창의 로커 형상입니다. 카본이나 나일론판 자체의 이름은 아닙니다.",
      "benefits": [
        "스피드 5·프로 4·프로 5에서 명칭 확인",
        "로커 형상·폼·판 재질을 각각 구분",
        "Endorphin 전 모델 공통 적용으로 확대하지 않기"
      ],
      "scienceExplanation": "스피드 5·프로 4·프로 5의 제조사 고유 설명에서 SPEEDROLL을 확인했습니다. 같은 Endorphin 계열이어도 판 재질과 폼은 다릅니다. 스피드 5는 나일론, 프로 4는 카본, 프로 5는 slotted 카본판으로 각각 연결합니다. 로커가 개인의 보폭을 늘리거나 특정 페이스에서 효율을 얼마나 개선하는지는 해당 제품 명칭만으로 판단할 수 없습니다. 기존 플레이트 범주로 묶던 항목은 형상을 설명하는 미드솔 범주로 옮겨 판과 혼동을 줄였습니다.",
      "usedInShoes": [
        "saucony-endorphin-speed-5",
        "saucony-endorphin-pro-4",
        "saucony-endorphin-pro-5"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사 기술군 원료 정의와 정확 세대의 부품·위치·적용 예시. 개별 배합·측정 성능·기록·통증·주행 수명을 보장하지 않습니다. 자료 간 충돌은 표시했습니다.",
        "sources": [
          {
            "title": "Saucony 공식 — speedJp",
            "url": "https://saucony.jp/products/mens-endorphin-speed-5",
            "scope": "PB, NYLON PLATE, SPEEDROLL, super-responsive sockliner를 명시. sockliner는 supercritical expanded thermoplastic resin이며 정확 고분자 이름은 없다."
          },
          {
            "title": "Saucony 공식 — hub",
            "url": "https://www.saucony.com/LU/en_LU/running-hub/",
            "scope": "정확 Speed5 단락은 PB, SPEEDROLL, winged nylon plate를 명시. 인접 Azura/Triumph24의 XT900 문구를 Speed5에 대입하지 않았다."
          },
          {
            "title": "Saucony 공식 — pro4",
            "url": "https://www.saucony.com/UK/en_GB/endorphin-pro-4/58850M.html",
            "scope": "PB+HG midsole, full carbon plate, SPEEDROLL, silky heel liner와 integrated tongue. Pro5의 slotted 형상은 이 문서에 없다."
          },
          {
            "title": "Saucony 공식 — pro5",
            "url": "https://www.saucony.com/en/endorphin-pro-5/60803M.html?dwvar_60803M_color=S21064-172",
            "scope": "PB+Super Critical HG dual-layer, 새 slotted carbon plate, SPEEDROLL, PWRTRAC rubber outsole. 정확 upper 섬유/구조는 여기서 확인 못함."
          }
        ]
      }
    },
    {
      "id": "carbon-plate",
      "name": "Carbon Plate",
      "nameKo": "카본 플레이트",
      "category": "plate",
      "description": "프로 4·5와 엘리트 2의 카본판은 형상이 다릅니다. 프로 5·엘리트 2의 slotted 구조를 다른 세대에 복사하지 않습니다.",
      "benefits": [
        "프로 4: full carbon 표기, 슬롯 상세는 미확인",
        "프로 5: slotted carbon plate",
        "엘리트 2: full-length slotted carbon fiber plate"
      ],
      "scienceExplanation": "프로 4의 정확 원문은 full carbon plate를 명시하고 프로 5는 새 slotted carbon plate를 명시합니다. 엘리트 2 일반형 역시 전장 slotted carbon fiber plate를 명시하지만 폼은 IncrediRUN으로, PWRRUN HG 적용 근거와 혼동하지 않습니다. 나일론판의 스피드 5는 이 목록에 넣지 않았습니다. 같은 카본 계열이라고 판의 강성·곡률·길이와 발에 맞는 체감이 모두 같거나 무조건 효율이 높다는 뜻은 아닙니다. 이번에 확인하지 않은 트레이너의 3/4 판 설명도 적용 예시에서 제외했습니다.",
      "usedInShoes": [
        "saucony-endorphin-pro-4",
        "saucony-endorphin-pro-5",
        "saucony-endorphin-elite-2"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사 기술군 원료 정의와 정확 세대의 부품·위치·적용 예시. 개별 배합·측정 성능·기록·통증·주행 수명을 보장하지 않습니다. 자료 간 충돌은 표시했습니다.",
        "sources": [
          {
            "title": "Saucony 공식 — pro4",
            "url": "https://www.saucony.com/UK/en_GB/endorphin-pro-4/58850M.html",
            "scope": "PB+HG midsole, full carbon plate, SPEEDROLL, silky heel liner와 integrated tongue. Pro5의 slotted 형상은 이 문서에 없다."
          },
          {
            "title": "Saucony 공식 — pro4Jp",
            "url": "https://saucony.jp/products/mens-endorphin-pro-4-n02",
            "scope": "PB+HG, carbon-fiber plate, SPEEDROLL, SRS sockliner와 XT900을 명시. XT900을 carbon rubber로 설명하지만 이는 carbon-fiber plate와 별도 부품이다."
          },
          {
            "title": "Saucony 공식 — pro5",
            "url": "https://www.saucony.com/en/endorphin-pro-5/60803M.html?dwvar_60803M_color=S21064-172",
            "scope": "PB+Super Critical HG dual-layer, 새 slotted carbon plate, SPEEDROLL, PWRTRAC rubber outsole. 정확 upper 섬유/구조는 여기서 확인 못함."
          },
          {
            "title": "Saucony 공식 엔돌핀 엘리트 2",
            "url": "https://www.saucony.com/en/endorphin-elite-2/59824U.html?dwvar_59824U_color=S30994-98",
            "scope": "IncrediRUN 폼·전장 slotted carbon fiber plate, 일반형 S30994-98. SILO 파생형과 구분"
          }
        ]
      }
    },
    {
      "id": "winged-nylon-plate",
      "name": "Winged Nylon Plate",
      "nameKo": "윙드 나일론 플레이트",
      "category": "plate",
      "description": "스피드 5에서 확인한 날개 형상의 나일론판입니다. 카본판의 저가형이나 모든 러너에게 더 안전한 구조로 단정하지 않습니다.",
      "benefits": [
        "스피드 5: 전장 semi-rigid nylon plate",
        "두 PWRRUN PB 층 사이에 배치",
        "강성·유연성의 카본 대비 서열은 실제 비교가 필요"
      ],
      "scienceExplanation": "스피드 5 정확 원문은 두 PB 층 사이에 놓인 전장 semi-rigid 나일론판을 설명하고, 공식 러닝 허브의 스피드 5 단락은 winged nylon plate를 명시합니다. 인접한 다른 모델의 밑창·폼 정보를 해당 모델로 옮기지 않았습니다. 나일론이라는 재료만으로 모든 카본판보다 유연하다거나 초보·부상 이력 러너에게 부담이 없다고 보장하지 않습니다. SPEEDROLL 형상과 PB 폼은 판과 별개 구성 요소입니다.",
      "usedInShoes": [
        "saucony-endorphin-speed-5"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사 기술군 원료 정의와 정확 세대의 부품·위치·적용 예시. 개별 배합·측정 성능·기록·통증·주행 수명을 보장하지 않습니다. 자료 간 충돌은 표시했습니다.",
        "sources": [
          {
            "title": "Saucony 공식 — speed",
            "url": "https://www.saucony.com/en/endorphin-speed-5/60307M.html?dwvar_60307M_color=S21007-98",
            "scope": "PB 두 층 사이에 전장 semi-rigid nylon plate, engineered mesh, 전장 groove와 확장 heel outsole coverage. 색상 선택과 무관하게 Kissaten edition 문구가 보이므로 장식 설명을 기본형에 적용하지 않는다. outsole rubber 기술명은 명시하지 않는다."
          },
          {
            "title": "Saucony 공식 — speedJp",
            "url": "https://saucony.jp/products/mens-endorphin-speed-5",
            "scope": "PB, NYLON PLATE, SPEEDROLL, super-responsive sockliner를 명시. sockliner는 supercritical expanded thermoplastic resin이며 정확 고분자 이름은 없다."
          },
          {
            "title": "Saucony 공식 — hub",
            "url": "https://www.saucony.com/LU/en_LU/running-hub/",
            "scope": "정확 Speed5 단락은 PB, SPEEDROLL, winged nylon plate를 명시. 인접 Azura/Triumph24의 XT900 문구를 Speed5에 대입하지 않았다."
          }
        ]
      }
    },
    {
      "id": "centerpath",
      "name": "CenterPath Technology",
      "nameKo": "센터패스",
      "category": "stability",
      "description": "넓은 바닥과 높은 측벽 등 미드솔 형상으로 지지를 목표로 한 기술입니다. 가이드 18·허리케인 25의 확인 예시를 구분합니다.",
      "benefits": [
        "가이드 18: 넓은 기반·높은 측벽",
        "허리케인 25: PB와 PWRRUN 프레임의 조합",
        "지지 설계를 평발 교정·부상 예방으로 단정하지 않기"
      ],
      "scienceExplanation": "가이드 18 공식 원문은 CENTERPATH의 넓은 기반과 높은 측벽을 설명합니다. 허리케인 25는 새 지지 형상과 PB 상층·PWRRUN 하부/주변 프레임을 함께 제시합니다. 같은 기술명이어도 쿠션 소재와 구조가 모두 같은 것은 아닙니다. 안정적인 진행을 돕는다는 제조사 설계 의도와 특정 러너의 회내 교정·통증 치료·부상 감소 효과를 구분합니다. 시착할 때 측벽의 압박감과 좌우 전환, 편안함을 확인할 수 있지만 발 모양만으로 자동 적합 판정을 하지 않습니다.",
      "usedInShoes": [
        "saucony-guide-18",
        "saucony-hurricane-25"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사 기술군 원료 정의와 정확 세대의 부품·위치·적용 예시. 개별 배합·측정 성능·기록·통증·주행 수명을 보장하지 않습니다. 자료 간 충돌은 표시했습니다.",
        "sources": [
          {
            "title": "Saucony 공식 — guide",
            "url": "https://www.saucony.com/UK/en_GB/guide-18/59947M.html?details=complete&dwvar_59947M_color=S20998-240&isProductSetPage=false",
            "scope": "PWRRUN midsole/PWRRUN+ sockliner,CENTERPATH의 넓은 기반과 높은 sidewall,engineered breathable mesh/padded heel collar. PWRRUN+를 주미드솔로 기록하지 않음."
          },
          {
            "title": "Saucony 공식 — guideJp",
            "url": "https://saucony.jp/products/mens-guide-18-n02",
            "scope": "PWRRUN,CENTERPATH,PWRRUN+ sockliner,XT900. sockliner는 e-TPU(expanded thermoplastic polyurethane),XT900은 carbon rubber로 명시. CENTERPATH는 midsole geometry로 설명."
          },
          {
            "title": "Saucony 공식 — hurricane",
            "url": "https://www.saucony.com/en/hurricane-25/60323M.html?dwvar_60323M_color=S21026-205",
            "scope": "상층 PB와 하층/주변 PWRRUN frame의 dual-cushioning,CENTERPATH,engineered breathable mesh,재설계 XT900. 비교표의 Guide19/Hurricane26 정보를 채택하지 않음."
          }
        ]
      }
    },
    {
      "id": "formfit",
      "name": "FORMFIT",
      "nameKo": "폼핏",
      "category": "stability",
      "description": "발을 여러 방향에서 감싸는 핏 접근을 설명하는 명칭입니다. 과거 Ride ISO 2의 공식 연혁을 최신 모델 적용 근거로 그대로 쓰지 않습니다.",
      "benefits": [
        "공식 연혁의 Ride ISO 2 사례 확인",
        "라이드 18·트라이엄프 23·가이드 18·허리케인 25의 미확인 연결 제거",
        "핏은 어퍼·인솔·발의 실제 조합으로 확인"
      ],
      "scienceExplanation": "써코니 공식 연혁은 Ride ISO 2의 FORMFIT을 발을 여러 방향에서 감싸는 3D 핏 접근으로 설명합니다. 이는 기술의 과거 사례이며 이번에 읽은 8개 정확 제품의 FORMFIT 적용을 증명하는 문장은 아닙니다. 일반 컬렉션이나 검색 결과에 명칭이 있다고 모든 현재 모델에 같은 부품이 들어간다고 연결하지 않습니다. 확인된 현재 적용 예시가 없어 목록을 비웠으며 이는 미탑재를 단정한다는 뜻은 아닙니다. 개인 발 형태에 자동으로 완벽하게 맞춘다는 효과 표현도 제외했습니다.",
      "usedInShoes": [],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사 기술군 원료 정의와 정확 세대의 부품·위치·적용 예시. 개별 배합·측정 성능·기록·통증·주행 수명을 보장하지 않습니다. 자료 간 충돌은 표시했습니다.",
        "sources": [
          {
            "title": "Saucony 공식 연혁",
            "url": "https://www.saucony.com/CA/en_CA/history/",
            "scope": "1898년 펜실베이니아 Kutztown 기원, FORMFIT의 과거 Ride ISO 2 사례. 최신 모델 적용으로 자동 이전하지 않음"
          },
          {
            "title": "Saucony 공식 — ride18",
            "url": "https://www.saucony.com/FR/fr_FR/ride-18/59943M.html",
            "scope": "reformulated PWRRUN+,engineered mesh,heel collar padding,heel-to-toe XT900 coverage 및 forefoot rubber/flex groove 설명. plate/FORMFIT/ISOFIT 공시 없음."
          },
          {
            "title": "Saucony 공식 — triumphJp",
            "url": "https://saucony.jp/products/mens-triumph-23-n02",
            "scope": "PB,SRS,XT900을 명시. SRS는 supercritical expanded thermoplastic resin, XT900은 premium carbon rubber로 설명. incrediLUX 표기는 없음."
          },
          {
            "title": "Saucony 공식 — guide",
            "url": "https://www.saucony.com/UK/en_GB/guide-18/59947M.html?details=complete&dwvar_59947M_color=S20998-240&isProductSetPage=false",
            "scope": "PWRRUN midsole/PWRRUN+ sockliner,CENTERPATH의 넓은 기반과 높은 sidewall,engineered breathable mesh/padded heel collar. PWRRUN+를 주미드솔로 기록하지 않음."
          },
          {
            "title": "Saucony 공식 — hurricane",
            "url": "https://www.saucony.com/en/hurricane-25/60323M.html?dwvar_60323M_color=S21026-205",
            "scope": "상층 PB와 하층/주변 PWRRUN frame의 dual-cushioning,CENTERPATH,engineered breathable mesh,재설계 XT900. 비교표의 Guide19/Hurricane26 정보를 채택하지 않음."
          }
        ]
      }
    },
    {
      "id": "pwrtrac",
      "name": "PWRTRAC",
      "nameKo": "PWRTRAC",
      "category": "outsole",
      "description": "프로 5의 정확 원문에서 확인한 아웃솔 고무 명칭입니다. 일반 용어집의 마찰계수 주장을 모든 모델의 빗길 시험 결과로 확대하지 않습니다.",
      "benefits": [
        "프로 5: PWRTRAC 명칭 확인",
        "프로 4·라이드 18 등은 XT-900으로 구분",
        "COF 3배는 일반 카본 고무 대비 제조사 용어집 주장"
      ],
      "scienceExplanation": "공식 기술 용어집은 PWRTRAC의 마찰계수가 일반 카본 고무의 3배라고 설명합니다. 읽은 원문에는 시험 노면·습윤 상태·온도·검체 조건이 제시되지 않아 특정 완성화의 독립 마찰 시험으로 사용할 수 없습니다. 프로 5 제품에서는 명칭을 확인했지만 스피드 5·라이드 19의 읽은 고유 원문은 정확 고무 상표를 명시하지 않습니다. 다른 모델이나 파생형의 명칭을 복사하지 않고, 확인한 예시 프로 5만 연결했습니다. 빗길·젖은 도색·금속 표면에서 미끄러지지 않는다고 보장하지 않습니다.",
      "usedInShoes": [
        "saucony-endorphin-pro-5"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사 기술군 원료 정의와 정확 세대의 부품·위치·적용 예시. 개별 배합·측정 성능·기록·통증·주행 수명을 보장하지 않습니다. 자료 간 충돌은 표시했습니다.",
        "sources": [
          {
            "title": "Saucony 공식 — pro5",
            "url": "https://www.saucony.com/en/endorphin-pro-5/60803M.html?dwvar_60803M_color=S21064-172",
            "scope": "PB+Super Critical HG dual-layer, 새 slotted carbon plate, SPEEDROLL, PWRTRAC rubber outsole. 정확 upper 섬유/구조는 여기서 확인 못함."
          },
          {
            "title": "Saucony 공식 — pro5Jp",
            "url": "https://saucony.jp/products/mens-endorphin-pro-5",
            "scope": "PB,HG,carbon-fiber plate,SPEEDROLL,PWRTRAC,SRS 명시. PWRTRAC는 proprietary rubber로 설명하며 outsole carbon-fiber라고 하지 않는다."
          },
          {
            "title": "Saucony 공식 기술 용어집",
            "url": "https://www.saucony.com/IT/it_IT/glossary-of-terms/",
            "scope": "PWRTRAC COF 3배 제조사 일반 주장, XT-900과 XT-600의 별도 설명. 정확 SKU 동일 조건 실험으로 확대하지 않음"
          }
        ]
      }
    },
    {
      "id": "xt-900",
      "name": "XT-900",
      "nameKo": "XT-900",
      "category": "outsole",
      "description": "프로 4·트라이엄프 23·라이드 18·가이드 18·허리케인 25에서 확인한 고무 아웃솔 명칭입니다. 카본 러버와 카본섬유 판은 다른 부품입니다.",
      "benefits": [
        "정확 세대 원문으로 확인한 다섯 모델만 연결",
        "프로 5의 PWRTRAC과 구분",
        "XT-600 대비 고정 수명·접지 서열은 미확인"
      ],
      "scienceExplanation": "공식 원문은 XT-900을 premium carbon rubber로 설명합니다. 여기의 carbon rubber는 밑창 고무에 관한 말이며 미드솔의 카본섬유 플레이트가 있다는 뜻이 아닙니다. 프로 4·트라이엄프 23·라이드 18·가이드 18·허리케인 25의 명시적 적용을 확인했습니다. 스피드 5·라이드 19에는 이번에 확인한 상표 적용 근거가 없어 목록에 추가하지 않았습니다. 용어집이 XT-900과 XT-600을 각각 설명한다는 이유만으로 내구성 순위나 교체 거리를 정하지 않습니다.",
      "usedInShoes": [
        "saucony-endorphin-pro-4",
        "saucony-triumph-23",
        "saucony-ride-18",
        "saucony-guide-18",
        "saucony-hurricane-25"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사 기술군 원료 정의와 정확 세대의 부품·위치·적용 예시. 개별 배합·측정 성능·기록·통증·주행 수명을 보장하지 않습니다. 자료 간 충돌은 표시했습니다.",
        "sources": [
          {
            "title": "Saucony 공식 — pro4Jp",
            "url": "https://saucony.jp/products/mens-endorphin-pro-4-n02",
            "scope": "PB+HG, carbon-fiber plate, SPEEDROLL, SRS sockliner와 XT900을 명시. XT900을 carbon rubber로 설명하지만 이는 carbon-fiber plate와 별도 부품이다."
          },
          {
            "title": "Saucony 공식 — triumphJp",
            "url": "https://saucony.jp/products/mens-triumph-23-n02",
            "scope": "PB,SRS,XT900을 명시. SRS는 supercritical expanded thermoplastic resin, XT900은 premium carbon rubber로 설명. incrediLUX 표기는 없음."
          },
          {
            "title": "Saucony 공식 — ride18",
            "url": "https://www.saucony.com/FR/fr_FR/ride-18/59943M.html",
            "scope": "reformulated PWRRUN+,engineered mesh,heel collar padding,heel-to-toe XT900 coverage 및 forefoot rubber/flex groove 설명. plate/FORMFIT/ISOFIT 공시 없음."
          },
          {
            "title": "Saucony 공식 — guideJp",
            "url": "https://saucony.jp/products/mens-guide-18-n02",
            "scope": "PWRRUN,CENTERPATH,PWRRUN+ sockliner,XT900. sockliner는 e-TPU(expanded thermoplastic polyurethane),XT900은 carbon rubber로 명시. CENTERPATH는 midsole geometry로 설명."
          },
          {
            "title": "Saucony 공식 — hurricane",
            "url": "https://www.saucony.com/en/hurricane-25/60323M.html?dwvar_60323M_color=S21026-205",
            "scope": "상층 PB와 하층/주변 PWRRUN frame의 dual-cushioning,CENTERPATH,engineered breathable mesh,재설계 XT900. 비교표의 Guide19/Hurricane26 정보를 채택하지 않음."
          },
          {
            "title": "Saucony 공식 기술 용어집",
            "url": "https://www.saucony.com/IT/it_IT/glossary-of-terms/",
            "scope": "PWRTRAC COF 3배 제조사 일반 주장, XT-900과 XT-600의 별도 설명. 정확 SKU 동일 조건 실험으로 확대하지 않음"
          }
        ]
      }
    }
  ],
  "verification": {
    "checkedAt": "2026-11-10",
    "scope": "창업 연도·기원과 아래 11개 기술 설명의 한정된 확인 범위. 현재 본사 세부 위치는 이번 원문에서 확정하지 않아 표기를 보류했습니다.",
    "sources": [
      {
        "title": "Saucony 공식 연혁",
        "url": "https://www.saucony.com/CA/en_CA/history/",
        "scope": "1898년 펜실베이니아 Kutztown 기원, FORMFIT의 과거 Ride ISO 2 사례. 최신 모델 적용으로 자동 이전하지 않음"
      },
      {
        "title": "Saucony 공식 브랜드 소개",
        "url": "https://www.saucony.com/en/about-us/?caid=footer-about-us",
        "scope": "1898년 창업과 펜실베이니아 Kutztown 기원; 창업지를 매사추세츠로 적던 설명 수정"
      }
    ]
  }
};
