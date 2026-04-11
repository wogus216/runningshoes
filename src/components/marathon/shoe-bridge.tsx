import Link from 'next/link';
import { Footprints, ArrowRight } from 'lucide-react';

type ShoeBridgeProps = {
  distances: string[];
  eventName: string;
};

type Match = {
  label: string;
  description: string;
  href: string;
};

function mapDistancesToBest(distances: string[]): Match[] {
  const out: Match[] = [];
  const joined = distances.join('|').toLowerCase();

  const hasMarathon = /42|풀|full|마라톤$/.test(joined) || distances.some((d) => /풀|full|마라톤$|^42/.test(d));
  const hasHalf = /하프|half|^21/.test(joined);
  const has10K = /10\s*k|^10km|^10$/.test(joined) || distances.includes('10km');
  const has5K = /5\s*k|^5km|^5$/.test(joined);

  if (hasMarathon) {
    out.push({
      label: '풀마라톤 러닝화 TOP',
      description: '42.195km를 완주할 카본 슈퍼슈즈와 두꺼운 쿠션화를 페이스별로 정리했습니다.',
      href: '/best/marathon',
    });
  }
  if (hasHalf) {
    out.push({
      label: '하프마라톤 러닝화 TOP',
      description: '21.0975km 완주·PB 갱신에 적합한 가벼운 트레이너와 카본 레이싱.',
      href: '/best/half-marathon',
    });
  }
  if (has10K || has5K) {
    out.push({
      label: '10K 러닝화 TOP',
      description: '짧은 거리에 최적인 가볍고 반응성 좋은 러닝화.',
      href: '/best/10k',
    });
  }
  // 거의 모든 대회에 입문 러너가 있음
  out.push({
    label: '입문자를 위한 러닝화',
    description: '첫 대회 준비에 가장 안전한 부드러운 입문화 모음.',
    href: '/best/beginner',
  });

  // 중복 제거
  const seen = new Set<string>();
  return out.filter((m) => {
    if (seen.has(m.href)) return false;
    seen.add(m.href);
    return true;
  });
}

export function MarathonShoeBridge({ distances, eventName }: ShoeBridgeProps) {
  const matches = mapDistancesToBest(distances);
  if (matches.length === 0) return null;

  return (
    <section className="section-card border border-[var(--accent-line)] bg-white/84 p-6">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-primary flex items-center gap-2">
          <Footprints className="h-5 w-5 text-sky-700" />
          {eventName} 준비용 러닝화
        </h2>
        <p className="mt-1 text-sm text-secondary">
          이 대회 거리에 적합한 신발 가이드를 모았습니다. 데이터 기반 추천 리스트로 이동합니다.
        </p>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {matches.map((m) => (
          <li key={m.href}>
            <Link
              href={m.href as never}
              className="group flex items-start gap-3 rounded-xl border border-border bg-surface/50 p-4 transition hover:border-accent hover:bg-white"
            >
              <div className="flex-1">
                <div className="font-semibold text-primary group-hover:text-accent transition">
                  {m.label}
                </div>
                <div className="text-xs text-tertiary mt-1 leading-relaxed">{m.description}</div>
              </div>
              <ArrowRight className="h-4 w-4 text-tertiary shrink-0 mt-0.5 group-hover:text-accent transition" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
