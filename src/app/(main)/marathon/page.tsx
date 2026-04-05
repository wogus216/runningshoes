import { Suspense } from 'react';
import type { Metadata } from 'next';
import { getMarathonEvents, getMajorEvents } from '@/lib/data/marathon';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { MarathonContent } from '@/components/marathon/marathon-content';

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
  const marathonStats = [
    { label: '대회 수', value: `${events.length}+` },
    { label: '메이저', value: `${majorEvents.length}` },
    { label: '시즌', value: '2026' },
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
        ...(event.raceInfo?.entryFees && event.raceInfo.entryFees.length > 0 && {
          offers: event.raceInfo.entryFees.map((fee) => ({
            '@type': 'Offer',
            name: fee.distance,
            price: fee.fee,
            priceCurrency: 'KRW',
            availability: event.status === '접수중'
              ? 'https://schema.org/InStock'
              : 'https://schema.org/SoldOut',
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
        <section className="relative overflow-hidden rounded-[36px] border border-[var(--accent-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(240,248,255,0.94)_44%,rgba(233,245,255,0.92)_100%)] px-5 py-6 shadow-[0_28px_70px_-52px_rgba(8,18,38,0.28)] md:px-8 md:py-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-8 top-6 h-32 w-32 rounded-full bg-[rgba(14,165,233,0.16)] blur-3xl" />
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[rgba(56,189,248,0.12)] blur-3xl" />
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
                  월별, 지역별, 거리별 필터를 바로 적용해 나한테 맞는 대회만 빠르게 추릴 수 있게 다시 구성했습니다.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[24px] border border-sky-100 bg-white/86 p-4 shadow-[0_18px_36px_-32px_rgba(8,18,38,0.16)]">
                <p className="text-sm font-semibold text-slate-950">일정 중심</p>
                <p className="mt-2 text-xs leading-6 text-slate-600">접수 상태, 거리, 지역을 같이 걸러서 참가 가능성부터 빠르게 확인합니다.</p>
              </div>
              <div className="rounded-[24px] border border-sky-950/20 bg-[linear-gradient(160deg,rgba(8,18,38,0.98)_0%,rgba(12,74,110,0.96)_100%)] p-4 text-white shadow-[0_22px_40px_-30px_rgba(8,18,38,0.62)]">
                <p className="text-sm font-semibold">탐색 속도</p>
                <p className="mt-2 text-xs leading-6 text-white/65">필터와 카드의 밀도를 맞춰 훑어보는 속도를 올렸습니다.</p>
              </div>
            </div>
          </div>
        </section>

        <Suspense>
          <MarathonContent events={events} />
        </Suspense>
      </div>
    </>
  );
}
