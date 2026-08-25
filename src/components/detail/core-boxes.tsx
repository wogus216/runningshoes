import type { Shoe } from '@/types/shoe';
import { Check, X, Star } from 'lucide-react';

type CoreBoxesProps = {
  shoe: Shoe;
};

/**
 * 추천/비추천 대상에 쓰인 러닝 용어를 처음 한 번만 풀어준다.
 *
 * 2026-08-25 모바일 페르소나 평가에서, 러닝 4개월차 입문자가 "이 신발이 나에게 맞나"를
 * 판단하지 못한 이유가 위치가 아니라 **용어**였다. 추천 대상이
 * `과내전 러너 · 이지런·회복주 위주 러너 · 아킬레스 부담` 처럼 적혀 있으면
 * 자기가 거기 속하는지조차 알 수 없어 목록 전체가 무용지물이 된다.
 *
 * 수록 기준은 취향이 아니라 실측이다 — 130종 targetUsers 982개 항목을 세어
 * 빈도가 높으면서 입문자에게 낯선 것만 담았다(과내전 54 · 템포 50 · 인터벌 13 · 미드풋 8 …).
 * '입문 러너'(37회 최다)처럼 이미 쉬운 말은 건드리지 않는다.
 *
 * 긴 것부터 매칭한다 — '과내전'을 먼저 잡으면 '평발/과내전'이 쪼개진다.
 */
const TERM_GLOSS: [term: string, gloss: string][] = [
  ['힐스트라이커', '뒤꿈치부터 닿는 러너'],
  ['힐 스트라이크', '뒤꿈치부터 착지'],
  ['케이던스', '분당 발걸음 수'],
  ['과내전', '착지할 때 발이 안쪽으로 무너지는 편'],
  ['과외전', '착지할 때 발이 바깥쪽으로 기우는 편'],
  // '이지런·회복주'처럼 붙어 나오는 경우가 있어 앞에 오는 말을 먼저 푼다
  // (한 항목당 하나만 풀므로, 순서가 곧 어느 쪽이 설명될지를 정한다)
  ['이지런', '대화가 되는 편한 페이스'],
  ['회복주', '힘든 훈련 다음날 가볍게'],
  ['인터벌', '빠르게 뛰고 쉬기를 반복하는 훈련'],
  ['미드풋', '발 중간으로 착지'],
  ['포어풋', '앞발로 착지'],
  ['서브3', '풀코스 3시간 이내'],
  ['템포', '대회 페이스에 가깝게 일정히 빠른'],
];

/** 이미 등장한 용어는 다시 설명하지 않는다 — 카드가 괄호로 뒤덮이지 않게. */
function glossOnce(text: string, used: Set<string>): string {
  for (const [term, gloss] of TERM_GLOSS) {
    if (used.has(term)) continue;
    if (!text.includes(term)) continue;
    // 원문이 이미 괄호로 풀어 쓴 경우엔 건드리지 않는다
    if (text.includes(`${term}(`) || text.includes(`${term} (`)) continue;
    used.add(term);
    return text.replace(term, `${term}(${gloss})`);
  }
  return text;
}

export function CoreBoxes({ shoe }: CoreBoxesProps) {
  // 추천·비추천을 한 흐름으로 보고 용어를 푼다 — 추천에서 이미 푼 말을 비추천에서 또 풀지 않는다
  const used = new Set<string>();
  const recommended = (shoe.targetUsers?.recommended ?? []).slice(0, 4).map(t => glossOnce(t, used));
  const notRecommended = (shoe.targetUsers?.notRecommended ?? []).slice(0, 4).map(t => glossOnce(t, used));

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* 추천 대상 */}
      <div className="section-card border border-sky-200 bg-sky-50/70 p-4 md:p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-sky-700">
            <Check className="w-4 h-4 text-white" />
          </span>
          <h3 className="font-semibold text-sm text-primary">추천 대상</h3>
        </div>
        <ul className="space-y-2 text-sm text-secondary">
          {recommended.map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
      </div>

      {/* 비추천 대상 */}
      <div className="section-card border border-rose-200 bg-rose-50/80 p-4 md:p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-rose-600">
            <X className="w-4 h-4 text-white" />
          </span>
          <h3 className="font-semibold text-sm text-primary">비추천 대상</h3>
        </div>
        <ul className="space-y-2 text-sm text-secondary">
          {notRecommended.map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
      </div>

      {/* 핵심 특징 */}
      <div className="section-card border border-[var(--accent-line)] bg-white/84 p-4 md:p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-sky-500">
            <Star className="w-4 h-4 text-white" />
          </span>
          <h3 className="font-semibold text-sm text-primary">핵심 특징</h3>
        </div>
        <ul className="space-y-2 text-sm text-secondary">
          {shoe.features?.slice(0, 4).map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
