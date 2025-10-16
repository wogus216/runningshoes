import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getBrands, getProduct, getProducts } from "@/lib/data";
import { ReviewSection } from "@/components/review-section";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { CompareTable } from "@/components/compare-table";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getProducts().map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProduct(params.slug);
  const brands = getBrands();
  const brand = product ? brands.find((item) => item.slug === product.brandSlug) : undefined;

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be located.",
    };
  }

  const description = `${product.name} by ${brand?.name ?? "Unknown brand"}: ${product.description}`;

  return {
    title: product.name,
    description,
    openGraph: {
      title: product.name,
      description,
      images: [
        {
          url: `https://example.com${product.image}`,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProduct(params.slug);

  if (!product) {
    notFound();
  }

  const brand = getBrands().find((item) => item.slug === product.brandSlug);
  const comparableProducts = getProducts()
    .filter((item) => item.slug !== product.slug && item.tags?.some((tag) => product.tags?.includes(tag)))
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [`https://example.com${product.image}`],
    description: product.description,
    brand: {
      "@type": "Brand",
      name: brand?.name ?? "Unknown",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.price,
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating.toString(),
      reviewCount: product.reviews.length.toString(),
    },
    review: product.reviews.map((review) => ({
      "@type": "Review",
      reviewBody: review.comment,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating.toString(),
      },
      author: {
        "@type": "Person",
        name: review.author,
      },
    })),
  };

  const jsonLdScript = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return (
    <div className="space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript }} />

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/brands">Brands</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/brands/${brand?.slug ?? ""}`}>{brand?.name ?? "Unknown"}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <div className="relative aspect-video overflow-hidden rounded-3xl border bg-muted">
            <Image src={product.image} alt={product.name} fill className="object-cover" priority />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="text-sm">
              {brand?.name}
            </Badge>
            {product.tags?.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-lg text-muted-foreground">{product.description}</p>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-semibold">${product.price}</span>
            <span className="text-sm text-muted-foreground">
              {product.rating.toFixed(1)} ({product.reviews.length} reviews)
            </span>
          </div>
          <Button asChild size="lg">
            <Link href="/compare?ids=metaspeed-sky-4,on-cloudsurfer-max">Compare with competitors</Link>
          </Button>
        </div>

        <aside className="space-y-6 rounded-3xl border bg-card p-8 shadow-sm">
          <h2 className="text-xl font-semibold">Specs</h2>
          <dl className="grid grid-cols-1 gap-4 text-sm">
            <Spec label="Category" value={product.category} />
            <Spec label="Weight" value={product.weight} />
            <Spec label="Stack Height" value={product.stackHeight} />
            <Spec label="Heel-Toe Drop" value={product.drop} />
            <Spec label="Surface" value={product.surface} />
            <Spec label="Ideal For" value={product.idealFor} />
          </dl>
          <Separator />
          <h3 className="text-lg font-semibold">Key Features</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </aside>
      </section>

      <ReviewSection product={product} />

      {comparableProducts.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Compare Similar Shoes</h2>
            <Button asChild variant="ghost">
              <Link href={`/compare?ids=${[product.slug, ...comparableProducts.map((item) => item.slug)].join(",")}`}>
                Launch comparison
              </Link>
            </Button>
          </div>
          <CompareTable products={[product, ...comparableProducts]} condensed />
        </section>
      )}
    </div>
  );
}

type SpecProps = {
  label: string;
  value: string;
};

function Spec({ label, value }: SpecProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border bg-background px-4 py-3">
      <dt className="font-medium text-muted-foreground">{label}</dt>
      <dd className="font-semibold">{value}</dd>
    </div>
  );
}
