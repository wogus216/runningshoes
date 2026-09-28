'use client';

import { useEffect } from 'react';
import { buildPurchaseClick, trackPurchaseClick } from '@/lib/analytics';

/** 한 번만 설치해 서버 렌더된 신발 링크와 블로그 HTML CTA를 함께 추적한다. */
export function PurchaseClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest('a');
      if (!anchor) return;

      const isLegacyBlogCta = anchor.matches('.affiliate-btn') && !!anchor.closest('[data-blog-content]');
      if (!anchor.hasAttribute('data-purchase-link') && !isLegacyBlogCta) return;

      const context = anchor.closest<HTMLElement>('[data-purchase-product-type]');
      const productType = anchor.dataset.purchaseProductType ?? context?.dataset.purchaseProductType ?? (isLegacyBlogCta ? 'shoe' : '');
      if (productType !== 'shoe' && productType !== 'apparel') return;

      const legacyName = anchor.querySelector('.affiliate-btn-product')?.textContent?.trim()
        .replace(/\s+(?:최저가|구매|정보|상세)\s*→?$/, '');
      const productName = (anchor.dataset.purchaseProductName ?? context?.dataset.purchaseProductName ?? legacyName)?.trim();
      if (!productName) return;

      const purchaseClick = buildPurchaseClick({
        href: anchor.href,
        siteOrigin: window.location.origin,
        product_type: productType,
        product_name: productName,
        product_id: anchor.dataset.purchaseProductId ?? context?.dataset.purchaseProductId,
        brand: anchor.dataset.purchaseBrand ?? context?.dataset.purchaseBrand,
        apparel_category: anchor.dataset.purchaseApparelCategory ?? context?.dataset.purchaseApparelCategory,
        store: anchor.dataset.purchaseStore ?? anchor.querySelector('.affiliate-btn-store')?.textContent?.trim() ?? '',
        page_slug: window.location.pathname.split('/').filter(Boolean).at(-1) ?? 'home',
        button_position: anchor.dataset.purchasePlacement ?? (isLegacyBlogCta ? 'blog_cta' : 'unspecified'),
      });
      if (purchaseClick) trackPurchaseClick(purchaseClick);
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
