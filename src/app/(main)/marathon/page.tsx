import { Suspense } from 'react';
import type { Metadata } from 'next';
import { getMarathonEvents, getMajorEvents } from '@/lib/data/marathon';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { MarathonContent } from '@/components/marathon/marathon-content';
import { groupIntoBands } from '@/lib/marathon/bands';

export const metadata: Metadata = {
  title: `2026 마라톤 대회 일정 | 참가비·코스·접수 총정리 - ${SITE_NAME}`,
  description: '2026년 한국 마라톤 대회 일정 총정리. 서울마라톤, 경주벚꽃마라톤, 춘천호반마라톤 등 참가비·코스 난이도·제한시간·교통편까지. 월별·지역별·거리별 필터로 나에게 맞는 대회를 찾아보세요.',
  keywords: '마라톤 대회, 2026 마라톤, 마라톤 일정, 하프마라톤, 서울마라톤, 마라톤 접수, 마라톤 참가비, 마라톤 코스, 경주벚꽃마라톤, 춘천호반마라톤',
  alternates: { canonical: '/marathon' },
  openGraph: {
    title: '2026 마라톤 대회 일정 · 참가비 · 코스 정보',
    description: '2026년 한국 마라톤 대회 43개+ 일정. 참가비·코스·제한시간·교통편까지 한눈에.',
    url: `${SITE_URL}/marathon`,
  },
};

export default function MarathonPage() {
  const events = getMarathonEvents();
  const majorEvents = getMajorEvents();
  // 빌드 시점 날짜. 클라이언트가 마운트 후 진짜 오늘로 다시 계산한다.
  const now = new Date();
  const buildDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

  // 히어로 지표 — 전부 데이터에서 산출한다(하드코딩 금지)
  const bands = groupIntoBands(events, buildDate);
  const openCount = bands.find((b) => b.id === 'open')?.events.length ?? 0;
  const thisMonth = events.filter((e) => e.date >= buildDate && e.date.slice(0, 7) === buildDate.slice(0, 7)).length;
  const nextMonthKey = (() => {
    const d = new Date(`${buildDate}T00:00:00Z`);
    d.setUTCMonth(d.getUTCMonth() + 1);
    return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`;
  })();
  const nextMonth = events.filter((e) => e.date.slice(0, 7) === nextMonthKey).length;

  const marathonStats = [
    { label: '접수중', value: `${openCount}` },
    { label: '이번 달', value: `${thisMonth}` },
    { label: '다음 달', value: `${nextMonth}` },
  ];

  // JSON-LD: 메이저 대회 SportsEvent + Offers
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '2026 한국 마라톤 대회 일정',
    description: '2026년 한국 마라톤 대회 일정 및 참가 정보',
    numberOfItems: events.length,
    itemListElement: majorEvents.map((event, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${SITE_URL}/marathon/${event.id}`,
      item: {
        '@type': 'SportsEvent',
        name: event.name,
        startDate: event.date,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: event.location,
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'KR',
            addressRegion: event.region,
          },
        },
        sport: 'Marathon',
        ...(event.description && { description: event.description }),
        ...(event.website && { url: event.website }),
        ...(event.raceInfo?.expectedParticipants && {
          maximumAttendeeCapacity: event.raceInfo.expectedParticipants,
        }),
        offers: event.raceInfo?.entryFees && event.raceInfo.entryFees.length > 0
          ? event.raceInfo.entryFees.map((fee) => ({
              '@type': 'Offer',
              name: fee.distance,
              price: fee.fee,
              priceCurrency: 'KRW',
              availability: event.status === '접수중'
                ? 'https://schema.org/InStock'
                : 'https://schema.org/SoldOut',
            }))
          : {
              '@type': 'Offer',
              url: event.website || `${SITE_URL}/marathon/${event.id}`,
              priceCurrency: 'KRW',
              availability: event.status === '접수중'
                ? 'https://schema.org/InStock'
                : event.status === '마감'
                  ? 'https://schema.org/SoldOut'
                  : 'https://schema.org/PreOrder',
            },
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
        <section className="relative overflow-hidden rounded-[4px] border border-[var(--accent-line)] bg-white px-5 py-6 md:px-8 md:py-8">
          <div className="pointer-events-none absolute inset-0">
          </div>

          <div className="relative grid gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <div className="space-y-5">
              <div className="flex flex-wrap gap-2">
                {marathonStats.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-stone-900/10 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-600 backdrop-blur"
                  >
                    <span className="text-slate-950">{item.value}</span>
                    {item.label}
                  </span>
                ))}
              </div>
              <div className="space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-sky-700">Race Calendar</p>
                <h1 className="text-balance text-4xl font-black leading-[0.92] tracking-tight text-slate-950 md:text-5xl">
                  2026 마라톤 대회 일정
                </h1>
                <p className="max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                  지금 접수 중인 대회부터 먼저 보여줍니다. 권역·거리로 좁히면 신청할 수 있는 대회만 남습니다.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[4px] border border-sky-100 bg-white/86 p-4">
                <p className="text-sm font-semibold text-slate-950">시점 중심</p>
                <p className="mt-2 text-xs leading-6 text-slate-600">접수중·곧 열림·마감·지난 대회로 나눠, 지금 참가할 수 있는 대회를 맨 위에 둡니다.</p>
              </div>
              <div className="rounded-[4px] border border-border bg-[var(--navy)] p-4 text-white">
                <p className="text-sm font-semibold">탐색 속도</p>
                <p className="mt-2 text-xs leading-6 text-white/65">한 줄에 날짜·지역·거리·접수 상태를 담아 훑어보는 속도를 올렸습니다.</p>
              </div>
            </div>
          </div>
        </section>

        <Suspense>
          <MarathonContent events={events} buildDate={buildDate} />
        </Suspense>
      </div>
    </>
  );
}
