import { describe, it, expect, beforeEach, vi } from 'vitest';
import { __resetOnceForTest } from '../analytics';
import { trackRunner } from '../runner-analysis/track';

type TestGlobal = Omit<typeof globalThis, 'window'> & { window: { gtag?: ReturnType<typeof vi.fn> } };
const gtag = () => (globalThis as TestGlobal).window.gtag!;

describe('러닝 카드 측정 이벤트(trackRunner)', () => {
  beforeEach(() => {
    __resetOnceForTest();
    (globalThis as TestGlobal).window = { gtag: vi.fn() };
  });

  it('스펙 이벤트 이름과 허용 매개변수를 그대로 gtag 에 보낸다', () => {
    trackRunner('runner_carousel_saved', { character_id: 'athena', image_size: 'feed', hide_numbers: 'true' });
    expect(gtag()).toHaveBeenCalledWith('event', 'runner_carousel_saved', { character_id: 'athena', image_size: 'feed', hide_numbers: 'true' });
  });

  it('허용 목록 밖의 키(입력 기록 원값)는 보내지 않는다', () => {
    const leaked = { character_id: 'heracles', step_number: 1, totalDistanceKm: 150, averagePaceSecPerKm: 330, raceGoal: { distanceKm: 42.195 } };
    trackRunner('runner_input_step_completed', leaked as unknown as Parameters<typeof trackRunner>[1]);
    expect(gtag()).toHaveBeenCalledWith('event', 'runner_input_step_completed', { character_id: 'heracles', step_number: 1 });
  });

  it('값이 없는 키는 빼고, 매개변수가 없으면 빈 객체', () => {
    trackRunner('runner_share_started', { character_id: 'nike', share_method: undefined });
    trackRunner('runner_analysis_started');
    expect(gtag()).toHaveBeenNthCalledWith(1, 'event', 'runner_share_started', { character_id: 'nike' });
    expect(gtag()).toHaveBeenNthCalledWith(2, 'event', 'runner_analysis_started', {});
  });

  it('onceKey 가 같으면 한 번만 보낸다(단계 완료·결과 노출)', () => {
    trackRunner('runner_input_step_completed', { step_number: 3 }, 'runner-step-3');
    trackRunner('runner_input_step_completed', { step_number: 3 }, 'runner-step-3');
    trackRunner('runner_input_step_completed', { step_number: 4 }, 'runner-step-4');
    expect(gtag()).toHaveBeenCalledTimes(2);
    expect(gtag()).toHaveBeenLastCalledWith('event', 'runner_input_step_completed', { step_number: 4 });
  });

  it('gtag가 없으면 조용히 무시한다', () => {
    (globalThis as TestGlobal).window = {};
    expect(() => trackRunner('runner_result_viewed', { character_id: 'zeus', lead_axis: 'stimulus' })).not.toThrow();
  });
});
