"use client";

import products from "@/data/products";
import ProductCard from "./product-card";
import { Sparkles } from "lucide-react";

interface Props {
  currentSlug: string;
  category: string;
}

type ProductField = {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  images: string[];
  featured?: boolean;
  bestseller?: boolean;
  description: string;
  features: string[];
  specifications: Record<string, string>;
};

export default function RelatedProducts({ currentSlug, category }: Props) {
  const related = (products as unknown as ProductField[])
    .filter(
      (product) =>
        product.slug !== currentSlug && product.category === category,
    )
    .slice(0, 6);

  if (related.length === 0) return null;

  return (
    <section className="w-full py-16 border-t border-border/60">
      {/* Full-Width Header Element */}
      <div className="mb-10 flex items-end justify-between px-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex items-center gap-2 text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-widest block">
              More from {category}
            </span>
          </div>
          <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl mt-1">
            Related Products
          </h2>
        </div>

        {/* Dynamic Mobile hint indication */}
        <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/80 border border-border/80 bg-muted/30 px-3 py-1.5 rounded-xl hidden sm:inline-flex shadow-3xs">
          Swipe to explore →
        </span>
      </div>

      {/* Premium Full-Width Horizontal Touch Carousel */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-full gap-5 overflow-x-auto pb-8 pt-2 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {related.map((product) => (
            <div
              key={product.id}
              className="w-[250px] sm:w-[280px] md:w-[300px] shrink-0 snap-start transition-transform duration-300 ease-out active:scale-98"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
