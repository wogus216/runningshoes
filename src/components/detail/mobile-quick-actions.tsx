'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import type { Shoe } from '@/types/shoe';

type MobileQuickActionsProps = {
  shoe: Shoe;
};

/** 이 값보다 작게 움직인 건 손떨림으로 보고 무시한다 (px) */
const SCROLL_NOISE = 6;
/** 이 지점 위에서는 히어로에 가격·구매 버튼이 이미 있어 바를 띄우지 않는다 (px) */
const SHOW_AFTER = 100;

export function MobileQuickActions({ shoe }: MobileQuickActionsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const lastY = useRef(0);

  /*
    아래로 읽는 동안에는 비켜주고, 위로 올리면 돌아온다.

    2026-08-25 실측: 이 바가 화면 하단 70px 를 항상 덮어 본문을 가렸다.
    부상 섹션의 의료 면책 문구("기존 통증이나 부상 이력이 있다면 전문의 상담을
    우선하세요")가 잘리는 것을 라이브 스크린샷으로 확인했다 — 하필 가장 가리면
    안 되는 문장이었다. 바를 더 내릴 여지는 없어서(이미 바닥 0.75rem) 대신
    **읽는 동안 비켜주는** 쪽으로 바꿨다.

    아래로 스크롤 = 본문을 읽는 중 → 숨긴다.
    위로 스크롤   = 되돌아보거나 행동하려는 것 → 즉시 띄운다.
    멈춰 있을 때는 직전 상태를 유지한다(깜빡임 방지).

    DOM 에서 제거하지 않고 transform 으로 밀어낸다 — 사라졌다 튀어나오는 대신
    미끄러져 들어오고, 레이아웃 시프트도 없다.
  */
  useEffect(() => {
    lastY.current = window.scrollY;

    const handleScroll = () => {
      const y = window.scrollY;
      const dy = y - lastY.current;

      if (y <= SHOW_AFTER) {
        setIsVisible(false);
      } else if (dy > SCROLL_NOISE) {
        setIsVisible(false);   // 아래로 — 읽는 중
      } else if (dy < -SCROLL_NOISE) {
        setIsVisible(true);    // 위로 — 행동하려는 중
      }

      if (Math.abs(dy) > SCROLL_NOISE) lastY.current = y;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div
      aria-hidden={!isVisible}
      className={[
        'fixed inset-x-3 bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] z-40 md:hidden',
        'transition-transform duration-200 ease-out motion-reduce:transition-none',
        isVisible ? 'translate-y-0' : 'translate-y-[calc(100%+1.5rem)] pointer-events-none',
      ].join(' ')}
    >
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
