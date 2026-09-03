import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { getAllPairs, getPairBySlug, getPairsForCategory, getPairsForShoe } from '@/lib/pseo/pairs';
import { formatManwon, formatManwonExact } from '@/lib/format';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/lib/constants';
import { breadcrumbJsonLd } from '@/lib/seo/breadcrumb';
import { img } from '@/lib/image';
import type { Shoe } from '@/types/shoe';
import { withJosa } from '@/lib/korean';
import { buildVerdicts, buildNarrative, buildFaqs, specRows } from '@/lib/pseo/pair-copy';

type PageProps = { params: Promise<{ pair: string }> };

export function generateStaticParams() {
  return getAllPairs().map((p) => ({ pair: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { pair } = await params;
  const found = getPairBySlug(pair);
  if (!found) return { title: '비교 페이지를 찾을 수 없습니다' };
  const { a, b } = found;

  // 페어별 실측 차이 — description 과 title 접미사가 같은 값을 쓴다
  const priceGap = a.price && b.price ? Math.abs(a.price - b.price) : null;
  const weightGap = a.specs?.weight && b.specs?.weight ? Math.abs(a.specs.weight - b.specs.weight) : null;

  // description 은 페어마다 실제 수치를 넣는다. 종전 문구는 항목 나열이라 334개 페이지가 전부 같았다
  const facts: string[] = [];
  if (a.price && b.price && priceGap !== null) {
    facts.push(
      priceGap >= 10000
        ? `가격은 ${formatManwonExact(priceGap)} 차이(${a.name} ${a.price.toLocaleString()}원 / ${b.name} ${b.price.toLocaleString()}원)`
        : `가격은 둘 다 ${Math.round(a.price / 10000)}만원대`,
    );
  }
  if (a.specs?.weight && b.specs?.weight && weightGap !== null) {
    facts.push(
      weightGap >= 10
        ? `무게는 ${weightGap}g 차이(${a.specs.weight}g / ${b.specs.weight}g)`
        : `무게는 ${a.specs.weight}g 대 ${b.specs.weight}g로 비슷`,
    );
  }

  /**
   * 제목에 "차이"를 넣는다 — 2026-08-07 GSC 실측에서 이 의도의 검색어 형태가 "비교"가 아니라
   * **"차이"**였다(`페가수스 41 42 차이` CTR 13.8%, `젤카야노 32 33 차이` 17.9%).
   * 종전 제목은 "비교 — 어떤 게 더 좋을까?"라 실제 검색어와 어긋나 있었다.
   *
   * 접미사는 페어별 실측 수치로 만든다 — 종전 `무게·스택·가격 비교`는 **334개 페이지가 전부
   * 동일**해서 네이버 서치어드바이저가 "<title> 요소에 동일한 제목인 웹문서 다수 발견"으로
   * 잡고 있었다(2026-08-21 확인). 앞부분("A vs B 차이")은 GSC 로 검증된 형태라 건드리지 않는다.
   * 수치가 없는 페어는 종전 문구로 폴백한다.
   */
  const titleFacts: string[] = [];
  if (priceGap !== null && priceGap >= 10000) titleFacts.push(`가격 ${formatManwonExact(priceGap)}`);
  if (weightGap !== null && weightGap >= 5) titleFacts.push(`무게 ${weightGap}g`);
  const titleSuffix = titleFacts.length ? titleFacts.join('·') : '무게·스택·가격 비교';
  const title = `${a.brand} ${a.name} vs ${b.brand} ${b.name} 차이 — ${titleSuffix}`;
  // 모델명이 숫자로 끝나면 과/와·은/는이 갈린다(33→과, 32→와). 조사를 쓰지 않고 vs 로 잇는다
  const description = facts.length
    ? `${a.brand} ${a.name} vs ${b.brand} ${b.name} — 무엇이 다른가. ${facts.join(', ')}. 스택·드롭·토박스 너비·내구성까지 항목별로 나란히 놓고 한국 러너 기준으로 정리했습니다.`
    : `${a.brand} ${a.name} vs ${b.brand} ${b.name} — 무게, 스택, 드롭, 가격, 한국 러너 적합성을 데이터로 비교합니다.`;
  return {
    title,
    description,
    alternates: { canonical: `/vs/${pair}` },
    openGraph: {
      // 페이지가 openGraph 를 지정하면 layout 의 기본 이미지가 병합되지 않고 덮인다
      images: [DEFAULT_OG_IMAGE],
      type: 'article',
      locale: 'ko_KR',
      siteName: SITE_NAME,
      title,
      description,
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

function ShoeColumn({ shoe, label }: { shoe: Shoe; label: string }) {
  return (
    <div className="flex-1 text-center space-y-3">
      <div className="text-xs font-semibold text-signal-dark uppercase tracking-wide">{label}</div>
      {shoe.image && (
        <Link href={`/shoes/${shoe.slug}`} className="block relative w-full aspect-square max-w-[200px] mx-auto bg-surface rounded-[4px]">
          <Image src={img(shoe.image)} alt={`${shoe.brand} ${shoe.name}`} fill sizes="200px" className="object-contain p-2" />
        </Link>
      )}
      <div>
        <div className="text-xs text-tertiary uppercase">{shoe.brand}</div>
        <Link href={`/shoes/${shoe.slug}`} className="text-lg font-bold text-primary hover:text-accent">
          {shoe.name}
        </Link>
      </div>
      <div className="text-sm text-secondary">{formatManwon(shoe.price)}</div>
    </div>
  );
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
      description: `${a.brand} ${withJosa(a.name, '과/와')} ${b.brand} ${b.name}의 무게·스택·드롭·가격·한국 러너 적합성을 데이터로 비교합니다.`,
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
    breadcrumbJsonLd([
      { name: '신발 비교', path: '/vs' },
      { name: `${a.name} vs ${b.name}`, path: `/vs/${pair}` },
    ]),
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
          더 깊은 분석이 필요하면 <Link href={`/shoes/${a.slug}`} className="text-signal-dark hover:underline">{a.name}</Link>·
          <Link href={`/shoes/${b.slug}`} className="text-signal-dark hover:underline">{b.name}</Link> 상세 페이지와{' '}
          <Link href="/recommend" className="text-signal-dark hover:underline">1분 러닝화 추천</Link>을 활용하세요.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">상황별 승자</h2>
        <ul className="space-y-2">
          {verdicts.map((v, i) => {
            const winnerName = v.winnerSlug === 'a' ? `${a.brand} ${a.name}` : v.winnerSlug === 'b' ? `${b.brand} ${b.name}` : '동일';
            const winnerColor = v.winnerSlug === 'tie' ? 'text-tertiary' : 'text-signal-dark';
            return (
              <li key={i} className="flex items-start justify-between gap-4 p-3 bg-white border border-border rounded-[4px]">
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
              <details key={i} className="group bg-white border border-border rounded-[4px] p-4">
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
        <Link href={`/shoes/${a.slug}`} className="block p-4 bg-surface rounded-[4px] hover:bg-white transition border border-border">
          <div className="text-xs text-tertiary uppercase">상세 보기</div>
          <div className="font-semibold text-primary">{a.brand} {a.name} →</div>
        </Link>
        <Link href={`/shoes/${b.slug}`} className="block p-4 bg-surface rounded-[4px] hover:bg-white transition border border-border">
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
                    <Link href={`/vs/${p.slug}`} className="block p-3 bg-surface rounded-[4px] hover:bg-white transition border border-border text-sm text-primary">
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
            <Link href="/recommend" className="text-signal-dark font-medium hover:underline">1분 러닝화 추천 →</Link>
            <Link href="/compare" className="text-signal-dark font-medium hover:underline">직접 비교하기 →</Link>
            <Link href="/vs" className="text-signal-dark font-medium hover:underline">전체 비교 보기 →</Link>
          </div>
        </section>
      )}
    </article>
  );
}
