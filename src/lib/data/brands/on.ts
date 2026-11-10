import type { Brand } from '@/types/brand';

export const onBrand: Brand = {
  "id": "on",
  "name": "On",
  "nameKo": "온",
  "tagline": "Run On Clouds",
  "description": "2010년 스위스 알프스에서 시작한 스포츠 브랜드로 취리히에 본사를 두고 있습니다. CloudTec의 폼 형상, Helion 계열 소재, Speedboard 부품, LightSpray 어퍼 제조 방식은 서로 다른 요소입니다. 같은 Cloudmonster·Cloudboom 이름에서도 세대와 일반형·Hyper·LightSpray 버전의 구성이 달라집니다.",
  "founded": 2010,
  "headquarters": "스위스 취리히",
  "website": "https://www.on-running.com/ko-kr",
  "technologies": [
    {
      "id": "cloudtec",
      "name": "CloudTec®",
      "nameKo": "클라우드텍",
      "category": "midsole",
      "description": "폼과 빈 공간의 형상을 통해 압축과 전환을 설계하는 쿠셔닝 계열입니다. 폼을 별도 관 안에 채운 구조나 가압 에어백으로 설명하지 않습니다.",
      "benefits": [
        "일반 CloudTec·Phase·Sphere의 명칭 구분",
        "몬스터 3의 3층 구조를 폼 원료 3종으로 바꾸지 않기",
        "폼 소재 Helion과 구조 이름 CloudTec는 별개"
      ],
      "scienceExplanation": "제조사 기술 안내는 CloudTec를 수평·수직 압축을 고려한 폼 구조로 설명합니다. 읽은 정확 원문이 가압 공기를 주입한 에어백을 설명하는 것은 아니므로, 빈 공간 안에 폼을 채운 관이라는 기존 표현을 수정했습니다. 몬스터 3 일반판은 3층 CloudTec, 서퍼 2는 CloudTec Phase, LightSpray 스트라이크 2는 CloudTec Sphere로 나눕니다. 아래 목록은 일반 CloudTec 명칭을 확인한 예시이며, 변형된 구조가 모두 같은 압축 순서·밀도라는 뜻은 아닙니다.",
      "usedInShoes": [
        "on-cloudrunner-2",
        "on-cloudmonster-2",
        "on-cloudmonster-3",
        "on-cloudmonster-hyper",
        "on-cloudflow-5",
        "on-cloudboom-strike"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사의 정확 모델·세대·버전별 기술명과 확인된 적용 예시. 이름만으로 원료·판 유무·임상 효과·기록·수명을 추정하지 않습니다.",
        "sources": [
          {
            "title": "On 공식 — CloudTec: Run on clouds",
            "url": "https://www.on.com/en-gb/explore/technology/cloudtec",
            "scope": "Technology body: structural foam geometry; horizontal/vertical compression; model collections."
          },
          {
            "title": "On 공식 — Cloudrunner 2: Men’s Stable Running Shoe",
            "url": "https://www.on.com/en-gb/products/cloudrunner-2-m-3me1014",
            "scope": "Exact standard non-waterproof generation; Key features and Stable runs / Built for support / Breathable upper; related products excluded."
          },
          {
            "title": "On 공식 — Cloudmonster 2: Men’s Road Running Shoe",
            "url": "https://www.on.com/en-us/products/cloudmonster-2-m-3me1012",
            "scope": "Key features; Maximum energy return; Breathable upper; material label."
          },
          {
            "title": "On 공식 — On Unveils the Next Generation of the Cloudmonster Collection",
            "url": "https://press.on-running.com/on-unveils-the-next-generation-of-the-cloudmonster-collection-with-the-cloudmonster-3-cloudmonster-3-hyper-and-lightspray-cloudmonster-3-hyper",
            "scope": "Article date and regular Cloudmonster 3 section; Hyper and LightSpray sections separately identified and not transferred."
          },
          {
            "title": "On 공식 — Cloudmonster Hyper Men: Max Cushioning Running Shoes",
            "url": "https://www.on.com/en-us/products/cloudmonster-hyper-m-3me1013",
            "scope": "First-generation family 3ME1013; Key features; Fresh legs are fast legs; Developed by athletes; Hyper details."
          },
          {
            "title": "On 공식 — Men’s Cloudflow 5",
            "url": "https://www.on.com/en-us/products/cloudflow-5-m-3mf1011/mens/ivory-linen-shoes-3MF10114852",
            "scope": "Exact standard 3MF1011 generation; Key features; Technologies; Experience a fast ride; Athlete-inspired design."
          },
          {
            "title": "On 공식 — Cloudboom Strike FW24 Tech Sheet",
            "url": "https://press.on-running.com/cloudboom-strike",
            "scope": "Full first-generation English tech sheet; drop-in construction; race-day CloudTec; one-piece semi-transparent mesh."
          },
          {
            "title": "On 공식 — ON LIGHTSPRAY CLOUDBOOM STRIKE 2 FW26 Tech Sheet",
            "url": "https://press.on-running.com/on-lightspray-cloudboom-strike-2",
            "scope": "Full English technical sheet; new HF; curved carbon Speedboard; dual-density layers; Sphere geometry; seamless glueless upper."
          }
        ]
      }
    },
    {
      "id": "cloudtec-phase",
      "name": "CloudTec Phase™",
      "nameKo": "클라우드텍 페이즈",
      "category": "midsole",
      "description": "기울어진 Cloud 요소가 순서대로 압축되도록 설계한 구조입니다. 서퍼 2에서 확인했으며, 그 자체로 두 층이나 이중밀도를 뜻하지 않습니다.",
      "benefits": [
        "서퍼 2: CloudTec Phase와 Helion 확인",
        "서퍼 2 공식 기술지는 Speedboard 없이 전환을 만든다고 설명",
        "LightSpray 스트라이크 2의 Sphere와 구분"
      ],
      "scienceExplanation": "공식 기술 안내는 기울어진 구조의 순차 압축과 시뮬레이션 기반 설계를 설명합니다. 서퍼 2 기술지는 Speedboard 없이 뒤꿈치에서 앞발로 이어지는 전환을 목표로 한다고 명시합니다. Phase라는 이름만으로 모든 적용 제품이 두 층이라고 설명하지 않습니다. 별도 모델의 층수를 서퍼 2에 이식하거나, 새 CloudTec Sphere를 같은 기술로 바꾸어 연결하지 않았습니다. 설계 의도가 실제 모든 러너의 전환 효율을 보장하는 것은 아닙니다.",
      "usedInShoes": [
        "on-cloudsurfer-2"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사의 정확 모델·세대·버전별 기술명과 확인된 적용 예시. 이름만으로 원료·판 유무·임상 효과·기록·수명을 추정하지 않습니다.",
        "sources": [
          {
            "title": "On 공식 — CloudTec Phase: Run on clouds",
            "url": "https://www.on.com/en-gb/explore/technology/cloudtec-phase",
            "scope": "Technology body: simulated angled structures; sequential compression. Related-product carousel excluded."
          },
          {
            "title": "On 공식 — Men’s Cloudsurfer 2",
            "url": "https://www.on.com/en-us/products/cloudsurfer-2-3mf1012/mens/black-black-shoes-3MF10121043",
            "scope": "Exact SKU; Key features; Technologies; CloudTec Phase and Helion; mesh upper."
          },
          {
            "title": "On 공식 — Cloudsurfer 2 SS25 Product Tech Sheet",
            "url": "https://press.on-running.com/cloudsurfer-2-pba4rb",
            "scope": "Full English tech sheet, especially Ultimate Ride Experience and Breathable Upper."
          },
          {
            "title": "On 공식 — ON LIGHTSPRAY CLOUDBOOM STRIKE 2 FW26 Tech Sheet",
            "url": "https://press.on-running.com/on-lightspray-cloudboom-strike-2",
            "scope": "Full English technical sheet; new HF; curved carbon Speedboard; dual-density layers; Sphere geometry; seamless glueless upper."
          }
        ]
      }
    },
    {
      "id": "helion",
      "name": "Helion™",
      "nameKo": "헬리온",
      "category": "midsole",
      "description": "서퍼 2·러너 2·몬스터 2·몬스터 3 일반판에서 확인한 폼 명칭입니다. Helion HF를 같은 이름으로 합치지 않습니다.",
      "benefits": [
        "서퍼 2·러너 2: Helion",
        "몬스터 2·3 일반판: dual-density Helion",
        "클라우드플로우 5의 일반 기술 카드로 두 번째 Helion 층을 추정하지 않기"
      ],
      "scienceExplanation": "제조사는 Helion의 밀도·높이·반발 특성을 조정한다고 설명합니다. 몬스터 2와 3 일반판은 이중밀도 Helion이 확인되지만 이 정보가 서퍼 2·러너 2도 이중밀도라는 뜻은 아닙니다. 원문에서 기본 원료를 공시하지 않아 EVA·TPU·PEBA를 이름만으로 지정하지 않았습니다. 하이퍼 초대는 Helion HF가 확인되지만 두 번째 폼의 정확 상표는 이번 원문으로 확정하지 못해 일반 Helion 적용 예시에서 제외했습니다. 클라우드플로우 5의 모델 고유 설명은 HF를 명시하므로 공통 기술 카드만 보고 일반 Helion 층을 추가하지 않습니다.",
      "usedInShoes": [
        "on-cloudsurfer-2",
        "on-cloudrunner-2",
        "on-cloudmonster-2",
        "on-cloudmonster-3"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사의 정확 모델·세대·버전별 기술명과 확인된 적용 예시. 이름만으로 원료·판 유무·임상 효과·기록·수명을 추정하지 않습니다.",
        "sources": [
          {
            "title": "On 공식 — Helion: Where soft meets strong",
            "url": "https://www.on.com/en-gb/explore/technology/helion",
            "scope": "Technology body: foam density, height and rebound tuning; material composition not disclosed in read body."
          },
          {
            "title": "On 공식 — Men’s Cloudsurfer 2",
            "url": "https://www.on.com/en-us/products/cloudsurfer-2-3mf1012/mens/black-black-shoes-3MF10121043",
            "scope": "Exact SKU; Key features; Technologies; CloudTec Phase and Helion; mesh upper."
          },
          {
            "title": "On 공식 — Cloudrunner 2: Men’s Stable Running Shoe",
            "url": "https://www.on.com/en-gb/products/cloudrunner-2-m-3me1014",
            "scope": "Exact standard non-waterproof generation; Key features and Stable runs / Built for support / Breathable upper; related products excluded."
          },
          {
            "title": "On 공식 — Cloudmonster 2: Men’s Road Running Shoe",
            "url": "https://www.on.com/en-us/products/cloudmonster-2-m-3me1012",
            "scope": "Key features; Maximum energy return; Breathable upper; material label."
          },
          {
            "title": "On 공식 — On Unveils the Next Generation of the Cloudmonster Collection",
            "url": "https://press.on-running.com/on-unveils-the-next-generation-of-the-cloudmonster-collection-with-the-cloudmonster-3-cloudmonster-3-hyper-and-lightspray-cloudmonster-3-hyper",
            "scope": "Article date and regular Cloudmonster 3 section; Hyper and LightSpray sections separately identified and not transferred."
          },
          {
            "title": "On 공식 — Cloudmonster Hyper Men: Max Cushioning Running Shoes",
            "url": "https://www.on.com/en-us/products/cloudmonster-hyper-m-3me1013",
            "scope": "First-generation family 3ME1013; Key features; Fresh legs are fast legs; Developed by athletes; Hyper details."
          },
          {
            "title": "On 공식 — Men’s Cloudflow 5",
            "url": "https://www.on.com/en-us/products/cloudflow-5-m-3mf1011/mens/ivory-linen-shoes-3MF10114852",
            "scope": "Exact standard 3MF1011 generation; Key features; Technologies; Experience a fast ride; Athlete-inspired design."
          }
        ]
      }
    },
    {
      "id": "helion-hf",
      "name": "Helion™ HF",
      "nameKo": "헬리온 HF",
      "category": "midsole",
      "description": "하이퍼 초대·플로우 5·스트라이크 초대·LightSpray 스트라이크 2에서 확인한 폼입니다. 모든 HF가 같은 배합·층수인 것은 아닙니다.",
      "benefits": [
        "하이퍼 초대: 공식 기술지에 Pebax 명시",
        "플로우 5·스트라이크 각 세대의 원료는 미확인 유지",
        "LightSpray 스트라이크 2: 새로운 HF의 이중밀도 층"
      ],
      "scienceExplanation": "하이퍼 초대의 2024년 기술지는 Helion HF를 Pebax라고 명시합니다. 이 사실을 다른 HF 모델과 새 세대의 정확 원료 공시로 자동 확대하지 않았습니다. 스트라이크 초대는 Helion HF의 탈착형 Bounceboard 쿠션과 별도 카본 Speedboard를 구분합니다. LightSpray 스트라이크 2는 새 HF의 이중밀도 층 사이에 카본판을 놓은 구조입니다. 새 폼의 15% 경량화 문구는 초대 스트라이크 HF 대비 제조사 소재 비교이며 완성화 전체 무게 감소나 모든 HF의 독립 측정치가 아닙니다. 서퍼 2·몬스터 2 일반판의 미확인 HF 연결은 제거했습니다.",
      "usedInShoes": [
        "on-cloudmonster-hyper",
        "on-cloudflow-5",
        "on-cloudboom-strike",
        "on-cloudboom-strike-2-lightspray"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사의 정확 모델·세대·버전별 기술명과 확인된 적용 예시. 이름만으로 원료·판 유무·임상 효과·기록·수명을 추정하지 않습니다.",
        "sources": [
          {
            "title": "On 공식 — Cloudmonster Hyper SS24 Tech Sheet",
            "url": "https://press.on-running.com/cloudmonster-hyper",
            "scope": "Full first-generation English tech sheet, especially Pebax HF, no-carbon wording and engineered lightweight woven upper."
          },
          {
            "title": "On 공식 — Men’s Cloudflow 5",
            "url": "https://www.on.com/en-us/products/cloudflow-5-m-3mf1011/mens/ivory-linen-shoes-3MF10114852",
            "scope": "Exact standard 3MF1011 generation; Key features; Technologies; Experience a fast ride; Athlete-inspired design."
          },
          {
            "title": "On 공식 — Women’s Cloudboom Strike",
            "url": "https://www.on.com/en-us/products/cloudboom-strike-3we3047/womens/black-white-shoes-3WE30470299",
            "scope": "Exact first-generation non-LS 3WE3047; Key features; Cushioned Bounceboard; Carbon fiber Speedboard; Ultralight upper."
          },
          {
            "title": "On 공식 — Cloudboom Strike FW24 Tech Sheet",
            "url": "https://press.on-running.com/cloudboom-strike",
            "scope": "Full first-generation English tech sheet; drop-in construction; race-day CloudTec; one-piece semi-transparent mesh."
          },
          {
            "title": "On 공식 — ON LIGHTSPRAY CLOUDBOOM STRIKE 2 FW26 Tech Sheet",
            "url": "https://press.on-running.com/on-lightspray-cloudboom-strike-2",
            "scope": "Full English technical sheet; new HF; curved carbon Speedboard; dual-density layers; Sphere geometry; seamless glueless upper."
          },
          {
            "title": "On 공식 — On Unveils Next Generation of Cloudboom Marathon Racing Shoes",
            "url": "https://press.on-running.com/on-unveils-next-generation-of-cloudboom-marathon-racing-shoes-powered-by-new-cloudtec-sphere-technology",
            "scope": "Technical features and comparison-claim scope; LightSpray-only upper distinguished from regular Strike 2."
          }
        ]
      }
    },
    {
      "id": "speedboard",
      "name": "Speedboard®",
      "nameKo": "스피드보드",
      "category": "plate",
      "description": "모델별 재질·형상·곡률이 다른 보드 계열입니다. 몬스터의 나일론 혼합, 플로우 5의 유리섬유·나일론 혼합, 스트라이크의 카본을 구분합니다.",
      "benefits": [
        "몬스터 2·3 일반판: nylon blend",
        "플로우 5: glass-fiber nylon blend",
        "서퍼 2·하이퍼 초대는 공식적으로 보드 없음"
      ],
      "scienceExplanation": "공식 기술 안내는 보드의 재료·형상·두께·곡률이 모델마다 다르다고 설명합니다. 몬스터 2·3 일반판은 나일론 혼합, 플로우 5는 유리섬유·나일론 혼합으로 확인했습니다. 스트라이크 초대는 스푼형 100% carbon이라는 제조사 표현이고 LightSpray 스트라이크 2는 두 HF 층 사이의 곡선 카본판입니다. 폼 쿠션 Bounceboard와 이 판은 별개입니다. 서퍼 2 기술지와 하이퍼 초대 제품은 Speedboard가 없다고 명시합니다. 러너 2는 정확 원문에 긍정 적용 근거가 없어 연결을 제거했지만 누락만으로 물리적 부재를 확정하지는 않습니다.",
      "usedInShoes": [
        "on-cloudmonster-2",
        "on-cloudmonster-3",
        "on-cloudflow-5",
        "on-cloudboom-strike",
        "on-cloudboom-strike-2-lightspray"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사의 정확 모델·세대·버전별 기술명과 확인된 적용 예시. 이름만으로 원료·판 유무·임상 효과·기록·수명을 추정하지 않습니다.",
        "sources": [
          {
            "title": "On 공식 — Speedboard: Maximise your energy",
            "url": "https://www.on.com/en-gb/explore/technology/speedboard",
            "scope": "Technology body: material, shape, thickness and curve vary; no fixed polymer for every model."
          },
          {
            "title": "On 공식 — Cloudmonster 2: Men’s Road Running Shoe",
            "url": "https://www.on.com/en-us/products/cloudmonster-2-m-3me1012",
            "scope": "Key features; Maximum energy return; Breathable upper; material label."
          },
          {
            "title": "On 공식 — On Unveils the Next Generation of the Cloudmonster Collection",
            "url": "https://press.on-running.com/on-unveils-the-next-generation-of-the-cloudmonster-collection-with-the-cloudmonster-3-cloudmonster-3-hyper-and-lightspray-cloudmonster-3-hyper",
            "scope": "Article date and regular Cloudmonster 3 section; Hyper and LightSpray sections separately identified and not transferred."
          },
          {
            "title": "On 공식 — Men’s Cloudflow 5",
            "url": "https://www.on.com/en-us/products/cloudflow-5-m-3mf1011/mens/ivory-linen-shoes-3MF10114852",
            "scope": "Exact standard 3MF1011 generation; Key features; Technologies; Experience a fast ride; Athlete-inspired design."
          },
          {
            "title": "On 공식 — Women’s Cloudboom Strike",
            "url": "https://www.on.com/en-us/products/cloudboom-strike-3we3047/womens/black-white-shoes-3WE30470299",
            "scope": "Exact first-generation non-LS 3WE3047; Key features; Cushioned Bounceboard; Carbon fiber Speedboard; Ultralight upper."
          },
          {
            "title": "On 공식 — ON LIGHTSPRAY CLOUDBOOM STRIKE 2 FW26 Tech Sheet",
            "url": "https://press.on-running.com/on-lightspray-cloudboom-strike-2",
            "scope": "Full English technical sheet; new HF; curved carbon Speedboard; dual-density layers; Sphere geometry; seamless glueless upper."
          },
          {
            "title": "On 공식 — Cloudsurfer 2 SS25 Product Tech Sheet",
            "url": "https://press.on-running.com/cloudsurfer-2-pba4rb",
            "scope": "Full English tech sheet, especially Ultimate Ride Experience and Breathable Upper."
          },
          {
            "title": "On 공식 — Cloudmonster Hyper Men: Max Cushioning Running Shoes",
            "url": "https://www.on.com/en-us/products/cloudmonster-hyper-m-3me1013",
            "scope": "First-generation family 3ME1013; Key features; Fresh legs are fast legs; Developed by athletes; Hyper details."
          },
          {
            "title": "On 공식 — Cloudrunner 2: Men’s Stable Running Shoe",
            "url": "https://www.on.com/en-gb/products/cloudrunner-2-m-3me1014",
            "scope": "Exact standard non-waterproof generation; Key features and Stable runs / Built for support / Breathable upper; related products excluded."
          }
        ]
      }
    },
    {
      "id": "lightspray",
      "name": "LightSpray™",
      "nameKo": "라이트스프레이",
      "category": "upper",
      "description": "로봇으로 뿌려 이음새·접착제 없는 한 조각 어퍼를 만드는 제조 방식입니다. LightSpray 스트라이크 2와 일반 스트라이크를 구분합니다.",
      "benefits": [
        "LightSpray 스트라이크 2: 끈 없는 스프레이 어퍼",
        "일반 스트라이크 초대: 메쉬 어퍼로 구분",
        "초대 어퍼 30g·다른 모델 탄소배출 수치를 새 세대에 전용하지 않기"
      ],
      "scienceExplanation": "LightSpray 스트라이크 2의 2026년 기술지는 로봇으로 형성하는 seamless·glueless 일체형 어퍼와 수정된 핏을 설명합니다. 일반 스트라이크 초대는 반투명 메쉬로 확인되어 해당 제조 방식의 적용 제품으로 묶지 않습니다. 초대 LightSpray 어퍼의 약 30g이나 다른 LightSpray 모델 어퍼의 탄소발자국 비교를 새 스트라이크 2 전체 신발 수치로 복사하지 않았습니다. 끈이 없다는 사실만으로 압력이 균일하거나 모든 발에 맞는다는 보장은 아닙니다. 확인한 정확 등록 예시만 아래에 연결했습니다.",
      "usedInShoes": [
        "on-cloudboom-strike-2-lightspray"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사의 정확 모델·세대·버전별 기술명과 확인된 적용 예시. 이름만으로 원료·판 유무·임상 효과·기록·수명을 추정하지 않습니다.",
        "sources": [
          {
            "title": "On 공식 — LightSpray Cloudboom Strike 2",
            "url": "https://www.on.com/en-us/products/cloudboom-strike-2-ls-u-3ug3002/unisex/white-lime-shoes-3UG30022929",
            "scope": "Exact second-generation LS unisex SKU; Key features; Technologies; Meet CloudTec Sphere; Updated LightSpray fit; material label."
          },
          {
            "title": "On 공식 — ON LIGHTSPRAY CLOUDBOOM STRIKE 2 FW26 Tech Sheet",
            "url": "https://press.on-running.com/on-lightspray-cloudboom-strike-2",
            "scope": "Full English technical sheet; new HF; curved carbon Speedboard; dual-density layers; Sphere geometry; seamless glueless upper."
          },
          {
            "title": "On 공식 — On Unveils Next Generation of Cloudboom Marathon Racing Shoes",
            "url": "https://press.on-running.com/on-unveils-next-generation-of-cloudboom-marathon-racing-shoes-powered-by-new-cloudtec-sphere-technology",
            "scope": "Technical features and comparison-claim scope; LightSpray-only upper distinguished from regular Strike 2."
          },
          {
            "title": "On 공식 — Cloudboom Strike FW24 Tech Sheet",
            "url": "https://press.on-running.com/cloudboom-strike",
            "scope": "Full first-generation English tech sheet; drop-in construction; race-day CloudTec; one-piece semi-transparent mesh."
          }
        ]
      }
    },
    {
      "id": "missiongrip",
      "name": "Missiongrip™",
      "nameKo": "미션그립",
      "category": "outsole",
      "description": "마찰과 접지를 목표로 한 고무 아웃솔 기술입니다. 현재 공식 안내는 산악에서 시작해 체육관 용도로도 확장됐다고 설명합니다.",
      "benefits": [
        "정확 고무 배합·마찰계수는 확인한 원문에 미공개",
        "트레일 전용·Zero-Gravity 필수 조합이라는 일반화 제외",
        "이번 도로화 8종의 미확인 적용은 추가하지 않기"
      ],
      "scienceExplanation": "On 기술 안내는 Missiongrip을 스위스 알프스에서 개발·시험한 특수 고무와 접지 설계로 설명하고 현재는 체육관 용도까지 확장했다고 명시합니다. 따라서 트레일 전용이거나 항상 Zero-Gravity 폼과 조합된다는 기존 표현을 제거했습니다. 확인한 도로화 8종에서 이 명칭의 적용을 확정한 사례가 없어 제품 연결은 비워두었습니다. 이는 미탑재를 증명하는 뜻은 아닙니다. 젖은 바위·진흙 등 어떤 표면에서도 미끄러지지 않는다는 안전 보장은 하지 않습니다.",
      "usedInShoes": [],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사의 정확 모델·세대·버전별 기술명과 확인된 적용 예시. 이름만으로 원료·판 유무·임상 효과·기록·수명을 추정하지 않습니다.",
        "sources": [
          {
            "title": "On 공식 Missiongrip 기술 안내",
            "url": "https://www.on.com/en-us/explore/technology/missiongrip",
            "scope": "특수 고무·마찰을 목표로 한 설계와 산악에서 체육관으로의 용도 확장. 개별 도로 모델 적용은 미확인"
          }
        ]
      }
    }
  ],
  "verification": {
    "checkedAt": "2026-11-10",
    "scope": "2010년 브랜드 기원·취리히 본사 설명과 아래 7개 기술의 한정된 확인 범위. 적용 예시는 정확 세대 원문으로 구분했습니다.",
    "sources": [
      {
        "title": "On 취리히 매장 공식 발표 (2025-09-25)",
        "url": "https://press.on-running.com/on-opens-flagship-store-in-the-heart-of-zurich",
        "scope": "2010년 스위스 알프스 기원과 Zurich West 본사 안내. 매장 일정·현재 판매 정보로 확대하지 않음"
      }
    ]
  }
};
