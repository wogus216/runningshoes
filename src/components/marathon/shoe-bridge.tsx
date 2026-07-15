import Link from 'next/link';
import Image from 'next/image';
import { Footprints, Zap, ArrowRight } from 'lucide-react';
import { getCardShoes, type CardShoe } from '@/lib/data/shoes';
import { getGels } from '@/lib/data/gels';
import type { Gel } from '@/types/gel';
import { img } from '@/lib/image';

type ShoeBridgeProps = {
  distances: string[];
  eventName: string;
};

type PricedShoe = CardShoe & { price: number; image: string };

type Hub = { label: string; href: string };

// 빌드 타임 1회 계산 (대회 페이지마다 재호출 방지)
// price 없는(한국 미출시) 신발은 추천에서 제외
const ALL_SHOES = getCardShoes().filter(
  (s): s is PricedShoe =>
    typeof s.image === 'string' && typeof s.price === 'number',
);
const ALL_GELS = getGels().filter(
  (g): g is Gel & { image: string } => typeof g.image === 'string',
);

type DistanceProfile = {
  hasMarathon: boolean;
  hasHalf: boolean;
  has10K: boolean;
  has5K: boolean;
  hasTrail: boolean;
  hasUltra: boolean;
};

function analyzeDistances(distances: string[]): DistanceProfile {
  const joined = distances.join('|').toLowerCase();
  return {
    hasMarathon: /풀|full|마라톤$/.test(joined) || distances.some((d) => /^42|풀|full|마라톤$/.test(d)),
    hasHalf: /하프|half|21/.test(joined),
    has10K: /10\s*k|10km/.test(joined) || distances.includes('10K'),
    has5K: /5\s*k|5km/.test(joined) || distances.includes('5K'),
    hasTrail: /트레일|trail/.test(joined),
    hasUltra: /울트라|ultra|100k|50k/.test(joined),
  };
}

// 대회 거리 → 추천 신발 카테고리 (최장 거리 우선)
function shoeCategoriesFor(p: DistanceProfile): string[] {
  if (p.hasTrail) return ['트레일', '쿠션화'];
  if (p.hasUltra) return ['쿠션화', '트레일'];
  if (p.hasMarathon) return ['레이싱', '쿠션화'];
  if (p.hasHalf) return ['레이싱', '데일리'];
  if (p.has10K || p.has5K) return ['데일리', '입문화'];
  return ['입문화', '데일리'];
}

// 카테고리별 rating 상위 신발을 모아 최대 4종 (결정적 정렬, 중복 제거)
function pickShoes(categories: string[]): PricedShoe[] {
  const picked: PricedShoe[] = [];
  const seen = new Set<string>();
  for (const cat of categories) {
    const inCat = ALL_SHOES
      .filter((s) => s.category === cat && !seen.has(s.slug))
      .sort((x, y) => y.rating - x.rating || y.price - x.price)
      .slice(0, 2);
    for (const s of inCat) {
      picked.push(s);
      seen.add(s.slug);
    }
  }
  return picked.slice(0, 4);
}

function hubsFor(p: DistanceProfile): Hub[] {
  const hubs: Hub[] = [];
  if (p.hasMarathon) hubs.push({ label: '풀마라톤 러닝화', href: '/best/marathon' });
  if (p.hasHalf) hubs.push({ label: '하프마라톤 러닝화', href: '/best/half-marathon' });
  if (p.has10K || p.has5K) hubs.push({ label: '10K 러닝화', href: '/best/10k' });
  hubs.push({ label: '입문자 러닝화', href: '/best/beginner' });
  const seen = new Set<string>();
  return hubs.filter((h) => (seen.has(h.href) ? false : (seen.add(h.href), true)));
}

const categoryBadge: Record<string, string> = {
  '레이싱': 'bg-rose-100 text-rose-700',
  '쿠션화': 'bg-sky-100 text-sky-700',
  '데일리': 'bg-emerald-100 text-emerald-700',
  '입문화': 'bg-amber-100 text-amber-700',
  '안정화': 'bg-violet-100 text-violet-700',
  '트레일': 'bg-lime-100 text-lime-700',
};

export function MarathonShoeBridge({ distances, eventName }: ShoeBridgeProps) {
  const profile = analyzeDistances(distances);
  const shoes = pickShoes(shoeCategoriesFor(profile));
  if (shoes.length === 0) return null;

  const needsGel = profile.hasMarathon || profile.hasHalf || profile.hasUltra;
  const gels = needsGel
    ? [...ALL_GELS].sort((x, y) => y.rating - x.rating).slice(0, 2)
    : [];
  const hubs = hubsFor(profile);

  return (
    <section className="section-card border border-[var(--accent-line)] bg-white/84 p-6">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-primary flex items-center gap-2">
          <Footprints className="h-5 w-5 text-sky-700" />
          {eventName} 준비용 러닝화 추천
        </h2>
        <p className="mt-1 text-sm text-secondary">
          이 대회 거리에 맞춰 데이터로 고른 러닝화입니다. 상세 후기·스펙·구매처를 확인하세요.
        </p>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2">
        {shoes.map((s) => (
          <li key={s.slug}>
            <Link prefetch={false}
              href={`/shoes/${s.slug}` as never}
              className="group flex items-center gap-3 rounded-xl border border-border bg-surface/50 p-3 transition hover:border-accent hover:bg-white"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-white">
                <Image
                  src={img(s.image as string)}
                  alt={`${s.brand} ${s.name}`}
                  fill
                  sizes="64px"
                  className="object-contain p-1"
                />
              </div>
              <div className="min-w-0 flex-1">
                <span
                  className={`inline-block rounded px-1.5 py-0.5 text-[11px] font-medium ${categoryBadge[s.category] || 'bg-slate-100 text-slate-700'}`}
                >
                  {s.category}
                </span>
                <div className="mt-0.5 truncate font-semibold text-primary transition group-hover:text-accent">
                  {s.brand} {s.name}
                </div>
                <div className="truncate text-xs text-tertiary">
                  {s.price.toLocaleString('ko-KR')}원{s.oneliner ? ` · ${s.oneliner}` : ''}
                </div>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-tertiary transition group-hover:text-accent" />
            </Link>
          </li>
        ))}
      </ul>

      {gels.length > 0 && (
        <>
          <h3 className="mt-5 mb-2 flex items-center gap-1.5 text-sm font-semibold text-secondary">
            <Zap className="h-4 w-4 text-amber-500" />
            장거리 보급용 에너지 젤
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {gels.map((g) => (
              <li key={g.slug}>
                <Link prefetch={false}
                  href={`/gels/${g.slug}` as never}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-surface/50 p-3 transition hover:border-accent hover:bg-white"
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-white">
                    <Image
                      src={img(g.image as string)}
                      alt={`${g.brand} ${g.name}`}
                      fill
                      sizes="56px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-semibold text-primary transition group-hover:text-accent">
                      {g.brand} {g.name}
                    </div>
                    <div className="truncate text-xs text-tertiary">
                      탄수화물 {g.nutritionFacts.totalCarbs}g
                      {typeof g.price === 'number' ? ` · ${g.price.toLocaleString('ko-KR')}원` : ''}
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-tertiary transition group-hover:text-accent" />
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {hubs.length > 0 && (
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-border pt-3 text-xs">
          <span className="text-tertiary">거리별 전체 추천:</span>
          {hubs.map((h) => (
            <Link prefetch={false} key={h.href} href={h.href as never} className="font-medium text-sky-700 hover:underline">
              {h.label}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
