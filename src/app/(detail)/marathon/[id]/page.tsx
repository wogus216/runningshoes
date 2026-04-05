import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getMarathonEventById, getMarathonEvents } from '@/lib/data/marathon';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import { Calendar, MapPin, ExternalLink, ArrowLeft, Trophy, Mountain, Clock, Users, Bus, Car, Package, Timer, Droplets, Route, Award, CircleGauge } from 'lucide-react';

type MarathonDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  const events = getMarathonEvents();
  return events.map((event) => ({
    id: event.id,
  }));
}

export async function generateMetadata({ params }: MarathonDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const event = getMarathonEventById(id);

  if (!event) {
    return {
      title: '대회를 찾을 수 없습니다',
      description: '요청하신 마라톤 대회를 찾을 수 없습니다.',
    };
  }

  const title = `${event.name} | ${event.location} - ${SITE_NAME}`;

  // 실전 정보가 있으면 description에 포함
  const descParts = [
    `${event.name} - ${formatDate(event.date)}, ${event.location}.`,
    `${event.distances.join('/')} 코스.`,
  ];
  if (event.courseInfo) {
    descParts.push(`난이도 ${event.courseInfo.difficulty}, ${event.courseInfo.terrain} 코스.`);
  }
  if (event.raceInfo?.entryFees?.[0]) {
    descParts.push(`참가비 ${formatFee(event.raceInfo.entryFees[0].fee)}~.`);
  }
  if (event.raceInfo?.startTime) {
    descParts.push(`출발 ${event.raceInfo.startTime}.`);
  }
  descParts.push(event.description || '한국 마라톤 대회 정보.');
  const description = descParts.join(' ');

  return {
    title,
    description,
    keywords: [
      event.name, event.location, event.region,
      '마라톤', '마라톤 대회', '마라톤 일정',
      `${event.name} 참가비`, `${event.name} 코스`,
      ...event.distances,
    ].join(', '),
    openGraph: {
      type: 'article',
      locale: 'ko_KR',
      siteName: SITE_NAME,
      title: `${event.name} - ${SITE_NAME}`,
      description,
      url: `${SITE_URL}/marathon/${id}`,
    },
    alternates: {
      canonical: `/marathon/${id}`,
    },
  };
}

const distanceColors: Record<string, string> = {
  '풀코스': 'bg-sky-100 text-sky-700 border-sky-200',
  '하프': 'bg-cyan-100 text-cyan-700 border-cyan-200',
  '10K': 'bg-slate-100 text-slate-700 border-slate-200',
  '5K': 'bg-stone-100 text-stone-700 border-stone-200',
  '울트라': 'bg-violet-100 text-violet-700 border-violet-200',
  '트레일': 'bg-amber-100 text-amber-700 border-amber-200',
};

const statusStyles: Record<string, string> = {
  '접수중': 'bg-[var(--navy)] text-white',
  '마감': 'bg-slate-400 text-white',
  '대회종료': 'bg-slate-200 text-slate-600',
};

const distanceDescriptions: Record<string, string> = {
  '풀코스': '42.195km - 풀 마라톤',
  '하프': '21.0975km - 하프 마라톤',
  '10K': '10km',
  '5K': '5km',
  '울트라': '50km 이상 울트라마라톤',
  '트레일': '산악/비포장 트레일 코스',
};

const difficultyStyles: Record<string, string> = {
  '초보자': 'bg-sky-100 text-sky-700',
  '중급': 'bg-amber-100 text-amber-700',
  '상급': 'bg-rose-100 text-rose-700',
};

function formatFee(fee: number): string {
  return fee.toLocaleString('ko-KR') + '원';
}

function formatTimeLimit(hours: number, minutes: number): string {
  if (minutes === 0) return `${hours}시간`;
  return `${hours}시간 ${minutes}분`;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];
  return `${year}년 ${month}월 ${day}일 (${dayOfWeek})`;
}

function getDaysUntil(dateStr: string): number {
  const eventDate = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  eventDate.setHours(0, 0, 0, 0);
  return Math.ceil((eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

export default async function MarathonDetailPage({ params }: MarathonDetailPageProps) {
  const { id } = await params;
  const event = getMarathonEventById(id);

  if (!event) {
    notFound();
  }

  const daysUntil = getDaysUntil(event.date);

  // JSON-LD: SportsEvent (enriched)
  const eventStatusMap: Record<string, string> = {
    '접수중': 'https://schema.org/EventScheduled',
    '마감': 'https://schema.org/EventScheduled',
    '대회종료': 'https://schema.org/EventScheduled',
  };

  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: event.name,
    startDate: event.date,
    eventStatus: eventStatusMap[event.status],
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
    ...(event.raceInfo?.startTime && {
      doorTime: `${event.date}T${event.raceInfo.startTime}:00+09:00`,
    }),
  };

  // Offers (entry fees) for structured data
  if (event.raceInfo?.entryFees && event.raceInfo.entryFees.length > 0) {
    jsonLd.offers = event.raceInfo.entryFees.map((fee) => ({
      '@type': 'Offer',
      name: `${event.name} ${fee.distance}`,
      price: fee.fee,
      priceCurrency: 'KRW',
      availability: event.status === '접수중'
        ? 'https://schema.org/InStock'
        : 'https://schema.org/SoldOut',
      ...(event.website && { url: event.website }),
    }));
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: '마라톤 대회', item: `${SITE_URL}/marathon` },
      { '@type': 'ListItem', position: 3, name: event.name, item: `${SITE_URL}/marathon/${id}` },
    ],
  };

  // FAQ schema for events with practical data
  const faqItems: { question: string; answer: string }[] = [];
  if (event.raceInfo?.entryFees && event.raceInfo.entryFees.length > 0) {
    const feeSummary = event.raceInfo.entryFees.map(f => `${f.distance} ${formatFee(f.fee)}`).join(', ');
    faqItems.push({
      question: `${event.name} 참가비는 얼마인가요?`,
      answer: `${event.name} 참가비는 ${feeSummary}입니다.`,
    });
  }
  if (event.raceInfo?.timeLimits && event.raceInfo.timeLimits.length > 0) {
    const timeSummary = event.raceInfo.timeLimits.map(t => `${t.distance} ${formatTimeLimit(t.hours, t.minutes)}`).join(', ');
    faqItems.push({
      question: `${event.name} 제한시간은?`,
      answer: `${event.name} 제한시간은 ${timeSummary}입니다.`,
    });
  }
  if (event.courseInfo) {
    faqItems.push({
      question: `${event.name} 코스 난이도는?`,
      answer: `${event.courseInfo.difficulty} 난이도의 ${event.courseInfo.terrain} 코스입니다.${event.courseInfo.elevationGain ? ` 총 고저차 ${event.courseInfo.elevationGain}m.` : ''}${event.courseInfo.certification && event.courseInfo.certification !== '없음' ? ` ${event.courseInfo.certification} 공인 코스.` : ''}`,
    });
  }
  if (event.logistics?.publicTransport) {
    faqItems.push({
      question: `${event.name} 대중교통 접근 방법은?`,
      answer: event.logistics.publicTransport + (event.logistics.shuttle ? ` 셔틀버스: ${event.logistics.shuttle}` : ''),
    });
  }

  const faqJsonLd = faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      <div className="space-y-4">
        {/* 브레드크럼 */}
        <nav className="section-card border border-[var(--accent-line)] bg-white/80 px-4 py-3" aria-label="breadcrumb">
          <ol className="flex items-center gap-1.5 text-sm">
            <li><Link href="/" className="text-secondary transition hover:text-sky-700">홈</Link></li>
            <li className="text-tertiary">/</li>
            <li><Link href="/marathon" className="text-secondary transition hover:text-sky-700">마라톤 대회</Link></li>
            <li className="text-tertiary">/</li>
            <li className="text-primary font-medium truncate">{event.name}</li>
          </ol>
        </nav>

        {/* 히어로 섹션 */}
        <div className={`section-card border border-[var(--accent-line)] bg-white/88 p-6 ${event.isMajor ? 'ring-2 ring-sky-200' : ''}`}>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {event.isMajor && (
              <span className="inline-flex items-center gap-1 rounded bg-[var(--navy)] px-2 py-1 text-xs font-bold text-white">
                <Trophy className="h-3 w-3" />
                MAJOR
              </span>
            )}
            <span className={`rounded-full px-3 py-1 text-sm font-medium ${statusStyles[event.status]}`}>
              {event.status}
            </span>
            {daysUntil > 0 && (
              <span className="rounded-full bg-surface px-3 py-1 text-sm text-secondary">
                D-{daysUntil}
              </span>
            )}
            {daysUntil === 0 && (
              <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">
                오늘 개최
              </span>
            )}
            {daysUntil < 0 && (
              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-500">
                대회 종료
              </span>
            )}
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">{event.name}</h1>

          {event.description && (
            <p className="text-secondary mb-4">{event.description}</p>
          )}

          <div className="space-y-2 text-secondary">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 shrink-0 text-sky-700" />
              <span className="font-medium">{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 shrink-0 text-sky-700" />
              <span>{event.location}</span>
            </div>
          </div>

          {event.website && (
            <a
              href={event.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[var(--navy)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--navy-soft)]"
            >
              <ExternalLink className="h-4 w-4" />
              공식 사이트 바로가기
            </a>
          )}
        </div>

        {/* 참가 종목 */}
        <div className="section-card border border-[var(--accent-line)] bg-white/84 p-6">
          <h2 className="text-lg font-bold text-primary mb-4">참가 종목</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {event.distances.map((distance) => (
              <div
                key={distance}
                className={`rounded-lg border p-4 ${distanceColors[distance] || 'bg-gray-50 border-gray-200 text-gray-700'}`}
              >
                <span className="text-lg font-bold">{distance}</span>
                <p className="text-sm mt-1 opacity-80">{distanceDescriptions[distance]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 대회 정보 */}
        <div className="section-card border border-[var(--accent-line)] bg-white/84 p-6">
          <h2 className="text-lg font-bold text-primary mb-4">대회 정보</h2>
          <dl className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-surface p-3">
              <dt className="text-xs text-secondary mb-1">지역</dt>
              <dd className="font-medium text-primary">{event.region}</dd>
            </div>
            <div className="rounded-lg bg-surface p-3">
              <dt className="text-xs text-secondary mb-1">개최 장소</dt>
              <dd className="font-medium text-primary">{event.location}</dd>
            </div>
            <div className="rounded-lg bg-surface p-3">
              <dt className="text-xs text-secondary mb-1">대회 일시</dt>
              <dd className="font-medium text-primary">{formatDate(event.date)}</dd>
            </div>
            <div className="rounded-lg bg-surface p-3">
              <dt className="text-xs text-secondary mb-1">접수 상태</dt>
              <dd>
                <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${statusStyles[event.status]}`}>
                  {event.status}
                </span>
              </dd>
            </div>
          </dl>
        </div>

        {/* 코스 정보 */}
        {event.courseInfo && (
          <div className="section-card border border-[var(--accent-line)] bg-white/84 p-6">
            <h2 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
              <Route className="h-5 w-5 text-sky-700" />
              코스 정보
            </h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium ${difficultyStyles[event.courseInfo.difficulty]}`}>
                  <CircleGauge className="h-3.5 w-3.5" />
                  {event.courseInfo.difficulty}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                  <Mountain className="h-3.5 w-3.5" />
                  {event.courseInfo.terrain}
                </span>
                {event.courseInfo.certification && event.courseInfo.certification !== '없음' && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
                    <Award className="h-3.5 w-3.5" />
                    {event.courseInfo.certification} 공인
                  </span>
                )}
                {event.courseInfo.isLoopCourse !== undefined && (
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
                    {event.courseInfo.isLoopCourse ? '순환 코스' : '편도 코스'}
                  </span>
                )}
              </div>

              <dl className="grid gap-3 sm:grid-cols-2">
                {event.courseInfo.elevationGain !== undefined && (
                  <div className="rounded-lg bg-surface p-3">
                    <dt className="text-xs text-secondary mb-1">총 고저차</dt>
                    <dd className="font-medium text-primary">{event.courseInfo.elevationGain}m</dd>
                  </div>
                )}
                {event.courseInfo.courseDescription && (
                  <div className="rounded-lg bg-surface p-3 sm:col-span-2">
                    <dt className="text-xs text-secondary mb-1">코스 설명</dt>
                    <dd className="font-medium text-primary text-sm leading-relaxed">{event.courseInfo.courseDescription}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        )}

        {/* 참가 안내 */}
        {event.raceInfo && (
          <div className="section-card border border-[var(--accent-line)] bg-white/84 p-6">
            <h2 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-sky-700" />
              참가 안내
            </h2>
            <div className="space-y-5">
              {/* 출발 시간 & 참가 규모 */}
              {(event.raceInfo.startTime || event.raceInfo.expectedParticipants) && (
                <div className="flex flex-wrap gap-4">
                  {event.raceInfo.startTime && (
                    <div className="flex items-center gap-2 rounded-lg bg-surface px-4 py-2.5">
                      <Clock className="h-4 w-4 text-sky-700" />
                      <div>
                        <span className="text-xs text-secondary">출발 시간</span>
                        <p className="font-bold text-primary">{event.raceInfo.startTime}</p>
                      </div>
                    </div>
                  )}
                  {event.raceInfo.expectedParticipants && (
                    <div className="flex items-center gap-2 rounded-lg bg-surface px-4 py-2.5">
                      <Users className="h-4 w-4 text-sky-700" />
                      <div>
                        <span className="text-xs text-secondary">예상 참가 규모</span>
                        <p className="font-bold text-primary">{event.raceInfo.expectedParticipants.toLocaleString('ko-KR')}명</p>
                      </div>
                    </div>
                  )}
                  {event.raceInfo.aidStations && (
                    <div className="flex items-center gap-2 rounded-lg bg-surface px-4 py-2.5">
                      <Droplets className="h-4 w-4 text-sky-700" />
                      <div>
                        <span className="text-xs text-secondary">에이드 스테이션</span>
                        <p className="font-bold text-primary">{event.raceInfo.aidStations}개소 {event.raceInfo.aidInterval && <span className="text-sm font-normal text-secondary">({event.raceInfo.aidInterval})</span>}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 참가비 */}
              {event.raceInfo.entryFees && event.raceInfo.entryFees.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-secondary mb-2">참가비</h3>
                  <div className="overflow-hidden rounded-lg border border-border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-surface">
                          <th className="px-4 py-2 text-left font-medium text-secondary">종목</th>
                          <th className="px-4 py-2 text-right font-medium text-secondary">참가비</th>
                        </tr>
                      </thead>
                      <tbody>
                        {event.raceInfo.entryFees.map((fee) => (
                          <tr key={fee.distance} className="border-t border-border">
                            <td className="px-4 py-2 font-medium text-primary">{fee.distance}</td>
                            <td className="px-4 py-2 text-right text-primary">{formatFee(fee.fee)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* 제한 시간 */}
              {event.raceInfo.timeLimits && event.raceInfo.timeLimits.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-secondary mb-2">제한 시간</h3>
                  <div className="overflow-hidden rounded-lg border border-border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-surface">
                          <th className="px-4 py-2 text-left font-medium text-secondary">종목</th>
                          <th className="px-4 py-2 text-right font-medium text-secondary">제한 시간</th>
                        </tr>
                      </thead>
                      <tbody>
                        {event.raceInfo.timeLimits.map((tl) => (
                          <tr key={tl.distance} className="border-t border-border">
                            <td className="px-4 py-2 font-medium text-primary">{tl.distance}</td>
                            <td className="px-4 py-2 text-right text-primary flex items-center justify-end gap-1">
                              <Timer className="h-3.5 w-3.5 text-secondary" />
                              {formatTimeLimit(tl.hours, tl.minutes)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 교통/편의 */}
        {event.logistics && (
          <div className="section-card border border-[var(--accent-line)] bg-white/84 p-6">
            <h2 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
              <Bus className="h-5 w-5 text-sky-700" />
              교통 · 편의
            </h2>
            <dl className="grid gap-3">
              {event.logistics.publicTransport && (
                <div className="flex items-start gap-3 rounded-lg bg-surface p-3">
                  <Bus className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />
                  <div>
                    <dt className="text-xs text-secondary mb-0.5">대중교통</dt>
                    <dd className="font-medium text-primary text-sm">{event.logistics.publicTransport}</dd>
                  </div>
                </div>
              )}
              {event.logistics.shuttle && (
                <div className="flex items-start gap-3 rounded-lg bg-surface p-3">
                  <Bus className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                  <div>
                    <dt className="text-xs text-secondary mb-0.5">셔틀버스</dt>
                    <dd className="font-medium text-primary text-sm">{event.logistics.shuttle}</dd>
                  </div>
                </div>
              )}
              {event.logistics.parking && (
                <div className="flex items-start gap-3 rounded-lg bg-surface p-3">
                  <Car className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
                  <div>
                    <dt className="text-xs text-secondary mb-0.5">주차</dt>
                    <dd className="font-medium text-primary text-sm">{event.logistics.parking}</dd>
                  </div>
                </div>
              )}
              {event.logistics.bagStorage !== undefined && (
                <div className="flex items-start gap-3 rounded-lg bg-surface p-3">
                  <Package className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                  <div>
                    <dt className="text-xs text-secondary mb-0.5">짐보관</dt>
                    <dd className="font-medium text-primary text-sm">{event.logistics.bagStorage ? '짐보관 서비스 제공' : '짐보관 서비스 없음'}</dd>
                  </div>
                </div>
              )}
            </dl>
          </div>
        )}

        {/* 뒤로가기 */}
        <div className="pt-2">
          <Link
            href="/marathon"
            className="inline-flex items-center gap-1.5 text-sm text-secondary transition hover:text-sky-700"
          >
            <ArrowLeft className="h-4 w-4" />
            전체 대회 목록으로 돌아가기
          </Link>
        </div>

        <div className="h-28 md:h-20" aria-hidden="true" />
      </div>
    </>
  );
}
