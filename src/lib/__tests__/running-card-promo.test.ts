import { describe, it, expect } from 'vitest';
import { canAutoShow, hideForADay, markShown, HIDE_MS, type PromoStores } from '@/lib/running-card-promo';

function memoryStorage(): Storage {
  const map = new Map<string, string>();
  return {
    get length() { return map.size; },
    clear: () => map.clear(),
    getItem: (key) => map.get(key) ?? null,
    key: (i) => Array.from(map.keys())[i] ?? null,
    removeItem: (key) => { map.delete(key); },
    setItem: (key, value) => { map.set(key, String(value)); },
  };
}

function throwingStorage(): Storage {
  const fail = () => { throw new DOMException('blocked', 'SecurityError'); };
  return { length: 0, clear: fail, getItem: fail, key: fail, removeItem: fail, setItem: fail };
}

const stores = (): PromoStores => ({ session: memoryStorage(), local: memoryStorage() });
const NOW = Date.UTC(2026, 9, 15, 12);

describe('러닝카드 안내 카드 노출 상태', () => {
  it('처음 온 탭은 띄우고, 띄운 뒤에는 같은 탭에서 다시 띄우지 않는다', () => {
    const s = stores();
    expect(canAutoShow(s, NOW)).toBe(true);
    expect(markShown(s)).toBe(true);
    expect(canAutoShow(s, NOW)).toBe(false);
  });

  it('닫은 시각부터 24시간은 새 탭에서도 숨기고, 지나면 다시 띄운다', () => {
    const tabA = stores();
    hideForADay(tabA, NOW);
    const tabB: PromoStores = { session: memoryStorage(), local: tabA.local };
    expect(canAutoShow(tabB, NOW + HIDE_MS - 1)).toBe(false);
    expect(canAutoShow(tabB, NOW + HIDE_MS)).toBe(true);
  });

  it('값이 깨졌거나 저장소가 막혔으면 띄우지 않는다', () => {
    const s = stores();
    s.local.setItem('arb:running-card-promo:hidden-until', 'not-a-time');
    expect(canAutoShow(s, NOW)).toBe(false);

    const blocked: PromoStores = { session: throwingStorage(), local: throwingStorage() };
    expect(canAutoShow(blocked, NOW)).toBe(false);
    expect(canAutoShow(null, NOW)).toBe(false);
    // 세션 기록을 못 남기면 1회 제한을 지킬 수 없다 → 띄우지 않는다
    expect(markShown(blocked)).toBe(false);
    expect(() => hideForADay(blocked, NOW)).not.toThrow();
  });
});
