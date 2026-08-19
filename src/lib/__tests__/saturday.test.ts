import { describe, expect, it } from 'vitest';
import {
  RACE_META,
  SATURDAY_COPY,
  SATURDAY_CREW,
} from '@/lib/data/challenge/saturday';

describe('쎄러데이 MISSION 00 정본', () => {
  it('일곱 명의 코드네임과 id가 중복되지 않는다', () => {
    expect(SATURDAY_CREW).toHaveLength(7);
    expect(new Set(SATURDAY_CREW.map((member) => member.id)).size).toBe(7);
    expect(new Set(SATURDAY_CREW.map((member) => member.codeName)).size).toBe(7);
  });

  it('풀코스 6명과 광묵 10K 1명으로 구성된다', () => {
    const full = SATURDAY_CREW.filter((member) => member.distance === '풀코스');
    const tenK = SATURDAY_CREW.filter((member) => member.distance === '10K');

    expect(full).toHaveLength(6);
    expect(tenK).toEqual([
      expect.objectContaining({ codeName: '광묵', distance: '10K' }),
    ]);
  });

  it('대회 날짜와 핵심 카피가 MISSION 00 정본과 일치한다', () => {
    expect(RACE_META.dateIso).toBe('2026-11-15');
    expect(RACE_META.datePoster).toBe('11 / 15');
    expect(SATURDAY_COPY.hero.hook).toBe('농담은 접수됐다.');
    expect(SATURDAY_COPY.crew.title).toContain('일곱 명');
  });

  it('여덟 명 시절 placeholder가 정본 어디에도 남아 있지 않다', () => {
    const corpus = JSON.stringify({ RACE_META, SATURDAY_COPY, SATURDAY_CREW });
    for (const stale of ['여덟', '8명', '10K 2명', 'MEMBER']) {
      expect(corpus).not.toContain(stale);
    }
  });

  it('엔딩 예고는 웹과 영상이 공유하는 한 문장이다', () => {
    // 이 값이 정본이다. Remotion 장면도 이 필드를 읽으므로 여기서 바꾸면 영상까지 따라온다.
    expect(SATURDAY_COPY.race.next).toBe('다음 이야기는 첫 러닝부터');
  });

  it('화면 카피에 군사·마블 톤 표기가 남아 있지 않다', () => {
    const corpus = JSON.stringify(SATURDAY_COPY);
    for (const stale of ['MISSION', 'ASSEMBLE', 'CLASSIFIED', 'RECRUITMENT']) {
      expect(corpus).not.toContain(stale);
    }
  });

  it('실명·관계 설명을 노출하지 않는다', () => {
    for (const member of SATURDAY_CREW) {
      expect(member.realName).toBe('');
    }
  });
});
