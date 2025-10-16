import type { Product } from "@/lib/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CompareTableProps = {
  products: Product[];
  condensed?: boolean;
};

const columns = [
  { key: "name", label: "Model" },
  { key: "price", label: "Price" },
  { key: "weight", label: "Weight" },
  { key: "stackHeight", label: "Stack" },
  { key: "drop", label: "Drop" },
  { key: "surface", label: "Surface" },
  { key: "rating", label: "Rating" },
];

export function CompareTable({ products, condensed = false }: CompareTableProps) {
  return (
    <div className={cn("overflow-x-auto rounded-2xl border", condensed ? "text-sm" : "text-base")}>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key} className={condensed ? "px-3 py-2" : "px-6 py-4"}>
                {column.label}
              </TableHead>
            ))}
            <TableHead className={condensed ? "px-3 py-2" : "px-6 py-4"}>Tags</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.slug}>
              <TableCell className={condensed ? "px-3 py-2 font-semibold" : "px-6 py-4 font-semibold"}>
                <Link href={`/products/${product.slug}`} className="text-primary hover:underline">
                  {product.name}
                </Link>
              </TableCell>
              <TableCell className={condensed ? "px-3 py-2" : "px-6 py-4"}>${product.price}</TableCell>
              <TableCell className={condensed ? "px-3 py-2" : "px-6 py-4"}>{product.weight}</TableCell>
              <TableCell className={condensed ? "px-3 py-2" : "px-6 py-4"}>{product.stackHeight}</TableCell>
              <TableCell className={condensed ? "px-3 py-2" : "px-6 py-4"}>{product.drop}</TableCell>
              <TableCell className={condensed ? "px-3 py-2" : "px-6 py-4"}>{product.surface}</TableCell>
              <TableCell className={condensed ? "px-3 py-2" : "px-6 py-4"}>
                {product.rating.toFixed(1)}
              </TableCell>
              <TableCell className={condensed ? "px-3 py-2" : "px-6 py-4"}>
                <div className="flex flex-wrap gap-2">
                  {product.tags?.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
