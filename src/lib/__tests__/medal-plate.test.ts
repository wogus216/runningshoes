import { beforeAll, describe, expect, it } from 'vitest';
import * as Relief from '@/components/running-card/medal/medal3d-relief.js';
import { RUNNER_CHARACTERS } from '@/lib/runner-analysis/characters';
import { getCharacterTitle, PRESENTATION_IDS } from '@/lib/runner-analysis/presentation';
import { RasterCanvas } from './support/raster-canvas';

// 여덟 번째 각인(S3)의 명판 맵: 같은 인물이면 같은 픽셀이어야 한다. 부조 모듈을 워커 밖(Node)에서 그대로 돌린다.
// 캔버스는 테스트 전용 소프트웨어 캔버스라 브라우저와 픽셀이 같지는 않다. 여기서 보는 것은 '같은 입력 → 같은 출력'과
// 모듈 상태(재사용 캔버스·잡음 캐시·단위 변수)가 다음 판으로 새지 않는지다. 실제 글꼴·워커 대 메인 스레드는 실브라우저에서 본다.
beforeAll(() => {
  Object.assign(globalThis, { OffscreenCanvas: RasterCanvas });
});

type Plate = ReturnType<typeof Relief.plate>;
// 명판은 금속 채널이 늘 있다(maps 의 metal 인자).
const metalOf = (p: Plate) => p.metal as Uint8Array;
// 네 맵을 이어 FNV-1a 32비트로 줄인다 — 다르면 어느 맵이 다른지 보이게 맵별로 낸다.
function digest(p: Plate) {
  const fnv = (a: ArrayLike<number>) => { let h = 2166136261; for (let i = 0; i < a.length; i++) h = Math.imul(h ^ a[i], 16777619); return (h >>> 0).toString(16); };
  return { size: `${p.W}x${p.Hh}`, polish: fnv(p.polish), normal: fnv(p.normal), orm: fnv(p.orm), metal: fnv(metalOf(p)) };
}

// 가문마다 대표 인물 한 명: characters.ts 에서 그 가문의 첫 인물(가문 이름과 같은 신)이다.
const HOUSES = Array.from(new Set(RUNNER_CHARACTERS.map(c => c.house)));
const LEADS = HOUSES.map(house => RUNNER_CHARACTERS.find(c => c.house === house)!);
const figureOf = (c: (typeof RUNNER_CHARACTERS)[number]) => ({ name: c.name, house: c.house });

describe('명판 가문 기호', () => {
  it('36명의 12가문마다 기호가 있고, 남는 기호가 없다', () => {
    expect(HOUSES).toHaveLength(12);
    expect(Object.keys(Relief.SIGNS).sort()).toEqual([...HOUSES].sort());
  });
});

describe('명판 맵 결정성', () => {
  it('12가문 대표 인물: 두 번 만들면 같은 픽셀이다(사이에 다른 명판·동전을 끼워도)', () => {
    const first = LEADS.map(c => digest(Relief.plate(figureOf(c))));
    // 모듈이 다시 쓰는 캔버스·캐시를 흔든다: 동전 면 하나, 28일 명판, 그리고 거꾸로 된 순서.
    Relief.coin('goal', { distance: 150, count: 8, pace: 330, longest: 30, hard: 2, goal: 'race', days: [1, 3] }, 'struck', 256);
    Relief.plate();
    const second = [...LEADS].reverse().map(c => digest(Relief.plate(figureOf(c)))).reverse();
    LEADS.forEach((c, i) => expect(second[i], `${c.house} · ${c.name}`).toEqual(first[i]));
  }, 120_000);

  it('가문이 다르면 픽셀이 다르고, 기호가 실제로 금속으로 새겨진다', () => {
    const plates = LEADS.map(c => Relief.plate(figureOf(c)));
    const keys = plates.map(p => digest(p).metal);
    expect(new Set(keys).size).toBe(12);
    // 기호 자리(명판 왼쪽 약 1/3)의 금속 픽셀 비율: 비어 있지 않고, 자리를 통째로 칠하지도 않는다.
    plates.forEach((p, i) => {
      let on = 0, n = 0;
      for (let y = 0; y < p.Hh; y++) for (let x = Math.round(p.W * .05); x < Math.round(p.W * .33); x++) { n++; if (metalOf(p)[y * p.W + x] > 127) on++; }
      const share = on / n;
      expect(share, LEADS[i].house).toBeGreaterThan(.08);
      expect(share, LEADS[i].house).toBeLessThan(.6);
    });
  }, 120_000);

  it('같은 가문이라도 인물이 다르면 이름 자리가 달라진다', () => {
    const [a, b] = RUNNER_CHARACTERS.filter(c => c.house === '제우스');
    expect(digest(Relief.plate(figureOf(a))).metal).not.toBe(digest(Relief.plate(figureOf(b))).metal);
  }, 60_000);

  it('판정 전 명판(지난 28일)도 두 번 만들면 같고, 인물 명판과는 다르다', () => {
    const blank = digest(Relief.plate());
    expect(digest(Relief.plate())).toEqual(blank);
    expect(digest(Relief.plate(figureOf(LEADS[0]))).metal).not.toBe(blank.metal);
  }, 60_000);
});

describe('칭호', () => {
  it('36명 모두 칭호가 하나씩 있다', () => {
    expect([...PRESENTATION_IDS].sort()).toEqual(RUNNER_CHARACTERS.map(c => c.id).sort());
    for (const c of RUNNER_CHARACTERS) expect(getCharacterTitle(c.id).length).toBeGreaterThan(0);
  });
  it('없는 인물은 조용히 넘기지 않는다', () => {
    expect(() => getCharacterTitle('nobody')).toThrow();
  });
});
