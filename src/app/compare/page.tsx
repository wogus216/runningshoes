import type { Metadata } from "next";
import { Suspense } from "react";
import { getProducts } from "@/lib/data";
import { CompareTable } from "@/components/compare-table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ComparePageProps = {
  searchParams: {
    ids?: string | string[];
  };
};

export const metadata: Metadata = {
  title: "Compare Shoes",
  description: "Compare running shoe specs side-by-side to find the best fit for your runs.",
};

export default function ComparePage({ searchParams }: ComparePageProps) {
  const { ids: rawIds } = searchParams;
  const ids =
    rawIds === undefined
      ? []
      : Array.isArray(rawIds)
      ? rawIds.flatMap((value) => value.split(","))
      : rawIds.split(",");
  const normalizedIds = ids.map((id) => id.trim()).filter(Boolean);
  const products = getProducts().filter((product) => normalizedIds.includes(product.slug));

  const total = products.length;

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Compare Running Shoes</h1>
        <p className="text-muted-foreground">
          Enter product slugs in the URL query (`/compare?ids=slug-one,slug-two`) to customize this comparison table.
        </p>
      </header>

      <Card>
        <CardContent className="space-y-6 p-6">
          <div className="flex items-center gap-3">
            <Badge variant="outline">Comparing {total} shoes</Badge>
            {normalizedIds.length > total && (
              <p className="text-sm text-muted-foreground">Unknown product slugs were ignored.</p>
            )}
          </div>
          <Suspense fallback={<p className="text-sm text-muted-foreground">Loading comparison…</p>}>
            {products.length > 0 ? (
              <CompareTable products={products} />
            ) : (
              <p className="text-sm text-muted-foreground">
                No products were found for the provided IDs. Try using `metaspeed-sky-4` or `on-cloudsurfer-max`.
              </p>
            )}
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
