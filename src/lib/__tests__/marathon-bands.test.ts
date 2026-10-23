import { describe, it, expect } from 'vitest';
import { bandOf, groupIntoBands, daysUntil, isPast, displayStatusOf, rowStateLabel, raceDayBadge } from '@/lib/marathon/bands';
import type { MarathonEvent } from '@/types/marathon';

const TODAY = '2026-08-01';

function ev(over: Partial<MarathonEvent>): MarathonEvent {
  return {
    id: 'x', name: '테스트 대회', date: '2026-09-01', month: '9월',
    location: '서울', region: '서울', distances: ['10K'],
    status: '접수중', isMajor: false,
    ...over,
  } as MarathonEvent;
}

describe('bandOf', () => {
  it('대회일이 지났으면 status와 무관하게 past', () => {
    expect(bandOf(ev({ date: '2026-07-31', status: '접수중' }), TODAY)).toBe('past');
  });

  it('오늘 열리는 대회는 past가 아니다', () => {
    expect(bandOf(ev({ date: TODAY, status: '접수중' }), TODAY)).toBe('open');
  });

  it('registrationEnd가 지났으면 status가 접수중이어도 closed', () => {
    expect(
      bandOf(ev({ date: '2026-09-01', registrationEnd: '2026-07-20', status: '접수중' }), TODAY),
    ).toBe('closed');
  });

  it('registrationStart가 아직 안 왔으면 upcoming', () => {
    expect(
      bandOf(ev({ date: '2026-09-01', registrationStart: '2026-08-15', status: '접수중' }), TODAY),
    ).toBe('upcoming');
  });

  it('접수기간이 없으면 status를 따른다', () => {
    expect(bandOf(ev({ status: '마감' }), TODAY)).toBe('closed');
    expect(bandOf(ev({ status: '접수예정' }), TODAY)).toBe('upcoming');
    expect(bandOf(ev({ status: '접수중' }), TODAY)).toBe('open');
  });

  it('status가 대회종료인데 날짜가 미래면 closed로 둔다(past는 날짜로만)', () => {
    expect(bandOf(ev({ date: '2026-09-01', status: '대회종료' }), TODAY)).toBe('closed');
  });

  it('연기(postponed)는 원래 날짜가 지나도 지난 대회가 아니다 — validate 에러 조건(isPast)도 false', () => {
    const e = ev({ date: '2026-07-31', status: '마감', postponed: true });
    expect(isPast(e, TODAY)).toBe(false);
    expect(bandOf(e, TODAY)).toBe('closed');
  });
});

describe('groupIntoBands', () => {
  it('4개 밴드를 순서대로 반환하고 합계가 입력과 같다', () => {
    const events = [
      ev({ id: 'a', date: '2026-07-01', status: '대회종료' }),
      ev({ id: 'b', date: '2026-09-01', status: '접수중' }),
      ev({ id: 'c', date: '2026-09-02', status: '접수예정' }),
      ev({ id: 'd', date: '2026-09-03', status: '마감' }),
    ];
    const bands = groupIntoBands(events, TODAY);
    expect(bands.map((b) => b.id)).toEqual(['open', 'upcoming', 'closed', 'past']);
    expect(bands.reduce((n, b) => n + b.events.length, 0)).toBe(4);
  });

  it('밴드 안은 날짜 오름차순이다', () => {
    const events = [
      ev({ id: 'late', date: '2026-09-20' }),
      ev({ id: 'early', date: '2026-09-02' }),
    ];
    const open = groupIntoBands(events, TODAY).find((b) => b.id === 'open')!;
    expect(open.events.map((e) => e.id)).toEqual(['early', 'late']);
  });

  it('빈 밴드도 자리를 지킨다(길이 0)', () => {
    const bands = groupIntoBands([ev({})], TODAY);
    expect(bands).toHaveLength(4);
    expect(bands.find((b) => b.id === 'past')!.events).toHaveLength(0);
  });
});

describe('daysUntil', () => {
  it('남은 일수를 센다', () => {
    expect(daysUntil('2026-08-13', TODAY)).toBe(12);
    expect(daysUntil(TODAY, TODAY)).toBe(0);
    expect(daysUntil('2026-07-31', TODAY)).toBe(-1);
  });
});

describe('displayStatusOf · rowStateLabel — 날짜가 수동 status 를 이긴다(2026-10-23 가민런)', () => {
  it('마감일이 지났는데 status 가 접수중이면 목록 행·상세 배지 모두 마감', () => {
    const e = ev({ date: '2026-11-15', registrationEnd: '2026-07-22', status: '접수중' });
    expect(displayStatusOf(e, TODAY)).toBe('마감');
    expect(rowStateLabel(e, TODAY)).toEqual({ text: '마감', dday: false });
  });
  it('마감 전이면 행은 D-day', () => {
    expect(rowStateLabel(ev({ registrationEnd: '2026-08-05', status: '접수중' }), TODAY)).toEqual({ text: 'D-4 마감', dday: true });
  });
  it('마감일 당일은 D-0', () => {
    expect(rowStateLabel(ev({ registrationEnd: TODAY, status: '접수중' }), TODAY).text).toBe('D-0 마감');
  });
  it('연기는 status·D-day 보다 먼저', () => {
    const e = ev({ postponed: true, registrationEnd: '2026-08-05', status: '접수중' } as Partial<MarathonEvent>);
    expect(displayStatusOf(e, TODAY)).toBe('일정 연기');
    expect(rowStateLabel(e, TODAY).text).toBe('일정 연기');
  });
  it('마감일이 없으면 수동 status 그대로', () => {
    expect(rowStateLabel(ev({ status: '마감' }), TODAY).text).toBe('마감');
    expect(displayStatusOf(ev({ status: '접수중' }), TODAY)).toBe('접수중');
  });
});

describe('raceDayBadge', () => {
  it('D-N · 오늘 개최 · 대회 종료', () => {
    expect(raceDayBadge({ date: '2026-08-06' }, TODAY)).toEqual({ kind: 'dday', text: 'D-5' });
    expect(raceDayBadge({ date: TODAY }, TODAY)).toEqual({ kind: 'today', text: '오늘 개최' });
    expect(raceDayBadge({ date: '2026-07-30' }, TODAY)).toEqual({ kind: 'past', text: '대회 종료' });
  });
  it('연기된 대회는 원래 날짜가 지나도 종료로 표시하지 않는다', () => {
    expect(raceDayBadge({ date: '2026-07-30', postponed: true }, TODAY)).toBeNull();
  });
});
