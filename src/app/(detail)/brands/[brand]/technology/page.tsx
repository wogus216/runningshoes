import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getBrandBySlug, getAllBrandSlugs } from '@/lib/data/brands';
import { getShoes } from '@/lib/data/shoes';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import { BrandTechnologyHero } from '@/components/brand/brand-technology-hero';
import { TechnologyList } from '@/components/brand/technology-list';

type BrandTechnologyPageProps = {
  params: Promise<{
    brand: string;
  }>;
};

// Static Generation을 위한 경로 생성
export function generateStaticParams() {
  const brandSlugs = getAllBrandSlugs();
  return brandSlugs.map((brand) => ({
    brand,
  }));
}

// SEO 메타데이터 생성
export async function generateMetadata({ params }: BrandTechnologyPageProps): Promise<Metadata> {
  const { brand: brandSlug } = await params;
  const brand = getBrandBySlug(brandSlug);

  if (!brand) {
    return {
      title: '브랜드를 찾을 수 없습니다',
      description: '요청하신 브랜드 정보를 찾을 수 없습니다.',
    };
  }

  const techNames = brand.technologies.slice(0, 3).map((t) => t.name).join(', ');

  const title = `${brand.name} 러닝화 기술 가이드 | ${techNames} 상세 분석`;
  const description = `${brand.name}의 혁신적 러닝화 기술 완벽 해석. ${techNames} 등 미드솔, 플레이트, 쿠셔닝 기술의 원리와 장점을 상세히 설명합니다.`;

  return {
    title,
    description,
    keywords: [
      brand.name,
      `${brand.name} 기술`,
      '러닝화 기술',
      '미드솔',
      '쿠셔닝',
      ...brand.technologies.map((t) => t.name),
    ],
    authors: [{ name: SITE_NAME }],
    openGraph: {
      type: 'article',
      locale: 'ko_KR',
      siteName: SITE_NAME,
      title: `${brand.name} 러닝화 기술 가이드`,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${brand.name} 러닝화 기술 가이드`,
      description,
    },
    alternates: {
      canonical: `/brands/${brandSlug}/technology`,
    },
  };
}

export default async function BrandTechnologyPage({ params }: BrandTechnologyPageProps) {
  const { brand: brandSlug } = await params;
  const brand = getBrandBySlug(brandSlug);

  if (!brand) {
    notFound();
  }

  // 이 브랜드의 신발 목록 가져오기
  const allShoes = getShoes();
  const brandShoes = allShoes.filter(
    (shoe) => shoe.brand.toLowerCase() === brand.name.toLowerCase()
  );

  // JSON-LD 구조화 데이터
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${brand.name} 러닝화 기술 가이드`,
    description: brand.description,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/brands/${brandSlug}/technology`,
    },
  };

  // BreadcrumbList JSON-LD
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '홈',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: brand.name,
        item: `${SITE_URL}/brands/${brandSlug}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '기술 가이드',
        item: `${SITE_URL}/brands/${brandSlug}/technology`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="space-y-6">
        {/* 브레드크럼 */}
        <nav className="text-sm text-secondary">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-accent transition">
                홈
              </Link>
            </li>
            <li className="text-tertiary">/</li>
            <li>
              <span className="text-primary font-medium">{brand.name}</span>
            </li>
            <li className="text-tertiary">/</li>
            <li>
              <span className="text-accent font-medium">기술 가이드</span>
            </li>
          </ol>
        </nav>

        {/* 히어로 섹션 */}
        <BrandTechnologyHero brand={brand} techCount={brand.technologies.length} />

        {/* 기술 목록 - 모든 기술을 스크롤로 확인 */}
        <TechnologyList brand={brand} shoes={brandShoes} />

        {/* 하단 여백 */}
        <div className="h-10" aria-hidden="true" />
      </div>
    </>
  );
}
