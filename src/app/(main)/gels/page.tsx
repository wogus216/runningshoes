import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getGels, groupGelsByCategory } from '@/lib/data/gels';
import { SITE_NAME } from '@/lib/constants';
import { gelCategoryOrder } from '@/types/gel';

export const metadata: Metadata = {
  title: `에너지 젤 리뷰 | 마라톤 에너지 젤 비교 분석 - ${SITE_NAME}`,
  description: '마라톤·러닝용 에너지 젤 10종 비교 분석. Maurten, SiS, GU, 양갱까지. 위장 안정성, 탄수화물 과학, 가성비 기준으로 평가.',
  keywords: '에너지 젤, 마라톤 에너지 젤, 에너지 젤 추천, 에너지 젤 비교, 양갱, Maurten, GU, SiS',
  alternates: { canonical: '/gels' },
};

const categoryDescriptions: Record<string, { emoji: string; desc: string }> = {
  '프리미엄': { emoji: '🏆', desc: '기록 경신을 위한 최첨단 에너지 젤' },
  '스테디셀러': { emoji: '⭐', desc: '한국 러너들이 검증한 인기 제품' },
  '가성비': { emoji: '💰', desc: '훈련과 입문에 최적인 가격대' },
};

export default function GelsPage() {
  const grouped = groupGelsByCategory(getGels());

  return (
    <div className="space-y-8">
      {/* 헤더 */}
      <div className="text-center py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          에너지 젤 리뷰
        </h1>
        <p className="text-secondary max-w-2xl mx-auto">
          마라톤·러닝용 에너지 젤 10종을 탄수화물 과학, 위장 안정성, 한국 러너 관점에서 분석했습니다.
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
              <span className="text-2xl">{info?.emoji}</span>
              <div>
                <h2 className="text-xl font-bold text-primary">{category}</h2>
                <p className="text-sm text-secondary">{info?.desc}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {gelsInCategory.map((gel) => (
                <Link
                  key={gel.slug}
                  href={`/gels/${gel.slug}`}
                  className="section-card p-4 hover:shadow-lg transition group"
                >
                  {/* 이미지 */}
                  <div className="aspect-square bg-surface rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                    {gel.image ? (
                      <Image
                        src={gel.image}
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
                      {gel.nutritionFacts.totalCarbs}g 탄수화물
                    </span>
                    <span className="text-xs px-1.5 py-0.5 bg-surface rounded text-secondary">
                      {gel.nutritionFacts.calories}kcal
                    </span>
                    {gel.nutritionFacts.caffeine > 0 && (
                      <span className="text-xs px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/30 rounded text-amber-700 dark:text-amber-300">
                        카페인 {gel.nutritionFacts.caffeine}mg
                      </span>
                    )}
                  </div>

                  {/* 가격 & 평점 */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary">
                      {gel.price?.toLocaleString()}원
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500 text-sm">★</span>
                      <span className="text-sm font-medium text-primary">{gel.rating}</span>
                    </div>
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
