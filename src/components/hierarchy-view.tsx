import { useMemo } from "react";
import { categoryOrder } from "@/types/shoe";
import type { CardShoe } from "@/lib/data/shoes";
import { groupByCategory } from "@/lib/shoes-utils";
import { CategorySection } from "@/components/category-section";

type HierarchyViewProps = {
  shoes: CardShoe[];
  onTagClick?: (tag: string) => void;
};

export function HierarchyView({ shoes, onTagClick }: HierarchyViewProps) {
  const grouped = useMemo(() => groupByCategory(shoes), [shoes]);
  const orderedCategories = useMemo(() => {
    const known = categoryOrder.filter((category) => grouped[category]?.length);
    const knownSet = new Set<string>(categoryOrder);
    const remaining = Object.keys(grouped)
      .filter((category) => !knownSet.has(category))
      .sort();
    return [...known, ...remaining];
  }, [grouped]);

  let runningIndex = 0;

  return (
    <div className="space-y-10">
      {orderedCategories.map((category) => {
        const models = grouped[category];
        if (!models?.length) {
          return null;
        }

        const sortedModels = [...models].sort((a, b) => {
          if (b.rating !== a.rating) {
            return b.rating - a.rating;
          }
          return a.name.localeCompare(b.name, "ko");
        });

        const section = (
          <CategorySection category={category} shoes={sortedModels} indexOffset={runningIndex} key={category} onTagClick={onTagClick} />
        );

        runningIndex += sortedModels.length;
        return section;
      })}
    </div>
  );
}
