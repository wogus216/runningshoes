import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { getAllPairs, getPairBySlug, getPairsForCategory, getPairsForShoe } from '@/lib/pseo/pairs';
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

function fmtList(items: string[] | undefined, n = 2): string {
  if (!items || items.length === 0) return '';
  return items.slice(0, n).join(', ');
}

const WIDTH_RANK: Record<string, number> = { narrow: 0, standard: 1, wide: 2 };
const KNEE_RANK: Record<string, number> = { warning: 0, caution: 1, good: 2, excellent: 3 };

// 페어 데이터로 고유 서술 단락을 합성 (thin content 방지)
function buildNarrative(a: Shoe, b: Shoe, category: string): string[] {
  const an = `${a.brand} ${a.name}`;
  const bn = `${b.brand} ${b.name}`;
  const paras: string[] = [];

  let intro = `${an}과(와) ${bn}은(는) 모두 ${category} 카테고리지만, 무게·쿠셔닝·발 적합성에서 분명한 차이가 있습니다.`;
  if (a.description) intro += ` ${an}은(는) ${a.description}`;
  if (b.description) intro += ` 반면 ${bn}은(는) ${b.description}`;
  paras.push(intro);

  const diffs: string[] = [];
  const wa = a.specs?.weight, wb = b.specs?.weight;
  if (wa && wb) {
    if (Math.abs(wa - wb) >= 10) diffs.push(`무게는 ${wa < wb ? an : bn}이(가) ${Math.abs(wa - wb)}g 더 가벼워 빠른 페이스·대회에 유리합니다`);
    else diffs.push(`무게는 ${wa}g과 ${wb}g로 거의 같습니다`);
  }
  const ca = a.specs?.cushioning, cb = b.specs?.cushioning;
  if (ca && cb && Math.abs(ca - cb) >= 1) diffs.push(`쿠셔닝은 ${ca > cb ? an : bn}이(가) 더 두툼해 장거리·회복런에서 편안합니다`);
  const pa = a.price, pb = b.price;
  if (pa && pb && Math.abs(pa - pb) >= 10000) diffs.push(`가격은 ${pa < pb ? an : bn}이(가) 약 ${fmtPrice(Math.abs(pa - pb))} 저렴합니다`);
  if (diffs.length) paras.push(diffs.join('. ') + '.');

  const fit: string[] = [];
  const wra = WIDTH_RANK[a.koreanFootFit?.toBoxWidth ?? ''] ?? -1;
  const wrb = WIDTH_RANK[b.koreanFootFit?.toBoxWidth ?? ''] ?? -1;
  if (wra >= 0 && wrb >= 0 && wra !== wrb) fit.push(`발볼은 ${wra > wrb ? an : bn}이(가) 더 넓어 발볼 넓은 한국 러너에게 잘 맞습니다`);
  if ((a.koreanFootFit?.wideOptions ?? false) !== (b.koreanFootFit?.wideOptions ?? false)) {
    fit.push(`와이드(2E) 옵션은 ${a.koreanFootFit?.wideOptions ? an : bn}만 제공합니다`);
  }
  if (fit.length) paras.push(fit.join('. ') + '.');

  const recs: string[] = [];
  const ra = fmtList(a.targetUsers?.recommended);
  const rb = fmtList(b.targetUsers?.recommended);
  if (ra) recs.push(`${an}은(는) ${ra} 같은 러너에게`);
  if (rb) recs.push(`${bn}은(는) ${rb} 같은 러너에게 잘 맞습니다`);
  if (recs.length) paras.push(`종합하면 ${recs.join(', ')}. 본인 발 특성·목적이 애매하면 1분 러닝화 추천으로 후보를 좁혀보세요.`);

  return paras;
}

// 페어 데이터로 FAQ 생성 (FAQPage JSON-LD + 본문 텍스트)
function buildFaqs(a: Shoe, b: Shoe): { question: string; answer: string }[] {
  const an = `${a.brand} ${a.name}`;
  const bn = `${b.brand} ${b.name}`;
  const faqs: { question: string; answer: string }[] = [];

  const wra = WIDTH_RANK[a.koreanFootFit?.toBoxWidth ?? ''] ?? -1;
  const wrb = WIDTH_RANK[b.koreanFootFit?.toBoxWidth ?? ''] ?? -1;
  if (wra >= 0 && wrb >= 0) {
    let ans: string;
    if (wra !== wrb) {
      const wide = wra > wrb ? an : bn;
      const wideFit = wra > wrb ? a.koreanFootFit : b.koreanFootFit;
      ans = `토박스 기준 ${wide}이(가) 더 넓습니다(${wideFit?.toBoxWidth}). 발볼이 넓은 편이라면 ${wide}이(가) 유리하고, 와이드(2E) 옵션 제공 여부도 함께 확인하세요.`;
    } else {
      ans = `두 모델 모두 토박스 너비가 ${a.koreanFootFit?.toBoxWidth} 수준으로 비슷합니다. 발볼이 넓다면 와이드(2E) 옵션 제공 여부로 골라보세요.`;
    }
    faqs.push({ question: `${a.name}과 ${b.name} 중 발볼 넓은 한국 러너에게 맞는 건?`, answer: ans });
  }

  const sa = a.specs?.stability ?? 0, sb = b.specs?.stability ?? 0;
  if (sa && sb && Math.abs(sa - sb) >= 1) {
    const stable = sa > sb ? an : bn;
    faqs.push({ question: `평발이라 안정성이 중요한데 어느 쪽이 좋나요?`, answer: `안정성 점수는 ${stable}이(가) 더 높습니다(${Math.max(sa, sb)}/10). 평발·오버프로네이션이 있다면 ${stable}을(를) 우선 고려하세요. 발 상태가 애매하면 1분 러닝화 추천으로 확인해볼 수 있습니다.` });
  }

  const va = a.priceAnalysis?.valueRating ?? 0, vb = b.priceAnalysis?.valueRating ?? 0;
  if (va && vb) {
    const value = va >= vb ? an : bn;
    faqs.push({ question: `가성비는 어느 쪽이 더 좋나요?`, answer: `가성비 점수는 ${value}이(가) 우위입니다(${Math.max(va, vb)}/10, 가격 ${fmtPrice(a.price)} vs ${fmtPrice(b.price)}). 다만 가성비가 곧 본인에게 맞는 신발을 뜻하진 않으니 무게·쿠셔닝·발볼도 함께 보세요.` });
  }

  const ka = KNEE_RANK[a.injuryPrevention?.kneeIssues ?? ''] ?? -1;
  const kb = KNEE_RANK[b.injuryPrevention?.kneeIssues ?? ''] ?? -1;
  if (ka >= 0 && kb >= 0 && ka !== kb) {
    const knee = ka > kb ? an : bn;
    faqs.push({ question: `무릎이 안 좋은데 어떤 걸 신는 게 나을까요?`, answer: `무릎 통증 예방 측면에서는 ${knee}이(가) 더 낫게 평가됩니다. 쿠셔닝과 안정성이 무릎 부담을 줄이는 핵심이며, 통증이 지속되면 러닝화 교체와 별개로 전문가 상담을 권합니다.` });
  }

  const cushWinner = (a.specs?.cushioning ?? 0) >= (b.specs?.cushioning ?? 0) ? an : bn;
  faqs.push({ question: `러닝 입문자에게는 둘 중 무엇을 추천하나요?`, answer: `입문자라면 무게보다 쿠셔닝·안정성이 우선입니다. ${cushWinner} 쪽이 쿠셔닝이 좋아 입문·회복런에 무난합니다. 본인 발 특성·목적에 맞는 후보는 1분 러닝화 추천에서 좁힐 수 있습니다.` });

  return faqs;
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
  const narrative = buildNarrative(a, b, category);
  const faqs = buildFaqs(a, b);
  const relatedPairs = getPairsForCategory(category, 8).filter((p) => p.slug !== pair).slice(0, 4);
  const otherForA = getPairsForShoe(a.slug).filter((p) => p.slug !== pair).slice(0, 3);
  const otherForB = getPairsForShoe(b.slug).filter((p) => p.slug !== pair).slice(0, 3);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `${a.brand} ${a.name} vs ${b.brand} ${b.name}`,
      description: `${a.brand} ${a.name}과(와) ${b.brand} ${b.name}의 무게·스택·드롭·가격·한국 러너 적합성을 데이터로 비교합니다.`,
      url: `${SITE_URL}/vs/${pair}`,
      about: [
        { '@type': 'Thing', name: `${a.brand} ${a.name}`, url: `${SITE_URL}/shoes/${a.slug}` },
        { '@type': 'Thing', name: `${b.brand} ${b.name}`, url: `${SITE_URL}/shoes/${b.slug}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: '신발 비교', item: `${SITE_URL}/vs` },
        { '@type': 'ListItem', position: 3, name: `${a.name} vs ${b.name}`, item: `${SITE_URL}/vs/${pair}` },
      ],
    },
  ];

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
        <h2 className="text-xl font-semibold text-primary">한눈에 비교 요약</h2>
        <div className="space-y-3 text-secondary leading-relaxed">
          {narrative.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <p className="text-sm text-tertiary">
          더 깊은 분석이 필요하면 <Link href={`/shoes/${a.slug}`} className="text-accent hover:underline">{a.name}</Link>·
          <Link href={`/shoes/${b.slug}`} className="text-accent hover:underline">{b.name}</Link> 상세 페이지와{' '}
          <Link href="/recommend" className="text-accent hover:underline">1분 러닝화 추천</Link>을 활용하세요.
        </p>
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

      {faqs.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-primary">자주 묻는 질문</h2>
          <div className="space-y-2">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white border border-border rounded-lg p-4">
                <summary className="font-semibold text-primary cursor-pointer list-none flex justify-between items-center gap-3">
                  <span>{f.question}</span>
                  <ChevronRight className="w-4 h-4 shrink-0 transition group-open:rotate-90" />
                </summary>
                <p className="text-sm text-secondary leading-relaxed mt-2">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

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

      {(relatedPairs.length > 0 || otherForA.length > 0 || otherForB.length > 0) && (
        <section className="space-y-4 border-t border-border pt-6">
          <h2 className="text-xl font-semibold text-primary">관련 비교</h2>

          {relatedPairs.length > 0 && (
            <div className="space-y-2">
              <div className="text-sm font-medium text-tertiary">같은 {category} 카테고리 비교</div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {relatedPairs.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/vs/${p.slug}`} className="block p-3 bg-surface rounded-lg hover:bg-white transition border border-border text-sm text-primary">
                      {p.a.name} vs {p.b.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(otherForA.length > 0 || otherForB.length > 0) && (
            <div className="flex flex-wrap gap-2 text-sm">
              {otherForA.map((p) => (
                <Link key={p.slug} href={`/vs/${p.slug}`} className="px-3 py-1.5 bg-surface rounded-full hover:bg-white transition border border-border text-secondary">
                  {p.a.name} vs {p.b.name}
                </Link>
              ))}
              {otherForB.map((p) => (
                <Link key={p.slug} href={`/vs/${p.slug}`} className="px-3 py-1.5 bg-surface rounded-full hover:bg-white transition border border-border text-secondary">
                  {p.a.name} vs {p.b.name}
                </Link>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-3 text-sm pt-2">
            <Link href="/recommend" className="text-accent font-medium hover:underline">1분 러닝화 추천 →</Link>
            <Link href="/compare" className="text-accent font-medium hover:underline">직접 비교하기 →</Link>
            <Link href="/vs" className="text-accent font-medium hover:underline">전체 비교 보기 →</Link>
          </div>
        </section>
      )}
    </article>
  );
}
