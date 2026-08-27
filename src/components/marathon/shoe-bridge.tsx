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
  excludeSlugs?: string[];
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
  // 풀코스에 '데일리'를 3순위로 둔다 — 앞의 둘만으로는 15만원 미만이 아예 없어
  // 완주용 밴드가 빈 채로 렌더됐다(2026-08-23 실측: 풀코스 포함 31개 대회가 그랬다).
  // 서브3급이 아닌 대다수 완주 목표 참가자에게 데일리 트레이너는 표준 선택지다.
  if (p.hasMarathon) return ['레이싱', '쿠션화', '데일리'];
  if (p.hasHalf) return ['레이싱', '데일리'];
  if (p.has10K || p.has5K) return ['데일리', '입문화'];
  return ['입문화', '데일리'];
}

/**
 * 가격 밴드 — CLAUDE.md 가격대 분류(10~15만 입문 / 15~20 시리어스 초보 /
 * 20~25 프리미엄 / 25만+ 카본)를 3구간으로 압축한 것.
 *
 * **왜 밴드가 필요한가**: 종전에는 카테고리 안에서 rating 순으로만 뽑았는데,
 * 최고 평점 = 최고가 플래그십이라 참가비 7만원짜리 대회가 39.9만원 카본화를
 * 먼저 보여주고 있었다(2026-08-23 실측: 고프리런 추천 4종 평균 30.6만원,
 * 손기정 33.6만원). 같은 날 측정에서 마라톤 진입 세션의 신발 도달률이
 * **2.6%** 로 블로그(9.3%)·/best(72%)보다 압도적으로 낮았고, 위치(본문 27%)와
 * 설명 길이(336자)는 실측으로 배제돼 가격대가 남은 후보였다.
 */
/**
 * 경계는 **DB 실제 가격 분포**에서 잡았다(2026-08-23 기준 127종: 25% 18.9만 ·
 * 중앙값 21.9만 · 75% 25.9만). CLAUDE.md 의 명목 분류(10~15만 입문 등)를 그대로
 * 쓰면 15만 미만이 **6종뿐**이라 저가 슬롯이 한 신발로 고정된다 — 실제로 그렇게
 * 만들었더니 109개 대회 중 96개가 같은 신발을 추천했다. 한국 러닝화 가격대가
 * 올라 명목 분류가 현실과 벌어진 것이다.
 *
 * **신발을 추가·삭제해 분포가 바뀌면 이 경계도 다시 봐야 한다.**
 */
const PRICE_BANDS = [
  { min: 0, max: 190_000, slots: 1 },
  { min: 190_000, max: 260_000, slots: 2 },
  { min: 260_000, max: Infinity, slots: 1 },
] as const;

/** 가격대가 곧 목적이다 — 카드에 붙여 "완주냐 기록이냐"를 먼저 읽히게 한다 */
export function purposeLabel(price: number): string {
  if (price < 190_000) return '입문·완주';
  if (price < 260_000) return '주력';
  return '기록 도전';
}

/**
 * 거리에 맞는 카테고리 안에서, 가격 밴드별로 배분해 최대 4종.
 * 밴드가 비면 그만큼 전체 풀에서 보충한다(결정적 정렬, 중복 제거).
 * excludeSlugs: 본문에 이미 링크된 신발 — 카드에서 중복 노출하지 않는다
 */
function pickShoes(categories: string[], excludeSlugs: string[] = []): PricedShoe[] {
  const pool = ALL_SHOES.filter((s) => categories.includes(s.category));
  const picked: PricedShoe[] = [];
  const seen = new Set<string>(excludeSlugs);

  const take = (min: number, max: number, n: number): number => {
    if (n <= 0) return 0;
    // 아직 안 뽑힌 카테고리를 먼저 — 이게 없으면 1순위 카테고리가 네 칸을 다 먹는다.
    // (하프=['레이싱','데일리'] 에서 레이싱만 4장 나오던 회귀를 2026-08-23 렌더 확인으로 잡음)
    const usedCats = new Set(picked.map((s) => s.category));
    const got = pool
      .filter((s) => !seen.has(s.slug) && s.price >= min && s.price < max)
      .sort(
        (x, y) =>
          Number(usedCats.has(x.category)) - Number(usedCats.has(y.category)) ||
          categories.indexOf(x.category) - categories.indexOf(y.category) ||
          y.rating - x.rating ||
          x.price - y.price,
      )
      .slice(0, n);
    for (const s of got) {
      picked.push(s);
      seen.add(s.slug);
    }
    return got.length;
  };

  // 한 장씩 뽑는다 — 여러 장을 한 번에 뽑으면 그 안에서 usedCats 가 갱신되지 않아
  // 같은 밴드의 두 칸이 같은 카테고리로 채워진다
  let deficit = 0;
  for (const b of PRICE_BANDS) {
    for (let i = 0; i < b.slots; i++) deficit += 1 - take(b.min, b.max, 1);
  }
  for (let i = 0; i < deficit; i++) take(0, Infinity, 1); // 빈 밴드만큼 전체에서 보충

  // 싼 것부터 — 참가자 대다수의 목표는 기록이 아니라 완주다
  return picked.sort((x, y) => x.price - y.price).slice(0, 4);
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
  '데일리': 'bg-[var(--positive-soft)] text-positive',
  '입문화': 'bg-amber-100 text-amber-700',
  '안정화': 'bg-violet-100 text-violet-700',
  '트레일': 'bg-lime-100 text-lime-700',
};

export function MarathonShoeBridge({ distances, eventName, excludeSlugs = [] }: ShoeBridgeProps) {
  const profile = analyzeDistances(distances);
  const shoes = pickShoes(shoeCategoriesFor(profile), excludeSlugs);
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
          이 대회 거리에 맞춰 <strong className="font-semibold text-primary">가격대별로</strong> 골랐습니다.
          완주가 목표면 위쪽부터, 기록을 노리면 아래쪽을 보세요.
        </p>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2">
        {shoes.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/shoes/${s.slug}` as never}
              className="group flex items-center gap-3 rounded-[4px] border border-border bg-[var(--surface-veil-50)] p-3 transition hover:border-accent hover:bg-white"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[4px] bg-white">
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
                {/* 가격대 = 목적. 카테고리(신발 성격)만으로는 "나한테 맞나"가 안 읽힌다 */}
                <span className="ml-1.5 text-[11px] text-tertiary">{purposeLabel(s.price)}</span>
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
                <Link
                  href={`/gels/${g.slug}` as never}
                  className="group flex items-center gap-3 rounded-[4px] border border-border bg-[var(--surface-veil-50)] p-3 transition hover:border-accent hover:bg-white"
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[4px] bg-white">
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
            <Link key={h.href} href={h.href as never} className="font-medium text-sky-700 hover:underline">
              {h.label}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
