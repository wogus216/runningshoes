export type ShoeStatus = "new" | "updated" | "featured" | "great";

export type InjuryPreventionLevel = 'excellent' | 'good' | 'caution' | 'warning';
export type ToBoxWidth = 'narrow' | 'standard' | 'wide';
export type CompatibilityLevel = 'excellent' | 'good' | 'fair' | 'poor';
export type PriceTier = 'budget' | 'mid' | 'premium' | 'super-premium';
export type PlateType = 'curved' | 'flat' | null;

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
}

export interface PriceAnalysis {
  msrp: number;
  streetPrice?: number;
  costPerKm: number;      // ₩/km
  valueRating: number;    // 1-10
  priceTier: PriceTier;
  alternatives: string[]; // similar price alternatives
}

export interface Review {
  userType: '입문 러너' | '중급 러너' | '상급 러너' | '평발 러너' | '가성비 중시' | 'Fun Runner';
  rating: number;
  text: string;
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
  weight: string;
  stackHeight: string;
  drop: string;
  midsole: string;
  plate: string;
  outsole: string;
  upper: string;
  width: string;
  durability: string;
  price: string;
  costPerKm: string;
  footType: string;
  landingPattern: string;
}

export interface Shoe {
  id?: string;
  slug?: string;
  brand: string;
  name: string;
  category: string;
  rating: number;
  image?: string;
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
}

export const categoryOrder = [
  '입문화',
  '맥스쿠션화',
  '데일리',
  '안정화',
  '울트라',
  '경량트레일러닝',
  '플레이트',
  '슈퍼트레이너',
  '카본플레이트',
  '중거리',
  '레이싱'
] as const;

export type Category = typeof categoryOrder[number];
