import Link from 'next/link';
import { Info } from 'lucide-react';

interface PurchaseLinkLike {
  url: string;
  store?: string;
}

/**
 * 쿠팡 파트너스 고지 문구는 운영정책이 요구하는 표준 문구
 * ("이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.")를
 * 그대로 쓴다 — 축약하면 안 된다.
 */
export function getDisclosureText(purchaseLinks?: PurchaseLinkLike[]): string {
  if (!purchaseLinks || purchaseLinks.length === 0) {
    return '이 포스팅은 제휴 활동의 일환으로, 판매 발생 시 수수료를 제공받을 수 있습니다.';
  }

  const hasNaver = purchaseLinks.some(
    (l) => l.url.includes('naver.me') || l.url.includes('naver.com') || l.store === '네이버'
  );
  const hasCoupang = purchaseLinks.some(
    (l) => l.url.includes('coupang.com') || l.store === '쿠팡'
  );

  if (hasNaver && hasCoupang) {
    return '이 포스팅은 네이버 쇼핑 커넥트 활동의 일환으로, 판매 발생 시 수수료를 제공받습니다. 일부 링크는 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.';
  }
  if (hasNaver) {
    return '이 포스팅은 네이버 쇼핑 커넥트 활동의 일환으로, 판매 발생 시 수수료를 제공받습니다.';
  }
  if (hasCoupang) {
    return '이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.';
  }

  return '이 포스팅은 제휴 활동의 일환으로, 판매 발생 시 수수료를 제공받을 수 있습니다.';
}

export function AffiliateDisclosure({ purchaseLinks }: { purchaseLinks?: PurchaseLinkLike[] }) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-[4px] p-3 flex items-start gap-2">
      <Info className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
      <p className="text-xs text-amber-700 leading-relaxed">
        {getDisclosureText(purchaseLinks)}{' '}
        <Link href="/legal" className="underline hover:text-amber-900">
          자세히 보기
        </Link>
      </p>
    </div>
  );
}

/**
 * 박스 없이 한 줄로만 쓰는 축약형 — 히어로 CTA처럼 첫 화면에 바로 노출되지만
 * 공간이 좁은 자리용. 문구 자체는 AffiliateDisclosure와 동일한 getDisclosureText를 쓴다.
 */
export function AffiliateDisclosureInline({
  purchaseLinks,
  className = '',
}: {
  purchaseLinks?: PurchaseLinkLike[];
  className?: string;
}) {
  if (!purchaseLinks || purchaseLinks.length === 0) return null;
  return (
    <p className={`text-[11px] leading-relaxed text-tertiary ${className}`}>
      {getDisclosureText(purchaseLinks)}{' '}
      <Link href="/legal" className="underline hover:text-primary">
        자세히
      </Link>
    </p>
  );
}
