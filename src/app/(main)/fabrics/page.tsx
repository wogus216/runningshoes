import type { Metadata } from 'next';
import Link from 'next/link';
import { getFabrics, groupFabricsByType } from '@/lib/data/fabrics';
import { fabricTypeMeta, fabricTypeOrder, evidenceGradeLabels, evidenceGradeOrder } from '@/types/fabric';
import { SITE_URL } from '@/lib/constants';
import { breadcrumbJsonLd } from '@/lib/seo/breadcrumb';
import { EvidenceBadge, RichText } from '@/components/fabric/fabric-sections';

export function generateMetadata(): Metadata {
  // 카운트는 데이터에서 산출한다 — 메타에 하드코딩하면 페이지가 늘고 줄 때 조용히 틀려진다
  const count = getFabrics().length;

  return {
    title: '러닝복 원단 사전 | 소재·브랜드 상표·시험 규격을 근거와 함께',
    description:
      `러닝 의류 원단 ${count}개 주제를 1차 소스로 정리했습니다. 폴리에스터 수분율, Dri-FIT의 실제 조성, ` +
      'ISO 11092 증발저항, 한국소비자원 러닝 재킷 8종 실측까지. 모든 주장에 실명 출처와 근거 등급을 답니다.',
    keywords:
      '러닝복 원단, 기능성 의류 소재, 흡한속건, 폴리에스터, Dri-FIT, AEROREADY, 러닝 재킷 비교, 한국소비자원 러닝 재킷',
    alternates: { canonical: '/fabrics' },
  };
}

export default function FabricsPage() {
  const all = getFabrics();
  const grouped = groupFabricsByType(all);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: '러닝복 원단 사전',
    description: `러닝 의류 원단 ${all.length}개 주제를 1차 소스 근거와 함께 정리`,
    url: `${SITE_URL}/fabrics`,
    hasPart: all.map((f) => ({
      '@type': 'Article',
      headline: f.name,
      description: f.summary,
      url: `${SITE_URL}/fabrics/${f.slug}`,
    })),
  };

  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: '원단', path: '/fabrics' }])) }}
      />

      <header className="space-y-4">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">러닝복 원단 사전</h1>
        <p className="max-w-3xl text-[15px] leading-relaxed text-slate-700 sm:text-base">
          러닝화에는 제3자가 20개 넘는 항목을 실측해 공개하는 곳이 있습니다. <strong>러닝 의류에는 없습니다.</strong>{' '}
          브랜드는 조성도 성능 수치도 기술 페이지에 적지 않습니다. 그래서 이 섹션은 신발처럼 스펙을 나열한 비교표를
          만들지 않습니다 — 그렇게 하면 빈칸을 추정으로 메우게 됩니다.
        </p>
        <p className="max-w-3xl text-[15px] leading-relaxed text-slate-700 sm:text-base">
          대신 <strong>수치가 실제로 존재하는 자리</strong>를 찾아 그대로 옮기고, 없는 자리는 없다고 적습니다. 모든
          주장에 실명 출처와 아래 근거 등급이 붙습니다.
        </p>
      </header>

      {/* 등급 범례 — 페이지 전체를 읽는 열쇠라 맨 위에 둔다 */}
      <section aria-labelledby="grade-legend" className="rounded-[4px] border border-slate-200 bg-slate-50 p-4 sm:p-5">
        <h2 id="grade-legend" className="text-base font-bold text-slate-800">
          근거 등급 읽는 법
        </h2>
        <dl className="mt-3 grid grid-cols-2 gap-2 sm:block sm:space-y-3">
          {evidenceGradeOrder.map((g) => (
            <div key={g} className="flex min-w-0 flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-3">
              <dt className="shrink-0">
                <EvidenceBadge grade={g} />
              </dt>
              <dd className="hidden text-sm leading-relaxed text-slate-700 sm:block">{evidenceGradeLabels[g].desc}</dd>
            </div>
          ))}
        </dl>
      </section>

      {fabricTypeOrder.map((type) => {
        const items = grouped[type];
        if (items.length === 0) return null;
        const meta = fabricTypeMeta[type];

        return (
          <section key={type} aria-labelledby={`section-${type}`} className="space-y-4">
            <div>
              <h2 id={`section-${type}`} className="text-xl font-bold text-slate-900 sm:text-2xl">
                <span aria-hidden="true">{meta.emoji}</span> {meta.label}
              </h2>
              <p className="mt-1 text-sm text-slate-600">{meta.desc}</p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {items.map((fabric) => (
                <li key={fabric.slug}>
                  <Link
                    href={{ pathname: `/fabrics/${fabric.slug}` }}
                    className="flex h-full flex-col rounded-[4px] border border-slate-200 bg-white p-5 transition-colors hover:border-slate-400"
                  >
                    <h3 className="text-lg font-bold text-slate-900">{fabric.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-700">
                      <RichText text={fabric.summary} />
                    </p>
                    <p className="mt-3 text-xs text-slate-500">
                      근거 {fabric.claims.length}건 · 확인 못 한 것 {fabric.unknowns.length}건
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <section className="rounded-[4px] border border-slate-300 bg-slate-50 p-5">
        <h2 className="text-base font-bold text-slate-800">이 섹션이 하지 않는 것</h2>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
          <li>· 시착·자체 랩 테스트를 하지 않습니다. 여기 있는 수치는 전부 남이 잰 것이고, 잰 사람의 이름을 답니다.</li>
          <li>· 실사용 후기를 수집하지 않습니다. 따라서 &ldquo;후기가 많다&rdquo;를 근거로 쓰지 않습니다.</li>
          <li>· 출처를 못 찾은 수치는 싣지 않습니다. 대신 「확인하지 못한 것」에 적어 둡니다.</li>
        </ul>
      </section>
    </div>
  );
}
