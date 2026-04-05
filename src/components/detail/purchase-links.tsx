'use client';

import { ExternalLink, ShieldCheck } from 'lucide-react';
import type { PurchaseLink } from '@/types/shoe';
import { AffiliateDisclosure } from './affiliate-disclosure';

type PurchaseLinksProps = {
  purchaseLinks: PurchaseLink[];
  shoeName: string;
  brand: string;
};

// 스토어별 아이콘/색상
const storeStyles: Record<string, { bg: string; text: string }> = {
  '쿠팡': { bg: 'bg-[#f02c3e10]', text: 'text-[#f02c3e]' },
  '네이버': { bg: 'bg-[#03c7510]', text: 'text-[#03c75a]' },
  '공식몰': { bg: 'bg-stone-100', text: 'text-stone-700' },
  'ABC마트': { bg: 'bg-[#ff660010]', text: 'text-[#ff6600]' },
  '무신사': { bg: 'bg-[#00000010]', text: 'text-gray-900' },
  '기본': { bg: 'bg-gray-100', text: 'text-gray-700' },
};

function getStoreStyle(store: string) {
  return storeStyles[store] || storeStyles['기본'];
}

const ALLOWED_PURCHASE_DOMAINS = [
  'naver.me', 'naver.com', 'brand.naver.com',
  'coupang.com', 'link.coupang.com',
  'nike.com', 'adidas.co.kr', 'asics.co.kr',
  'nbkorea.com', 'hoka.com', 'brooksrunning.co.kr',
  'saucony.co.kr', 'on-running.com', 'kr.puma.com', 'mizunokorea.co.kr',
  'abcmart.co.kr', 'musinsa.com',
];

function isValidPurchaseUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return ALLOWED_PURCHASE_DOMAINS.some(domain => parsed.hostname === domain || parsed.hostname.endsWith('.' + domain));
  } catch {
    return false;
  }
}

export function PurchaseLinks({ purchaseLinks, shoeName, brand }: PurchaseLinksProps) {
  if (!purchaseLinks || purchaseLinks.length === 0) {
    return null;
  }

  // 공식몰 우선 정렬
  const sortedLinks = [...purchaseLinks].sort((a, b) => {
    if (a.isOfficial && !b.isOfficial) return -1;
    if (!a.isOfficial && b.isOfficial) return 1;
    return 0;
  });

  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">Where To Buy</p>
        <h2 className="flex items-center gap-3 text-2xl font-black tracking-tight text-slate-950">
          <ExternalLink className="h-6 w-6 text-stone-600" />
          구매처
        </h2>
        <p className="text-sm leading-relaxed text-slate-600">{brand} {shoeName}의 구매 링크를 공식몰 우선으로 정리했습니다.</p>
      </div>

      <AffiliateDisclosure purchaseLinks={purchaseLinks} />

      <div className="grid gap-3 sm:grid-cols-2">
        {sortedLinks.filter(link => isValidPurchaseUrl(link.url)).map((link, index) => {
          const style = getStoreStyle(link.store);
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={`
                flex items-center justify-between rounded-[24px] border p-4
                transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-30px_rgba(15,23,42,0.45)]
                ${style.bg} border-current/10
              `}
            >
              <div className="flex items-center gap-3">
                <span className={`font-bold ${style.text}`}>
                  {link.store}
                </span>
                {link.isOfficial && (
                  <span className="inline-flex items-center gap-1 text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                    <ShieldCheck className="h-3 w-3" />
                    공식
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {link.price && (
                  <span className="font-semibold text-gray-900">
                    {link.price.toLocaleString()}원
                  </span>
                )}
                <ExternalLink className="h-4 w-4 text-gray-400" />
              </div>
            </a>
          );
        })}
      </div>

      <div className="rounded-[24px] border border-stone-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,248,246,0.92))] p-4 text-sm text-gray-600">
        <p className="mb-2 font-medium text-gray-700">구매 전 확인하세요</p>
        <ul className="space-y-1 text-xs">
          <li>- 가격은 변동될 수 있으며, 실제 판매가는 각 스토어에서 확인하세요.</li>
          <li>- 정품 여부는 판매처에서 보증하며, 본 사이트는 책임지지 않습니다.</li>
          <li>- 가능하면 매장에서 착화 후 사이즈를 확인하세요.</li>
        </ul>
      </div>
    </section>
  );
}
