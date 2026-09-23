import { Fragment } from 'react';
import Link from 'next/link';
import { AlertTriangle, BookOpen, ExternalLink, HelpCircle, XCircle } from 'lucide-react';
import type { EvidenceGrade, Fabric, FabricClaim, FabricTable } from '@/types/fabric';
import { evidenceGradeLabels } from '@/types/fabric';

// 색은 사전 계산된 스케일(slate-*/sky-*)만 쓴다.
// 시맨틱 토큰(primary 등)은 var() 참조라 `text-primary/70` 같은 오파시티 변형이 생성되지 않는다.
const gradeStyles: Record<EvidenceGrade, string> = {
  A: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  B: 'bg-amber-50 text-amber-900 border-amber-200',
  C: 'bg-slate-100 text-slate-700 border-slate-300',
  S: 'bg-sky-50 text-sky-800 border-sky-200',
};

/**
 * 원단 데이터의 본문은 `**강조**` 표기만 허용한다.
 *
 * 블로그처럼 HTML 문자열을 넣지 않는 이유는 이 섹션의 문장이 전부 사실 주장이라
 * 마크업 실수가 곧 오독이 되기 때문이다. 굵게 하나만 있으면 충분하고,
 * dangerouslySetInnerHTML 없이 처리할 수 있다.
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**') && part.length > 4 ? (
          <strong key={i} className="font-bold">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

export function EvidenceBadge({ grade }: { grade: EvidenceGrade }) {
  const meta = evidenceGradeLabels[grade];
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1 rounded-[3px] border px-2 py-0.5 text-xs font-semibold ${gradeStyles[grade]}`}
      title={meta.desc}
    >
      <span>{grade}</span>
      <span className="font-medium">{meta.label}</span>
    </span>
  );
}

export function ClaimList({ claims }: { claims: FabricClaim[] }) {
  return (
    <ul className="space-y-5">
      {claims.map((claim, i) => (
        <li key={i} className="rounded-[4px] border border-slate-200 bg-white p-4 sm:p-5">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <EvidenceBadge grade={claim.grade} />
          </div>
          <p className="text-[15px] leading-relaxed text-slate-800"><RichText text={claim.text} /></p>

          <p className="mt-3 border-t border-slate-100 pt-3 text-sm text-slate-600">
            <span className="font-semibold text-slate-700">출처 </span>
            {claim.sourceUrl ? (
              <a
                href={claim.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-signal-dark underline underline-offset-2"
              >
                {claim.source}
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            ) : (
              claim.source
            )}
          </p>

          {claim.caveat && (
            <p className="mt-2 flex gap-2 rounded-[3px] bg-amber-50 p-3 text-sm leading-relaxed text-amber-900">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span><RichText text={claim.caveat} /></span>
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

export function FabricDataTable({ table }: { table: FabricTable }) {
  return (
    <figure className="rounded-[4px] border border-slate-200 bg-white">
      <figcaption className="border-b border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800">
        {table.caption}
      </figcaption>
      {/* 넓은 표는 페이지가 아니라 표가 가로 스크롤한다 */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="bg-slate-50 text-left">
              {table.headers.map((h) => (
                <th key={h} scope="col" className="whitespace-nowrap px-3 py-2 font-semibold text-slate-700">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, ri) => (
              <tr key={ri} className="border-t border-slate-100">
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`whitespace-nowrap px-3 py-2 ${ci === 0 ? 'font-semibold text-slate-800' : 'text-slate-700'}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.footnotes && table.footnotes.length > 0 && (
        <ul className="space-y-1 border-t border-slate-200 px-4 py-3">
          {table.footnotes.map((note, i) => (
            <li key={i} className="text-xs leading-relaxed text-slate-600">
              <RichText text={note} />
            </li>
          ))}
        </ul>
      )}
    </figure>
  );
}

export function MisconceptionList({ items }: { items: NonNullable<Fabric['misconceptions']> }) {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="rounded-[4px] border border-slate-200 bg-white p-4 sm:p-5">
          <p className="flex gap-2 text-[15px] font-semibold leading-relaxed text-slate-500">
            <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
            <span className="line-through decoration-slate-300"><RichText text={item.myth} /></span>
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-800"><RichText text={item.reality} /></p>
          <p className="mt-3 border-t border-slate-100 pt-3 text-sm text-slate-600">
            <span className="font-semibold text-slate-700">출처 </span>
            {item.sourceUrl ? (
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-signal-dark underline underline-offset-2"
              >
                {item.source}
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            ) : (
              item.source
            )}
          </p>
        </li>
      ))}
    </ul>
  );
}

/**
 * 확인하지 못한 것.
 *
 * 이 블록을 접히게 만들거나 페이지 맨 아래 각주로 밀지 않는다 —
 * 모르는 것을 모른다고 적는 게 이 섹션의 존재 이유다.
 */
export function UnknownsPanel({ unknowns }: { unknowns: string[] }) {
  return (
    <div className="rounded-[4px] border border-slate-300 bg-slate-50 p-4 sm:p-5">
      <h3 className="flex items-center gap-2 text-base font-bold text-slate-800">
        <HelpCircle className="h-4 w-4" aria-hidden="true" />
        확인하지 못한 것
      </h3>
      <p className="mt-1 text-sm text-slate-600">
        이 사이트는 러닝 의류를 직접 시험하지 않습니다. 아래는 1차 소스를 찾지 못했거나, 찾았지만 수치가 없던 항목입니다.
      </p>
      <ul className="mt-3 space-y-2">
        {unknowns.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-700">
            <span aria-hidden="true" className="text-slate-400">
              ·
            </span>
            <span><RichText text={item} /></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RelatedFabrics({ items }: { items: Fabric[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((f) => (
        <li key={f.slug}>
          <Link
            href={{ pathname: `/fabrics/${f.slug}` }}
            className="block h-full rounded-[4px] border border-slate-200 bg-white p-4 transition-colors hover:border-slate-400"
          >
            <span className="block font-semibold text-slate-900">{f.name}</span>
            <span className="mt-1 block text-sm leading-relaxed text-slate-600"><RichText text={f.summary} /></span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/**
 * 원단 페이지 → 블로그 회유.
 *
 * 원단 지식은 그 자체로 검색되지 않는다 — 사람들이 검색하는 건 "장마철 러닝",
 * "폭염에 뭐 입지" 같은 **상황**이다. 그 상황을 다룬 글로 넘겨야 이 섹션이 고립되지 않는다.
 * 본문을 품은 BlogPost 를 받지 않고 제목·slug 만 받는다(번들 보호는 호출부 주석 참고).
 */
export function RelatedFabricPosts({ items }: { items: { slug: string; title: string }[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="space-y-2">
      {items.map((post) => (
        <li key={post.slug}>
          <Link
            href={{ pathname: `/blog/${post.slug}` }}
            className="flex items-start gap-2 rounded-[4px] border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
          >
            <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden />
            <span>{post.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
