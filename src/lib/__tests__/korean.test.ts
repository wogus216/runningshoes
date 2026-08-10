import { describe, it, expect } from 'vitest';
import { hasFinalConsonant, withJosa } from '../korean';

describe('hasFinalConsonant', () => {
  it('한글 종성을 판정한다', () => {
    expect(hasFinalConsonant('카야노')).toBe(false); // 노 — 종성 없음
    expect(hasFinalConsonant('페가수스')).toBe(false); // 스 — 종성 없음
    expect(hasFinalConsonant('보스턴')).toBe(true); // 턴 — ㄴ
    expect(hasFinalConsonant('노바블라스트')).toBe(false); // 트 — 종성 없음
  });

  it('숫자는 읽는 소리로 판정한다', () => {
    // 받침 있음: 0 영 · 1 일 · 3 삼 · 6 육 · 7 칠 · 8 팔
    for (const d of ['0', '1', '3', '6', '7', '8']) expect(hasFinalConsonant(`모델 ${d}`)).toBe(true);
    // 받침 없음: 2 이 · 4 사 · 5 오 · 9 구
    for (const d of ['2', '4', '5', '9']) expect(hasFinalConsonant(`모델 ${d}`)).toBe(false);
  });

  it('알파벳은 L·M·N·R 만 받침이 있다', () => {
    expect(hasFinalConsonant('Evo SL')).toBe(true); // 엘
    expect(hasFinalConsonant('GTM')).toBe(true); // 엠
    expect(hasFinalConsonant('아디제로 SL2')).toBe(false); // 2 → 이
    expect(hasFinalConsonant('GTX')).toBe(false); // 엑스
    expect(hasFinalConsonant('맥스 X')).toBe(false);
  });
});

describe('withJosa', () => {
  it('실제 신발 이름에 맞는 조사를 붙인다', () => {
    // 이 두 줄이 이 파일이 존재하는 이유다 — 32/33 이 갈린다
    expect(withJosa('젤 카야노 32', '과/와')).toBe('젤 카야노 32와');
    expect(withJosa('젤 카야노 33', '과/와')).toBe('젤 카야노 33과');
  });

  it('네 가지 조사쌍을 모두 지원한다', () => {
    expect(withJosa('보스턴 13', '은/는')).toBe('보스턴 13은'); // 삼
    expect(withJosa('노바블라스트 6', '이/가')).toBe('노바블라스트 6이'); // 육
    expect(withJosa('페가수스 42', '을/를')).toBe('페가수스 42를'); // 이
    expect(withJosa('클리프톤 10', '과/와')).toBe('클리프톤 10과'); // 십 → ㅂ
  });
});
