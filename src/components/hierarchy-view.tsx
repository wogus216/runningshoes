import { useMemo } from "react";
import type { Shoe } from "@/types/shoe";
import { categoryOrder, groupShoesByCategory } from "@/lib/data/shoes";
import { CategorySection } from "@/components/category-section";

type HierarchyViewProps = {
  shoes: Shoe[];
};

export function HierarchyView({ shoes }: HierarchyViewProps) {
  const grouped = useMemo(() => groupShoesByCategory(shoes), [shoes]);
  const orderedCategories = useMemo(() => {
    const known = categoryOrder.filter((category) => grouped[category]?.length);
    const remaining = Object.keys(grouped)
      .filter((category) => !categoryOrder.includes(category))
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
          <CategorySection category={category} shoes={sortedModels} indexOffset={runningIndex} key={category} />
        );

        runningIndex += sortedModels.length;
        return section;
      })}
    </div>
  );
}
