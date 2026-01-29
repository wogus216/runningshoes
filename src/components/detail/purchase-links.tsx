'use client';

import Link from 'next/link';
import { ExternalLink, ShieldCheck, Info } from 'lucide-react';
import type { PurchaseLink } from '@/types/shoe';

type PurchaseLinksProps = {
  purchaseLinks: PurchaseLink[];
  shoeName: string;
  brand: string;
};

// 스토어별 아이콘/색상
const storeStyles: Record<string, { bg: string; text: string }> = {
  '쿠팡': { bg: 'bg-[#f02c3e10]', text: 'text-[#f02c3e]' },
  '네이버': { bg: 'bg-[#03c7510]', text: 'text-[#03c75a]' },
  '공식몰': { bg: 'bg-[#4facfe10]', text: 'text-[#4facfe]' },
  'ABC마트': { bg: 'bg-[#ff660010]', text: 'text-[#ff6600]' },
  '무신사': { bg: 'bg-[#00000010]', text: 'text-gray-900' },
  '기본': { bg: 'bg-gray-100', text: 'text-gray-700' },
};

function getStoreStyle(store: string) {
  return storeStyles[store] || storeStyles['기본'];
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
    <section className="space-y-4">
      <h2 className="text-2xl font-bold flex items-center gap-3">
        <ExternalLink className="h-6 w-6 text-[#4facfe]" />
        구매처
      </h2>

      {/* 제휴 링크 고지 (공정거래위원회 지침 준수) */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-2">
        <Info className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
        <p className="text-xs text-amber-700 leading-relaxed">
          아래 링크를 통해 제품을 구매하실 경우, <strong>러닝의 모든것</strong>은 파트너스 활동의 일환으로
          일정액의 수수료를 제공받을 수 있습니다. 구매자에게 추가되는 비용은 전혀 없습니다.{' '}
          <Link href="/legal" className="underline hover:text-amber-900">
            자세히 보기
          </Link>
        </p>
      </div>

      {/* 구매 링크 목록 */}
      <div className="grid gap-3 sm:grid-cols-2">
        {sortedLinks.map((link, index) => {
          const style = getStoreStyle(link.store);
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={`
                flex items-center justify-between p-4 rounded-xl border-2
                transition-all hover:shadow-md hover:scale-[1.02]
                ${style.bg} border-current/10
              `}
            >
              <div className="flex items-center gap-3">
                <span className={`font-bold ${style.text}`}>
                  {link.store}
                </span>
                {link.isOfficial && (
                  <span className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
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

      {/* 구매 안내 */}
      <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
        <p className="font-medium text-gray-700 mb-2">구매 전 확인하세요</p>
        <ul className="space-y-1 text-xs">
          <li>- 가격은 변동될 수 있으며, 실제 판매가는 각 스토어에서 확인하세요.</li>
          <li>- 정품 여부는 판매처에서 보증하며, 본 사이트는 책임지지 않습니다.</li>
          <li>- 가능하면 매장에서 착화 후 사이즈를 확인하세요.</li>
        </ul>
      </div>
    </section>
  );
}
