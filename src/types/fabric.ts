// ============================================
// 러닝 의류 원단 타입 정의
// ============================================
//
// 이 섹션은 신발·젤과 성격이 다르다. 러닝화는 RunRepeat 이라는 제3자 실측 바닥이 있지만
// 러닝 의류에는 없다 — 브랜드가 조성·성능 수치를 공개하지 않는다.
// 그래서 "스펙 비교 DB"를 만들면 빈칸을 추정으로 메우게 된다.
//
// 대신 이 타입은 **모든 주장이 실명 출처와 근거 등급을 달고 다니도록 강제**한다.
// CLAUDE.md 「근거 표기 3단계 위계」를 타입으로 옮긴 것이다.
// 근거는 `docs/references/apparel-fabric-research.md` 단일 소스.

export type FabricType = 'material' | 'brandmark' | 'metric' | 'report';

/**
 * 근거 등급.
 *
 * - `A` — 독립 검증: 공공기관 실측 · 국제규격 원문 · 공인시험성적서 · 동료심사 논문
 * - `B` — 공식 1차 자료: 제조사·소재공급사의 조성·정책·정량 수치. 자체 시험은 그 사실을 병기
 * - `C` — 브랜드의 정성 서술뿐(수치 없음). 브랜드 주장으로만 인용하고 사실처럼 쓰지 않는다
 * - `S` — 산초 자체 조사: 공개 카탈로그를 정해진 표본·기준으로 직접 집계하거나 대조한 결과
 *
 * 등급이 안 붙는 주장은 이 섹션에 실을 수 없다. "후기가 많다"류는 출처가 아니라 가짜 출처다.
 */
export type EvidenceGrade = 'A' | 'B' | 'C' | 'S';

export const evidenceGradeOrder: EvidenceGrade[] = ['A', 'B', 'C', 'S'];

export const evidenceGradeLabels: Record<EvidenceGrade, { label: string; desc: string }> = {
  A: { label: '독립 검증', desc: '공공기관 실측, 국제규격 원문, 공인시험성적서, 동료심사 논문' },
  B: { label: '공식 1차 자료', desc: '제조사·소재공급사의 조성, 정책, 정량 수치. 자체 시험은 그 사실을 병기' },
  C: { label: '정성 서술', desc: '수치 없이 말로만 설명된 것. 브랜드 주장으로만 인용' },
  S: { label: '산초 자체 조사', desc: '공개 카탈로그를 명시한 표본·기준으로 직접 집계하거나 대조한 결과' },
};

export interface FabricClaim {
  /** 주장 본문 */
  text: string;
  grade: EvidenceGrade;
  /** 실명 출처. 독자가 직접 확인할 수 있어야 한다 */
  source: string;
  sourceUrl?: string;
  /** 이 주장을 옮길 때 반드시 함께 적어야 하는 한계 */
  caveat?: string;
}

export interface FabricMeasurement {
  label: string;
  value: string;
  note?: string;
}

/** 공공기관 실측 원표처럼 행·열이 있는 자료 */
export interface FabricTable {
  caption: string;
  headers: string[];
  rows: string[][];
  /** 표 아래 각주 — 등급 기호 설명, 측정 조건 등 */
  footnotes?: string[];
}

export interface FabricMisconception {
  /** 널리 퍼진 통념 */
  myth: string;
  /** 1차 소스가 말하는 것 */
  reality: string;
  source: string;
  sourceUrl?: string;
}

export interface Fabric {
  id: string;
  /** id 와 항상 동일 */
  slug: string;
  type: FabricType;
  name: string;
  nameEn?: string;
  /** 목록 카드 한 줄 */
  summary: string;
  /** 상세 페이지 도입 문단 */
  intro: string;

  /** 최소 1건. 출처 없는 문장은 여기에 들어올 수 없다 */
  claims: FabricClaim[];
  measurements?: FabricMeasurement[];
  tables?: FabricTable[];
  misconceptions?: FabricMisconception[];

  /**
   * 이 주제에서 **확인하지 못한 것**. 비워두지 말 것 —
   * 모르는 것을 모른다고 적는 게 이 섹션의 차별점이다.
   */
  unknowns: string[];

  /** 다른 원단 페이지 slug */
  related?: string[];
  /** 관련 블로그 글 slug */
  relatedPosts?: string[];
  updatedAt: string;
  keywords?: string[];
}

export const fabricTypeOrder: FabricType[] = ['material', 'brandmark', 'metric', 'report'];

export const fabricTypeMeta: Record<FabricType, { label: string; desc: string; emoji: string }> = {
  material: {
    label: '소재',
    desc: '러닝복을 실제로 이루는 섬유 — 물성과 한계',
    emoji: '🧵',
  },
  brandmark: {
    label: '브랜드 원단 상표',
    desc: 'Dri-FIT·AEROREADY 같은 이름이 실제로 무엇을 뜻하는지',
    emoji: '🏷️',
  },
  metric: {
    label: '성능 지표·시험 규격',
    desc: '수치가 존재하는 자리와, 그 수치를 아무도 공개하지 않는 자리',
    emoji: '📐',
  },
  report: {
    label: '공공기관 실측',
    desc: '한국소비자원 등 제3자가 실제로 시험한 결과',
    emoji: '🔬',
  },
};
