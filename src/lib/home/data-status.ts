import { getShoes } from '@/lib/data/shoes';

/**
 * 러닝화 인덱스 행에 붙는 **데이터 상태**.
 *
 * 이 사이트는 랩 테스트를 직접 수행하지 않는다. 그래서 각 행이 어디서 온 값인지 밝히는 게
 * 신뢰 체계의 핵심이다(스펙 §11). 상태는 **지어내지 않고 실제 표기에서 판정한다** —
 * `detailedSpecs` 문자열에 남아 있는 근거 표기가 판정 근거다.
 *
 *   · `Lab` / `랩` 표기  → 외부 전문 랩의 공개 측정치를 인용한 항목이 있다
 *   · `추정` 표기        → 랩 데이터 미게시 신상 등, 추정으로 채운 항목이 있다
 *                          (CLAUDE.md 신상 대응 프로토콜이 요구하는 `(추정)` 표기)
 *   · 가격 미정         → 국내 출시·가격이 확정되지 않아 갱신을 기다리는 상태
 *   · 그 외             → 공식 스펙과 국내외 리뷰를 종합한 항목
 *
 * ⚠️ **서버 전용.** `getShoes()`가 reviews·editorComment까지 포함한 풀데이터를 끌어온다.
 * 홈은 이 함수가 만든 `Record<slug, DataStatus>`(문자열 맵)만 prop 으로 받는다
 * (`problem-counts.ts` 와 같은 이유 — 데이터 getter 를 client 모듈에서 import 하지 않는다).
 */

export type DataStatus = '외부 랩 확인' | '추정치' | '갱신 대기' | '리뷰 종합';

/** 추정 표기가 우선한다 — 랩 수치와 추정치가 섞여 있으면 약한 쪽을 밝히는 게 맞다. */
const ESTIMATE = /추정/;
const LAB = /\bLab\b|랩\s?측정|랩 데이터/i;

function statusOf(detailedSpecs: Record<string, unknown> | undefined, price?: number): DataStatus {
  const text = detailedSpecs ? Object.values(detailedSpecs).filter((v) => typeof v === 'string').join(' ') : '';
  if (ESTIMATE.test(text)) return '추정치';
  if (LAB.test(text)) return '외부 랩 확인';
  if (price === undefined || price === null || price <= 0) return '갱신 대기';
  return '리뷰 종합';
}

export function getDataStatuses(): Record<string, DataStatus> {
  const out: Record<string, DataStatus> = {};
  for (const shoe of getShoes()) {
    out[shoe.slug] = statusOf(
      shoe.detailedSpecs as unknown as Record<string, unknown> | undefined,
      shoe.price,
    );
  }
  return out;
}
