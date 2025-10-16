import brands from "@/data/brands.json";
import products from "@/data/products.json";
import type { Brand, Product } from "@/lib/types";

const brandList = brands as Brand[];
const productList = products as Product[];

export function getBrands(): Brand[] {
  return brandList;
}

export function getProducts(): Product[] {
  return productList;
}

export function getProductsByBrand(brandSlug: string): Product[] {
  return productList.filter((product) => product.brandSlug === brandSlug);
}

export function getProduct(slug: string): Product | undefined {
  return productList.find((product) => product.slug === slug);
}
