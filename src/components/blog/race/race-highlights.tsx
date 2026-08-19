import type { RaceHighlight } from '@/types/blog';

/**
 * "이 대회만의 것". 위치를 고정하는 이유는 글마다 다르게 두면
 * 표준화 목적이 무너지기 때문이다 — 지금 세 글이 서로 다르게 쓰여 있다.
 */
export function RaceHighlights({ items }: { items: RaceHighlight[] }) {
  if (items.length === 0) return null;

  return (
    <section className="race-why">
      <h2 className="race-why__head">이 대회만의 것</h2>
      <ul className="race-why__list">
        {items.map((h) => (
          <li className="race-why__item" key={h.title}>
            <span className="race-why__badge">{h.badge}</span>
            <div>
              <p className="race-why__title">{h.title}</p>
              <p className="race-why__desc">{h.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
