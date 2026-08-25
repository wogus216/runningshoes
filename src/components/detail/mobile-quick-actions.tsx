'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import type { Shoe } from '@/types/shoe';

type MobileQuickActionsProps = {
  shoe: Shoe;
};

export function MobileQuickActions({ shoe }: MobileQuickActionsProps) {
  const [isVisible, setIsVisible] = useState(true);

  // 스크롤 위치에 따라 표시 여부 결정
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  // 첫 번째 구매 링크 (공식몰 우선)
  const primaryLink = [...(shoe.purchaseLinks || [])].sort((a, b) => {
    if (a.isOfficial && !b.isOfficial) return -1;
    if (!a.isOfficial && b.isOfficial) return 1;
    return 0;
  })[0];

  // 바닥에 더 붙인다 (4rem → 0.75rem). 2026-08-25 모바일 실측에서 두 가지가 걸렸다.
  //
  // ① 이 바가 하단에서 64px 떠 있어 실제로는 64~134px 구간을 덮었고 그만큼 본문을
  //    더 가렸다. 발볼 탭의 '내 발볼에 맞나요?' 제목이 이 바에 잘리는 것을 스크린샷으로
  //    확인했다. 아래로 내리면 그 구간을 본문에 돌려준다.
  // ② scroll-to-top 버튼이 bottom 6rem(96px)이라 이 바(64~134px) 안에 들어갔고,
  //    z-40 인 이 바가 z-30 인 그 버튼을 덮고 있었다. 내리면 겹침도 함께 풀린다.
  //
  // inset-x-3 여백과 border-2 는 유지해 '떠 있는 카드' 성격은 그대로 둔다.
  return (
    <div className="fixed inset-x-3 bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] z-40 md:hidden">
      <div className="mx-auto flex max-w-5xl items-center justify-between border-2 border-primary bg-white px-4 py-3">
        <div className="min-w-0 pr-3">
          <p className="font-mono font-bold tabular-nums text-primary">₩{shoe.price?.toLocaleString()}</p>
          <p className="truncate text-xs text-tertiary">{shoe.name}</p>
        </div>
        <div className="flex flex-shrink-0 items-center gap-2">
          {/*
            rel="nofollow" — 이 링크는 사용자를 비교함으로 보내는 UI 동작이지 색인 대상이 아니다.
            `/compare` 는 canonical 이 쿼리 없는 `/compare` 로 고정돼 있는데도 네이버가
            `?shoes={slug}` 변형 50개를 개별 문서로 색인해 전부 같은 제목이 됐다
            (2026-08-21 서치어드바이저 진단 CSV 확인). 크롤러가 따라가지 않게 막는다.
          */}
          <Link
            href={`/compare?shoes=${shoe.slug}`}
            rel="nofollow"
            className="rounded border border-stone-900/10 px-4 py-2.5 text-sm font-medium text-primary transition hover:bg-surface"
          >
            + 비교함
          </Link>
          {primaryLink ? (
            <a
              href={primaryLink.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex items-center gap-1.5 rounded bg-stone-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-900"
            >
              구매처 보기
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : (
            <button
              disabled
              className="px-5 py-2.5 bg-gray-300 text-gray-500 rounded text-sm font-medium cursor-not-allowed"
            >
              준비중
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
