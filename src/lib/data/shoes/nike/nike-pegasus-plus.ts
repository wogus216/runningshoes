import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
    id: "nike-pegasus-plus",
    slug: "nike-pegasus-plus",
    brand: "Nike",
    name: "페가수스 플러스",
    image: "/images/shoes/nike/pegasus-plus/side.webp",
    images: [
      "/images/shoes/nike/pegasus-plus/side.webp",
      "/images/shoes/nike/pegasus-plus/outsole.webp",
      "/images/shoes/nike/pegasus-plus/top.webp",
      "/images/shoes/nike/pegasus-plus/pair.webp"
    ],
    category: "데일리",
    description: "초대 전장 ZoomX · Flyknit · Air·플레이트 없음 구조의 페가수스 플러스. RunRepeat 실험실 검체 244g·33/23.6mm. 한국 현재 정가 미확인.",
    oneliner: "초대 전장 ZoomX · Flyknit · Air·플레이트 없음 · 244g (RunRepeat 실험실 검체)",
    editorComment: "2026-11-09 원문 재확인. 한국 공식 남성 FQ7262-702 원문지난주캐시에 정가 219,000원·할인 153,300원이 표시됐지만 현재실시간가격·선택사이즈·재고는 미확인입니다. 한국 초대여성현재 상품·와이드 SKU 도 미확인입니다. 다른 Plus2검색결과로 채우지 않습니다. 한국 공시 245g(280mm)·10mm,DOR 소개 238g(남성 US9)·207g(여성 US8),34/24mm·10mm,RR244g·33/23.6mm·9.4mm 는 다른 조건입니다. RR 무게일반정책의 US9및드문 US8/8.5환산예외와 실제라벨미확인도 구분합니다. 33.9AC 와힐/전족리턴 64.4/70.8%,개인의부드러움체감은다른지표입니다. 젖은콘크리트계수 0.42와 Matt의젖은트랙슬립은다른노면조건입니다. 구방식비틀림 3/5·통기 3/5를 Nm·BR로변환하지않습니다.500km수명·템포 4:30~5:30전용·30km쿠션부족보장·무릎보호 등급은철회합니다. DOR Matt(남성 US10)은 초기낮은 볼륨·앞코테이퍼가 Flyknit사용후완화됐지만 중족이느슨해끈을조여야했다고적었습니다. Andrea(여성 US9.5)는길이는맞아도과도한중족볼륨때문에슬립·열감·쓸림이남았다고적었습니다. Matt의이지·제한적빠른주행활용과 Andrea의거친힐·단단한앞발·핏불편은 개인차로 남깁니다. RR 내부 최광폭 93.9mm·엄지 71.6mm·높이 29.3mm 와 중족 어퍼의 느슨함은 다른 위치의 정보입니다. 글로벌여성와이드메타를 한국 판매 증거로 쓰지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.",
    tags: [
      "데일리",
      "템포",
      "경량"
    ],
    specs: {
      "weight": 244,
      "drop": 9.4
    },
    biomechanics: {
      "stackHeight": {
        "heel": 33,
        "forefoot": 23.6
      },
      "drop": 9.4,
      "carbonPlate": false,
      "plateType": null,
      "midsoleType": "초대 전장 ZoomX · Flyknit · Air·플레이트 없음"
    },
    koreanFootFit: {},
    targetUsers: {
      "recommended": [
        "플레이트없는 ZoomX·Flyknit전환을 시착 비교하려는 러너",
        "앞코테이퍼와중족슬립을함께확인하려는러너"
      ],
      "notRecommended": [
        "끈조절후에도중족슬립·압박이해결되지 않는 경우",
        "초대와 Plus2의판매정보가혼용된매물"
      ]
    },
    features: [
      "초대 전장 ZoomX · Flyknit · Air·플레이트 없음",
      "244g · 33/23.6mm · 드롭 9.4mm (RunRepeat 실험실 검체)",
      "Air Zoom·플레이트 없음. 2024초대 Plus와 Plus2·Premium을 구분합니다.",
      "RR 내부 최광폭 93.9mm·엄지 71.6mm·높이 29.3mm 와 중족 어퍼의 느슨함은 다른 위치의 정보입니다. 글로벌여성와이드메타를 한국 판매 증거로 쓰지 않습니다."
    ],
    priceAnalysis: {
      "priceTier": "mid",
      "alternatives": [
        "hoka-clifton-10",
        "asics-gel-nimbus-28"
      ]
    },
    detailedSpecs: {
      "weight": "244g (RunRepeat 실험실 검체). 한국 공시 245g(280mm)·10mm,DOR 소개 238g(남성 US9)·207g(여성 US8),34/24mm·10mm,RR244g·33/23.6mm·9.4mm 는 다른 조건입니다. RR 무게일반정책의 US9및드문 US8/8.5환산예외와 실제라벨미확인도 구분합니다.",
      "stackHeight": "33/23.6mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.",
      "drop": "9.4mm (RunRepeat 실험실 검체). 한국 공시 245g(280mm)·10mm,DOR 소개 238g(남성 US9)·207g(여성 US8),34/24mm·10mm,RR244g·33/23.6mm·9.4mm 는 다른 조건입니다. RR 무게일반정책의 US9및드문 US8/8.5환산예외와 실제라벨미확인도 구분합니다.",
      "midsole": "초대 전장 ZoomX · Flyknit · Air·플레이트 없음. 주폼 33.9AC, 힐/전족부 SA 125/79·에너지 리턴 64.4/70.8%. 33.9AC 와힐/전족리턴 64.4/70.8%,개인의부드러움체감은다른지표입니다. 젖은콘크리트계수 0.42와 Matt의젖은트랙슬립은다른노면조건입니다. 구방식비틀림 3/5·통기 3/5를 Nm·BR로변환하지않습니다.500km수명·템포 4:30~5:30전용·30km쿠션부족보장·무릎보호 등급은철회합니다.",
      "plate": "Air Zoom·플레이트 없음. 2024초대 Plus와 Plus2·Premium을 구분합니다.",
      "width": "RR 내부 최광폭 93.9mm·엄지 부위 71.6mm·높이 29.3mm. RR 내부 최광폭 93.9mm·엄지 71.6mm·높이 29.3mm 와 중족 어퍼의 느슨함은 다른 위치의 정보입니다. 글로벌여성와이드메타를 한국 판매 증거로 쓰지 않습니다.",
      "durability": "검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.",
      "price": "한국 공식 남성 FQ7262-702 원문지난주캐시에 정가 219,000원·할인 153,300원이 표시됐지만 현재실시간가격·선택사이즈·재고는 미확인입니다. 한국 초대여성현재 상품·와이드 SKU 도 미확인입니다. 다른 Plus2검색결과로 채우지 않습니다."
    },
    reviews: [
      {
        "userType": "원문 기반 에디터 분석",
        "source": "editor",
        "sourceUrl": "https://runrepeat.com/nike-pegasus-plus",
        "text": "한국 공시 245g(280mm)·10mm,DOR 소개 238g(남성 US9)·207g(여성 US8),34/24mm·10mm,RR244g·33/23.6mm·9.4mm 는 다른 조건입니다. RR 무게일반정책의 US9및드문 US8/8.5환산예외와 실제라벨미확인도 구분합니다. 33.9AC 와힐/전족리턴 64.4/70.8%,개인의부드러움체감은다른지표입니다. 젖은콘크리트계수 0.42와 Matt의젖은트랙슬립은다른노면조건입니다. 구방식비틀림 3/5·통기 3/5를 Nm·BR로변환하지않습니다.500km수명·템포 4:30~5:30전용·30km쿠션부족보장·무릎보호 등급은철회합니다."
      },
      {
        "userType": "외부 착화 의견 요약 · Doctors of Running",
        "source": "editor",
        "sourceUrl": "https://www.doctorsofrunning.com/nike-pegasus-plus-review-2024/",
        "text": "DOR Matt(남성 US10)은 초기낮은 볼륨·앞코테이퍼가 Flyknit사용후완화됐지만 중족이느슨해끈을조여야했다고적었습니다. Andrea(여성 US9.5)는길이는맞아도과도한중족볼륨때문에슬립·열감·쓸림이남았다고적었습니다. Matt의이지·제한적빠른주행활용과 Andrea의거친힐·단단한앞발·핏불편은 개인차로 남깁니다."
      }
    ],
    similarShoes: [
      "nike-pegasus-41",
      "nike-pegasus-premium"
    ],
    purchaseLinks: [
      {
        "store": "네이버",
        "url": "https://naver.me/5jXKodXH"
      },
      {
        "store": "쿠팡",
        "url": "https://link.coupang.com/a/g5YV6p8ZBA",
        "note": "2026-11-11 판매처의 남성 FQ7262-702 상품입니다. 최종 옵션·현재 판매 상태·가격은 판매처에서 확인하세요."
      }
    ],
    verification: {
      "checkedAt": "2026-11-09",
      "scope": "한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.",
      "sources": [
        {
          "label": "한국 공식 남성 FQ7262-702 캐시",
          "url": "https://www.nike.com/kr/t/%ED%8E%98%EA%B0%80%EC%88%98%EC%8A%A4-%ED%94%8C%EB%9F%AC%EC%8A%A4-%EB%82%A8%EC%84%B1-%EB%A1%9C%EB%93%9C-%EB%9F%AC%EB%8B%9D%ED%99%94-R2UnfgKC/FQ7262-702",
          "note": "219,000/153,300원은 과거원문표시. 현재 가격·재고미확인."
        },
        {
          "label": "RunRepeat 동세대 실험실 원문",
          "url": "https://runrepeat.com/nike-pegasus-plus",
          "note": "공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 244g·33/23.6mm·9.4mm. 33.9AC 와힐/전족리턴 64.4/70.8%,개인의부드러움체감은다른지표입니다. 젖은콘크리트계수 0.42와 Matt의젖은트랙슬립은다른노면조건입니다. 구방식비틀림 3/5·통기 3/5를 Nm·BR로변환하지않습니다.500km수명·템포 4:30~5:30전용·30km쿠션부족보장·무릎보호 등급은철회합니다."
        },
        {
          "label": "Doctors of Running 동세대 원문",
          "url": "https://www.doctorsofrunning.com/nike-pegasus-plus-review-2024/",
          "note": "한국 공시 245g(280mm)·10mm,DOR 소개 238g(남성 US9)·207g(여성 US8),34/24mm·10mm,RR244g·33/23.6mm·9.4mm 는 다른 조건입니다. RR 무게일반정책의 US9및드문 US8/8.5환산예외와 실제라벨미확인도 구분합니다."
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
        "2026-11-11 쿠팡 연결 점검: 모델명·선택 정보를 대조했습니다. 일부 다른 옵션의 표시로 현재 선택의 품절을 판정하지 않습니다. 모델 전체의 단종·전국 재고 상태를 뜻하지 않습니다."
      ]
    },
  };
