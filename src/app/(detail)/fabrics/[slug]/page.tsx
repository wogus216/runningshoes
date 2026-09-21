import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getFabricBySlug, getFabrics, getRelatedFabrics } from '@/lib/data/fabrics';
import { getPostBySlug } from '@/lib/data/blog';
import { fabricTypeMeta } from '@/types/fabric';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, IS_PRODUCTION_DEPLOY } from '@/lib/constants';
import { breadcrumbJsonLd } from '@/lib/seo/breadcrumb';
import {
  ClaimList,
  FabricDataTable,
  MisconceptionList,
  RelatedFabricPosts,
  RelatedFabrics,
  RichText,
  UnknownsPanel,
} from '@/components/fabric/fabric-sections';

type FabricDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getFabrics().map((fabric) => ({ slug: fabric.slug }));
}

export async function generateMetadata({ params }: FabricDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const fabric = getFabricBySlug(slug);

  if (!fabric) {
    return {
      title: '원단 정보를 찾을 수 없습니다',
      description: '요청하신 원단 주제를 찾을 수 없습니다.',
    };
  }

  const title = `${fabric.name} | 러닝복 원단 사전`;
  const description = `${fabric.summary} 근거 ${fabric.claims.length}건에 실명 출처를 달았습니다.`.slice(0, 160);

  return {
    title,
    description,
    keywords: (fabric.keywords ?? []).join(', '),
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: { canonical: `/fabrics/${fabric.slug}` },
    robots: {
      index: IS_PRODUCTION_DEPLOY,
      follow: IS_PRODUCTION_DEPLOY,
      googleBot: {
        index: IS_PRODUCTION_DEPLOY,
        follow: IS_PRODUCTION_DEPLOY,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'article',
      locale: 'ko_KR',
      siteName: SITE_NAME,
      title: `${fabric.name} — 러닝복 원단 사전`,
      description,
      url: `${SITE_URL}/fabrics/${fabric.slug}`,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: fabric.name }],
    },
  };
}

export default async function FabricDetailPage({ params }: FabricDetailPageProps) {
  const { slug } = await params;
  const fabric = getFabricBySlug(slug);

  if (!fabric) notFound();

  const typeMeta = fabricTypeMeta[fabric.type];
  const related = getRelatedFabrics(fabric);

  // 블로그 회유 링크. 조회를 **서버인 이 파일에서** 끝내고 제목·slug 만 넘긴다 —
  // 본문을 품은 BlogPost 를 그대로 내려보내면 클라 번들에 글 전체가 실린다(헤더 검색 인덱스 사례).
  // 없는 slug 는 조용히 버리지 않고 개발 중 경고한다(getRelatedFabrics 와 같은 규칙).
  const relatedPosts = (fabric.relatedPosts ?? [])
    .map((postSlug) => {
      const post = getPostBySlug(postSlug);
      if (!post && process.env.NODE_ENV !== 'production') {
        console.warn(`[fabrics] ${fabric.slug}.relatedPosts 가 없는 slug 를 가리킵니다: ${postSlug}`);
      }
      return post ? { slug: post.slug, title: post.title } : undefined;
    })
    .filter((post): post is { slug: string; title: string } => Boolean(post));

  // ⚠️ aggregateRating·review(Person 저자)는 넣지 않는다 — 이 사이트는 후기를 수집하지 않는다.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: fabric.name,
    description: fabric.summary,
    url: `${SITE_URL}/fabrics/${fabric.slug}`,
    dateModified: fabric.updatedAt,
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: { '@type': 'Organization', name: SITE_NAME },
    isPartOf: { '@type': 'CollectionPage', name: '러닝복 원단 사전', url: `${SITE_URL}/fabrics` },
    citation: fabric.claims.map((c) => c.source),
  };

  return (
    <article className="space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: '원단', path: '/fabrics' },
              { name: fabric.name, path: `/fabrics/${fabric.slug}` },
            ]),
          ),
        }}
      />

      <nav aria-label="경로" className="text-sm text-slate-600">
        <Link href="/fabrics" className="hover:text-signal-dark">
          러닝복 원단 사전
        </Link>
        <span aria-hidden="true" className="mx-2 text-slate-400">
          /
        </span>
        <span className="text-slate-500">{typeMeta.label}</span>
      </nav>

      <header className="space-y-4">
        <p className="text-sm font-semibold text-signal-dark">
          <span aria-hidden="true">{typeMeta.emoji}</span> {typeMeta.label}
        </p>
        <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">{fabric.name}</h1>
        {fabric.nameEn && <p className="text-sm text-slate-500">{fabric.nameEn}</p>}
        <p className="max-w-3xl text-[15px] leading-relaxed text-slate-700 sm:text-base">
          <RichText text={fabric.intro} />
        </p>
      </header>

      {fabric.measurements && fabric.measurements.length > 0 && (
        <section aria-labelledby="measurements" className="space-y-3">
          <h2 id="measurements" className="text-xl font-bold text-slate-900">
            숫자로 확인된 것
          </h2>
          <dl className="grid gap-3 sm:grid-cols-2">
            {fabric.measurements.map((m, i) => (
              <div key={i} className="rounded-[4px] border border-slate-200 bg-white p-4">
                <dt className="text-sm text-slate-600">{m.label}</dt>
                <dd className="mt-1 text-xl font-bold text-slate-900">{m.value}</dd>
                {m.note && <p className="mt-1 text-xs text-slate-500">{m.note}</p>}
              </div>
            ))}
          </dl>
        </section>
      )}

      {fabric.tables?.map((table, i) => (
        <section key={i} aria-label={table.caption}>
          <FabricDataTable table={table} />
        </section>
      ))}

      <section aria-labelledby="claims" className="space-y-4">
        <div>
          <h2 id="claims" className="text-xl font-bold text-slate-900">
            근거
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            각 항목의 등급과 출처를 함께 답니다. 등급 뜻은{' '}
            <Link href="/fabrics" className="text-signal-dark underline underline-offset-2">
              원단 사전 첫 페이지
            </Link>
            에 있습니다.
          </p>
        </div>
        <ClaimList claims={fabric.claims} />
      </section>

      {fabric.misconceptions && fabric.misconceptions.length > 0 && (
        <section aria-labelledby="misconceptions" className="space-y-4">
          <h2 id="misconceptions" className="text-xl font-bold text-slate-900">
            널리 퍼진 통념과 1차 소스
          </h2>
          <MisconceptionList items={fabric.misconceptions} />
        </section>
      )}

      <section aria-labelledby="unknowns">
        <h2 id="unknowns" className="sr-only">
          확인하지 못한 것
        </h2>
        <UnknownsPanel unknowns={fabric.unknowns} />
      </section>

      {related.length > 0 && (
        <section aria-labelledby="related" className="space-y-4">
          <h2 id="related" className="text-xl font-bold text-slate-900">
            함께 보면 좋은 주제
          </h2>
          <RelatedFabrics items={related} />
        </section>
      )}

      {relatedPosts.length > 0 && (
        <section aria-labelledby="related-posts" className="space-y-4">
          <h2 id="related-posts" className="text-xl font-bold text-slate-900">
            이 원단이 실제로 문제가 되는 상황
          </h2>
          <RelatedFabricPosts items={relatedPosts} />
        </section>
      )}

      <footer className="border-t border-slate-200 pt-5 text-sm text-slate-500">
        마지막 확인 {fabric.updatedAt} · 이 사이트는 러닝 의류를 직접 시험하지 않습니다.
      </footer>
    </article>
  );
}
