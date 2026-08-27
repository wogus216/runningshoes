import type { Metadata } from 'next';
import Link from 'next/link';
import { AthleteDeck } from '@/components/challenge/saturday/athletes/athlete-deck';
import type { AthleteView } from '@/components/challenge/saturday/athletes/types';
import {
  ATHLETES_COPY,
  ATHLETES_INTRO_PHOTO,
  SATURDAY_ATHLETES,
} from '@/lib/data/challenge/saturday-athletes';
import { RACE_META, SATURDAY_CREW } from '@/lib/data/challenge/saturday';
import { SITE_URL } from '@/lib/constants';
import styles from './athletes.module.css';

const TITLE = '쎄러데이 선수 소개 — 일곱 명, 하나의 출발선';
const DESCRIPTION =
  '손기정평화마라톤을 함께 출발하는 쎄러데이 일곱 명. 기록보다 먼저, 어떤 사람들인지.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/saturday/athletes' },
  openGraph: {
    type: 'article',
    locale: 'ko_KR',
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/saturday/athletes`,
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

const DISTANCE_LABEL = {
  풀코스: { role: 'FULL MARATHON', label: '풀코스 · 42.195 KM' },
  '10K': { role: '10K', label: '10K · 10 KM' },
} as const;

/**
 * 로스터가 정본이다. 캐릭터 파일은 memberId 로 붙는다 —
 * 짝이 없으면 여기서 조용히 빠지는 게 아니라 빌드가 서야 한다.
 */
function buildAthletes(): AthleteView[] {
  return SATURDAY_ATHLETES.map((athlete, order) => {
    const member = SATURDAY_CREW.find((crew) => crew.id === athlete.memberId);
    if (!member) {
      throw new Error(
        `[saturday/athletes] SATURDAY_CREW 에 없는 memberId: ${athlete.memberId}`,
      );
    }

    const distance = DISTANCE_LABEL[member.distance];

    return {
      index: order + 1,
      name: member.codeName,
      nameLatin: athlete.nameLatin,
      role: distance.role,
      distanceLabel: distance.label,
      characterLine: athlete.characterLine,
      knownFor: athlete.knownFor,
      runningType: athlete.runningType,
      photoSrc: athlete.photo,
      photoAlt: athlete.photoAlt,
      objectPosition: athlete.objectPosition,
      isPlaceholder: athlete.isPlaceholder,
    };
  });
}

export default function SaturdayAthletesPage() {
  const athletes = buildAthletes();
  // 아직 본인 사진이 없는 사람 수. 마지막 두 장이 들어오면 0 이 되어 표기가 사라진다
  const photoPending = athletes.filter((athlete) => athlete.isPlaceholder).length;

  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#athletes-main">
        본문 바로가기
      </a>

      <header className={styles.topBar}>
        <b>SATURDAY</b>
        <span className={styles.topBarMid}>Athlete Profile</span>
        <Link className={styles.topBarBack} href="/saturday">
          ← 쎄러데이
        </Link>
      </header>

      <main id="athletes-main">
        {/*
          1. 오프닝 — 한 장의 포스터. 사진이 남는 높이를 전부 먹고 제목이 그 바닥에 맞닿는다.
          사진과 제목 사이에 빈 공간을 두지 않는다.
        */}
        <section className={styles.intro}>
          <div className={styles.introMedia}>
            <img
              className={styles.photo}
              src={`/images/challenge/saturday/${ATHLETES_INTRO_PHOTO.photo}.webp`}
              alt={ATHLETES_INTRO_PHOTO.alt}
              width={1200}
              height={1600}
              decoding="async"
            />
          </div>

          <div className={styles.introCopy}>
            <span className={styles.introEyebrow}>{ATHLETES_COPY.eyebrow}</span>
            <h1 className={styles.introTitle}>
              {ATHLETES_COPY.titleLead}
              <em>{ATHLETES_COPY.titleTail}</em>
            </h1>
            <p className={styles.introSub}>{ATHLETES_COPY.sub}</p>
            <p className={styles.introMeta}>
              <span>{ATHLETES_COPY.meta}</span>
              <span className={styles.introScroll}>SCROLL ↓</span>
            </p>
          </div>
        </section>

        {/* 2~4. 카드 스택 → 스티키 그리드 → 개인 프로필 */}
        <AthleteDeck
          athletes={athletes}
          copy={{
            gridTitle: ATHLETES_COPY.gridTitle,
            gridLine: ATHLETES_COPY.gridLine,
            gridHint: ATHLETES_COPY.gridHint,
            photoNotice: ATHLETES_COPY.photoNotice,
            photoPending:
              photoPending > 0
                ? `${ATHLETES_COPY.photoPendingLabel} ${photoPending}명`
                : null,
            statsPending: ATHLETES_COPY.statsPending,
            statsPendingNote: ATHLETES_COPY.statsPendingNote,
          }}
        />

        <section className={styles.closing} aria-labelledby="athletes-race">
          <span className={styles.closingLabel}>{RACE_META.place}</span>
          <p className={styles.closingDate} id="athletes-race">
            {RACE_META.datePoster}
          </p>
          <p className={styles.closingRace}>
            {RACE_META.name}
            <span>{RACE_META.dateLabel}</span>
          </p>
          <div className={styles.closingLinks}>
            <Link href="/saturday">쎄러데이 이야기 처음부터</Link>
            <Link href={`/marathon/${RACE_META.marathonId}`}>대회 정보</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
