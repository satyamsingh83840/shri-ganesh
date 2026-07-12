"use client";

import products from "@/data/products";
import ProductCard from "./product-card";

interface Props {
  currentSlug: string;
  category: string;
}

// Map the accurate type locally for cross-reference processing
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
    <section className="w-full py-12 border-t border-neutral-100 dark:border-neutral-900/60">
      <div className="mb-8 flex items-end justify-between px-4 sm:px-0">
        <div>
          <h2 className="text-2xl font-black tracking-tight text-neutral-900 dark:text-neutral-50 md:text-3xl">
            Related Collections
          </h2>
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mt-1">
            More from {category}
          </p>
        </div>

        <span className="hidden sm:inline-flex text-xs font-medium text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-900 px-3 py-1 rounded-full">
          Swipe to explore →
        </span>
      </div>

      <div className="relative w-full">
        <div className="no-scrollbar flex w-full gap-6 overflow-x-auto pb-6 pt-2 px-4 sm:px-0 snap-x snap-mandatory scroll-smooth">
          {related.map((product) => (
            <div
              key={product.id}
              className="w-[280px] shrink-0 snap-start transition-all duration-500 ease-out hover:-translate-y-1 sm:w-[320px]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
