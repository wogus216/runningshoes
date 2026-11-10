import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
    id: "asics-magic-speed-5",
    slug: "asics-magic-speed-5",
    brand: "Asics",
    name: "매직스피드 5",
  imageCaption: "매직스피드 5 사진(1013A183-100 · WHITE/BLACK)은 ASICS 공식 상품 사진과 모델·색상·구도를 대조했습니다. 사진 품번을 한국 판매 규격·가격으로 읽지 마세요.",
  imageSource: {"title":"ASICS 공식 상품 갤러리","url":"https://www.asics.com/sg/en-sg/magic-speed-5/p/1013A183-100.html"},
    image: "/images/shoes/asics/magicspeed5/side.webp",
    images: [
      "/images/shoes/asics/magicspeed5/side.webp",
      "/images/shoes/asics/magicspeed5/top.webp",
      "/images/shoes/asics/magicspeed5/outsole.webp",
      "/images/shoes/asics/magicspeed5/front.webp",
      "/images/shoes/asics/magicspeed5/back.webp"
    ],
    category: "레이싱",
    price: 209000,
    description: "FF LEAP 상층 + FF BLAST PLUS 하층 · 분기형 카본 보강 구조의 매직스피드 5. RunRepeat 실험실 검체 201g·35.3/26.6mm. 한국 확인 가격 209,000원.",
    oneliner: "FF LEAP 상층 + FF BLAST PLUS 하층 · 분기형 카본 보강 · 201g (RunRepeat 실험실 검체)",
    editorComment: "2026-11-09 원문 재확인. 한국 남녀공용 기본 1013A183.101·2E 1013A184.400은 확인 표시 가격 209,000원입니다. 기본은 240/245/250/260~290mm, 확인 2E는 230~290mm가 선택 가능이었습니다. 기본의 정확한 문자 폭은 미확인입니다. 사이즈 UI는 결제 재고 보장이 아닙니다. 한국 기본 상품 공시 196g은 측정 사이즈 미표기입니다. 뉴질랜드 제조사 기고는 남성 US9 193g·37.5/30.5mm·7mm, 싱가포르 공식은 드롭 7mm입니다. RR 201g·35.3/26.6mm·8.7mm와 구분합니다. 27.0AC·보조 37.0AC와 13.1N 굽힘은 서로 다른 시험입니다. BR79·건조율57%를 구방식 통기 1~5와 직접 비교하지 않습니다. 다른 카본화 대비 개인 기록 향상률·후반 탄성·400km 수명은 미확인으로 제거했습니다. 정확한 매직스피드5의 DOR 개별 착화 리뷰는 확인하지 못했습니다. 1~4세대 리뷰를 5의 후기처럼 옮기지 않았습니다. RR의 내부 치수·굽힘 13.1N과 전족 분기 형상을 확인했지만 입문자 누구나 적응하기 쉽거나 힐 착지에서 발목 부담이 적다는 보장은 아닙니다. RR 내부 최광폭 95.1mm·엄지 71.9mm·높이 25.7mm는 한국 2E 검체라고 확인된 값이 아닙니다. 기본과 2E를 비교하되 모든 발에 반업을 처방하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.",
    tags: [
      "레이싱",
      "카본",
      "템포"
    ],
    specs: {
      "weight": 201,
      "drop": 8.7
    },
    biomechanics: {
      "stackHeight": {
        "heel": 35.3,
        "forefoot": 26.6
      },
      "drop": 8.7,
      "carbonPlate": true,
      "plateType": "full-length carbon structure with forked forefoot; exact composition disputed",
      "midsoleType": "FF LEAP 상층 + FF BLAST PLUS 하층 · 분기형 카본 보강"
    },
    koreanFootFit: {
      "wideOptions": true
    },
    targetUsers: {
      "recommended": [
        "기본과 한국 2E 상품의 고정·앞코를 시착 비교하려는 러너",
        "FF LEAP·분기형 카본 전환이 자신의 주행에 맞는지 확인하려는 러너"
      ],
      "notRecommended": [
        "직접 착화에서 앞코·발등 압박이나 전환 불편이 생기는 경우",
        "개인 기록 개선을 보장하는 설명만 보고 구매하려는 경우"
      ]
    },
    features: [
      "FF LEAP 상층 + FF BLAST PLUS 하층 · 분기형 카본 보강",
      "201g · 35.3/26.6mm · 드롭 8.7mm (RunRepeat 실험실 검체)",
      "싱가포르 공식은 full-length carbon plate, 제조사 뉴질랜드 기고는 carbon-infused TPU, RR은 전족 분기형 카본으로 적었습니다. 첫 절단면의 70%처럼 보인다는 설명만으로 단판 길이를 확정하거나 100% 카본 섬유 조성을 보장하지 않습니다.",
      "RR 내부 최광폭 95.1mm·엄지 71.9mm·높이 25.7mm는 한국 2E 검체라고 확인된 값이 아닙니다. 기본과 2E를 비교하되 모든 발에 반업을 처방하지 않습니다."
    ],
    priceAnalysis: {
      "msrp": 209000,
      "priceTier": "premium",
      "alternatives": [
        "nike-zoom-fly-6",
        "adidas-boston-13",
        "saucony-endorphin-speed-5"
      ]
    },
    detailedSpecs: {
      "weight": "201g (RunRepeat 실험실 검체). 한국 기본 상품 공시 196g은 측정 사이즈 미표기입니다. 뉴질랜드 제조사 기고는 남성 US9 193g·37.5/30.5mm·7mm, 싱가포르 공식은 드롭 7mm입니다. RR 201g·35.3/26.6mm·8.7mm와 구분합니다.",
      "stackHeight": "35.3/26.6mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.",
      "drop": "8.7mm (RunRepeat 실험실 검체). 한국 기본 상품 공시 196g은 측정 사이즈 미표기입니다. 뉴질랜드 제조사 기고는 남성 US9 193g·37.5/30.5mm·7mm, 싱가포르 공식은 드롭 7mm입니다. RR 201g·35.3/26.6mm·8.7mm와 구분합니다.",
      "midsole": "FF LEAP 상층 + FF BLAST PLUS 하층 · 분기형 카본 보강. 주폼 27AC·보조 37AC, 힐/전족부 SA 149/112·에너지 리턴 64.6/62.6%. 27.0AC·보조 37.0AC와 13.1N 굽힘은 서로 다른 시험입니다. BR79·건조율57%를 구방식 통기 1~5와 직접 비교하지 않습니다. 다른 카본화 대비 개인 기록 향상률·후반 탄성·400km 수명은 미확인으로 제거했습니다.",
      "plate": "싱가포르 공식은 full-length carbon plate, 제조사 뉴질랜드 기고는 carbon-infused TPU, RR은 전족 분기형 카본으로 적었습니다. 첫 절단면의 70%처럼 보인다는 설명만으로 단판 길이를 확정하거나 100% 카본 섬유 조성을 보장하지 않습니다.",
      "width": "RR 내부 최광폭 95.1mm·엄지 부위 71.9mm·높이 25.7mm. RR 내부 최광폭 95.1mm·엄지 71.9mm·높이 25.7mm는 한국 2E 검체라고 확인된 값이 아닙니다. 기본과 2E를 비교하되 모든 발에 반업을 처방하지 않습니다.",
      "durability": "검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.",
      "price": "한국 남녀공용 기본 1013A183.101·2E 1013A184.400은 확인 표시 가격 209,000원입니다. 기본은 240/245/250/260~290mm, 확인 2E는 230~290mm가 선택 가능이었습니다. 기본의 정확한 문자 폭은 미확인입니다. 사이즈 UI는 결제 재고 보장이 아닙니다."
    },
    reviews: [
      {
        "userType": "원문 기반 에디터 분석",
        "source": "editor",
        "sourceUrl": "https://runrepeat.com/asics-magic-speed-5",
        "text": "한국 기본 상품 공시 196g은 측정 사이즈 미표기입니다. 뉴질랜드 제조사 기고는 남성 US9 193g·37.5/30.5mm·7mm, 싱가포르 공식은 드롭 7mm입니다. RR 201g·35.3/26.6mm·8.7mm와 구분합니다. 27.0AC·보조 37.0AC와 13.1N 굽힘은 서로 다른 시험입니다. BR79·건조율57%를 구방식 통기 1~5와 직접 비교하지 않습니다. 다른 카본화 대비 개인 기록 향상률·후반 탄성·400km 수명은 미확인으로 제거했습니다."
      },
      {
        "userType": "원문 기반 확인 범위 · 착화 후기 미확인",
        "source": "editor",
        "sourceUrl": "https://runrepeat.com/asics-magic-speed-5",
        "text": "정확한 매직스피드5의 DOR 개별 착화 리뷰는 확인하지 못했습니다. 1~4세대 리뷰를 5의 후기처럼 옮기지 않았습니다. RR의 내부 치수·굽힘 13.1N과 전족 분기 형상을 확인했지만 입문자 누구나 적응하기 쉽거나 힐 착지에서 발목 부담이 적다는 보장은 아닙니다."
      }
    ],
    similarShoes: [
      "nike-zoom-fly-6",
      "adidas-boston-13",
      "saucony-endorphin-speed-5",
      "asics-magic-speed-4"
    ],
    relatedPosts: [
      {
        "slug": "asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026",
        "title": "매직스피드 5 vs 슈퍼블라스트 3 — 카본 든 쪽이 더 잘 휜다"
      },
      {
        "slug": "asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026",
        "title": "매직스피드 5 vs 줌 플라이 6 — 같은 20.9만원, 47g이 갈린다"
      },
      {
        "slug": "carbon-shoes-not-for-everyone-2026",
        "title": "카본화가 나한테도 맞을까 — 사기 전 자가진단"
      },
      {
        "slug": "running-shoe-plate-guide-2026",
        "title": "플레이트 완전 해설 — 카본·유리섬유·나일론"
      }
    ],
    purchaseLinks: [
      {
        "store": "네이버",
        "url": "https://naver.me/F05U5V3H"
      }
    ],
    verification: {
      "checkedAt": "2026-11-09",
      "scope": "한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.",
      "sources": [
        {
          "label": "한국 1013A183.101 · 문자 폭 미확인",
          "url": "https://www.asics.co.kr/p/AKR_112631103-101",
          "note": "표시 가격 209,000원. 확인 사이즈 조건은 본문 참조."
        },
        {
          "label": "한국 1013A184.400 · 2E",
          "url": "https://m.asics.co.kr/p/AKR_112611104-400",
          "note": "표시 가격 209,000원. 확인 사이즈 조건은 본문 참조."
        },
        {
          "label": "ASICS 동세대 구조 원문 · 출처별 차이 보존",
          "url": "https://www.asics.com/sg/en-sg/magic-speed-5/p/1013A183-400.html",
          "note": "ExactMagic Speed5 official: FF LEAP +FF BLAST PLUS,7mm, full-length carbon plate,ASICSGRIP; no KR price/stock inference."
        },
        {
          "label": "ASICS 동세대 구조 원문 · 출처별 차이 보존",
          "url": "https://www.asics.com/nz/en-nz/medical/review/magic-speed-5-review",
          "note": "Technical wording only: Aaron Jackson calls plate full-length carbon-infused TPU;193g menUS9,37.5/30.5mm,7mm. No clinical/pace conclusion adopted."
        },
        {
          "label": "RunRepeat 동세대 실험실 원문",
          "url": "https://runrepeat.com/asics-magic-speed-5",
          "note": "공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 201g·35.3/26.6mm·8.7mm. 27.0AC·보조 37.0AC와 13.1N 굽힘은 서로 다른 시험입니다. BR79·건조율57%를 구방식 통기 1~5와 직접 비교하지 않습니다. 다른 카본화 대비 개인 기록 향상률·후반 탄성·400km 수명은 미확인으로 제거했습니다."
        },
        {
          "label": "RunRepeat 측정법",
          "url": "https://runrepeat.com/testing-methodology",
          "note": "AC·HA·HC, SA·에너지 리턴, BR·구방식1~5와 내부/외부 폭을 구분합니다. 일반 정책은 개별 라벨 확인과 다릅니다."
        }
      ],
      "limitations": [
        "모델별 임상 예방·치료 등급, 공통 최적 페이스·주행 수명·km당 비용은 미확인으로 제거했습니다.",
        "에디터 평점·1~10점·발볼 및 계절 분류·구매 링크는 모든 항목을 새로 검증한 수치나 임상 효과가 아닙니다.",
        "판매 조건은 확인한 상품·시점에 한정합니다. 미확인을 미출시·단종·전국 재고 없음으로 해석하지 않습니다.",
        "정확한 동세대 DOR 개별 착화 리뷰 미확인. 다른 세대로 대체하지 않음.",
        "2026-11-10 쿠팡 연결 점검: 연결 상품의 제목과 세부 모델·브랜드·신발 종류 표기가 충돌해 정확한 동일성을 확정하지 못했고 연결을 제외했습니다. 모델 전체의 단종·전국 재고 상태를 뜻하지 않습니다."
      ]
    },
  };
