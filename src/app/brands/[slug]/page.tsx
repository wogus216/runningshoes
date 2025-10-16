import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ExternalLink } from "lucide-react";
import { getBrands, getProductsByBrand } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";

type BrandPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getBrands().map((brand) => ({ slug: brand.slug }));
}

export function generateMetadata({ params }: BrandPageProps): Metadata {
  const brand = getBrands().find((item) => item.slug === params.slug);

  if (!brand) {
    return {
      title: "Brand Not Found",
      description: "The requested brand could not be located.",
    };
  }

  return {
    title: brand.name,
    description: brand.description,
  };
}

export default function BrandPage({ params }: BrandPageProps) {
  const brand = getBrands().find((item) => item.slug === params.slug);

  if (!brand) {
    notFound();
  }

  const products = getProductsByBrand(brand.slug);

  return (
    <div className="space-y-10">
      <header className="rounded-3xl border bg-card p-10 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Badge variant="outline" className="text-sm uppercase tracking-wide">
              {brand.origin}
            </Badge>
            <h1 className="mt-4 text-4xl font-bold">{brand.name}</h1>
            <p className="mt-2 max-w-2xl text-lg text-muted-foreground">{brand.description}</p>
          </div>
          <Button asChild variant="secondary">
            <Link href="/brands">
              Back to brands
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <BrandFact label="Founded" value={brand.founded} />
          <BrandFact label="Signature Technology" value={brand.signatureTech} />
          <BrandFact
            label="Official Site"
            value={
              <Link href={brand.website} className="inline-flex items-center gap-2 text-primary" target="_blank" rel="noreferrer">
                Visit {brand.name}
                <ExternalLink className="h-4 w-4" />
              </Link>
            }
          />
        </div>
      </header>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Top Models</h2>
          <Button asChild variant="ghost">
            <Link href={`/compare?ids=${products.map((product) => product.slug).join(",")}`}>
              Compare lineup
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

type BrandFactProps = {
  label: string;
  value: ReactNode;
};

function BrandFact({ label, value }: BrandFactProps) {
  return (
    <div className="rounded-xl border bg-background p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
      <Separator className="my-3" />
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}
