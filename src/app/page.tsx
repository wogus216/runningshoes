import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getProducts } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HomePage() {
  const products = getProducts();
  const highlighted = products.slice(0, 2);

  return (
    <div className="space-y-12">
      <section className="flex flex-col gap-6 rounded-3xl bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-8 py-12 text-white shadow-lg lg:flex-row lg:items-center">
        <div className="flex-1 space-y-4">
          <p className="text-sm uppercase tracking-widest text-blue-100">Run Faster, Go Further</p>
          <h1 className="text-4xl font-bold sm:text-5xl">Find Your Perfect Running Shoe</h1>
          <p className="text-lg text-blue-50">
            Explore detailed specs, brand stories, and in-depth reviews to choose the right pair for your next run.
          </p>
          <div className="flex gap-3">
            <Button asChild size="lg" variant="secondary">
              <Link href="/compare?ids=metaspeed-sky-4,on-cloudsurfer-max">
                Compare Top Shoes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10">
              <Link href="/brands">Browse Brands</Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-1 flex-wrap justify-center gap-4">
          {highlighted.map((product) => (
            <ProductCard key={product.slug} product={product} orientation="vertical" accent="light" />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Latest Drops</h2>
          <Button asChild variant="ghost">
            <Link href="/products/metaspeed-sky-4">
              View Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="cushion">Max Cushion</TabsTrigger>
            <TabsTrigger value="tempo">Tempo</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="cushion">
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {products
                .filter((product) => product.tags?.includes("cushion"))
                .map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="tempo">
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {products
                .filter((product) => product.tags?.includes("tempo"))
                .map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
