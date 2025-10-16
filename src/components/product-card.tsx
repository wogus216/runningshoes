import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  orientation?: "vertical" | "horizontal";
  accent?: "light" | "default";
};

export function ProductCard({ product, orientation = "vertical", accent = "default" }: ProductCardProps) {
  const tags = product.tags ?? [];

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg",
        accent === "light" && "border-transparent bg-white/10 text-white shadow-none"
      )}
    >
      <CardHeader className={orientation === "horizontal" ? "space-y-2" : ""}>
        <div className={cn("relative", orientation === "vertical" ? "aspect-[4/3]" : "h-40 w-full")}>
          <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant={accent === "light" ? "secondary" : "outline"}>
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-xl">{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className={cn("text-lg font-semibold", accent === "light" && "text-white")}>${product.price}</p>
        <p className="text-sm text-muted-foreground">{product.category}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant={accent === "light" ? "secondary" : "outline"} className="w-full">
          <Link href={`/products/${product.slug}`}>
            View details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
