import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getGels, groupGelsByCategory } from '@/lib/data/gels';
import { SITE_URL } from '@/lib/constants';
import { gelCategoryOrder } from '@/types/gel';
import { img } from '@/lib/image';

export function generateMetadata(): Metadata {
  // 종수는 데이터에서 산출한다 — 메타에 카운트를 하드코딩하면 젤이 늘고 줄 때 조용히 틀려진다
  const count = getGels().length;
  const productCount = getGels().filter((gel) => !gel.isProductCategory).length;
  const categoryCount = count - productCount;

  return {
    // 사이트명은 app/layout.tsx 의 title.template(`%s | ${SITE_NAME}`)이 붙인다 — 여기서 또 붙이면 두 번 나온다
    title: '에너지 젤·보급식 정보 | 제품 표시와 변형 비교',
    description: `젤 제품 ${productCount}종과 식품군 안내 ${categoryCount}개를 구분해 소개합니다. 제품별 성분 표시·맛·카페인 변형·사진 출처와 확인하지 못한 항목을 상세 페이지에서 확인하세요.`,
    keywords: '에너지 젤, 마라톤 에너지 젤, 에너지 젤 추천, 에너지 젤 비교, 양갱, Maurten, GU, SiS, 마라톤 보급식, 위장 안정성',
    alternates: { canonical: '/gels' },
  };
}

const categoryDescriptions: Record<string, string> = {
  '젤 제품': '같은 제품도 맛과 용량에 따라 성분이 달라집니다.',
  '식품군': '제품별 성분은 구매한 포장 표시를 확인하세요.',
};

export default function GelsPage() {
  const allGels = getGels();
  const grouped = groupGelsByCategory(allGels);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '에너지 젤·보급식 정보 목록',
    description: '젤 제품별 정보와 식품군 안내의 상세 페이지 목록',
    numberOfItems: allGels.length,
    itemListElement: allGels.map((gel, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${gel.brand} ${gel.name}`,
      url: `${SITE_URL}/gels/${gel.slug}`,
    })),
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 헤더 */}
      <div className="py-2">
        <h1 className="text-3xl font-bold text-primary">
          에너지 젤·보급식 정보
        </h1>
        <p className="mt-2 text-sm text-secondary">
          젤 제품 {allGels.filter((gel) => !gel.isProductCategory).length}종 · 식품군 안내 {allGels.filter((gel) => gel.isProductCategory).length}개
        </p>
      </div>

      {/* 카테고리별 제품 */}
      {gelCategoryOrder.map((category) => {
        const gelsInCategory = grouped[category];
        if (!gelsInCategory?.length) return null;
        const info = categoryDescriptions[category];

        return (
          <section key={category} className="space-y-4">
            <div className="flex items-center gap-2">
              <div>
                <h2 className="text-xl font-bold text-primary">{category}</h2>
                <p className="text-sm text-secondary">{info}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {gelsInCategory.map((gel) => (
                <Link
                  key={gel.slug}
                  href={`/gels/${gel.slug}`}
                  className="section-card group grid grid-cols-[5rem_minmax(0,1fr)] items-center gap-x-3 p-3 sm:block sm:p-4"
                >
                  {/* 이미지 */}
                  <div className="row-span-4 aspect-square bg-surface rounded-[4px] sm:mb-3 flex items-center justify-center overflow-hidden">
                    {gel.image ? (
                      <Image
                        src={img(gel.image)}
                        alt={gel.name}
                        width={200}
                        height={200}
                        className="object-contain w-full h-full p-2 group-hover:scale-105 transition-transform"
                      />
                    ) : (
                      <span className="text-4xl">🧴</span>
                    )}
                  </div>

                  {/* 브랜드 */}
                  <p className="text-xs text-secondary mb-1">{gel.brand}</p>

                  {/* 이름 */}
                  <h3 className="font-bold text-primary group-hover:text-accent transition mb-2">
                    {gel.name}
                  </h3>

                  {/* 핵심 스펙 */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    <span className="text-xs px-1.5 py-0.5 bg-surface rounded text-secondary">
                      {gel.nutritionFacts.totalCarbs === undefined ? '탄수화물 미확인' : `${gel.nutritionFacts.totalCarbs}g 탄수화물`}
                    </span>
                    <span className="text-xs px-1.5 py-0.5 bg-surface rounded text-secondary">
                      {gel.nutritionFacts.calories === undefined ? '열량 미확인' : `${gel.nutritionFacts.calories}kcal`}
                    </span>
                    {(gel.nutritionFacts.caffeine ?? 0) > 0 && (
                      <span className="text-xs px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/30 rounded text-amber-700 dark:text-amber-300">
                        카페인 {gel.nutritionFacts.caffeine}mg
                      </span>
                    )}
                  </div>

                  {/* 가격 */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary">
                      {gel.price === undefined ? '현재 가격 미확인' : `${gel.price.toLocaleString()}원`}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
