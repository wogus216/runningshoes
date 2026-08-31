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
  /** '소개는 여기까지.' — 이 섹션의 제목이자 페이지의 마침표 */
  title: string;
  body: string;
  cta: string;
};

/*
 * 마지막 장면 — 그리드까지 본 사람이 스크롤을 이어가면 만나는 엔딩이다.
 * 카드 스택·그리드가 만든 고조를 여기서 끊지 않는다: 라벨 → 날짜 → 대회명 →
 * 마침표 → 링크, 다섯 박자가 살짝 겹치며 순서대로 들어온다(-=0.2~0.4초).
 * 날짜만 더 크게 아래에서 올라온다 — 이 페이지에서 숫자가 도착하는 마지막 순간이다.
 *
 * 여기는 '다음 콘텐츠'로 넘어가는 문이 아니다. 이어질 다음 편이 없으므로
 * 있는 것만 가리킨다: 이미 나와 있는 쎄러데이 티저.
 *
 * JS/모션이 없으면 아무것도 손대지 않는다 — 원래 있던 정적 섹션 그대로 보인다.
 */
export function ClosingReveal({
  place,
  datePoster,
  name,
  dateLabel,
  marathonId,
  title,
  body,
  cta,
}: ClosingRevealProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const dateRef = useRef<HTMLParagraphElement>(null);
  const raceRef = useRef<HTMLParagraphElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  const reducedMotion = usePrefersReducedMotion();
  const lib = useSaturdayGsap(!reducedMotion);

  useEffect(() => {
    const section = sectionRef.current;
    const targets = [
      labelRef.current,
      dateRef.current,
      raceRef.current,
      endRef.current,
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
        // 마침표는 대회명이 자리를 잡은 뒤 한 박자 늦게 온다 — 겹쳐 버리면
        // '11 / 15' 와 '소개는 여기까지.' 가 동시에 도착해 둘 다 무게를 잃는다
        .to(
          endRef.current,
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
          '-=0.2',
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
    <section
      className={styles.closing}
      ref={sectionRef}
      aria-labelledby="athletes-closing"
    >
      {/* 일곱 명이 향하는 곳. 엔딩 문구보다 먼저 와야 '무엇을 앞둔 소개였는지'가 선다 */}
      <span className={styles.closingLabel} ref={labelRef}>
        {place}
      </span>
      <p className={styles.closingDate} ref={dateRef}>
        {datePoster}
      </p>
      <p className={styles.closingRace} ref={raceRef}>
        {name}
        <span>{dateLabel}</span>
      </p>

      {/*
        섹션을 부르는 이름은 이제 대회가 아니라 이 페이지의 마침표다.
        예전 <h2> 는 대회명이었는데, 그건 이 섹션이 '대회 정보'였을 때의 이름이다.
      */}
      <div className={styles.closingEnd} ref={endRef}>
        <h2 className={styles.closingEndTitle} id="athletes-closing">
          {title}
        </h2>
        <p className={styles.closingEndBody}>{body}</p>
        {/*
          나가는 문은 하나다 — 이미 나와 있는 쎄러데이 티저.
          다음 편이 있는 것처럼 읽히는 문구(다음 이야기·계속 보기)는 쓰지 않는다.
        */}
        <Link className={styles.closingCta} href="/saturday">
          {cta}
        </Link>
      </div>

      {/*
        이 페이지엔 푸터도 전역 내비도 없다. 주 CTA 하나만 남기면 검색으로 들어온 사람은
        사이트 본문으로 갈 길이 사라진다 — 그래서 두 갈래만 작은 글씨로 남긴다.
        CTA 와 경쟁하지 않도록 크기·색을 낮추고 아래에 둔다.
      */}
      <div className={styles.closingLinks} ref={linksRef}>
        <Link href={`/marathon/${marathonId}`}>대회 정보</Link>
        <Link href="/recommend">러닝화 추천받기</Link>
      </div>
    </section>
  );
}
