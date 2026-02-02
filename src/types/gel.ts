// ============================================
// 에너지 젤 타입 정의
// ============================================

export type GelCategory = '프리미엄' | '스테디셀러' | '가성비';
export type GelType = 'hydrogel' | 'isotonic' | 'standard' | 'natural' | 'solid';
export type GILevel = 'excellent' | 'good' | 'moderate' | 'poor';
export type OsmolalityBasis = 'measured' | 'estimated' | 'brand_claim' | 'unknown';
export type GelPriceTier = 'budget' | 'entry' | 'mid' | 'premium' | 'super-premium';

export interface NutritionFacts {
  calories: number;           // kcal
  totalCarbs: number;         // g
  carbSource: string;         // "Maltodextrin+Fructose", "Rice+Honey" 등
  glucoseFructoseRatio?: string; // "2:1", "1:0.8" 등
  caffeine: number;           // mg (0이면 카페인 없음)
  sodium: number;             // mg per serving
  potassium?: number;         // mg
  magnesium?: number;         // mg
  fiber?: number;             // g
  fat?: number;               // g
  protein?: number;           // g
  servingSize: number;        // g or ml
  servingUnit: 'g' | 'ml';
}

export interface CarbScience {
  dualSource: boolean;
  transporterProfile: string;   // "SGLT1 only", "SGLT1+GLUT5" 등
  estimatedOxidationRate: string; // "~60g/hr", "~90g/hr" 등
  osmolalityType: GelType;
  osmolalityEstimate?: number;  // mOsm/kg
  osmolalityBasis: OsmolalityBasis;
  waterRequired: boolean;
  keyTechnology?: string;       // "Hydrogel (alginate+pectin)" 등
  scienceVerdict: string;       // 한줄 과학적 평가
}

export interface GITolerance {
  overall: GILevel;
  waterPairing: string;         // "필수", "불필요", "권장"
  riskFactors: string[];        // ["고삼투압", "카페인"] 등
  communityFeedback: string;    // 커뮤니티 후기 요약
  gutTrainingNeeded: boolean;
}

export interface FlavorProfile {
  flavors: string[];            // ["오렌지", "레몬", "살구"] 등
  texture: string;              // "묽은 리퀴드", "걸쭉한 젤", "고체" 등
  viscosity: number;            // 1-10 (1=물, 10=양갱)
  aftertaste: string;           // "깔끔", "텁텁함", "달달함 남음" 등
  tasteFatigueRisk: string;     // "낮음", "보통", "높음"
}

export interface UsageGuide {
  bestFor: string[];            // ["풀마라톤 서브3", "울트라"] 등
  avoidIf: string[];            // ["위장 예민", "카페인 민감"] 등
  idealDistance: string[];      // ["하프마라톤", "풀마라톤"] 등
  intakeStrategy: string;       // "매 25분마다 1개, 에이드에서 물과 함께"
  caffeineStrategy?: string;    // 카페인 젤일 경우
}

export interface GelPriceAnalysis {
  msrp: number;                 // 개당 가격 (원)
  bulkPrice?: number;           // 묶음 구매 시 개당 가격
  marathonCost: number;         // 풀마라톤 1회 총 비용 (원)
  yangGangComparison: string;   // 양갱 대비 가성비 설명
  valueRating: number;          // 1-10
  priceTier: GelPriceTier;
  priceCheckedAt: string;       // "2026-02-01"
  priceSource: string;          // "쿠팡 최저가"
  alternatives: string[];       // 비슷한 가격대 대안 slug
}

export interface GelReview {
  userType: string;
  rating: number;
  text: string;
}

export interface GelRatings {
  energyKick: number;         // 1-10
  giComfort: number;          // 1-10
  texture: number;            // 1-10
  taste: number;              // 1-10
  caffeine: number;           // 1-10 (카페인 없으면 N/A → 5)
  electrolytes: number;       // 1-10
  portability: number;        // 1-10
  value: number;              // 1-10
  transparency: number;       // 1-10
  overall: number;            // 1-10
}

export interface PurchaseLink {
  store: string;
  url: string;
  price?: number;
  isOfficial?: boolean;
}

export interface Gel {
  id: string;
  slug: string;
  brand: string;
  name: string;
  category: GelCategory;
  rating: number;             // 1-5
  image?: string;
  images?: string[];
  price?: number;             // 개당 가격 (원)

  // 기본 설명
  description: string;
  tags: string[];

  // 영양 성분
  nutritionFacts: NutritionFacts;

  // 탄수화물 과학
  carbScience: CarbScience;

  // 위장 안정성
  giTolerance: GITolerance;

  // 맛/식감
  flavorProfile: FlavorProfile;

  // 사용 가이드
  usageGuide: UsageGuide;

  // 점수
  ratings: GelRatings;

  // 가격 분석
  priceAnalysis: GelPriceAnalysis;

  // 리뷰
  reviews: GelReview[];

  // 핵심 특징
  features: string[];

  // 비슷한 젤
  similarGels: string[];

  // 구매 링크
  purchaseLinks?: PurchaseLink[];
}

// ============================================
// 유틸리티 타입
// ============================================

export type BasicGel = Pick<Gel,
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

export type SimilarGelInfo = {
  slug: string;
  brand: string;
  name: string;
  rating: number;
  category: GelCategory;
  image?: string;
  price?: number;
  nutritionFacts?: {
    totalCarbs: number;
    caffeine: number;
    calories: number;
  };
  ratings?: {
    overall: number;
    giComfort: number;
  };
};

// ============================================
// 상수
// ============================================

export const gelCategoryOrder: GelCategory[] = ['프리미엄', '스테디셀러', '가성비'];

export const gelBrandList = [
  'Maurten',
  'SiS',
  '226ERS',
  'UP',
  '아미노바이탈',
  '엔업',
  '마그온',
  'GU',
  '코오롱제약',
  'K-양갱',
  '요헤미티',
  '온유어마크',
  '스포식스',
] as const;

export type GelBrand = typeof gelBrandList[number];
