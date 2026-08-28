'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePrefersReducedMotion, useSaturdayGsap } from './use-saturday-gsap';
import styles from '@/app/(challenge)/saturday/athletes/athletes.module.css';

type ClosingRevealProps = {
  place: string;
  datePoster: string;
  name: string;
  dateLabel: string;
  marathonId: string;
};

/*
 * 마지막 장면 — 그리드까지 본 사람이 스크롤을 이어가면 만나는 대회 정보다.
 * 카드 스택·그리드가 만든 고조를 여기서 끊지 않는다: 라벨 → 날짜 → 대회명 → 링크,
 * 네 박자가 살짝 겹치며 순서대로 들어온다(-=0.2~0.35초). 날짜만 더 크게 아래에서
 * 올라온다 — 이 페이지에서 숫자가 도착하는 두 번째이자 마지막 순간이다.
 *
 * JS/모션이 없으면 아무것도 손대지 않는다 — 원래 있던 정적 섹션 그대로 보인다.
 */
export function ClosingReveal({
  place,
  datePoster,
  name,
  dateLabel,
  marathonId,
}: ClosingRevealProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const dateRef = useRef<HTMLParagraphElement>(null);
  const raceRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  const reducedMotion = usePrefersReducedMotion();
  const lib = useSaturdayGsap(!reducedMotion);

  useEffect(() => {
    const section = sectionRef.current;
    const targets = [
      labelRef.current,
      dateRef.current,
      raceRef.current,
      linksRef.current,
    ].filter((el): el is HTMLElement => el !== null);

    if (!lib || !section || targets.length === 0) return;

    const { gsap } = lib;

    const context = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y: 22 });
      // 날짜는 더 멀리서 올라온다 — 도착의 무게가 라벨·링크와 다르다
      gsap.set(dateRef.current, { y: 38 });

      gsap
        .timeline({
          scrollTrigger: { trigger: section, start: 'top 82%', once: true },
        })
        .to(labelRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
        .to(
          dateRef.current,
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.2',
        )
        .to(
          raceRef.current,
          { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
          '-=0.4',
        )
        .to(
          linksRef.current,
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
          '-=0.25',
        );
    }, section);

    return () => {
      context.revert();
    };
  }, [lib]);

  return (
    <section className={styles.closing} ref={sectionRef} aria-labelledby="athletes-race">
      <span className={styles.closingLabel} ref={labelRef}>
        {place}
      </span>
      <p className={styles.closingDate} ref={dateRef}>
        {datePoster}
      </p>
      {/* 섹션을 부르는 이름은 날짜가 아니라 대회다 — 아웃라인에도, 낭독기에도 */}
      <h2 className={styles.closingRace} id="athletes-race" ref={raceRef}>
        {name}
        <span>{dateLabel}</span>
      </h2>
      {/*
        여기가 이 페이지의 유일한 출구다. 예전에는 링크가 둘뿐이었고 둘 다 /saturday 로 가서,
        검색으로 들어온 사람은 사이트 본문으로 갈 길이 없었다(푸터도 내비게이션도 없다).
        세 갈래로 나눈다: 이 대회 / 크루 이야기 / 사이트 본문.
      */}
      <div className={styles.closingLinks} ref={linksRef}>
        <Link className={styles.closingPrimary} href={`/marathon/${marathonId}`}>
          대회 정보
        </Link>
        <Link href="/saturday">쎄러데이 이야기 처음부터</Link>
        <Link href="/recommend">러닝화 추천받기</Link>
      </div>
    </section>
  );
}
