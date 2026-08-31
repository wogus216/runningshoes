import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getMarathonEventById, getMarathonEvents } from '@/lib/data/marathon';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, ADSENSE_SLOTS } from '@/lib/constants';
import { Calendar, MapPin, ExternalLink, ArrowLeft, Trophy, Mountain, Clock, Users, Bus, Car, Package, Timer, Droplets, Route, Award, CircleGauge, Wallet, FileText, Gift } from 'lucide-react';
import { MarathonShoeBridge } from '@/components/marathon/shoe-bridge';
import { CourseMap } from '@/components/marathon/course-map';
import { AdSlot } from '@/components/ads/ad-slot';

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

/** 검색 스니펫이 잘리는 지점. 한글은 대략 이 길이에서 끊긴다 */
const META_DESC_MAX = 155;

/** 문장·어절 경계에서 자른다 — 낱말 중간에서 끊긴 스니펫은 그 자체로 신뢰를 깎는다 */
function truncateAtWord(text: string, max: number): string {
  const clean = text.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
  if (!clean) return '';
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const sentenceEnd = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('다. '));
  if (sentenceEnd > max * 0.5) return cut.slice(0, sentenceEnd + 1);
  const space = cut.lastIndexOf(' ');
  return (space > max * 0.5 ? cut.slice(0, space) : cut) + '…';
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

  // 날짜는 연도를 떼고(검색 시점에 그해 대회인 게 자명하다) 요일만 남긴다.
  const shortDate = formatDate(event.date).replace(/^\d{4}년 /, '');

  // ── title ────────────────────────────────────────────────────────────
  // 2026-08-31 개편. 그 전에는 `{대회명} | {장소}` 였는데, 검색자가 원하는 단어가
  // 하나도 없었다. Bing 실측에서 "손기정마라톤" 6위가 우리였고 5위가 러닝위키였는데
  // 저쪽 타이틀은 "…접수 일정·정보 총정리 | 참가비·코스"였다 — 같은 유형 페이지끼리
  // 갈린 건 순위가 아니라 **타이틀이 약속하는 내용**이었다.
  //
  //   · 회차(제22회)는 검색어로 거의 안 쓰이면서 20~30자를 먹는다 → 타이틀에서만 벗긴다
  //     (데이터는 그대로 두므로 본문·구조화 데이터에는 남는다)
  //   · 의도 키워드는 대회명 **바로 뒤**에 붙인다. 뒤로 밀면 SERP 에서 잘린다
  //   · 접수가 끝난 대회에 "접수"를 걸면 클릭 후 실망을 준다 → 상태로 갈린다
  //     ('마감'과 '대회종료'는 검색자 입장에서 같은 상태라 둘로만 나눈다)
  const shortName = event.name
    .replace(/\s*\(제\d+회\)/, '')
    // 영문 병기 괄호도 벗긴다 — "(ASICS SEOUL SHINMUN GO FREE RUN)" 하나가 33자다.
    // ⚠️ 괄호 안에 한글이 있으면 남긴다. "(뉴발란스 런유어웨이)"는 장식이 아니라
    //    실제 최다 유입 검색어라("런유어웨이" 145노출) 빼면 매칭을 잃는다.
    .replace(/\s*\([^)가-힣]*\)/g, '')
    .trim();
  const shortPlace = event.location.replace(/\s*\([^)]*\)\s*$/, '');
  const dateOnly = shortDate.replace(/\s*\([일월화수목금토]\)/, '');
  const acceptsEntry = event.status === '접수중' || event.status === '접수예정';
  const intentKeywords = acceptsEntry ? '접수·참가비·코스' : '코스·참가비·기념품';
  // 사이트명은 app/layout.tsx 의 title.template(`%s | ${SITE_NAME}`)이 붙인다 — 여기서 또 붙이면 두 번 나온다.
  // 그 9자(" | 러닝의 모든것")까지 합쳐 60자 안에 들어가야 SERP 에서 안 잘린다.
  const titleHead = `${shortName} ${intentKeywords}`;
  const withPlace = `${titleHead} | ${dateOnly} ${shortPlace}`;
  // 영문 장문 대회명은 벗겨내도 길다 — 그때는 장소를 접는다(날짜가 장소보다 검색 의도에 가깝다)
  const title = withPlace.length <= 51 ? withPlace : `${titleHead} | ${dateOnly}`;

  // description 앞부분은 검색 스니펫으로 잘려 나가는 자리다(대략 155자).
  // 그 자리에 난이도·출발시각 같은 스펙을 넣으면 "지금 신청할 수 있나"라는 질문에
  // 답하지 못한 채 잘린다 — 접수 상태를 먼저 놓고, 대회 고유 설명이 그 뒤를 잇게 한다.
  // 대회명은 title 이 이미 말한다. 스니펫에서 반복하면 155자 중 20~30자를 그대로 버린다.
  const descParts = [`${shortDate} ${event.location}. ${event.distances.join('·')}.`];
  if (event.status === '접수중') {
    descParts.push(
      event.registrationEnd
        ? `접수중 (${formatDate(event.registrationEnd)} 마감).`
        : '접수중 (마감일 없이 선착순).',
    );
  } else if (event.status === '접수예정') {
    descParts.push(
      event.registrationStart ? `접수 ${formatDate(event.registrationStart)} 시작.` : '접수 예정.',
    );
  } else if (event.status === '마감') {
    descParts.push('접수 마감.');
  }
  // "~"는 "부터"로 읽히므로 배열 첫 항목(대개 풀코스=최고가)이 아니라 최저가를 쓴다
  const fees = event.raceInfo?.entryFees;
  if (fees?.length) {
    descParts.push(`참가비 ${formatFee(Math.min(...fees.map((f) => f.fee)))}~.`);
  }
  // 여기까지가 "언제·어디서·얼마"다. 남는 자리에만 대회 고유 설명을 채운다 —
  // 예전엔 event.description(300~700자)을 통째로 붙여 스니펫이 3~5배 초과했고,
  // 검색 결과에서는 어차피 잘려 나가 뒷부분이 버려지고 있었다.
  const head = descParts.join(' ');
  const room = META_DESC_MAX - head.length - 1;
  const tail = room >= 40 ? truncateAtWord(event.description ?? '', room) : '';
  const description = tail ? `${head} ${tail}` : head;

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
      // ⚠️ 페이지가 openGraph 를 지정하면 layout 의 것과 병합되지 않고 통째로 덮인다.
      // 이 한 줄이 없어서 대회 113개가 공유 카드에 이미지 없이 나가고 있었다(2026-08-31 확인).
      images: [DEFAULT_OG_IMAGE],
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

/** 참가비 요약 — 전 종목 같으면 "각 N만원", 다르면 종목별로 */
function feeSummary(fees?: { distance: string; fee: number }[]): string | null {
  if (!fees?.length) return null;
  const won = (n: number) => (n % 10_000 === 0 ? `${n / 10_000}만원` : `${(n / 10_000).toFixed(1)}만원`);
  const uniq = new Set(fees.map((f) => f.fee));
  return uniq.size === 1
    ? `참가비 각 ${won(fees[0].fee)}`
    : fees.map((f) => `${f.distance} ${won(f.fee)}`).join(' · ');
}

/**
 * 설명을 문장 단위로 쪼갠다.
 *
 * description 은 마크업 없는 한 덩어리라 화면에서 8줄짜리 회색 벽으로 렌더됐다
 * (2026-08-23 육안 확인). 글자 수는 336자로 길지 않은데 **한 문단에 대회 소개·작년
 * 이력·종목·참가비·접수일·래플 일정·소스 신뢰도·주의까지 10가지가 뭉쳐 있어**
 * 무엇 하나 눈에 걸리지 않았다. 종결어미 "~다." 기준으로 끊어 문단을 나눈다.
 */
function splitSentences(text?: string): string[] {
  if (!text) return [];
  // "~다." 만으로는 "(가격·수량 미공개). 반면 ~" 처럼 괄호로 끝나는 문장이 안 잘려
  // 접은 안쪽이 다시 벽이 됐다. 마침표+공백을 경계로 삼되, 소수점·약어는 뒤에 공백이
  // 없으므로 영향받지 않는다.
  return text
    .split(/(?<=\.)\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
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
  const feeText = feeSummary(event.raceInfo?.entryFees);
  const sentences = splitSentences(event.description);

  // JSON-LD: SportsEvent (enriched)
  const eventStatusMap: Record<string, string> = {
    '접수중': 'https://schema.org/EventScheduled',
    '마감': 'https://schema.org/EventScheduled',
    '대회종료': 'https://schema.org/EventScheduled',
  };

  const eventAvailability = event.status === '접수중'
    ? 'https://schema.org/InStock'
    : 'https://schema.org/SoldOut';

  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: event.name,
    startDate: event.date,
    endDate: event.date,
    description: event.description ||
      `${event.name} - ${event.location}에서 개최되는 ${event.distances.join(', ')} 마라톤 대회입니다.`,
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
    organizer: {
      '@type': 'Organization',
      name: event.name,
    },
    sport: 'Marathon',
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
      availability: eventAvailability,
      ...(event.website && { url: event.website }),
    }));
  } else {
    // entryFees 없는 경우 기본 Offer (접수 링크만)
    jsonLd.offers = {
      '@type': 'Offer',
      name: event.name,
      priceCurrency: 'KRW',
      availability: eventAvailability,
      ...(event.website && { url: event.website }),
    };
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

          {/*
            핵심 정보를 설명보다 **위**에 둔다. 종전에는 336자짜리 통짜 문단이 먼저 나와
            "언제·어디서·얼마" 를 찾으려면 8줄을 읽어야 했다(2026-08-23 육안 확인).
            방문자는 대회 정보를 확인하러 오지 대회 소개를 읽으러 오지 않는다 —
            같은 날 실측에서 마라톤 진입 세션의 88.8%가 이 페이지 하나만 보고 나갔다.
          */}
          <dl className="grid gap-2.5 text-secondary sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 shrink-0 text-sky-700" />
              <span className="font-medium text-primary">{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 shrink-0 text-sky-700" />
              <span>{event.location}</span>
            </div>
            {event.distances.length > 0 && (
              <div className="flex items-center gap-2">
                <Route className="h-5 w-5 shrink-0 text-sky-700" />
                <span>{event.distances.join(' · ')}</span>
              </div>
            )}
            {feeText && (
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5 shrink-0 text-sky-700" />
                <span>{feeText}</span>
              </div>
            )}
            {event.registrationStart && (
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 shrink-0 text-sky-700" />
                <span>
                  접수 <span className="font-medium text-primary">{formatDate(event.registrationStart)}</span> 시작
                </span>
              </div>
            )}
            {/*
              접수 마감을 이 자리에 세운다 — 신청 여부를 가르는 가장 급한 정보인데
              그동안 화면 어디에도 없었다(2026-08-25 실측: 경주 페이지에서 '마감' 관련
              문구 0건). 상단 배지는 '접수중'이라고만 해서 확인된 정보처럼 읽혔다.

              ⚠️ **마감일이 없으면 비워두지 않고 '미확인'이라고 적는다.** 빈 값은
              '마감일이 없다'가 아니라 '우리가 아직 확인 못 했다'는 뜻인데, 안 적으면
              전자로 읽혀 사용자가 여유 있다고 믿고 갔다가 마감을 맞는다.

              단, 공식이 마감일을 날짜로 고지하지 않는 대회(선착순 마감)가 많다 —
              2026-08-27 전수 확인 결과 접수중 29건 중 12건이 이 방식. 그 경우
              registrationNote 에 공식 표기를 그대로 담아 '미확인' 대신 보여준다.
              확인했는데 날짜가 없는 것과 확인 안 한 것은 다른 상태다.
            */}
            {(event.status === '접수중' || event.status === '접수예정') && (
              <div className="flex items-start gap-2">
                <Timer className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />
                {event.registrationEnd ? (
                  <span>
                    접수 <span className="font-medium text-primary">{formatDate(event.registrationEnd)}</span> 마감
                  </span>
                ) : event.registrationNote ? (
                  <span className="font-medium text-primary">{event.registrationNote}</span>
                ) : (
                  <span className="text-tertiary">
                    접수 마감일 <span className="font-medium">미확인</span>
                    {event.website ? ' — 공식 홈에서 확인하세요' : ''}
                  </span>
                )}
              </div>
            )}
          </dl>
          {/*
            status 를 마지막으로 확인한 날. 대회 status·참가비는 시간이 지나면 자동으로
            틀려지는 값이라, 언제 기준인지 없이 '접수중'만 보이면 그 자체가 오해를 만든다.
            현재 lastVerified 는 111개 중 18개(16%)에만 있어 없는 경우가 더 많다 —
            그 사실도 감추지 않는다.
          */}
          {(event.status === '접수중' || event.status === '접수예정') && (
            <p className="mt-3 font-mono text-[11px] text-tertiary">
              {event.lastVerified
                ? `접수 상태 ${formatDate(event.lastVerified)} 확인 기준`
                : '접수 상태 확인일 미기록 — 신청 전 공식 공지를 확인하세요'}
            </p>
          )}

          {/* 설명은 핵심 정보 아래로. 앞 2문장만 펼쳐 두고 나머지는 접는다 */}
          {sentences.length > 0 && (
            <div className="mt-4 space-y-2 text-sm leading-relaxed text-secondary">
              {sentences.slice(0, 2).map((s, i) => (
                <p key={i}>{s}</p>
              ))}
              {sentences.length > 2 && (
                <details>
                  <summary className="cursor-pointer font-medium text-sky-700 hover:underline">
                    접수·일정 자세히 ({sentences.length - 2}문장 더)
                  </summary>
                  <div className="mt-2 space-y-2">
                    {sentences.slice(2).map((s, i) => (
                      <p key={i}>{s}</p>
                    ))}
                  </div>
                </details>
              )}
            </div>
          )}

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
                className={`rounded-[4px] border p-4 ${distanceColors[distance] || 'bg-gray-50 border-gray-200 text-gray-700'}`}
              >
                <span className="text-lg font-bold">{distance}</span>
                <p className="text-sm mt-1 opacity-80">{distanceDescriptions[distance]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 대회 준비용 러닝화 브릿지 */}
        <MarathonShoeBridge distances={event.distances} eventName={event.name} />

        {/* 본문 중간 광고 — raceInfo/courseInfo 있는(콘텐츠 충분한) 대회만 노출 (얇은 페이지 광고과다 정책 회피) */}
        {(event.raceInfo || event.courseInfo) && (
          <AdSlot
            slot={ADSENSE_SLOTS.marathonInArticle}
            format="fluid"
            layout="in-article"
            layoutKey="-fb+5w+4e-db+86"
            label="본문 중간 광고"
          />
        )}

        {/* 대회 정보 */}
        <div className="section-card border border-[var(--accent-line)] bg-white/84 p-6">
          <h2 className="text-lg font-bold text-primary mb-4">대회 정보</h2>
          <dl className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[4px] bg-surface p-3">
              <dt className="text-xs text-secondary mb-1">지역</dt>
              <dd className="font-medium text-primary">{event.region}</dd>
            </div>
            <div className="rounded-[4px] bg-surface p-3">
              <dt className="text-xs text-secondary mb-1">개최 장소</dt>
              <dd className="font-medium text-primary">{event.location}</dd>
            </div>
            <div className="rounded-[4px] bg-surface p-3">
              <dt className="text-xs text-secondary mb-1">대회 일시</dt>
              <dd className="font-medium text-primary">{formatDate(event.date)}</dd>
            </div>
            <div className="rounded-[4px] bg-surface p-3">
              <dt className="text-xs text-secondary mb-1">접수 상태</dt>
              <dd>
                <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${statusStyles[event.status]}`}>
                  {event.status}
                </span>
              </dd>
              {event.lastVerified && (
                <p className="mt-1.5 text-[11px] leading-snug text-secondary">
                  {event.lastVerified.replace(/-/g, '.')} 확인 · 신청 전 공식 페이지에서 다시 확인하세요.
                </p>
              )}
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
              {event.courseInfo.gpx && (
                <CourseMap eventId={event.id} gpx={event.courseInfo.gpx} />
              )}

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
                  <div className="rounded-[4px] bg-surface p-3">
                    <dt className="text-xs text-secondary mb-1">총 고저차</dt>
                    <dd className="font-medium text-primary">{event.courseInfo.elevationGain}m</dd>
                  </div>
                )}
                {event.courseInfo.courseDescription && (
                  <div className="rounded-[4px] bg-surface p-3 sm:col-span-2">
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
                    <div className="flex items-center gap-2 rounded-[4px] bg-surface px-4 py-2.5">
                      <Clock className="h-4 w-4 text-sky-700" />
                      <div>
                        <span className="text-xs text-secondary">출발 시간</span>
                        <p className="font-bold text-primary">{event.raceInfo.startTime}</p>
                      </div>
                    </div>
                  )}
                  {event.raceInfo.expectedParticipants && (
                    <div className="flex items-center gap-2 rounded-[4px] bg-surface px-4 py-2.5">
                      <Users className="h-4 w-4 text-sky-700" />
                      <div>
                        <span className="text-xs text-secondary">예상 참가 규모</span>
                        <p className="font-bold text-primary">{event.raceInfo.expectedParticipants.toLocaleString('ko-KR')}명</p>
                      </div>
                    </div>
                  )}
                  {event.raceInfo.aidStations && (
                    <div className="flex items-center gap-2 rounded-[4px] bg-surface px-4 py-2.5">
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
                  <div className="overflow-hidden rounded-[4px] border border-border">
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
                  <div className="overflow-hidden rounded-[4px] border border-border">
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

        {/* 기념품 · 지급품 — 신청 전에 실제로 확인하는 항목이다 */}
        {event.raceKit && (
          <div className="section-card border border-[var(--accent-line)] bg-white/84 p-6">
            <h2 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
              <Gift className="h-5 w-5 text-sky-700" />
              기념품 · 지급품
            </h2>
            <div className="space-y-3">
              {/* 공식 발표 이미지만 넣는다(타입 주석 참조). 공식 기념품 이미지는 세로로 긴
                  안내 배너가 많아(실측 최대 1508×8191) 잘라서 미리보기하면 내용이 사라지고,
                  펼쳐 두면 페이지가 2~3화면 늘어난다 — 접기 안에 원본 비율로 담는다. */}
              {event.raceKit.images && event.raceKit.images.length > 0 && (
                <details className="rounded-[4px] border border-border bg-surface">
                  <summary className="cursor-pointer list-none px-3 py-2 text-sm font-semibold text-signal-dark [&::-webkit-details-marker]:hidden">
                    공식 기념품 이미지 {event.raceKit.images.length}장 보기
                  </summary>
                  <div className="space-y-2 px-3 pb-3">
                    {event.raceKit.images.map((im) => (
                      <Image
                        key={im.src}
                        src={im.src}
                        alt={im.alt}
                        width={800}
                        height={600}
                        sizes="(max-width: 768px) 100vw, 640px"
                        className="h-auto w-full rounded-[4px] border border-border"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </details>
              )}
              {event.raceKit.items && event.raceKit.items.length > 0 && (
                <ul className="flex flex-wrap gap-2">
                  {event.raceKit.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-[var(--accent-line)] bg-surface px-3 py-1 text-sm text-primary"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              )}
              {event.raceKit.byDistance?.map((b) => (
                <div key={b.distance} className="rounded-[4px] bg-surface p-3">
                  <dt className="text-xs text-secondary mb-1">{b.distance} 전용 기념품</dt>
                  <dd className="text-sm font-medium text-primary">{b.item}</dd>
                </div>
              ))}
              {/* 미확정을 비워 두면 '안 준다'로 읽힌다 — 공식 표기를 그대로 노출한다 */}
              {event.raceKit.pending && (
                <p className="rounded-[4px] border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-relaxed text-amber-800">
                  {event.raceKit.pending}
                </p>
              )}
              {event.raceKit.verifiedAt && (
                <p className="text-[11px] text-secondary">
                  공식 발표 기준 · {event.raceKit.verifiedAt} 확인
                </p>
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
                <div className="flex items-start gap-3 rounded-[4px] bg-surface p-3">
                  <Bus className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />
                  <div>
                    <dt className="text-xs text-secondary mb-0.5">대중교통</dt>
                    <dd className="font-medium text-primary text-sm">{event.logistics.publicTransport}</dd>
                  </div>
                </div>
              )}
              {event.logistics.shuttle && (
                <div className="flex items-start gap-3 rounded-[4px] bg-surface p-3">
                  <Bus className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                  <div>
                    <dt className="text-xs text-secondary mb-0.5">셔틀버스</dt>
                    <dd className="font-medium text-primary text-sm">{event.logistics.shuttle}</dd>
                  </div>
                </div>
              )}
              {event.logistics.parking && (
                <div className="flex items-start gap-3 rounded-[4px] bg-surface p-3">
                  <Car className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
                  <div>
                    <dt className="text-xs text-secondary mb-0.5">주차</dt>
                    <dd className="font-medium text-primary text-sm">{event.logistics.parking}</dd>
                  </div>
                </div>
              )}
              {event.logistics.bagStorage !== undefined && (
                <div className="flex items-start gap-3 rounded-[4px] bg-surface p-3">
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

        {/* 본문 하단 광고 */}
        <AdSlot slot={ADSENSE_SLOTS.marathonBottom} format="auto" label="본문 하단 광고" />

        <div className="h-28 md:h-20" aria-hidden="true" />
      </div>
    </>
  );
}
