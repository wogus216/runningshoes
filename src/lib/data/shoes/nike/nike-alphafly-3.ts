import type { Shoe } from '@/types/shoe';

// 원문 추가 대조:2026-11-11. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
    id: "nike-alphafly-3",
    slug: "nike-alphafly-3",
    brand: "Nike",
    name: "알파플라이 3",
  imageCaption: "alphafly 3 사진(FD8311-101 · White/Pure Platinum/Obsidian Mist/Gridiron)은 Nike 공개 상품 데이터와 모델·색상·구도를 대조했습니다. 사진 품번을 한국 판매 규격·가격으로 읽지 마세요.",
  imageSource: {"title":"Nike 공식 공개 상품 데이터","url":"https://api.nike.com/product_feed/threads/v3/?filter=marketplace%28US%29&filter=language%28en%29&filter=channelId%28d9a5bc42-4b9c-4976-858a-f159cf99c647%29&filter=productInfo.merchProduct.styleColor%28FD8311-101%29&count=100"},
    image: "/images/shoes/nike/alphafly3/side.webp",
    images: [
      "/images/shoes/nike/alphafly3/side.webp",
      "/images/shoes/nike/alphafly3/outsole.webp",
      "/images/shoes/nike/alphafly3/top.webp",
      "/images/shoes/nike/alphafly3/pair.webp"
    ],
    category: "레이싱",
    description: "연속 ZoomX · 전장 카본 Flyplate · 전족 Air Zoom pods 구조의 알파플라이 3. 실험실 201g·힐/전족부 38.1/29.6mm. 한국 현재 정가 미확인.",
    oneliner: "201g 실험실 무게 · 연속 ZoomX · 전장 카본 Flyplate · 전족 Air Zoom pods",
    editorComment: "2026-11-11 원문 추가 대조. 한국 상품 URL·옵션 관찰은 아래 명시한 날짜 기준입니다. 2026-11-09 한국 남성 FD8311-003·여성 FD8315-105 후보 URL 확인 당시 페이지를 열 수 없거나 구매 불가 안내가 표시됐습니다. 한국 현재 정가·판매 SKU·폭·재고는 미확인입니다. 이 두 URL의 접근 결과로 모델 전체의 단종·미출시를 판단할 수 없습니다. RR Proto검체 실측 201g·38.1/29.6mm·드롭 8.5mm. DOR 소개 198g(남성 US9)·174g(여성 US8),40/32mm·8mm 는 한국현재공시로 대입하지 않습니다. 일반 US9정책과 실제검체 SKU·폭 확인은 다릅니다. RunRepeat 하부 ZoomX 34.5AC·상부 47.2AC는 서로 다른 층의 측정값입니다. 상부 값은 2026-11-09 원문 탭 관찰 기록이며 이번 정적 추출에서 재확인하지 못했습니다. 실험실 수치로 개인의 기록 향상·부상 예방·주행 수명을 보장할 수 없습니다. DOR Matt(남성 US10)은 약간 짧음과 초기 토가드 쓸림·끈 압박, Andrea(여성 US9.5)는 짧은 길이·발톱 멍과 아치 측벽을 느꼈습니다. David(남성 US9.5)는 약간 길게 느껴 사이징 의견이 갈렸습니다. Andrea는 젖은 길 접지가 문제없었지만 David는 고무 없는 중족부에서 미끄러짐을 보고했습니다. 개인 경험을 공통 반 사이즈 업·Sub3전용·느린페이스 역효과로 합치지 않습니다. 한국 와이드 현재 SKU 는 미확인입니다. RR 내부 최광폭 93.3mm·엄지 75.3mm·높이 33.7mm 와 리뷰어가 느낀 낮은 볼륨은 다른 검체·측정·개인 조건입니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.",
    tags: [
      "레이싱",
      "마라톤",
      "카본플레이트",
      "프리미엄"
    ],
    specs: {
      "weight": 201,
      "drop": 8.5
    },
    biomechanics: {
      "stackHeight": {
        "heel": 38.1,
        "forefoot": 29.6
      },
      "drop": 8.5,
      "carbonPlate": true,
      "plateType": "full-length carbon Flyplate",
      "midsoleType": "연속 ZoomX · 전장 카본 Flyplate · 전족 Air Zoom pods"
    },
    koreanFootFit: {},
    targetUsers: {
      "recommended": [
        "ZoomX·Air pods·카본 조합의 전환을 시착 비교하려는 러너",
        "아치 측벽·토가드·힐 고정을 직접 확인하려는 러너"
      ],
      "notRecommended": [
        "실제 착화에서 아치 압박·앞코 쓸림이 생기는 경우",
        "확인한 SKU·판매 조건·반품규정이 불명확한 매물"
      ]
    },
    features: [
      "연속 ZoomX · 전장 카본 Flyplate · 전족 Air Zoom pods",
      "201g · 힐/전족부 38.1/29.6mm (RunRepeat)",
      "힐/전족부 SA 144/113 · 에너지 리턴 74.9/73.9% (RunRepeat). RunRepeat 하부 ZoomX 34.5AC·상부 47.2AC는 서로 다른 층의 측정값입니다. 상부 값은 2026-11-09 원문 탭 관찰 기록이며 이번 정적 추출에서 재확인하지 못했습니다. 실험실 수치로 개인의 기록 향상·부상 예방·주행 수명을 보장할 수 없습니다.",
      "한국 와이드 현재 SKU 는 미확인입니다. RR 내부 최광폭 93.3mm·엄지 75.3mm·높이 33.7mm 와 리뷰어가 느낀 낮은 볼륨은 다른 검체·측정·개인 조건입니다."
    ],
    priceAnalysis: {
      "priceTier": "super-premium",
      "alternatives": [
        "adidas-adios-pro-4",
        "asics-metaspeed-sky-plus",
        "saucony-endorphin-elite-2"
      ]
    },
    detailedSpecs: {
      "weight": "201g (RunRepeat 공시 검체 정책:남성 US9). RR Proto검체 실측 201g·38.1/29.6mm·드롭 8.5mm. DOR 소개 198g(남성 US9)·174g(여성 US8),40/32mm·8mm 는 한국현재공시로 대입하지 않습니다. 일반 US9정책과 실제검체 SKU·폭 확인은 다릅니다.",
      "stackHeight": "38.1/29.6mm (RunRepeat 힐/전족부 실측)",
      "drop": "8.5mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.",
      "midsole": "연속 ZoomX · 전장 카본 Flyplate · 전족 Air Zoom pods · 34.5 AC(Asker C) · 힐/전족부 SA 144/113 · 에너지 리턴 74.9/73.9%. RunRepeat 하부 ZoomX 34.5AC·상부 47.2AC는 서로 다른 층의 측정값입니다. 상부 값은 2026-11-09 원문 탭 관찰 기록이며 이번 정적 추출에서 재확인하지 못했습니다. 실험실 수치로 개인의 기록 향상·부상 예방·주행 수명을 보장할 수 없습니다.",
      "plate": "전장 카본 Flyplate와 전족부 Air Zoom 유닛 2개(Nike 공식 출시 발표).",
      "width": "RunRepeat 내부 최광폭 93.3mm / 엄지 부위 75.3mm / 엄지 높이 33.7mm. 한국 와이드 현재 SKU 는 미확인입니다. RR 내부 최광폭 93.3mm·엄지 75.3mm·높이 33.7mm 와 리뷰어가 느낀 낮은 볼륨은 다른 검체·측정·개인 조건입니다.",
      "durability": "검증된 공통 수명 km 미확인. 짧은 착화·마모 깊이를 수명 km로 환산하지 않습니다.",
      "price": "2026-11-09 한국 남성 FD8311-003·여성 FD8315-105 후보 URL 확인 당시 페이지를 열 수 없거나 구매 불가 안내가 표시됐습니다. 한국 현재 정가·판매 SKU·폭·재고는 미확인입니다. 이 두 URL의 접근 결과로 모델 전체의 단종·미출시를 판단할 수 없습니다."
    },
    reviews: [
      {
        "userType": "원문 기반 에디터 분석",
        "source": "editor",
        "sourceUrl": "https://runrepeat.com/nike-alphafly-3",
        "text": "201g 과 SA 144/113·에너지 리턴 74.9/73.9% 는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. RunRepeat 하부 ZoomX 34.5AC·상부 47.2AC는 서로 다른 층의 측정값입니다. 상부 값은 2026-11-09 원문 탭 관찰 기록이며 이번 정적 추출에서 재확인하지 못했습니다. 실험실 수치로 개인의 기록 향상·부상 예방·주행 수명을 보장할 수 없습니다. 한국 와이드 현재 SKU 는 미확인입니다. RR 내부 최광폭 93.3mm·엄지 75.3mm·높이 33.7mm 와 리뷰어가 느낀 낮은 볼륨은 다른 검체·측정·개인 조건입니다."
      },
      {
        "userType": "외부 착화 의견 요약 · Doctors of Running",
        "source": "editor",
        "sourceUrl": "https://www.doctorsofrunning.com/nike-alphafly-3-review-2024/",
        "text": "DOR Matt(남성 US10)은 약간 짧음과 초기 토가드 쓸림·끈 압박, Andrea(여성 US9.5)는 짧은 길이·발톱 멍과 아치 측벽을 느꼈습니다. David(남성 US9.5)는 약간 길게 느껴 사이징 의견이 갈렸습니다. Andrea는 젖은 길 접지가 문제없었지만 David는 고무 없는 중족부에서 미끄러짐을 보고했습니다. 개인 경험을 공통 반 사이즈 업·Sub3전용·느린페이스 역효과로 합치지 않습니다."
      }
    ],
    similarShoes: [
      "adidas-adios-pro-4",
      "asics-metaspeed-sky-plus",
      "saucony-endorphin-elite-2",
      "puma-fast-r-nitro-elite-3"
    ],
    relatedPosts: [
      {
        "slug": "nike-alphafly-3-vs-asics-metaspeed-sky-vs-nb-sc-elite-v5-carbon-racer-2026",
        "title": "카본 3파전 — 알파플라이 3 vs 메타스카이+ vs SC 엘리트 v5"
      },
      {
        "slug": "running-shoe-plate-guide-2026",
        "title": "플레이트 완전 해설 — 카본·유리섬유·나일론"
      }
    ],
    purchaseLinks: [],
    verification: {
      "checkedAt": "2026-11-11",
      "scope": "한국 후보 상품 URL의 접근 상태와 해외 실험실 수치·구조·외부 착화 의견을 대조했습니다. 한국 현재 정가·폭·재고는 확인하지 못했습니다. 한국 URL·상부 폼 경도는 2026-11-09 관찰 범위이며 제품 전체 검증 완료 표지가 아닙니다.",
      "sources": [
        {
          "label": "Nike 공식 알파플라이 3 출시 발표",
          "url": "https://about.nike.com/en/newsroom/releases/nike-alphafly-3-official-images-release-date",
          "note": "전족부 Air Zoom 유닛 2개, 전장 카본 Flyplate, 연속된 하부 구조와 Atomknit 3.0을 설명합니다. 한국 현재 판매 가격·옵션의 근거는 아닙니다."
        },
        {
          "label": "한국 공식 men · 폭미확인 · FD8311-003",
          "url": "https://www.nike.com/kr/t/알파플라이-3-남성-로드-레이싱화-8VsWjMgt/FD8311-003",
          "note": "2026-11-09 한국 남성 FD8311-003·여성 FD8315-105 후보 URL 확인 당시 페이지를 열 수 없거나 구매 불가 안내가 표시됐습니다. 한국 현재 정가·판매 SKU·폭·재고는 미확인입니다. 이 두 URL의 접근 결과로 모델 전체의 단종·미출시를 판단할 수 없습니다."
        },
        {
          "label": "한국 공식 women · 폭미확인 · FD8315-105",
          "url": "https://www.nike.com/kr/t/나이키-알파플라이-3-여성-로드-레이싱화-jFKRH2Kh/FD8315-105",
          "note": "2026-11-09 한국 남성 FD8311-003·여성 FD8315-105 후보 URL 확인 당시 페이지를 열 수 없거나 구매 불가 안내가 표시됐습니다. 한국 현재 정가·판매 SKU·폭·재고는 미확인입니다. 이 두 URL의 접근 결과로 모델 전체의 단종·미출시를 판단할 수 없습니다."
        },
        {
          "label": "RunRepeat 알파플라이 3",
          "url": "https://runrepeat.com/nike-alphafly-3",
          "note": "공시 검체 정책:남성 US9. 개별 검체 SKU·폭은 미확인. 201g · 38.1/29.6mm · 드롭 8.5mm. SA 144/113 · ER 74.9/73.9%. RunRepeat 하부 ZoomX 34.5AC·상부 47.2AC는 서로 다른 층의 측정값입니다. 상부 값은 2026-11-09 원문 탭 관찰 기록이며 이번 정적 추출에서 재확인하지 못했습니다. 실험실 수치로 개인의 기록 향상·부상 예방·주행 수명을 보장할 수 없습니다."
        },
        {
          "label": "Doctors of Running 착화 리뷰",
          "url": "https://www.doctorsofrunning.com/nike-alphafly-3-review-2024/",
          "note": "RR Proto검체 실측 201g·38.1/29.6mm·드롭 8.5mm. DOR 소개 198g(남성 US9)·174g(여성 US8),40/32mm·8mm 는 한국현재공시로 대입하지 않습니다. 일반 US9정책과 실제검체 SKU·폭 확인은 다릅니다."
        },
        {
          "label": "RunRepeat 측정법",
          "url": "https://runrepeat.com/testing-methodology",
          "note": "내부 최광폭·엄지 너비·외부 플랫폼 폭은 다른 값입니다. AC 와 HA 는 직접 비교하지 않습니다. 시점·측정법 버전의 차이를 구분하세요."
        }
      ],
      "limitations": [
        "질환 예방·치료 효과, 공통 최적 페이스와 수명 km는 확인하지 못해 관련 등급·수명·km당 비용을 비웁니다.",
        "에디터 평점·1~10점·발볼 및 계절 적합성 분류는 실험실 단위나 임상 효과가 아닙니다.",
        "판매·재고는 확인한 SKU·성별·폭·시점에만 적용합니다. 미확인을 미판매·단종·미출시로 해석하지 않습니다.",
        "2026-11-10 구매 연결 점검: 네이버 발급 내역에서 해당 등록상품의 품절·판매중지를 확인해 연결을 제외했습니다. 모델 전체의 단종·전국 품절을 뜻하지 않습니다.",
        "2026-11-10 쿠팡 연결 점검: 해당 링크가 지정한 선택 상품·옵션에서 품절 표시를 확인해 연결을 제외했습니다. 모델 전체의 단종·전국 재고 상태를 뜻하지 않습니다."
      ]
    },
  };
