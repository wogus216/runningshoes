import { beforeAll, describe, expect, it } from 'vitest';
import * as Relief from '@/components/running-card/medal/medal3d-relief.js';
import { CHARACTER_SIGNS } from '@/components/running-card/medal/medal3d-character-signs.js';
import { RUNNER_CHARACTERS } from '@/lib/runner-analysis/characters';
import { getCharacterTitle, PRESENTATION_IDS } from '@/lib/runner-analysis/presentation';
import { RasterCanvas } from './support/raster-canvas';

// 인물별 표식(S7)의 명판 맵: 같은 인물이면 같은 픽셀이어야 한다. 부조 모듈을 워커 밖(Node)에서 그대로 돌린다.
// 캔버스는 테스트 전용 소프트웨어 캔버스라 브라우저와 픽셀이 같지는 않다. 여기서 보는 것은 '같은 입력 → 같은 출력'과
// 모듈 상태(재사용 캔버스·잡음 캐시·단위 변수)가 다음 판으로 새지 않는지다. 실제 표식·워커 대 메인 스레드는 실브라우저에서 본다.
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

const figureOf = (c: (typeof RUNNER_CHARACTERS)[number]) => ({ id: c.id, name: c.name, house: c.house });
const smallPlate = (figure: ReturnType<typeof figureOf>) => Relief.plate(figure, 512, 169);

describe('명판 인물 표식', () => {
  it('36명 각각에 이름이 있는 표식이 있고, 남는 표식이 없다', () => {
    expect(Object.keys(CHARACTER_SIGNS).sort()).toEqual(RUNNER_CHARACTERS.map(c => c.id).sort());
    expect(Object.values(CHARACTER_SIGNS).every(sign => sign.name.length > 0)).toBe(true);
  });

  it('각인 알림과 메달 설명이 해당 인물의 표식을 말한다', () => {
    expect(Relief.plateStatus({ id: 'apollo', name: '아폴론' })).toBe('명판에 아폴론의 월계관 표식을 새겼어요.');
    expect(Relief.plateStatus({ id: 'orion', name: '오리온' })).toBe('명판에 오리온의 허리띠의 세 별 표식을 새겼어요.');
    const lines = RUNNER_CHARACTERS.map(c => Relief.plateStatus(figureOf(c)));
    expect(lines.filter(line => /undefined/.test(line))).toEqual([]);
  });
});

describe('명판 맵 결정성', () => {
  it('36명 모두: 두 번 만들면 같은 픽셀이다(사이에 다른 명판·동전을 끼워도)', () => {
    const first = RUNNER_CHARACTERS.map(c => digest(smallPlate(figureOf(c))));
    // 모듈이 다시 쓰는 캔버스·캐시를 흔든다: 동전 면 하나, 28일 명판, 그리고 거꾸로 된 순서.
    Relief.coin('goal', { distance: 150, count: 8, pace: 330, longest: 30, hard: 2, goal: 'race', days: [1, 3] }, 'struck', 256);
    Relief.plate();
    const second = [...RUNNER_CHARACTERS].reverse().map(c => digest(smallPlate(figureOf(c)))).reverse();
    RUNNER_CHARACTERS.forEach((c, i) => expect(second[i], c.name).toEqual(first[i]));
  }, 120_000);

  it('36개 표식의 금속 맵이 서로 다르고, 가운데가 실제로 새겨진다', () => {
    const plates = RUNNER_CHARACTERS.map(c => smallPlate(figureOf(c)));
    const keys = plates.map(p => digest(p).metal);
    expect(new Set(keys).size).toBe(36);
    // 가운데 표식 자리의 금속 픽셀 비율: 빈 판이나 통째로 칠한 판이 없어야 한다.
    plates.forEach((p, i) => {
      let on = 0, n = 0;
      for (let y = Math.round(p.Hh * .1); y < Math.round(p.Hh * .9); y++)
        for (let x = Math.round(p.W * .3); x < Math.round(p.W * .7); x++) { n++; if (metalOf(p)[y * p.W + x] > 127) on++; }
      const share = on / n;
      expect(share, RUNNER_CHARACTERS[i].name).toBeGreaterThan(.04);
      expect(share, RUNNER_CHARACTERS[i].name).toBeLessThan(.7);
    });
  }, 120_000);

  it('같은 가문이라도 인물이 다르면 표식이 달라진다', () => {
    const [a, b] = RUNNER_CHARACTERS.filter(c => c.house === '제우스');
    expect(digest(smallPlate(figureOf(a))).metal).not.toBe(digest(smallPlate(figureOf(b))).metal);
  }, 60_000);

  it('명판에는 이름을 쓰지 않는다: 같은 인물 ID면 표시 이름·가문을 바꿔도 같은 금속이다', () => {
    const nike = figureOf(RUNNER_CHARACTERS.find(c => c.id === 'nike')!);
    expect(digest(smallPlate(nike)).metal).toBe(digest(smallPlate({ ...nike, name: '다른 이름', house: '제우스' })).metal);
  }, 60_000);

  it('판정 전 명판(지난 28일)도 두 번 만들면 같고, 인물 명판과는 다르다', () => {
    const blank = digest(Relief.plate());
    expect(digest(Relief.plate())).toEqual(blank);
    expect(digest(Relief.plate(figureOf(RUNNER_CHARACTERS[0]))).metal).not.toBe(blank.metal);
  }, 60_000);

  it('알 수 없는 인물 ID는 빈 명판으로 통과시키지 않는다', () => {
    expect(() => Relief.plate({ id: 'nobody', name: '없는 인물', house: '제우스' })).toThrow('Unknown medal figure');
  });
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
