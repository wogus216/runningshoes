/**
 * 한국어 조사 선택.
 *
 * 신발 이름이 대부분 숫자나 알파벳으로 끝나서(`카야노 33`, `Evo SL`, `1080 V15`)
 * 조사를 고정 문자열로 쓰면 반드시 틀린다 — `32`는 "이"로 끝나 받침이 없고(32와),
 * `33`은 "삼"으로 끝나 받침이 있다(33과). 그래서 `과(와)` 병기로 도망친 곳이 있었는데,
 * 334개 비교 페이지 본문과 JSON-LD에 그대로 나가고 있었다.
 *
 * 판정은 **읽는 소리의 종성**을 본다. 한글은 유니코드 계산, 숫자·알파벳은 읽기 표로 처리한다.
 */

/** 숫자를 한국어로 읽었을 때 받침이 있는가. 0 영·1 일·3 삼·6 육·7 칠·8 팔 */
const DIGIT_HAS_FINAL: Record<string, boolean> = {
  '0': true, // 영 → ㅇ
  '1': true, // 일 → ㄹ
  '2': false, // 이
  '3': true, // 삼 → ㅁ
  '4': false, // 사
  '5': false, // 오
  '6': true, // 육 → ㄱ
  '7': true, // 칠 → ㄹ
  '8': true, // 팔 → ㄹ
  '9': false, // 구
};

/** 알파벳을 한국어로 읽었을 때 받침이 있는 것만. L 엘·M 엠·N 엔·R 아르 */
const LATIN_WITH_FINAL = new Set(['l', 'm', 'n', 'r']);

/**
 * 마지막 글자에 받침이 있는지 판정한다. 판정할 수 없으면 `false`(받침 없음)로 본다 —
 * 괄호·따옴표 같은 기호로 끝나는 이름은 현재 데이터에 없다.
 */
export function hasFinalConsonant(word: string): boolean {
  const last = word.trim().slice(-1);
  if (!last) return false;

  const code = last.charCodeAt(0);

  // 한글 음절: (코드 - 0xAC00) % 28 이 0이 아니면 종성이 있다
  if (code >= 0xac00 && code <= 0xd7a3) return (code - 0xac00) % 28 !== 0;

  if (last >= '0' && last <= '9') return DIGIT_HAS_FINAL[last];

  const lower = last.toLowerCase();
  if (lower >= 'a' && lower <= 'z') return LATIN_WITH_FINAL.has(lower);

  return false;
}

const PARTICLES = {
  '과/와': ['과', '와'],
  '은/는': ['은', '는'],
  '이/가': ['이', '가'],
  '을/를': ['을', '를'],
} as const;

export type ParticlePair = keyof typeof PARTICLES;

/** 단어에 알맞은 조사를 붙여 돌려준다 — `withJosa('카야노 33', '과/와')` → `'카야노 33과'` */
export function withJosa(word: string, pair: ParticlePair): string {
  const [withFinal, withoutFinal] = PARTICLES[pair];
  return `${word}${hasFinalConsonant(word) ? withFinal : withoutFinal}`;
}
