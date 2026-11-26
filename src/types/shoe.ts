export type ShoeStatus = "new" | "updated" | "featured" | "great";

export type PriceTier = 'budget' | 'mid' | 'premium' | 'super-premium' | 'high';
export type PlateType = 'curved' | 'flat' | string | null;

export interface BiomechanicsData {
  stackHeight: {
    heel: number;       // mm
    forefoot: number;   // mm
  };
  drop: number;         // mm
  /** 기존 필드명. 판형 플레이트와 카본 로드를 포함하며, 미확인·출처 상충이면 비운다. 형태는 plateType·상세 스펙으로 구분한다. */
  carbonPlate?: boolean;
  plateType?: PlateType;
  midsoleType: string;  // ReactX, ZoomX, Boost, etc.
  optimalPace?: string; // "5:00-7:00 min/km"
}

export interface KoreanFootFit {
  wideOptions?: boolean;
}

export type ShoePriceCheck = {
  kind: 'unconfirmed' | 'store-closed' | 'historical' | 'retailer' | 'official-listing';
  checkedAt: string;
  url: string;
  note: string;
  /** 확인한 품번의 원화 금액. 제품의 한국 정가는 Shoe.price에만 기록한다. */
  amount?: number;
};

export interface PriceAnalysis {
  /**
   * 한국 공식 정가. 한국 미정식출시(병행·직구만 있는) 신발은 비운다 — 병행가를 정가 칸에 넣으면
   * "95,000원 러닝화"·구조화 데이터 가격으로 정가처럼 나간다(2026-10-23 점검, 리닝 3종).
   */
  msrp?: number;
  /** 실거래가(세일·병행·직구 포함). 정가가 없을 때 화면은 이 값을 "실거래가"로만 보여 준다 */
  streetPrice?: number;
  /** 한국 가격대를 확인한 경우에만 기록합니다. */
  priceTier?: PriceTier;
  alternatives: string[]; // similar price alternatives
  valueAdvantages?: string[]; // 가격 대비 장점 (브랜드별 맞춤)
}

export interface Review {
  userType: string;
  text: string;
  source?: string;  // 'editor' | 'community'
  sourceUrl?: string;  // 출처 URL (에디터 분석 시 참조 링크)
}

export interface PurchaseLink {
  store: string;       // '쿠팡', '네이버', '공식몰', 'ABC마트' 등
  url: string;
  price?: number;      // 해당 스토어 가격 (선택)
  isOfficial?: boolean; // 공식 스토어 여부
  priceCheckedAt?: string; // 해당 URL·옵션의 표시 가격을 직접 읽은 날짜
  note?: string; // 모델·성별·폭·옵션을 고를 때 필요한 확인 조건
}

export interface RelatedPost {
  slug: string;        // 블로그 글 slug (/blog/{slug})
  title: string;       // 표시용 짧은 제목 (링크 텍스트)
}

export interface ShoeSpecs {
  weight: number;       // g
  drop: number;         // mm
}

export interface TargetUsers {
  recommended: string[];
  notRecommended: string[];
}

export interface DetailedSpecs {
  weight?: string;
  stackHeight?: string;
  drop?: string;
  midsole?: string;
  plate?: string;
  outsole?: string;
  upper?: string;
  width?: string;
  durability?: string;
  price?: string;
  footType?: string;
  landingPattern?: string;
}

export interface Shoe {
  id: string;
  slug: string;
  brand: string;
  name: string;
  category: string;
  image?: string;
  images?: string[];  // 여러 이미지 (슬라이더용)
  imageCaption?: string;
  imageSource?: { title: string; url: string };
  status?: ShoeStatus;
  // 검색 색인 제외 플래그. 페이지는 정상 렌더되나 robots noindex 처리.
  // 검색 수요 0인 초니치 변종이 동일 시리즈 상위 모델의 검색을 갉아먹는 카니발라이제이션 방지용.
  noindex?: boolean;
  price?: number;
  priceCheck?: ShoePriceCheck;

  // 기본 스펙
  specs?: ShoeSpecs;

  // 생체역학 데이터
  biomechanics?: BiomechanicsData;

  // 한국인 발 특성
  koreanFootFit?: KoreanFootFit;

  // 타겟 사용자
  targetUsers?: TargetUsers;

  // 핵심 특징
  features?: string[];

  // 가격 분석
  priceAnalysis?: PriceAnalysis;

  // 리뷰
  reviews?: Review[];
  /** 재확인한 범위만 기록한다. 제품 전체 검증 완료 표지가 아니다. */
  verification?: {
    checkedAt: string;
    scope: string;
    sources: { label: string; url: string; note: string }[];
    limitations: string[];
  };

  // 상세 스펙
  detailedSpecs?: DetailedSpecs;

  // 태그 (입문화, 데일리 러닝 등)
  tags?: string[];

  // 설명
  description?: string;

  // 비슷한 신발
  similarShoes?: string[]; // shoe ids

  // 관련 블로그 글(비교·후기) — 신발 상세에서 블로그로 회유(세션당 페이지뷰↑)
  relatedPosts?: RelatedPost[];

  // 구매 링크
  purchaseLinks?: PurchaseLink[];

  // 신발별 고유 한줄 요약
  oneliner?: string;

  // 에디터 분석 (2-4문장)
  editorComment?: string;
}

export const categoryOrder = [
  '입문화',
  '데일리',
  '쿠션화',
  '레이싱',
  '안정화',
  '트레일'
] as const;

export type Category = typeof categoryOrder[number];

// ============================================
// 유틸리티 타입
// ============================================

/**
 * 완전한 데이터가 있는 신발 (상세 페이지에서 모든 정보 표시 가능)
 */
export type CompleteShoe = Shoe & Required<Pick<Shoe,
  | 'specs'
  | 'biomechanics'
  | 'koreanFootFit'
  | 'targetUsers'
  | 'priceAnalysis'
  | 'features'
  | 'reviews'
>>;

// ============================================
// 타입 가드
// ============================================

/**
 * 신발이 완전한 데이터를 가지고 있는지 확인
 */
export function isCompleteShoe(shoe: Shoe): shoe is CompleteShoe {
  return !!(
    shoe.specs &&
    shoe.biomechanics &&
    shoe.koreanFootFit &&
    shoe.targetUsers &&
    shoe.priceAnalysis &&
    shoe.features &&
    shoe.reviews
  );
}
