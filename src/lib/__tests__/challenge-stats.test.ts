import { describe, it, expect } from 'vitest';
import { toRadarAxes, daysUntilRace, missionDdayLabel, weekBackdrop } from '@/lib/challenge/stats';
import type { CrewStats } from '@/types/challenge';

const base: CrewStats = {
  source: '가민',
  asOf: '2026-08-12',
  weeklyKm: 30,
  longestKm: 21.0975,
  avgPaceSec: 360,
  runsPerWeek: 3,
};

describe('toRadarAxes', () => {
  it('스펙에 고정된 상수로 0-100 정규화한다', () => {
    const r = toRadarAxes(base);
    expect(r.power).toBeCloseTo(50, 5);        // 30 / 60
    expect(r.endurance).toBeCloseTo(50, 5);    // 21.0975 / 42.195
    expect(r.speed).toBeCloseTo(50, 5);        // (420-360) / (420-300)
    expect(r.consistency).toBeCloseTo(60, 5);  // 3 / 5
  });

  it('상한을 넘는 값은 100으로 자른다', () => {
    const r = toRadarAxes({ ...base, weeklyKm: 120, runsPerWeek: 7, longestKm: 100 });
    expect(r.power).toBe(100);
    expect(r.consistency).toBe(100);
    expect(r.endurance).toBe(100);
  });

  it('7분/km보다 느리면 스피드는 0에서 멈춘다', () => {
    expect(toRadarAxes({ ...base, avgPaceSec: 480 }).speed).toBe(0);
  });

  it('5분/km보다 빠르면 스피드는 100에서 멈춘다', () => {
    expect(toRadarAxes({ ...base, avgPaceSec: 240 }).speed).toBe(100);
  });
});

describe('daysUntilRace', () => {
  it('한국 시간 기준 날짜 차이를 센다', () => {
    expect(daysUntilRace(new Date('2026-08-12T00:00:00+09:00'))).toBe(95);
    expect(daysUntilRace(new Date('2026-11-14T23:00:00+09:00'))).toBe(1);
    expect(daysUntilRace(new Date('2026-11-15T06:00:00+09:00'))).toBe(0);
  });

  it('UTC 늦은 밤이어도 한국 날짜로 계산한다', () => {
    // 2026-11-14T16:00Z = 2026-11-15 01:00 KST → 당일
    expect(daysUntilRace(new Date('2026-11-14T16:00:00Z'))).toBe(0);
  });

  it('대회가 지나면 음수를 돌려준다', () => {
    expect(daysUntilRace(new Date('2026-11-16T09:00:00+09:00'))).toBe(-1);
  });
});

describe('missionDdayLabel', () => {
  it('대회 전에는 D-N', () => {
    expect(missionDdayLabel(new Date('2026-08-15T02:00:00+09:00'))).toBe('D-92');
    expect(missionDdayLabel(new Date('2026-11-14T23:00:00+09:00'))).toBe('D-1');
  });

  it('대회 당일은 D-DAY (KST 경계 기준)', () => {
    expect(missionDdayLabel(new Date('2026-11-15T06:00:00+09:00'))).toBe('D-DAY');
    // UTC로는 전날 밤이어도 KST로 당일이면 D-DAY
    expect(missionDdayLabel(new Date('2026-11-14T16:00:00Z'))).toBe('D-DAY');
  });

  it('대회가 지나면 MISSION DAY PASSED', () => {
    expect(missionDdayLabel(new Date('2026-11-16T09:00:00+09:00'))).toBe('MISSION DAY PASSED');
  });
});

describe('weekBackdrop', () => {
  it('첫 주차는 감청, 마지막 주차는 새벽빛', () => {
    expect(weekBackdrop(0, 5)).toBe('#0f1830');
    expect(weekBackdrop(4, 5)).toBe('#3b6ea5');
  });

  it('주차가 하나뿐이면 감청을 쓴다', () => {
    expect(weekBackdrop(0, 1)).toBe('#0f1830');
  });

  it('중간 주차는 두 색 사이에 놓인다', () => {
    const mid = weekBackdrop(2, 5);
    expect(mid).not.toBe('#0f1830');
    expect(mid).not.toBe('#3b6ea5');
    expect(mid).toMatch(/^#[0-9a-f]{6}$/);
  });
});
