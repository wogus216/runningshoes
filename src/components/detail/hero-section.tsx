'use client';

import Link from "next/link";
import type { Shoe } from "@/types/shoe";
import { ImageSlider } from "./image-slider";
import { AddToCompareButton } from "@/components/compare/add-to-compare-button";
import { SaveButton } from "@/components/saved/save-button";
import { AffiliateDisclosureInline } from "./affiliate-disclosure";
import { FlaskConical, ArrowUpRight } from "lucide-react";
import { formatWon } from '@/lib/format';

type HeroSectionProps = {
  shoe: Shoe;
  brandTechnologyUrl?: `/brands/${string}/technology`;
};

export function HeroSection({ shoe, brandTechnologyUrl }: HeroSectionProps) {
  const specs = shoe.specs;
  // 이미지 배열 준비 (images가 있으면 사용, 없으면 image를 배열로)
  const images = shoe.images?.length ? shoe.images : (shoe.image ? [shoe.image] : []);
  // 공식몰 우선 정렬. 네이버·쿠팡처럼 판매처가 2곳 이상이면 하나만 골라 놓치지 않도록
  // 전부 버튼으로 노출한다(둘 다 제휴 수수료가 걸려 있어 한쪽만 보여주면 기회 손실).
  const sortedPurchaseLinks = [...(shoe.purchaseLinks || [])].sort((a, b) => {
    if (a.isOfficial && !b.isOfficial) return -1;
    if (!a.isOfficial && b.isOfficial) return 1;
    return 0;
  });

  const summaryCards: { label: string; value: string; unit: string }[] = [
    {
      label: '무게',
      value: specs ? `${specs.weight}` : '-',
      unit: specs ? 'g' : '',
    },
    {
      label: '스택',
      value: shoe.biomechanics?.stackHeight?.heel
        ? `${shoe.biomechanics.stackHeight.heel}/${shoe.biomechanics.stackHeight.forefoot}`
        : '-',
      unit: shoe.biomechanics?.stackHeight?.heel ? 'mm' : '',
    },
    {
      label: '드롭',
      value: specs ? `${specs.drop}` : '-',
      unit: specs ? 'mm' : '',
    },
  ];

  return (
    <section className="border-2 border-primary bg-background">
      <div className="grid md:grid-cols-[1.1fr_0.9fr]">
        {/* 배번호 카드 — 좌측 */}
        <div className="border-b-2 border-primary p-5 md:border-b-0 md:border-r-2 md:p-8 lg:p-10">
          <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-tertiary">
            <span>{shoe.category} · {shoe.brand}</span>
            {sortedPurchaseLinks[0]?.isOfficial && <span className="text-signal-dark">공식 판매처</span>}
          </div>

          <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-primary md:text-5xl">
            {shoe.name}
          </h1>

          {shoe.oneliner && (
            <p className="mt-3 max-w-[46ch] text-base leading-relaxed text-secondary">
              {shoe.oneliner}
            </p>
          )}

          <div className="mt-6 border border-border bg-[var(--surface-strong)] p-4">
            <ImageSlider
              images={images}
              alt={`${shoe.brand} ${shoe.name}`}
            />
            {(shoe.imageCaption || shoe.imageSource) && (
              <p className="mt-3 text-xs leading-relaxed text-secondary">
                {shoe.imageCaption}{" "}
                {shoe.imageSource && (
                  <a href={shoe.imageSource.url} target="_blank" rel="noopener noreferrer" className="underline">
                    {shoe.imageSource.title}
                  </a>
                )}
              </p>
            )}
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              {brandTechnologyUrl && (
                <Link
                  href={brandTechnologyUrl}
                  className="inline-flex items-center gap-1 border border-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-secondary transition hover:border-accent hover:text-accent"
                >
                  <FlaskConical className="h-3 w-3" />
                  기술
                </Link>
              )}
              {shoe.tags && shoe.tags.length > 0 && shoe.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="border border-border px-2.5 py-1 text-xs text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-tertiary">Editor Read</p>
              <p className="mt-2 max-w-[54ch] text-[15.5px] leading-relaxed text-secondary">
                {shoe.description || `${shoe.brand} ${shoe.name}의 핵심 스펙과 주행 성향을 빠르게 확인할 수 있습니다.`}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-5 border-t-2 border-primary pt-6">
            <div>
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-mono text-3xl font-bold tabular-nums text-primary md:text-4xl">
                  {formatWon(shoe.price)}
                </span>
                {!shoe.price && shoe.priceCheck?.kind === 'official-listing' && shoe.priceCheck.amount !== undefined && (
                  <a href={shoe.priceCheck.url} target="_blank" rel="noopener noreferrer" className="text-sm text-secondary underline underline-offset-4">
                    공식몰 확인 당시 표시가 {shoe.priceCheck.amount.toLocaleString('ko-KR')}원
                  </a>
                )}
                {/* 국내 정가가 없는 신발(병행·직구만 유통)은 실거래가를 정가와 구분해 따로 적는다 */}
                {!shoe.price && shoe.priceAnalysis?.streetPrice && (
                  <span className="font-mono text-sm text-tertiary">
                    실거래가 약 ₩{shoe.priceAnalysis.streetPrice.toLocaleString()}(병행·직구)
                  </span>
                )}
                {shoe.priceAnalysis?.msrp && shoe.priceAnalysis.msrp > (shoe.price || 0) && (
                  <span className="font-mono text-sm text-tertiary line-through">
                    ₩{shoe.priceAnalysis.msrp.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {sortedPurchaseLinks.length > 0 && (
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  {sortedPurchaseLinks.length === 1 ? (
                    <a
                      href={sortedPurchaseLinks[0].url}
                      data-purchase-link
                      data-purchase-store={sortedPurchaseLinks[0].store}
                      data-purchase-placement="shoe_hero"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-accent px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                    >
                      구매처 보기
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    sortedPurchaseLinks.map((link) => (
                      <a
                        key={`${link.store}-${link.url}`}
                        href={link.url}
                        data-purchase-link
                        data-purchase-store={link.store}
                        data-purchase-placement="shoe_hero"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-accent px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                      >
                        {link.store}에서 구매
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ))
                  )}
                </div>
              )}
              {Array.from(new Set(sortedPurchaseLinks.flatMap(link => link.note ? [link.note] : []))).map(note => (
                <p key={note} className="text-xs leading-relaxed text-secondary">{note}</p>
              ))}
              <div className="flex flex-col gap-2 sm:flex-row">
                <AddToCompareButton shoe={shoe} className="min-h-[48px] justify-center" />
                <SaveButton slug={shoe.slug ?? ''} variant="full" className="min-h-[48px]" />
              </div>
            </div>
            {sortedPurchaseLinks.length > 0 && <AffiliateDisclosureInline purchaseLinks={shoe.purchaseLinks} />}
          </div>
        </div>

        {/* 계측 패널 — 우측, 잉크 다크 */}
        <div className="relative overflow-hidden bg-primary p-6 text-background md:p-8">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-1.5"
            style={{ backgroundImage: 'repeating-linear-gradient(90deg, var(--accent) 0 18px, transparent 18px 26px)' }}
          />

          {specs ? (
            <>
              {/* 이 패널의 디밍은 text-background/55 같은 오파시티 유틸이 아니라
                  globals.css 의 사전 계산 토큰(--dim-on-dark-*)을 쓴다 — 오파시티 유틸은
                  CSS 로 생성되지 않아 h 태그가 base 레이어 색으로 떨어지는 사고가 있었다(be6663e). */}
              <h2 className="relative mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-background">
                제품 스펙
              </h2>
              <div className="relative mt-6 grid grid-cols-3 gap-x-5 gap-y-6">
                {summaryCards.map((item) => (
                  <div key={item.label} className="min-w-0">
                    <p className="truncate font-mono text-[22px] font-semibold leading-none tabular-nums tracking-tight text-background md:text-[26px]">
                      {item.value}
                      {item.unit && <span className="text-accent">{item.unit}</span>}
                    </p>
                    <p className="mt-2 text-[12px] text-[color:var(--dim-on-dark-55)]">{item.label}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="relative mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--dim-on-dark-55)]">
              Spec Sheet — 준비 중
            </p>
          )}

        </div>
      </div>
    </section>
  );
}
