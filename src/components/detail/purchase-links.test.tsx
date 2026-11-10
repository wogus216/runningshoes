import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { shoes } from '@/lib/data/shoes';
import { PurchaseLinks } from './purchase-links';

describe('purchase evidence rendering', () => {
  it('keeps verified official stores visible, including the previously filtered domains', () => {
    for (const slug of ['diadora-atomo-star', 'diadora-frequenza-2', 'diadora-nucleo-2', 'diadora-mythos-blushield-volo-5', 'kiprun-kipstorm-elite', 'kiprun-kipsummit-max', 'under-armour-velociti-elite-2', 'under-armour-infinite-elite-2', 'on-cloudmonster-3-hyper-lightspray', 'on-cloudboom-strike-2-lightspray']) {
      const shoe = shoes.find(s => s.slug === slug)!;
      const official = shoe.purchaseLinks!.find(link => link.isOfficial)!;
      const output = renderToStaticMarkup(React.createElement(PurchaseLinks, { purchaseLinks: [official], shoeName: shoe.name, brand: shoe.brand }));
      expect(output, slug).toContain(new URL(official.url).hostname);
      expect(official.priceCheckedAt, slug).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(output, slug).toContain(`${official.priceCheckedAt} 확인`);
      expect(output, slug).not.toContain('undefined');
    }
  });

  it('does not show undated old prices as a current price comparison', () => {
    const output = renderToStaticMarkup(React.createElement(PurchaseLinks, {
      shoeName: 'fixture', brand: 'fixture', msrp: 300000,
      purchaseLinks: [{ store: '네이버', url: 'https://naver.me/example1', price: 111111 }, { store: '쿠팡', url: 'https://link.coupang.com/a/example2', price: 222222 }],
    }));
    expect(output).not.toContain('111,111');
    expect(output).not.toContain('222,222');
    expect(output).not.toContain('확인 가격 중 최저');
    expect(output).not.toContain('절약');
    expect(output).toContain('현재 가격·옵션 확인');
  });

  it('shows the mixed-generation selection condition at the purchase link', () => {
    const shoe = shoes.find(s => s.slug === 'new-balance-860-v15')!;
    const output = renderToStaticMarkup(React.createElement(PurchaseLinks, { purchaseLinks: shoe.purchaseLinks!, shoeName: shoe.name, brand: shoe.brand }));
    expect(output).toContain('860 V14·V15');
    expect(output).toContain('버전의 옵션·품번');
  });

  it('does not silently retain an unchecked price in the shoe catalog', () => {
    for (const shoe of shoes) for (const link of shoe.purchaseLinks ?? []) {
      if (link.price !== undefined) expect(link.priceCheckedAt, shoe.slug).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });
});
