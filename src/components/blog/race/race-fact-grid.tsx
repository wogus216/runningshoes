import type { RaceFact } from '@/types/blog';

/** 대회 핵심 정보 4~6장. 썸네일이 제목을 반복하던 자리를 대신한다. */
export function RaceFactGrid({ facts }: { facts: RaceFact[] }) {
  if (facts.length === 0) return null;

  return (
    <dl className="race-facts">
      {facts.map((f) => (
        <div className="race-facts__item" key={f.label}>
          <dt className="race-facts__k">{f.label}</dt>
          <dd className="race-facts__v">
            {f.value}
            {f.sub && <small>{f.sub}</small>}
          </dd>
        </div>
      ))}
    </dl>
  );
}
