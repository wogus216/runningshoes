import { Fragment } from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import DOMPurify from 'isomorphic-dompurify';
import { ChevronLeft } from 'lucide-react';
import { getPostBySlug, getAllPosts, getRelatedPostsMeta } from '@/lib/data/blog';
import { categoryLabels } from '@/types/blog';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, ADSENSE_SLOTS } from '@/lib/constants';
import { BlogCard } from '@/components/blog/blog-card';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { FaqSection } from '@/components/blog/faq-section';
import { AdSlot } from '@/components/ads/ad-slot';
import { splitContentAtMidH2 } from '@/lib/blog/split-content';
import { MarathonShoeBridge } from '@/components/marathon/shoe-bridge';
import { img, withCdnImages } from '@/lib/image';

// 블로그 대회 글 제목에서 거리 추론 (신발/젤 CTA 매핑용)
function inferRaceDistances(title: string): string[] {
  const d: string[] = [];
  if (/트레일|스카이|울트라|100\s?[kK]|50\s?[kK]/.test(title)) d.push('트레일');
  if (/풀코스|풀마라톤|마라톤/.test(title)) d.push('풀코스');
  if (/하프/.test(title)) d.push('하프');
  if (/10\s?[kK]|10km/.test(title)) d.push('10K');
  return d.length ? d : ['풀코스', '하프', '10K'];
}

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: '포스트를 찾을 수 없습니다',
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author }],
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPostsMeta(slug);

  const publishDate = new Date(post.publishedAt).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const articleImage = post.thumbnail
    ? (post.thumbnail.startsWith('http') ? post.thumbnail : `${SITE_URL}${post.thumbnail}`)
    : DEFAULT_OG_IMAGE;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: [articleImage],
    author: {
      '@type': 'Person',
      '@id': `${SITE_URL}/about#sancho-editor`,
      name: post.author,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: DEFAULT_OG_IMAGE },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
    articleSection: categoryLabels[post.category],
    inLanguage: 'ko-KR',
    keywords: post.tags.join(', '),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: '블로그', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${slug}` },
    ],
  };

  const faqJsonLd = post.faqs && post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null;

  const eventJsonLd = post.event ? {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: post.event.name,
    startDate: post.event.startDate,
    ...(post.event.endDate && { endDate: post.event.endDate }),
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: post.event.location.name,
      ...(post.event.location.address && {
        address: { '@type': 'PostalAddress', streetAddress: post.event.location.address, addressCountry: 'KR' },
      }),
    },
    ...(post.event.organizer && {
      organizer: { '@type': 'Organization', name: post.event.organizer },
    }),
    ...(post.event.url && { url: post.event.url }),
    ...(post.event.offers && post.event.offers.length > 0 && {
      offers: post.event.offers.map((offer) => ({
        '@type': 'Offer',
        name: offer.name,
        price: offer.priceKrw,
        priceCurrency: 'KRW',
        availability: 'https://schema.org/InStock',
        ...(offer.availabilityEnds && { validThrough: offer.availabilityEnds }),
        ...(offer.url && { url: offer.url }),
      })),
    }),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      {eventJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
      )}
    <div className="max-w-[768px] mx-auto xl:max-w-none xl:flex xl:justify-center xl:gap-10">
      {/* 메인 콘텐츠 */}
      <div className="w-full max-w-[768px]">
        {/* 뒤로가기 */}
        <Link prefetch={false}
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          목록으로
        </Link>

        {/* Velog 스타일 헤더 - 카드 래퍼 없음 */}
        <header className="mb-8">
          {/* 제목 */}
          <h1 className="text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>

          {/* 작성자 · 날짜 */}
          <div className="flex items-center gap-2 text-base text-gray-500 mb-4">
            <span className="font-semibold text-gray-900">{post.author}</span>
            <span className="text-gray-300">&middot;</span>
            <span>{publishDate}</span>
          </div>

          {/* 태그 - Velog 스타일 teal pill */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 text-sm font-medium rounded-full bg-teal-50 text-teal-600">
              {categoryLabels[post.category]}
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm rounded-full bg-gray-100 text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* 구분선 */}
        <hr className="border-gray-200 mb-10" />

        {/* 히어로 이미지 */}
        {post.thumbnail && (
          <div className="relative -mx-4 mb-10 aspect-[21/9] overflow-hidden rounded-[28px] sm:-mx-0">
            <img
              src={img(post.thumbnail)}
              alt={post.title}
              className="h-full w-full object-cover"
              style={{ margin: 0, borderRadius: '28px', boxShadow: 'none' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-[28px]" />
          </div>
        )}

        {/* 본문 - 카드 래퍼 없음, 깔끔한 타이포그래피.
            H2 3개 이상이면 중간에서 분할해 in-article 광고 슬롯 1개 삽입 */}
        <article>
          {(() => {
            const sanitized = DOMPurify.sanitize(post.content, {
              ALLOWED_TAGS: ['h2', 'h3', 'h4', 'p', 'ul', 'ol', 'li', 'strong', 'em', 'a', 'img', 'figure', 'figcaption', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'br', 'blockquote', 'span', 'div', 'sup', 'sub', 'hr'],
              ALLOWED_ATTR: ['href', 'src', 'alt', 'class', 'target', 'rel', 'loading', 'decoding', 'width', 'height'],
            });
            const segments = splitContentAtMidH2(withCdnImages(sanitized));
            return segments.map((seg, i) => (
              <Fragment key={i}>
                <div data-blog-content dangerouslySetInnerHTML={{ __html: seg }} />
                {i < segments.length - 1 && (
                  <AdSlot
                    slot={ADSENSE_SLOTS.blogInArticle}
                    format="fluid"
                    layout="in-article"
                    layoutKey="-fb+5w+4e-db+86"
                    label="본문 중간 광고"
                  />
                )}
              </Fragment>
            ));
          })()}
        </article>

        {/* 대회 글 → 신발/젤 CTA (신발 링크 없는 대회/거리 글에만 자동 삽입) */}
        {(() => {
          const hasShoeLink = post.content.includes('/shoes/');
          const titleHasRace = /마라톤|대회|레이스|에키덴|스카이|울트라|하프|10\s?[kK]|풀코스|러닝.{0,4}이벤트|접수/.test(post.title);
          if (!titleHasRace || hasShoeLink || post.category === 'review') return null;
          return (
            <div className="mt-10">
              <MarathonShoeBridge distances={inferRaceDistances(post.title)} eventName="이 대회" />
            </div>
          );
        })()}

        {/* FAQ 섹션 (faqs 데이터 있을 때만) */}
        {post.faqs && post.faqs.length > 0 && <FaqSection faqs={post.faqs} />}

        {/* 본문 끝 광고 (FAQ/관련 포스트 위) */}
        <AdSlot
          slot={ADSENSE_SLOTS.blogBottom}
          format="auto"
          label="본문 하단 광고"
        />

        {/* 하단 구분선 */}
        <hr className="border-gray-200 my-12" />

        {/* Velog 스타일 작성자 프로필 */}
        <div className="flex items-start gap-4 mb-16">
          <div className="w-16 h-16 rounded-full bg-stone-200 flex items-center justify-center text-xl font-bold text-stone-500 shrink-0">
            {post.author.charAt(0)}
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900">{post.author}</p>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed">
              러닝화 데이터 분석 에디터 · 하프마라톤 완주<br />
              AI 기반 논문 분석과 RunRepeat 랩 데이터를 활용해 한국 러너 맞춤 리뷰를 작성합니다.
            </p>
          </div>
        </div>

        {/* 관련 포스트 */}
        {relatedPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl font-bold text-gray-900 mb-6">관심 있을 만한 포스트</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </section>
        )}

        {/* 하단 네비게이션 */}
        <div className="pb-8">
          <Link prefetch={false}
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            목록으로 돌아가기
          </Link>
        </div>
      </div>

      {/* Velog 스타일 TOC 사이드바 */}
      <TableOfContents />
    </div>
    </>
  );
}
