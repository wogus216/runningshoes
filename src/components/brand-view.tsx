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
            className="rounded-[32px] border border-white/20 bg-white/10 p-6 shadow-[0_30px_60px_-55px_rgba(15,23,42,0.65)] backdrop-blur-2xl transition hover:border-white/40 lg:p-8 scroll-mt-32"
          >
            <header className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Brand</p>
                <div className="flex items-center gap-3">
                  <h3 className="text-3xl font-black tracking-tight text-slate-900">{brand}</h3>
                  {techUrl && (
                    <Link
                      href={techUrl as `/brands/${string}/technology`}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-medium rounded-full hover:bg-accent/20 transition"
                    >
                      <FlaskConical className="w-3.5 h-3.5" />
                      기술 보기
                    </Link>
                  )}
                </div>
              </div>
              <Badge className="border-white/20 bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-700">
                {models.length} models
              </Badge>
            </header>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
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
