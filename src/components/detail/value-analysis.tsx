import Link from 'next/link';
import { Gem, Check, BadgeDollarSign, ArrowRight } from 'lucide-react';
import type { PriceAnalysis } from "@/types/shoe";
import type { DurabilityProfile } from "@/lib/durability";

export type ResolvedAlternative = {
  key: string;         // 원본 slug or name (alternatives 배열의 원본 값)
  slug?: string;       // 매칭된 신발의 slug (있으면 링크)
  brand?: string;
  name?: string;
};

type ValueAnalysisProps = {
  priceAnalysis: PriceAnalysis;
  shoeName: string;
  brand: string;
  category: string;
  durability?: DurabilityProfile | null;
  resolvedAlternatives?: ResolvedAlternative[];
};

export function ValueAnalysis({ priceAnalysis, shoeName, brand, resolvedAlternatives }: ValueAnalysisProps) {
  const altByKey = new Map((resolvedAlternatives ?? []).map(a => [a.key, a]));
  const findAlt = (key: string): ResolvedAlternative => altByKey.get(key) ?? { key };
  // 가격대별 설명 생성
  const getPriceTierDescription = (price: number) => {
    if (price < 130000) return "10만원대 초반";
    if (price < 160000) return "15만원대 중반";
    if (price < 200000) return "20만원 미만";
    if (price < 250000) return "20만원대";
    if (price < 300000) return "30만원 미만 프리미엄";
    return "30만원대 이상 최상급";
  };

  const getValueDescription = () => {
    const rating = priceAnalysis.valueRating;
    if (rating >= 9) return "최고의 가성비";
    if (rating >= 8) return "뛰어남";
    if (rating >= 7) return "양호";
    if (rating >= 6) return "적정";
    return "프리미엄";
  };

  // 가격 대비 장점 생성 (데이터가 있으면 사용, 없으면 자동 생성)
  const getValueAdvantages = (): string[] => {
    if (priceAnalysis.valueAdvantages && priceAnalysis.valueAdvantages.length > 0) {
      return priceAnalysis.valueAdvantages;
    }

    return ['정가와 구매 조건 확인', '용도에 맞는 구조·착화 비교'];
  };
  return (
    <section className="space-y-6">
      <div className="space-y-2 border-b-2 border-primary pb-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700">Value</p>
        <h2 className="flex items-center gap-3 text-3xl font-black tracking-tight text-slate-950">
          <Gem className="h-7 w-7 text-sky-700" />
          가격과 체감 가치
        </h2>
      </div>

      <div className="rounded border border-border bg-white p-6 lg:p-8">
        <h3 className="mb-4 flex items-center gap-2 text-xl font-black text-sky-700">
          <BadgeDollarSign className="h-5 w-5" />
          {priceAnalysis.msrp ? <>에디터 가성비 평가: <span className="font-mono tabular-nums">{priceAnalysis.valueRating}/10</span> ({getValueDescription()})</> : '가격 확인 필요'}
        </h3>
        {/* 국내 정가가 없는 신발(병행·직구만 유통)은 가격대 평가를 하지 않는다 — 병행가를 정가처럼 쓰지 않는다 */}
        {!priceAnalysis.msrp ? (
          <p className="mb-6 text-[15.5px] leading-relaxed text-slate-700">
            한국 공식 정가를 확인하지 못한 항목입니다.{" "}
            {priceAnalysis.streetPrice
              ? <>기존 입력 가격은 약 <strong>{priceAnalysis.streetPrice.toLocaleString()}원</strong>이며, 현재 판매 여부와 가격은 판매처에서 다시 확인하세요.</>
              : '판매처마다 가격이 달라 정가 기준 비교를 하지 않습니다.'}
          </p>
        ) : (
        <p className="mb-6 text-[15.5px] leading-relaxed text-slate-700">
          <strong>{priceAnalysis.msrp.toLocaleString()}원</strong>은{" "}
          <strong>&ldquo;{getPriceTierDescription(priceAnalysis.msrp)}&rdquo;</strong> 가격대입니다.{" "}
          가격대와 적합성은 다른 판단입니다. 구조와 착화감, 실제 구매 조건도 확인하세요.
        </p>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded border border-border bg-white p-5">
            <strong className="mb-3 block text-slate-950">가격 대비 장점</strong>
            <ul className="space-y-2 text-sm text-slate-600">
              {getValueAdvantages().map((advantage, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-600" />
                  <span>{advantage}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded border border-border bg-white p-5">
            <strong className="mb-3 block text-slate-950">비슷한 가격대</strong>
            <ul className="space-y-2 text-sm text-slate-600">
              {priceAnalysis.alternatives.map((alt) => {
                const matchedShoe = findAlt(alt);
                return (
                  <li key={alt} className="flex items-start gap-2">
                    <span className="text-stone-600 mt-1">•</span>
                    {matchedShoe.slug ? (
                      <Link
                        href={`/shoes/${matchedShoe.slug}` as `/shoes/${string}`}
                        className="flex items-center gap-1 text-sky-700 hover:underline"
                      >
                        {matchedShoe.brand} {matchedShoe.name}
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    ) : (
                      <span>{alt}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {priceAnalysis.alternatives.length > 0 && (
        <div className="rounded border border-border bg-white p-5">
          <strong className="flex items-center gap-2 text-lg text-sky-700">
            <Check className="h-5 w-5" />
            {priceAnalysis.msrp ? `현재 가격대 (${getPriceTierDescription(priceAnalysis.msrp)})` : '비교 후보'}: {brand} {shoeName}
          </strong>
          <p className="mt-2 text-[15.5px] leading-relaxed text-slate-700">
            비슷한 가격대의 {priceAnalysis.alternatives.slice(0, 3).map(alt => {
              const shoe = findAlt(alt);
              return shoe.brand && shoe.name ? `${shoe.brand} ${shoe.name}` : alt;
            }).join(", ")} 등과 비교하여 선택하세요.
          </p>
        </div>
      )}

      {/*
        '구매 팁' 블록 제거 (2026-08-26).
        "연말/설날 세일 · 네이버·쿠팡 가격 비교 필수 · 매장에서 먼저 신어보기" 세 줄이
        하드코딩이라 130종 신발에 글자 하나 안 바뀌고 똑같이 나왔다. 이 신발에 대해
        알 수 있는 게 없는 문장이고, 이런 게 섞이면 읽는 사람이 주변 문단까지 건너뛴다.
        구매처·최저가는 페이지 하단 PurchaseLinks 와 하단 고정 바가 이미 담당한다.
      */}
    </section>
  );
}
