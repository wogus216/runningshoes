import type { RaceMeta } from '@/types/blog';
import { RaceStatusBadge } from './race-status-badge';

/**
 * "지금 할 행동 하나". 접수 정보를 나열하지 않는다 —
 * 그건 핵심 카드와 요강표가 한다. 여기는 지시 한 줄이다.
 */
export function RaceActionStrip({ meta }: { meta: RaceMeta }) {
  if (!meta.action) return null;

  return (
    <aside className="race-action">
      <div className="race-action__when">
        <RaceStatusBadge meta={meta} />
        {meta.registrationStart && (
          <span className="race-action__at">{formatKstLabel(meta.registrationStart)}</span>
        )}
      </div>
      <p className="race-action__what">{meta.action.what}</p>
      <p className="race-action__how">{meta.action.how}</p>
      {meta.registrationVia && (
        <p className="race-action__via">접수처 · {meta.registrationVia}</p>
      )}
    </aside>
  );
}

/** '2026-08-24T10:00' → '8월 24일 10:00' */
function formatKstLabel(value: string): string {
  const [date, time] = value.split('T');
  const [, mm, dd] = date.split('-');
  const month = Number(mm);
  const day = Number(dd);
  return time ? `${month}월 ${day}일 ${time}` : `${month}월 ${day}일`;
}
