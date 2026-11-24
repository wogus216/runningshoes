import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-10. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
    id: "salomon-ultra-glide-4",
    slug: "salomon-ultra-glide-4",
    priceCheck: {
      "kind": "official-listing",
      "checkedAt": "2026-11-24",
      "url": "https://salomon.co.kr/products/l49141200",
      "note": "살로몬 남성 L49141200 공식몰 표시가입니다. 별도 정가 표기는 확인되지 않았습니다.",
      "amount": 230000
    },
    brand: "Salomon",
    name: "울트라 글라이드 4",
    imageCaption: "울트라 글라이드 4 사진(L49221300 · Fiery Red / Vanilla Ice / Black)입니다. 공식 상품 사진과 대조했으며 구매할 성별·폭·색상 옵션과 구분하세요.",
    imageSource: {"title":"Salomon 공식 상품 갤러리","url":"https://www.salomon.com.mx/products/ultra-glide-4-hombre-calzado-trail-running"},
    image: "/images/shoes/salomon/ultraglide4/side.webp",
    images: [
      "/images/shoes/salomon/ultraglide4/side.webp",
      "/images/shoes/salomon/ultraglide4/angle.webp",
      "/images/shoes/salomon/ultraglide4/back.webp",
      "/images/shoes/salomon/ultraglide4/top.webp",
      "/images/shoes/salomon/ultraglide4/outsole.webp"
    ],
    category: "트레일",
    description: "optiFOAM(EVA) · relieveSPHERE · quickLACE·contaGRIP 구조의 울트라 글라이드 4. RunRepeat 실험실 검체 295g·38.6/31.1mm. 한국 현재 정가 미확인.",
    oneliner: "optiFOAM(EVA) · relieveSPHERE · quickLACE·contaGRIP · 295g (RunRepeat 실험실 검체)",
    editorComment: "2026-11-12 소재·구조 명칭 추가 대조. 미국 L49141200의 제조사 명칭은 EVA optiFOAM입니다. RR은 같은 모델 리뷰에서 Energy Foam이라고 설명하므로 출처별 명칭을 구분합니다. relieveSPHERE는 제조사가 아웃솔의 물결 형상으로 설명합니다. 2026-11-10 원문 재확인. 한국 남성 L49141200·여성 L49149200·Wide L49216200 캐시는 단일 가격 230,000원을 표시했습니다. 남성/와이드 285g·여성 255g은 기준 사이즈 미공시이며 41/35mm·6mm 공시입니다. Wide 제목과 Standard 사양 행이 상충해 실제 폭 규격은 미확인입니다. 가격의 MSRP 레이블·현재 가격·선택 재고도 미확인이고 재입고 알림창 목록을 재고로 쓰지 않습니다. RR 295g·38.6/31.1mm·7.5mm, DOR 소개 280g(남성 US9)/252g(여성 US7)·41/35mm·6mm와 실제 테스터 남성 US9.5를 구분합니다. 젖은 콘크리트 0.68과 미끄러운 바위 체감은 다른 표면입니다. DOR 러그 4.5mm와 RR 3.9mm, 개인 통기 체감과 BR53·건조47%도 나눕니다. 50~100km 적합 보장·통증 보호·450km 수명을 철회합니다. DOR David(남성 US9.5)는 낮은 볼륨의 밀착 중족과 좀 더 여유 있는 전족, 편한 Quicklace 고정을 적었습니다. 자신의 주행에서 과열은 없고 긴 주행 로커는 좋았으나 가파른 오르막의 뻣뻣한 전족과 미끄러운 바위의 작은 슬립을 느꼈습니다. RR 내부 최광폭 94mm·엄지 71.4mm·높이 28.8mm입니다. Wide 상품 제목을 확인했지만 표준형 검체 치수로 와이드의 실제 너비를 계산하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.",
    tags: [
      "트레일",
      "울트라",
      "맥스쿠션",
      "장거리"
    ],
    specs: {
      "weight": 295,
      "drop": 7.5
    },
    biomechanics: {
      "stackHeight": {
        "heel": 38.6,
        "forefoot": 31.1
      },
      "drop": 7.5,
      "carbonPlate": false,
      "midsoleType": "optiFOAM(EVA) · relieveSPHERE · quickLACE·contaGRIP",
      "plateType": null
    },
    koreanFootFit: {},
    targetUsers: {
      "recommended": [
        "실제 규격에서 Quicklace 압박과 오르막 전환을 확인하려는 러너",
        "Wide 상품의 실제 폭 표기와 발볼을 대조하려는 러너"
      ],
      "notRecommended": [
        "바위나 급경사의 체감을 콘크리트 계수만으로 판단하는 경우",
        "재입고 알림창을 구매 가능 사이즈로 소개한 설명"
      ]
    },
    features: [
      "optiFOAM(EVA) · relieveSPHERE · quickLACE·contaGRIP",
      "295g · 38.6/31.1mm · 드롭 7.5mm (RunRepeat 실험실 검체)",
      "정확 4세대 RR 비교표는 플레이트가 없다고 명시합니다. relieveSPHERE 형상과 높은 사이드월이 임상 보호 효과를 증명하지 않습니다.",
      "RR 내부 최광폭 94mm·엄지 71.4mm·높이 28.8mm입니다. Wide 상품 제목을 확인했지만 표준형 검체 치수로 와이드의 실제 너비를 계산하지 않습니다."
    ],
    priceAnalysis: {
      "priceTier": "premium",
      "alternatives": [
        "hoka-speedgoat-6",
        "adidas-terrex-agravic-speed-ultra"
      ]
    },
    detailedSpecs: {
      "weight": "295g (RunRepeat 실험실 검체). RR 295g·38.6/31.1mm·7.5mm, DOR 소개 280g(남성 US9)/252g(여성 US7)·41/35mm·6mm와 실제 테스터 남성 US9.5를 구분합니다.",
      "stackHeight": "38.6/31.1mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.",
      "drop": "7.5mm (RunRepeat 실험실 검체). RR 295g·38.6/31.1mm·7.5mm, DOR 소개 280g(남성 US9)/252g(여성 US7)·41/35mm·6mm와 실제 테스터 남성 US9.5를 구분합니다.",
      "midsole": "optiFOAM(EVA) · relieveSPHERE · quickLACE·contaGRIP. 주폼 33.1AC, 힐/전족부 SA 122/121·에너지 리턴 47.6/51.6%. 젖은 콘크리트 0.68과 미끄러운 바위 체감은 다른 표면입니다. DOR 러그 4.5mm와 RR 3.9mm, 개인 통기 체감과 BR53·건조47%도 나눕니다. 50~100km 적합 보장·통증 보호·450km 수명을 철회합니다. 미국 L49141200의 제조사 명칭은 EVA optiFOAM입니다. RR은 같은 모델 리뷰에서 Energy Foam이라고 설명하므로 출처별 명칭을 구분합니다. relieveSPHERE는 제조사가 아웃솔의 물결 형상으로 설명합니다.",
      "plate": "정확 4세대 RR 비교표는 플레이트가 없다고 명시합니다. relieveSPHERE 형상과 높은 사이드월이 임상 보호 효과를 증명하지 않습니다.",
      "width": "RR 내부 최광폭 94mm·엄지 부위 71.4mm·높이 28.8mm. RR 내부 최광폭 94mm·엄지 71.4mm·높이 28.8mm입니다. Wide 상품 제목을 확인했지만 표준형 검체 치수로 와이드의 실제 너비를 계산하지 않습니다.",
      "durability": "검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.",
      "price": "2026-11-14 정상 브라우저로 한국 남성 L49141200의 실제 상품 본문 표시 판매가230,000원과 동일 품번 KRW 구조화 가격을 확인했습니다. 선택 상품의 compare_at_price는 null이어서 명시적 정가·최초 출시가는 확정하지 않았습니다. 사이즈별 판매 가능 메타데이터와 실제 결제 재고는 구분합니다. 이전 여성 L49149200·Wide L49216200 캐시도230,000원을 표시했지만 이번에 두 변형을 새로 읽지는 않았습니다. 기존 한국 남성/와이드285g·여성255g(기준 사이즈 미공시)·41/35mm·6mm와 Wide 제목/Standard 행의 차이는 별도 확인 범위입니다."
    },
    reviews: [
      {
        "userType": "원문 기반 에디터 분석",
        "source": "editor",
        "sourceUrl": "https://runrepeat.com/salomon-ultra-glide-4",
        "text": "RR 295g·38.6/31.1mm·7.5mm, DOR 소개 280g(남성 US9)/252g(여성 US7)·41/35mm·6mm와 실제 테스터 남성 US9.5를 구분합니다. 젖은 콘크리트 0.68과 미끄러운 바위 체감은 다른 표면입니다. DOR 러그 4.5mm와 RR 3.9mm, 개인 통기 체감과 BR53·건조47%도 나눕니다. 50~100km 적합 보장·통증 보호·450km 수명을 철회합니다."
      },
      {
        "userType": "외부 착화 의견 요약 · Doctors of Running",
        "source": "editor",
        "sourceUrl": "https://www.doctorsofrunning.com/salomon-ultra-glide-4-review-2026/",
        "text": "DOR David(남성 US9.5)는 낮은 볼륨의 밀착 중족과 좀 더 여유 있는 전족, 편한 Quicklace 고정을 적었습니다. 자신의 주행에서 과열은 없고 긴 주행 로커는 좋았으나 가파른 오르막의 뻣뻣한 전족과 미끄러운 바위의 작은 슬립을 느꼈습니다."
      }
    ],
    similarShoes: [
      "hoka-speedgoat-6",
      "adidas-terrex-agravic-speed-ultra"
    ],
    purchaseLinks: [
      {
        "store": "네이버",
        "url": "https://naver.me/xqb1ojvL",
        "note": "2026-11-13 판매 페이지 확인: 남성 울트라 글라이드4 L49141900 구매대행 상품입니다. 선택 사이즈·최종 가격·현재 재고와 결제 가능 여부는 판매처에서 확인하세요."
      },
      {
        "store": "쿠팡",
        "url": "https://link.coupang.com/a/g5ZdU7nO8q",
        "note": "2026-11-11 판매처의 여성 W·L49149200 상품입니다. 남성 검체의 무게·사이즈와 구분하세요. 최종 옵션·현재 판매 상태·가격은 판매처에서 확인하세요."
      }
    ],
    verification: {
      "checkedAt": "2026-11-14",
      "scope": "11월14일 정확 한국 선택 품번의 공개 판매가·가격 메타데이터를 추가 확인했습니다. 제조사 소재·구조와 실험실·착화 근거는 각 기록의 기존 확인 시점과 조건을 유지하며 제품 전체 인증이 아닙니다.",
      "sources": [
        {
          "label": "한국 공식 L49141200 · 2026-11-14 본문 추가 확인",
          "url": "https://salomon.co.kr/products/l49141200",
          "note": "2026-11-14 정상 브라우저로 한국 남성 L49141200의 실제 상품 본문 표시 판매가230,000원과 동일 품번 KRW 구조화 가격을 확인했습니다. 선택 상품의 compare_at_price는 null이어서 명시적 정가·최초 출시가는 확정하지 않았습니다. 사이즈별 판매 가능 메타데이터와 실제 결제 재고는 구분합니다. 이전 여성 L49149200·Wide L49216200 캐시도230,000원을 표시했지만 이번에 두 변형을 새로 읽지는 않았습니다. 기존 한국 남성/와이드285g·여성255g(기준 사이즈 미공시)·41/35mm·6mm와 Wide 제목/Standard 행의 차이는 별도 확인 범위입니다."
        },
        {
          "label": "한국 공식 L49149200",
          "url": "https://salomon.co.kr/products/l49149200",
          "note": "캐시 2 weeks ago; 단일 표시 가격은 명시적 MSRP 확인과 다름. 현재 선택 재고·가격 미확인."
        },
        {
          "label": "한국 공식 L49216200",
          "url": "https://salomon.co.kr/products/l49216200",
          "note": "캐시 yesterday; 단일 표시 가격은 명시적 MSRP 확인과 다름. 현재 선택 재고·가격 미확인."
        },
        {
          "label": "RunRepeat 동세대 실험실 원문",
          "url": "https://runrepeat.com/salomon-ultra-glide-4",
          "note": "공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 295g·38.6/31.1mm·7.5mm. 젖은 콘크리트 0.68과 미끄러운 바위 체감은 다른 표면입니다. DOR 러그 4.5mm와 RR 3.9mm, 개인 통기 체감과 BR53·건조47%도 나눕니다. 50~100km 적합 보장·통증 보호·450km 수명을 철회합니다."
        },
        {
          "label": "Doctors of Running 동세대 원문",
          "url": "https://www.doctorsofrunning.com/salomon-ultra-glide-4-review-2026/",
          "note": "RR 295g·38.6/31.1mm·7.5mm, DOR 소개 280g(남성 US9)/252g(여성 US7)·41/35mm·6mm와 실제 테스터 남성 US9.5를 구분합니다."
        },
        {
          "label": "RunRepeat 측정법",
          "url": "https://runrepeat.com/testing-methodology",
          "note": "AC·HA·HC, SA·에너지 리턴, BR·구방식1~5와 내부/외부 폭을 구분합니다. 일반 정책은 개별 라벨 확인과 다릅니다."
        },
        {
          "label": "제조사 정확 제품 소재 안내 · 2026-11-12",
          "url": "https://www.salomon.com/en-us/product/ultra-glide-4-li8842/L49141200?sizeId=L49141200027",
          "note": "미국 L49141200의 제조사 명칭은 EVA optiFOAM입니다. RR은 같은 모델 리뷰에서 Energy Foam이라고 설명하므로 출처별 명칭을 구분합니다. relieveSPHERE는 제조사가 아웃솔의 물결 형상으로 설명합니다."
        }
      ],
      "limitations": [
        "모델별 임상 예방·치료 등급, 공통 최적 페이스·주행 수명·km당 비용은 미확인으로 제거했습니다.",
        "에디터 평점·1~10점·발볼 및 계절 분류·구매 링크는 모든 항목을 새로 검증한 수치나 임상 효과가 아닙니다.",
        "판매 조건은 확인한 상품·시점에 한정합니다. 미확인을 미출시·단종·전국 재고 없음으로 해석하지 않습니다.",
        "11월14일 가격 추가 확인은 위 선택 품번에 한정합니다. 다른 성별·폭·색상, 기존 랩 검체·사진 전체와 실제 결제 재고를 새로 검증한 것은 아닙니다."
      ]
    },
  };
