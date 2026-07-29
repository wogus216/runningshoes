'use client';

import Link from "next/link";
import type { Shoe } from "@/types/shoe";
import { ImageSlider } from "./image-slider";
import { AddToCompareButton } from "@/components/compare/add-to-compare-button";
import { SaveButton } from "@/components/saved/save-button";
import { FlaskConical, ArrowUpRight } from "lucide-react";
import { getBrandTechnologyUrl } from "@/lib/data/brands";

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

  // 내구성 범위 계산
  const getDurabilityRange = () => {
    const durability = shoe.specs?.durability || 500;
    const min = Math.max(durability - 100, 300);
    const max = durability;
    return `${min}-${max}km`;
  };

  const fitTone =
    koreanFootFit?.toBoxWidth === 'wide'
      ? { label: '발볼 여유', value: '넓음' }
      : koreanFootFit?.toBoxWidth === 'narrow'
      ? { label: '발볼 주의', value: '좁음' }
      : { label: '기본 핏', value: '표준' };

  const summaryCards = [
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
      value: getDurabilityRange(),
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
                  <span>{getDurabilityRange()} · 약 ₩{shoe.priceAnalysis.costPerKm}/km</span>
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
          </div>
        </div>
      </div>
    </section>
  );
}
