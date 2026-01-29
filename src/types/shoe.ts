export type ShoeStatus = "new" | "updated" | "featured" | "great";

export type InjuryPreventionLevel = 'excellent' | 'good' | 'caution' | 'warning';
export type ToBoxWidth = 'narrow' | 'standard' | 'wide';
export type CompatibilityLevel = 'excellent' | 'good' | 'fair' | 'poor';
export type PriceTier = 'budget' | 'mid' | 'premium' | 'super-premium' | 'high';
export type PlateType = 'curved' | 'flat' | string | null;

export interface BiomechanicsData {
  stackHeight: {
    heel: number;       // mm
    forefoot: number;   // mm
  };
  drop: number;         // mm
  carbonPlate: boolean;
  plateType?: PlateType;
  midsoleType: string;  // ReactX, ZoomX, Boost, etc.
  optimalPace?: string; // "5:00-7:00 min/km"
}

export interface InjuryPreventionData {
  plantarFasciitis: InjuryPreventionLevel;
  achillesTendinopathy: InjuryPreventionLevel;
  kneeIssues: InjuryPreventionLevel;
  shinSplints: InjuryPreventionLevel;
}

export interface KoreanFootFit {
  toBoxWidth: ToBoxWidth;
  flatFootCompatibility: CompatibilityLevel;
  wideOptions: boolean;
  winterCompatibility: CompatibilityLevel;
  summerCompatibility?: CompatibilityLevel;
}

export interface PriceAnalysis {
  msrp: number;
  streetPrice?: number;
  costPerKm: number;      // ₩/km
  valueRating: number;    // 1-10
  priceTier: PriceTier;
  alternatives: string[]; // similar price alternatives
  valueAdvantages?: string[]; // 가격 대비 장점 (브랜드별 맞춤)
}

export interface Review {
  userType: string;
  rating: number;
  text: string;
}

export interface PurchaseLink {
  store: string;       // '쿠팡', '네이버', '공식몰', 'ABC마트' 등
  url: string;
  price?: number;      // 해당 스토어 가격 (선택)
  isOfficial?: boolean; // 공식 스토어 여부
}

export interface ShoeSpecs {
  weight: number;       // g
  cushioning: number;   // 1-10
  responsiveness: number; // 1-10
  stability: number;    // 1-10
  drop: number;         // mm
  durability: number;   // expected km
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
  costPerKm?: string;
  footType?: string;
  landingPattern?: string;
}

export interface Shoe {
  id: string;
  slug: string;
  brand: string;
  name: string;
  category: string;
  rating: number;
  image?: string;
  images?: string[];  // 여러 이미지 (슬라이더용)
  status?: ShoeStatus;
  price?: number;

  // 기본 스펙
  specs?: ShoeSpecs;

  // 생체역학 데이터
  biomechanics?: BiomechanicsData;

  // 부상 예방
  injuryPrevention?: InjuryPreventionData;

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

  // 상세 스펙
  detailedSpecs?: DetailedSpecs;

  // 태그 (입문화, 데일리 러닝 등)
  tags?: string[];

  // 설명
  description?: string;

  // 비슷한 신발
  similarShoes?: string[]; // shoe ids

  // 구매 링크
  purchaseLinks?: PurchaseLink[];
}

export const categoryOrder = [
  '입문화',
  '데일리',
  '쿠션화',
  '레이싱',
  '안정화'
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
  | 'injuryPrevention'
  | 'koreanFootFit'
  | 'targetUsers'
  | 'priceAnalysis'
  | 'features'
  | 'reviews'
>>;

/**
 * 기본 정보만 있는 신발 (카드 표시용)
 */
export type BasicShoe = Pick<Shoe,
  | 'id'
  | 'slug'
  | 'brand'
  | 'name'
  | 'category'
  | 'rating'
  | 'image'
  | 'price'
  | 'tags'
  | 'description'
>;

/**
 * 비교용 신발 데이터
 */
export type ComparableShoe = Shoe & Required<Pick<Shoe, 'specs' | 'biomechanics'>>;

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
    shoe.injuryPrevention &&
    shoe.koreanFootFit &&
    shoe.targetUsers &&
    shoe.priceAnalysis &&
    shoe.features &&
    shoe.reviews
  );
}

/**
 * 신발이 비교 가능한 데이터를 가지고 있는지 확인
 */
export function isComparableShoe(shoe: Shoe): shoe is ComparableShoe {
  return !!(shoe.specs && shoe.biomechanics);
}

// ============================================
// 브랜드 타입
// ============================================

export const brandList = [
  'Nike',
  'Adidas',
  'Asics',
  'New Balance',
  'Hoka',
  'Brooks',
  'Saucony',
  'On',
  'Mizuno',
  'Puma'
] as const;

export type Brand = typeof brandList[number];
