import { track, trackOnce, type RunnerEvent, type RunnerEventParams } from '@/lib/analytics';

// 러닝 카드 측정 이벤트(스펙 '핵심 측정 이벤트'). 기존 track/trackOnce(gtag)로 보낸다 — 새 GA 스크립트는 없다.
// 이 모듈은 러닝 카드 청크에만 실린다. analytics.ts 는 루트 레이아웃 청크에 있어서, 여기 있는 코드를 거기 두면
// 모든 페이지 초기 JS 가 늘어난다(2026-10-06 측정: gzip +141–143바이트).

// 타입을 우회해 들어온 키(예: 거리·페이스 같은 입력 원값)도 보내지 않는다.
const ALLOWED: ReadonlyArray<keyof RunnerEventParams> = ['character_id', 'lead_axis', 'image_size', 'hide_numbers', 'share_method', 'step_number'];

/** onceKey 가 있으면 그 키로는 페이지가 살아 있는 동안 한 번만 보낸다(trackOnce 와 같은 이력). */
export function trackRunner(event: RunnerEvent, params: RunnerEventParams = {}, onceKey?: string): void {
  const safe: RunnerEventParams = Object.fromEntries(ALLOWED.filter((key) => params[key] !== undefined).map((key) => [key, params[key]]));
  if (onceKey) trackOnce(onceKey, event, safe);
  else track(event, safe);
}
