export type Review = {
  author: string;
  rating: number;
  comment: string;
};

export type Product = {
  slug: string;
  name: string;
  brandSlug: string;
  description: string;
  price: number;
  image: string;
  tags?: string[];
  category: string;
  weight: string;
  stackHeight: string;
  drop: string;
  surface: string;
  idealFor: string;
  features: string[];
  rating: number;
  reviews: Review[];
};

export type Brand = {
  slug: string;
  name: string;
  description: string;
  origin: string;
  founded: string;
  signatureTech: string;
  website: string;
};
