import type { Metadata } from 'next';
import Link from 'next/link';
import { AthleteDeck } from '@/components/challenge/saturday/athletes/athlete-deck';
import { ClosingReveal } from '@/components/challenge/saturday/athletes/closing-reveal';
import type { AthleteView } from '@/components/challenge/saturday/athletes/types';
import {
  ATHLETES_COPY,
  ATHLETES_INTRO,
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
      photoSrc: athlete.photo,
      photoAlt: athlete.photoAlt,
      objectPosition: athlete.objectPosition,
      tone: athlete.tone,
      isPlaceholder: athlete.isPlaceholder,
    };
  });
}

export default function SaturdayAthletesPage() {
  const athletes = buildAthletes();

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
        {/* 1~4. 카드 스택(첫 화면 자체가 히어로) → 등장 → 스티키 그리드 → 개인 프로필 */}
        <AthleteDeck
          athletes={athletes}
          intro={ATHLETES_INTRO}
          copy={{
            eyebrow: ATHLETES_COPY.eyebrow,
            titleLead: ATHLETES_COPY.titleLead,
            titleTail: ATHLETES_COPY.titleTail,
            sub: ATHLETES_COPY.sub,
            scrollHint: ATHLETES_COPY.scrollHint,
            gridTitle: ATHLETES_COPY.gridTitle,
            gridLine: ATHLETES_COPY.gridLine,
            gridHint: ATHLETES_COPY.gridHint,
            photoNotice: ATHLETES_COPY.photoNotice,
            // 카드에 직접 붙는다 — isPlaceholder 인 사람에게만 뜨고, 사진이 들어오면 저절로 사라진다
            photoPendingBadge: ATHLETES_COPY.photoPendingLabel,
            statsPending: ATHLETES_COPY.statsPending,
          }}
        />

        {/*
          첫 화면에 격자가 한 번 번쩍이던 것을 없앤다.

          GSAP 은 동적 import 라 순서가 이랬다: 정적 HTML(격자 일곱 칸) 페인트 →
          하이드레이션 → gsap/ScrollTrigger/Flip 내려받기 → 그제서야 스택.
          폰에서는 그 사이가 눈에 보였다 — 일곱 명이 떴다가 오프닝 사진으로 바뀌었다.

          이 스크립트는 위 마크업이 파싱된 직후, 첫 페인트 전에 동기로 돈다.
          `data-motion`·`data-phase` 는 React 가 JSX 로 쓰지 않는 속성이라(GSAP 이
          명령형으로만 만진다) 하이드레이션이 되돌리지 않는다 — 덱의 `data-layout` 은
          React 소유라 건드리지 않고, CSS 의 부팅 블록이 그 상태를 대신 그린다.

          모션 감소면 아무것도 하지 않는다(GSAP 자체를 안 받는다).
          GSAP 이 끝내 안 오면 일곱 명이 안 보이는 화면에 갇히므로 5초 뒤 되돌린다.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{' +
              "if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;" +
              "var t=document.getElementById('athletes-track');if(!t)return;" +
              "t.dataset.motion='on';t.dataset.phase='stack';" +
              'setTimeout(function(){if(t.dataset.ready)return;' +
              'delete t.dataset.motion;delete t.dataset.phase;},5000);' +
              '}catch(e){}})();',
          }}
        />

        <ClosingReveal
          place={RACE_META.place}
          datePoster={RACE_META.datePoster}
          name={RACE_META.name}
          dateLabel={RACE_META.dateLabel}
          marathonId={RACE_META.marathonId}
          title={ATHLETES_COPY.closingTitle}
          body={ATHLETES_COPY.closingBody}
          cta={ATHLETES_COPY.closingCta}
        />
      </main>
    </div>
  );
}
