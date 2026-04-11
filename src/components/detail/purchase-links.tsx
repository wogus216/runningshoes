import { ExternalLink, ShieldCheck, TrendingDown, Sparkles } from 'lucide-react';
import type { PurchaseLink } from '@/types/shoe';
import { AffiliateDisclosure } from './affiliate-disclosure';

type PurchaseLinksProps = {
  purchaseLinks: PurchaseLink[];
  shoeName: string;
  brand: string;
  msrp?: number;
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

export function PurchaseLinks({ purchaseLinks, shoeName, brand, msrp }: PurchaseLinksProps) {
  if (!purchaseLinks || purchaseLinks.length === 0) {
    return null;
  }

  const validLinks = purchaseLinks.filter((link) => isValidPurchaseUrl(link.url));
  if (validLinks.length === 0) return null;

  // 최저가 식별
  const pricedLinks = validLinks.filter((l) => typeof l.price === 'number');
  const lowestPrice = pricedLinks.length > 0
    ? Math.min(...pricedLinks.map((l) => l.price as number))
    : undefined;
  const cheapestLink = lowestPrice !== undefined
    ? pricedLinks.find((l) => l.price === lowestPrice)
    : undefined;

  // 정렬: 최저가 → 공식 → 나머지 (가격순)
  const sortedLinks = [...validLinks].sort((a, b) => {
    if (a === cheapestLink) return -1;
    if (b === cheapestLink) return 1;
    if (a.isOfficial && !b.isOfficial) return -1;
    if (!a.isOfficial && b.isOfficial) return 1;
    const ap = a.price ?? Number.MAX_SAFE_INTEGER;
    const bp = b.price ?? Number.MAX_SAFE_INTEGER;
    return ap - bp;
  });

  const savings = msrp && lowestPrice && lowestPrice < msrp ? msrp - lowestPrice : 0;
  const savingsPct = savings && msrp ? Math.round((savings / msrp) * 100) : 0;

  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">Where To Buy</p>
        <h2 className="flex items-center gap-3 text-2xl font-black tracking-tight text-slate-950">
          <ExternalLink className="h-6 w-6 text-stone-600" />
          스토어별 가격 비교
        </h2>
        <p className="text-sm leading-relaxed text-slate-600">
          {brand} {shoeName}의 {validLinks.length}개 스토어 가격을 한눈에 비교하세요.
        </p>
      </div>

      {cheapestLink && lowestPrice !== undefined && (
        <a
          href={cheapestLink.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="block rounded-[28px] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-5 shadow-[0_20px_40px_-28px_rgba(16,185,129,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-28px_rgba(16,185,129,0.45)] md:p-6"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                <Sparkles className="h-3 w-3" />
                최저가
              </div>
              <p className="mt-3 text-xs uppercase tracking-wide text-emerald-700 font-semibold">
                {cheapestLink.store} {cheapestLink.isOfficial ? '공식몰' : ''}
              </p>
              <p className="mt-1 text-3xl md:text-4xl font-black text-slate-950">
                {lowestPrice.toLocaleString()}<span className="text-xl">원</span>
              </p>
              {savings > 0 && (
                <p className="mt-1 flex items-center gap-1 text-sm text-emerald-700 font-semibold">
                  <TrendingDown className="h-4 w-4" />
                  정가 대비 {savings.toLocaleString()}원 ({savingsPct}%) 절약
                </p>
              )}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition group-hover:bg-slate-800">
              {cheapestLink.store}에서 구매
              <ExternalLink className="h-4 w-4" />
            </div>
          </div>
        </a>
      )}

      <AffiliateDisclosure purchaseLinks={purchaseLinks} />

      <div className="overflow-hidden rounded-[24px] border border-border bg-white">
        <div className="hidden sm:grid grid-cols-[1fr_auto_auto] gap-4 bg-surface px-5 py-3 text-xs font-semibold uppercase tracking-wider text-tertiary">
          <div>스토어</div>
          <div className="text-right">가격</div>
          <div className="w-20 text-right">이동</div>
        </div>
        <ul className="divide-y divide-border">
          {sortedLinks.map((link, index) => {
            const style = getStoreStyle(link.store);
            const isCheapest = link === cheapestLink;
            return (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={`grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_auto_auto] gap-3 sm:gap-4 px-4 py-4 sm:px-5 transition hover:bg-surface/50 ${
                    isCheapest ? 'bg-emerald-50/50' : ''
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className={`font-bold ${style.text}`}>{link.store}</span>
                    {link.isOfficial && (
                      <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full font-semibold">
                        <ShieldCheck className="h-3 w-3" />
                        공식
                      </span>
                    )}
                    {isCheapest && (
                      <span className="text-[10px] bg-emerald-600 text-white px-1.5 py-0.5 rounded-full font-semibold">
                        최저가
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    {link.price ? (
                      <span className={`font-bold ${isCheapest ? 'text-emerald-700' : 'text-slate-950'}`}>
                        {link.price.toLocaleString()}원
                      </span>
                    ) : (
                      <span className="text-xs text-tertiary">가격 확인</span>
                    )}
                  </div>
                  <div className="hidden sm:flex w-20 items-center justify-end text-slate-400">
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="rounded-[20px] border border-stone-900/10 bg-surface/60 p-4 text-xs text-slate-600">
        <p className="mb-2 font-semibold text-slate-700">구매 전 확인</p>
        <ul className="space-y-1">
          <li>- 가격은 수시로 변동됩니다. 실제 판매가는 각 스토어에서 확인하세요.</li>
          <li>- 정품 여부는 판매처 보증 기준이며 본 사이트는 책임지지 않습니다.</li>
          <li>- 사이즈가 걱정이라면 매장 착화 후 온라인 주문을 권장합니다.</li>
        </ul>
      </div>
    </section>
  );
}
