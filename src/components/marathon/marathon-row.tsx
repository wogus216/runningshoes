import Link from 'next/link';
import type { MarathonEvent } from '@/types/marathon';
import { daysUntil } from '@/lib/marathon/bands';
import styles from './marathon-list.module.css';

const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];

/** '2026-08-16' → '8/16 토' */
function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return `${d.getUTCMonth() + 1}/${d.getUTCDate()} ${WEEKDAY[d.getUTCDay()]}`;
}

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

export function MarathonRow({ event, today }: { event: MarathonEvent; today: string }) {
  const state = stateLabel(event, today);
  return (
    <Link className={styles.row} href={`/marathon/${event.id}`}>
      <span className={styles.date}>{formatDate(event.date)}</span>
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
