import { Star } from "lucide-react";
import type { Product } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type ReviewSectionProps = {
  product: Product;
};

export function ReviewSection({ product }: ReviewSectionProps) {
  return (
    <section className="grid gap-8 lg:grid-cols-[1fr_0.7fr]">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            Runner Reviews
            <Badge variant="secondary">{product.rating.toFixed(1)} avg</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {product.reviews.map((review) => (
            <div key={review.author} className="space-y-2 rounded-xl border bg-muted/40 p-5">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{review.author}</p>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium">{review.rating.toFixed(1)}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{review.comment}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Share Your Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Name" aria-label="Name" />
          <Input placeholder="Rating (1-5)" aria-label="Rating" type="number" min={1} max={5} step={0.1} />
          <Textarea placeholder="What did you think of the ride?" rows={5} />
        </CardContent>
        <Separator />
        <CardFooter>
          <Button className="w-full" disabled>
            Submit review (demo)
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
