import { describe, it, expect } from 'vitest';
import { deriveRaceStatus, parseKst } from '@/lib/blog/race-status';
import type { RaceMeta } from '@/types/blog';

const base: RaceMeta = {
  displayTitle: '부산브릿지마라톤',
  raceDate: '2026-12-06',
  facts: [],
  highlights: [],
};

describe('parseKst', () => {
  it('날짜만 오면 KST 자정으로 읽는다', () => {
    // KST 2026-08-24 00:00 == UTC 2026-08-23 15:00
    expect(parseKst('2026-08-24').toISOString()).toBe('2026-08-23T15:00:00.000Z');
  });

  it('시각이 붙으면 KST 그 시각으로 읽는다', () => {
    expect(parseKst('2026-08-24T10:00').toISOString()).toBe('2026-08-24T01:00:00.000Z');
  });
});

describe('deriveRaceStatus', () => {
  it('접수 시작이 미정이면 tbd', () => {
    const s = deriveRaceStatus(base, parseKst('2026-08-19'));
    expect(s.kind).toBe('tbd');
    expect(s.daysUntil).toBeNull();
  });

  it('접수 시작 전이면 upcoming 이고 D-n 을 센다', () => {
    const meta = { ...base, registrationStart: '2026-08-24T10:00' };
    const s = deriveRaceStatus(meta, parseKst('2026-08-19T09:00'));
    expect(s.kind).toBe('upcoming');
    expect(s.daysUntil).toBe(5);
    expect(s.label).toBe('접수 D-5');
  });

  it('D-day 는 시각이 아니라 KST 날짜로 센다', () => {
    const meta = { ...base, registrationStart: '2026-08-24T10:00' };
    // 23시 59분이어도 같은 날이면 D-5
    const s = deriveRaceStatus(meta, parseKst('2026-08-19T23:59'));
    expect(s.daysUntil).toBe(5);
  });

  it('접수 기간 중이면 open', () => {
    const meta = { ...base, registrationStart: '2026-08-24T10:00', registrationEnd: '2026-09-30' };
    const s = deriveRaceStatus(meta, parseKst('2026-09-01'));
    expect(s.kind).toBe('open');
    expect(s.label).toBe('접수중');
  });

  it('마감일이 없으면 시작 이후는 계속 open — 선착순 대회', () => {
    const meta = { ...base, registrationStart: '2026-08-24T10:00' };
    const s = deriveRaceStatus(meta, parseKst('2026-11-01'));
    expect(s.kind).toBe('open');
  });

  it('마감일이 지나면 closed', () => {
    const meta = { ...base, registrationStart: '2026-08-24T10:00', registrationEnd: '2026-09-30' };
    const s = deriveRaceStatus(meta, parseKst('2026-10-01'));
    expect(s.kind).toBe('closed');
  });

  it('대회일이 지나면 past 가 모든 것을 이긴다', () => {
    const meta = { ...base, registrationStart: '2026-08-24T10:00' };
    const s = deriveRaceStatus(meta, parseKst('2026-12-07'));
    expect(s.kind).toBe('past');
  });

  it('접수 시작 당일이면 open', () => {
    const meta = { ...base, registrationStart: '2026-08-24T10:00' };
    const s = deriveRaceStatus(meta, parseKst('2026-08-24T10:00'));
    expect(s.kind).toBe('open');
  });
});
