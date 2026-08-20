import { describe, expect, it } from 'vitest';
import {
  RACE_META,
  SATURDAY_CHAT,
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
    expect(SATURDAY_COPY.hero.hook).toBe('일곱 명이 신청했다.');
    expect(SATURDAY_COPY.crew.title).toContain('일곱 명');
  });

  it('화면 카피가 말하는 인원과 실제 로스터가 어긋나지 않는다', () => {
    // 예전엔 "여덟 명"으로 적혀 있던 게 로스터만 고쳐지고 카피에 남아 있었다.
    // 인원을 바꾸면 이 테스트가 먼저 깨지도록 둔다.
    const corpus = JSON.stringify(SATURDAY_COPY);
    const 한글수사 = ['하나', '둘', '셋', '넷', '다섯', '여섯', '일곱', '여덟', '아홉', '열'];
    const 등장 = 한글수사.filter((word) => corpus.includes(`${word} 명`));
    expect(등장).toEqual(['일곱']);
    expect(SATURDAY_CREW).toHaveLength(7);
  });

  it('단톡 발췌는 원문 그대로다 — 히어로와 달리 여기는 손대지 않는다', () => {
    // 문장을 고쳐 쓰기 시작하면 이 섹션이 존재할 이유가 사라진다.
    // 뭉치마다 '펀치라인'은 정확히 하나이거나 없어야 한다(둘이면 편집한 흔적이다).
    for (const burst of SATURDAY_CHAT) {
      expect(burst.lines.filter((line) => line.punch).length).toBeLessThanOrEqual(1);
      expect(burst.lines.length).toBeGreaterThan(0);
    }
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
