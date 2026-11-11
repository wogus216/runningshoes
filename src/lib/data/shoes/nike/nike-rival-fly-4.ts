import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
    id: "nike-rival-fly-4",
    slug: "nike-rival-fly-4",
    brand: "Nike",
    name: "라이벌 플라이 4",
  imageCaption: "rival fly 4 사진(FV6040-401 · Obsidian/Persian Violet/Green Abyss/White)은 Nike 공개 상품 데이터와 모델·색상·구도를 대조했습니다. 사진 품번을 한국 판매 규격·가격으로 읽지 마세요.",
  imageSource: {"title":"Nike 공식 공개 상품 데이터","url":"https://api.nike.com/product_feed/threads/v3/?filter=marketplace%28US%29&filter=language%28en%29&filter=channelId%28d9a5bc42-4b9c-4976-858a-f159cf99c647%29&filter=productInfo.merchProduct.styleCode%28FV6040%29&count=100"},
    image: "/images/shoes/nike/rivalfly4/side.webp",
    images: [
      "/images/shoes/nike/rivalfly4/side.webp",
      "/images/shoes/nike/rivalfly4/outsole.webp",
      "/images/shoes/nike/rivalfly4/top.webp",
      "/images/shoes/nike/rivalfly4/pair.webp"
    ],
    category: "데일리",
    description: "Cushlon3.0 · 전족 Air Zoom · 나일론중족섕크 구조. 공시 258g(280mm)·드롭 8mm 이며 독립 랩·스택·한국 현재 가격은 미확인입니다.",
    oneliner: "Cushlon3.0 · 전족 Air Zoom · 나일론 중족 섕크 · Nike 한국 공시 258g(280mm), 독립 랩 미확인",
    editorComment: "2026-11-11 공개 원문 대조. 2026-11-09 조회 당시 2주 전으로 표시된 한국 공식 캐시에서 FV6040-402정가 129,000원·판매 116,100원,IO8267-100정가 139,000원·판매 118,100원을확인했습니다. 현재 가격·선택사이즈·재고·성별·문자폭과와이드 SKU 는미확인입니다. 사이즈목록으로남녀공용·판매가능을단정하지 않습니다. 한국 공시 258g(280mm)·8mm,DOR 소개 258g(남성 US10)·8mm 입니다. 실제 DOR 리뷰어는 US9.5를신었으며숫자가같아도같은 검체라고보지않습니다. 검증된스택·RR 독립 랩은미확인입니다. 정확한 동세대 독립 랩의 SA·에너지 리턴·경도·스택 자료는 확인하지 못했습니다. DOR 의 EVA같은느낌은화학분석이아니며공식명칭은 Cushlon3.0입니다. 확인한 자료로 공통 주행 수명·거리 상한·적정 페이스·질환별 보호 등급을 제시할 수 없습니다. DOR David(남성 US9.5)는길이는 맞고밀착되는퍼포먼스핏,부위별폭은보통이며볼륨은괜찮고끈·코너 고정이좋았다고 적었습니다. 앞발폭은더원했습니다. 단단하고지면감각이있는전환으로본인의트랙인터벌·짧은도로훈련을선호했지만이를모든 러너의 10km상한·입문자금지로확대하지않습니다. 동세대내부 최광폭·엄지너비·높이·한국 현재 와이드 SKU 는미확인입니다. 좁은발만가능·넓은발일괄 금지·반업필수라는조건을만들지않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.",
    tags: [
      "데일리",
      "템포런",
      "경량"
    ],
    specs: {
      "weight": 258,
      "drop": 8
    },
    koreanFootFit: {},
    targetUsers: {
      "recommended": [
        "나일론섕크·전족 Air의전환을 시착 비교하려는 러너",
        "실제규격의앞볼·힐 고정과상품코드를 확인하려는 러너"
      ],
      "notRecommended": [
        "직접 착화에서앞코압박·전환불편이생기는경우"
      ]
    },
    features: [
      "Cushlon3.0 · 전족 Air Zoom · 나일론중족섕크",
      "Nike공시 258g(280mm)·8mm. 독립 랩·스택미확인.",
      "한국 공식은 나일론 중족 섕크·단단한 플라스틱 부품으로 설명합니다. 카본·전장 레이싱플레이트와 구분합니다.",
      "동세대내부 최광폭·엄지너비·높이·한국 현재 와이드 SKU 는미확인입니다. 좁은발만가능·넓은발일괄 금지·반업필수라는조건을만들지않습니다."
    ],
    priceAnalysis: {
      "priceTier": "budget",
      "alternatives": [
        "asics-magic-speed-4",
        "new-balance-rebel-v5",
        "saucony-kinvara-16"
      ]
    },
    detailedSpecs: {
      "weight": "258g (Nike 한국 공시 280mm, 독립 랩 미확인). 한국 공시 258g(280mm)·8mm,DOR 소개 258g(남성 US10)·8mm 입니다. 실제 DOR 리뷰어는 US9.5를신었으며숫자가같아도같은 검체라고보지않습니다. 검증된스택·RR 독립 랩은미확인입니다.",
      "stackHeight": "검토한 한국 제조사 상품과 독립 시험 자료에서 스택 높이 공시를 확인하지 못했습니다.",
      "drop": "8mm (Nike 한국 공시, 독립 랩 미확인). 한국 공시 258g(280mm)·8mm,DOR 소개 258g(남성 US10)·8mm 입니다. 실제 DOR 리뷰어는 US9.5를신었으며숫자가같아도같은 검체라고보지않습니다. 검증된스택·RR 독립 랩은미확인입니다.",
      "midsole": "Cushlon3.0 · 전족 Air Zoom · 나일론중족섕크. 독립 랩 SA·에너지 리턴·AC/HA 미확인. 정확한 동세대 독립 랩의 SA·에너지 리턴·경도·스택 자료는 확인하지 못했습니다. DOR 의 EVA같은느낌은화학분석이아니며공식명칭은 Cushlon3.0입니다. 확인한 자료로 공통 주행 수명·거리 상한·적정 페이스·질환별 보호 등급을 제시할 수 없습니다.",
      "plate": "한국 공식은 나일론 중족 섕크·단단한 플라스틱 부품으로 설명합니다. 카본·전장 레이싱플레이트와 구분합니다.",
      "width": "동세대 독립 랩 내부 치수 미확인. 동세대내부 최광폭·엄지너비·높이·한국 현재 와이드 SKU 는미확인입니다. 좁은발만가능·넓은발일괄 금지·반업필수라는조건을만들지않습니다.",
      "durability": "검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.",
      "price": "2026-11-09 조회 당시 2주 전으로 표시된 한국 공식 캐시에서 FV6040-402정가 129,000원·판매 116,100원,IO8267-100정가 139,000원·판매 118,100원을확인했습니다. 현재 가격·선택사이즈·재고·성별·문자폭과와이드 SKU 는미확인입니다. 사이즈목록으로남녀공용·판매가능을단정하지 않습니다."
    },
    reviews: [
      {
        "userType": "원문 기반 에디터 분석",
        "source": "editor",
        "sourceUrl": "https://www.doctorsofrunning.com/nike-rival-fly-4-review-2024-100-racing/",
        "text": "한국 공시 258g(280mm)·8mm,DOR 소개 258g(남성 US10)·8mm 입니다. 실제 DOR 리뷰어는 US9.5를신었으며숫자가같아도같은 검체라고보지않습니다. 검증된스택·RR 독립 랩은미확인입니다. 정확한 동세대 독립 랩의 SA·에너지 리턴·경도·스택 자료는 확인하지 못했습니다. DOR 의 EVA같은느낌은화학분석이아니며공식명칭은 Cushlon3.0입니다. 확인한 자료로 공통 주행 수명·거리 상한·적정 페이스·질환별 보호 등급을 제시할 수 없습니다."
      },
      {
        "userType": "외부 착화 의견 요약 · Doctors of Running",
        "source": "editor",
        "sourceUrl": "https://www.doctorsofrunning.com/nike-rival-fly-4-review-2024-100-racing/",
        "text": "DOR David(남성 US9.5)는길이는 맞고밀착되는퍼포먼스핏,부위별폭은보통이며볼륨은괜찮고끈·코너 고정이좋았다고 적었습니다. 앞발폭은더원했습니다. 단단하고지면감각이있는전환으로본인의트랙인터벌·짧은도로훈련을선호했지만이를모든 러너의 10km상한·입문자금지로확대하지않습니다."
      }
    ],
    similarShoes: [
      "asics-magic-speed-4",
      "new-balance-rebel-v5",
      "saucony-kinvara-16"
    ],
    purchaseLinks: [],
    verification: {
      "checkedAt": "2026-11-11",
      "scope": "한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.",
      "sources": [
        {
          "label": "한국 공식 FV6040-402 캐시",
          "url": "https://www.nike.com/kr/t/%EB%82%98%EC%9D%B4%ED%82%A4-%EC%A4%8C-%EB%9D%BC%EC%9D%B4%EB%B2%8C-%ED%94%8C%EB%9D%BC%EC%9D%B4-4-%EB%A1%9C%EB%93%9C-%EB%A0%88%EC%9D%B4%EC%8B%B1%ED%99%94-oJcB2qbg/FV6040-402",
          "note": "상품별과거정가 129,000/139,000원. 현재 가격·재고미확인."
        },
        {
          "label": "한국 공식 IO8267-100 캐시",
          "url": "https://www.nike.com/kr/t/%EB%82%98%EC%9D%B4%ED%82%A4-%EC%A4%8C-%EB%9D%BC%EC%9D%B4%EB%B2%8C-%ED%94%8C%EB%9D%BC%EC%9D%B4-4-%EB%A1%9C%EB%93%9C-%EB%A0%88%EC%9D%B4%EC%8B%B1%ED%99%94-4fWcTnmD",
          "note": "상품별과거정가 129,000/139,000원. 현재 가격·재고미확인."
        },
        {
          "label": "Doctors of Running 동세대 원문",
          "url": "https://www.doctorsofrunning.com/nike-rival-fly-4-review-2024-100-racing/",
          "note": "한국 공시 258g(280mm)·8mm,DOR 소개 258g(남성 US10)·8mm 입니다. 실제 DOR 리뷰어는 US9.5를신었으며숫자가같아도같은 검체라고보지않습니다. 검증된스택·RR 독립 랩은미확인입니다."
        },
        {
          "label": "RunRepeat 측정법",
          "url": "https://runrepeat.com/testing-methodology",
          "note": "AC·HA·HC, SA·에너지 리턴, BR·구방식 1~5와 내부/외부 폭을 구분합니다. 일반 정책은 개별 라벨 확인과 다릅니다."
        }
      ],
      "limitations": [
        "모델별 임상 예방·치료 등급, 공통 최적 페이스·주행 수명·km당 비용은 미확인으로 제거했습니다.",
        "에디터 평점·1~10점·발볼 및 계절 분류·구매 링크는 모든 항목을 새로 검증한 수치나 임상 효과가 아닙니다.",
        "판매 조건은 확인한 상품·시점에 한정합니다. 미확인을 미출시·단종·전국 재고 없음으로 해석하지 않습니다.",
        "동세대 독립 랩 미확인. 다른 모델 수치를 전용하지 않음.",
        "2026-11-10 구매 연결 점검: 네이버 발급 내역에서 해당 등록상품의 품절·판매중지를 확인해 연결을 제외했습니다. 모델 전체의 단종·전국 품절을 뜻하지 않습니다.",
        "2026-11-11 쿠팡 연결 점검: 판매처의 실제 상품 없음 안내를 확인해 해당 연결을 제외했습니다. 모델 전체의 단종·전국 재고 상태를 뜻하지 않습니다."
      ]
    },
  };
