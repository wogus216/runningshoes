import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { getAllPairs, getPairBySlug } from '@/lib/pseo/pairs';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import type { Shoe } from '@/types/shoe';

type PageProps = { params: Promise<{ pair: string }> };

export function generateStaticParams() {
  return getAllPairs().map((p) => ({ pair: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { pair } = await params;
  const found = getPairBySlug(pair);
  if (!found) return { title: '비교 페이지를 찾을 수 없습니다' };
  const { a, b } = found;
  const title = `${a.brand} ${a.name} vs ${b.brand} ${b.name} 비교 — 어떤 게 더 좋을까?`;
  const description = `${a.brand} ${a.name}과(와) ${b.brand} ${b.name}의 무게, 스택, 드롭, 가격, 한국 러너 적합성을 데이터로 비교합니다.`;
  return {
    title,
    description,
    alternates: { canonical: `/vs/${pair}` },
    openGraph: {
      type: 'article',
      locale: 'ko_KR',
      siteName: SITE_NAME,
      title,
      description,
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

function fmtPrice(p?: number): string {
  return p ? `${(p / 10000).toFixed(0)}만원` : '-';
}

type Verdict = { label: string; winnerSlug: 'a' | 'b' | 'tie'; reason: string };

function buildVerdicts(a: Shoe, b: Shoe): Verdict[] {
  const out: Verdict[] = [];

  // 가벼움
  const wa = a.specs?.weight ?? 999;
  const wb = b.specs?.weight ?? 999;
  if (Math.abs(wa - wb) >= 10) {
    out.push({
      label: '가벼움 (속도/대회용)',
      winnerSlug: wa < wb ? 'a' : 'b',
      reason: `${wa}g vs ${wb}g — ${Math.abs(wa - wb)}g 차이`,
    });
  } else {
    out.push({
      label: '가벼움 (속도/대회용)',
      winnerSlug: 'tie',
      reason: `${wa}g vs ${wb}g — 거의 동일`,
    });
  }

  // 쿠셔닝
  const ca = a.specs?.cushioning ?? 0;
  const cb = b.specs?.cushioning ?? 0;
  if (Math.abs(ca - cb) >= 1) {
    out.push({
      label: '쿠셔닝 (장거리/회복런)',
      winnerSlug: ca > cb ? 'a' : 'b',
      reason: `${ca}/10 vs ${cb}/10`,
    });
  }

  // 안정성 (평발/오버프로네이션)
  const sa = a.specs?.stability ?? 0;
  const sb = b.specs?.stability ?? 0;
  if (Math.abs(sa - sb) >= 1) {
    out.push({
      label: '안정성 (평발·오버프로네이션)',
      winnerSlug: sa > sb ? 'a' : 'b',
      reason: `${sa}/10 vs ${sb}/10`,
    });
  }

  // 가성비
  const va = a.priceAnalysis?.valueRating ?? 0;
  const vb = b.priceAnalysis?.valueRating ?? 0;
  if (Math.abs(va - vb) >= 1) {
    out.push({
      label: '가성비',
      winnerSlug: va > vb ? 'a' : 'b',
      reason: `${va}/10 vs ${vb}/10 (가격 ${fmtPrice(a.price)} vs ${fmtPrice(b.price)})`,
    });
  } else {
    out.push({
      label: '가성비',
      winnerSlug: 'tie',
      reason: `${va}/10 vs ${vb}/10`,
    });
  }

  // 발볼 (한국 러너)
  const wba = a.koreanFootFit?.toBoxWidth;
  const wbb = b.koreanFootFit?.toBoxWidth;
  const widthRank: Record<string, number> = { narrow: 0, standard: 1, wide: 2 };
  const wba_r = widthRank[wba ?? ''] ?? -1;
  const wbb_r = widthRank[wbb ?? ''] ?? -1;
  if (wba_r >= 0 && wbb_r >= 0 && wba_r !== wbb_r) {
    out.push({
      label: '발볼 넓은 한국 러너',
      winnerSlug: wba_r > wbb_r ? 'a' : 'b',
      reason: `${wba} vs ${wbb}`,
    });
  }

  // 무릎 보호
  const lvl: Record<string, number> = { warning: 0, caution: 1, good: 2, excellent: 3 };
  const ka = lvl[a.injuryPrevention?.kneeIssues ?? ''] ?? -1;
  const kb = lvl[b.injuryPrevention?.kneeIssues ?? ''] ?? -1;
  if (ka >= 0 && kb >= 0 && ka !== kb) {
    out.push({
      label: '무릎 통증 예방',
      winnerSlug: ka > kb ? 'a' : 'b',
      reason: `${a.injuryPrevention?.kneeIssues} vs ${b.injuryPrevention?.kneeIssues}`,
    });
  }

  return out;
}

function ShoeColumn({ shoe, label }: { shoe: Shoe; label: string }) {
  return (
    <div className="flex-1 text-center space-y-3">
      <div className="text-xs font-semibold text-accent uppercase tracking-wide">{label}</div>
      {shoe.image && (
        <Link href={`/shoes/${shoe.slug}`} className="block relative w-full aspect-square max-w-[200px] mx-auto bg-surface rounded-lg">
          <Image src={shoe.image} alt={`${shoe.brand} ${shoe.name}`} fill sizes="200px" className="object-contain p-2" />
        </Link>
      )}
      <div>
        <div className="text-xs text-tertiary uppercase">{shoe.brand}</div>
        <Link href={`/shoes/${shoe.slug}`} className="text-lg font-bold text-primary hover:text-accent">
          {shoe.name}
        </Link>
      </div>
      <div className="text-sm text-secondary">{fmtPrice(shoe.price)}</div>
    </div>
  );
}

function specRows(a: Shoe, b: Shoe) {
  return [
    { label: '카테고리', a: a.category, b: b.category },
    { label: '가격', a: fmtPrice(a.price), b: fmtPrice(b.price) },
    { label: '무게', a: a.specs?.weight ? `${a.specs.weight}g` : '-', b: b.specs?.weight ? `${b.specs.weight}g` : '-' },
    {
      label: '힐 스택',
      a: a.biomechanics?.stackHeight?.heel ? `${a.biomechanics.stackHeight.heel}mm` : '-',
      b: b.biomechanics?.stackHeight?.heel ? `${b.biomechanics.stackHeight.heel}mm` : '-',
    },
    {
      label: '전족부 스택',
      a: a.biomechanics?.stackHeight?.forefoot ? `${a.biomechanics.stackHeight.forefoot}mm` : '-',
      b: b.biomechanics?.stackHeight?.forefoot ? `${b.biomechanics.stackHeight.forefoot}mm` : '-',
    },
    {
      label: '드롭',
      a: a.biomechanics?.drop !== undefined ? `${a.biomechanics.drop}mm` : '-',
      b: b.biomechanics?.drop !== undefined ? `${b.biomechanics.drop}mm` : '-',
    },
    {
      label: '미드솔',
      a: a.biomechanics?.midsoleType ?? '-',
      b: b.biomechanics?.midsoleType ?? '-',
    },
    {
      label: '카본 플레이트',
      a: a.biomechanics?.carbonPlate ? '있음' : '없음',
      b: b.biomechanics?.carbonPlate ? '있음' : '없음',
    },
    {
      label: '쿠셔닝',
      a: a.specs?.cushioning ? `${a.specs.cushioning}/10` : '-',
      b: b.specs?.cushioning ? `${b.specs.cushioning}/10` : '-',
    },
    {
      label: '안정성',
      a: a.specs?.stability ? `${a.specs.stability}/10` : '-',
      b: b.specs?.stability ? `${b.specs.stability}/10` : '-',
    },
    {
      label: '가성비',
      a: a.priceAnalysis?.valueRating ? `${a.priceAnalysis.valueRating}/10` : '-',
      b: b.priceAnalysis?.valueRating ? `${b.priceAnalysis.valueRating}/10` : '-',
    },
    {
      label: '토박스',
      a: a.koreanFootFit?.toBoxWidth ?? '-',
      b: b.koreanFootFit?.toBoxWidth ?? '-',
    },
    {
      label: '와이드 옵션',
      a: a.koreanFootFit?.wideOptions ? '있음' : '없음',
      b: b.koreanFootFit?.wideOptions ? '있음' : '없음',
    },
    {
      label: '평발 적합성',
      a: a.koreanFootFit?.flatFootCompatibility ?? '-',
      b: b.koreanFootFit?.flatFootCompatibility ?? '-',
    },
    {
      label: '내구성',
      a: a.specs?.durability ? `${a.specs.durability}km` : '-',
      b: b.specs?.durability ? `${b.specs.durability}km` : '-',
    },
  ];
}

export default async function ComparePairPage({ params }: PageProps) {
  const { pair } = await params;
  const found = getPairBySlug(pair);
  if (!found) notFound();
  const { a, b, category } = found;

  const verdicts = buildVerdicts(a, b);
  const rows = specRows(a, b);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${a.brand} ${a.name} vs ${b.brand} ${b.name}`,
    url: `${SITE_URL}/vs/${pair}`,
    about: [
      { '@type': 'Product', name: `${a.brand} ${a.name}`, brand: a.brand },
      { '@type': 'Product', name: `${b.brand} ${b.name}`, brand: b.brand },
    ],
  };

  return (
    <article className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="flex items-center gap-1 text-sm text-secondary">
        <Link href="/" className="hover:text-primary">홈</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/vs" className="hover:text-primary">신발 비교</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-primary truncate">{a.name} vs {b.name}</span>
      </nav>

      <header className="space-y-4 border-b border-border pb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
          {a.brand} {a.name} vs {b.brand} {b.name}
        </h1>
        <p className="text-secondary leading-relaxed">
          같은 {category} 카테고리의 두 모델을 RunRepeat 랩 데이터와 한국 러너 적합성 기준으로 직접 비교했습니다.
          무게, 스택, 드롭, 토박스, 가성비까지 상황별 승자를 한눈에 확인하세요.
        </p>
      </header>

      <section className="flex flex-col md:flex-row items-stretch gap-4 md:gap-8">
        <ShoeColumn shoe={a} label="A" />
        <div className="flex items-center justify-center text-2xl font-bold text-accent">VS</div>
        <ShoeColumn shoe={b} label="B" />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">상황별 승자</h2>
        <ul className="space-y-2">
          {verdicts.map((v, i) => {
            const winnerName = v.winnerSlug === 'a' ? `${a.brand} ${a.name}` : v.winnerSlug === 'b' ? `${b.brand} ${b.name}` : '동일';
            const winnerColor = v.winnerSlug === 'tie' ? 'text-tertiary' : 'text-accent';
            return (
              <li key={i} className="flex items-start justify-between gap-4 p-3 bg-white border border-border rounded-lg">
                <div>
                  <div className="font-semibold text-primary">{v.label}</div>
                  <div className="text-xs text-tertiary mt-0.5">{v.reason}</div>
                </div>
                <div className={`text-sm font-bold whitespace-nowrap ${winnerColor}`}>
                  {v.winnerSlug === 'tie' ? '무승부' : `→ ${winnerName}`}
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">스펙 전체 비교</h2>
        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-surface text-tertiary">
              <tr>
                <th className="text-left p-3 font-medium">항목</th>
                <th className="text-left p-3 font-medium">{a.brand} {a.name}</th>
                <th className="text-left p-3 font-medium">{b.brand} {b.name}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-border">
                  <td className="p-3 text-tertiary">{r.label}</td>
                  <td className="p-3 text-primary">{r.a}</td>
                  <td className="p-3 text-primary">{r.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href={`/shoes/${a.slug}`} className="block p-4 bg-surface rounded-lg hover:bg-white transition border border-border">
          <div className="text-xs text-tertiary uppercase">상세 보기</div>
          <div className="font-semibold text-primary">{a.brand} {a.name} →</div>
        </Link>
        <Link href={`/shoes/${b.slug}`} className="block p-4 bg-surface rounded-lg hover:bg-white transition border border-border">
          <div className="text-xs text-tertiary uppercase">상세 보기</div>
          <div className="font-semibold text-primary">{b.brand} {b.name} →</div>
        </Link>
      </section>
    </article>
  );
}
