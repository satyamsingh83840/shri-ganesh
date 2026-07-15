"use client";

import { Sliders } from "lucide-react";

type Product = {
  specifications: Record<string, string>;
};

interface Props {
  product: Product;
}

export default function Specifications({ product }: Props) {
  if (
    !product.specifications ||
    Object.keys(product.specifications).length === 0
  ) {
    return null;
  }

  return (
    <section className="w-full py-16 px-0">
      <div className="w-full max-w-none">
        {/* Modern Full-Width Section Header */}
        <div className="flex items-center gap-3 mb-8 border-b border-border/60 pb-5 px-4 sm:px-6 lg:px-8">
          <Sliders className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-bold tracking-widest text-foreground uppercase">
            Technical Specifications
          </h2>
        </div>

        {/* Premium Edge-to-Edge List Layout */}
        <div className="divide-y divide-border/40 border-b border-border/40">
          {Object.entries(product.specifications).map(([key, value]) => (
            <div
              key={key}
              className="flex flex-row items-center justify-between py-5 px-4 sm:px-6 lg:px-8 transition-colors duration-200 hover:bg-muted/30"
            >
              {/* Parameter Name */}
              <div className="pr-4">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {key}
                </span>
              </div>

              {/* Parameter Value */}
              <div className="text-right">
                <span className="text-sm sm:text-base font-bold text-foreground tracking-tight">
                  {value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
