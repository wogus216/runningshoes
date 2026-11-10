import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it, vi } from 'vitest';

vi.mock('next/link', () => ({ default: ({ href, children }: { href: string; children: React.ReactNode }) => createElement('a', { href }, children) }));
vi.mock('next/image', () => ({ default: () => null }));
vi.mock('@/lib/data/shoes', () => ({
  getCardShoes: () => [
    { slug: 'trail-low', brand: 'Test', name: 'Trail Low', category: '트레일', price: 150000, image: '/trail-low.webp' },
    { slug: 'trail-high', brand: 'Test', name: 'Trail High', category: '트레일', price: 280000, image: '/trail-high.webp' },
    { slug: 'road-cushion', brand: 'Test', name: 'Road Cushion', category: '쿠션화', price: 210000, image: '/road-cushion.webp' },
    { slug: 'road-daily', brand: 'Test', name: 'Road Daily', category: '데일리', price: 270000, image: '/road-daily.webp' },
  ],
}));
vi.mock('@/lib/data/gels', () => ({ getGels: () => [] }));

import { MarathonShoeBridge } from './shoe-bridge';

function render(excludeSlugs: string[] = []) {
  return renderToStaticMarkup(createElement(MarathonShoeBridge, { distances: ['울트라', '트레일'], eventName: '테스트', excludeSlugs }));
}

describe('대회 관련 러닝화 비교', () => {
  it('트레일 종목의 빈 가격 구간에 도로용 쿠션화를 채우지 않는다', () => {
    const html = render();
    expect(html).toContain('/shoes/trail-low');
    expect(html).toContain('/shoes/trail-high');
    expect(html).not.toContain('/shoes/road-cushion');
    expect(html).not.toContain('/shoes/road-daily');
  });

  it('트레일 후보가 모두 제외되면 도로화로 대체하지 않는다', () => {
    expect(render(['trail-low', 'trail-high'])).toBe('');
  });

  it('울트라라는 거리 분류만으로 트레일화를 섞지 않는다', () => {
    const html = renderToStaticMarkup(createElement(MarathonShoeBridge, { distances: ['울트라'], eventName: '테스트' }));
    expect(html).toContain('/shoes/road-cushion');
    expect(html).toContain('/shoes/road-daily');
    expect(html).not.toContain('/shoes/trail-low');
    expect(html).not.toContain('/shoes/trail-high');
  });

  it('표시 가격으로 입문자·기록 도전 적합성을 판정하지 않는다', () => {
    const html = render();
    expect(html).toContain('19만원 미만');
    expect(html).toContain('26만원 이상');
    expect(html).not.toContain('입문·완주');
    expect(html).not.toContain('기록 도전');
    expect(html).not.toContain('완주가 목표면');
  });
});
