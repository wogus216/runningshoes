import { describe, it, expect } from 'vitest';
import { buildElevationPath } from '@/lib/blog/elevation-path';

describe('buildElevationPath', () => {
  it('점이 2개 미만이면 빈 경로를 준다', () => {
    const r = buildElevationPath([{ km: 0, m: 10 }], 100, 40);
    expect(r.line).toBe('');
    expect(r.area).toBe('');
  });

  it('첫 점은 왼쪽 끝, 마지막 점은 오른쪽 끝에 놓는다', () => {
    const r = buildElevationPath(
      [{ km: 0, m: 0 }, { km: 10, m: 0 }],
      100,
      40,
    );
    expect(r.line.startsWith('M 0')).toBe(true);
    expect(r.line).toContain('100');
  });

  it('최고점은 위(y=0), 최저점은 아래(y=height)에 놓는다', () => {
    const r = buildElevationPath(
      [{ km: 0, m: 0 }, { km: 5, m: 50 }, { km: 10, m: 0 }],
      100,
      40,
    );
    expect(r.minM).toBe(0);
    expect(r.maxM).toBe(50);
    // 중간 점(최고 고도)의 y가 0이어야 한다
    expect(r.line).toContain('50 0');
  });

  it('고도가 전부 같으면 0으로 나누지 않고 가운데 선을 그린다', () => {
    const r = buildElevationPath(
      [{ km: 0, m: 20 }, { km: 10, m: 20 }],
      100,
      40,
    );
    expect(r.line).toContain('20');
    expect(Number.isNaN(Number(r.line.match(/M 0 ([\d.]+)/)?.[1]))).toBe(false);
  });

  it('area 경로는 바닥까지 닫는다', () => {
    const r = buildElevationPath(
      [{ km: 0, m: 0 }, { km: 10, m: 10 }],
      100,
      40,
    );
    expect(r.area.endsWith('Z')).toBe(true);
    expect(r.area).toContain('40'); // 바닥 y
  });
});
