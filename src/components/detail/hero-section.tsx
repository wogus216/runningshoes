'use client';

import Link from "next/link";
import type { Shoe } from "@/types/shoe";
import { ImageSlider } from "./image-slider";
import { AddToCompareButton } from "@/components/compare/add-to-compare-button";
import { SaveButton } from "@/components/saved/save-button";
import { Scale, Layers, ArrowDownUp, Footprints, FlaskConical, ArrowUpRight, Sparkles, ShieldCheck, Gauge, Activity } from "lucide-react";
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
      ? { label: '발볼 여유', value: '넓음', tone: 'text-teal-700 bg-teal-50 border-teal-200' }
      : koreanFootFit?.toBoxWidth === 'narrow'
      ? { label: '발볼 주의', value: '좁음', tone: 'text-orange-700 bg-orange-50 border-orange-200' }
      : { label: '기본 핏', value: '표준', tone: 'text-slate-700 bg-slate-100 border-slate-200' };

  const summaryCards = [
    {
      icon: Gauge,
      label: '무게',
      value: specs ? `${specs.weight}g` : '-',
    },
    {
      icon: Layers,
      label: '스택',
      value: shoe.biomechanics?.stackHeight?.heel ? `${shoe.biomechanics.stackHeight.heel}/${shoe.biomechanics.stackHeight.forefoot}mm` : '-',
    },
    {
      icon: ArrowDownUp,
      label: '드롭',
      value: specs ? `${specs.drop || 10}mm` : '-',
    },
    {
      icon: Activity,
      label: '수명',
      value: getDurabilityRange(),
    },
  ];

  return (
    <section className="relative overflow-hidden rounded-[36px] border border-[var(--accent-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(242,248,255,0.96)_42%,rgba(232,244,255,0.94)_100%)] p-4 shadow-[0_28px_70px_-52px_rgba(8,18,38,0.32)] md:p-6 lg:p-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-[rgba(14,165,233,0.16)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-[rgba(56,189,248,0.12)] blur-3xl" />
      </div>

      <div className="relative grid gap-5 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,1fr)] lg:gap-8">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(180deg,rgba(8,18,38,0.98),rgba(15,23,42,0.95))] p-4 shadow-[0_28px_50px_-34px_rgba(8,18,38,0.72)]">
            <ImageSlider
              images={images}
              alt={`${shoe.brand} ${shoe.name}`}
            />
          </div>

          {specs && (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {summaryCards.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-[24px] border border-sky-100 bg-white/82 p-4 shadow-[0_18px_36px_-34px_rgba(8,18,38,0.18)]"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-2xl bg-[var(--navy)] text-white">
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">{item.label}</p>
                    <p className="mt-1 text-lg font-black tracking-tight text-slate-950">{item.value}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex flex-col justify-between gap-5">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-sky-700">{shoe.brand}</span>
              <span className="rounded-full border border-sky-100 bg-white/84 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                {shoe.category}
              </span>
              {getBrandTechnologyUrl(shoe.brand) && (
                <Link
                  href={getBrandTechnologyUrl(shoe.brand) as `/brands/${string}/technology`}
                  className="inline-flex items-center gap-1 rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700 transition hover:bg-sky-100"
                >
                  <FlaskConical className="h-3 w-3" />
                  기술
                </Link>
              )}
              {primaryLink?.isOfficial && (
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700">
                  <ShieldCheck className="h-3 w-3" />
                  공식 판매처
                </span>
              )}
            </div>

            <div>
              <h1 className="text-balance text-4xl font-black leading-[0.92] tracking-tight text-slate-950 md:text-5xl">
                {shoe.name}
              </h1>
              {shoe.oneliner && (
                <p className="mt-4 rounded-[24px] border border-sky-100 bg-white/82 px-4 py-3 text-base font-medium leading-relaxed text-slate-700 shadow-[0_16px_34px_-30px_rgba(8,18,38,0.18)]">
                  “{shoe.oneliner}”
                </p>
              )}
            </div>

            <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_220px]">
              <div className="rounded-[28px] border border-sky-100 bg-white/82 p-5 shadow-[0_18px_36px_-34px_rgba(8,18,38,0.16)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700">Editor Read</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {shoe.description || `${shoe.brand} ${shoe.name}의 핵심 스펙과 주행 성향을 빠르게 확인할 수 있습니다.`}
                </p>
                {shoe.tags && shoe.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {shoe.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-semibold text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-[28px] border border-sky-950/20 bg-[linear-gradient(160deg,rgba(8,18,38,0.98)_0%,rgba(12,74,110,0.96)_100%)] p-5 text-white shadow-[0_24px_48px_-34px_rgba(8,18,38,0.68)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-100/55">Fit Signal</p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold border-white/10 bg-white/6">
                  <Footprints className="h-3.5 w-3.5" />
                  {fitTone.label}
                </div>
                <p className="mt-4 text-3xl font-black tracking-tight text-white">{fitTone.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  평발 적합성 {koreanFootFit?.flatFootCompatibility === 'excellent' ? '매우 좋음' : koreanFootFit?.flatFootCompatibility === 'good' ? '좋음' : koreanFootFit?.flatFootCompatibility === 'fair' ? '보통' : koreanFootFit?.flatFootCompatibility === 'poor' ? '낮음' : '정보 없음'}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 rounded-[32px] border border-[var(--accent-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(238,247,255,0.9))] p-5 shadow-[0_18px_36px_-34px_rgba(8,18,38,0.16)] md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="flex flex-wrap items-end gap-2 md:gap-3">
                <span className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                  ₩{shoe.price?.toLocaleString()}
                </span>
                {shoe.priceAnalysis?.msrp && shoe.priceAnalysis.msrp > (shoe.price || 0) && (
                  <span className="text-sm text-tertiary line-through">
                    ₩{shoe.priceAnalysis.msrp.toLocaleString()}
                  </span>
                )}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {shoe.priceAnalysis && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-sky-100 bg-white/86 px-3 py-1 text-xs font-semibold text-slate-700">
                    <Scale className="h-3.5 w-3.5" />
                    {getDurabilityRange()} · 약 ₩{shoe.priceAnalysis.costPerKm}/km
                  </span>
                )}
                {shoe.priceAnalysis?.valueRating && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                    <Sparkles className="h-3.5 w-3.5" />
                    가치 점수 {shoe.priceAnalysis.valueRating.toFixed(1)}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row md:flex-col md:items-stretch">
              {primaryLink ? (
                <a
                  href={primaryLink.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[var(--navy)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--navy-soft)]"
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
      </div>
    </section>
  );
}
