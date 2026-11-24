import { Suspense } from 'react';
import type { Metadata } from 'next';
import { getMarathonEvents, getMajorEvents } from '@/lib/data/marathon';
import { localIsoDate } from '@/lib/format';
import { SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/constants';
import { MarathonContent } from '@/components/marathon/marathon-content';
import type { MarathonListEvent } from '@/types/marathon';

/**
 * 메타는 데이터에서 산출한다 — 종전 문구가 8월에도 "경주벚꽃마라톤·춘천호반마라톤"(둘 다 봄)을
 * 나열하고 있었고, 2026-08-01 시점 밴드 개편(접수중이 맨 위)이 메타에 전혀 반영되지 않았다.
 *
 * 대회 수는 `getMarathonEvents().length`로 뽑는다(하드코딩된 "43개+"가 실제 103개와 어긋나 있었다).
 * 반면 "접수중 N개"는 넣지 않는다 — 빌드 시점에 굳어 SERP 숫자와 페이지 숫자가 어긋난다
 * (페이지 히어로는 클라이언트에서 다시 계산하므로 안 굳는다).
 */
export function generateMetadata(): Metadata {
  const total = getMarathonEvents().length;
  const description = `국내·일본 마라톤 대회 ${total}개를 접수 상태와 일정 확인 여부로 정리했습니다. 대회별 확인한 참가 안내와 출처를 살펴보고 권역·거리로 좁혀보세요.`;

  return {
    // 사이트명은 app/layout.tsx 의 title.template(`%s | ${SITE_NAME}`)이 붙인다 — 여기서 또 붙이면 두 번 나온다
    title: '마라톤 대회 일정 | 지금 접수 중인 대회부터 순서대로',
    description,
    keywords: '마라톤 대회, 마라톤 일정, 2026 마라톤, 마라톤 접수, 접수중인 마라톤, 하프마라톤, 마라톤 참가비, 마라톤 코스, 가을 마라톤, 지역별 마라톤',
    alternates: { canonical: '/marathon' },
    openGraph: {
      // 페이지가 openGraph 를 지정하면 layout 의 기본 이미지가 병합되지 않고 덮인다
      images: [DEFAULT_OG_IMAGE],
      title: '마라톤 대회 일정 — 지금 접수 중인 대회부터',
      description,
      url: `${SITE_URL}/marathon`,
    },
  };
}

export default function MarathonPage() {
  const events = getMarathonEvents();
  const majorEvents = getMajorEvents().filter((event) => !event.scheduleUnverified);
  // 빌드 시점 날짜. 클라이언트가 마운트 후 진짜 오늘로 다시 계산한다.
  const buildDate = localIsoDate();

  // 목록 클라이언트에는 필터·행 렌더에 필요한 필드만 전달한다.
  const listEvents: MarathonListEvent[] = events.map((event) => ({
    id: event.id,
    name: event.name,
    date: event.date,
    location: event.location,
    region: event.region,
    distances: event.distances,
    status: event.status,
    isMajor: event.isMajor,
    description: event.description,
    registrationStart: event.registrationStart,
    registrationEnd: event.registrationEnd,
    postponed: event.postponed,
    scheduleUnverified: event.scheduleUnverified,
    registrationStatusUnverified: event.registrationStatusUnverified,
  }));

  // JSON-LD: 메이저 대회 SportsEvent + Offers
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '마라톤 주요 대회 일정',
    description: '국내·일본 주요 마라톤 대회 일정 및 확인한 참가 정보',
    numberOfItems: majorEvents.length,
    itemListElement: majorEvents.map((event, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${SITE_URL}/marathon/${event.id}`,
      item: {
        '@type': 'SportsEvent',
        name: event.name,
        startDate: event.date,
        eventStatus: event.postponed ? 'https://schema.org/EventPostponed' : 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: event.location,
          ...(event.region !== '미정' && {
            address: {
              '@type': 'PostalAddress',
              addressCountry: ['오사카', '교토', '도쿄'].includes(event.region) ? 'JP' : 'KR',
              addressRegion: event.region,
            },
          }),
        },
        sport: 'Marathon',
        ...(event.description && { description: event.description }),
        ...(event.website && { url: event.website }),
        ...(!event.postponed && !event.scheduleUnverified && Boolean(event.raceInfo?.entryFees?.length) && {
          offers: event.raceInfo?.entryFees?.map(fee => ({
            '@type': 'Offer',
            name: fee.distance,
            price: fee.fee,
            priceCurrency: fee.currency ?? 'KRW',
            ...(event.website && { url: event.website }),
          })),
        }),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="space-y-6">
        <h1 className="text-2xl font-bold md:text-4xl">마라톤 대회 일정</h1>

        <Suspense>
          <MarathonContent events={listEvents} buildDate={buildDate} />
        </Suspense>
      </div>
    </>
  );
}
