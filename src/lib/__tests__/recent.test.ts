import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { recordShoeView, recordCompare, recordRecommend, readResume, clearResume } from '../recent';

type StorageLike = {
  getItem: (k: string) => string | null;
  setItem: (k: string, v: string) => void;
  removeItem: (k: string) => void;
};

type TestGlobal = Omit<typeof globalThis, 'window'> & { window?: { localStorage: StorageLike } };

function memoryStorage(): StorageLike {
  const m = new Map<string, string>();
  return {
    getItem: (k: string) => m.get(k) ?? null,
    setItem: (k: string, v: string) => {
      m.set(k, v);
    },
    removeItem: (k: string) => {
      m.delete(k);
    },
  };
}

const VALID = new Set(['asics-novablast-6', 'nike-pegasus-42', 'nike-vomero-18']);

describe('recent', () => {
  beforeEach(() => {
    (globalThis as TestGlobal).window = { localStorage: memoryStorage() };
  });

  it('기록이 없으면 전부 null을 반환한다', () => {
    expect(readResume(VALID)).toEqual({ shoe: null, compare: null, recommend: null });
  });

  it('본 신발을 기록하고 읽는다', () => {
    recordShoeView({ slug: 'asics-novablast-6', name: '노바블라스트 6', category: '데일리' });
    expect(readResume(VALID).shoe?.slug).toBe('asics-novablast-6');
  });

  it('유효하지 않은 slug는 제외한다', () => {
    recordShoeView({ slug: 'deleted-shoe', name: '삭제됨', category: '데일리' });
    expect(readResume(VALID).shoe).toBeNull();
  });

  it('비교 항목 중 하나라도 유효하지 않으면 제외한다', () => {
    recordCompare([
      { slug: 'nike-pegasus-42', name: '페가수스 42' },
      { slug: 'deleted-shoe', name: '삭제됨' },
    ]);
    expect(readResume(VALID).compare).toBeNull();
  });

  it('비교 항목이 모두 유효하면 반환한다', () => {
    recordCompare([
      { slug: 'nike-pegasus-42', name: '페가수스 42' },
      { slug: 'nike-vomero-18', name: '보메로 18' },
    ]);
    expect(readResume(VALID).compare?.shoes.map((s) => s.slug)).toEqual([
      'nike-pegasus-42',
      'nike-vomero-18',
    ]);
  });

  // 비교 UI는 4개까지 허용한다. 2개일 때만 기록하면 3~4개를 고른 사용자에게 카드가 안 뜬다.
  it('비교 항목 3~4개도 기록한다', () => {
    recordCompare([
      { slug: 'nike-pegasus-42', name: '페가수스 42' },
      { slug: 'nike-vomero-18', name: '보메로 18' },
      { slug: 'asics-novablast-6', name: '노바블라스트 6' },
    ]);
    expect(readResume(VALID).compare?.shoes).toHaveLength(3);
  });

  it('비교 항목이 1개뿐이면 기록하지 않는다', () => {
    recordCompare([{ slug: 'nike-pegasus-42', name: '페가수스 42' }]);
    expect(readResume(VALID).compare).toBeNull();
  });

  it('구 스키마({ slugs: [...] })로 저장된 값은 제외한다', () => {
    (globalThis as TestGlobal).window?.localStorage.setItem(
      'arb:recent:compare',
      JSON.stringify({ slugs: ['nike-pegasus-42', 'nike-vomero-18'], at: Date.now() }),
    );
    expect(readResume(VALID).compare).toBeNull();
  });

  it('추천 요약을 기록하고 읽는다', () => {
    recordRecommend('넓은 발볼 · 데일리 · 20만원 이하');
    expect(readResume(VALID).recommend?.summary).toBe('넓은 발볼 · 데일리 · 20만원 이하');
  });

  it('clearResume는 모든 기록을 지운다', () => {
    recordShoeView({ slug: 'asics-novablast-6', name: '노바블라스트 6', category: '데일리' });
    recordRecommend('테스트');
    clearResume();
    expect(readResume(VALID)).toEqual({ shoe: null, compare: null, recommend: null });
  });

  it('저장값이 깨져 있어도 예외를 던지지 않는다', () => {
    (globalThis as TestGlobal).window?.localStorage.setItem('arb:recent:shoe', '{깨진 JSON');
    expect(() => readResume(VALID)).not.toThrow();
    expect(readResume(VALID).shoe).toBeNull();
  });

  it('저장된 필드 타입이 스키마와 다르면(slug 누락) 제외한다', () => {
    (globalThis as TestGlobal).window?.localStorage.setItem(
      'arb:recent:shoe',
      JSON.stringify({ name: '이름만 있음', category: '데일리', at: Date.now() }),
    );
    expect(readResume(VALID).shoe).toBeNull();
  });

  it('비교 기록의 shoes가 배열이 아니면 제외한다', () => {
    (globalThis as TestGlobal).window?.localStorage.setItem(
      'arb:recent:compare',
      JSON.stringify({ shoes: 'nike-pegasus-42', at: Date.now() }),
    );
    expect(readResume(VALID).compare).toBeNull();
  });
});

describe('recent — SSR/예외 환경', () => {
  const original = (globalThis as TestGlobal).window;

  afterEach(() => {
    if (original === undefined) {
      delete (globalThis as TestGlobal).window;
    } else {
      (globalThis as TestGlobal).window = original;
    }
  });

  it('window가 없으면(SSR) 읽기는 빈 ResumeData를, 쓰기는 예외 없이 무시한다', () => {
    delete (globalThis as TestGlobal).window;
    expect(typeof window).toBe('undefined');

    expect(() =>
      recordShoeView({ slug: 'asics-novablast-6', name: '노바블라스트 6', category: '데일리' }),
    ).not.toThrow();
    expect(() =>
      recordCompare([
        { slug: 'nike-pegasus-42', name: '페가수스 42' },
        { slug: 'nike-vomero-18', name: '보메로 18' },
      ]),
    ).not.toThrow();
    expect(() => recordRecommend('테스트')).not.toThrow();
    expect(() => clearResume()).not.toThrow();
    expect(readResume(VALID)).toEqual({ shoe: null, compare: null, recommend: null });
  });

  it('localStorage 접근 자체가 예외를 던지면(사파리 프라이빗 모드) 조용히 무시한다', () => {
    (globalThis as TestGlobal).window = {
      get localStorage(): StorageLike {
        throw new DOMException('The operation is insecure.', 'SecurityError');
      },
    };

    expect(() =>
      recordShoeView({ slug: 'asics-novablast-6', name: '노바블라스트 6', category: '데일리' }),
    ).not.toThrow();
    expect(readResume(VALID)).toEqual({ shoe: null, compare: null, recommend: null });
    expect(() => clearResume()).not.toThrow();
  });

  it('setItem이 예외를 던지면(용량 초과) 기록은 조용히 실패하고 앱은 죽지 않는다', () => {
    (globalThis as TestGlobal).window = {
      localStorage: {
        getItem: () => null,
        setItem: () => {
          throw new DOMException('Quota exceeded', 'QuotaExceededError');
        },
        removeItem: () => {},
      },
    };

    expect(() =>
      recordShoeView({ slug: 'asics-novablast-6', name: '노바블라스트 6', category: '데일리' }),
    ).not.toThrow();
  });

  it('getItem이 예외를 던지면 읽기는 null로 취급한다', () => {
    (globalThis as TestGlobal).window = {
      localStorage: {
        getItem: () => {
          throw new Error('boom');
        },
        setItem: () => {},
        removeItem: () => {},
      },
    };

    expect(() => readResume(VALID)).not.toThrow();
    expect(readResume(VALID)).toEqual({ shoe: null, compare: null, recommend: null });
  });

  it('removeItem이 예외를 던져도 clearResume은 나머지 키를 계속 지운다', () => {
    const removed: string[] = [];
    (globalThis as TestGlobal).window = {
      localStorage: {
        getItem: () => null,
        setItem: () => {},
        removeItem: (k: string) => {
          if (k === 'arb:recent:shoe') throw new Error('boom');
          removed.push(k);
        },
      },
    };

    expect(() => clearResume()).not.toThrow();
    expect(removed).toEqual(['arb:recent:compare', 'arb:recent:recommend']);
  });
});
