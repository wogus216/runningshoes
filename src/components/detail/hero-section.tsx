'use client';

import Link from "next/link";
import type { Shoe } from "@/types/shoe";
import { ImageSlider } from "./image-slider";
import { AddToCompareButton } from "@/components/compare/add-to-compare-button";
import { SaveButton } from "@/components/saved/save-button";
import { FlaskConical, ArrowUpRight } from "lucide-react";
import { getBrandTechnologyUrl } from "@/lib/data/brands";
import { getShoeDurability } from "@/lib/durability";
import { cn } from "@/lib/utils";

type HeroSectionProps = {
  shoe: Shoe;
};

export function HeroSection({ shoe }: HeroSectionProps) {
  const specs = shoe.specs;
  const koreanFootFit = shoe.koreanFootFit;
  // 이미지 배열 준비 (images가 있으면 사용, 없으면 image를 배열로)
  const images = shoe.images?.length ? shoe.images : (shoe.image ? [shoe.image] : []);
  const primaryLink = [...(shoe.purchaseLinks || [])].sort((a, b) => {
    if (a.isOfficial && !b.isOfficial) return -1;
    if (!a.isOfficial && b.isOfficial) return 1;
    return 0;
  })[0];

  // 내구성은 단일 숫자가 아니라 근거 등급이 붙은 범위로 표기한다 (@/lib/durability)
  const durability = getShoeDurability(shoe);

  const fitTone =
    koreanFootFit?.toBoxWidth === 'wide'
      ? { label: '발볼 여유', value: '넓음' }
      : koreanFootFit?.toBoxWidth === 'narrow'
      ? { label: '발볼 주의', value: '좁음' }
      : { label: '기본 핏', value: '표준' };

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
      value: specs ? `${specs.drop || 10}` : '-',
      unit: specs ? 'mm' : '',
    },
    {
      label: '수명',
      value: durability?.rangeLabel ?? '-',
      unit: '',
    },
  ];

  return (
    <section className="border-2 border-primary bg-background">
      <div className="grid md:grid-cols-[1.1fr_0.9fr]">
        {/* 배번호 카드 — 좌측 */}
        <div className="border-b-2 border-primary p-5 md:border-b-0 md:border-r-2 md:p-8 lg:p-10">
          <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-tertiary">
            <span>{shoe.category} · {shoe.brand}</span>
            {primaryLink?.isOfficial && <span className="text-accent">공식 판매처</span>}
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
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              {getBrandTechnologyUrl(shoe.brand) && (
                <Link
                  href={getBrandTechnologyUrl(shoe.brand) as `/brands/${string}/technology`}
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
              <p className="mt-2 max-w-[54ch] text-sm leading-7 text-secondary">
                {shoe.description || `${shoe.brand} ${shoe.name}의 핵심 스펙과 주행 성향을 빠르게 확인할 수 있습니다.`}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-5 border-t-2 border-primary pt-6">
            <div>
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-mono text-3xl font-bold tabular-nums text-primary md:text-4xl">
                  ₩{shoe.price?.toLocaleString()}
                </span>
                {shoe.priceAnalysis?.msrp && shoe.priceAnalysis.msrp > (shoe.price || 0) && (
                  <span className="font-mono text-sm text-tertiary line-through">
                    ₩{shoe.priceAnalysis.msrp.toLocaleString()}
                  </span>
                )}
              </div>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-tertiary">
                {shoe.priceAnalysis && (
                  <span>{durability?.rangeLabel ?? '-'} · 약 ₩{shoe.priceAnalysis.costPerKm}/km</span>
                )}
                {shoe.priceAnalysis?.valueRating && (
                  <span className="text-accent">가치 점수 {shoe.priceAnalysis.valueRating.toFixed(1)}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              {primaryLink ? (
                <a
                  href={primaryLink.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-accent px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                >
                  구매처 보기
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : null}
              <AddToCompareButton shoe={shoe} className="min-h-[48px] justify-center" />
              <SaveButton slug={shoe.slug ?? ''} variant="full" className="min-h-[48px]" />
            </div>
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
              <h2 className="relative mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-background/55">
                RunRepeat Lab — Measured
              </h2>
              <div className="relative mt-6 grid grid-cols-2 gap-x-5 gap-y-6">
                {summaryCards.map((item) => (
                  <div key={item.label} className="min-w-0">
                    <p className="truncate font-mono text-[22px] font-semibold leading-none tabular-nums tracking-tight text-background md:text-[26px]">
                      {item.value}
                      {item.unit && <span className="text-accent">{item.unit}</span>}
                    </p>
                    <p className="mt-2 text-[12px] text-background/55">{item.label}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="relative mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-background/55">
              Spec Sheet — 준비 중
            </p>
          )}

          {shoe.rating ? (
            <div className="relative mt-7 flex items-baseline gap-3 border-t border-background/15 pt-6">
              <span className="font-mono text-[40px] font-bold leading-none tabular-nums text-accent">{shoe.rating}</span>
              <span className="text-[13px] text-background/55">/ 5 · 종합 평점</span>
            </div>
          ) : null}

          <div className="relative mt-6 border-t border-background/15 pt-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-background/55">Fit Signal</p>
            <p className="mt-2 text-2xl font-bold tracking-tight text-background">{fitTone.value}</p>
            <p className="mt-1 text-[13px] leading-relaxed text-background/60">
              {fitTone.label} · 평발 적합성 {koreanFootFit?.flatFootCompatibility === 'excellent' ? '매우 좋음' : koreanFootFit?.flatFootCompatibility === 'good' ? '좋음' : koreanFootFit?.flatFootCompatibility === 'fair' ? '보통' : koreanFootFit?.flatFootCompatibility === 'poor' ? '낮음' : '정보 없음'}
            </p>
            {/*
              와이드 여부를 첫 화면에 세운다 — 2026-08-25 모바일 페르소나 평가 결과.
              발볼이 넓어 와이드를 찾는 러너에게 이건 '있으면 좋은 정보'가 아니라
              페이지를 계속 볼지 말지를 가르는 첫 관문인데, 그동안 6.9화면 깊이의
              '발볼' 탭 안에만 있었다. wideOptions 는 130종 전부 채워져 있어
              (true 58 / false 72, 누락 0) 데이터를 새로 만들 필요가 없었다.

              '없음'도 반드시 적는다. 빈 값으로 두면 '안 준다'가 아니라 '모른다'로
              읽히고, 발볼 넓은 러너는 확인하러 6.9화면을 더 내려가야 한다.
              빠르게 포기시키는 것도 이 자리의 역할이다.
            */}
            {koreanFootFit ? (
              <p className={cn(
                'mt-2 inline-block border px-2 py-1 font-mono text-[11px] tracking-wide',
                koreanFootFit.wideOptions
                  ? 'border-accent/50 text-accent'
                  : 'border-background/25 text-background/50'
              )}>
                {koreanFootFit.wideOptions ? '와이드(2E) 있음' : '와이드 없음'}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
