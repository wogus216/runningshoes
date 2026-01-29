'use client';

import Link from 'next/link';
import { Info } from 'lucide-react';

export function AffiliateDisclosure() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-2">
      <Info className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
      <p className="text-xs text-amber-700 leading-relaxed">
        이 페이지의 링크를 통해 제품을 구매하실 경우, <strong>러닝의 모든것</strong>은 파트너스 활동의 일환으로
        일정액의 수수료를 제공받을 수 있습니다. 구매자에게 추가되는 비용은 전혀 없습니다.{' '}
        <Link href="/legal" className="underline hover:text-amber-900">
          자세히 보기
        </Link>
      </p>
    </div>
  );
}
