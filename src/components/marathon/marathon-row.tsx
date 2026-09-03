import Link from 'next/link';
import type { MarathonEvent } from '@/types/marathon';
import { daysUntil } from '@/lib/marathon/bands';
import { formatDateShortKo } from '@/lib/format';
import styles from './marathon-list.module.css';

/**
 * 상태 칸.
 * `registrationEnd`가 있으면 D-day를 계산하고, 없으면 수동 status를 그대로 보여준다.
 * 채워진 대회만 정확해지는 구조라 백필 없이도 점진적으로 좋아진다.
 */
function stateLabel(event: MarathonEvent, today: string): { text: string; dday: boolean } {
  if (event.registrationEnd) {
    const left = daysUntil(event.registrationEnd, today);
    if (left >= 0) return { text: `D-${left} 마감`, dday: true };
  }
  return { text: event.status, dday: false };
}

export function MarathonRow({
  event,
  today,
  folded = false,
}: {
  event: MarathonEvent;
  today: string;
  /**
   * 아직 펼치지 않은 행. **렌더는 하되 숨긴다** — 잘라내면 대회 링크가 정적 HTML에서
   * 사라져 검색엔진이 못 찾는다(첫 시도에서 100개 중 80개만 남았다).
   */
  folded?: boolean;
}) {
  const state = stateLabel(event, today);
  return (
    <Link className={styles.row} href={`/marathon/${event.id}`} hidden={folded}>
      <span className={styles.date}>{formatDateShortKo(event.date)}</span>
      <span className={styles.name}>
        {event.name}
        {event.isMajor && <span className={styles.major}>MAJOR</span>}
      </span>
      <span className={styles.region}>{event.region}</span>
      {/* 거리는 원문 그대로 — 11K를 10K로 바꿔 적지 않는다(필터만 매핑한다) */}
      <span className={styles.dist}>{event.distances.join(' · ')}</span>
      <span className={`${styles.state} ${state.dday ? styles.dday : ''}`}>{state.text}</span>
    </Link>
  );
}
