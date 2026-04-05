import { useMemo } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { FlaskConical } from "lucide-react";
import type { Shoe } from "@/types/shoe";
import { getBrandsFromShoes, groupShoesByBrand } from "@/lib/data/shoes";
import { getBrandTechnologyUrl } from "@/lib/data/brands";
import { ShoeCard } from "@/components/shoe-card";

type BrandViewProps = {
  shoes: Shoe[];
  onTagClick?: (tag: string) => void;
};

export function BrandView({ shoes, onTagClick }: BrandViewProps) {
  const grouped = useMemo(() => groupShoesByBrand(shoes), [shoes]);
  const brands = useMemo(() => getBrandsFromShoes(shoes), [shoes]);

  let runningIndex = 0;

  return (
    <div className="space-y-12">
      {brands.map((brand) => {
        const models = grouped[brand];
        if (!models?.length) {
          return null;
        }

        const sortedModels = [...models].sort((a, b) => {
          if (b.rating !== a.rating) {
            return b.rating - a.rating;
          }
          return a.name.localeCompare(b.name, "ko");
        });

        const sectionId = `brand-${brand.replace(/\s+/g, '-')}`;

        const techUrl = getBrandTechnologyUrl(brand);

        const section = (
          <section
            key={brand}
            id={sectionId}
            className="scroll-mt-32 rounded-[32px] border border-[var(--accent-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(241,248,255,0.94))] p-4 shadow-[0_30px_60px_-55px_rgba(8,18,38,0.22)] backdrop-blur-2xl transition hover:border-sky-200 lg:p-8"
          >
            <header className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-700">Brand</p>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-black tracking-tight text-slate-900 md:text-3xl">{brand}</h3>
                  {techUrl && (
                    <Link
                      href={techUrl as `/brands/${string}/technology`}
                      className="flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-medium text-sky-700 transition hover:bg-sky-100"
                    >
                      <FlaskConical className="w-3.5 h-3.5" />
                      기술 보기
                    </Link>
                  )}
                </div>
              </div>
              <Badge className="hidden border-sky-100 bg-white/85 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-700 sm:inline-flex">
                {models.length} models
              </Badge>
            </header>

            <div className="mt-4 grid auto-rows-fr grid-cols-2 gap-2.5 md:mt-6 md:gap-4 xl:grid-cols-3">
              {sortedModels.map((shoe, index) => (
                <ShoeCard key={`${brand}-${shoe.name}`} shoe={shoe} index={runningIndex + index} onTagClick={onTagClick} />
              ))}
            </div>
          </section>
        );

        runningIndex += sortedModels.length;
        return section;
      })}
    </div>
  );
}
