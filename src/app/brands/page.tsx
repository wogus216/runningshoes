import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { getBrands } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Brands",
  description: "Learn about the leading running shoe brands and explore their latest products.",
};

export default function BrandsPage() {
  const brands = getBrands();

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Brands</h1>
        <p className="text-muted-foreground">
          Dive into brand histories, signature technologies, and their most beloved running shoes.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {brands.map((brand) => (
          <Card key={brand.slug} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">{brand.name}</CardTitle>
                <Badge variant="secondary">{brand.origin}</Badge>
              </div>
              <CardDescription>{brand.description}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2 md:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Founded</p>
                <p className="text-lg font-semibold">{brand.founded}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Signature Tech</p>
                <p className="text-lg font-semibold">{brand.signatureTech}</p>
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild>
                <Link href={`/brands/${brand.slug}`}>
                  View lineup
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
