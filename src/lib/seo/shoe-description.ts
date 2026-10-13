import type { Shoe } from '@/types/shoe';

type DescriptionShoe = Pick<Shoe, 'name' | 'description' | 'price' | 'specs' | 'category' | 'koreanFootFit'>;

export function shoeDescription(shoe: DescriptionShoe, brandLabel: string): string {
  const footWidth = { narrow: '발볼 좁음', standard: '발볼 표준', wide: '발볼 넓음' };
  const parts = [
    `${brandLabel} ${shoe.name}`,
    shoe.specs?.weight ? `무게 ${shoe.specs.weight}g` : null,
    shoe.koreanFootFit?.toBoxWidth ? footWidth[shoe.koreanFootFit.toBoxWidth] : null,
    shoe.price ? `정가 ${shoe.price.toLocaleString('ko-KR')}원` : null,
    shoe.category ? `${shoe.category} 러닝화` : null,
  ].filter(Boolean);
  const details = `${parts.join(' · ')} — 사이즈·장단점·추천 대상까지 한국 러너 후기`;
  const budget = 160 - details.length - 3;
  if (!shoe.description || budget < 15) return details;

  let summary = shoe.description.trim();
  if (summary.length > budget) {
    const sentences = summary.match(/.*?[.!?](?=\s|$)/g) || [];
    const firstSentence = sentences[0]?.trim();
    if (firstSentence && firstSentence.length <= budget) {
      summary = firstSentence;
    } else {
      const cut = summary.slice(0, budget - 1);
      const space = cut.lastIndexOf(' ');
      summary = `${space > 0 ? cut.slice(0, space) : cut}…`;
    }
  }
  return `${[parts[0], summary, ...parts.slice(1)].join(' · ')} — 사이즈·장단점·추천 대상까지 한국 러너 후기`;
}
